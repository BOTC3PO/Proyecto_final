# Examen jefe — Maestro de Movimientos y Óptica

> Logro #166. Completaste el examen jefazo integrando MRUV, óptica, oscilaciones y potencia. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **132 preguntas totales** en 5/5 secciones.

---

## Sección: mruv (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)

respuesta: v0 + a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} + {a}t (m/s). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} + {a}×{t} = {v0 + a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad", "signos"]

variables:
  v0: random(30, 60)
  a: random(1, 5)
  t: random(1, 8)

respuesta: v0 - a * t
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {v0} − {a}t (m/s, frenando). ¿Cuánto vale v({t})?"

explicacion: |
  v({t}) = {v0} − {a}×{t} = {v0 - a * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)

respuesta: x0 + v0 * t + (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t² (m). ¿Cuánto vale x({t})?"

pasos:
  - "x({t}) = {x0} + {v0}×{t} + ({a}×{t}²)/2 = {x0 + v0 * t + (a * t ^ 2) / 2}"

explicacion: |
  Se evalúan los tres términos y se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["posicion"]

variables:
  a: random(2, 8) * 2
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del reposo (v₀=0, x₀=0) con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x(t) = ½at² = {a}×{t}²/2 = {(a * t ^ 2) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 5)
  k: random(1, 5)
  v_final: v0 + 2 * a * k
  dx: k * (v_final + v0)

respuesta: v_final
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². Después de recorrer {dx} m, ¿cuál es la velocidad final? (usando v²=v₀²+2aΔx)"

pasos:
  - "v² = {v0}² + 2×{a}×{dx} = {v0 ^ 2 + 2 * a * dx}"
  - "v = √{v0 ^ 2 + 2 * a * dx} = {v_final}"

explicacion: |
  Se usa la fórmula sin tiempo cuando no hace falta (o no se conoce) t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["sin_tiempo"]

variables:
  v0: random(0, 10)
  a: random(1, 6)
  dx_sol: random(5, 20)

respuesta: dx_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². La velocidad final da un número que no hace falta calcular a mano — sabiendo que v²−v₀² = {2 * a * dx_sol}, ¿cuánto vale Δx?"

pasos:
  - "Δx = (v²−v₀²)/(2a) = {2 * a * dx_sol}/{2 * a} = {dx_sol}"

explicacion: |
  Se despeja Δx de la ecuación sin tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  v0: random(0, 20)
  a_sol: random(1, 10)
  t: random(1, 8)
  v: v0 + a_sol * t

respuesta: (v - v0) / t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pasa de v₀={v0} m/s a v={v} m/s en t={t} s. ¿Cuál es su aceleración?"

explicacion: |
  a = (v−v₀)/t = ({v}−{v0})/{t} = {(v - v0) / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["tiempo"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t_sol: random(1, 10)
  v: v0 + a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "v₀={v0} m/s, a={a} m/s². ¿Cuánto tiempo tarda en llegar a v={v} m/s?"

explicacion: |
  t = (v−v₀)/a = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico v-t de un MRUV es una recta (no horizontal, salvo que a=0)."

explicacion: |
  v(t)=v₀+at es una función lineal de t, con pendiente a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico x-t de un MRUV es una parábola."

explicacion: |
  x(t)=x₀+v₀t+½at² es una función cuadrática de t.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el gráfico v-t, la pendiente de la recta es exactamente la aceleración."

explicacion: |
  Mismo principio que en x-t con MRU: la pendiente es la tasa de
  cambio — acá, de la velocidad.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  a: random(2, 10)
  t: random(1, 8)

respuesta: (a * t ^ 2) / 2
tipo: mc
opciones_explicitas:
  - (a * t ^ 2) / 2
  - a * t ^ 2
  - (a * t) / 2

enunciado: "Un objeto parte del reposo con aceleración {a} m/s². ¿Cuánto recorrió en t={t} s?"

explicacion: |
  x=½at² — olvidar el ½ (o el cuadrado) es el error más común de la
  fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En un MRUV, la fórmula v=d/t (de MRU) sigue dando la velocidad en cualquier instante."

explicacion: |
  v=d/t asume velocidad CONSTANTE — en MRUV la velocidad cambia, así que
  hacen falta las fórmulas específicas de MRUV.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 20)
  a: random(1, 10)
  t: random(1, 10)
  real: v0 + a * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "v(t) = {v0} + {a}t. ¿Es correcto que v({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  t: random(10, 30)

respuesta: (a * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un avión acelera desde el reposo a {a} m/s² durante {t} s antes de despegar. ¿Qué distancia recorrió en la pista?"

explicacion: |
  x=½at², partiendo del reposo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "v₀ (velocidad inicial) y v(t) (velocidad en un instante t cualquiera) son siempre el mismo número."

explicacion: |
  Sólo coinciden en t=0 — en cualquier otro instante, difieren según la
  aceleración acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una aceleración negativa no significa automáticamente que el objeto está frenando — depende del signo de la velocidad."

explicacion: |
  Si v es negativa y a también, el objeto en realidad acelera (cada vez
  más rápido) en sentido negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  v0: random(0, 15)
  a: random(1, 8)
  t: random(1, 8)
  v: v0 + a * t
  dx: v0 * t + (a * t ^ 2) / 2

respuesta: ((v ^ 2) == (v0 ^ 2 + 2 * a * dx))
tipo: vf

enunciado: "v₀={v0}, a={a}, t={t}. Con v={v} y Δx={dx} (calculados con las otras dos fórmulas), ¿se cumple v²=v₀²+2aΔx?"

explicacion: |
  Las tres fórmulas de MRUV son consistentes entre sí — cualquier par
  de ellas tiene que dar el mismo resultado que la tercera.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  t: random(1, 8)

respuesta: 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo con aceleración g=10 m/s² (caída libre). ¿Cuál es su velocidad después de {t} s?"

explicacion: |
  v=at, con v₀=0 — el caso más simple de caída libre, antes de ver
  `../tiro-vertical/` con velocidad inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La unidad de la aceleración en el sistema SI es m/s² (metros por segundo, por segundo)."

explicacion: |
  Es "cuánto cambia la velocidad (m/s) por cada segundo que pasa" — de
  ahí la unidad al cuadrado en el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0_sol: random(0, 20)
  a: random(1, 10)
  t: random(1, 8)
  v: v0_sol + a * t

respuesta: v0_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con aceleración {a} m/s² llega a v={v} m/s después de {t} s. ¿Cuál era su velocidad inicial?"

explicacion: |
  v₀ = v−at = {v}−{a}×{t} = {v0_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si en las fórmulas de MRUV se pone a=0, se recuperan exactamente las fórmulas de MRU."

explicacion: |
  v(t)=v₀+0·t=v₀ (constante), x(t)=x₀+v₀t+0=x₀+v₀t — el MRU es el caso
  particular de MRUV sin aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  n: random(1, 5)
  v0: 2 * a * n
  dx: 2 * a * n ^ 2

respuesta: dx
tipo: input
tolerancia_abs: 0

enunciado: "Un auto frena desde v₀={v0} m/s con desaceleración {a} m/s² hasta detenerse (v=0). ¿Qué distancia recorre hasta parar?"

pasos:
  - "0 = v₀² − 2aΔx → Δx = v₀²/(2a)"

explicacion: |
  Es la misma cuenta que se profundiza en
  `../../vida-cotidiana/distancia-frenado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el instante en que v=0 dentro de un MRUV, la aceleración puede seguir siendo distinta de 0 (por ejemplo, en el punto más alto de un tiro vertical)."

explicacion: |
  v=0 es sólo un instante; a sigue actuando (la gravedad no se apaga en
  el punto más alto) — adelanto de `../tiro-vertical/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 20)
  v0: random(0, 15)
  a: random(2, 6) * 2
  t: random(1, 6)
  real: x0 + v0 * t + (a * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v0}t + ½×{a}t². ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "v² = v₀² + 2aΔx"
tipo: mc
opciones_explicitas:
  - "v² = v₀² + 2aΔx"
  - "v = v₀ + at"
  - "x = x₀ + v₀t + ½at²"

enunciado: "Un problema da v₀, a y Δx, y pide la velocidad final — sin dar el tiempo. ¿Qué fórmula conviene usar?"

explicacion: |
  Es la única de las tres que no necesita el tiempo como dato.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  v0: random(20, 60)
  a: random(2, 10)

respuesta: v0 / a
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto con v₀={v0} m/s frena con desaceleración {a} m/s². ¿Cuánto tarda en detenerse (v=0)?"

explicacion: |
  0 = v₀ − at → t = v₀/a.
```

```
metadata:
  materia: "matematicas"
  tema: "mruv"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar en qué instante un objeto en MRUV pasa por una posición dada, hay que resolver una ecuación cuadrática en t."

explicacion: |
  x(t)=x₀+v₀t+½at² es cuadrática en t — despejar t de una posición dada
  usa la fórmula resolvente de `../../matematica/ecuacion-cuadratica/`.
```

## Sección: ojo-humano-instrumento-optico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "optica"]

respuesta: "lente convergente"
tipo: completar
respuestas_validas: ["lente convergente", "lente divergente", "espejo plano"]

enunciado: "El cristalino es una estructura del ojo que actúa como una ___ para enfocar la luz en la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "imagen"]

respuesta: "real e invertida"
tipo: completar
respuestas_validas: ["real e invertida", "virtual y derecha", "real y derecha", "virtual e invertida"]

enunciado: "La imagen que se forma sobre la ___ es de naturaleza ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["fisiologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿El cristalino cambia su distancia focal para permitir la acomodación visual?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["secuencia"]]

respuesta: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]
tipo: ordenar
opciones_explicitas: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]

enunciado: "Ordene el camino de la luz desde el exterior hasta la detección visual:"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: "controlar la cantidad de luz"
tipo: completar
respuestas_validas: ["controlar la cantidad de luz", "enfocar la imagen", "producir la visión"]

enunciado: "La función principal del iris es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "miopia"]

respuesta: "divergente"
tipo: completar
respuestas_validas: ["divergente", "convergente", "plana"]

enunciado: "En un ojo con miopía, la imagen se forma antes de la retina, por lo que se requiere una lente ___ para corregirlo."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "hipermetropia"]

respuesta: "convergente"
tipo: completar
respuestas_validas: ["convergente", "divergente", "neutra"]

enunciado: "Para corregir la hipermetropía, donde el punto focal está detrás de la retina, se utiliza una lente ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "detrás"
tipo: completar
respuestas_validas: ["detrás", "delante", "sobre"]

enunciado: "En un ojo miope, el punto focal de los rayos paralelos se encuentra ___ de la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "cilíndrica"
tipo: completar
respuestas_validas: ["cilíndrica", "esférica", "plana"]

enunciado: "El astigmatismo se debe a una curvatura irregular de la córnea o el cristalino y se corrige con lentes ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "miopía"
tipo: mc
opciones_explicitas: ["miopía", "hipermetropía", "astigmatismo", "presbicia"]

enunciado: "¿Qué defecto impide ver con claridad los objetos lejanos?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f: 25.0
  d: 100.0

respuesta: 0.25
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un objeto se coloca a {d} cm de una lente con una distancia focal de {f} cm, ¿cuál es la distancia de la imagen en metros? (Use la fórmula 1/f = 1/d + 1/d')"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_m: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcule la potencia (en dioptrías) de una lente cuya distancia focal es {f_m} metros."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_ojo: 0.02
  d_obj: 0.5

respuesta: 0.0416
tipo: completar
tolerancia_abs: 0.001

enunciado: "Un ojo tiene una distancia focal de {f_ojo} m. Si un objeto está a {d_obj} m, ¿a qué distancia de la lente se forma la imagen? (Calcule en metros)"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  h_obj: 2.0
  h_img: 10.0

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si el tamaño de un objeto es {h_obj} cm y el tamaño de su imagen es {h_img} cm, ¿cuál es el aumento lateral?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  p_correcta: 2.0
  p_incorrecta: -2.0

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Si una lente tiene una potencia de +2.0 dioptrías, ¿es una lente ___?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La luz debe refractarse al pasar del aire al córnea?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "falso"
tipo: completar
enunciado: "¿La retina es la parte del ojo encargada de enfocar la luz mediante la refracción?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más pequeña"
tipo: completar
respuestas_validas: ["pupila más pequeña", "pupila más grande", "cristalino más plano"]

enunciado: "En condiciones de mucha luz, la pupila experimenta miosis, lo que significa que la pupila es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más grande"
tipo: completar
respuestas_validas: ["pupila más grande", "pupila más pequeña", "cristalino más esférico"]

enunciado: "La midriasis es la dilatación de la pupila, es decir, la ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: "distancia mínima"
tipo: completar
respuestas_validas: ["distancia mínima", "distancia máxima", "foco infinito"]

enunciado: "El punto remoto se define como la ___ a la que un objeto puede estar para ser visto con nitidez por un ojo con un defecto."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0,1])
  tipo_lente: uno_de(["divergente", "convergente"])
  lente_texto: uno_de(["divergente", "convergente"])

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente"]

enunciado: "Un paciente tiene miopía. El médico le receta una lente ___ para corregir su visión."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Para un paciente con hipermetropía, el tipo de lente necesario es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "se desvía"
tipo: completar
respuestas_validas: ["se desvía", "no cambia", "se refleja"]

enunciado: "Cuando la luz pasa del aire al cristalino, su velocidad cambia y, por lo tanto, el rayo ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "real"
tipo: completar
respuestas_validas: ["real", "virtual", "imaginaria"]

enunciado: "Si la imagen se puede proyectar sobre una pantalla, decimos que la imagen es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "presbicia"
tipo: completar
respuestas_validas: ["presbicia", "miopía", "astigmatismo"]

enunciado: "La pérdida de la capacidad de acomodación del cristalino debido a la edad se conoce como ___."
```

## Sección: oscilacion-periodo (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["definicion", "movimiento"]

respuesta: "oscilación"
tipo: completar
respuestas_validas: ["oscilación", "oscilacion"]

enunciado: "El movimiento de vaivén de un objeto alrededor de una posición de equilibrio se denomina ___."

explicacion: |
  Una oscilación es un movimiento repetitivo que pasa por una posición de equilibrio, como un péndulo o un resorte.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "tiempo"]

variables:
  escenario: uno_de([
    ["un ciclo completo", "el tiempo que tarda en realizarse un ciclo completo"],
    ["la frecuencia", "la cantidad de ciclos por unidad de tiempo"],
    ["la amplitud", "la distancia máxima desde el equilibrio"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["el tiempo que tarda en realizarse un ciclo completo", "la cantidad de ciclos por unidad de tiempo", "la distancia máxima desde el equilibrio"]

enunciado: "El periodo (T) se define como: {escenario[0]}."

explicacion: |
  El periodo es precisamente el intervalo de tiempo necesario para que el sistema complete un ciclo completo de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Un movimiento que solo se desplaza en una sola dirección sin volver nunca a su punto de origen es un movimiento oscilatorio?"

explicacion: |
  Falso. Para que sea oscilatorio, el objeto debe regresar a su posición de partida y repetir el ciclo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  unidad: uno_de([
    ["segundos", "s"],
    ["metros", "m"],
    ["hertz", "Hz"]
  ])

respuesta: unidad[1
tipo: mc
opciones_explicitas: ["s", "m", "Hz"]

enunciado: "Dado que el periodo mide el tiempo de un ciclo, su unidad en el Sistema Internacional es el/la {unidad[0]}."

explicacion: |
  El tiempo se mide en segundos (s) en el SI. El metro (m) es longitud y el Hertz (Hz) es frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "puntos_criticos"]

variables:
  secuencia: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

enunciado: "Ordene los puntos de trayectoria de un objeto que oscila de forma simple, comenzando desde su posición de equilibrio:"

explicacion: |
  En una oscilación completa, el objeto pasa por el equilibrio, alcanza un extremo, vuelve al equilibrio, alcanza el extremo opuesto y regresa al equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "el tiempo que tarda en completarse un ciclo completo"
tipo: completar
respuestas_validas: ["el tiempo que tarda en completarse un ciclo completo", "el tiempo de un ciclo completo"]

enunciado: "En un movimiento oscilatorio, el periodo se define como ___"

explicacion: |
  El periodo (T) es el intervalo de tiempo necesario para que un objeto complete un ciclo completo de movimiento y regrese a su posición inicial con la misma velocidad y dirección.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["calculo", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2.0"], ["0.2", "5.0"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["0.5 Hz", "2.0 Hz", "1.0 Hz", "5.0 Hz"]

enunciado: "Si un objeto realiza un ciclo completo en {datos[idx][0]} segundos, ¿cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el periodo (T): T = {datos[idx][0]} s"
  - "Usar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular: f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz"

explicacion: |
  La frecuencia (f) es el inverso del periodo (T). Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["relacion", "frecuencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que si la frecuencia de un oscilador aumenta, su periodo también aumenta?"

explicacion: |
  Falso. La relación es inversamente proporcional: T = 1/f. Si la frecuencia aumenta, el periodo disminuye (el ciclo es más rápido).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "avanzado"
  tags: ["pendulo", "calculo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["1.0", "0.5"], ["0.4", "1.2]]

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo simple tiene una longitud de {escenario[idx][0]} metros. Calcula su periodo (T) usando la fórmula T = 2 * pi * sqrt(L / g). (Usa g = 9.8 m/s²)"

pasos:
  - "L = {escenario[idx][0]} m"
  - "T = 2 * pi * sqrt({escenario[idx][0]} / 9.8)"
  - "T = 2 * 3.14159 * sqrt({escenario[idx][0] / 9.8})"

explicacion: |
  Aplicando la fórmula: T = 2 * pi * sqrt({escenario[idx][0]} / 9.8) ≈ {escenario[idx][1]} s.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["movimiento", "secuencia"]

respuesta: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]

enunciado: "Ordena las posiciones que recorre un objeto en un ciclo completo de oscilación, partiendo desde el extremo derecho (A):"

explicacion: |
  Un ciclo completo implica ir de un extremo al otro y volver al punto de partida, pasando por el centro en cada tramo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos_basicos", "periodo"]

respuesta: "un ciclo completo"
tipo: completar
respuestas_validas: ["un ciclo completo", "un ciclo"]

enunciado: "En un movimiento oscilatorio, el tiempo necesario para que el objeto complete ___ se denomina periodo."

explicacion: |
  El periodo es el intervalo de tiempo que transcurre entre dos instantes sucesivos en los que el sistema vuelve a pasar por el mismo estado (misma posición y misma dirección).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2"], ["2", "0.5"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["0.5 Hz", "2 Hz", "1 Hz", "0.2 Hz"]

enunciado: "Si un objeto realiza un movimiento oscilatorio con un periodo de {datos[idx][0]} segundos, su frecuencia es de ___."

explicacion: |
  La frecuencia (f) es el inverso del periodo (T), es decir, f = 1/T. Si T = 0.5s, f = 1/0.5 = 2 Hz. Si T = 2s, f = 1/2 = 0.5 Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["isocronismo", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "En un péndulo simple ideal (sin fricción), el periodo de oscilación depende de la amplitud del movimiento (si la amplitud es muy grande)."

explicacion: |
  Para ángulos pequeños, el péndulo es isócrono, lo que significa que su periodo es independiente de la amplitud. En el modelo ideal de física básica, asumimos que el periodo es constante sin importar la amplitud.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fase", "ciclo"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas: ["punto de equilibrio", "posición de equilibrio"]

enunciado: "Un ciclo completo de oscilación se define como el tiempo que tarda el objeto en ir desde el ___ hasta el extremo opuesto y regresar al mismo punto inicial."

explicacion: |
  Un error común es pensar que el ciclo solo ocurre entre extremos. El ciclo es el recorrido completo que incluye pasar por el punto de equilibrio en ambas direcciones.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["secuencia", "movimiento"]

respuesta: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]

enunciado: "Ordena la secuencia de posiciones que recorre un objeto que oscila, partiendo desde un extremo hacia el otro y regresando:"

explicacion: |
  Para completar un ciclo completo, el objeto debe recorrer la distancia total de ida y vuelta, pasando por el centro (punto de equilibrio) en cada tramo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "frecuencia", "conceptos_basicos"]

variables:
  frecuencia_ejemplo: 5.0

respuesta: "frecuencia_ejemplo"
tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse un ciclo", "El número de ciclos por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad máxima del objeto"]

enunciado: "Si un péndulo realiza un movimiento repetitivo, ¿qué magnitud representa el tiempo necesario para que se complete un ciclo completo?"

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo, mientras que la frecuencia (f) es la cantidad de ciclos que ocurren en un segundo. Son inversamente proporcionales: f = 1/T.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["ciclo", "movimiento_repetitivo"]

variables:
  valor_ciclo: 1.0

respuesta: "verdadero"
tipo: completar
enunciado: "En un movimiento oscilatorio, un 'ciclo completo' implica que el objeto regresa exactamente a su posición inicial con la misma dirección de movimiento que tenía al comenzar."

explicacion: |
  Correcto. Para que un movimiento sea considerado periódico y completar un ciclo, el sistema debe volver al mismo estado (posición y velocidad) para iniciar una nueva repetición.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["calculo", "frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 0.5], [0.5, 2.0]]

respuesta: datos[idx][1
tipo: completar
respuestas_validas: [0.5, 2.0]

enunciado: "Si el periodo de una oscilación es de {datos[idx][0]} segundos, la frecuencia de dicha oscilación es de ___ Hz."

pasos:
  - "Identificar el valor del periodo (T = {datos[idx][0]})"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"

explicacion: |
  Utilizando la relación f = 1/T, si T = {datos[idx][0]}, entonces f = 1/{datos[idx][0]} = {datos[idx][1]} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["amplitud", "periodo", "distincion"]

respuesta: "Amplitud"
tipo: mc
opciones_explicitas: ["Amplitud", "Frecuencia", "Aceleración", "Velocidad"]

enunciado: "Mientras que el periodo mide el tiempo de un ciclo, la ___ mide la distancia máxima desde la posición de equilibrio."

explicacion: |
  La amplitud es una medida de longitud (distancia), mientras que el periodo es una medida de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "ciclo", "posicion"]

respuesta: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]
tipo: ordenar
opciones_explicitas: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]

enunciado: "Ordena las posiciones que recorre un objeto que oscila, comenzando desde su máxima elongación a la derecha, hasta completar un ciclo completo."

explicacion: |
  Un ciclo completo implica volver al punto de partida tras haber pasado por el centro y el extremo opuesto. La secuencia lógica es: Máximo (+A) -> Centro (0) -> Mínimo (-A) -> Centro (0) -> Regreso al Máximo (+A).
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["pendulo", "periodo"]

variables:
  datos: [["un péndulo de 1 metro", 2.0], ["un péndulo de 0.25 metros", 1.0]]
  idx: uno_de([0, 1])

enunciado: "En un reloj antiguo, observamos que {datos[idx][0]} completa un ciclo de vaivén en {datos[idx][1]} segundos. ¿Cuál es el periodo de este movimiento?"

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo completo de movimiento. En este caso, el tiempo dado es el periodo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "ritmo_cardiaco"]

variables:
  frecuencia_corazon: uno_de([60, 75, 120])

enunciado: "Un atleta tiene una frecuencia cardíaca de {frecuencia_corazon} latidos por minuto. Si consideramos cada latido como un ciclo de oscilación, ¿cuántos segundos tarda en realizar un solo latido (periodo)?"

pasos:
  - "Convertir la frecuencia de latidos/minuto a latidos/segundo: {frecuencia_corazon} / 60"
  - "Calcular el periodo como el inverso de la frecuencia: 1 / (frecuencia_corazon / 60)"

respuesta: 60 / frecuencia_corazon
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El periodo es el inverso de la frecuencia. Si el atleta tiene {frecuencia_corazon} latidos por minuto, el periodo es 60/{frecuencia_corazon} segundos.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["oscilacion", "conceptos"]

enunciado: "Si un niño en un columpio completa 10 oscilaciones completas en un tiempo total de 20 segundos, ¿cuál es el periodo de la oscilación?"

opciones_explicitas: ["0.5 s", "2.0 s", "20 s", "200 s"]
respuesta: "2.0 s"
tipo: mc

explicacion: |
  El periodo T se calcula dividiendo el tiempo total entre el número de oscilaciones: T = tiempo / n = 20s / 10 = 2.0 s.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "Un movimiento se considera periódico si se repite en intervalos de tiempo iguales. Si un objeto realiza un ciclo completo, ¿el tiempo transcurrido es el periodo?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exactamente. Por definición, el periodo es el tiempo requerido para que el sistema complete una oscilación o ciclo completo.
```

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fases", "ciclo"]

variables:
  estado_inicial: uno_de(["máximo desplazamiento positivo", "máximo desplazamiento negativo"])
  idx: uno_de([0, 1])
  secuencia: [["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"], ["máximo desplazamiento negativo", "punto de equilibrio", "máximo desplazamiento positivo", "punto de equilibrio"]]

enunciado: "Un pistón de motor realiza un movimiento oscilatorio. Si su estado inicial es {estado_inicial[idx]}, ordene los eventos que marcan un ciclo completo de oscilación."

opciones_explicitas: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
respuesta: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
tipo: ordenar

explicacion: |
  Un ciclo completo debe pasar por todos los puntos de la trayectoria y regresar al punto de partida para ser considerado una oscilación cerrada.
```

## Sección: plano-inclinado-y-rozamiento (29 preguntas)

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["plano_inclinado", "vocabulario"]

enunciado: "¿Qué es un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "Una superficie que forma un ángulo con la horizontal, como una rampa"
  - "Una superficie perfectamente vertical"
  - "Otro nombre para una superficie sin rozamiento"
respuesta: "Una superficie que forma un ángulo con la horizontal, como una rampa"

explicacion: |
  El peso de un objeto sobre esa superficie se descompone en dos
  componentes.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso paralela al plano inclinado es P∥ = peso × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la componente que empuja al objeto a deslizar por la rampa.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso perpendicular al plano inclinado es P⊥ = peso × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la componente que presiona al objeto contra la superficie.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_30: 0.5

respuesta: peso * sen_30
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (sen 30° = 0,5). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,5 = {peso * sen_30} N"

explicacion: |
  P∥ = peso × sen(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  cos_30: 0.87

respuesta: redondear(peso * cos_30, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (cos 30° ≈ 0,87). ¿Cuál es la componente del peso perpendicular al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * cos_30, 1)} N"

explicacion: |
  P⊥ = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_60: 0.87

respuesta: redondear(peso * sen_60, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 60° (sen 60° ≈ 0,87). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * sen_60, 1)} N"

explicacion: |
  Con un ángulo más pronunciado (60° en vez de 30°), la componente que
  empuja a deslizar es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60])
  cos_45: 0.71

