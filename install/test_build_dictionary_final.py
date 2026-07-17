#!/usr/bin/env python3
"""
Self-check para extract_lang_section() de build_dictionary_final.py.

No usa pytest ni fixtures: son asserts sobre wikitext sintético
(no requiere descargar ningún dump). Corré con:
  python3 install/test_build_dictionary_final.py
"""
from build_dictionary_final import extract_lang_section


def demo():
    # es -> it con encabezados de doble "=" (la mayoría de los idiomas):
    # el bug original nunca encontraba el límite de sección y devolvía
    # TODO el resto del artículo, mezclando definiciones de italiano
    # dentro de la entrada en español.
    wt_es_it = """
== {{lengua|es}} ==
=== Sustantivo femenino ===
;1: primera definición en español

== {{lengua|it}} ==
=== Sustantivo ===
;1: definición en italiano
"""
    r = extract_lang_section(wt_es_it, "lengua|es")
    assert r is not None
    assert "español" in r
    assert "italiano" not in r, "se coló la sección de italiano dentro de la de español"

    # pt usa nivel 1 (={{-pt-}}=) — confirmar que se sigue soportando.
    wt_pt_es = """={{-pt-}}=
===Substantivo===
;1: definição em português

== {{lengua|es}} ==
;1: no debería aparecer
"""
    r = extract_lang_section(wt_pt_es, "pt")
    assert r is not None
    assert "português" in r
    assert "no debería aparecer" not in r

    # última sección del artículo (sin idioma siguiente) -> debe traer todo.
    wt_unica = """== {{lengua|es}} ==
=== Sustantivo ===
;1: única definición
"""
    r = extract_lang_section(wt_unica, "lengua|es")
    assert r is not None and "única definición" in r

    # subsecciones de nivel 3+ (Sustantivo, Sinónimos) del MISMO idioma no
    # deben confundirse con el límite de la próxima sección de idioma.
    wt_subsecciones = """== {{lengua|es}} ==
=== Sustantivo ===
;1: def uno
=== Sinónimos ===
* sinonimo1
"""
    r = extract_lang_section(wt_subsecciones, "lengua|es")
    assert r is not None and "Sinónimos" in r

    print("OK — extract_lang_section: 4/4 casos correctos")


if __name__ == "__main__":
    demo()
