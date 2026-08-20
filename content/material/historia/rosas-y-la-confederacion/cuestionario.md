# Historia — rosas y la confederacion (cuestionario, 24 preguntas VBLang)

> Tema: `historia/rosas-y-la-confederacion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["confederacion", "urquiza", "constitucion"]

variables:
  anio_constitucion: 1853
  provincia_congreso: "Santa Fe"

respuesta: "1853"
tipo: input

enunciado: "Tras la batalla de Caseros, Urquiza convocó al Congreso Constituyente en {provincia_congreso}. ¿En qué año se promulgó la nueva Constitución?"

explicacion: |
  La Constitución de 1853 fue el resultado directo de la convocatoria de Urquiza para organizar la nación tras la caída de Rosas.
```

### 2 — pregunta 2

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["unitarios", "federales", "caseros"]

variables:
  lider_unitario: "Justo José de Urquiza"
  lider_federal: "Juan Manuel de Rosas"

respuesta: "Justo José de Urquiza"
tipo: input

enunciado: "¿Quién lideró la 'Liga del Interior' que derrotó al ejército porteño de {lider_federal} en Caseros?"

explicacion: |
  Justo José de Urquiza, gobernador de Entre Ríos, lideró la coalición contra Rosas, representando intereses provinciales opuestos a la hegemonía porteña.
```

### 3 — pregunta 3

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["soberania", "intervencion", "obligado"]

variables:
  pais_a: "Gran Bretaña"
  pais_b: "Francia"

respuesta: "Gran Bretaña y Francia"
tipo: input

enunciado: "En la batalla de la Vuelta de Obligado (1842), las fuerzas rosistas enfrentaron a una flota conjunta de {pais_a} y {pais_b}."

explicacion: |
  La intervención anglo-francesa buscaba abrir el comercio del Paraná. La resistencia simbolizó la defensa de la soberanía nacional.
```

### 4 — pregunta 4

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["causas", "alianzas", "caseros"]

variables:
  factor_interno: "disidencia provincial"
  factor_externo: "intervencion extranjera"

respuesta: "disidencia provincial"
tipo: input

enunciado: "La caída de Rosas se debió a una alianza entre fuerzas internas motivadas por el {factor_interno} y la presión externa."

explicacion: |
  El descontento de las provincias interiores (Liga del Interior) fue clave para que Urquiza pudiera vencer a Rosas.
```

### 5 — pregunta 5

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["simbolismo", "soberania"]

variables:
  concepto_clave: "defensa de la soberanía"

respuesta: "defensa de la soberanía"
tipo: input

enunciado: "Aunque fue una derrota militar, la Vuelta de Obligado se recuerda principalmente por su valor simbólico de {concepto_clave} frente al intervencionismo."

explicacion: |
  El sacrificio de las tropas rosistas elevó la causa de la independencia nacional a un símbolo patrio, trascendiendo el resultado táctico.
```

### 6 — pregunta 6

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["unidad", "fragmentacion"]

variables:
  resultado_politico: "profundizó la división"

respuesta: "profundizó la división"
tipo: input

enunciado: "¿Cuál fue el efecto político inmediato de la victoria de Urquiza en Caseros: la unificación nacional o {resultado_politico}?"

explicacion: |
  La victoria no trajo unidad inmediata; por el contrario, aisló a Buenos Aires y profundizó la brecha entre la provincia y el resto del país.
```

### 7 — pregunta 7

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["batallas", "soberania"]

variables:
  fecha_correcta: "20 de noviembre de 1842"
  fecha_falsa: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado, un símbolo de la resistencia contra la intervención anglo-francesa, ocurrió el {fecha_correcta}."

explicacion: |
  La Vuelta de Obligado se libró el 20 de noviembre de 1842. La fecha mencionada en el enunciado es correcta.
```

### 8 — pregunta 8

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["constitucion", "fechas"]

variables:
  anio: 1853

respuesta: verdadero
tipo: vf

enunciado: "La Constitución Nacional argentina fue sancionada en el año {anio} como resultado del proceso iniciado tras la batalla de Caseros."

explicacion: |
  Es correcto. La Constitución de 1853 fue la primera carta magna nacional, aunque Buenos Aires no adhirió inicialmente.
```

### 9 — pregunta 9

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["intervencion", "diplomacia"]

variables:
  paises: "Inglaterra y Francia"

respuesta: verdadero
tipo: vf

enunciado: "La flota que fue resistida en la Vuelta de Obligado estaba compuesta por fuerzas de {paises}."

explicacion: |
  Es correcto. La intervención anglo-francesa buscaba abrir los ríos interiores al comercio libre, lo que Rosas consideraba una violación de la soberanía.
```

### 10 — pregunta 10

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "fechas"]

variables:
  fecha: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de Caseros, que marcó el fin del segundo gobierno de Rosas, se libró el {fecha}."

explicacion: |
  Es correcto. El 3 de febrero de 1852 es la fecha oficial de la batalla.
