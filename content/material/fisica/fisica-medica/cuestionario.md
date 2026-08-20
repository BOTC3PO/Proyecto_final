# Fisica — fisica medica (cuestionario, 39 preguntas VBLang)

> Tema: `fisica/fisica-medica`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "atenuacion", "exponencial"]

variables:
  I0: random(100, 200)
  mu: random_float(0.5, 1.5)
  x: random(10, 20)

respuesta: redondear(I0 * exp(-mu * x), 2)
tipo: input

enunciado: "Un haz de rayos X con intensidad inicial {I0} unidades atraviesa un tejido de espesor {x} cm y coeficiente de atenuación {mu} cm⁻¹. ¿Cuál es la intensidad final que emerge? (Usa e ≈ 2.718)"

explicacion: |
  La intensidad final se calcula con la ley de Beer-Lambert: I = I0 * e^(-mu * x).
  Sustituyendo los valores: I = {I0} * e^(-{mu} * {x}).
```

### 2 — pregunta 2

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["radioactividad", "vida_media", "PET"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La vida media de un isótopo radiactivo es el tiempo necesario para que la mitad de los núcleos inestables se desintegren."

explicacion: |
  Esta es la definición correcta de vida media. No depende de la cantidad inicial, sino de la probabilidad intrínseca de desintegración.
```

### 3 — pregunta 3

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["fotones", "energia", "rayos_x"]

variables:
  f: random(10, 50)

respuesta: 6.63 * f
tipo: mc
opciones: 4

enunciado: "Si la frecuencia de un fotón de rayos X es {f} x 10¹⁸ Hz, ¿cuál es su energía en zeptojoules (zJ)? (h = 6.63 x 10⁻³⁴ J·s)"

explicacion: |
  La energía se calcula como E = h * f.
  E = (6.63 x 10⁻³⁴) * ({f} x 10¹⁸) = {6.63 * f} x 10⁻¹⁶ J.
  Como 1 zJ = 10⁻²¹ J, el valor numérico en zJ es {6.63 * f}.
```

### 4 — pregunta 4

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["actividad", "becquerel", "radiofarmacos"]

variables:
  A: random(100, 300)
  t12: random(1, 3)

respuesta: redondear(A * 0.5^(1/t12), 2)
tipo: input

enunciado: "Un radiotrazador tiene una actividad inicial de {A} MBq. Si su vida media es de {t12} horas, ¿cuál será su actividad después de 1 hora? (Redondear a 2 decimales)"

explicacion: |
  La actividad restante se calcula con A(t) = A0 * (1/2)^(t/t12).
  Aquí t=1, por lo tanto: A(1) = {A} * (0.5)^(1/{t12}).
```

### 5 — pregunta 5

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["ondas", "electromagnetica", "rayos_x"]

variables:
  f: random(100, 900)

respuesta: redondear(c / (f * 1e18), 12)
tipo: mc
opciones: 4

enunciado: "Para una frecuencia de {f} x 10¹⁸ Hz, ¿cuál es la longitud de onda en metros? (c = 3 x 10⁸ m/s)"

explicacion: |
  Usando c = lambda * f, despejamos lambda = c / f.
  lambda = (3 x 10⁸) / ({f} x 10¹⁸) = {redondear(c / (f * 1e18), 12)} m.
```

### 6 — pregunta 6

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "gray", "energia"]

variables:
  E: random_float(0.1, 1.0)
  m: random(1, 5)

respuesta: redondear(E / m, 3)
tipo: input

enunciado: "Si un tejido de masa {m} kg absorbe una energía de {E} julios, ¿cuál es la dosis absorbida en Gray (Gy)?"

explicacion: |
  La dosis absorbida D se define como energía por unidad de masa: D = E / m.
  D = {E} / {m} = {redondear(E / m, 3)} Gy.
```

