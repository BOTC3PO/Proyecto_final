# Examen jefe — Experto en Física Médica y Nuclear

> Logro #161. Completaste el parcial dominando la intersección entre la física nuclear, la imagen médica y las fórmulas literales. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **139 preguntas totales** en 5/5 secciones.

---

## Sección: fisica-medica (39 preguntas)

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

## Sección: fision-y-fusion-nuclear (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "fision_nuclear"
  nivel: "basico"
  tags: ["nucleo", "fision", "energia"]

respuesta: "fision"
tipo: completar
respuestas_validas: ["fision", "fisión"]

enunciado: "El proceso mediante el cual un núcleo pesado se divide en dos o más núcleos más pequeños, liberando una gran cantidad de energía, se denomina ___."

explicacion: |
  La fisión nuclear ocurre cuando un núcleo pesado (como el Uranio-235) absorbe un neutrón y se divide, liberando energía y más neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "fusion_nuclear"
  nivel: "basico"
  tags: ["fusion", "masa", "energia"]

variables:
  es_fusion: verdadero

respuesta: es_fusion
tipo: completar
enunciado: "¿En un proceso de fusión nuclear, la masa de los núcleos resultantes es mayor que la masa de los núcleos originales?"

explicacion: |
  Falso. En la fusión (y en la fisión), la masa de los productos es menor que la de los reactivos. Esa diferencia de masa se convierte en energía según la ecuación de Einstein.
```

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["einstein", "relatividad", "energia"]

respuesta: "E=mc^2"
tipo: mc
opciones_explicitas: ["E=mc^2", "E=m/c^2", "E=m+c^2", "E=mc"]

enunciado: "La relación matemática que describe cómo la pérdida de masa (defecto de masa) se transforma en energía es:"

explicacion: |
  La famosa ecuación de Albert Einstein establece que la energía (E) es igual a la masa (m) multiplicada por la velocidad de la luz al cuadrado (c²).
```

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["masa", "energia", "nucleo"]

respuesta: "defecto de masa"
tipo: completar
respuestas_validas: ["defecto de masa", "defecto de masa"]

enunciado: "La diferencia entre la masa de los nucleones individuales y la masa del núcleo unido se conoce como ___."

explicacion: |
  Esta diferencia es la que se libera en forma de energía de enlace durante los procesos nucleares.
```

```
metadata:
  materia: "fisica"
  tema: "fision_vs_fusion"
  nivel: "basico"
  tags: ["comparacion", "fision", "fusion"]

respuesta: ["Fisión", "Fusión"]
tipo: ordenar

opciones_explicitas: ["Fusión", "Fisión"]

enunciado: "Ordena los siguientes procesos desde el que ocurre en núcleos pesados hasta el que ocurre en núcleos muy ligeros:"

pasos:
  - "Proceso en núcleos pesados (ej. Uranio)"
  - "Proceso en núcleos ligeros (ej. Hidrógeno)"

explicacion: |
  La fisión divide núcleos pesados, mientras que la fusión une núcleos ligeros.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["einstein", "relatividad", "energia"]

variables:
  m_defecto_kg: 0.000000000000000000001

respuesta: m_defecto_kg * c * c
tipo: completar
tolerancia_abs: 1e-20

enunciado: "Si en un proceso nuclear se pierde una cantidad de masa de {m_defecto_kg} kg, ¿cuánta energía se libera en Joules según la ecuación de Einstein?"

pasos:
  - "Identificar la masa perdida (defecto de masa): m = 1e-21 kg"
  - "Utilizar la fórmula E = m * c²"
  - "Sustituir c ≈ 3e8 m/s: E = 1e-21 * (3e8)² = 1e-21 * 9e16"
  - "Resultado: 9e-5 J"

explicacion: |
  La energía liberada proviene del defecto de masa. Al convertir esa masa perdida en energía mediante E = mc², obtenemos la energía liberada en el proceso.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el defecto de masa la diferencia entre la masa de los nucleones individuales y la masa del núcleo resultante?"

explicacion: |
  Correcto. La masa de un núcleo atómico es siempre menor que la suma de las masas de sus protones y neutrones por separado. Esa diferencia es lo que se convierte en energía de enlace.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["fision", "fusion"]