respuesta: redondear(peso * cos_45, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 45° (cos 45° ≈ 0,71). ¿Cuál es la normal que ejerce el plano sobre el objeto?"

pasos:
  - "{peso} × 0,71 = {redondear(peso * cos_45, 1)} N"

explicacion: |
  La normal equilibra sólo la componente perpendicular del peso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: falso
tipo: vf

enunciado: "En un plano inclinado, la normal siempre es igual al peso completo del objeto, igual que en una superficie horizontal."

explicacion: |
  Sólo equilibra la componente perpendicular del peso (peso × cos θ),
  que es menor que el peso completo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, menor es la normal que actúa sobre el objeto."

explicacion: |
  cos(θ) disminuye a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, mayor es la componente del peso que empuja al objeto a deslizar."

explicacion: |
  sen(θ) aumenta a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Qué es la fuerza de rozamiento?"
tipo: mc
opciones_explicitas:
  - "La fuerza que se opone al deslizamiento entre dos superficies en contacto"
  - "La fuerza que empuja a un objeto hacia adelante"
  - "Otro nombre para el peso de un objeto"
respuesta: "La fuerza que se opone al deslizamiento entre dos superficies en contacto"

explicacion: |
  Actúa siempre paralela a la superficie de contacto.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿En qué dirección y sentido actúa el rozamiento respecto del movimiento (o del movimiento que tendería a ocurrir)?"
tipo: mc
opciones_explicitas:
  - "Paralela a la superficie de contacto, en sentido contrario al movimiento"
  - "Siempre perpendicular a la superficie de contacto"
  - "En la misma dirección y sentido que el movimiento"
respuesta: "Paralela a la superficie de contacto, en sentido contrario al movimiento"

explicacion: |
  Se opone al deslizamiento, nunca lo favorece.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre rozamiento estático y cinético?"
tipo: mc
opciones_explicitas:
  - "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"
  - "El estático es siempre más chico que el cinético"
  - "No hay ninguna diferencia real entre ambos"
respuesta: "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"

explicacion: |
  El estático impide que el movimiento empiece; el cinético actúa
  durante el movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento estático tiene un valor máximo, más allá del cual el objeto empieza a deslizar."

explicacion: |
  f_estático_máx = μ_e × N: si la fuerza que intenta mover al objeto
  supera ese máximo, el objeto se pone en movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento cinético es prácticamente constante mientras el objeto se desliza, sin depender de qué tan rápido se mueva."

explicacion: |
  f_cinético = μ_c × N, sin ningún término de velocidad en los casos
  simples.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En general, el coeficiente de rozamiento estático (μ_e) es mayor que el coeficiente cinético (μ_c) entre las mismas dos superficies."

explicacion: |
  Es la razón física por la que cuesta más iniciar un movimiento que
  mantenerlo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿De qué depende principalmente el coeficiente de rozamiento (μ) entre dos superficies?"
tipo: mc
opciones_explicitas:
  - "De qué materiales están en contacto"
  - "Del área total de contacto entre las superficies"
  - "De la velocidad a la que se mueve el objeto"
respuesta: "De qué materiales están en contacto"

explicacion: |
  Madera con madera da un μ distinto que goma con asfalto o hielo con
  metal.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En los casos simples que se estudian en la escuela, el coeficiente de rozamiento no depende del área de contacto entre las superficies."

explicacion: |
  Es un resultado que suele sorprender: un ladrillo apoyado sobre su
  cara grande o su cara chica tiene el mismo μ con el piso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_c: 0.2

respuesta: normal * mu_c
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza sobre una superficie con normal {normal} N, y el coeficiente de rozamiento cinético es 0,2. ¿Cuál es la fuerza de rozamiento?"

pasos:
  - "{normal} × 0,2 = {normal * mu_c} N"

explicacion: |
  f_cinético = μ_c × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_e: 0.3

respuesta: normal * mu_e
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto en reposo está sobre una superficie con normal {normal} N, y el coeficiente de rozamiento estático es 0,3. ¿Cuál es la máxima fuerza de rozamiento estático posible, antes de que el objeto empiece a moverse?"

pasos:
  - "{normal} × 0,3 = {normal * mu_e} N"

explicacion: |
  f_estático_máx = μ_e × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  cos_60: 0.5

respuesta: peso * cos_60
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 60° (cos 60° = 0,5). ¿Cuál es la normal?"

pasos:
  - "{peso} × 0,5 = {peso * cos_60} N"

explicacion: |
  N = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: (peso * sen_30) - friccion
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 30° (sen 30° = 0,5), ya deslizando, con una fuerza de rozamiento cinético de {friccion} N oponiéndose. ¿Cuál es la fuerza neta a lo largo del plano?"

pasos:
  - "P∥ = {peso} × 0,5 = {peso * sen_30} N"
  - "{peso * sen_30} − {friccion} = {(peso * sen_30) - friccion} N"

explicacion: |
  Se resta la fuerza de rozamiento a la componente del peso que empuja
  a deslizar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta a lo largo del plano (peso paralelo menos rozamiento) es positiva, el objeto acelera deslizando hacia abajo."

explicacion: |
  Es la segunda ley de Newton aplicada a lo largo del plano inclinado.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60])
  sen_30: 0.5
  friccion_max: peso * sen_30 + random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "Un objeto de peso {peso} N está en reposo en un plano inclinado 30° (P∥ = {peso * sen_30} N). El rozamiento estático máximo posible es {friccion_max} N. ¿El objeto se queda quieto (no empieza a deslizar)?"

