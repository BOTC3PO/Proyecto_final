# Quimica — quimica analitica (cuestionario, 25 preguntas VBLang)

> Tema: `quimica/quimica-analitica`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["unidades", "volumen", "preparacion"]

variables:
  volumen_litros: random_float(0.05, 0.5)
  volumen_ml: volumen_litros * 1000
  volumen_entero: redondear(volumen_ml, 0)

respuesta: volumen_entero
tipo: input

enunciado: "Para preparar una solución, necesitas {volumen_litros} litros de disolvente. ¿Cuántos mililitros son exactamente? (Enterá un número entero)"

explicacion: |
  Para convertir litros a mililitros, multiplicamos por 1000.
  1 L = 1000 mL.
```

### 2 — pregunta 2

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["dilucion", "calculos", "molaridad"]

variables:
  c1: random(1, 5)
  v1: random(10, 20)
  v2: random(100, 200)
  # C1 * V1 = C2 * V2  =>  C2 = (C1 * V1) / V2
  c2: (c1 * v1) / v2
  c2_redondeada: redondear(c2, 2)

respuesta: c2_redondeada
tipo: input

enunciado: "Tomás {v1} mL de una solución madre de {c1} M y la diluís hasta un volumen final de {v2} mL. ¿Cuál es la nueva concentración?"

explicacion: |
  Usamos la fórmula de dilución: C1 * V1 = C2 * V2.
  Despejamos C2: C2 = (C1 * V1) / V2.
  Asegurate de que las unidades de volumen sean iguales.
```

### 3 — pregunta 3

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["concentracion", "porcentaje", "masa_volumen"]

variables:
  masa_soluto: random(5, 20)
  volumen_solucion: uno_de([100, 200, 250])
  porcentaje: (masa_soluto / volumen_solucion) * 100

respuesta: redondear(porcentaje, 1)
tipo: input

enunciado: "Se disuelven {masa_soluto} gramos de glucosa en agua hasta obtener {volumen_solucion} mL de solución. ¿Cuál es la concentración en % m/v?"

explicacion: |
  La concentración % m/v se calcula como: (masa de soluto en gramos / volumen de solución en mL) * 100.
```

### 4 — pregunta 4

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["unidades", "ppm", "diluciones"]

variables:
  ppm: random(10, 100)
  # En soluciones acuosas diluidas, 1 ppm ≈ 1 mg/L
  mg_por_l: ppm

respuesta: mg_por_l
tipo: input

enunciado: "Una muestra de agua tiene una concentración de {ppm} ppm de nitratos. Expresando esto en mg/L, ¿cuánto es?"

explicacion: |
  Para soluciones acuosas diluidas (donde la densidad es ~1 g/mL), 1 ppm es equivalente a 1 mg/L.
```

### 5 — pregunta 5

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["dilucion", "calculos", "preparacion"]

variables:
  c_inicial: 1.0
  factor_dilucion: 10
  c_final: c_inicial / factor_dilucion

respuesta: c_final
tipo: input

enunciado: "Si tomás 1 mL de una solución 1.0 M y lo llevás a 10 mL con agua, y luego tomás 1 mL de esa segunda y lo llevás a 10 mL más, ¿cuál es la concentración final?"

explicacion: |
  Primera dilución: 1.0 M / 10 = 0.1 M.
  Segunda dilución: 0.1 M / 10 = 0.01 M.
  El factor total de dilución es 100.
```

### 6 — pregunta 6

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["pureza", "calculos", "porcentaje"]

variables:
  masa_muestra: random(1.0, 2.0)
  masa_pura_identificada: random(0.8, 1.5)
  porcentaje_pureza: (masa_pura_identificada / masa_muestra) * 100
  porcentaje_redondeado: redondear(porcentaje_pureza, 1)

respuesta: porcentaje_redondeado
tipo: input

enunciado: "Una muestra de {masa_muestra} g de carbonato de calcio se analiza y se determina que contiene {masa_pura_identificada} g de CaCO3 puro. ¿Cuál es el porcentaje de pureza?"

explicacion: |
  % Pureza = (masa de sustancia pura / masa total de la muestra) * 100.
```

### 7 — pregunta 7

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["titulacion", "equivalencia", "indicadores"]

respuesta: verdadero
tipo: vf

enunciado: "El punto de equivalencia en una titulación es el momento exacto en que la cantidad de titulante añadida es estequiométricamente igual a la cantidad de analito presente en la muestra."

explicacion: |
  Verdadero. El punto de equivalencia es teórico y estequiométrico. El punto final es el observado experimentalmente (cambio de color del indicador), que debe coincidir lo más posible con el de equivalencia.
```

### 8 — pregunta 8

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad", "calculos"]

variables:
  c1: random_float(1.0, 5.0)
  v1: random(10, 50)
  v2: random(100, 200)

respuesta: redondear((c1 * v1) / v2, 2)
tipo: input

enunciado: "Se toman {v1} mL de una solución de HCl {c1} M y se diluyen hasta un volumen final de {v2} mL. ¿Cuál es la nueva concentración en M? (Redondear a 2 decimales)"

explicacion: |
  Usamos la fórmula de dilución: C1 * V1 = C2 * V2.
  Despejando C2: C2 = (C1 * V1) / V2.
  Nota: Las unidades de volumen deben ser consistentes (ambas en mL o ambas en L).
```