### 7 — pregunta 7

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["PET", "positron", "aniquilacion"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "En la tomografía PET, los fotones detectados provienen directamente de la desintegración del núcleo emisor de positrones."

explicacion: |
  Falso. Los fotones de 511 keV se generan por la aniquilación del positron con un electrón del tejido, no directamente del núcleo.
```

### 8 — pregunta 8

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["decaimiento", "exponencial", "calculadora"]

variables:
  N0: random(1000, 5000)
  lambda_val: random_float(0.01, 0.1)
  t: random(5, 20)

respuesta: redondear(N0 * exp(-lambda_val * t), 0)
tipo: input

enunciado: "Si tienes {N0} núcleos radiactivos con constante de decaimiento {lambda_val} s⁻¹, ¿cuántos núcleos quedan después de {t} segundos? (Redondear al entero más cercano)"

explicacion: |
  La ley de decaimiento es N(t) = N0 * e^(-lambda * t).
  N({t}) = {N0} * e^(-{lambda_val} * {t}) = {redondear(N0 * exp(-lambda_val * t), 0)}.
```

### 9 — pregunta 9

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["PET", "masa", "energia"]

variables:
  masa_e: 0.511

respuesta: 0.511
tipo: input

enunciado: "Cuando un positron y un electrón se aniquilan, cada fotón gamma resultante tiene una energía de {masa_e} MeV. ¿Cuál es esa energía?"

explicacion: |
  La masa en reposo del electrón (y positrón) es equivalente a 0.511 MeV/c². Por conservación de energía, cada fotón lleva 0.511 MeV.
```

### 10 — pregunta 10

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["resolucion", "PET", "RX"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La tomografía por emisión de positrones (PET) tiene generalmente una resolución espacial mejor que la radiografía convencional de rayos X."

explicacion: |
  Falso. La PET tiene peor resolución espacial (del orden de milímetros a centímetros) debido a la distancia de vuelo del positrón y la no colinealidad de los fotones, mientras que los RX pueden resolver detalles submilimétricos.
```

### 11 — pregunta 11

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["atenuacion", "factor", "matematica"]

variables:
  mu: random_float(0.2, 0.8)
  x: random(1, 5)

respuesta: redondear(exp(-mu * x), 4)
tipo: mc
opciones: 4

enunciado: "Si el producto mu * x es igual a {redondear(mu * x, 2)}, ¿cuál es el factor de transmisión (I/I0)?"

explicacion: |
  El factor de transmisión es e^(-mu * x).
  Con los valores dados, el resultado es {redondear(exp(-mu * x), 4)}.
```

### 12 — pregunta 12

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["actividad", "vida_media", "relacion"]

variables:
  A: random(10, 50)
  t12: random(10, 100)

respuesta: redondear(A / t12, 4)
tipo: input

enunciado: "Si la actividad es {A} Bq y la vida media es {t12} s, ¿cuál es la constante de decaimiento lambda (en s⁻¹)? (Usa lambda = ln(2) / t12, pero aproxima ln(2) ≈ 0.693)"

explicacion: |
  lambda = 0.693 / t12.
  lambda = 0.693 / {t12} = {redondear(0.693 / t12, 4)} s⁻¹.
  Nota: La actividad A no afecta a lambda, solo al número de núcleos N.
```

### 13 — pregunta 13

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "sievert", "peso"]

variables:
  D: random_float(0.1, 2.0)
  W_R: 1

respuesta: redondear(D * W_R, 2)
tipo: input

enunciado: "Si la dosis absorbida es {D} Gy y el factor de ponderación de radiación (W_R) para rayos X es {W_R}, ¿cuál es la dosis equivalente en Sieverts (Sv)?"

explicacion: |
  Dosis Equivalente H = D * W_R.
  H = {D} * {W_R} = {redondear(D * W_R, 2)} Sv.
```

### 14 — pregunta 14

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["constantes", "luz", "vacío"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "La velocidad de la luz en el vacío es aproximadamente 3 x 10⁸ m/s."

explicacion: |
  Verdadero. Este es un valor fundamental en física médica para cálculos de energía y longitud de onda.
```

### 15 — pregunta 15

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["contraste", "medios", "absorcion"]

variables:
  mu1: random_float(0.5, 1.0)
  mu2: random_float(1.5, 2.5)

respuesta: redondear(mu2 - mu1, 2)
tipo: mc
opciones: 4

enunciado: "El contraste de intensidad entre dos tejidos con coeficientes {mu1} y {mu2} (donde mu2 > mu1) depende de la diferencia de atenuación. ¿Cuál es la diferencia de coeficientes?"

explicacion: |
  La diferencia es mu2 - mu1 = {mu2} - {mu1} = {redondear(mu2 - mu1, 2)}.
```

### 16 — pregunta 16

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["beta", "desintegracion", "neutron"]

variables:
  valor: uno_de([verdadero, falso])

respuesta: valor
tipo: vf

enunciado: "En la desintegración beta menos, un neutrón se transforma en un protón, emitiendo un electrón y un antineutrino."

explicacion: |
  Verdadero. Este es el proceso básico de la beta menos, aumentando el número atómico en 1.
```

### 17 — pregunta 17

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["bremsstrahlung", "energia", "maxima"]

variables:
  V: random(50, 150)

respuesta: V
tipo: input

