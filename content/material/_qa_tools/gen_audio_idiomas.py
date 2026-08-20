#!/usr/bin/env python3
"""
Genera audio (mp3) para los temas listening-*/speaking-* de
content/material/_borradores-gemma/idiomas-extranjeros/<idioma>/, extrayendo
el diálogo transcripto de la sección "## Ejemplo extendido en contexto" de
teoria_crudo.md.

Motor por idioma:
  en/de/fr/it/pt-br/pt-pt/ko -> Piper  (/home/javier/piper)
  ja/zh                      -> Kokoro (~/tts-venv/models)
  eo                         -> eSpeak-NG (CLI del sistema)

Salida: content/material/_audio-generado/<idioma>/<tema>.mp3 +
        content/material/_audio-generado/<idioma>/<tema>.txt (transcripción,
        para alt/caption de AudioSpec más adelante).

Uso: python3 gen_audio_idiomas.py [idioma ...]   (sin args = todos)
"""
import re
import subprocess
import sys
from pathlib import Path

REPO = Path("/home/javier/Proyecto_final")
BORRADORES = REPO / "content/material/_borradores-gemma/idiomas-extranjeros"
OUT = REPO / "content/material/_audio-generado"
PIPER_HOME = Path("/home/javier/piper")
PIPER_PY = PIPER_HOME / "bin/python3"
KOKORO_MODEL = Path.home() / "tts-venv/models/kokoro-v1.0.onnx"
KOKORO_VOICES = Path.home() / "tts-venv/models/voices-v1.0.bin"

# carpeta -> (motor, voz/idioma)
LANG_ENGINE = {
    "ingles": ("piper", PIPER_HOME / "en_US-kristin-medium.onnx"),
    "aleman": ("piper", PIPER_HOME / "de_DE-thorsten_emotional-medium.onnx"),
    "frances": ("piper", PIPER_HOME / "fr_FR-tom-medium.onnx"),
    "italiano": ("piper", PIPER_HOME / "it_IT-paola-medium.onnx"),
    "portugues-br": ("piper", PIPER_HOME / "pt_BR-faber-medium.onnx"),
    # nombre literal en disco quedó URL-encoded ("%C3%A3" en vez de "ã")
    "portugues-pt": ("piper", PIPER_HOME / "pt_PT-tug%C3%A3o-medium.onnx"),
    "coreano": ("piper", PIPER_HOME / "ko_KR-kss-medium.onnx"),
    "japones": ("kokoro", "jf_alpha"),
    "chino": ("kokoro", "zf_xiaoxiao"),
    "esperanto": ("espeak", "eo"),
}

# Ancla al bloque "## Ejemplo extendido en contexto" — presente en los 380
# temas (confirmado en el scan de headings), a diferencia de un label
# "Diálogo" explícito que varía o directamente falta en varios archivos.
SECTION_RE = re.compile(
    r"(?:##|\*\*)\s*(?:\d+[.)]\s*)?Ejemplo extendido en contexto\**\s*\n"
)
# Acepta "**A**: texto", "*A: texto*" y "A: *texto*" (0-2 asteriscos líder,
# etiqueta corta sólo de letras/espacios).
LINE_RE = re.compile(r"^[-*]?\s*\*{0,2}([A-Za-zÀ-ÿ][\wÀ-ÿ ]{0,20}?)\*{0,2}:\*{0,2}\s*(.*)$")
# Labels de acotación/análisis, no diálogo real — se descartan.
NON_SPEAKER = {
    "escenario", "escena", "situación", "situacion", "scenario", "situation",
    "análisis", "analisis", "analysis", "nota", "note", "contexto", "tema",
    "topic", "título", "titulo", "title",
    "diálogo", "dialogo", "dialogue", "diálogo 1", "diálogo 2", "diálogo 3",
}


def clean_spoken(spoken: str) -> str:
    spoken = spoken.strip()
    # gloss/romaji/nota entre paréntesis al final — tolera puntuación colgante
    # después del paréntesis de cierre (ej. "...texto." (nota).")
    # traducción separada por guión largo al final, ej: "你好。(...) – Hola." —
    # sólo para CJK (en textos latinos un " - " puede ser parte legítima de
    # la oración, ej. "I like tea - my favorite drink"). Va ANTES del strip
    # de paréntesis: si no, el paréntesis de romanización queda pegado al
    # final una vez cortada la traducción.
    if re.search(r"[぀-ヿ一-鿿가-힣]", spoken):
        spoken = re.sub(r"\s+[–—-]\s+\S.*$", "", spoken)
    # gloss/romaji/nota entre paréntesis al final — tolera puntuación colgante
    # después del paréntesis de cierre (ej. "...texto." (nota).")
    spoken = re.sub(r"\s*\([^)]*\)[.,;:!?\s]*$", "", spoken)
    spoken = spoken.strip("*“”\"'").strip()
    return spoken.rstrip("*").strip()


