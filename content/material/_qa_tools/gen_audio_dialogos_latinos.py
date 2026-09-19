#!/usr/bin/env python3
"""
Regenera el audio de diálogos de it/fr/de/pt-PT/ko cuyo audio previo salía leyendo
marcas markdown/traducciones al español con voz del idioma equivocado.
Texto: "Ejemplo extendido en contexto" de la teoria.md final; motor Piper (una voz por idioma).
Uso: ~/tts-venv/bin/python gen_audio_dialogos_latinos.py [--verify]
"""
import json, sys
from difflib import SequenceMatcher
from pathlib import Path
import numpy as np
sys.path.insert(0, str(Path(__file__).parent))
import gen_audio_alfabetos as A
from gen_dialogos_extract import latin_lines, LANGCODE

SRC = A.OUT.parent / "idiomas-extranjeros"
VOZ = {"italiano": "it_IT-paola-medium", "frances": "fr_FR-tom-medium", "aleman": "de_DE-thorsten_emotional-medium",
       "portugues-pt": "pt_PT-tugão-medium", "coreano": "ko_KR-kss-medium"}
TEMAS = [("italiano", "speaking-b1"), ("italiano", "listening-b2"), ("italiano", "speaking-c1"),
         ("frances", "speaking-a2"), ("aleman", "speaking-c1"), ("portugues-pt", "speaking-b1"),
         ("portugues-pt", "listening-b2"), ("coreano", "listening-intermedio-alto"),
         ("aleman", "speaking-b2"), ("frances", "listening-b2"), ("frances", "listening-b1"),
         ("portugues-pt", "listening-c1"), ("coreano", "speaking-basico")]


def generar():
    eng = A.Engines()
    for lang, tema in TEMAS:
        L = latin_lines(str(SRC / lang / tema), lang)
        if not L:
            print("SIN LÍNEAS", lang, tema); continue
        chunks, sr0 = [], None
        for _, txt in L:
            pcm, sr = eng.piper(VOZ[lang], txt, 1.1)
            sr0 = sr0 or sr
            chunks += [pcm, np.zeros(int(sr * 0.5), dtype=np.int16)]
        pcm = np.concatenate(chunks)
        A.to_mp3(pcm, sr0, A.OUT / lang / f"{tema}.mp3")
        (A.OUT / lang / f"{tema}.txt").write_text("\n".join(f"{s}: {t}" for s, t in L) + "\n", encoding="utf-8")
        print(f"OK {lang}/{tema}: {len(L)} líneas, {len(pcm)/sr0:.1f}s", flush=True)


def verificar():
    from faster_whisper import WhisperModel
    m = WhisperModel("small", device="cpu", compute_type="int8")
    rep = {}
    for lang, tema in TEMAS:
        L = latin_lines(str(SRC / lang / tema), lang)
        if not L:
            continue
        segs, _ = m.transcribe(str(A.OUT / lang / f"{tema}.mp3"), language=LANGCODE[lang])
        heard = "".join(s.text for s in segs)
        r = SequenceMatcher(None, A.norm("".join(t for _, t in L)), A.norm(heard), autojunk=False).ratio()
        rep[f"{lang}/{tema}"] = round(r, 2)
        print(f"{lang}/{tema}: {r:.2f}", flush=True)
    (A.OUT / "_verificacion_dialogos_latinos.json").write_text(json.dumps(rep, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    verificar() if "--verify" in sys.argv else generar()
