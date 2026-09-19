#!/usr/bin/env python3
"""
Genera audio (mp3) para las preguntas de los temas listening-* de árabe, ruso
e hindi (content/material/idiomas-extranjeros/<idioma>/listening-*/).

Cada bloque del cuestionario trae la transcripción entre «…» tras "Audio:".
En los bloques "completar" el hueco ＿＿ se rellena con la primera respuesta
válida, de modo que el audio diga la frase completa.

Motores (venv ~/tts-venv, modelos en ~/piper y ~/tts-venv/models):
  ruso   -> Piper ru_RU irina (f) / denis (m), alternando por pregunta
  árabe  -> Piper ar_JO kareem; el texto se pasa SIN vocalizar (tashkil),
            que se entiende mejor que el vocalizado (verificado con ASR)
  hindi  -> Kokoro hm_omega (Piper hi_IN quedó peor en la verificación ASR)

Salida: content/material/_audio-generado/<idioma>/<tema>/qNN.mp3 y
        manifest.json (n, archivo, texto, voz) + <tema>.txt (transcripción).

Uso: ~/tts-venv/bin/python gen_audio_nuevos.py [arabe|ruso|hindi ...]
     ~/tts-venv/bin/python gen_audio_nuevos.py --verify   (ASR round-trip)
"""
import json
import re
import sys
import unicodedata
import wave
from difflib import SequenceMatcher
from pathlib import Path

import lameenc
import numpy as np

REPO = Path("/home/javier/Proyecto_final")
SRC = REPO / "content/material/idiomas-extranjeros"
OUT = REPO / "content/material/_audio-generado"
PIPER = Path("/home/javier/piper")
KOKORO = Path.home() / "tts-venv/models"

LEVELS = ["a2", "b1", "b2", "c1"]
ASR_LANG = {"arabe": "ar", "ruso": "ru", "hindi": "hi"}

BLOCK_RE = re.compile(r"^### (\d+) — .*?\n```\n(.*?)\n```", re.S | re.M)
AUDIO_RE = re.compile(r'enunciado: "Audio: «(.*?)»')
ANS_RE = re.compile(r'respuestas_validas:\n  - "(.*?)"')
TASHKIL = re.compile(r"[ؐ-ًؚ-ٰٟۖ-ۭـ]")


def clip_texts(md: str):
    """[(n, texto)] con el hueco ya relleno."""
    res = []
    for m in BLOCK_RE.finditer(md):
        n, body = int(m.group(1)), m.group(2)
        a = AUDIO_RE.search(body)
        if not a:
            continue
        text = a.group(1)
        if "＿＿" in text:
            ans = ANS_RE.search(body)
            if not ans:
                continue
            text = text.replace("＿＿", ans.group(1))
        res.append((n, text.strip()))
    return res


def to_mp3(pcm16: np.ndarray, sr: int, path: Path):
    enc = lameenc.Encoder()
    enc.set_bit_rate(64)
    enc.set_in_sample_rate(sr)
    enc.set_channels(1)
    enc.set_quality(2)
    path.write_bytes(enc.encode(pcm16.tobytes()) + enc.flush())


class Engine:
    def __init__(self, lang):
        self.lang = lang
        self.voices = {}
        self.kokoro = None

    def piper(self, name):
        if name not in self.voices:
            from piper import PiperVoice
            self.voices[name] = PiperVoice.load(str(PIPER / f"{name}.onnx"))
        return self.voices[name]

    def synth(self, n, text):
        """devuelve (pcm16, sr, voz, texto_hablado)"""
        if self.lang == "ruso":
            voz = "ru_RU-irina-medium" if n % 2 else "ru_RU-denis-medium"
            v = self.piper(voz)
            import io
            buf = io.BytesIO()
            with wave.open(buf, "wb") as w:
                v.synthesize_wav(text, w)
            buf.seek(0)
            with wave.open(buf) as w:
                return np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16), w.getframerate(), voz, text
        if self.lang == "arabe":
            said = TASHKIL.sub("", text)
            voz = "ar_JO-kareem-medium"
            v = self.piper(voz)
            import io
            buf = io.BytesIO()
            with wave.open(buf, "wb") as w:
                v.synthesize_wav(said, w)
            buf.seek(0)
            with wave.open(buf) as w:
                return np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16), w.getframerate(), voz, said
        if self.kokoro is None:
            from kokoro_onnx import Kokoro
            self.kokoro = Kokoro(str(KOKORO / "kokoro-v1.0.onnx"), str(KOKORO / "voices-v1.0.bin"))
        # NFC descompone ख़ ड़ etc. (nukta); el fonemizador las lee mal precompuestas
        text = unicodedata.normalize("NFC", text)
        # ख़ ग़ क़ (sonidos árabes raros) los lee mal el modelo: se hablan como ख ग क
        text = re.sub("([कखग])़", r"\1", text)
        samples, sr = self.kokoro.create(text, voice="hm_omega", speed=1.0, lang="hi")
        pcm = (np.clip(samples, -1, 1) * 32767).astype(np.int16)
        return pcm, sr, "kokoro:hm_omega", text


def generate(lang):
    eng = Engine(lang)
    total = 0
    for lvl in LEVELS:
        tema = f"listening-{lvl}"
        f = SRC / lang / tema / "cuestionario.md"
        if not f.exists():
            continue
        out = OUT / lang / tema
        out.mkdir(parents=True, exist_ok=True)
        manifest, lines = [], []
        for n, text in clip_texts(f.read_text(encoding="utf-8")):
            pcm, sr, voz, said = eng.synth(n, text)
            name = f"q{n:02d}.mp3"
            to_mp3(pcm, sr, out / name)
            manifest.append({"n": n, "file": name, "text": text, "spoken": said,
                             "voice": voz, "seconds": round(len(pcm) / sr, 2)})
            lines.append(f"{n}. {text}")
            total += 1
        (out / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
        (OUT / lang / f"{tema}.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
        print(f"OK {lang}/{tema}: {len(manifest)} clips", flush=True)
    return total


def norm(s):
    s = TASHKIL.sub("", s)
    return re.sub(r"[\W_]+", "", s.lower())


def verify(langs):
    """ASR round-trip: similitud entre texto y lo que 'oye' whisper."""
    from faster_whisper import WhisperModel
    import subprocess, tempfile
    model = WhisperModel("small", device="cpu", compute_type="int8")
    rf = OUT / "_verificacion_asr.json"
    report = json.loads(rf.read_text(encoding="utf-8")) if rf.exists() else {}
    for lang in langs:
        scores = []
        for lvl in LEVELS:
            d = OUT / lang / f"listening-{lvl}"
            mf = d / "manifest.json"
            if not mf.exists():
                continue
            for it in json.loads(mf.read_text(encoding="utf-8")):
                segs, _ = model.transcribe(str(d / it["file"]), language=ASR_LANG[lang])
                heard = "".join(s.text for s in segs)
                r = SequenceMatcher(None, norm(it["text"]), norm(heard)).ratio()
                scores.append((round(r, 2), f"listening-{lvl}", it["n"], heard.strip()))
        scores.sort()
        report[lang] = scores
        vals = [s[0] for s in scores]
        print(f"{lang}: {len(vals)} clips, media {sum(vals)/len(vals):.2f}, <0.6: {sum(v<0.6 for v in vals)}", flush=True)
    rf.write_text(json.dumps(report, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    args = sys.argv[1:]
    if "--verify" in args:
        verify([a for a in args if a in ASR_LANG] or list(ASR_LANG))
    else:
        for lang in [a for a in args if a in ASR_LANG] or list(ASR_LANG):
            print(lang, generate(lang), "clips")
