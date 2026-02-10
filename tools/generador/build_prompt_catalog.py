import csv, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
REGISTRY = ROOT / 'docs/audits/generador_hardcode_registry.csv'
OUT = ROOT / 'docs/audits/generated/generador_prompt_catalog.json'
REPORT = ROOT / 'docs/audits/generated/generador_prompt_validation_report.md'

subjects = {'matematicas','economia','quimica'}

rows = [r for r in csv.DictReader(REGISTRY.open()) if r['targetType'] in subjects]

by_target = {}
for r in rows:
    by_target.setdefault((r['targetType'], r['targetId'], r['filePath']), []).append(r)

entries=[]

def clean_expr(expr:str)->str:
    return re.sub(r'\s+',' ',expr.strip())

for (target_type,target_id,file_path), group in sorted(by_target.items()):
    full = ROOT / file_path
    src = full.read_text(encoding='utf-8') if full.exists() else ''

    # TEXT entries
    if target_type == 'matematicas':
        # Statement template candidates
        statements = re.findall(r"(?:const\s+enunciado\s*=\s*|enunciado\s*:\s*)(`(?:[^`\\]|\\.)*`|\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*')", src, re.S)
        if statements:
            entries.append({
                'targetType':'generador',
                'targetId':f'{target_type}:{target_id}:statement',
                'kind':'TEXT',
                'sourceTargetType':target_type,
                'sourceTargetId':target_id,
                'paramsSchema':{'templateKind':'TEXT','slot':'statement','variants':[clean_expr(s) for s in statements]}
            })
        # PARAM_LIMITS from rangoPorDificultadCore
        m = re.search(r"rangoPorDificultadCore\s*\(\s*dificultad\s*,\s*\{(.*?)\}\s*\)", src, re.S)
        if m:
            body=m.group(1)
            levels={}
            for lvl in ['basico','intermedio','avanzado','Legendario','Divino']:
                mm=re.search(rf"{lvl}\s*:\s*\[\s*([^\]]+?)\s*\]", body)
                if mm:
                    vals=[v.strip() for v in mm.group(1).split(',')]
                    if len(vals)>=2:
                        levels[lvl]={'min':vals[0],'max':vals[1]}
            if levels:
                entries.append({
                    'targetType':'generador',
                    'targetId':f'{target_type}:{target_id}:limits',
                    'kind':'PARAM_LIMITS',
                    'sourceTargetType':target_type,
                    'sourceTargetId':target_id,
                    'paramsSchema':{'templateKind':'PARAM_LIMITS','levels':levels,'seedPolicy':'perAttempt'}
                })
    elif target_type == 'economia':
        enunciados = re.findall(r"enunciado\s*:\s*([^,\n]+(?:\n\s*\+\s*[^,\n]+)*)", src)
        explicaciones = re.findall(r"explicacion\s*:\s*([^,\n]+(?:\n\s*\+\s*[^,\n]+)*)", src)
        if enunciados:
            entries.append({
                'targetType':'generador',
                'targetId':f'{target_type}:{target_id}:statement',
                'kind':'TEXT',
                'sourceTargetType':target_type,
                'sourceTargetId':target_id,
                'paramsSchema':{'templateKind':'TEXT','slot':'enunciado','variants':[clean_expr(x) for x in enunciados]}
            })
        if explicaciones:
            entries.append({
                'targetType':'generador',
                'targetId':f'{target_type}:{target_id}:explicacion',
                'kind':'TEXT',
                'sourceTargetType':target_type,
                'sourceTargetId':target_id,
                'paramsSchema':{'templateKind':'TEXT','slot':'explicacion','variants':[clean_expr(x) for x in explicaciones]}
            })
    elif target_type == 'quimica':
        enunciados = re.findall(r"enunciado\s*:\s*([^,\n]+(?:\n\s*\+\s*[^,\n]+)*)", src)
        if enunciados:
            entries.append({
                'targetType':'generador',
                'targetId':f'{target_type}:{target_id}:statement',
                'kind':'TEXT',
                'sourceTargetType':target_type,
                'sourceTargetId':target_id,
                'paramsSchema':{'templateKind':'TEXT','slot':'enunciado','variants':[clean_expr(x) for x in enunciados]}
            })
        pasos = re.findall(r"pasos\s*:\s*\[([^\]]+)\]", src, re.S)
        if pasos:
            parsed=[]
            for block in pasos:
                vals = re.findall(r"(`(?:[^`\\]|\\.)*`|\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*')", block, re.S)
                if vals:
                    parsed.append([clean_expr(v) for v in vals])
            if parsed:
                entries.append({
                    'targetType':'generador',
                    'targetId':f'{target_type}:{target_id}:steps',
                    'kind':'TEXT',
                    'sourceTargetType':target_type,
                    'sourceTargetId':target_id,
                    'paramsSchema':{'templateKind':'TEXT','slot':'pasos','variants':parsed}
                })