variables:
  escenario: uno_de(["fision", "fusion"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["fision", "fusion"]

enunciado: "El proceso que consiste en la unión de dos núcleos ligeros para formar uno más pesado se denomina {escenario}."

explicacion: |
  Si el escenario seleccionado fue {escenario}, la respuesta es correcta. La fusión une núcleos ligeros (como el hidrógeno) y la fisión divide núcleos pesados (como el uranio).
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["calculo", "fusion"]

variables:
  datos: [
    [0.002, "1.8e14"],
    [0.005, "4.5e14"],
    [0.001, "9.0e13"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["1.8e14", "4.5e14", "9.0e13"]

enunciado: "En una reacción de fusión, la masa inicial es de 1.005 kg y la masa final es de 1.000 kg. La energía liberada es de ___ J."

pasos:
  - "Calcular el defecto de masa: Δm = 1.005 - 1.000 = 0.005 kg (usando el valor del ejemplo)"
  - "Aplicar E = Δm * c²"
  - "E = 0.005 * (3e8)^2 = 4.5e14 J"

explicacion: |
  El cálculo depende del valor de la masa perdida. Para un defecto de 0.005 kg, la energía es 4.5e14 J.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["orden", "procesos"]

respuesta: ["Fisión", "Fusión"]
tipo: ordenar
opciones_explicitas: ["Fisión", "Fusión"]

enunciado: "Ordena estos procesos según el tipo de núcleo que utilizan: 1. División de un núcleo pesado. 2. Unión de núcleos ligeros."

explicacion: |
  La fisión implica la división de un núcleo grande y pesado, mientras que la fusión implica la unión de núcleos muy pequeños y ligeros.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "materia", "relatividad"]

variables:
  masa_nucleo_padre: 235.0
  masa_nucleo_hijo: 235.0

respuesta: "defecto de masa"
tipo: completar
respuestas_validas: ["defecto de masa", "pérdida de masa", "masa faltante"]

enunciado: "En un proceso de fisión nuclear, la suma de las masas de los fragmentos resultantes es ligeramente menor que la masa del núcleo original. Esta diferencia se conoce como ___."

explicacion: |
  La diferencia de masa entre los reactivos y los productos se convierte en energía cinética y radiación, según la ecuación de Einstein E=mc².
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "reaccion"]

variables:
  es_fusion: true

respuesta: es_fusion
tipo: completar
enunciado: "En la fusión nuclear, núcleos ligeros se combinan para formar un núcleo más pesado, liberando energía en el proceso. ¿Es esto correcto?"

explicacion: |
  Correcto. La fusión implica la unión de núcleos ligeros (como el hidrógeno) para formar elementos más pesados (como el helio), liberando una enorme cantidad de energía.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "relatividad"]

variables:
  escenario: uno_de(["fision", "fusion"])
  masa_inicial: 10.0
  masa_final: 9.9

respuesta: "la masa disminuye"
tipo: mc

opciones_explicitas: ["la masa disminuye", "la masa aumenta", "la masa se mantiene igual"]

enunciado: "Si un proceso nuclear libera energía hacia el entorno, según la equivalencia masa-energía de Einstein, ¿qué sucede con la masa total del sistema nuclear?"

explicacion: |
  Para que se libere energía (E > 0), la masa final debe ser menor que la masa inicial. La masa "perdida" se transforma en la energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["conservacion", "materia"]

respuesta: "la masa no se conserva de forma absoluta en procesos nucleares"
tipo: mc

opciones_explicitas: ["la masa no se conserva de forma absoluta en procesos nucleares", "la masa se conserva perfectamente", "la masa aumenta siempre"]

enunciado: "En física nuclear, cuando ocurre una reacción que libera energía, la ley de conservación de la masa se interpreta de forma distinta a la física clásica. ¿Cuál es la afirmación correcta?"

explicacion: |
  En procesos nucleares, la masa y la energía son dos caras de la misma moneda. La masa total disminuye porque parte de ella se ha transformado en energía.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Unión de núcleos", "Aumento de energía cinética", "Disminución de masa total"]
respuesta: ["Unión de núcleos", "Disminución de masa total", "Aumento de energía cinética"]
tipo: ordenar

enunciado: "Ordena los eventos que ocurren en una reacción de fusión nuclear desde el inicio hasta la liberación de energía:"

pasos:
  - "Los núcleos ligeros se aproximan y se unen."
  - "La masa de los productos es menor que la de los reactivos."
  - "Se libera energía en forma de movimiento o radiación."

explicacion: |
  Primero los núcleos se fusionan, esto genera un defecto de masa (la masa total baja) y esa diferencia de masa se manifiesta como la energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "masa", "relatividad"]

respuesta: "defecto de masa"
tipo: "completar"
respuestas_validas: ["defecto de masa", "defecto de masa"]

enunciado: "Tanto en la fisión como en la fusión nuclear, la energía liberada proviene de la conversión de una pequeña parte de la masa de los núcleos en energía, fenómeno conocido como ___."

explicacion: |
  La masa de los productos resultantes es menor que la masa de los reactivos originales. Esa diferencia de masa se convierte en energía según la ecuación de Einstein $E=mc^2$.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["comparacion", "nucleos"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: "mc"
opciones_explicitas: ["La fisión une núcleos ligeros para liberar energía", "La fusión divide núcleos pesados para liberar energía", "La fusión une núcleos ligeros para liberar energía", "La fisión divide núcleos pesados para liberar energía"]

enunciado: "Considerando los procesos nucleares, ¿cuál de las siguientes afirmaciones describe correctamente la diferencia entre ambos?"

explicacion: |
  La fisión consiste en la división de un núcleo pesado (como el Uranio-235) en fragmentos más pequeños, mientras que la fusión es la unión de núcleos ligeros (como el Hidrógeno) para formar uno más pesado.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["relatividad", "e_mc2"]

respuesta: falso
tipo: "vf"

enunciado: "En un proceso de fusión nuclear, la suma de las masas de los núcleos finales es exactamente igual a la suma de las masas de los núcleos iniciales, ya que la energía no afecta la masa."

explicacion: |
  Falso. Si la masa se mantuviera constante, no habría liberación de energía. La energía liberada proviene precisamente de que la masa final es menor que la inicial (defecto de masa).
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["magnitud", "energia"]

variables:
  caso: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: "mc"
opciones_explicitas: ["La fisión libera más energía por unidad de masa que la fusión", "La fusión libera más energía por unidad de masa que la fisión", "Ambos liberan la misma cantidad de energía por nucleón", "La fisión requiere temperaturas mucho más altas que la fusión"]

enunciado: "Analizando la eficiencia energética de ambos procesos, ¿cuál es la distinción principal respecto a la energía liberada por unidad de masa?"

explicacion: |
  Aunque la fisión es muy potente, la fusión nuclear (como la que ocurre en las estrellas) libera una cantidad significativamente mayor de energía por cada nucleón involucrado.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["pasos", "energia"]

respuesta: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]
tipo: "ordenar"
opciones_explicitas: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]

