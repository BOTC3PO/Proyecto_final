#!/usr/bin/env python3
"""
Audio de pronunciación para los temas de escritura/alfabeto:
  arabe/alfabeto-arabe-y-conexion-de-letras   ruso/alfabeto-cirilico-y-pronunciacion
  hindi/devanagari-consonantes-y-vocales      hindi/matras-y-conjuntas
  chino/pinyin-y-tonos                        chino/caracteres-y-radicales-basicos
  coreano/hangul                              japones/{hiragana,katakana,kanji-basicos}

Un mp3 por elemento (letra, sílaba, palabra; lento y dicho dos veces) en
content/material/_audio-generado/<idioma>/<tema>/NNN.mp3 + manifest.json
(id, tipo, etiqueta que ve el alumno, texto hablado, voz).

Motores (venv ~/tts-venv):
  ruso   Piper ru_RU irina      árabe  Piper ar_JO kareem (sin tashkil)
  coreano Piper ko_KR kss       hindi  Kokoro hm_omega (NFC, sin nukta en ख़ ग़ क़)
  chino  Kokoro zf_xiaoxiao + misaki ZHG2P (fonemas; sin ellos sale ininteligible)
  japonés Kokoro jf_alpha + misaki JAG2P (idem). misaki necesita `mojimoji`, que no
          compila en Python 3.14: se sustituye por un stub basado en jaconv.

Uso: ~/tts-venv/bin/python gen_audio_alfabetos.py [tema ...]      (sin args = todos)
     ~/tts-venv/bin/python gen_audio_alfabetos.py --verify        (ASR round-trip)
"""
import io
import json
import re
import sys
import types
import unicodedata
import wave
from difflib import SequenceMatcher
from pathlib import Path

import lameenc
import numpy as np

OUT = Path("/home/javier/Proyecto_final/content/material/_audio-generado")
PIPER = Path.home() / "piper"
KOKORO = Path.home() / "tts-venv/models"
TASHKIL = re.compile(r"[ؐ-ًؚ-ٰٟۖ-ۭـ]")
ASR_LANG = {"arabe": "ar", "ruso": "ru", "hindi": "hi", "chino": "zh", "coreano": "ko", "japones": "ja", "esperanto": "es"}

# ---------------------------------------------------------------- contenido
# item = (tipo, etiqueta, texto_hablado)  — texto_hablado None => igual a la etiqueta
L, W = "letra", "palabra"


def items(tipo, seq):
    return [(tipo, s, None) for s in seq.split()]


AR_LETRAS = ("ألف باء تاء ثاء جيم حاء خاء دال ذال راء زاي سين شين صاد ضاد طاء ظاء عين غين "
             "فاء قاف كاف لام ميم نون هاء واو ياء")
AR_LET = [(L, ch, name) for ch, name in zip("ابتثجحخدذرزسشصضطظعغفقكلمنهوي", AR_LETRAS.split())]
AR = AR_LET + items(W, "كتاب بيت باب مدرسة ولد قلم")

RU_NOMBRES = ("а бэ вэ гэ дэ е ё жэ зэ и и-краткое ка эль эм эн о пэ эр эс тэ у эф ха цэ че ша ща "
              "твёрдый-знак ы мягкий-знак э ю я").split()
RU_ABC = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
RU = ([(L, c, n.replace("-", " ")) for c, n in zip(RU_ABC, RU_NOMBRES)]
      + items(W, "дом книга вода мама школа хлеб молоко шапка жизнь щётка цирк чай"))

HI_VOC = items(L, "अ आ इ ई उ ऊ ए ऐ ओ औ ऋ")
HI_CON = items(L, "क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह")
HI_DEV = HI_VOC + HI_CON + items(W, "कमल घर पानी माँ किताब भारत")
HI_MAT = (items(L, "का कि की कु कू के कै को कौ") + items(L, "क्ष त्र ज्ञ श्र प्र")
          + items(W, "किताब दोस्त प्रेम पत्र हिन्दी ज्ञान क्षमा"))

ZH_TONOS = [(L, "mā 妈", "妈"), (L, "má 麻", "麻"), (L, "mǎ 马", "马"), (L, "mà 骂", "骂"),
            (W, "妈妈骂马 (Māma mà mǎ)", "妈妈骂马。"), (W, "你好 (nǐ hǎo)", "你好。"),
            (W, "谢谢 (xièxie)", "谢谢。"), (W, "朋友 (péngyou)", "朋友。"), (W, "不是 (bú shì)", "不是。"),
            (W, "一个 (yí gè)", "一个。"), (W, "一天 (yì tiān)", "一天。")]