### 9 — pregunta 9

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["ph", "acidos", "bases", "calculos"]

variables:
  concentracion: random_float(0.01, 0.5)
  ph_calc: redondear(-log10(concentracion), 2)

respuesta: ph_calc
tipo: input

enunciado: "Calcule el pH de una solución de HCl 0.{floor(concentracion*100)} M. (Asuma disociación completa y redondee a 2 decimales)"

explicacion: |
  Para ácidos fuertes monopróticos como HCl: [H+] = [Ácido].
  pH = -log10([H+]).
```

### 10 — pregunta 10

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["indicadores", "titulacion"]

respuesta: "cambio de color"
tipo: completar

enunciado: "En una titulación, el indicador se utiliza para visualizar el punto final mediante un ___ visible."

respuestas_validas:
  - "cambio de color"
  - "viraje"
  - "cambio de tono"

explicacion: |
  Los indicadores son sustancias que cambian de color en un rango de pH específico, señalando visualmente cuándo ha ocurrido la reacción completa.
```

### 11 — pregunta 11

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["estequiometria", "titulacion", "calculos"]

variables:
  m_a: random(10, 50) # mL de ácido
  m_b: random(10, 50) # mL de base
  c_b: random_float(0.1, 0.5) # M de base
  # Reacción 1:1 (ej. HCl + NaOH)
  c_a_calc: redondear((m_b * c_b) / m_a, 3)

respuesta: c_a_calc
tipo: input

enunciado: "Se titulan {m_a} mL de HCl con NaOH 0.{floor(c_b*10)} M. Si se requieren {m_b} mL de base para alcanzar el punto de equivalencia (reacción 1:1), ¿cuál es la molaridad del ácido? (Redondear a 3 decimales)"

explicacion: |
  Para reacción 1:1: M_acido * V_acido = M_base * V_base.
  M_acido = (M_base * V_base) / V_acido.
```

### 12 — pregunta 12

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["cromatografia", "fases"]

respuesta: verdadero
tipo: vf

enunciado: "En la cromatografía, la fase estacionaria puede ser un sólido o un líquido, mientras que la fase móvil es siempre un líquido o un gas."

explicacion: |
  Verdadero. La fase estacionaria retiene los componentes y la fase móvil los arrastra. La interacción diferencial permite la separación.
```

### 13 — pregunta 13

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["preparacion_soluciones", "masa"]

variables:
  masa_molar: 58.44 # NaCl
  volumen_ml: random(100, 500)
  molaridad_deseada: random_float(0.1, 0.5)
  masa_necesaria: redondear((volumen_ml / 1000) * molaridad_deseada * masa_molar, 2)

respuesta: masa_necesaria
tipo: input

enunciado: "¿Cuántos gramos de NaCl (PM = 58.44 g/mol) se necesitan para preparar {volumen_ml} mL de una solución 0.{floor(molaridad_deseada*10)} M? (Redondear a 2 decimales)"

explicacion: |
  Moles = M * V(L).
  Masa = Moles * PM.
```

### 14 — pregunta 14

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["normalidad", "equivalentes"]

variables:
  molaridad: random_float(0.1, 0.3)
  valencia_acido: 2 # H2SO4
  normalidad_calc: redondear(molaridad * valencia_acido, 2)

respuesta: normalidad_calc
tipo: input

enunciado: "Calcule la normalidad de una solución de H2SO4 0.{floor(molaridad*10)} M. (El ácido es diprótico, aporta 2 equivalentes por mol)"

explicacion: |
  Normalidad (N) = Molaridad (M) * Número de equivalentes por mol (n).
  Para H2SO4, n=2.
```

### 15 — pregunta 15

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["espectroscopia", "uv-vis", "lambert-beer"]

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Beer-Lambert establece que la absorbancia de una solución es directamente proporcional a la concentración del analito y a la longitud de la trayectoria de la luz."

explicacion: |
  Verdadero. A = ε * b * c, donde A es absorbancia, ε es el coeficiente de extinción, b es la longitud del camino y c es la concentración.
```

### 16 — pregunta 16

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["terminologia", "titulacion"]

respuesta: "conocida"
tipo: completar

enunciado: "En una titulación, la solución que se encuentra en la bureta y cuya concentración es ___ se llama titulante."

respuestas_validas:
  - "conocida"
  - "exacta"
  - "estandarizada"

explicacion: |
  El titulante es la solución estándar (conocida) que se agrega para reaccionar con el analito (concentración desconocida).
```

### 17 — pregunta 17

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["concentracion", "%masa"]

variables:
  masa_solutos: random(5, 20)
  masa_solvente: random(50, 100)
  masa_total: masa_solutos + masa_solvente
  porcentaje_calc: redondear((masa_solutos / masa_total) * 100, 2)

respuesta: porcentaje_calc
tipo: input

enunciado: "Se disuelven {masa_solutos} g de NaCl en {masa_solvente} g de agua. ¿Cuál es el porcentaje en masa (% m/m) del soluto? (Redondear a 2 decimales)"