def extract_dialogue(md_text: str) -> list[tuple[str, str]]:
    m = SECTION_RE.search(md_text)
    if not m:
        return []
    rest = md_text[m.end():]
    stop = re.search(r"\n##", rest)
    section = rest[: stop.start()] if stop else rest
    out: list[tuple[str, str]] = []
    lines = [l.strip() for l in section.split("\n")]
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line:
            i += 1
            continue
        lm = LINE_RE.match(line)
        if not lm:
            i += 1
            continue
        speaker, spoken = lm.groups()
        speaker = speaker.strip()
        i += 1
        if speaker.lower() in NON_SPEAKER:
            continue
        spoken = clean_spoken(spoken)
        if not spoken:
            # "Hablante:" solo, con la cita en la línea siguiente (a veces
            # como blockquote "> \"...\"") — pero sólo si esa línea NO es a
            # su vez otro turno de diálogo (si lo es, esta entrada estaba
            # genuinamente vacía, ej. un header "**Diálogo:**" suelto).
            while i < len(lines) and not lines[i]:
                i += 1
            if i < len(lines) and not LINE_RE.match(lines[i]):
                spoken = clean_spoken(lines[i].lstrip("> ").strip())
                i += 1
        if spoken:
            out.append((speaker, spoken))
    return out


def synth_piper(text: str, voice_path: Path, out_wav: Path):
    subprocess.run(
        [str(PIPER_PY), "-m", "piper", "-m", str(voice_path), "-f", str(out_wav)],
        input=text, capture_output=True, text=True, check=True, cwd=str(PIPER_HOME),
    )


def synth_kokoro(text: str, voice: str, out_wav: Path):
    script = f"""
import soundfile as sf
from kokoro_onnx import Kokoro
k = Kokoro({str(KOKORO_MODEL)!r}, {str(KOKORO_VOICES)!r})
samples, sr = k.create({text!r}, voice={voice!r}, speed=1.0, lang="en-us" if {voice!r}.startswith("jf") or {voice!r}.startswith("jm") else "cmn")
sf.write({str(out_wav)!r}, samples, sr)
"""
    tts_py = Path.home() / "tts-venv/bin/python3"
    subprocess.run([str(tts_py), "-c", script], capture_output=True, text=True, check=True)


def synth_espeak(text: str, lang: str, out_wav: Path):
    subprocess.run(
        ["espeak-ng", "-v", lang, "-w", str(out_wav), text],
        capture_output=True, text=True, check=True,
    )


def wav_to_mp3(wav: Path, mp3: Path):
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav), "-codec:a", "libmp3lame", "-qscale:a", "4", str(mp3)],
        capture_output=True, text=True, check=True,
    )
    wav.unlink(missing_ok=True)


def process_topic(lang_folder: str, tema_dir: Path, log):
    engine, voice = LANG_ENGINE[lang_folder]
    teoria = tema_dir / "teoria_crudo.md"
    if not teoria.exists():
        log.write(f"SKIP {lang_folder}/{tema_dir.name}: sin teoria_crudo.md\n")
        return False
    dialogo = extract_dialogue(teoria.read_text(encoding="utf-8"))
    if not dialogo:
        log.write(f"SKIP {lang_folder}/{tema_dir.name}: no se encontró diálogo\n")
        return False

    full_text = ". ".join(f"{spoken}" for _, spoken in dialogo)
    out_dir = OUT / lang_folder
    out_dir.mkdir(parents=True, exist_ok=True)
    out_wav = out_dir / f"{tema_dir.name}.wav"
    out_mp3 = out_dir / f"{tema_dir.name}.mp3"
    out_txt = out_dir / f"{tema_dir.name}.txt"

    try:
        if engine == "piper":
            synth_piper(full_text, voice, out_wav)
        elif engine == "kokoro":
            synth_kokoro(full_text, voice, out_wav)
        elif engine == "espeak":
            synth_espeak(full_text, voice, out_wav)
        wav_to_mp3(out_wav, out_mp3)
        out_txt.write_text(
            "\n".join(f"{s}: {t}" for s, t in dialogo), encoding="utf-8"
        )
        log.write(f"OK {lang_folder}/{tema_dir.name}: {len(dialogo)} líneas -> {out_mp3.name}\n")
        log.flush()
        return True
    except subprocess.CalledProcessError as e:
        log.write(f"FAIL {lang_folder}/{tema_dir.name}: {e.stderr[:200] if e.stderr else e}\n")
        log.flush()
        return False


def main():
    langs = sys.argv[1:] or list(LANG_ENGINE.keys())
    log_path = REPO / "content/material/_qa_tools/gen_audio_progress.log"
    ok = fail = skip = 0
    with open(log_path, "a", encoding="utf-8") as log:
        for lang in langs:
            lang_dir = BORRADORES / lang
            if not lang_dir.is_dir():
                continue
            temas = sorted(
                d for d in lang_dir.iterdir()
                if d.is_dir() and (d.name.startswith("listening") or d.name.startswith("speaking"))
            )
            for tema_dir in temas:
                result = process_topic(lang, tema_dir, log)
                if result is True:
                    ok += 1
                elif result is False:
                    fail_or_skip = True
        log.write(f"\n=== TOTAL: ver conteos arriba ===\n")
    print(f"listo, ver {log_path}")


if __name__ == "__main__":
    main()