ZH_INI = [(L, f"{p} {c}", c) for p, c in [("zhī", "知"), ("chī", "吃"), ("shī", "诗"), ("rì", "日"), ("jī", "鸡"),
          ("qī", "七"), ("xī", "西"), ("zī", "资"), ("cí", "词"), ("sī", "思"), ("nǚ", "女"), ("lǜ", "绿"),
          ("qù", "去"), ("yú", "鱼")]]
ZH_PIN = ZH_TONOS + ZH_INI
ZH_CAR = items(L, "日 月 山 大 水 火 木 心 好 休 林 你 河 热 想 妈 吃 请 说 打 花") \
    + [(W, "林 (bosque)", "森林。")]

KO_CON = [(L, c, n) for c, n in zip("ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
          "기역 니은 디귿 리을 미음 비읍 시옷 이응 지읒 치읓 키읔 티읕 피읖 히읗".split())]
KO_TEN = [(L, c, n) for c, n in zip("ㄲㄸㅃㅆㅉ", "쌍기역 쌍디귿 쌍비읍 쌍시옷 쌍지읒".split())]
KO_VOW = [(L, c, n) for c, n in zip("ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔ", "아 야 어 여 오 요 우 유 으 이 애 에".split())]
KO = (KO_CON + KO_TEN + KO_VOW + items(L, "가 나 다 라 마 바 사 아 자 차 카 타 파 하 까")
      + items(W, "한국 학교 산 강 사랑 물 밥 친구"))

H = "あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも やゆよ らりるれろ わをん"
K = "アイウエオ カキクケコ サシスセソ タチツテト ナニヌネノ ハヒフヘホ マミムメモ ヤユヨ ラリルレロ ワヲン"
JA_HIRA = [(L, c, None) for c in H.replace(" ", "")] + items(W, "こんにちは ありがとう おはよう さようなら みかん かさ りんご")
JA_KATA = [(L, c, None) for c in K.replace(" ", "")] + items(W, "パン コーヒー タクシー テレビ インタビュー ハンバーガー スパゲッティ")
JA_KANJI = [(L, k, r) for k, r in [("一", "いち"), ("二", "に"), ("三", "さん"), ("木", "き"), ("水", "みず"),
            ("本", "ほん"), ("家", "いえ"), ("国", "くに")]] + \
           [(W, "本屋", "ほんや"), (W, "一冊", "いっさつ"), (W, "本土", "ほんど")]

TEMAS = {
    "arabe/alfabeto-arabe-y-conexion-de-letras": AR,
    "ruso/alfabeto-cirilico-y-pronunciacion": RU,
    "hindi/devanagari-consonantes-y-vocales": HI_DEV,
    "hindi/matras-y-conjuntas": HI_MAT,
    "chino/pinyin-y-tonos": ZH_PIN,
    "chino/caracteres-y-radicales-basicos": ZH_CAR,
    "coreano/hangul": KO,
    "japones/hiragana": JA_HIRA,
    "japones/katakana": JA_KATA,
    "japones/kanji-basicos": JA_KANJI,
}

# ------------------------------------------------------------------- motores


def to_mp3(pcm16, sr, path):
    enc = lameenc.Encoder()
    enc.set_bit_rate(64)
    enc.set_in_sample_rate(sr)
    enc.set_channels(1)
    enc.set_quality(2)
    path.write_bytes(enc.encode(pcm16.tobytes()) + enc.flush())