enunciado: "En un tubo de rayos X operando a {V} kV, ¿cuál es la energía máxima (en keV) de los fotones de Bremsstrahlung generados?"

explicacion: |
  La energía máxima del fotón es igual a la energía cinética del electrón incidente, que es e * V.
  Por lo tanto, E_max = {V} keV.
```

### 18 — pregunta 18

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "atenuacion", "exponencial"]

variables:
  I0: random(100, 500)
  mu: random_float(0.5, 2.0)
  x: random(2, 10)

respuesta: redondear(I0 * e^(-mu * x), 2)
tipo: input

enunciado: "Un haz de rayos X con intensidad inicial {I0} atraviesa un tejido óseo de espesor {x} cm. Si el coeficiente de atenuación del hueso es {mu} cm⁻¹, ¿cuál es la intensidad final del haz? (Redondear a 2 decimales)"

explicacion: |
  La atenuación sigue la ley exponencial I = I0 * e^(-mu * x).
  Sustituyendo los valores: I = {I0} * e^(-{mu} * {x}).
  El resultado indica cuánta radiación logra penetrar el tejido.
```

### 19 — pregunta 19

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "contraste", "absorcion"]

variables:
  tejido: uno_de(["hueso", "tejido_blando", "aire"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: En una radiografía convencional, el tejido que absorbe MENOS radiación aparece más blanco en la imagen final."

explicacion: |
  Falso. Los tejidos que absorben más radiación (como el hueso) aparecen blancos porque menos fotones llegan al detector. Los que absorben menos (aire) aparecen oscuros.
```

### 20 — pregunta 20

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["rayos_x", "logaritmo", "atenuacion"]

variables:
  I0: random(1000, 2000)
  I: random(10, 50)
  x: random(1, 5)

respuesta: redondear(-log(I/I0) / x, 3)
tipo: input

enunciado: "Si un haz de intensidad inicial {I0} se reduce a {I} tras atravesar {x} cm de un material, calcule el coeficiente de atenuación lineal mu. Use logaritmo natural."

explicacion: |
  Despejando mu de I = I0 * e^(-mu * x), obtenemos mu = -ln(I/I0) / x.
  Esto permite caracterizar el material basándose en su capacidad de absorción.
```

### 21 — pregunta 21

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "positrones", "aniquilacion"]

variables:
  respuesta_correcta: uno_de(["aniquilacion", "ionizacion", "excitacion", "dispersion"])

respuesta: respuesta_correcta
tipo: completar

enunciado: "La tomografía por emisión de positrones (PET) se basa en la detección de fotones gamma producidos por el proceso de {respuesta_correcta} entre un positrón y un electrón."

respuestas_validas:
  - "aniquilacion"
  - "aniquilación"
  - "annihilation"

explicacion: |
  Cuando un positrón (antipartícula del electrón) choca con un electrón, ambos se aniquilan, convirtiendo su masa en energía en forma de dos fotones gamma de 511 keV emitidos en direcciones opuestas.
```

### 22 — pregunta 22

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["radioproteccion", "dosis", "riesgo"]

variables:
  tipo_tec: uno_de(["rayos_x", "gammagrafia", "tc"])

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La justificación de cualquier procedimiento de física médica implica que los beneficios para el paciente superen los riesgos potenciales de la exposición a la radiación."

explicacion: |
  Verdadero. Es uno de los tres principios fundamentales de la radioprotección (junto con la optimización y la limitación de dosis).
```

### 23 — pregunta 23

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["radioactividad", "vida_media", "desintegracion"]

variables:
  t1_2: random(6, 12)
  t_transcurrido: random_float(12, 24)
  A0: 100

respuesta: redondear(A0 * (0.5)^(t_transcurrido / t1_2), 2)
tipo: input

enunciado: "Un isótopo tiene una vida media de {t1_2} horas. Si la actividad inicial es 100 MBq, ¿cuál será la actividad después de {t_transcurrido} horas?"

explicacion: |
  La actividad decrece exponencialmente según A(t) = A0 * (1/2)^(t / t1/2).
  Aquí, el número de vidas medias transcurridas es t_transcurrido / t1_2.
```

### 24 — pregunta 24

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["pet", "energia", "fotones"]

variables:
  masa_e: 9.109e-31
  c: 3e8
  energia_j: masa_e * c * c

respuesta: redondear(energia_j / 1.602e-13, 2)
tipo: input

enunciado: "Calcule la energía en MeV de un solo fotón gamma producido en una aniquilación electrón-positrón. Use E=mc² y la conversión 1 MeV = 1.602e-13 J. La masa del electrón es 9.109e-31 kg."

explicacion: |
  La masa total convertida es 2 * masa_e. La energía total es E = 2 * m_e * c^2.
  Como se producen dos fotones, cada uno lleva la mitad de esa energía.
  El resultado estándar es aproximadamente 0.511 MeV.
```

### 25 — pregunta 25

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["calidad_imagen", "resolucion", "contraste"]

variables:
  escenario: uno_de(["baja_resolucion", "alto_contraste", "bajo_contraste", "alta_resolucion"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Mejorar la resolución espacial de una imagen médica siempre mejora automáticamente el contraste de la misma."

explicacion: |
  Falso. La resolución y el contraste son parámetros independientes que a menudo tienen una relación de compromiso (trade-off). Mejorar uno puede degradar al otro si no se ajustan otros parámetros.
```

### 26 — pregunta 26

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "actividad", "masa"]

variables:
  masa_g: random_float(0.1, 1.0)
  vida_media_dias: random(10, 50)
  na: 6.022e23
  masa_molar: 131.0

respuesta: redondear((na / masa_molar) * (masa_g * 1000) * log(2) / (vida_media_dias * 86400), 0)
tipo: input

enunciado: "Calcule la actividad en Bq de {masa_g} gramos de Yodo-131 (masa molar 131 g/mol) con vida media de {vida_media_dias} días. (Nota: convertir masa a mg para ajustar escala si es necesario, pero la formula usa moles directos)."

explicacion: |
  A = lambda * N. Lambda = ln(2) / t1/2. N = (masa / masa_molar) * Na.
  Es fundamental mantener las unidades consistentes (segundos para tiempo).
```

### 27 — pregunta 27

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "contraste", "medios"]

variables:
  medio: uno_de(["bario", "aire", "yodo", "grafito"])

respuesta: medio
tipo: completar

enunciado: "En estudios del tracto gastrointestinal, se utiliza un medio de contraste positivo (radiopaco) como el {medio} para visualizar la mucosa estomacal."

respuestas_validas:
  - "bario"
  - "Sulfato de bario"

explicacion: |
  El bario tiene un número atómico alto (Z=56), lo que aumenta la absorción de rayos X por efecto fotoeléctrico, apareciendo blanco en la imagen.
```

### 28 — pregunta 28

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["ley_beer_lambert", "atenuacion", "formula"]

variables:
  mu: random_float(0.1, 0.5)
  x: random(5, 15)

respuesta: redondear(e^(-mu * x), 4)
tipo: input

enunciado: "Calcule la fracción de transmisión (I/I0) de un haz que atraviesa {x} cm de material con coeficiente de atenuación {mu} cm⁻¹."

explicacion: |
  La fracción de transmisión es directamente e^(-mu * x).
  Este valor es adimensional y siempre está entre 0 y 1.
```

### 29 — pregunta 29

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["tomografia", "ventana", "pixel"]

variables:
  tipo_ventana: uno_de(["hueso", "pulmon", "tejido_blando", "cerebro"])

respuesta: tipo_ventana
tipo: completar

enunciado: "Para observar mejor los detalles del parénquima pulmonar en una tomografía computarizada, se utiliza una ventana de visualización ajustada para {tipo_ventana}."

respuestas_validas:
  - "pulmon"
  - "pulmón"
  - "tejido pulmonar"

explicacion: |
  El pulmón tiene baja densidad. Una ventana de "pulmón" ajusta el rango de valores de Hounsfield para maximizar el contraste entre las estructuras finas del tejido pulmonar.
```

### 30 — pregunta 30

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "calculo", "actividad"]

variables:
  A0: random(10, 50)
  t1_2: 6
  t: 18

respuesta: redondear(A0 * (0.5)^(t / t1_2), 2)
tipo: input

enunciado: "Si la actividad inicial es {A0} MBq y la vida media es 6 horas, ¿cuánto queda después de 18 horas?"

explicacion: |
  18 horas son exactamente 3 vidas medias (18/6).
  La actividad se reduce a la mitad 3 veces: A0 / 2^3 = A0 / 8.
```

### 31 — pregunta 31

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "coincidencia", "deteccion"]

variables:
  angulo: 180

respuesta: angulo
tipo: input

enunciado: "En la detección de aniquilación electrón-positrón, los dos fotones gamma salen aproximadamente separados por un ángulo de {angulo} grados. ¿Cuál es ese ángulo?"

explicacion: |
  Por conservación del momento lineal, los dos fotones de 511 keV se emiten en direcciones opuestas (180 grados) en el marco del centro de masa.
```

### 32 — pregunta 32

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["rayos_x", "contraste", "limitaciones"]

variables:
  tejido1: "higado"
  tejido2: "pancreas"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Los rayos X convencionales ofrecen un contraste natural excelente entre el hígado y el páncreas sin necesidad de medios de contraste externos."

explicacion: |
  Falso. Ambos son tejidos blandos con densidades y números atómicos efectivos muy similares, lo que resulta en un contraste muy bajo en radiografía simple.
```

### 33 — pregunta 33

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "limpieza", "actividad"]

