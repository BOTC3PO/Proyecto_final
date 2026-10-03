# Examen jefe — [PENDIENTE #844]

> Logro #844. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **110 preguntas totales** en 5/5 secciones.

---

## Sección: quimica-analitica (25 preguntas)

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

## Sección: numero-atomico-masico (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "El número atómico (Z) representa la cantidad de protones presentes en el núcleo de un átomo."

explicacion: |
  Correcto. El número atómico define la identidad del elemento químico.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: falso
tipo: vf

enunciado: "El número másico (A) incluye la masa de los electrones en el cálculo total."

explicacion: |
  Falso. El número másico es la suma de protones y neutrones; la masa de los electrones es despreciable y no se cuenta.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

respuesta: "neutrones"
tipo: completar
respuestas_validas:
  - "neutrones"

enunciado: "El número másico es igual a la suma de protones más ___."

explicacion: |
  El número másico (A) se calcula sumando los protones (Z) y los neutrones (N).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "Z"
tipo: mc
opciones_explicitas: ["Z", "A", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número atómico?"

explicacion: |
  La letra "Z" representa el número atómico; "A" representa el número másico.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "Z", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número másico?"

explicacion: |
  La letra "A" representa el número másico (protones + neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "neutrones", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: neutrones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene un número atómico (Z) de {protones} y un número másico (A) de {masico}. ¿Cuántos neutrones tiene?"

explicacion: |
  N = A - Z = {masico} - {protones} = {neutrones}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "masa_atomica", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: masico
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene {protones} protones y {neutrones} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  A = Z + N = {protones} + {neutrones} = {masico}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "numero_atomico", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene un número másico (A) de {masico} y contiene {neutrones} neutrones. ¿Cuál es su número atómico (Z)?"

explicacion: |
  Z = A - N = {masico} - {neutrones} = {protones}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["electrones", "atomos_neutros"]

respuesta: verdadero
tipo: vf

enunciado: "En un átomo neutro, el número de electrones es igual al número atómico Z."

explicacion: |
  Correcto. En un átomo neutro, la carga de los protones se compensa exactamente con la de los electrones, así que Z = electrones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "Z"
tipo: completar
respuestas_validas:
  - "Z"
  - "el numero atomico"

enunciado: "La fórmula para calcular el número de neutrones (N) es N = A - ___."

explicacion: |
  La fórmula es N = A - Z, donde A es el número másico y Z el número atómico (cantidad de protones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "simbolo_quimico"]

respuesta: "Arriba a la izquierda del símbolo"
tipo: mc
opciones_explicitas: ["Arriba a la izquierda del símbolo", "Abajo a la izquierda del símbolo", "Arriba a la derecha del símbolo", "Abajo a la derecha del símbolo"]

enunciado: "En la notación isotópica ᴬ_Z X (A arriba, Z abajo, junto al símbolo del elemento), ¿en qué posición se ubica el número másico (A)?"

explicacion: |
  El número másico (A) se escribe como superíndice a la izquierda del símbolo; el número atómico (Z) va como subíndice, también a la izquierda.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["calculo", "protones", "neutrones"]

variables:
  Z: random(1, 20)
  N: random(0, 20)

respuesta: Z + N
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene {Z} protones y {N} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  El número másico (A) es la suma de protones y neutrones: A = {Z} + {N} = {Z + N}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["identidad", "numero_atomico"]

respuesta: verdadero
tipo: vf

enunciado: "Si un átomo cambia su número atómico (Z), ¿se convierte en un elemento químico distinto?"

explicacion: |
  Verdadero. El número atómico (Z) define la identidad del elemento; cambiar la cantidad de protones cambia de qué elemento se trata.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isobaros", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos átomos de elementos distintos tengan el mismo número másico (A) pero distinto número atómico (Z)?"

explicacion: |
  Verdadero. Esos átomos se llaman isóbaros: tienen la misma masa total pero son elementos diferentes (a diferencia de los isótopos, que son el mismo elemento con distinta masa).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "isotopos"]

respuesta: "masico"
tipo: completar
respuestas_validas:
  - "masico"
  - "másico"

enunciado: "En la notación abreviada, una expresión como 'Carbono-14' indica el nombre del elemento seguido de su número ___."

explicacion: |
  El número que acompaña al nombre del elemento en esta notación hace referencia al número másico (protones + neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "electrones", "protones"]

variables:
  protones: random(1, 30)

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con {protones} protones, ¿cuántos electrones tiene?"

explicacion: |
  En un átomo neutro la carga total es cero, así que la cantidad de electrones es igual a la de protones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["numero_atomico", "teoria"]

respuesta: "cantidad de neutrones"
tipo: mc
opciones_explicitas: ["identidad del elemento", "cantidad de protones", "cantidad de electrones (si es neutro)", "cantidad de neutrones"]

enunciado: "Dado sólo el número atómico Z de un elemento, ¿qué información NO se puede obtener directamente?"

explicacion: |
  Z define la identidad, los protones, y (si es neutro) los electrones. Para los neutrones hace falta además el número másico A, ya que N = A - Z.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["neutrones", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber cuántos neutrones tiene un átomo hace falta conocer tanto el número atómico (Z) como el número másico (A)."

explicacion: |
  Correcto. La relación es N = A - Z; sin ambos valores no se puede determinar la cantidad de neutrones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

variables:
  z: 17
  a: 35

respuesta: a - z
tipo: completar
respuestas_validas:
  - 18

enunciado: "Si Z = {z} y A = {a}, el átomo tiene ___ neutrones."

explicacion: |
  El número de neutrones se calcula restando el número atómico al número másico: 35 - 17 = 18.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isotopos", "isobaros"]

respuesta: "mismo Z, distinto A"
tipo: mc
opciones_explicitas: ["mismo Z, distinto A", "distinto Z, mismo A", "mismo Z, mismo A", "distinto Z, distinto A"]

enunciado: "Dos isótopos del mismo elemento tienen..."

explicacion: |
  Los isótopos comparten el número atómico Z (son el mismo elemento) pero difieren en el número másico A (distinta cantidad de neutrones).
```

## Sección: quimica-de-la-atmosfera (25 preguntas)

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "estratosfera", "radiacion_uv"]

variables:
  funcion: uno_de(["absorbe", "filtra"])
  tipo_radiacion: "ultravioleta"

respuesta: funcion + " la radiación " + tipo_radiacion
tipo: completar

enunciado: "En la estratosfera, la capa de ozono tiene la función principal de {funcion} la radiación {tipo_radiacion} del sol."

explicacion: |
  El ozono estratosférico actúa como un escudo natural absorbiendo la mayor parte de la radiación ultravioleta (UV) dañina, protegiendo a los seres vivos de sus efectos mutagénicos.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["lluvia_acida", "so2", "combustibles_fosiles"]

variables:
  gas: "SO2"
  nombre: "dióxido de azufre"

respuesta: nombre
tipo: completar

enunciado: "Uno de los principales precursores de la lluvia ácida, emitido por la quema de combustibles fósiles que contienen impurezas de azufre, es el {nombre} ({gas})."

explicacion: |
  El dióxido de azufre ($SO_2$) reacciona con el agua y el oxígeno atmosférico para formar ácido sulfúrico ($H_2SO_4$), principal componente de la lluvia ácida.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "acido_sulfurico"]

variables:
  formula: "H2SO4"

respuesta: formula
tipo: input

enunciado: "Escribe la fórmula química del ácido fuerte formado cuando el dióxido de azufre reacciona con el vapor de agua y el oxígeno en la atmósfera."

explicacion: |
  La reacción del $SO_2$ conduce a la formación de ácido sulfúrico ($H_2SO_4$), que al precipitar acidifica los suelos y cuerpos de agua.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "fotoquimico", "luz_solar"]

variables:
  energia: "radiación ultravioleta"

respuesta: energia
tipo: completar

enunciado: "El esmog fotoquímico se forma cuando los óxidos de nitrógeno y los compuestos orgánicos volátiles (COV) reaccionan en presencia de {energia}."

explicacion: |
  El término "fotoquímico" indica que la luz solar (específicamente la radiación UV) actúa como catalizador o fuente de energía para impulsar estas reacciones.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "nox", "cov"]

variables:
  gas1: "NOx"
  gas2: "COV"
  nombre1: "óxidos de nitrógeno"
  nombre2: "compuestos orgánicos volátiles"

respuesta: nombre1 + " y " + nombre2
tipo: completar

enunciado: "Los dos grupos principales de contaminantes que interactúan para formar el esmog fotoquímico son los {nombre1} y los {nombre2}."

explicacion: |
  La interacción entre los óxidos de nitrógeno ($NO_x$) emitidos por vehículos e industria, y los compuestos orgánicos volátiles (COV), en presencia de luz solar, genera esmog.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "aluminio", "toxicidad"]

variables:
  metal: "aluminio"

respuesta: metal
tipo: input

enunciado: "La acidificación de los suelos causada por la lluvia ácida puede liberar metales pesados. ¿Qué metal, comúnmente presente en arcillas, se vuelve soluble y tóxico para las plantas?"

explicacion: |
  El aluminio ($Al$) es liberado de los minerales del suelo al bajar el pH. En forma soluble, es tóxico para las raíces de las plantas y la vida acuática.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "paradoja", "ubicacion"]

variables:
  capa_buena: "estratosfera"
  capa_mala: "troposfera"

respuesta: capa_buena + " y " + capa_mala
tipo: completar

enunciado: "El ozono es beneficioso en la {capa_buena}, pero actúa como contaminante en la {capa_mala}."

explicacion: |
  Esta es la paradoja del ozono: protege de la radiación UV arriba (estratosfera) pero irrita los pulmones abajo (troposfera).
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "acido_nitrico"]

variables:
  formula: "HNO3"

respuesta: formula
tipo: input

enunciado: "Además del ácido sulfúrico, la lluvia ácida contiene ácido nítrico. Escribe su fórmula química."

explicacion: |
  El ácido nítrico ($HNO_3$) se forma a partir de los óxidos de nitrógeno ($NO_x$) que reaccionan con el agua atmosférica.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["esmog", "urbano", "densidad"]

variables:
  lugar: "áreas urbanas"

respuesta: lugar
tipo: input

enunciado: "El esmog fotoquímico es particularmente relevante y frecuente en {lugar} debido a la alta densidad vehicular y emisiones industriales."

explicacion: |
  La concentración de vehículos y la topografía de muchas ciudades favorecen la acumulación de los precursores necesarios para el esmog.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "oxigeno", "alotropia"]

variables:
  nombre: "alótropos"

respuesta: nombre
tipo: input

enunciado: "El oxígeno molecular ($O_2$) y el ozono ($O_3$) son {nombre} del elemento oxígeno."

explicacion: |
  Son formas alotrópicas, es decir, distintas estructuras moleculares del mismo elemento químico con propiedades diferentes.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "ecosistemas_acuaticos"]

variables:
  efecto: "acidificar"

respuesta: efecto
tipo: input

enunciado: "Al precipitar, los ácidos formados en la lluvia ácida tienen la capacidad de {efecto} los cuerpos de agua, poniendo en riesgo la vida acuática."

explicacion: |
  La bajada del pH del agua mata peces, anfibios y altera la cadena alimentaria al liberar metales tóxicos como el aluminio.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "producto"]

variables:
  producto: "ozono troposférico"

respuesta: producto
tipo: input

enunciado: "Una de las principales consecuencias de la reacción fotoquímica entre $NO_x$ y COV es la generación de {producto}."

explicacion: |
  El esmog fotoquímico se caracteriza por altos niveles de ozono a nivel del suelo, a diferencia del ozono estratosférico protector.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["nox", "combustion", "temperatura"]

variables:
  fuente: "vehículos"

respuesta: fuente
tipo: input

enunciado: "Los óxidos de nitrógeno ($NO_x$) se generan principalmente por la combustión a alta temperatura en {fuente} e industrias."

explicacion: |
  El nitrógeno del aire reacciona con el oxígeno a altas temperaturas (motores de combustión interna), formando $NO$ y $NO_2$.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "propiedades_quimicas"]

variables:
  propiedad: "inestable"

respuesta: propiedad
tipo: input

enunciado: "A diferencia del $O_2$, el ozono ($O_3$) es un gas químicamente {propiedad} y altamente reactivo."

explicacion: |
  Su inestabilidad le permite actuar como un fuerte agente oxidante, lo que explica su toxicidad en bajas altitudes y su capacidad de absorber UV en altas altitudes.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "metales_pesados"]

variables:
  categoria: "metales pesados"

respuesta: categoria
tipo: input

enunciado: "La lluvia ácida libera de los suelos y sedimentos {categoria} que son tóxicos para la vida terrestre y acuática."

explicacion: |
  Entre ellos destaca el aluminio, pero también pueden movilizarse plomo, mercurio y otros dependiendo de la geología local.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "proteccion_biologica"]

variables:
  proteccion: "escudo natural"

respuesta: proteccion
tipo: input

enunciado: "La capa de ozono actúa como un {proteccion} natural contra la radiación ultravioleta solar."

explicacion: |
  Sin esta capa, la radiación UV alcanzaría la superficie en niveles que causarían daños masivos al ADN de los organismos vivos.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["lluvia_acida", "precipitacion"]

variables:
  forma: "ácidos fuertes"

respuesta: forma
tipo: input

enunciado: "Los óxidos de nitrógeno y azufre reaccionan con el vapor de agua para formar {forma} que luego precipitan."

explicacion: |
  Se forman principalmente ácido nítrico ($HNO_3$) y ácido sulfúrico ($H_2SO_4$), que son ácidos fuertes que bajan drásticamente el pH de la lluvia.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "cov"]

variables:
  siglas: "COV"
  nombre: "compuestos orgánicos volátiles"

respuesta: nombre
tipo: input

enunciado: "Las siglas COV se refieren a los {nombre}, precursoes clave del esmog."

explicacion: |
  Son hidrocarburos y otros compuestos orgánicos que se evaporan fácilmente a temperatura ambiente, provenientes de combustibles, disolventes y vegetación.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "formula"]

variables:
  formula: "O3"

respuesta: formula
tipo: input

enunciado: "Escribe la fórmula molecular del ozono."

explicacion: |
  El ozono está compuesto por tres átomos de oxígeno, por lo que su fórmula es $O_3$.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "transporte_atmosferico"]

variables:
  alcance: "distantes"

respuesta: alcance
tipo: input

enunciado: "La lluvia ácida puede tener consecuencias devastadoras en ecosistemas {alcance} a la fuente de emisión de contaminantes."

explicacion: |
  Los vientos transportan los gases ($SO_2$, $NO_x$) a grandes distancias antes de que precipiten, haciendo que la contaminación sea un problema transfronterizo.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["esmog", "salud"]

variables:
  organo: "pulmones"

respuesta: organo
tipo: input

enunciado: "El ozono troposférico presente en el esmog irrita principalmente los {organo} de las personas."

explicacion: |
  Al ser un oxidante fuerte, daña el tejido pulmonar, causando tos, dolor de garganta y agravando el asma.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["definicion", "reactor"]

variables:
  concepto: "reactor químico"

respuesta: concepto
tipo: input

enunciado: "La atmósfera puede ser conceptualizada como un gigante {concepto} donde ocurren reacciones constantes."

explicacion: |
  Es un sistema dinámico donde gases, partículas y radiación interactúan químicamente, determinando la calidad del aire y el clima.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "nox"]

variables:
  nombre: "óxidos de nitrógeno"

respuesta: nombre
tipo: input

enunciado: "Los {nombre} ($NO_x$) son emitidos por la combustión y contribuyen a la formación de lluvia ácida."

explicacion: |
  Incluyen principalmente monóxido de nitrógeno ($NO$) y dióxido de nitrógeno ($NO_2$), que son precursores del ácido nítrico.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "catalizador"]

variables:
  rol: "catalizador"

respuesta: rol
tipo: input

enunciado: "En la formación del esmog fotoquímico, la luz solar actúa como {rol} de las transformaciones químicas."

explicacion: |
  Proporciona la energía necesaria (fotones UV) para romper enlaces en las moléculas precursoras e iniciar la cadena de reacciones.
```

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "estratosfera"]

variables:
  capa: "estratosfera"

respuesta: capa
tipo: input

enunciado: "La capa de ozono protectora se encuentra ubicada en la {capa}."

explicacion: |
  La estratosfera es la capa de la atmósfera que se encuentra entre los 10 y 50 km de altitud, donde la concentración de ozono es máxima.
```

## Sección: configuracion-electronica (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "electrones"]

variables:
  escenario: [["s", 2], ["p", 6], ["d", 10], ["f", 14]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 6, 10, 14]

enunciado: "El subnivel {escenario[idx][0]} tiene una capacidad máxima de ___ electrones."

explicacion: |
  La capacidad depende de la cantidad de orbitales del subnivel: s (1 orbital, 2e⁻), p (3 orbitales, 6e⁻), d (5 orbitales, 10e⁻) y f (7 orbitales, 14e⁻).
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel p puede tener un máximo de 6 electrones."

explicacion: |
  El subnivel p tiene 3 orbitales, y cada orbital admite hasta 2 electrones: 3 × 2 = 6.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: "d"
tipo: completar
respuestas_validas:
  - "d"

enunciado: "El subnivel con capacidad máxima de 10 electrones es el ___."

explicacion: |
  El subnivel d tiene 5 orbitales, lo que permite un máximo de 10 electrones (5 × 2).
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["regla_madelung", "orden_llenado"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel 4s se llena antes que el 3d según la regla de las diagonales (principio de Aufbau)."

explicacion: |
  Según la regla de las diagonales, el 4s tiene menor energía que el 3d, así que se llena primero — aunque el 3 sea menor que el 4.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["orden_llenado", "principio_aufbau"]

respuesta: "1s, 2s, 2p, 3s"
tipo: mc
opciones_explicitas: ["1s, 2s, 2p, 3s", "1s, 2p, 2s, 3s", "2s, 1s, 3s, 2p"]

enunciado: "¿Cuál es el orden correcto de llenado para estos subniveles: 1s, 2s, 2p y 3s?"

explicacion: |
  Siguiendo el principio de Aufbau, los subniveles se llenan en orden creciente de energía: 1s → 2s → 2p → 3s.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "electrones"]

variables:
  pares: [[3, 3], [6, 6], [8, 8], [11, 11], [17, 17]]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: pares[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con número atómico Z = {pares[idx][0]}, ¿cuántos electrones tiene en total?"

explicacion: |
  Un átomo neutro tiene tantos electrones como su número atómico (Z). Aquí Z = {pares[idx][0]}, entonces tiene {pares[idx][1]} electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["configuracion", "elementos"]

variables:
  datos: [["1s2 2s2 2p6 3s1", "Sodio (Z=11)"], ["1s2 2s2 2p4", "Oxígeno (Z=8)"], ["1s2 2s2 2p6 3s2 3p5", "Cloro (Z=17)"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sodio (Z=11)", "Oxígeno (Z=8)", "Cloro (Z=17)"]

enunciado: "La configuración electrónica {datos[idx][0]} corresponde a:"

explicacion: |
  Esa configuración electrónica corresponde a {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["cloro", "subniveles"]

respuesta: "5"
tipo: completar
respuestas_validas:
  - "5"

enunciado: "La configuración electrónica del cloro (Z=17) es 1s² 2s² 2p⁶ 3s² 3p___."

explicacion: |
  El cloro tiene 17 electrones. 2 (1s) + 2 (2s) + 6 (2p) + 2 (3s) = 12; faltan 5 electrones para el subnivel 3p.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los superíndices de una configuración electrónica correcta debe ser igual al número de electrones del átomo."

explicacion: |
  Verdadero. Cada superíndice indica cuántos electrones hay en ese subnivel; la suma total tiene que coincidir con Z en un átomo neutro.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "conteo"]

respuesta: 6
tipo: mc
opciones_explicitas: [2, 4, 6, 8]

enunciado: "¿Cuántos electrones tiene el subnivel 2p en la configuración completa 1s² 2s² 2p⁶ 3s²?"

explicacion: |
  El superíndice del subnivel 2p en esa configuración es 6.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["electrones_valencia", "tabla_periodica"]

variables:
  datos: [["Sodio", "1s2 2s2 2p6 3s1", 1], ["Cloro", "1s2 2s2 2p6 3s2 3p5", 7], ["Oxígeno", "1s2 2s2 2p4", 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7, 8]

enunciado: "Dado el elemento {datos[idx][0]} con la configuración electrónica {datos[idx][1]}, ¿cuántos electrones de valencia tiene?"

explicacion: |
  {datos[idx][0]} tiene {datos[idx][2]} electrones en su nivel más externo.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "más alto"
tipo: completar
respuestas_validas:
  - "más alto"
  - "ultimo"
  - "último"

enunciado: "Los electrones de valencia son los que están en el nivel ___ de la configuración electrónica."

explicacion: |
  Los electrones de valencia son los que ocupan el nivel de energía más alto (el último) de un átomo.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los electrones de valencia son los que participan en los enlaces químicos?"

explicacion: |
  Verdadero. La reactividad química de un átomo depende de cómo interactúan sus electrones de valencia con otros átomos.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["tabla_periodica", "grupos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Dos elementos con la misma cantidad de electrones de valencia están, en general, en el mismo grupo de la tabla periódica?"

explicacion: |
  Verdadero (para elementos representativos): comparten propiedades químicas similares porque tienen la misma cantidad de electrones de valencia.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["niveles_energia"]

variables:
  datos: [[11, 3], [17, 3], [8, 2], [3, 2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7]

enunciado: "Para un átomo con número atómico Z = {datos[idx][0]}, ¿cuál es el número del nivel de energía más alto ocupado?"

explicacion: |
  El nivel de energía más alto ocupado corresponde al número cuántico principal más grande de su configuración. Para Z = {datos[idx][0]}, es el nivel {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["orbitales", "aufbau"]

respuesta: falso
tipo: vf

enunciado: "Los subniveles de energía se llenan siempre en orden estricto de menor a mayor número de nivel (1, 2, 3...), sin excepciones."

explicacion: |
  Falso. Por el principio de Aufbau, se llenan según su energía real, no según el número de nivel — el 4s tiene menor energía que el 3d y se llena primero.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["capacidad", "orbitales"]

respuesta: 8
tipo: mc
opciones_explicitas: [2, 6, 8, 18]

enunciado: "¿Cuál es la capacidad total de electrones que pueden albergar los subniveles del segundo nivel de energía (2s y 2p)?"

explicacion: |
  El nivel 2 tiene el subnivel 2s (capacidad 2) y el subnivel 2p (capacidad 6): 2 + 6 = 8 electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conteo", "electrones"]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"

enunciado: "En la configuración electrónica 1s² 2s² 2p⁶, el total de electrones es ___."

explicacion: |
  Sumando los superíndices: 2 (1s) + 2 (2s) + 6 (2p) = 10 electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "neutros"]

respuesta: verdadero
tipo: vf

enunciado: "La configuración electrónica de un átomo neutro tiene tantos electrones como su número atómico Z."

explicacion: |
  Verdadero. En un átomo neutro, la carga de los electrones cancela exactamente la de los protones (Z), así que su cantidad coincide.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["capacidad", "nivel_3"]

respuesta: 18
tipo: mc
opciones_explicitas: [8, 10, 18, 32]

enunciado: "¿Cuál es la capacidad total de electrones del nivel 3 completo (3s + 3p + 3d)?"

explicacion: |
  3s (2) + 3p (6) + 3d (10) = 18 electrones — aunque en la práctica el 3d se llena después del 4s por la regla de las diagonales.
```

## Sección: reactivo-limitante-rendimiento (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "estequiometria"]

respuesta: "3"
tipo: mc
opciones_explicitas: ["3", "5", "10", "13"]

enunciado: "Para armar un sándwich necesitas 2 rodajas de pan y 1 de queso. Si tenés 10 rodajas de pan y 3 de queso, ¿cuántos sándwiches podés armar como máximo?"

explicacion: |
  Con 10 panes (2 por sándwich): 10/2 = 5 sándwiches posibles. Con 3 quesos (1 por sándwich): 3/1 = 3 sándwiches posibles. El queso se agota primero: sólo se pueden armar 3.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El reactivo limitante es aquel que sobra al final de la reacción química."

explicacion: |
  Falso. El reactivo limitante es el que se agota primero y detiene la reacción. El que sobra es el reactivo en exceso.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exceso"
tipo: completar
respuestas_validas:
  - "exceso"

enunciado: "El reactivo que sobra al final de la reacción se llama reactivo en ___."

explicacion: |
  El reactivo que no se consume totalmente se llama reactivo en exceso.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El reactivo limitante determina la cantidad máxima de producto que se puede formar en una reacción química."

explicacion: |
  Verdadero. Como el reactivo limitante se agota primero, la reacción se detiene ahí y limita la producción total.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_h2: uno_de([4, 6, 8, 10])

respuesta: moles_h2 / 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_h2} moles de H2, ¿cuál es el cociente moles/coeficiente del H2?"

