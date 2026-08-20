# Química — pH y pOH (cuestionario, nivel 2, 20 preguntas VBLang)

> Continúa `cuestionario.md` (nivel 1). Cubre la profundidad de `QN`
> dentro del Tronco 7: ácidos/bases fuertes vs. débiles, y la relación
> [H+] ↔ pH.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bugs de esta tanda: `uno_de([...])[idx]` con `idx` de rango mayor que
> el array indexado (fuera de rango — ej. `idx: uno_de([0,1,2,3])`
> sobre una lista de 2 elementos), y un `respuestas_validas` que
> aceptaba `["verdadero","falso"]` como ambos correctos en una `vf`.

---

### 1 — Disociación de ácidos fuertes

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["acido", "fuerte", "disociacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un ácido fuerte se disocia completamente (100%) en agua."

explicacion: |
  Por definición, un ácido fuerte se disocia totalmente en solución acuosa, liberando todos sus protones.
```

### 2 — Cálculo de pH de un ácido fuerte

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["ph", "calculo", "acido_fuerte"]

variables:
  conc: uno_de([0.001, 0.01, 0.1])

respuesta: -log10(conc)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una solución de ácido fuerte tiene concentración inicial {conc} M. ¿Cuál es el pH?"

pasos:
  - "[H+] = concentración inicial (disociación 100%)"
  - "pH = -log10([H+])"

explicacion: |
  pH = -log10({conc}).
```

### 3 — Clasificación de ácidos y bases fuertes

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["clasificacion", "acido", "base"]

variables:
  sustancia: uno_de(["HCl", "NaOH", "HNO3", "KOH"])

respuesta: "fuerte"
tipo: mc
opciones_explicitas: ["fuerte", "debil"]

enunciado: "La sustancia {sustancia} es un electrolito..."

explicacion: |
  {sustancia} se disocia completamente en solución: es un electrolito fuerte.
```

### 4 — Relación concentración e iones (ácido fuerte)

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["acido_fuerte", "concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ácido fuerte, la concentración de iones hidrógeno [H+] es directamente igual a la concentración inicial del ácido."

explicacion: |
  Al ser disociación total (sin equilibrio), los protones liberados igualan a las moléculas iniciales.
```

### 5 — Disociación de ácidos débiles

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["acido_debil", "disociacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un ácido débil se disocia sólo parcialmente en agua, quedando la mayoría de las moléculas sin disociar."

explicacion: |
  A diferencia del ácido fuerte, el débil establece un equilibrio donde la mayor parte queda como molécula sin disociar.
```

### 6 — Clasificación de sustancias débiles

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["acido_debil", "clasificacion"]

variables:
  escenario: uno_de([["acido acetico (vinagre)", "debil"], ["amoniaco NH3", "debil"], ["acido citrico", "debil"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["fuerte", "debil"]

enunciado: "¿Cuál es la clasificación de {escenario[0]} según su grado de disociación?"

explicacion: |
  {escenario[0]} no se disocia completamente en agua: es un ejemplo clásico de electrolito débil.
```

### 7 — Comparación de pH por concentración

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["ph", "concentracion"]

respuesta: falso
tipo: vf

enunciado: "Dos soluciones con la misma concentración inicial, una de ácido fuerte y otra de ácido débil, tienen el MISMO pH."

explicacion: |
  Falso. A igual concentración inicial, el ácido fuerte libera más [H+] real: su pH es más bajo que el del débil.
```

### 8 — Relación entre fuerza y pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["ph", "acidez"]

respuesta: verdadero
tipo: vf

enunciado: "Entre dos ácidos de igual concentración inicial, el ácido FUERTE tiene un pH más BAJO que el ácido débil."

explicacion: |
  Un pH más bajo indica más [H+]. El fuerte se disocia completamente y libera más protones que el débil a igual concentración inicial.
```

### 9 — Relación logarítmica del pH (despeje)

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["ph", "logaritmos"]

respuesta: "10"
tipo: completar
respuestas_validas: ["10"]

enunciado: "Despejando pH = -log10([H+]), la concentración [H+] se expresa como ___ elevado a menos pH."

explicacion: |
  Al despejar (aplicando la exponenciación inversa al logaritmo), [H+] = 10^(-pH).
```

### 10 — Cálculo de concentración de H+ desde pH

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["calculo", "ph", "concentracion"]

variables:
  ph: uno_de([1, 2, 3, 4])

respuesta: 10 ^ (-ph)
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una solución tiene pH = {ph}. ¿Cuál es la concentración de [H+] en mol/L?"

pasos:
  - "[H+] = 10^(-pH)"

explicacion: |
  [H+] = 10^(-{ph}).
```

### 11 — Validez de la fórmula en ácidos fuertes

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["acido_fuerte", "disociacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula [H+] = 10^(-pH) es válida directamente para un ácido FUERTE, sin ajustes por grado de disociación."

explicacion: |
  Como la disociación es total, la concentración inicial ya es directamente [H+], sin correcciones.
```

### 12 — Ácidos débiles y disociación

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["acido_debil", "disociacion_parcial"]

respuesta: falso
tipo: vf

enunciado: "Para un ácido DÉBIL, la concentración inicial del ácido es directamente igual a la concentración de [H+]."

explicacion: |
  Falso. Al disociarse sólo parcialmente, [H+] es una fracción de la concentración inicial, según su Ka.
```

### 13 — Identificar el ácido que no es fuerte

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["acido", "fuerte"]

respuesta: "acido acetico"
tipo: mc
opciones_explicitas: ["acido acetico", "HCl", "HNO3", "H2SO4"]

enunciado: "¿Cuál de estos compuestos NO es un ácido fuerte?"

explicacion: |
  El ácido acético es débil (no se disocia completamente). HCl, HNO3 y H2SO4 (primera disociación) son ácidos fuertes.
```

### 14 — Identificar la base que no es fuerte

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["base", "fuerte"]

respuesta: "NH3"
tipo: mc
opciones_explicitas: ["NH3", "NaOH", "KOH"]

enunciado: "¿Cuál de estas sustancias NO es una base fuerte?"

explicacion: |
  El amoníaco (NH3) es una base débil. NaOH y KOH se disocian completamente: son fuertes.
```

### 15 — Cálculo de pOH de una base fuerte

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["poh", "calculo", "base"]

variables:
  conc: uno_de([0.0001, 0.001, 0.01])

respuesta: -log10(conc)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una solución de base fuerte (NaOH) tiene concentración inicial {conc} M. ¿Cuál es el pOH?"

pasos:
  - "[OH-] = concentración inicial (disociación 100%)"
  - "pOH = -log10([OH-])"

explicacion: |
  pOH = -log10({conc}).
```

### 16 — Alcance de Ka en este nivel

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "La constante Ka de un ácido débil está fuera del alcance de este nivel introductorio de pH/pOH."

explicacion: |
  El equilibrio de disociación de ácidos débiles (con su Ka) se ve en detalle en ../equilibrio-quimico-kc/.
```

### 17 — pH + pOH = 14

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["ph", "poh", "relacion"]

variables:
  ph: uno_de([2, 4, 6, 8, 10])

respuesta: 14 - ph
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una solución tiene pH = {ph}, ¿cuál es su pOH?"

pasos:
  - "pH + pOH = 14"

explicacion: |
  pOH = 14 - {ph}.
```

### 18 — Concentración inicial vs. [H+] en ácido débil (aplicación)

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "avanzado"
  tags: ["acido_debil", "aplicacion"]

respuesta: falso
tipo: vf

enunciado: "Si preparo una solución de ácido acético 0,1 M, puedo calcular su pH directo con pH = -log10(0,1), igual que con un ácido fuerte."

explicacion: |
  Falso. Como el ácido acético es débil, [H+] real es MENOR que 0,1 M (se disocia sólo parcialmente) — hace falta la Ka para calcular el pH real, no alcanza con la concentración inicial.
```

### 19 — pH de un ácido fuerte muy diluido

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "avanzado"
  tags: ["acido_fuerte", "calculo"]

variables:
  conc: uno_de([0.00001, 0.0001])

respuesta: -log10(conc)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un ácido fuerte tiene concentración {conc} M. ¿Cuál es su pH?"

explicacion: |
  pH = -log10({conc}) — a menor concentración de ácido fuerte, el pH se acerca más a 7 (neutro).
```

### 20 — Comparación cualitativa fuerte vs. débil

```
metadata:
  materia: "quimica"
  tema: "ph_poh_nivel_2"
  nivel: "intermedio"
  tags: ["comparacion", "conceptos"]

respuesta: "el ácido fuerte, porque tiene más [H+] disuelto realmente"
tipo: mc
opciones_explicitas: ["el ácido fuerte, porque tiene más [H+] disuelto realmente", "el ácido débil, porque se disocia menos", "ambos tienen el mismo pH siempre", "no se puede saber sin la Ka"]

enunciado: "Entre HCl 0,01 M (fuerte) y ácido acético 0,01 M (débil), ¿cuál tiene el pH más bajo?"

explicacion: |
  El HCl se disocia 100%, así que su [H+] real es mayor que la del ácido acético (que se disocia sólo parcialmente): su pH es más bajo.
```