variables:
  A_inicial: 1000
  t1_2: 1
  t: 10

respuesta: redondear(A_inicial * (0.5)^(t / t1_2), 4)
tipo: input

enunciado: "Una fuente de 1000 Bq con vida media de 1 día se deja reposar. ¿Qué actividad queda después de 10 días? (Expresar en notación científica si es muy pequeña, pero aquí pide valor numérico directo)."

explicacion: |
  A = 1000 * (0.5)^10 = 1000 / 1024 ≈ 0.9766 Bq.
  Demuestra cómo la actividad disminuye rápidamente con múltiples vidas medias.
```

### 34 — pregunta 34

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["rayos_x", "produccion", "frenado"]

variables:
  voltaje_kv: random(50, 150)
  energia_max_mev: voltaje_kv / 1000

respuesta: redondear(energia_max_mev, 3)
tipo: input

enunciado: "En un tubo de rayos X operando a {voltaje_kv} kV, ¿cuál es la energía máxima (en MeV) de un fotón de rayos X producido por frenado (Bremsstrahlung)?"

explicacion: |
  La energía máxima del fotón corresponde a la energía cinética completa del electrón incidente, que es e * V.
  Por lo tanto, E_max (MeV) = V (kV) / 1000.
```

### 35 — pregunta 35

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["dosis", "sievert", "gray"]