class Engines:
    def __init__(self):
        self.piper_v, self.kokoro, self.zh, self.ja = {}, None, None, None

    def piper(self, name, text, ls=1.3):
        if name not in self.piper_v:
            from piper import PiperVoice
            self.piper_v[name] = PiperVoice.load(str(PIPER / f"{name}.onnx"))
        from piper import SynthesisConfig
        buf = io.BytesIO()
        with wave.open(buf, "wb") as w:
            self.piper_v[name].synthesize_wav(text, w, syn_config=SynthesisConfig(length_scale=ls))
        buf.seek(0)
        with wave.open(buf) as w:
            return np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16), w.getframerate()

    def kok(self):
        if self.kokoro is None:
            from kokoro_onnx import Kokoro
            self.kokoro = Kokoro(str(KOKORO / "kokoro-v1.0.onnx"), str(KOKORO / "voices-v1.0.bin"))
        return self.kokoro

    def kok_pcm(self, text, voice, lang, phonemes=False):
        s, sr = self.kok().create(text, voice=voice, speed=0.8, lang=lang, is_phonemes=phonemes)
        return (np.clip(s, -1, 1) * 32767).astype(np.int16), sr

    def say(self, idioma, text):
        """Clip didáctico: el elemento, pausa de 0,7 s y el elemento otra vez."""
        pcm, sr, voz = self._say(idioma, text)
        sil = np.zeros(int(sr * 0.7), dtype=np.int16)
        pad = np.zeros(int(sr * 0.15), dtype=np.int16)
        return np.concatenate([pad, pcm, sil, pcm, pad]), sr, voz

    def _say(self, idioma, text, alt=False):
        """alt=True -> segunda voz (interlocutor B en los diálogos)."""
        if idioma == "ruso":
            return self.piper("ru_RU-irina-medium", text) + ("piper:irina",)
        if idioma == "arabe":
            return self.piper("ar_JO-kareem-medium", TASHKIL.sub("", text)) + ("piper:kareem",)
        if idioma == "coreano":
            return self.piper("ko_KR-kss-medium", text) + ("piper:kss",)
        if idioma == "hindi":
            t = unicodedata.normalize("NFC", text)
            t = re.sub("([कखग])़", r"\1", t)
            return self.kok_pcm(t, "hm_omega", "hi") + ("kokoro:hm_omega",)
        if idioma == "chino":
            if self.zh is None:
                from misaki import zh
                self.zh = zh.ZHG2P()
            v = "zm_yunxi" if alt else "zf_xiaoxiao"
            return self.kok_pcm(self.zh(text), v, "cmn", True) + (f"kokoro:{v}+misaki",)
        if idioma == "japones":
            if self.ja is None:
                import jaconv
                moj = types.ModuleType("mojimoji")
                moj.zen_to_han = lambda t, kana=True, digit=True, ascii=True: jaconv.z2h(t, kana=kana, digit=digit, ascii=ascii)
                moj.han_to_zen = lambda t, kana=True, digit=True, ascii=True: jaconv.h2z(t, kana=kana, digit=digit, ascii=ascii)
                sys.modules["mojimoji"] = moj
                from misaki import ja
                self.ja = ja.JAG2P()
            r = self.ja(text)
            ph = r[0] if isinstance(r, tuple) else r
            v = "jm_kumo" if alt else "jf_alpha"
            return self.kok_pcm(ph, v, "ja", True) + (f"kokoro:{v}+misaki",)
        if idioma == "esperanto":
            # fonemas de eSpeak "eo" (ortografía esperanto correcta) con voz castellana de Kokoro
            v = "em_alex" if alt else "ef_dora"
            return self.kok_pcm(text, v, "eo") + (f"kokoro:{v}+espeak-eo",)
        raise ValueError(idioma)


def generar(temas):
    eng = Engines()
    for key in temas:
        idioma, tema = key.split("/")
        out = OUT / idioma / tema
        out.mkdir(parents=True, exist_ok=True)
        man = []
        for i, (tipo, label, said) in enumerate(TEMAS[key], 1):
            text = said or label
            pcm, sr, voz = eng.say(idioma, text)
            name = f"{i:03d}.mp3"
            to_mp3(pcm, sr, out / name)
            man.append({"id": i, "file": name, "tipo": tipo, "etiqueta": label, "hablado": text,
                        "voz": voz, "segundos": round(len(pcm) / sr, 2)})
        (out / "manifest.json").write_text(json.dumps(man, ensure_ascii=False, indent=1), encoding="utf-8")
        print(f"OK {key}: {len(man)} clips", flush=True)


def norm(s):
    s = TASHKIL.sub("", s)
    return re.sub(r"[\W_]+", "", unicodedata.normalize("NFC", s).lower())


def verificar(temas):
    from faster_whisper import WhisperModel
    m = WhisperModel("small", device="cpu", compute_type="int8")
    rf = OUT / "_verificacion_alfabetos.json"
    rep = json.loads(rf.read_text(encoding="utf-8")) if rf.exists() else {}
    for key in temas:
        idioma, tema = key.split("/")
        d = OUT / idioma / tema
        res = []
        for it in json.loads((d / "manifest.json").read_text(encoding="utf-8")):
            segs, _ = m.transcribe(str(d / it["file"]), language=ASR_LANG[idioma])
            heard = "".join(s.text for s in segs)
            r = SequenceMatcher(None, norm(it["hablado"]) * 2, norm(heard)).ratio()
            res.append({"id": it["id"], "tipo": it["tipo"], "esperado": it["hablado"], "oido": heard.strip(),
                        "similitud": round(r, 2), "segundos": it["segundos"]})
        rep[key] = res
        pal = [x["similitud"] for x in res if x["tipo"] == W]
        let = [x["similitud"] for x in res if x["tipo"] == L]
        avg = lambda v: round(sum(v) / len(v), 2) if v else None
        print(f"{key}: palabras {len(pal)} media {avg(pal)} | letras {len(let)} media {avg(let)} "
              f"| letras>=0.5: {sum(v >= 0.5 for v in let)}/{len(let)}", flush=True)
    rf.write_text(json.dumps(rep, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    a = sys.argv[1:]
    sel = [t for t in a if t in TEMAS] or list(TEMAS)
    if "--verify" in a:
        verificar(sel)
    else:
        generar(sel)