pasos:
  - "Coeficiente de H2 en la ecuación: 2"
  - "Cociente: {moles_h2} / 2"

explicacion: |
  El cociente se calcula dividiendo los moles disponibles por el coeficiente estequiométrico de esa sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_o2: uno_de([1, 2, 3])

respuesta: moles_o2
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_o2} moles de O2, ¿cuál es el cociente moles/coeficiente del O2?"

pasos:
  - "Coeficiente de O2 en la ecuación: 1"
  - "Cociente: {moles_o2} / 1"

explicacion: |
  Como el coeficiente del O2 es 1, el cociente es igual a la cantidad de moles disponibles.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El reactivo con el cociente menor (moles dividido coeficiente) entre todos los reactivos es el reactivo limitante?"

explicacion: |
  Correcto. El reactivo limitante se identifica porque su cociente moles/coeficiente es el valor mínimo entre todos los reactivos.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento"]

respuesta: "coeficiente"
tipo: completar
respuestas_validas:
  - "coeficiente"
  - "coeficientes"

enunciado: "Para encontrar el reactivo limitante hay que dividir los moles de cada reactivo por su ___ en la ecuación balanceada."

explicacion: |
  El coeficiente estequiométrico indica la proporción en la que reaccionan los reactivos; dividir los moles reales por él permite compararlos.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "O2"