variables:
  tipo_radiacion: uno_de(["rayos_x", "neutrones", "partículas_alfa"])
  factor_w: uno_de([1, 10, 20])

respuesta: factor_w
tipo: input

enunciado: "Para radiación de tipo {tipo_radiacion}, el factor de ponderación de radiación (wR) utilizado para calcular la dosis equivalente es {factor_w}. ¿Cuál es ese valor?"

explicacion: |
  Para rayos X, gamma y beta, wR es 1.
  Para neutrones y alfa, es mayor (10-20) debido a su mayor poder de ionización relativo.
```

### 36 — pregunta 36

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["farmacocinetica", "vida_media", "efectiva"]

variables:
  t1_2_fisica: 6
  t1_2_biol: 12

respuesta: redondear(1 / (1/t1_2_fisica + 1/t1_2_biol), 2)
tipo: input

enunciado: "Calcule la vida media efectiva (t1/2_eff) de un radiofármaco si su vida media física es {t1_2_fisica} h y su vida media biológica es {t1_2_biol} h."

explicacion: |
  La desintegración total es la suma de las tasas: 1/T_eff = 1/T_fis + 1/T_bio.
  T_eff = (T_fis * T_bio) / (T_fis + T_bio).
```

### 37 — pregunta 37

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "intermedio"
  tags: ["pet", "adquisicion", "ruido"]

variables:
  actividad: random(10, 50)

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una mayor actividad del paciente en PET permite reducir el tiempo de adquisición de la imagen manteniendo la misma calidad estadística."

explicacion: |
  Verdadero. La calidad de la imagen en PET depende del número de eventos de coincidencia detectados. Más actividad genera más eventos por unidad de tiempo.
```

### 38 — pregunta 38

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "basico"
  tags: ["rayos_x", "aire", "aproximacion"]

variables:
  distancia: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En el rango de diagnóstico, la atenuación de los rayos X por el aire en distancias cortas (<10 m) se considera despreciable."

explicacion: |
  Verdadero. El aire es muy poco denso y tiene bajo número atómico, por lo que su coeficiente de atenuación es muy pequeño comparado con el tejido o el hueso.
```

### 39 — pregunta 39

```
metadata:
  materia: "fisica"
  tema: "fisica_medica"
  nivel: "avanzado"
  tags: ["radioactividad", "medicina_nuclear", "iodo"]

variables:
  A0: 100
  t1_2: 8
  t: 24

respuesta: redondear(A0 * (0.5)^(t / t1_2), 2)
tipo: input

enunciado: "Un paciente recibe 100 MBq de I-131 (t1/2 = 8 días). ¿Cuánta actividad queda en su cuerpo a los 24 días, asumiendo solo decaimiento físico?"

explicacion: |
  24 días son 3 vidas medias (24/8).
  A = 100 * (1/2)^3 = 12.5 MBq.
```