enunciado: "Ordena los pasos que explican la liberación de energía en un proceso de fusión o fisión nuclear:"

explicacion: |
  El proceso comienza con los reactivos, ocurre la interacción que rompe o une los núcleos, la masa resultante es menor debido al defecto de masa, y esa diferencia se manifiesta como energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "relatividad", "masa"]

variables:
  datos: [["Uranio-235", "fision"], ["Hidrogeno", "fusion"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fision", "fusion", "combustion", "desintegracion"]

enunciado: "En una central nuclear convencional, se utiliza el proceso de {datos[idx][0]} para liberar energía. Este proceso se denomina:"

explicacion: |
  El proceso de {datos[idx][0]} en reactores nucleares se basa en la fisión, donde un núcleo pesado se divide.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["defecto_de_masa", "einstein"]

variables:
  datos: [["1.005", "0.005"], ["1.010", "0.010"], ["0.998", "0.002"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["0.005", "0.010", "0.002"]

enunciado: "Si la masa de los fragmentos resultantes tras un proceso nuclear es de ___ unidades de masa atómica menos que la masa de los núcleos originales, ese valor se conoce como defecto de masa."

pasos:
  - "Identificar la masa inicial de los reactivos."
  - "Identificar la masa final de los productos."
  - "Calcular la diferencia para hallar el defecto de masa."

explicacion: |
  La diferencia de masa (defecto de masa) se convierte en energía según la ecuación de Einstein.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["verdad_falso", "estrellas"]

respuesta: verdadero
tipo: vf
enunciado: "La fusión nuclear es el proceso que alimenta a las estrellas, como el Sol, donde núcleos ligeros se unen para formar uno más pesado."

explicacion: |
  Es verdadero. En el Sol, la fusión de núcleos de hidrógeno libera la energía que percibimos como luz y calor.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "calculo"]

variables:
  valores: [["1.0e-30", "2.7e-13"], ["2.0e-30", "5.4e-13"], ["5.0e-30", "4.5e-13"]]
  idx: uno_de([0,1,2])

respuesta: valores[idx][1
tipo: completar
tolerancia_abs: 0.00001e-13

enunciado: "Si un proceso nuclear libera una cantidad de masa $\\Delta m$ de {valores[idx][0]} kg, ¿cuánta energía $E$ se libera en Joules (usando $c = 3 \\times 10^8$ m/s)? (Expresa el resultado en notación científica, ej: 1.5e-10)"

pasos:
  - "Utilizar la fórmula $E = \\Delta m \\cdot c^2$."
  - "Sustituir $\\Delta m$ por el valor dado."
  - "Elevar la velocidad de la luz al cuadrado ($9 \\times 10^{16}$)."

explicacion: |
  Aplicando $E = mc^2$, la energía liberada es {valores[idx][1]} J.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]
tipo: ordenar
opciones_explicitas: ["Masa de reactivos", "Defecto de masa", "Energía liberada", "Masa de productos"]

enunciado: "Ordena los conceptos según el orden lógico en el que ocurren para explicar la liberación de energía en un proceso nuclear:"

explicacion: |
  Primero tenemos la masa inicial, luego la diferencia (defecto) que se convierte en energía.
```

## Sección: formacion-de-imagenes-optica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "imagen-virtual", "imagen-real"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen es virtual cuando los rayos de luz parecen provenir de un punto situado detrás de la pantalla o plano de observación."

explicacion: |
  Las imágenes virtuales se forman por la intersección de las prolongaciones de los rayos de luz, por lo que no pueden proyectarse en una pantalla.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "terminologia"]

opciones_explicitas: ["real", "virtual", "imaginaria", "teórica"]
respuesta: "real"
tipo: mc

enunciado: "Cuando los rayos de luz realmente convergen en un punto y pueden ser captados por una pantalla, la imagen formada es de tipo ___."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos luminosos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes", "posicion-objeto"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[10, "virtual"], [5, "real"]]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["virtual", "real"]

enunciado: "Si un objeto se coloca a una distancia de {datos[escenario_idx][0]} cm de un espejo convexo, la imagen resultante será ___."

explicacion: |
  En los espejos convexos, la imagen siempre es virtual, derecha y de menor tamaño, sin importar la posición del objeto.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["propiedades", "imagen-virtual"]

respuesta: falso
tipo: vf

enunciado: "Una característica fundamental de las imágenes virtuales es que siempre son invertidas respecto al objeto."

explicacion: |
  Las imágenes virtuales suelen ser derechas (como en un espejo plano). Las imágenes invertidas suelen ser reales.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["proceso", "formacion-imagen"]

opciones_explicitas: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
respuesta: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos necesarios para la formación de una imagen real mediante una lente convergente:"

explicacion: |
  Para que una imagen sea real, los rayos deben viajar desde el objeto, pasar por la lente, converger en un punto y finalmente ser captados por una superficie (pantalla).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imágenes", "virtual"]

enunciado: "Si un objeto se coloca a una distancia mayor que el doble de la distancia focal de un espejo cóncavo (d > 2f), la imagen formada es ___."

opciones_explicitas: ["real", "virtual", "imaginaria"]
respuestas_validas: ["real"]

respuesta: "real"
tipo: "mc"

explicacion: |
  Cuando el objeto está más allá del centro de curvatura (2f), los rayos reflejados divergen después de cruzarse, formando una imagen real, invertida y de menor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "convergentes", "calculo"]

variables:
  f: 15
  d_objeto: 30

enunciado: "Un objeto se sitúa a {d_objeto} cm de un espejo cóncavo con una distancia focal de {f} cm. ¿A qué distancia del espejo se forma la imagen?"

pasos:
  - "Utilizar la ecuación de los espejos: 1/f = 1/d_objeto + 1/d_imagen"
  - "Despejar la distancia de la imagen: d_imagen = (f * d_objeto) / (d_objeto - f)"
  - "Calcular: (15 * 30) / (30 - 15) = 450 / 15 = 30"

respuesta: 30
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Aplicando la fórmula: 1/15 = 1/30 + 1/d_imagen. 
  Esto nos da 1/d_imagen = 1/15 - 1/30 = 1/30. 
  Por lo tanto, d_imagen = 30 cm.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["conceptos", "espejos"]

enunciado: "¿Una imagen virtual puede ser proyectada sobre una pantalla?"

respuesta: falso
tipo: "vf"

explicacion: |
  Las imágenes virtuales se forman por la intersección de rayos prolongados y no por la intersección de rayos reales, por lo que no pueden ser proyectadas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["magnitud", "espejos"]

variables:
  f: 10
  d_obj: 5

enunciado: "Un objeto de 5 cm de altura se coloca a {d_obj} cm de un espejo cóncavo con foco de {f} cm. ¿Cuál es la altura de la imagen formada?"

pasos:
  - "Calcular la distancia de la imagen: 1/10 = 1/5 + 1/d_img => d_img = -10 cm"
  - "Calcular la magnificación (m): m = -d_img / d_obj = -(-10) / 5 = 2"
  - "Calcular la altura de la imagen (h_img): h_img = m * h_objeto = 2 * 5 = 10"

respuesta: 10
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Como el objeto está entre el foco y el espejo, la imagen es virtual y derecha.
  d_img = (10 * 5) / (5 - 10) = 50 / -5 = -10 cm.
  m = -(-10) / 5 = 2.
  Altura = 2 * 5 = 10 cm.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["procesos", "óptica"]

enunciado: "Ordena los pasos para determinar si una imagen es real o virtual usando el signo de la distancia de la imagen (d_img):"

opciones_explicitas: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]

respuesta: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene el valor numérico de la distancia, luego se analiza su signo (positivo para real, negativo para virtual) y finalmente se da la conclusión.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "espejos", "imágenes"]

respuesta: falso
tipo: vf

enunciado: "Una imagen es siempre real si los rayos de luz convergen en un punto físico después de reflejarse o refractarse."

explicacion: |
  Una imagen es real cuando los rayos de luz se cruzan físicamente en el espacio. Una imagen es virtual cuando los rayos parecen provenir de un punto, pero no pasan por él (como en un espejo plano).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos_curvos", "imágenes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, "real", "invertida"], [5, "virtual", "derecha"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["real", "virtual"]

enunciado: "Si un objeto se coloca entre el foco y el centro de curvatura de un espejo cóncavo, la imagen resultante es de tipo ___."

explicacion: |
  Para un espejo cóncavo, cuando el objeto está más allá del foco (entre F y C), los rayos convergen frente al espejo, formando una imagen real e invertida.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes"]

variables:
  caso: uno_de([0, 1])
  datos: [[15, "grande"], [5, "pequeña"]]

respuesta: datos[caso][1
tipo: completar
respuestas_validas: ["grande", "pequeña"]

enunciado: "En un espejo convexo, la imagen siempre es ___ respecto al objeto."

explicacion: |
  Los espejos convexos siempre producen imágenes virtuales, derechas y de menor tamaño que el objeto, independientemente de la posición.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos_planos"]

respuesta: "derecha"
tipo: completar
respuestas_validas: ["derecha", "invertida"]

enunciado: "En un espejo plano, la imagen que se observa es siempre de orientación ___."

explicacion: |
  En un espejo plano, la imagen es virtual, de igual tamaño y mantiene la misma orientación (derecha), aunque presenta inversión lateral (enantiomorfismo).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["lentes", "proceso"]

opciones_explicitas: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
respuesta: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos para la formación de una imagen real con una lente convergente cuando el objeto está fuera del foco:"

explicacion: |
  Primero el objeto emite luz, luego la lente refracta esos rayos, estos se cruzan en un punto real y finalmente se percibe la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "imagen_real", "imagen_virtual"]

respuesta: "real"
tipo: "mc"
opciones_explicitas: ["real", "virtual"]

enunciado: "Una imagen que puede ser proyectada sobre una pantalla porque los rayos de luz realmente convergen en un punto se denomina imagen _______."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos de luz y pueden proyectarse. Las imágenes virtuales se forman cuando los rayos parecen provenir de un punto, pero no pasan por él.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "imagen_virtual"]

variables:
  es_derecha: uno_de([verdadero, falso])

respuesta: es_derecha
tipo: "vf"

enunciado: "En el caso de una imagen virtual formada por un espejo plano, la imagen es siempre derecha respecto al objeto."

explicacion: |
  Las imágenes virtuales producidas por espejos planos son siempre derechas y de igual tamaño que el objeto, pero se encuentran detrás del espejo.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "orientacion"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1
tipo: "completar"
tabla: [["derecha", "derecha"], ["invertida", "invertida"]]

enunciado: "Si una imagen es real, su orientación respecto al objeto será _______, mientras que si la imagen es virtual en un espejo plano, será _______."

explicacion: |
  Las imágenes reales suelen ser invertidas (en lentes o espejos convexos/cóncavos según posición), mientras que las imágenes virtuales en espejos planos son siempre derechas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
respuesta: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
tipo: "ordenar"

enunciado: "Ordene los procesos físicos que describen la formación de una imagen real, una imagen virtual y la propagación de la luz, respectivamente."

explicacion: |
  1. La imagen real requiere convergencia de rayos en un punto físico.
  2. La imagen virtual ocurre cuando los rayos divergen pero su prolongación parece originar un punto.
  3. La propagación es la base de la trayectoria de los rayos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "proyeccion"]

respuesta: 0
tipo: "mc"
opciones_explicitas: ["0", "1"]

enunciado: "Si una imagen NO puede ser capturada en una pantalla física, ¿qué valor representa si la imagen es virtual? (1 para Sí, 0 para No)"

explicacion: |
  La capacidad de proyección es la diferencia fundamental: las imágenes reales se proyectan, las virtuales no.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imagen_virtual"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un espejo plano", "virtual"], ["una lupa (lupa)", "virtual"]]

enunciado: "Al colocar un objeto frente a {datos[escenario_idx][0]}, la imagen que se observa es de tipo ___."

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["virtual", "real"]

explicacion: |
  En un espejo plano, los rayos de luz parecen provenir de un punto detrás del espejo, por lo que la imagen es virtual.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["proyeccion", "imagen_real"]

variables:
  tipo_proyector_idx: uno_de([0,1])
  configuracion: [["objeto entre F y 2F", "real"], ["objeto más allá de 2F", "real"]]

enunciado: "Para que un proyector de cine pueda formar una imagen en la pantalla, la imagen debe ser de tipo ___."

opciones_explicitas: ["real", "virtual", "derecha", "invertida"]
respuesta: "real"
tipo: mc

explicacion: |
  Para que una imagen pueda ser proyectada en una pantalla física, los rayos de luz deben converger realmente en un punto, lo que define a una imagen real.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["lupa", "lente_convergente"]

variables:
  distancia_idx: uno_de([0,1])
  caso: [["objeto entre F y l", "virtual"], ["objeto más allá de 2F", "real"]]

enunciado: "Si usamos una lupa (lente convergente) y colocamos el objeto a una distancia ___, la imagen resultante será ___."

opciones_explicitas: ["virtual", "real"]
respuesta: "virtual"
tipo: mc

explicacion: |
  Cuando el objeto está entre el foco (F) y el centro óptico (l), los rayos divergen tras la lente y la imagen es virtual, derecha y de mayor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["propiedades_imagen"]

enunciado: "Una imagen real se caracteriza por ser ___ respecto a la dirección de los rayos de luz."

opciones_explicitas: ["derecha", "invertida"]
respuesta: "invertida"
tipo: mc

explicacion: |
  Las imágenes reales formadas por una sola lente o espejo siempre presentan una inversión respecto al objeto.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejo_convexo", "seguridad"]

enunciado: "¿Es cierto que un espejo convexo (como los de los autos) siempre produce una imagen virtual?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Los espejos convexos siempre divergen los rayos, por lo que la imagen siempre es virtual, derecha y de menor tamaño.
```

## Sección: formacion-de-nubes (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "condensacion"]

enunciado: "¿Qué ocurre con el vapor de agua cuando el aire que lo contiene se enfría lo suficiente al ascender?"
tipo: mc
opciones_explicitas:
  - "Se condensa: pasa de gas a diminutas gotitas líquidas o cristales de hielo"
  - "Se evapora todavía más"
  - "Desaparece del aire por completo"
respuesta: "Se condensa: pasa de gas a diminutas gotitas líquidas o cristales de hielo"

explicacion: |
  Esas gotitas o cristales, en gran cantidad, forman lo que vemos como
  una nube.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "condensacion"]

respuesta: verdadero
tipo: vf

enunciado: "El aire se enfría a medida que asciende en la atmósfera."

explicacion: |
  Es la condición que dispara la condensación y la formación de nubes.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "punto_de_rocio"]

enunciado: "¿Qué es el punto de rocío?"
tipo: mc
opciones_explicitas:
  - "La temperatura a la que el aire debe enfriarse para que su vapor de agua empiece a condensarse"
  - "La altura máxima que puede alcanzar una nube"
  - "La cantidad total de agua que cae en una tormenta"
respuesta: "La temperatura a la que el aire debe enfriarse para que su vapor de agua empiece a condensarse"

explicacion: |
  Es clave para saber si un aire dado va a formar nubes o no.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio"]

enunciado: "Si la temperatura del aire está muy por encima de su punto de rocío, ¿qué se espera?"
tipo: mc
opciones_explicitas:
  - "Cielo despejado, lejos de condensar"
  - "Formación inmediata de nubes"
  - "Nieve garantizada"
respuesta: "Cielo despejado, lejos de condensar"

explicacion: |
  Cuanto más lejos esté la temperatura actual del punto de rocío, menos
  probable es la condensación.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más húmedo es el aire, más alto (más cerca de la temperatura actual) está su punto de rocío."

explicacion: |
  Necesita enfriarse menos para llegar a condensar.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué prefijo indica que una nube es de las capas más altas de la atmósfera?"
tipo: mc
opciones_explicitas:
  - "Cirro-"
  - "Alto-"
  - "Estrato-"
respuesta: "Cirro-"

explicacion: |
  Las nubes altas están formadas por cristales de hielo, por el frío
  extremo a esa altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué prefijo indica que una nube está en las capas medias de la atmósfera?"
tipo: mc
opciones_explicitas:
  - "Alto-"
  - "Cirro-"
  - "Nimbo-"
respuesta: "Alto-"

explicacion: |
  Por ejemplo, altocúmulos o altoestratos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las nubes de desarrollo vertical, como los cumulonimbos, atraviesan varias capas de altura, desde bajas hasta muy altas."

explicacion: |
  Pueden llegar a los 12-15 km de altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Cómo son las nubes tipo cúmulo?"
tipo: mc
opciones_explicitas:
  - "En forma de algodón, acumuladas, con base plana"
  - "En capas extendidas y uniformes"
  - "Finas y filamentosas"
respuesta: "En forma de algodón, acumuladas, con base plana"

explicacion: |
  Son típicas de un día de buen tiempo, salvo que crezcan demasiado.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Cómo son las nubes tipo estrato?"
tipo: mc
opciones_explicitas:
  - "En capas extendidas y uniformes, que suelen cubrir todo el cielo"
  - "En forma de algodón, acumuladas"
  - "Finas y filamentosas, en las capas más altas"
respuesta: "En capas extendidas y uniformes, que suelen cubrir todo el cielo"

explicacion: |
  Se asocian a llovizna suave y prolongada, típica de un frente cálido.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué caracteriza a los cirros?"
tipo: mc
opciones_explicitas:
  - "Son nubes altas, finas y filamentosas, y no producen lluvia"
  - "Son nubes bajas que siempre producen tormenta"
  - "Son nubes que cubren todo el cielo con lluvia sostenida"
respuesta: "Son nubes altas, finas y filamentosas, y no producen lluvia"

explicacion: |
  Suelen anticipar un cambio de tiempo en las próximas 24-48 horas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué indica el prefijo/sufijo \"nimbo-\" en el nombre de una nube?"
tipo: mc
opciones_explicitas:
  - "Que la nube produce precipitación"
  - "Que la nube está en las capas más altas"
  - "Que la nube nunca se mueve"
respuesta: "Que la nube produce precipitación"

explicacion: |
  Nimboestratos y cumulonimbos son ejemplos: estratos o cúmulos que
  llueven.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los cumulonimbos son cúmulos que crecieron mucho, de desarrollo vertical, y producen tormenta."

explicacion: |
  Son el tipo de nube asociado a un frente frío muy activo.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué tipo de precipitación se asocia a los nimboestratos?"
tipo: mc
opciones_explicitas:
  - "Lluvia sostenida, más suave pero prolongada"
  - "Tormenta eléctrica breve e intensa"
  - "Ninguna, esas nubes nunca llueven"
respuesta: "Lluvia sostenida, más suave pero prolongada"

explicacion: |
  Son estratos que llueven, típicos de un frente cálido.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "frentes"]