```

### 11 — pregunta 11

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "soberania", "intervencion"]

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado se interpretó históricamente como un acto de defensa de la soberanía nacional frente al intervencionismo anglo-francés."

explicacion: |
  Aunque hubo derrotas militares, el sacrificio de las tropas rosistas se convirtió en un símbolo de resistencia contra la injerencia extranjera en el río Paraná.
```

### 12 — pregunta 12

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "cronologia"]

variables:
  dia: 3
  mes: 2

respuesta: "3 de febrero"
tipo: completar

enunciado: "La batalla de Caseros, que marcó el fin del gobierno de Rosas, ocurrió el {dia} de {mes}."

explicacion: |
  La fecha exacta de la batalla es el 3 de febrero de 1852.
```

### 13 — pregunta 13

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "alianzas", "guerra"]

respuesta: falso
tipo: vf

enunciado: "En la batalla de la Vuelta de Obligado, las fuerzas argentinas contaron con el apoyo logístico de Brasil y Uruguay."

explicacion: |
  Fue al revés: Brasil y Uruguay formaban parte de la coalición anglo-francesa que invadía el río Paraná, mientras que las fuerzas de Rosas las combatían.
```

### 14 — pregunta 14

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["obligado", "cronologia"]

variables:
  dia: 20
  mes: 11

respuesta: "20"
tipo: input

enunciado: "La batalla de la Vuelta de Obligado ocurrió el día {dia} del mes {mes} de 1842. Escribe solo el número del día."

explicacion: |
  La fecha es 20 de noviembre de 1842.
```

### 15 — pregunta 15

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["constitucion", "buenos_aires", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La provincia de Buenos Aires se integró inmediatamente al resto del país tras la sanción de la Constitución de 1853."

explicacion: |
  Buenos Aires se separó de la Confederación Argentina entre 1852 y 1861, manteniendo un estado propio hasta su reincorporación posterior.
```

### 16 — pregunta 16

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["constitucion", "objetivo", "unidad"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los objetivos principales de la Constitución de 1853 era superar la fragmentación territorial y lograr la unidad nacional."

explicacion: |
  El texto constitucional buscaba establecer un régimen federal que integrara a las provincias, aunque Buenos Aires se mantuvo al margen inicialmente.
```

### 17 — pregunta 17

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  anio: 1852

respuesta: "1852"
tipo: input

enunciado: "Juan Manuel de Rosas cayó del poder en el año {anio}."

explicacion: |
  La batalla de Caseros ocurrió en 1852, poniendo fin al gobierno de Rosas.
```

### 18 — pregunta 18

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion", "buenos_aires"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el gobierno de Rosas, la provincia de Buenos Aires ejerció un dominio hegemónico sobre el resto del país."

explicacion: |
  Rosas gestionaba las relaciones exteriores y el comercio portuario, centralizando el poder económico y político en Buenos Aires.
```

### 19 — pregunta 19

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "consecuencias", "fractura"]

respuesta: falso
tipo: vf

enunciado: "La victoria en Caseros trajo consigo la unificación inmediata del país bajo la Constitución de 1853."

explicacion: |
  La victoria de Caseros profundizó la división, llevando a la separación de Buenos Aires de la Confederación durante casi una década.
```

### 20 — pregunta 20

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  mes: 2

respuesta: "2"
tipo: input

enunciado: "La batalla de Caseros ocurrió en el mes {mes} del año 1852."

explicacion: |
  La fecha es 3 de febrero de 1852.
```

### 21 — pregunta 21

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["politica", "provincias", "resentimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Las provincias interiores sentían que sus intereses estaban subordinados a los de Buenos Aires durante el gobierno de Rosas."

explicacion: |
  El control portuario y las aduanas por parte de Buenos Aires generaba un fuerte resentimiento en las provincias del interior.
```

### 22 — pregunta 22

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "identidad", "sacrificio"]

respuesta: verdadero
tipo: vf

enunciado: "A pesar de la derrota militar, la batalla de la Vuelta de Obligado dejó una huella profunda en la identidad nacional como símbolo de sacrificio."

explicacion: |
  El heroísmo de las tropas y civiles en Obligado fue reinterpretado como un acto de defensa de la soberanía.
```

### 23 — pregunta 23

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "constitucion"]

variables:
  anio: 1853

respuesta: "1853"
tipo: input

enunciado: "La Constitución Nacional fue sancionada en el año {anio}."

explicacion: |
  La primera Constitución Nacional de Argentina se sancionó en 1853.
```

### 24 — pregunta 24

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "inestabilidad", "guerra_civil"]

respuesta: verdadero
tipo: vf

enunciado: "La caída de Rosas no trajo la unidad nacional deseada, sino que abrió la puerta a un período de inestabilidad y guerra civil."

explicacion: |
  Tras Caseros, Argentina vivió una larga etapa de fragmentación política y conflictos entre Buenos Aires y la Confederación.
```