tipo: mc
opciones_explicitas: ["O2", "H2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 6 moles de H2 y 2 moles de O2, ¿cuál es el reactivo limitante?"

pasos:
  - "Cociente de H2: 6 / 2 = 3"
  - "Cociente de O2: 2 / 1 = 2"
  - "El menor (2) corresponde al O2."

explicacion: |
  El cociente del H2 es 3 y el del O2 es 2. Como 2 es menor, el oxígeno se agota antes: es el reactivo limitante.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "calculo"]

variables:
  rendimiento_teorico: uno_de([20, 40, 50, 80, 100])
  porcentaje: uno_de([50, 75, 80, 90])
  rendimiento_real: rendimiento_teorico * porcentaje / 100

respuesta: porcentaje
tipo: completar
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {rendimiento_teorico} g y el rendimiento real obtenido en el laboratorio es de {rendimiento_real} g. ¿Cuál es el porcentaje de rendimiento?"

pasos:
  - "Dividir el rendimiento real por el teórico y multiplicar por 100."

explicacion: |
  % rendimiento = ({rendimiento_real} / {rendimiento_teorico}) × 100 = {porcentaje}%.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: "teorico"
tipo: completar
respuestas_validas:
  - "teorico"

enunciado: "La fórmula del rendimiento porcentual es (rendimiento real dividido rendimiento ___) por 100."