enunciado: "¿Qué tipo de nube genera típicamente un frente frío, que fuerza un ascenso brusco del aire cálido?"
tipo: mc
opciones_explicitas:
  - "Nubes de desarrollo vertical (cumulonimbos)"
  - "Nubes en capas uniformes (estratos)"
  - "Nubes altas y filamentosas (cirros)"
respuesta: "Nubes de desarrollo vertical (cumulonimbos)"

explicacion: |
  El ascenso brusco empuja el aire con fuerza hacia arriba, formando
  torres de nube.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "frentes"]

enunciado: "¿Qué tipo de nube genera típicamente un frente cálido, con ascenso suave y gradual del aire?"
tipo: mc
opciones_explicitas:
  - "Nubes en capas uniformes (estratos)"
  - "Nubes de desarrollo vertical (cumulonimbos)"
  - "Ninguna nube en absoluto"
respuesta: "Nubes en capas uniformes (estratos)"

explicacion: |
  Un ascenso gradual produce nubes extendidas en capas, no torres.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

tipo: completar
respuestas_validas:
  - "cirros"

enunciado: "Las nubes altas, finas y filamentosas que suelen anticipar un cambio de tiempo en las próximas 24-48 horas se llaman ____."

explicacion: |
  Son cristales de hielo suspendidos, sin producir lluvia por sí mismas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

