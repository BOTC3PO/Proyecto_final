#!/usr/bin/env python3
"""Auditoría estructural de content/material (carpetas, dependencias, enlaces, cuestionarios, JSON).
Uso: python3 content/material/_qa_tools/auditar_material.py  — imprime categorías con conteos y ejemplos.
Ojo: varias categorías son heurísticas (ver _plan-faltantes/AUDITORIA-MATERIAL.md para saber cuáles son reales)."""
import os,re,json,glob,collections
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')
os.chdir(R)
SKIP={'examen-jefe','examen-jefe-idiomas','teoria-extendida','_audio-generado','_borradores-gemma','_qa_tools','_plan-faltantes'}
mats=[m for m in sorted(os.listdir('.')) if os.path.isdir(m) and m not in SKIP]
out=collections.defaultdict(list)
def add(k,v): out[k].append(v)
# topic dirs: any dir containing teoria.md or cuestionario.md
topics=set()
for p in glob.glob('**/teoria.md',recursive=True)+glob.glob('**/cuestionario.md',recursive=True):
    top=p.split('/')[0]
    if top in SKIP: continue
    topics.add(os.path.dirname(p))
for t in sorted(topics):
    tm=os.path.exists(t+'/teoria.md'); q=os.path.exists(t+'/cuestionario.md')
    if not tm: add('sin_teoria',t)
    if not q and not t.startswith('oficios/') : add('sin_cuestionario_no_oficio',t)
    if tm:
        s=open(t+'/teoria.md',encoding='utf-8').read()
        w=len(s.split())
        if w<250: add('teoria_<250_palabras',f'{t} ({w})')
        if '[IMAGEN' in s: add('placeholder_IMAGEN',t)
        if re.search(r'(?i)\bTODO\b|PENDIENTE|lorem|a determinar \(ver|XXX',s): add('marcadores_pendiente',t)
        if '�' in s or 'Ã' in s: add('mojibake',t)
        if not s.lstrip().startswith('#'): add('teoria_sin_titulo',t)
    if q:
        s=open(t+'/cuestionario.md',encoding='utf-8').read()
        n=len(re.findall(r'^### ',s,re.M)); b=len(re.findall(r'^```',s,re.M))//2
        if n<20: add('cuestionario_<20',f'{t} ({n})')
        if n!=b: add('cuestionario_bloques!=titulos',f'{t} ({n} vs {b})')
        titles=re.findall(r'^### \d+ — (.*)$',s,re.M)
        d=[x for x,c in collections.Counter(titles).items() if c>1]
        if d: add('cuestionario_titulos_repetidos',f'{t}: {d[:2]}')
        nums=[int(x) for x in re.findall(r'^### (\d+)',s,re.M)]
        if nums and nums!=list(range(1,len(nums)+1)): add('cuestionario_numeracion',t)
        temas=set(re.findall(r'^\s+tema: "([^"]+)"',s,re.M))
        if len(temas)>1: add('cuestionario_tema_inconsistente',f'{t}: {temas}')
        mat=set(re.findall(r'^\s+materia: "([^"]+)"',s,re.M))
        if len(mat)>1: add('cuestionario_materia_inconsistente',f'{t}: {mat}')
        # respuestas duplicadas en mc opciones
# dependencias: filas vs carpetas
for m in mats:
    dp=f'{m}/dependencias.md'
    if m=='oficios': pass
    dirs={d for d in os.listdir(m) if os.path.isdir(f'{m}/{d}')}
    if not os.path.exists(dp):
        add('materia_sin_dependencias',m); continue
    s=open(dp,encoding='utf-8').read()
    rows=re.findall(r'^\|\s*`([^`|]+?)/?`\s*\|',s,re.M)
    rowset={r.strip('/').split('/')[-1] if m!='oficios' else r.strip('/') for r in rows}
    if m!='oficios':
        for d in sorted(dirs):
            has=any(os.path.exists(f'{m}/{d}/{f}') for f in ('teoria.md','cuestionario.md')) or any(os.path.isdir(f'{m}/{d}/{x}') for x in os.listdir(f'{m}/{d}'))
            if d not in rowset and has: add('carpeta_sin_fila_dependencias',f'{m}/{d}')
        for r in sorted(rowset):
            if r not in dirs and not any(r==x for x in dirs):
                # row may refer to subpath
                pass
    # enlaces rotos en la columna depende de
    for line in s.splitlines():
        if not line.startswith('|') or line.startswith('|---'): continue
        cols=[c.strip() for c in line.strip('|').split('|')]
        if len(cols)<2: continue
        for ref in re.findall(r'`([^`]+)`',cols[1]):
            if ref.startswith(('http','#')) or ' ' in ref or '*' in ref: continue
            path=os.path.normpath(os.path.join(m,ref.rstrip('/')))
            if not os.path.exists(path) and not os.path.exists(os.path.normpath(os.path.join(m,ref))):
                add('dependencia_a_carpeta_inexistente',f'{m}: {ref}')
# enlaces relativos en teoria.md
for t in sorted(topics):
    if not os.path.exists(t+'/teoria.md'): continue
    s=open(t+'/teoria.md',encoding='utf-8').read()
    for ref in re.findall(r'`(\.\./[^`\s]+)`',s)+re.findall(r'\]\((\.\.?/[^)\s#]+)\)',s):
        p=os.path.normpath(os.path.join(t,ref.rstrip('/')))
        if not os.path.exists(p) and not os.path.exists(p+'.md'): add('enlace_roto_en_teoria',f'{t} -> {ref}')
# json
for f in glob.glob('teoria-extendida/*.json')+glob.glob('logros-*.json')+glob.glob('examen-jefe/_resumen.json'):
    try: json.load(open(f,encoding='utf-8'))
    except Exception as e: add('json_invalido',f'{f}: {e}')
# logros: claves iguales entre idiomas
for fam in ('logros-examen-jefe','logros-idiomas','logros-oficios'):
    base=json.load(open(f'{fam}.json',encoding='utf-8'))
    def keys(o):
        if isinstance(o,list): return {x.get('id',i) if isinstance(x,dict) else i for i,x in enumerate(o)}
        return set(o.keys()) if isinstance(o,dict) else set()
    kb=keys(base)
    for f in glob.glob(f'{fam}.*.json'):
        k=keys(json.load(open(f,encoding='utf-8')))
        if k!=kb: add('logros_claves_distintas',f'{f}: faltan {sorted(map(str,kb-k))[:3]} sobran {sorted(map(str,k-kb))[:3]} ({len(kb)} vs {len(k)})')
for k,v in sorted(out.items()):
    print(f'## {k}: {len(v)}')
    for x in v[:25]: print('  -',x)
    if len(v)>25: print(f'  ... y {len(v)-25} más')
print('TOTAL topics',len(topics))