explicacion: |
  Como el rozamiento estático máximo ({friccion_max} N) es mayor que la
  componente que empuja a deslizar ({peso * sen_30} N), el objeto no se
  mueve.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "ordenar"]

enunciado: "Ordená los pasos para analizar si un objeto se queda quieto o desliza en un plano inclinado con rozamiento."
tipo: ordenar
opciones_explicitas:
  - "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"
  - "Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)"
  - "Calcular la normal y con ella la fuerza de rozamiento estático máximo"
respuesta_orden:
  - "Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)"
  - "Calcular la normal y con ella la fuerza de rozamiento estático máximo"
  - "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"

explicacion: |
  La comparación final es la que decide si hay movimiento o no.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué es tan difícil caminar sin resbalar sobre hielo?"
tipo: mc
opciones_explicitas:
  - "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"
  - "Porque el hielo no tiene normal"
  - "Porque el peso de la persona cambia sobre el hielo"
respuesta: "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"

explicacion: |
  Con μ muy chico, la fuerza de rozamiento disponible es insuficiente
  para el empuje necesario al caminar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué el rozamiento, aunque suele pensarse como algo que 'frena' o 'molesta', también es necesario para muchas acciones cotidianas?"
tipo: mc
opciones_explicitas:
  - "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"
  - "En realidad el rozamiento nunca es útil, siempre conviene eliminarlo"
  - "El rozamiento sólo afecta a objetos en un plano inclinado"