tipo: ordenar
opciones_explicitas:
  - "estratos (nubes bajas)"
  - "altocúmulos (nubes medias)"
  - "cirros (nubes altas)"
respuesta:
  - "estratos (nubes bajas)"
  - "altocúmulos (nubes medias)"
  - "cirros (nubes altas)"

enunciado: "Ordená estos tipos de nube de menor a mayor altura sobre el suelo."

explicacion: |
  Bajas, medias y altas es el orden de clasificación por altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio", "calculo"]

variables:
  temperatura_actual: random(20, 35)
  punto_de_rocio: random(5, 19)

respuesta: temperatura_actual - punto_de_rocio
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura actual del aire es {temperatura_actual}°C y su punto de rocío es {punto_de_rocio}°C. ¿Cuántos grados le falta enfriarse al aire para empezar a condensar?"

explicacion: |
  Es la diferencia entre la temperatura actual y el punto de rocío.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "punto_de_rocio"]

variables:
  temp: random(20, 30)
  rocio_ciudad_a: random(5, 12)
  rocio_ciudad_b: random(15, 19)

respuesta: "la ciudad B"
tipo: mc
opciones_explicitas:
  - "la ciudad B"
  - "la ciudad A"
  - "las dos tienen la misma humedad"

enunciado: "Con la misma temperatura de {temp}°C, la ciudad A tiene un punto de rocío de {rocio_ciudad_a}°C y la ciudad B de {rocio_ciudad_b}°C. ¿Cuál de las dos tiene el aire más húmedo?"

