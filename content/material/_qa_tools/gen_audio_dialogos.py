#!/usr/bin/env python3
"""
Regenera el audio de los diálogos de listening-*/speaking-* de japonés, chino y
esperanto a partir del "Ejemplo extendido en contexto" de la teoria.md FINAL
(el audio anterior salía de los borradores crudos y con motores mal usados:
ininteligible en ja/zh, flojo en eo).

Salida (sobrescribe): content/material/_audio-generado/<idioma>/<tema>.mp3 y .txt
Voces: ja jf_alpha/jm_kumo, zh zf_xiaoxiao/zm_yunxi (Kokoro + misaki, fonemas),
       eo ef_dora/em_alex (Kokoro con fonemas eSpeak "eo").
Uso: ~/tts-venv/bin/python gen_audio_dialogos.py [--verify]
"""
import json, sys
from difflib import SequenceMatcher
from pathlib import Path
import numpy as np
sys.path.insert(0, str(Path(__file__).parent))
import gen_audio_alfabetos as A
from gen_dialogos_extract import topics, lines

OUT = A.OUT


def hablantes(L):
    """índice de voz por línea: por orden de aparición del hablante; si todos iguales, alterna"""
    orden = []
    for s, _ in L:
        if s not in orden:
            orden.append(s)
    if len(orden) == 1:
        return [i % 2 for i in range(len(L))]
    return [min(orden.index(s), 1) for s, _ in L]


def generar():
    eng = A.Engines()
    for lang, tema, d in topics():
        L = lines(d, lang)
        if not L:
            print("SIN LÍNEAS", lang, tema); continue
        voz_i = hablantes(L)
        chunks, sr0, voces = [], None, set()
        for (spk, txt), vi in zip(L, voz_i):
            pcm, sr, voz = eng._say(lang, txt, alt=bool(vi))
            sr0 = sr0 or sr
            chunks += [pcm, np.zeros(int(sr * 0.5), dtype=np.int16)]
            voces.add(voz)
        pcm = np.concatenate(chunks)
        A.to_mp3(pcm, sr0, OUT / lang / f"{tema}.mp3")
        (OUT / lang / f"{tema}.txt").write_text("\n".join(f"{s}: {t}" for s, t in L) + "\n", encoding="utf-8")
        print(f"OK {lang}/{tema}: {len(L)} líneas, {len(pcm)/sr0:.1f}s, {sorted(voces)}", flush=True)


def verificar():
    from faster_whisper import WhisperModel
    m = WhisperModel("small", device="cpu", compute_type="int8")
    rep = {}
    for lang, tema, d in topics():
        L = lines(d, lang)
        if not L:
            continue
        segs, _ = m.transcribe(str(OUT / lang / f"{tema}.mp3"), language=A.ASR_LANG[lang])
        heard = "".join(s.text for s in segs)
        r = SequenceMatcher(None, A.norm("".join(t for _, t in L)), A.norm(heard)).ratio()
        rep[f"{lang}/{tema}"] = round(r, 2)
        print(f"{lang}/{tema}: {r:.2f}", flush=True)
    (OUT / "_verificacion_dialogos.json").write_text(json.dumps(rep, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    verificar() if "--verify" in sys.argv else generar()
