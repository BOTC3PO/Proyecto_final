import re,glob
B="/home/javier/Proyecto_final/content/material/idiomas-extranjeros/"
CJKRE=re.compile("[぀-ヿ一-鿿　-〿＀-￯]")
LATRE=re.compile("[A-Za-zĉĝĥĵŝŭĈĜĤĴŜŬ]")
STOP=re.compile(r"^[>\-\s\*]*\**(Explicaci|Traducci|An[aá]lisis|Este ejemplo|Este intercambio|Este di[aá]logo|Nota|Uso|Observa|En este)",re.I)
SKIP=re.compile(r"^[>\-\s\*]*\**(Escenario|Situaci|Contexto|Di[aá]logo|Dialogo)\b",re.I)
def section(t):
    m=re.search(r"^#{2,3}\s*(?:\d+[.)]\s*)?Ejemplo extendido[^\n]*\n(.*?)(?=\n#{2,3} |\Z)",t,re.S|re.M)
    if not m:
        m=re.search(r"^\*\*Ejemplo extendido[^\n]*\n(.*?)(?=\n#{2,3} |\Z)",t,re.S|re.M)
    return m.group(1) if m else ""
def strip_md(s):
    s=re.sub(r"\*+","",s)
    return s.strip().lstrip(">-— \t").strip().strip("\"“”").strip()
def cjk_text(s):
    m=re.search("[「『](.+?)[」』]",s)
    if m: s=m.group(1)
    s=re.sub("[（(][^）)]*[）)]","",s)
    s=re.split(r"\s+[→–—]\s|\s+-\s",s)[0]
    return s.strip().strip("\"“”「」").strip()
def cjk_lines(path):
    t=open(path+"/teoria.md",encoding="utf-8").read(); out=[]; spk="A"; last=None
    for raw in section(t).split("\n"):
        if STOP.match(raw): break
        r=strip_md(raw)
        if not r or SKIP.match(raw): continue
        m=re.match(r"^([^:：「『]{1,30}?)\s*[:：]\s*(.*)$",r)
        if m and (not CJKRE.search(m.group(1)) or len(m.group(1))<=4):
            spk=m.group(1).strip(); r=m.group(2)
        txt=cjk_text(r) if r else ""
        if not txt: continue
        cj=len(CJKRE.findall(txt))
        if cj==0 or cj/max(1,len(re.sub(r"\s","",txt)))<0.7: continue
        out.append((spk,txt))
    return out
def eo_lines(path):
    t=open(path+"/teoria.md",encoding="utf-8").read(); out=[]
    for raw in section(t).split("\n"):
        if STOP.match(raw): break
        r=strip_md(raw)
        m=re.match(r"^([^:]{1,20}):\s*(.+)$",r)
        if m and len(LATRE.findall(m.group(2)))>=4:
            out.append((m.group(1).strip(),re.sub(r"\s*\([^)]*\)[.!?\s]*$","",m.group(2)).strip()))
    return out
def lines(path,lang): return eo_lines(path) if lang=="esperanto" else cjk_lines(path)
def topics():
    for lang in ("japones","chino","esperanto"):
        for d in sorted(glob.glob(B+lang+"/*/")):
            n=d.rstrip("/").split("/")[-1]
            if n.startswith(("listening","speaking")): yield lang,n,d.rstrip("/")
if __name__=="__main__":
    for lang,n,d in topics():
        L=lines(d,lang); print(f"## {lang}/{n}: {len(L)}")
        for s,x in L: print("   ",s,"|",x[:70])


# ---- idiomas latinos y coreano (audio previo defectuoso) -------------------
LANGCODE = {"ingles": "en", "aleman": "de", "frances": "fr", "italiano": "it", "portugues-br": "pt",
            "portugues-pt": "pt", "coreano": "ko"}
HANGUL = re.compile("[가-힣]")
_QUOTES = "„“”«»\"‘’"


def _es_idioma(txt, code):
    if code == "ko":
        h = len(HANGUL.findall(txt))
        return h >= 4 and h / max(1, len(re.sub(r"\s", "", txt))) > 0.5
    if len(LATRE.findall(txt)) < 4:
        return False
    from langdetect import DetectorFactory, detect
    DetectorFactory.seed = 0
    try:
        return detect(txt) == code
    except Exception:
        return False


def latin_lines(path, lang):
    code = LANGCODE[lang]
    t = open(path + "/teoria.md", encoding="utf-8").read(); out = []
    for raw in section(t).split("\n"):
        if STOP.match(raw):
            break
        r = strip_md(raw)
        if not r or SKIP.match(raw):
            continue
        spk = ""
        m = re.match(r"^([^:„“«]{1,25}?):\s*(.+)$", r)
        if m and len(m.group(1).split()) <= 3:
            spk, r = m.group(1).strip(), m.group(2)
        r = re.sub(r"\s*\([^)]*\)[.!?\s]*$", "", r)          # traducción final entre paréntesis
        r = re.sub(r"\s*\([^)]*\)[.!?\s]*$", "", r)
        r = r.strip().strip(_QUOTES).strip()
        if r and (_es_idioma(r, code) or (spk and len(LATRE.findall(r)) >= 4 and not _es_idioma(r, "es"))):
            out.append((spk or "A", r))
    return out