explicacion: |
  % m/m = (masa soluto / masa solución total) * 100.
  Masa solución = masa soluto + masa solvente.
```

### 18 — pregunta 18

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["dilucion", "factor"]

variables:
  v_inicial: random(10, 20)
  v_final: random(100, 200)
  factor_calc: floor(v_final / v_inicial)

respuesta: factor_calc
tipo: input

enunciado: "Si tomamos {v_inicial} mL de una solución y la llevamos a un volumen final de {v_final} mL, ¿cuál es el factor de dilución (V_final / V_inicial)? (Resultado entero)"

explicacion: |
  El factor de dilución es la relación entre el volumen final y el volumen inicial.
```

### 19 — pregunta 19

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["estadistica", "errores", "calidad"]

respuesta: falso
tipo: vf

enunciado: "La precisión se refiere a qué tan cerca está un valor medido del valor verdadero, mientras que la exactitud se refiere a la reproducibilidad de las mediciones."

explicacion: |
  Falso. Es al revés. La exactitud es la cercanía al valor verdadero. La precisión es la reproducibilidad (consistencia) entre múltiples mediciones.
```

### 20 — pregunta 20

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["espectrometria_masas"]

respuesta: "masa"
tipo: completar

enunciado: "La espectrometría de masas separa los iones basándose en su relación ___/carga."

respuestas_validas:
  - "masa"
  - "masa molar"

explicacion: |
  La relación m/z (masa por carga) es el parámetro fundamental medido en un espectrómetro de masas.
```

### 21 — pregunta 21

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["ph", "bases"]

variables:
  concentracion: random_float(0.001, 0.05)
  poh_calc: redondear(-log10(concentracion), 2)
  ph_calc: redondear(14 - poh_calc, 2)

respuesta: ph_calc
tipo: input

enunciado: "Calcule el pH de una solución de NaOH 0.{floor(concentracion*1000)} M. (Redondear a 2 decimales)"

explicacion: |
  [OH-] = [Base].
  pOH = -log10([OH-]).
  pH = 14 - pOH.
```

### 22 — pregunta 22

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "avanzado"
  tags: ["concentracion", "conversion"]

variables:
  porcentaje: 10
  densidad: 1.05
  pm: 58.44 # NaCl
  # g soluto en 1L = (porcentaje/100) * densidad * 1000
  g_solutos: (porcentaje/100) * densidad * 1000
  molaridad_calc: redondear(g_solutos / pm, 2)

respuesta: molaridad_calc
tipo: input

enunciado: "Una solución de NaCl (PM=58.44) tiene {porcentaje}% masa y densidad {densidad} g/mL. Calcule la molaridad. (Redondear a 2 decimales)"

explicacion: |
  1. Masa de 1L solución = densidad * 1000.
  2. Masa de soluto = % * Masa solución.
  3. Moles = Masa soluto / PM.
  4. Molaridad = Moles / 1 L.
```

### 23 — pregunta 23

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "basico"
  tags: ["indicadores", "ph"]

respuesta: verdadero
tipo: vf

enunciado: "El punto de viraje de un indicador debe coincidir lo más posible con el punto de equivalencia de la titulación para minimizar el error."

explicacion: |
  Verdadero. Si el indicador cambia de color muy antes o muy después del punto de equivalencia, el resultado será inexacto.
```

### 24 — pregunta 24

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["hplc", "cromatografia"]

respuesta: "liquido"
tipo: completar

enunciado: "En la Cromatografía Líquida de Alta Resolución (HPLC), la fase móvil es un ___ a alta presión."

respuestas_validas:
  - "liquido"
  - "solvente"

explicacion: |
  HPLC significa High Performance Liquid Chromatography. La fase móvil es un líquido impulsado por bombas de alta presión.
```

### 25 — pregunta 25

```
metadata:
  materia: "quimica"
  tema: "quimica_analitica"
  nivel: "intermedio"
  tags: ["neutralizacion", "estequiometria"]

variables:
  v_acido: random(10, 30)
  m_acido: random_float(0.1, 0.5)
  # Reacción: H2SO4 + 2NaOH -> Na2SO4 + 2H2O
  # Moles H+ = 2 * Moles H2SO4
  # Moles OH- necesarios = Moles H+
  # Moles NaOH = 2 * (m_acido * v_acido/1000)
  # V_NaOH = Moles_NaOH / M_NaOH
  m_base: random_float(0.1, 0.5)
  moles_h: 2 * m_acido * (v_acido/1000)
  v_base_calc: redondear((moles_h / m_base) * 1000, 2)

respuesta: v_base_calc
tipo: input

enunciado: "¿Cuántos mL de NaOH {m_base} M se necesitan para neutralizar {v_acido} mL de H2SO4 {m_acido} M? (Reacción 1 mol ácido : 2 moles base)"

explicacion: |
  1. Moles H2SO4 = M * V(L).
  2. Moles H+ = 2 * Moles H2SO4.
  3. Moles NaOH necesarios = Moles H+.
  4. V_NaOH = Moles_NaOH / M_NaOH.
```