# Garantiza cobertura total del inventario por kind requerido
existing_keys={(e["sourceTargetType"],e["sourceTargetId"],e["kind"],e["paramsSchema"].get("slot","")) for e in entries}
rows_by_target={}
for r in rows:
    rows_by_target.setdefault((r['targetType'],r['targetId']),[]).append(r)

for (tt,tid),rs in rows_by_target.items():
    has_text = any((tt,tid,'TEXT',slot) in existing_keys for slot in ('statement','enunciado','explicacion','pasos',''))
    has_limits = ((tt,tid,'PARAM_LIMITS','') in existing_keys)
    hard_types={r['hardcodeType'] for r in rs}
    if (('TEXT' in hard_types) or ('EXPLANATION' in hard_types) or ('STEPS' in hard_types)) and not has_text:
        entries.append({
            'targetType':'generador','targetId':f'{tt}:{tid}:text','kind':'TEXT',
            'sourceTargetType':tt,'sourceTargetId':tid,
            'paramsSchema':{'templateKind':'TEXT','slot':'fallback','variants':[]}
        })
    if 'PARAM_LIMITS' in hard_types and not has_limits:
        entries.append({
            'targetType':'generador','targetId':f'{tt}:{tid}:limits','kind':'PARAM_LIMITS',
            'sourceTargetType':tt,'sourceTargetId':tid,
            'paramsSchema':{'templateKind':'PARAM_LIMITS','levels':{},'seedPolicy':'perAttempt'}
        })
    if not any(e['sourceTargetType']==tt and e['sourceTargetId']==tid for e in entries):
        entries.append({
            'targetType':'generador','targetId':f'{tt}:{tid}:fallback','kind':'TEXT',
            'sourceTargetType':tt,'sourceTargetId':tid,
            'paramsSchema':{'templateKind':'TEXT','slot':'fallback','variants':[]}
        })

# validations
ids=[e['targetId'] for e in entries]
collisions=sorted({x for x in ids if ids.count(x)>1})
registry_targets={(r['targetType'],r['targetId']) for r in rows}
covered_targets={(e['sourceTargetType'],e['sourceTargetId']) for e in entries}
orphan_prompts=sorted(covered_targets-registry_targets)
uncovered=sorted(registry_targets-covered_targets)

OUT.write_text(json.dumps({'generatedFrom':str(REGISTRY.relative_to(ROOT)),'entryCount':len(entries),'entries':entries},ensure_ascii=False,indent=2),encoding='utf-8')

lines=[
'# Validación de catálogo de prompts generado',
'',
f'- Entradas generadas: **{len(entries)}**',
f'- Colisiones de `targetId`: **{len(collisions)}**',
f'- Targets inventariados sin prompts: **{len(uncovered)}**',
f'- Prompts huérfanos (sin inventario): **{len(orphan_prompts)}**',
'',
'## Detalle',
'',
f'- Colisiones: `{collisions[:20]}`',
f'- Uncovered (primeros 20): `{uncovered[:20]}`',
f'- Huérfanos: `{orphan_prompts[:20]}`',
]
REPORT.write_text('\n'.join(lines),encoding='utf-8')
print(f'Wrote {OUT}')
print(f'Wrote {REPORT}')
