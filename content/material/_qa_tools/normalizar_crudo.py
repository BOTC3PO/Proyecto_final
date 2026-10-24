#!/usr/bin/env python3
"""Normaliza la SINTAXIS de un cuestionario crudo (salida de Gemma) para que VBLang lo pueda leer.

Solo arregla forma, no contenido: no decide si una pregunta es correcta. Después hay que validar
(`validar_lote.ts`) y revisar el contenido a mano.

Qué hace, bloque por bloque:
  - cambia las vallas ```yaml por ``` y `explicación` por `explicacion`;
  - pone entre comillas dobles los textos sueltos de `enunciado`, `explicacion` y de las listas
    (`pasos`, `opciones_explicitas`, `respuestas_validas`, `respuesta_orden`), escapando `\\` y `"`;
  - duplica las llaves (`{` -> `{{`), que es como VBLang escribe una llave literal en un texto;
  - pone entre comillas `respuesta:` en los tipos mc/completar cuando es texto suelto;
  - convierte `respuesta_orden:` en lista de guiones a un arreglo en una línea.

Uso:  python3 normalizar_crudo.py entrada_crudo.md > salida.md
"""
import re
import sys

CLAVES_TEXTO = ("enunciado", "explicacion")
CLAVES_LISTA_ENUNC = ("enunciados",)
CLAVES_LISTA = ("pasos", "opciones_explicitas", "respuestas_validas", "respuesta_orden", "enunciados")


def comillas(texto: str) -> str:
    t = texto.replace("\\", "\\\\").replace('"', '\\"')
    t = t.replace("{", "{{").replace("}", "}}")
    return '"' + t + '"'


def ya_citado(valor: str) -> bool:
    return len(valor) >= 2 and valor[0] == '"' and valor.endswith('"')


def arreglar_citado(valor: str) -> str:
    """Un texto que ya viene entre comillas: solo se duplican las llaves sueltas."""
    interior = valor[1:-1]
    if "{" in interior and "{{" not in interior:
        interior = interior.replace("{", "{{").replace("}", "}}")
    return '"' + interior + '"'


def aplanar_uno_de(bloque: str) -> str:
    """`enunciado:` seguido de `Uno_de:` y una lista (invento de Gemma) -> `enunciados:` con la lista."""
    return re.sub(
        r"(?m)^enunciado:\s*\n\s+[Uu]no_de:\s*\n((?:\s+-\s+.*\n?)+)",
        lambda m: "enunciados:\n" + "".join("  - " + re.sub(r"^\s+-\s+", "", x) + "\n" for x in m.group(1).rstrip("\n").split("\n")),
        bloque + "\n",
    ).rstrip("\n")


def corregir_vf(bloque: str) -> str:
    """true/false -> verdadero/falso; un `vf` con respuesta de texto y una consigna con ___ pasa a `completar`."""
    bloque = re.sub(r"(?m)^respuesta:\s*true\s*$", "respuesta: verdadero", bloque)
    bloque = re.sub(r"(?m)^respuesta:\s*false\s*$", "respuesta: falso", bloque)
    if re.search(r"(?m)^tipo:\s*vf\s*$", bloque):
        m = re.search(r"(?m)^respuesta:\s*(.*)$", bloque)
        if m and m.group(1).strip().strip('"').lower() not in ("verdadero", "falso") and "___" in bloque:
            bloque = re.sub(r"(?m)^tipo:\s*vf\s*$", "tipo: completar", bloque)
    return bloque


def normalizar_bloque(bloque: str) -> str:
    bloque = corregir_vf(aplanar_uno_de(bloque))
    lineas = bloque.split("\n")
    salida = []
    tipo = None
    for l in lineas:
        m = re.match(r"^tipo:\s*(\w+)", l)
        if m:
            tipo = m.group(1)
    i = 0
    clave_lista = None
    en_barra = False
    while i < len(lineas):
        l = lineas[i]
        l = re.sub(r"^explicación:", "explicacion:", l)
        # dentro de un bloque "|": solo se duplican las llaves
        if en_barra:
            if l.startswith("  ") or l.strip() == "":
                salida.append(l.replace("{", "{{").replace("}", "}}") if "{" in l and "{{" not in l else l)
                i += 1
                continue
            en_barra = False
        m = re.match(r"^(\w+):\s*(.*)$", l)
        if m and not l.startswith(" "):
            clave, valor = m.group(1), m.group(2).strip()
            clave_lista = clave if clave in CLAVES_LISTA else None
            if clave in CLAVES_TEXTO:
                if valor == "|" or valor == ">":
                    salida.append(f"{clave}: |")
                    en_barra = True
                elif valor == "":
                    salida.append(l)
                elif ya_citado(valor):
                    salida.append(f"{clave}: {arreglar_citado(valor)}")
                else:
                    salida.append(f"{clave}: {comillas(valor)}")
            elif clave == "respuesta" and tipo in ("mc", "completar") and valor and not ya_citado(valor) \
                    and not re.fullmatch(r"-?\d+([.,]\d+)?", valor) and valor not in ("verdadero", "falso"):
                salida.append(f"respuesta: {comillas(valor)}")
            elif clave in CLAVES_LISTA and valor.startswith("["):
                salida.append(l)
            else:
                salida.append(l)
            i += 1
            continue
        # elementos de lista con guion
        m = re.match(r"^(\s+)-\s+(.*)$", l)
        if m and clave_lista:
            sangria, item = m.group(1), m.group(2).strip()
            if ya_citado(item):
                salida.append(f"{sangria}- {arreglar_citado(item)}")
            else:
                salida.append(f"{sangria}- {comillas(item)}")
            i += 1
            continue
        salida.append(l)
        i += 1
    # respuesta_orden en lista de guiones -> arreglo en una línea
    texto = "\n".join(salida)
    m = re.search(r"^respuesta_orden:\s*\n((?:\s+-\s+.*\n?)+)", texto, flags=re.M)
    if m:
        items = [re.sub(r"^\s+-\s+", "", x) for x in m.group(1).strip().split("\n")]
        texto = texto.replace(m.group(0), "respuesta_orden: [" + ", ".join(items) + "]\n")
    return texto


def main():
    src = open(sys.argv[1], encoding="utf-8").read()
    partes = re.split(r"(?m)^(### .*)$", src)
    out = [partes[0]]
    for k in range(1, len(partes), 2):
        titulo, cuerpo = partes[k], partes[k + 1]
        m = re.search(r"```\w*\n(.*?)\n```", cuerpo, flags=re.S)
        if not m:
            out.append(titulo + cuerpo)
            continue
        nuevo = normalizar_bloque(m.group(1))
        out.append(titulo + "\n\n```\n" + nuevo + "\n```\n\n")
    sys.stdout.write("".join(out))


if __name__ == "__main__":
    main()