explicacion: |
  El rendimiento porcentual compara lo obtenido experimentalmente (real) contra la cantidad máxima predicha por la estequiometría (teórico).
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real de una reacción en la práctica es casi siempre menor al 100%."

explicacion: |
  Por reacciones secundarias, pérdidas de material en el proceso, etc., el rendimiento real suele ser menor al teórico.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: "el reactivo limitante"
tipo: mc
opciones_explicitas: ["el reactivo limitante", "el reactivo en exceso", "el promedio de ambos reactivos", "el producto final medido"]

enunciado: "El rendimiento teórico de una reacción se calcula a partir de:"

explicacion: |
  Siempre se basa en el reactivo limitante, porque es el que determina la cantidad máxima de producto posible.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Un rendimiento mayor al 100% siempre es físicamente posible en condiciones normales, sin ningún error de medición."

explicacion: |
  Falso. No se puede obtener más producto del que la estequiometría permite; un rendimiento >100% indica errores experimentales (impurezas, humedad, pesada incorrecta).
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["estequiometria", "conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "Los cálculos de la cantidad de producto formado se hacen a partir de los moles del reactivo LIMITANTE, no del reactivo en exceso."

explicacion: |
  Correcto. El reactivo limitante determina la cantidad máxima de producto posible.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "conceptos_clave"]