respuesta: "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"

explicacion: |
  Sin rozamiento, las ruedas patinarían y los pies resbalarían sin
  poder empujar contra nada.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  masa: uno_de([4, 8])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: redondear(((masa * 10 * sen_30) - friccion) / masa, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de {masa} kg (peso {masa * 10} N, con g=10 m/s²) desliza por un plano inclinado 30° (sen 30° = 0,5), con una fuerza de rozamiento de {friccion} N. ¿Cuál es su aceleración a lo largo del plano?"

pasos:
  - "P∥ = {masa * 10} × 0,5 = {(masa * 10) * sen_30} N"
  - "Fuerza neta: {(masa * 10) * sen_30} − {friccion} = {((masa * 10) * sen_30) - friccion} N"
  - "a = {((masa * 10) * sen_30) - friccion} ÷ {masa} = {redondear(((masa * 10 * sen_30) - friccion) / masa, 2)} m/s²"

explicacion: |
  Combina el peso descompuesto, el rozamiento y la segunda ley de
  Newton en un solo problema.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el plano inclinado y el rozamiento juntos?"
tipo: mc
opciones_explicitas:
  - "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"
  - "Sólo sirve para superficies perfectamente horizontales"
  - "Sólo aplica quitando el rozamiento del cálculo"
respuesta: "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"

explicacion: |
  Es la aplicación combinada de descomposición de vectores, las leyes de
  Newton y el rozamiento.
```

## Sección: potencia-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "potencia"
tipo: "completar"
respuestas_validas: ["potencia", "Potencia"]

enunciado: "La rapidez con la que un dispositivo consume o transforma energía eléctrica en otro tipo de energía se denomina ___."

explicacion: |
  La potencia eléctrica mide la tasa de transferencia de energía por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "vatios"]

opciones_explicitas: ["Voltio (V)", "Amperio (A)", "Vatio (W)", "Ohmio (Ω)"]
respuesta: "Vatio (W)"
tipo: "mc"

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el:"

explicacion: |
  El vatio (W) se define como el trabajo realizado por una fuerza de un Newton a lo largo de un metro en un segundo, o equivalentemente, la potencia de un dispositivo que consume 1 Joule por segundo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["relacion_variables", "formula"]

variables:
  escenario: uno_de([
    ["V=12, I=2", "24"],
    ["V=220, I=5", "1100"],
    ["V=10, I=0.5", "5"]
  ])

respuesta: escenario[2][1
tipo: "input"
tolerancia_abs: 0

enunciado: "Si un dispositivo tiene un voltaje de {escenario[2][0]}, ¿cuál es su potencia eléctrica en vatios?"

pasos:
  - "Identificar el voltaje (V) y la intensidad (I)."
  - "Aplicar la fórmula P = V · I."

explicacion: |
  Usando la fórmula P = V · I:
  P = 10V · 0.5A = 5W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la potencia eléctrica es directamente proporcional a la resistencia cuando el voltaje se mantiene constante?"

explicacion: |
  Falso. Según la fórmula P = V²/R, si el voltaje (V) es constante, la potencia es inversamente proporcional a la resistencia (R). A mayor resistencia, menor potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["formulas", "ley_ohm"]

opciones_explicitas: ["P = I · R", "P = V / R", "P = I² · R", "P = V² / R"]
respuesta: "P = I² · R"
tipo: "mc"

enunciado: "Combinando la Ley de Ohm (V = I · R) con la definición de potencia (P = V · I), obtenemos que la potencia también puede expresarse como:"

explicacion: |
  Sustituyendo V por (I · R) en la fórmula de potencia:
  P = (I · R) · I = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  datos: [[12, 2], [24, 3], [10, 5], [220, 2]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  i: datos[idx][1]
  p: v * i

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuente de alimentación entrega un voltaje de {v} V y una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por el dispositivo?"

pasos:
  - "Identificar los valores de voltaje (V) y corriente (I)."
  - "Aplicar la fórmula de la potencia eléctrica: P = V · I."
  - "Multiplicar el voltaje por la corriente: {v} * {i} = {p}."

explicacion: |
  La potencia eléctrica (P) se define como el producto del voltaje (V) por la intensidad de corriente (I). En este caso, la potencia es de {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "formula"]

variables:
  datos: [[10, 5], [20, 10], [5, 2], [15, 3]]
  idx: uno_de([0,1,2,3])
  i: datos[idx][0]
  r: datos[idx][1]
  p: i * i * r

respuesta: "P = I² · R"
tipo: mc
opciones_explicitas: ["P = V · I", "P = I² · R", "P = V / R", "P = I / R"]

enunciado: "Si conocemos la intensidad de corriente (I) que circula por un conductor y su resistencia (R), ¿cuál es la expresión correcta para calcular la potencia eléctrica (P) disipada?"

explicacion: |
  Cuando se conoce la corriente y la resistencia, la fórmula derivada de P = V · I (sustituyendo V = I · R) es P = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia"]

variables:
  datos: [[100, 20], [200, 50], [12, 4], [220, 110]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  r: datos[idx][1]
  p: (v * v) / r

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y se conecta a una fuente de {v} V. Calcula la potencia disipada en el componente."

pasos:
  - "Elevar el voltaje al cuadrado: {v}^2."
  - "Dividir el resultado por la resistencia: ({v}^2) / {r}."

explicacion: |
  Utilizando la variante de la fórmula que relaciona voltaje y resistencia: P = V² / R. El cálculo es ({v}^2) / {r} = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el Vatio (W), que equivale a un Julio por segundo (J/s)."
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["completar", "formula"]

respuestas_validas: ["V * I", "V*I", "V·I"]
respuesta: "V * I"
tipo: completar

enunciado: "La fórmula fundamental para calcular la potencia eléctrica (P) en un circuito de corriente continua es P = ___."

explicacion: |
  La potencia eléctrica es el producto de la diferencia de potencial (Voltaje) por la intensidad de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

respuesta: "aumenta"
tipo: completar
respuestas_validas: ["aumenta"]

enunciado: "Si mantenemos la resistencia de un componente constante y aumentamos el voltaje aplicado, la potencia eléctrica consumida por dicho componente ___."

explicacion: |
  De la fórmula $P = V^2 / R$, se observa que la potencia es directamente proporcional al cuadrado del voltaje. Si el voltaje aumenta, la potencia aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "potencia"]

variables:
  escenario: uno_de([
    ["R1", "R2", "R3", "R1+R2+R3"],
    ["10", "20", "30", "60"]
  ])

respuesta: "R1+R2+R3"
tipo: mc
opciones_explicitas: ["R1", "R2", "R3", "R1+R2+R3"]

enunciado: "En un circuito en serie con tres resistencias, la resistencia equivalente que determina la potencia total entregada por la fuente es ___."

explicacion: |
  En un circuito en serie, la resistencia total es la suma de las resistencias individuales. La potencia total se calcula usando esta resistencia equivalente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["booleano", "corriente", "potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la resistencia de un conductor se mantiene constante y la corriente eléctrica se duplica, la potencia disipada en el conductor se cuadruplica."

explicacion: |
  Usando la fórmula $P = I^2 \cdot R$, si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$. Por lo tanto, es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_ohm"]

variables:
  datos: uno_de([
    [12, 2],
    [220, 5],
    [12, 0.5]
  ])

respuesta: 24.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico está conectado a una fuente de {datos[0]} V y por él circula una corriente de {datos[1]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula P = V * I."

explicacion: |
  La potencia se calcula multiplicando el voltaje por la intensidad: $P = 12\text{V} \cdot 2\text{A} = 24\text{W}$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["procedimiento", "resistencia", "voltaje"]]

opciones_explicitas: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
respuesta: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
tipo: ordenar

enunciado: "Si conoces el voltaje (V) y la resistencia (R) de una bombilla, pero no la corriente (I), ¿cuál es el orden lógico para hallar la potencia usando $P = V \cdot I$?"

explicacion: |
  Primero debes hallar la incógnita faltante ($I = V/R$) y luego aplicar la fórmula de potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["conceptos_base", "potencia"]

respuesta: "potencia"
tipo: "mc"
opciones_explicitas: ["energía", "potencia", "voltaje", "corriente"]

enunciado: "Mientras que la energía eléctrica es la cantidad total de trabajo realizado por una carga en un tiempo determinado, la ___ es la rapidez con la que dicho trabajo se realiza."

explicacion: |
  La potencia (P) mide la tasa de transferencia de energía por unidad de tiempo (P = dE/dt).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["ley_de_joule", "resistencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 5, 2], [20, 2, 4]]
  comparacion: datos[escenario_idx][2] > datos[escenario_idx][1]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si mantenemos el voltaje constante en un circuito, un componente con una resistencia de {datos[escenario_idx][2]} $\Omega$ disipará una potencia {\"mayor\" if comparacion else \"menor\"} que uno con una resistencia de {datos[escenario_idx][1]} $\Omega$."

explicacion: |
  Usando la fórmula $P = V^2 / R$, la potencia es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "avanzado"
  tags: ["ley_de_joule", "corriente"]

variables:
  corriente_inicial: 2.0
  corriente_final: 4.0
  resistencia: 10.0

respuesta: "verdadero"
tipo: "vf"

enunciado: "Si la corriente que atraviesa una resistencia de {resistencia} $\Omega$ se duplica de {corriente_inicial} A a {corriente_final} A, la potencia disipada se cuadruplica."

explicacion: |
  Según la fórmula $P = I^2 \cdot R$, la potencia depende del cuadrado de la intensidad. Si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: ["vatio", "voltio", "amperio", "ohmio"]
tipo: "ordenar"
opciones_explicitas: ["vatio", "voltio", "amperio", "ohmio"]

enunciado: "Ordena las siguientes magnitudes de mayor a menor según su símbolo en el Sistema Internacional (W, V, A, $\Omega$):"

explicacion: |
  El orden solicitado es: W (vatio), V (voltio), A (amperio) y $\Omega$ (ohmio).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_joule"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [[12, 2], [24, 3]]

respuesta: 36.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico tiene una resistencia de {valores[escenario_idx][1]} $\Omega$ y es atravesado por una corriente de {valores[escenario_idx][0]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar la corriente (I) y la resistencia (R)."
  - "Aplicar la fórmula $P = I^2 \cdot R$."
  - "Calcular el resultado final."

explicacion: |
  Aplicando $P = I^2 \cdot R$:
  Si I = 2 y R = 2 $\rightarrow$ $2^2 \cdot 2 = 8$ (Nota: El ejemplo en el código usa valores específicos, el usuario verá uno de los dos casos).
  Si I = 4 y R = 2 $\rightarrow$ $4^2 \cdot 2 = 32$.
  *(Nota para el generador: El valor de respuesta debe ser calculado dinámicamente según el escenario seleccionado en la variable `valores`)*.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

variables:
  escenario: uno_de([[12, 2, 24], [220, 5, 1100], [12, 10, 120]])
  v: escenario[0]
  i: escenario[1]
  p: escenario[2]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una bombilla se conecta a una fuente de tensión de {v} V y por ella circula una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por la bombilla?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula de potencia: P = V * I."

explicacion: |
  La potencia eléctrica se calcula multiplicando la diferencia de potencial por la intensidad de corriente: P = V * I.
  En este caso: {v} V * {i} A = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "potencia", "ley_de_joule"]

variables:
  escenario: uno_de([[10, 5], [20, 4], [5, 10]])
  r: escenario[0]
  i: escenario[1]
  p: escenario[1] * escenario[1] * escenario[0]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω. Si circula una corriente de {i} A a través de él, ¿cuánta potencia se disipa en forma de calor?"

pasos:
  - "Utilizar la variante de la fórmula de potencia: P = I² * R."
  - "Elevar la corriente al cuadrado: {i} * {i}."
  - "Multiplicar por la resistencia: {i} * {i} * {r}."

explicacion: |
  Para calcular la potencia disipada por una resistencia conociendo la corriente, usamos P = I² * R.
  Cálculo: ({i} A)² * {r} Ω = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["comparacion", "potencia"]

variables:
  escenario: uno_de([[50, 1000], [500, 50], [10, 2000]])
  p: escenario[0]
  limite: escenario[1]

respuesta: p > limite
tipo: completar
enunciado: "Un dispositivo consume una potencia de {p} W. Si el límite de seguridad de la instalación es de {limite} W, ¿se ha superado el límite de seguridad?"

explicacion: |
  Comparamos la potencia consumida ({p} W) con el límite establecido ({limite} W). 
  Si {p} > {limite}, la respuesta es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia", "corriente"]

variables:
  escenario: uno_de([[120, 10], [230, 5], [12, 100]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[0] / escenario[1]

respuesta: i
tipo: mc

opciones_explicitas: ["0.5 A", "1.2 A", "2.3 A", "12.0 A"]

enunciado: "Un calefactor tiene una resistencia interna de {r} Ω y se conecta a una toma de corriente de {v} V. ¿Qué intensidad de corriente circulará por el circuito?"

explicacion: |
  Usamos la relación derivada de la ley de Ohm y la potencia: P = V²/R, pero para hallar la corriente usamos I = V / R.
  Cálculo: {v} V / {r} Ω = {i} A.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]

respuesta: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la potencia eléctrica de un electrodoméstico desconocido usando un multímetro en serie y paralelo."

explicacion: |
  Para hallar la potencia P = V * I, primero debemos obtener los valores de la tensión (V) y la intensidad (I) mediante mediciones, luego realizar la multiplicación matemática y finalmente expresar el resultado en la unidad de potencia (W).
```