explicacion: |
  El aire más húmedo tiene el punto de rocío más cercano a la
  temperatura actual (necesita enfriarse menos para condensar).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Todas las nubes, sin excepción, producen algún tipo de precipitación."

explicacion: |
  Los cúmulos de buen tiempo y los cirros, por ejemplo, no producen
  lluvia.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "sintesis"]

enunciado: "¿Cuál resume mejor por qué se forman las nubes?"
tipo: mc
opciones_explicitas:
  - "El aire asciende, se enfría, y cuando llega al punto de rocío el vapor de agua se condensa en gotitas o cristales suspendidos"
  - "Las nubes aparecen al azar sin relación con la temperatura del aire"
  - "Las nubes se forman sólo cuando hay viento fuerte, sin importar la humedad"
respuesta: "El aire asciende, se enfría, y cuando llega al punto de rocío el vapor de agua se condensa en gotitas o cristales suspendidos"

explicacion: |
  Es el mecanismo central: ascenso, enfriamiento, condensación en el
  punto de rocío.
```

## Sección: formulas-con-literales (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["fuerza"]

variables:
  m: random(2, 50)
  a: random(2, 20)

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si m = {m} kg y a = {a} m/s², ¿cuánto vale F (en N)?"

explicacion: |
  F = {m}×{a} = {m * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  a: random(2, 20)
  m_sol: random(2, 50)
  F: a * m_sol

respuesta: F / a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y a = {a} m/s², ¿cuánto vale m?"

explicacion: |
  m = F/a = {F}/{a} = {F / a}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  m: random(2, 50)
  a_sol: random(2, 20)
  F: m * a_sol

respuesta: F / m
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y m = {m} kg, ¿cuánto vale a?"

explicacion: |
  a = F/m = {F}/{m} = {F / m}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["trabajo"]

variables:
  Fz: random(2, 100)
  d: random(1, 30)

respuesta: Fz * d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si F = {Fz} N y d = {d} m, ¿cuánto vale W (en J)?"

explicacion: |
  W = {Fz}×{d} = {Fz * d}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  d: random(1, 30)
  F_sol: random(2, 100)
  W: d * F_sol

respuesta: W / d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y d = {d} m, ¿cuánto vale F?"

explicacion: |
  F = W/d = {W}/{d} = {W / d}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  Fz: random(2, 100)
  d_sol: random(1, 30)
  W: Fz * d_sol

respuesta: W / Fz
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y F = {Fz} N, ¿cuánto vale d?"

explicacion: |
  d = W/F = {W}/{Fz} = {W / Fz}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)

respuesta: (m * v ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si m = {m} kg y v = {v} m/s, ¿cuánto vale Ec (en J)?"

pasos:
  - "Ec = {m}×{v}²/2 = {m}×{v ^ 2}/2 = {(m * v ^ 2) / 2}"

explicacion: |
  Primero se eleva v al cuadrado, después se multiplica por m y se
  divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  v: random(2, 10)
  m_sol: random(2, 20)
  Ec: (m_sol * v ^ 2) / 2

respuesta: (2 * Ec) / (v ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si Ec = {Ec} J y v = {v} m/s, ¿cuánto vale m?"

pasos:
  - "Despejando: m = 2Ec/v² = {2 * Ec}/{v ^ 2} = {(2 * Ec) / (v ^ 2)}"

explicacion: |
  Primero se pasa el ½ multiplicando (queda 2Ec), y después se divide
  por v² (no se saca raíz, porque v² ya está calculado).
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(1, 50)
  h: random(1, 20)
  g: 10

respuesta: m * g * h
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si m = {m} kg y h = {h} m, ¿cuánto vale Ep (en J)?"

explicacion: |
  Ep = {m}×{g}×{h} = {m * g * h}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  h: random(1, 20)
  g: 10
  m_sol: random(1, 50)
  Ep: m_sol * g * h

respuesta: Ep / (g * h)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y h = {h} m, ¿cuánto vale m?"

pasos:
  - "m = Ep/(g·h) = {Ep}/({g}×{h}) = {Ep / (g * h)}"

explicacion: |
  Hay que dividir por las dos letras que multiplican (g y h), no sólo
  por una.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  m: random(1, 50)
  g: 10
  h_sol: random(1, 20)
  Ep: m * g * h_sol

respuesta: Ep / (g * m)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y m = {m} kg, ¿cuánto vale h?"

explicacion: |
  h = Ep/(g·m) = {Ep}/({g}×{m}) = {Ep / (g * m)}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  W: random(10, 500)
  t: random(1, 20)

respuesta: W / t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si W = {W} J y t = {t} s, ¿cuánto vale Pot (en W)?"

explicacion: |
  Pot = {W}/{t} = {W / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  Pot: random(5, 100)
  t: random(1, 20)

respuesta: Pot * t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y t = {t} s, ¿cuánto vale W?"

explicacion: |
  W = Pot×t = {Pot}×{t} = {Pot * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "denominador"]

variables:
  Pot: random(5, 50)
  t_sol: random(1, 20)
  W: Pot * t_sol

respuesta: W / Pot
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y W = {W} J, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: Pot·t = W → t = W/Pot"

explicacion: |
  Mismo caso de siempre: la letra que divide se pasa multiplicando
  primero.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["presion"]

variables:
  Fz: random(10, 200)
  A: random(1, 20)

respuesta: Fz / A
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si F = {Fz} N y A = {A} m², ¿cuánto vale P (en Pa)?"

explicacion: |
  P = {Fz}/{A} = {Fz / A}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["presion", "denominador"]

variables:
  P: random(5, 50)
  A_sol: random(1, 20)
  Fz: P * A_sol

respuesta: Fz / P
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si P = {P} Pa y F = {Fz} N, ¿cuánto vale A?"

explicacion: |
  A = F/P = {Fz}/{P} = {Fz / P}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  d: random(10, 300)
  t: random(1, 20)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d/t. Si d = {d} m y t = {t} s, ¿cuánto vale v (en m/s)?"

explicacion: |
  v = {d}/{t} = {d / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  d: random(10, 100)
  t: random(2, 10)
  m: random(1, 3) * 2

respuesta: (m * (d / t) ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de {m} kg recorre {d} m en {t} s a velocidad constante. ¿Cuál es su energía cinética?"

pasos:
  - "Primero v = d/t = {d}/{t} = {d / t} m/s"
  - "Después Ec = ½mv² = {m}×{d / t}²/2 = {(m * (d / t) ^ 2) / 2}"

explicacion: |
  Hay que usar una fórmula para hallar un dato intermedio (v) antes de
  poder aplicar la segunda fórmula (Ec).
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  m: random(2, 30)
  a: random(1, 10)
  d: random(1, 20)

respuesta: (m * a) * d
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza acelera un objeto de {m} kg a {a} m/s², y lo desplaza {d} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "Primero F = m·a = {m}×{a} = {m * a} N"
  - "Después W = F·d = {m * a}×{d} = {(m * a) * d}"

explicacion: |
  Se encadena F=ma con W=F·d.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "F = m·a"
tipo: mc
opciones_explicitas:
  - "F = m·a"
  - "W = F·d"
  - "P = F/A"

enunciado: "¿Qué fórmula relaciona la fuerza con la masa y la aceleración?"

explicacion: |
  Es la segunda ley de Newton.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ec = ½mv²"
tipo: mc
opciones_explicitas:
  - "Ec = ½mv²"
  - "Ep = m·g·h"
  - "Pot = W/t"

enunciado: "¿Qué fórmula da la energía asociada al movimiento (velocidad) de un objeto?"

explicacion: |
  La energía cinética depende de la masa y la velocidad; la potencial
  depende de la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Despejar una variable de una fórmula de Física usa exactamente el mismo procedimiento que despejar una fórmula matemática cualquiera."

explicacion: |
  No hay una técnica especial "de Física" — es álgebra aplicada a
  fórmulas con nombres y unidades distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el resultado de una fórmula física dé un número correcto, las unidades de los datos tienen que ser consistentes entre sí (por ejemplo, todo en el sistema SI)."

explicacion: |
  Mezclar km/h con segundos, o gramos con metros cúbicos, da un
  resultado numérico sin sentido, aunque el álgebra esté bien hecha.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 50)
  a: random(2, 20)
  real: m * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "F = m·a. Con m = {m} kg y a = {a} m/s², ¿es correcto que F sea {propuesto} N?"

explicacion: |
  El valor correcto es F = {m}×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)
  real: (m * v ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Ec = ½mv². Con m = {m} kg y v = {v} m/s, ¿es correcto que Ec sea {propuesto} J?"

explicacion: |
  El valor correcto es Ec = {m}×{v}²/2 = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un problema real, puede pedirse despejar cualquiera de las letras de la fórmula, no siempre la que ya está sola de un lado."

explicacion: |
  Por eso hace falta saber despejar cualquier variable, no memorizar
  sólo la forma en que la fórmula "viene escrita" en el libro.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "problema"]

variables:
  Fz: random(10, 100)
  d: random(1, 20)
  t: random(1, 10)

respuesta: (Fz * d) / t
tipo: input
tolerancia_abs: 0

enunciado: "Una máquina aplica una fuerza de {Fz} N a lo largo de {d} m, en {t} s. ¿Cuál es su potencia?"

pasos:
  - "Primero W = F·d = {Fz}×{d} = {Fz * d} J"
  - "Después Pot = W/t = {Fz * d}/{t} = {(Fz * d) / t}"

explicacion: |
  Se encadena W=F·d con Pot=W/t.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Este módulo no enseña ninguna técnica algebraica nueva — aplica lo ya aprendido en despejar-formula a un catálogo más grande de fórmulas reales de Física."

explicacion: |
  Es exactamente el motivo por el que este tema depende de
  `../../matematica/despejar-formula/` y no al revés.
```