respuesta: "queda en exceso, sin usarse"
tipo: mc
opciones_explicitas: ["queda en exceso, sin usarse", "se usa igual", "se destruye", "se convierte en queso"]

enunciado: "En la analogía de los sándwiches (2 panes + 1 queso por sándwich), si el queso es el reactivo limitante, ¿qué pasa con el pan sobrante?"

explicacion: |
  El reactivo en exceso es el que sobra una vez que el limitante se agotó por completo — no se transforma en nada, simplemente no reacciona.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "avanzado"
  tags: ["calculo", "rendimiento"]

variables:
  datos: [[10, 5], [20, 10], [25, 15], [50, 20]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1] / datos[idx][0] * 100
tipo: completar
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {datos[idx][0]} gramos y el rendimiento real obtenido es de {datos[idx][1]} gramos. ¿Cuál es el porcentaje de rendimiento?"

explicacion: |
  % rendimiento = ({datos[idx][1]} / {datos[idx][0]}) × 100.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento", "estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar el reactivo limitante, el primer paso es convertir todas las cantidades de los reactivos a moles."

explicacion: |
  Correcto. La estequiometría trabaja en proporciones molares; no se pueden comparar masas directamente sin pasar antes por moles.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "H2"
tipo: mc
opciones_explicitas: ["H2", "O2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 4 moles de H2 y 3 moles de O2, ¿cuál es el reactivo limitante?"

explicacion: |
  Cociente de H2: 4/2 = 2. Cociente de O2: 3/1 = 3. El menor es 2 (H2), así que el H2 es el limitante.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agrega más cantidad del reactivo que YA está en exceso, la cantidad de producto formado no aumenta (mientras el limitante siga siendo el mismo)."

explicacion: |
  Verdadero. Agregar más del reactivo en exceso no cambia nada: el límite lo sigue poniendo el reactivo limitante, que no varió.
```

