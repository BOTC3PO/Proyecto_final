# Examen jefe — [PENDIENTE #738]

> Logro #738. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: iman-polos-atraccion-repulsion (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

tipo: mc
opciones_explicitas: ["Norte y Sur", "Norte y Norte", "Este y Oeste", "Positivo y Negativo"]
respuesta: "Norte y Sur"

enunciado: "Todo imán posee dos zonas de máxima intensidad de campo magnético denominadas polos ___."

explicacion: |
  Los polos de un imán son las regiones donde el campo magnético es más intenso. Los nombres convencionales son polo Norte y polo Sur.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

tipo: vf
respuesta: falso

enunciado: "Si acercamos un polo Norte de un imán a un polo Norte de otro imán, estos experimentarán una fuerza de atracción."

explicacion: |
  La regla fundamental del magnetismo establece que polos iguales se repelen y polos opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

variables:
  idx: uno_de([0, 1, 2, 3])
  polo_a: ["Norte", "Sur", "Norte", "Sur"]
  polo_b: ["Sur", "Norte", "Norte", "Sur"]
  resultados_texto: ["atracción", "atracción", "repulsión", "repulsión"]

tipo: completar
respuestas_validas:
  - "atracción"
  - "repulsión"
respuesta: resultados_texto[idx]

enunciado: "Cuando se aproximan dos polos magnéticos (un polo {polo_a[idx]} y un polo {polo_b[idx]}), la fuerza resultante es de ___."

explicacion: |
  Si los polos son opuestos (Norte-Sur), la fuerza es de atracción. Si los polos son iguales (Norte-Norte o Sur-Sur), la fuerza es de repulsión.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo"]

tipo: mc
opciones_explicitas: ["imán", "conductor", "aislante", "superconductor"]
respuesta: "imán"

enunciado: "Un objeto que presenta la propiedad de atraer metales ferrosos debido a su campo magnético se denomina ___."

explicacion: |
  La capacidad de atraer materiales ferromagnéticos es la característica principal de un imán.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["repulsión"]

tipo: mc
opciones_explicitas: ["atracción", "repulsión", "ninguna", "estática"]
respuesta: "repulsión"

enunciado: "Si dos imanes se presentan con sus polos iguales enfrentados (Norte con Norte o Sur con Sur), se observa una fuerza de ___."

explicacion: |
  La repulsión es la respuesta característica cuando los polos magnéticos son idénticos.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: "atracción"
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Cuando se acercan dos polos magnéticos de distinta naturaleza (uno Norte y uno Sur), la fuerza resultante es de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte con Norte o Sur con Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible separar un imán en dos partes, de modo que una parte tenga solo un polo Norte y la otra solo un polo Sur?"

explicacion: |
  Falso. Los imanes son dipolos; al romper un imán, cada fragmento resultante se convierte en un nuevo imán con su propio polo Norte y Sur.
```

```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["calculo", "fuerza"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [2.5, 4.0, 1.2]

respuesta: 10 / (datos[idx] * datos[idx])
tipo: completar
tolerancia_abs: 0.01

enunciado: "La fuerza de atracción entre dos imanes se puede modelar simplificadamente como F = k / d^2. Si la constante k es 10 y la distancia d es {datos[idx]} cm, ¿cuál es la fuerza F en unidades arbitrarias?"

pasos:
  - "Identificar la constante k = 10"
  - "Identificar la distancia d = {datos[idx]}"
  - "Calcular el cuadrado de la distancia: {datos[idx]} * {datos[idx]} = {datos[idx] * datos[idx]}"
  - "Dividir la constante por el resultado: 10 / {datos[idx] * datos[idx]}"

explicacion: |
  Usando la fórmula F = k / d^2 con k = 10.
```

```
metadata:
  materia: "fisica"
  tema: "campos_magneticos"
  nivel: "basico"
  tags: ["polos", "direccion"]

respuesta_orden: ["Norte", "Sur"]
tipo: ordenar

opciones_explicitas: ["Sur", "Norte"]

enunciado: "En un imán de barra, las líneas de campo magnético en su exterior viajan desde el polo ___ hacia el polo ___."

explicacion: |
  Por convención, las líneas de campo magnético salen del polo Norte y entran al polo Sur en el espacio exterior al imán.
```

```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["comparacion", "distancia"]

variables:
  distancia_inicial: uno_de([0.1, 0.2])

respuesta: "se reduce"
tipo: mc
opciones_explicitas: ["aumenta", "se reduce", "se mantiene"]

enunciado: "Si mantenemos constante la fuerza de los imanes y duplicamos la distancia entre ellos (de {distancia_inicial} m a {distancia_inicial * 2} m), la fuerza de atracción ___."

explicacion: |
  Según la ley de la inversa del cuadrado, si la distancia se duplica, la fuerza se reduce a la cuarta parte (1/2^2 = 1/4).
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

tipo: mc
opciones_explicitas: ["Atracción", "Repulsión", "No hay interacción", "Atracción débil"]

enunciado: "Si intentas acercar dos imanes de modo que el polo norte de uno esté frente al polo norte del otro, la fuerza resultante será de:"

respuesta: "Repulsión"

explicacion: |
  Los polos iguales (Norte-Norte o Sur-Sur) se repelen entre sí. Esta es la base de la interacción magnética.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo"]

tipo: vf

enunciado: "Si un imán se acerca a otro y experimenta una fuerza de atracción, se puede afirmar que los polos enfrentados son de distinta naturaleza (uno es Norte y el otro Sur)."

respuesta: verdadero

explicacion: |
  La atracción magnética ocurre exclusivamente entre polos opuestos (Norte con Sur).
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "intermedio"
  tags: ["magnetismo", "monopolos"]

tipo: completar
respuestas_validas:
  - "monopolo"
  - "un solo polo"
  - "polo único"

enunciado: "Si cortas un imán por la mitad para intentar separar su polo norte del polo sur, obtendrás dos imanes nuevos, cada uno con su propio polo norte y sur; en ningún caso lograrás aislar un imán de un solo polo, es decir, un ___."

respuesta: "monopolo"

explicacion: |
  En la naturaleza no existen los monopolos magnéticos; al dividir un imán, se crean dos nuevos dipolos con sus propios polos norte y sur.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "campo_magnetico"]

tipo: mc
opciones_explicitas: ["Norte magnético", "Sur magnético", "Polo de atracción", "Polo de repulsión"]

enunciado: "Un imán suspendido libremente por un hilo tiende a alinearse con el campo magnético terrestre. El extremo que apunta hacia el polo norte geográfico de la Tierra es el:"

respuesta: "Norte magnético"

explicacion: |
  El polo norte magnético de la Tierra es, por definición, el punto donde el polo sur magnético terrestre atrae al polo norte de una brújula.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "orden"]

tipo: ordenar
opciones_explicitas: ["Norte-Norte (Repulsión)", "Norte-Sur (Atracción)", "Sur-Sur (Repulsión)"]

enunciado: "Ordena las siguientes interacciones magnéticas de la que presenta mayor fuerza de atracción a la que presenta mayor fuerza de repulsión (considerando imanes de igual intensidad):"

respuesta_orden: ["Norte-Sur (Atracción)", "Norte-Norte (Repulsión)", "Sur-Sur (Repulsión)"]

explicacion: |
  La atracción ocurre entre polos opuestos. La repulsión ocurre entre polos iguales. En términos de magnitud, la interacción es simétrica para polos iguales.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "electricidad"]

respuesta: "repulsión"
tipo: completar
respuestas_validas:
  - "repulsión"
  - "atracción"

enunciado: "Mientras que las cargas eléctricas de igual signo se repelen, los polos magnéticos del mismo nombre (ej. Norte y Norte) también experimentan una ___."

explicacion: |
  Tanto en la electrostática como en el magnetismo, la interacción entre entidades de la misma naturaleza (cargas iguales o polos iguales) es siempre de repulsión.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

respuesta: falso
tipo: vf
enunciado: "Si un objeto tiene una carga eléctrica neta, se puede separar en un polo positivo y un polo negativo de forma independiente. ¿Es esto también una propiedad de los imanes magnéticos?"

explicacion: |
  Falso. Los imanes son dipolos; si cortas un imán por la mitad, obtendrás dos imanes más pequeños, cada uno con su propio polo norte y sur. No existen los "monopolos magnéticos" en la naturaleza.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo"]

variables:
  escenario: uno_de([["Norte", "Sur", "atracción"], ["Sur", "Norte", "atracción"], ["Norte", "Norte", "repulsión"], ["Sur", "Sur", "repulsión"]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Considerando el escenario donde se aproximan un polo {escenario[0]} y un polo {escenario[1]}, la fuerza resultante es de ___."

explicacion: |
  Los polos opuestos (Norte-Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

respuesta: "Polo Eléctrico Positivo"
tipo: mc

opciones_explicitas: ["Norte Magnético", "Sur Magnético", "Polo Eléctrico Positivo"]

enunciado: "¿Cuál de los siguientes términos NO corresponde a un concepto del magnetismo?"

explicacion: |
  La brújula es un imán que se alinea con el campo magnético terrestre. El polo norte de la aguja apunta al polo sur magnético de la Tierra (que está cerca del polo norte geográfico). Los conceptos de "positivo" y "negativo" pertenecen a la electricidad, no al magnetismo.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

variables:
  tipo_interaccion: uno_de([["iguales", "repulsión"], ["opuestos", "atracción"]])

respuesta: tipo_interaccion[1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "En un sistema de dos imanes, si los polos presentados son {tipo_interaccion[0]}, la interacción resultante es de ___."

explicacion: |
  La regla fundamental es: polos iguales se repelen, polos opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  datos: [["Norte-Sur", "atracción"], ["Norte-Norte", "repulsión"], ["Sur-Sur", "repulsión"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Si acercamos dos polos de un imán que son {datos[idx][0]}, la fuerza resultante entre ellos será de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

variables:
  situacion: uno_de([["un polo norte cerca de la aguja norte", "repulsión"], ["un polo sur cerca de la aguja norte", "atracción"]])

respuesta: verdadero
tipo: vf
enunciado: "Si colocamos un polo norte de un imán frente al polo norte de una aguja de brújula, la aguja experimentará una fuerza de repulsión. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. Polos iguales se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  par_polos: uno_de([["Norte y Sur", "atracción"], ["Norte y Norte", "repulsión"], ["Sur y Sur", "repulsión"]])

respuesta: par_polos[1]
tipo: completar
opciones_explicitas: ["atracción", "repulsión"]
respuestas_validas:
  - "atracción"
  - "repulsión"

enunciado: "En un experimento de laboratorio, se observa que un par de polos {par_polos[0]} genera una fuerza de ___."

explicacion: |
  La regla fundamental del magnetismo establece que polos opuestos se atraen y polos iguales se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "intermedio"
  tags: ["magnetismo", "secuencia"]

respuesta_orden: ["Polos iguales", "Repulsión", "Polos opuestos", "Atracción"]
tipo: ordenar
opciones_explicitas: ["Repulsión", "Polos opuestos", "Polos iguales", "Atracción"]

enunciado: "Ordena la lógica de interacción magnética de la siguiente manera: primero la relación de polos iguales y su efecto, y luego la de polos opuestos y su efecto."

explicacion: |
  La secuencia correcta describe la naturaleza de las fuerzas magnéticas: iguales se repelen, opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "vida_diaria"]

variables:
  caso: ["el imán tiene polo sur y la puerta polo norte", "atracción"]

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Un imán de puerta se pega fuertemente porque {caso[0]}. Esto se debe a una fuerza de ___."

explicacion: |
  Para que un imán se pegue (atraiga), los polos deben ser de distinta naturaleza.
```

## Sección: ley-de-coulomb (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿Qué establece la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"
  - "Toda carga eléctrica genera la misma fuerza sin importar su magnitud"
  - "La fuerza eléctrica es siempre atractiva, nunca repulsiva"
respuesta: "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"

explicacion: |
  F = k × q₁ × q₂ / r², la misma forma matemática que la gravitación,
  aplicada a cargas en vez de masas.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "completar"]

tipo: completar
enunciado: "Completá: F = k × q₁ × q₂ / r², donde k se llama la constante de ___."
respuestas_validas:
  - "Coulomb"

explicacion: |
  k ≈ 9×10⁹ N·m²/C² (valor redondeado habitual).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Dos cargas con el mismo signo (ambas positivas, o ambas negativas), ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se repelen"
  - "Se atraen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se repelen"

explicacion: |
  Mismo signo → repulsión, ya visto en `../cargas-electricas/`.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Una carga positiva y una carga negativa, ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se atraen"
  - "Se repelen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se atraen"

explicacion: |
  Signos opuestos → atracción.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la fuerza gravitatoria (siempre atractiva), la fuerza eléctrica puede ser atractiva o repulsiva."

explicacion: |
  No existe "masa negativa" para la gravitación, pero sí existen
  cargas negativas para la electricidad.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb (F=kq₁q₂/r²) tiene exactamente la misma forma matemática que la ley de gravitación de Newton (F=Gm₁m₂/r²)."

explicacion: |
  Mismo patrón (proporcional al producto, inversamente proporcional al
  cuadrado de la distancia), aplicado a cargas en vez de masas.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: redondear(1 / (2 ^ 2), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la distancia entre dos cargas se duplica (sin cambiar las cargas), ¿a qué fracción de la fuerza original queda reducida la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = 1 / 2² = {redondear(1 / (2 ^ 2), 4)}"

explicacion: |
  Es la misma ley de cuadrado inverso que la gravitación.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "problema"]

respuesta: 3
tipo: input

enunciado: "Si una de las dos cargas se triplica (la otra carga y la distancia no cambian), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F es directamente proporcional a cada carga: triplicarla triplica F."

explicacion: |
  Cada carga entra de forma lineal en la fórmula, igual que cada masa
  en la gravitación.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: random(1, 10)
  q2: random(1, 10)
  r: uno_de([0.5, 1, 2])

respuesta: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)
tipo: input
tolerancia_abs: 0.05
unidad: "N"

enunciado: "Dos cargas de {q1} µC y {q2} µC están separadas por {r} m (k=9×10⁹ N·m²/C²). ¿Cuál es la magnitud de la fuerza eléctrica entre ellas?"

pasos:
  - "En Coulomb: q₁={q1}×10⁻⁶ C, q₂={q2}×10⁻⁶ C"
  - "F = k × q₁ × q₂ / r² = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {r}² = {redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)} N"

explicacion: |
  1 microcoulomb (µC) = 10⁻⁶ C — las cargas cotidianas de electricidad
  estática se miden en esta escala, no en Coulombs enteros.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿En qué unidad se mide la carga eléctrica en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Coulomb (C)"
  - "Newton (N)"
  - "Amperio (A)"
respuesta: "Coulomb (C)"

explicacion: |
  Las cargas cotidianas suelen expresarse en microcoulombs (µC =
  10⁻⁶ C) porque un Coulomb entero es una cantidad de carga enorme.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

enunciado: "¿Cuál es el valor aproximado (redondeado) de la constante de Coulomb k?"
tipo: mc
opciones_explicitas:
  - "9×10⁹ N·m²/C²"
  - "6,674×10⁻¹¹ N·m²/kg²"
  - "9,8 N/kg"
respuesta: "9×10⁹ N·m²/C²"

explicacion: |
  No confundir con G (gravitación, mucho más chico) ni con g
  (aceleración de la gravedad en la Tierra).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto la fuerza gravitatoria como la fuerza eléctrica disminuyen con el cuadrado de la distancia (ley de cuadrado inverso)."

explicacion: |
  Es el mismo patrón matemático (proporcional a 1/r²) en los dos casos.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para cargas y masas de tamaño cotidiano, la fuerza eléctrica es muchísimo más intensa que la fuerza gravitatoria entre los mismos objetos."

explicacion: |
  G (≈10⁻¹¹) es un número muchísimo más chico que k (≈10⁹) — por eso
  hacen falta masas planetarias para notar la gravedad, pero cargas
  chicas ya generan fuerzas eléctricas notables.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: 4
tipo: input

enunciado: "Si AMBAS cargas se duplican a la vez (la distancia no cambia), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = (2×q₁ × 2×q₂) / (q₁×q₂) = 4"

explicacion: |
  Cada duplicación multiplica por 2, y son dos duplicaciones
  independientes: 2×2=4.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

enunciado: "Si el producto q₁×q₂ es positivo (ambas cargas positivas, o ambas negativas), ¿qué tipo de fuerza es?"
tipo: mc
opciones_explicitas:
  - "Repulsiva"
  - "Atractiva"
  - "Nula"
respuesta: "Repulsiva"

explicacion: |
  El signo del producto de las cargas indica directamente si la fuerza
  es de repulsión (producto positivo) o atracción (producto negativo).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza eléctrica entre dos cargas dadas en microcoulombs."
tipo: ordenar
opciones_explicitas:
  - "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"
  - "Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)"
  - "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹"
respuesta_orden: ["Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)", "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹", "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"]
explicacion: |
  El cálculo numérico y la dirección (atrae/repele) se resuelven por
  separado.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "aplicacion"]

enunciado: "¿Por qué un globo frotado contra el pelo se queda pegado a la pared?"
tipo: mc
opciones_explicitas:
  - "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"
  - "El globo se vuelve magnético"
  - "Es un efecto de la gravedad, no de electricidad"
respuesta: "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"

explicacion: |
  Es electricidad estática: la fuerza de Coulomb entre las cargas del
  globo y las cargas inducidas en la pared.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza que la carga 1 ejerce sobre la carga 2 tiene la misma magnitud que la que la carga 2 ejerce sobre la carga 1 (acción y reacción)."

explicacion: |
  Es un caso más de la tercera ley de Newton, ya vista en
  `../leyes-de-newton/tercera-accion-reaccion/`.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "¿Qué representa r en la fórmula F=k×q₁×q₂/r²?"
tipo: mc
opciones_explicitas:
  - "La distancia entre las dos cargas"
  - "El radio de una de las dos cargas"
  - "El tiempo que dura la interacción"
respuesta: "La distancia entre las dos cargas"

explicacion: |
  Las cargas se tratan como puntuales (sin tamaño), así que r es
  simplemente la distancia entre sus posiciones.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

respuesta: falso
tipo: vf

enunciado: "El valor de F = k×q₁×q₂/r² (sin considerar el signo de las cargas) alcanza por sí solo para saber si la fuerza es atractiva o repulsiva."

explicacion: |
  Hace falta mirar el signo del producto q₁×q₂ (o directamente el
  signo de cada carga) para saber la dirección — la magnitud sola no
  lo dice.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: uno_de([2, 4, 5])
  q2: uno_de([2, 4, 5])
  r: uno_de([0.5, 1, 2])
  F: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 4)

respuesta: r
tipo: input
tolerancia_abs: 0.01
unidad: "m"

enunciado: "Dos cargas de {q1} µC y {q2} µC (k=9×10⁹ N·m²/C²) ejercen entre sí una fuerza de {F} N. ¿A qué distancia están? (usá la misma fórmula despejando r)"

pasos:
  - "r² = k × q₁ × q₂ / F = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {F}"
  - "r = {r} m"

explicacion: |
  Es el mismo despeje que ya se practicó con otras fórmulas de
  `../formulas-con-literales/`, aplicado ahora a la ley de Coulomb.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb es el punto de partida para entender fuerzas y campos eléctricos más complejos, con más de dos cargas."

explicacion: |
  Con más cargas se suman (vectorialmente) las fuerzas de Coulomb de
  cada par, pero la ley de base sigue siendo la misma.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

enunciado: "¿Cuál de estas afirmaciones distingue correctamente k (Coulomb) de G (gravitación)?"
tipo: mc
opciones_explicitas:
  - "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"
  - "k y G son el mismo número, sólo cambia el nombre"
  - "k se usa para masas y G para cargas"
respuesta: "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"

explicacion: |
  Esa diferencia de magnitud entre k y G es la razón de fondo por la
  que la fuerza eléctrica domina sobre la gravitatoria a escala
  cotidiana.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"
  - "Sólo sirve para calcular fuerzas gravitatorias"
  - "Sólo aplica a cargas del mismo signo"
respuesta: "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"

explicacion: |
  Es la versión eléctrica del mismo patrón matemático que la
  gravitación universal, aplicado a un fenómeno que además puede
  repeler, no sólo atraer.
```

## Sección: leyes-de-newton/primera-inercia (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué dice la primera ley de Newton (ley de inercia)?"
tipo: mc
opciones_explicitas:
  - "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"
  - "Todo objeto se detiene solo con el tiempo, sin necesitar ninguna fuerza"
  - "La fuerza siempre es igual a la masa por la velocidad"
respuesta: "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"

explicacion: |
  Los objetos no cambian su estado de movimiento por sí solos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["fuerza_neta", "vocabulario"]

enunciado: "¿Qué es la fuerza neta sobre un objeto?"
tipo: mc
opciones_explicitas:
  - "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"
  - "La fuerza más grande de todas las que actúan sobre él"
  - "El promedio de todas las fuerzas que actúan sobre él"
respuesta: "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"

explicacion: |
  Se calcula sumando vectores, como en
  `../../../matematica/suma-de-vectores-y-descomposicion/`.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos fuerzas iguales en magnitud actúan sobre un objeto desde direcciones exactamente opuestas, la fuerza neta es cero."

explicacion: |
  Se cancelan entre sí como vectores, aunque ninguna de las dos sea cero
  por separado.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "Según la primera ley de Newton, ¿qué situaciones cuentan como 'equilibrio'?"
tipo: mc
opciones_explicitas:
  - "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"
  - "Únicamente estar completamente en reposo"
  - "Únicamente estar acelerando de forma constante"
respuesta: "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"

explicacion: |
  Lo que importa es que la velocidad no cambie, no que sea cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto que se mueve en línea recta a velocidad constante también está en equilibrio, según la primera ley de Newton."

explicacion: |
  Su velocidad no cambia, así que la fuerza neta sobre él es cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: falso
tipo: vf

enunciado: "Según la primera ley de Newton, un objeto en equilibrio siempre está completamente detenido."

explicacion: |
  También puede estar en movimiento, siempre que sea a velocidad
  constante.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(20, 50)
  f2: random(5, 19)

respuesta: f1 - f2
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan dos fuerzas horizontales: {f1} N hacia la derecha, y {f2} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva si es hacia la derecha)?"

pasos:
  - "{f1} − {f2} = {f1 - f2} N hacia la derecha"

explicacion: |
  Se restan porque apuntan en direcciones opuestas sobre el mismo eje.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["equilibrio", "problema"]

variables:
  f1: random(10, 30)
  f2: random(10, 30)

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f1 + f2} N hacia la izquierda. ¿Está el objeto en equilibrio?"

explicacion: |
  {f1} + {f2} = {f1 + f2} N hacia la derecha, que se cancela
  exactamente con los {f1 + f2} N hacia la izquierda: fuerza neta cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "Cuando un auto frena bruscamente, ¿por qué el cuerpo de los pasajeros 'sigue de largo' hacia adelante?"
tipo: mc
opciones_explicitas:
  - "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"
  - "Porque una fuerza invisible empuja al cuerpo hacia adelante"
  - "Porque el aire dentro del auto empuja a los pasajeros"
respuesta: "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"

explicacion: |
  No hay ninguna fuerza nueva empujando hacia adelante: es el cuerpo
  resistiéndose a cambiar su estado de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué cuesta más esfuerzo empezar a mover un mueble pesado desde el reposo que mantenerlo deslizándose una vez que ya está en movimiento?"
tipo: mc
opciones_explicitas:
  - "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"
  - "Porque el mueble pierde peso una vez que empieza a moverse"
  - "En realidad cuesta exactamente el mismo esfuerzo en ambos casos"
respuesta: "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"

explicacion: |
  Arrancar exige vencer la inercia del reposo; mantenerlo en velocidad
  constante no exige cambiar nada.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué es la inercia de un objeto?"
tipo: mc
opciones_explicitas:
  - "Su resistencia a cambiar su estado de movimiento"
  - "La fuerza que lo empuja hacia adelante"
  - "Su velocidad máxima posible"
respuesta: "Su resistencia a cambiar su estado de movimiento"

explicacion: |
  Cuanta más inercia, más cuesta arrancarlo, frenarlo o desviarlo.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la masa de un objeto, mayor es su inercia."

explicacion: |
  La masa es, literalmente, la medida de la inercia.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "problema"]

variables:
  masa1: uno_de([5, 10])
  masa2: masa1 * 100

respuesta: verdadero
tipo: vf

enunciado: "Un camión de {masa2} kg y una bicicleta de {masa1} kg. ¿Tiene el camión más inercia que la bicicleta?"

explicacion: |
  Con una masa mucho mayor, hace falta mucha más fuerza neta para
  cambiar el estado de movimiento del camión.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide la masa de un objeto?"
tipo: mc
opciones_explicitas:
  - "La cantidad de materia que lo compone"
  - "La fuerza con la que la gravedad lo atrae"
  - "Su velocidad máxima"
respuesta: "La cantidad de materia que lo compone"

explicacion: |
  El peso, en cambio, es la fuerza gravitatoria sobre esa masa.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide el peso de un objeto?"
tipo: mc
opciones_explicitas:
  - "La fuerza con la que la gravedad lo atrae"
  - "La cantidad de materia que lo compone"
  - "Su resistencia al rozamiento"
respuesta: "La fuerza con la que la gravedad lo atrae"

explicacion: |
  Se mide en Newton, a diferencia de la masa que se mide en kilogramos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "La masa de un objeto es la misma sin importar en qué lugar del universo se encuentre."

explicacion: |
  A diferencia del peso, la masa no depende de la gravedad local.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "El peso de un objeto sí cambia según el lugar, porque depende de la gravedad local."

explicacion: |
  El mismo objeto pesa distinto en la Tierra que en la Luna.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "Un astronauta pesa menos en la Luna que en la Tierra, aunque su masa sea exactamente la misma en los dos lugares."

explicacion: |
  La Luna tiene menos gravedad, así que atrae con menos fuerza a la
  misma cantidad de materia.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la masa?"
tipo: mc
opciones_explicitas:
  - "Kilogramos (kg)"
  - "Newton (N)"
  - "Metros por segundo (m/s)"
respuesta: "Kilogramos (kg)"

explicacion: |
  El peso (una fuerza) se mide en Newton.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la fuerza (y por lo tanto el peso)?"
tipo: mc
opciones_explicitas:
  - "Newton (N)"
  - "Kilogramos (kg)"
  - "Joules (J)"
respuesta: "Newton (N)"

explicacion: |
  La masa (una cantidad de materia) se mide en kilogramos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "ordenar"]

enunciado: "Ordená los pasos para determinar si un objeto está en equilibrio, conociendo todas las fuerzas que actúan sobre él."
tipo: ordenar
opciones_explicitas:
  - "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"
  - "Sumar vectorialmente todas las fuerzas que actúan sobre el objeto"
  - "Verificar si esa suma (la fuerza neta) da cero"
respuesta_orden: ["Sumar vectorialmente todas las fuerzas que actúan sobre el objeto", "Verificar si esa suma (la fuerza neta) da cero", "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"]
explicacion: |
  El equilibrio se define completamente por el resultado de la fuerza
  neta.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(10, 20)
  f2: random(10, 20)
  f3: random(5, 15)

respuesta: (f1 + f2) - f3
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f3} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva hacia la derecha)?"

pasos:
  - "({f1} + {f2}) − {f3} = {(f1 + f2) - f3} N hacia la derecha"

explicacion: |
  Se suman las fuerzas en un sentido y se restan las del sentido
  contrario.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto en reposo es cero, ese objeto permanece en reposo indefinidamente, sin límite de tiempo."

explicacion: |
  No hace falta ninguna fuerza para "mantenerlo quieto": la ausencia de
  fuerza neta ya es suficiente.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué el cinturón de seguridad es necesario, en términos de la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"
  - "Porque el cinturón hace que el auto pese menos"
  - "No tiene relación real con la inercia"
respuesta: "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"

explicacion: |
  El cinturón aplica la fuerza neta necesaria para frenar también al
  cuerpo, junto con el auto.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"
  - "Sólo sirve para calcular pesos en distintos planetas"
  - "Sólo aplica a objetos que ya están en movimiento"
respuesta: "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"

explicacion: |
  Es la base conceptual sobre la que se construyen la segunda y tercera
  ley.
```

## Sección: maquinas-simples (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "vocabulario"]

enunciado: "¿Qué mide la ventaja mecánica de una máquina simple?"
tipo: mc
opciones_explicitas:
  - "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"
  - "La velocidad máxima que puede alcanzar la máquina"
  - "La cantidad de energía que la máquina crea"
respuesta: "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"

explicacion: |
  VM = carga / esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: VM = carga / ___."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  El esfuerzo es la fuerza que aplica la persona (o el motor); la
  carga es la fuerza que hay que vencer.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ventaja mecánica de una máquina es mayor a 1, se necesita menos esfuerzo que la carga que se está moviendo."

explicacion: |
  VM = carga/esfuerzo > 1 implica carga > esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "Una máquina simple ideal (sin rozamiento) puede reducir el esfuerzo necesario SIN que aumente la distancia recorrida al aplicar ese esfuerzo."

explicacion: |
  Es falso: por conservación del trabajo, si baja la fuerza necesaria,
  sube proporcionalmente la distancia — el trabajo total no cambia.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "problema"]

variables:
  carga: random(100, 500)
  esfuerzo: random(20, 80)

respuesta: redondear(carga / esfuerzo, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una máquina simple permite mover una carga de {carga} N aplicando un esfuerzo de sólo {esfuerzo} N. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = carga / esfuerzo = {carga} / {esfuerzo} = {redondear(carga / esfuerzo, 2)}"

explicacion: |
  Sin unidad propia — es un cociente entre dos fuerzas, un número puro.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de PRIMERA clase (como una balanza o unas tijeras)?"
tipo: mc
opciones_explicitas:
  - "El punto de apoyo (pivote) está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo"
  - "El esfuerzo está entre el pivote y la carga"
respuesta: "El punto de apoyo (pivote) está entre el esfuerzo y la carga"

explicacion: |
  Su VM puede ser mayor o menor a 1, según qué brazo sea más largo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de SEGUNDA clase (como una carretilla)?"
tipo: mc
opciones_explicitas:
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
respuesta: "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"

explicacion: |
  El brazo del esfuerzo siempre es más largo que el de la carga en
  este arreglo, así que la VM siempre es mayor a 1.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de TERCERA clase (como unas pinzas o una caña de pescar)?"
tipo: mc
opciones_explicitas:
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
respuesta: "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"

explicacion: |
  Se sacrifica fuerza a cambio de más velocidad o distancia en el
  extremo donde está la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)

respuesta: redondear(d_esfuerzo / d_carga, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En una palanca, el brazo del esfuerzo mide {d_esfuerzo} m y el brazo de la carga mide {d_carga} m. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = d_esfuerzo / d_carga = {d_esfuerzo} / {d_carga} = {redondear(d_esfuerzo / d_carga, 2)}"

explicacion: |
  Sale directo de la condición de equilibrio de momentos, sin
  necesidad de conocer las fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)
  carga: random(50, 300)

respuesta: redondear(carga * d_carga / d_esfuerzo, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "En una palanca con brazo de esfuerzo {d_esfuerzo} m y brazo de carga {d_carga} m, se quiere mover una carga de {carga} N. ¿Qué esfuerzo hace falta aplicar?"

pasos:
  - "F_esfuerzo × d_esfuerzo = F_carga × d_carga"
  - "F_esfuerzo = {carga} × {d_carga} / {d_esfuerzo} = {redondear(carga * d_carga / d_esfuerzo, 2)} N"

explicacion: |
  Es la misma condición de equilibrio de `../estatica/equilibrio-de-cuerpo-rigido/`,
  despejando el esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación de equilibrio de una palanca, F_esfuerzo×d_esfuerzo = F_carga×d_carga, es exactamente la condición ΣM=0 ya vista en equilibrio de cuerpo rígido, tomando el pivote como punto de referencia."

explicacion: |
  Los dos momentos (esfuerzo y carga, respecto del pivote) tienen que
  cancelarse para que la palanca esté en equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea FIJA (la que sólo cambia la dirección de la cuerda, sin moverse junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"
  - "VM = 2"
  - "VM = 0"
respuesta: "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"

explicacion: |
  Es útil (por ejemplo, para tirar hacia abajo en vez de levantar hacia
  arriba), pero no reduce la fuerza necesaria.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea MÓVIL (la que se mueve junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 2"
  - "VM = 1"
  - "VM = 0,5"
respuesta: "VM = 2"

explicacion: |
  Dos tramos de cuerda sostienen la carga, así que el esfuerzo
  necesario se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "polea", "problema"]

variables:
  tramos: uno_de([2, 3, 4, 5])
  carga: random(100, 400)

respuesta: redondear(carga / tramos, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "Un sistema de poleas sostiene una carga de {carga} N con {tramos} tramos de cuerda que la sujetan directamente. ¿Qué esfuerzo hace falta aplicar (ideal, sin rozamiento)?"

pasos:
  - "VM ideal = {tramos} (un tramo de cuerda por cada esfuerzo que se reparte la carga)"
  - "esfuerzo = carga / VM = {carga} / {tramos} = {redondear(carga / tramos, 2)} N"

explicacion: |
  La VM ideal de un sistema de poleas es igual a la cantidad de tramos
  de cuerda que sostienen la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "VM = longitud del plano / altura que se sube"
  - "VM = altura / longitud del plano"
  - "VM = ángulo de inclinación en grados"
respuesta: "VM = longitud del plano / altura que se sube"

explicacion: |
  Un plano más largo (para la misma altura) reduce la fuerza necesaria
  para subir la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "plano_inclinado", "problema"]

variables:
  altura: random(1, 3)
  longitud: random(4, 10)

respuesta: redondear(longitud / altura, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una rampa de {longitud} m de longitud se usa para subir una carga a {altura} m de altura. ¿Cuál es su ventaja mecánica ideal?"

pasos:
  - "VM = longitud / altura = {longitud} / {altura} = {redondear(longitud / altura, 2)}"

explicacion: |
  A mayor longitud para la misma altura, menor la pendiente y menor la
  fuerza necesaria (aunque haya que recorrer más distancia).
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Para subir una carga a la misma altura, una rampa más larga necesita menos fuerza que una rampa más corta."

explicacion: |
  Mayor longitud (para la misma altura) implica mayor VM, y por lo
  tanto menos esfuerzo necesario.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de una rueda y eje (por ejemplo, un volante de dirección)?"
tipo: mc
opciones_explicitas:
  - "VM = radio de la rueda / radio del eje"
  - "VM = radio del eje / radio de la rueda"
  - "VM = radio de la rueda + radio del eje"
respuesta: "VM = radio de la rueda / radio del eje"

explicacion: |
  Cuanto más grande la rueda respecto del eje, menos fuerza hace falta
  aplicar en el borde de la rueda.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "problema"]

variables:
  R: random(10, 30)
  r: random(1, 5)

respuesta: redondear(R / r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un volante de dirección tiene un radio de {R} cm, y el eje que gira tiene un radio de {r} cm. ¿Cuál es la ventaja mecánica ideal de este sistema?"

pasos:
  - "VM = R / r = {R} / {r} = {redondear(R / r, 2)}"

explicacion: |
  Es la misma idea que la palanca, con el pivote en el centro del eje.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Las máquinas simples permiten hacer el mismo trabajo con menos fuerza, pero a costa de recorrer más distancia aplicando esa fuerza."

explicacion: |
  Es la consecuencia de que el trabajo (F×d) se conserva en el caso
  ideal sin rozamiento.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

enunciado: "¿Por qué se dice que las máquinas simples no 'ahorran' trabajo, sólo lo redistribuyen entre fuerza y distancia?"
tipo: mc
opciones_explicitas:
  - "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"
  - "Porque en realidad sí ahorran trabajo, generan energía extra"
  - "Porque el trabajo no depende de la fuerza aplicada"
respuesta: "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"

explicacion: |
  Es la misma conservación de trabajo ya vista en
  `../trabajo-de-una-fuerza/`.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "ordenar"]

enunciado: "Ordená los pasos para identificar y calcular la ventaja mecánica de una palanca dada."
tipo: ordenar
opciones_explicitas:
  - "Calcular VM = d_esfuerzo / d_carga"
  - "Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga"
  - "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga"
respuesta_orden: ["Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga", "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga", "Calcular VM = d_esfuerzo / d_carga"]
explicacion: |
  Sin identificar primero los tres elementos (pivote, esfuerzo, carga)
  no hay brazos que medir.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "aplicacion"]

enunciado: "¿Por qué un destornillador con mango más ancho permite aflojar un tornillo con menos esfuerzo?"
tipo: mc
opciones_explicitas:
  - "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"
  - "Porque los mangos anchos pesan menos"
  - "No hay relación real, es sólo cómodo para la mano"
respuesta: "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"

explicacion: |
  Un carpintero o mecánico usa esta ventaja mecánica todos los días,
  sin necesariamente nombrarla así.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: en una máquina simple, la fuerza que aplica la persona (o el motor) se llama ___; la fuerza que hay que superar se llama carga (o resistencia)."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  Esfuerzo y carga son los dos términos que compara la ventaja
  mecánica.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "La ventaja mecánica real de una máquina simple (medida en la práctica) siempre es exactamente igual a la ventaja mecánica ideal (calculada sólo con la geometría), sin importar el rozamiento."

explicacion: |
  El rozamiento (`../plano-inclinado-y-rozamiento/`) siempre consume
  parte del esfuerzo, así que la VM real queda por debajo de la ideal.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender las máquinas simples y la ventaja mecánica?"
tipo: mc
opciones_explicitas:
  - "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"
  - "Sólo sirve para máquinas eléctricas"
  - "Sólo aplica a objetos sin peso"
respuesta: "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"

explicacion: |
  Es el puente real entre toda la Física de fuerzas y momentos ya
  vista, y las herramientas que un carpintero o mecánico usa todos los
  días.
```

## Sección: leyes-de-newton/segunda-fma (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Qué dice la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"
  - "Todo objeto acelera siempre a la misma velocidad, sin importar la fuerza"
  - "La masa de un objeto cambia según la fuerza que se le aplica"
respuesta: "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"

explicacion: |
  Es la relación F = m × a.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([2, 4, 5, 10])
  a_real: uno_de([2, 3, 4, 5])

respuesta: a_real
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza neta de {m * a_real} N actúa sobre un objeto de {m} kg. ¿Cuál es su aceleración?"

pasos:
  - "{m * a_real} ÷ {m} = {a_real} m/s²"

explicacion: |
  a = F / m.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([3, 6, 8, 12])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué fuerza neta hace falta para darle una aceleración de {a} m/s² a un objeto de {m} kg?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  F = m × a.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual masa, aplicar más fuerza neta produce más aceleración."

explicacion: |
  Es la relación directamente proporcional entre fuerza y aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual fuerza neta aplicada, un objeto con más masa acelera menos que uno con menos masa."

explicacion: |
  Es la relación inversamente proporcional entre masa y aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  fuerza: uno_de([20, 40, 60])
  masa1: uno_de([2, 4])
  masa2: masa1 * 2

respuesta: verdadero
tipo: vf

enunciado: "La misma fuerza de {fuerza} N se aplica a dos objetos: uno de {masa1} kg y otro de {masa2} kg. ¿Acelera más el de {masa1} kg?"

explicacion: |
  Con menos masa, la misma fuerza produce más aceleración: {fuerza}/{masa1}
  es mayor que {fuerza}/{masa2}.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["newton_unidad", "completar"]

tipo: completar
enunciado: "Completá: 1 Newton es la fuerza necesaria para darle una aceleración de 1 m/s² a una masa de 1 ___."
respuestas_validas:
  - "kg"
  - "kilogramo"

explicacion: |
  1 N = 1 kg × 1 m/s².
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["newton_unidad", "vocabulario"]

enunciado: "¿Cuál es la unidad de fuerza en el sistema internacional?"
tipo: mc
opciones_explicitas:
  - "El Newton (N)"
  - "El kilogramo (kg)"
  - "El Joule (J)"
respuesta: "El Newton (N)"

explicacion: |
  Se define directamente a partir de la segunda ley de Newton.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "vocabulario"]

enunciado: "¿Qué es el peso de un objeto, en términos de la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"
  - "Lo mismo que la masa, sólo que en otra unidad"
  - "Una fuerza que no tiene relación con la segunda ley"
respuesta: "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"

explicacion: |
  Peso = m × g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m: uno_de([3, 5, 7, 8, 10, 12])

respuesta: m * 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de {m} kg en la superficie terrestre? (usá g = 10 m/s²)"

pasos:
  - "{m} × 10 = {m * 10} N"

explicacion: |
  Peso = masa × g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m_real: uno_de([4, 6, 9, 15])

respuesta: m_real
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pesa {m_real * 10} N en la Tierra (g = 10 m/s²). ¿Cuál es su masa?"

pasos:
  - "{m_real * 10} ÷ 10 = {m_real} kg"

explicacion: |
  Se despeja la masa: masa = peso / g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Según F = m·a, si la fuerza neta sobre un objeto es cero, su aceleración también es cero."

explicacion: |
  Es la conexión directa con la primera ley: sin fuerza neta, no hay
  cambio de velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La primera ley de Newton (inercia) es, en el fondo, el caso particular de la segunda ley cuando la fuerza neta es exactamente cero."

explicacion: |
  Con F_neta = 0, la fórmula F=ma da a=0: velocidad constante, la propia
  definición de inercia.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "vocabulario"]

enunciado: "La gravedad en la Luna es aproximadamente 1/6 de la gravedad terrestre. Un objeto de 60 kg, ¿qué le pasa a su PESO en la Luna, comparado con la Tierra?"
tipo: mc
opciones_explicitas:
  - "Se reduce a aproximadamente 1/6 de su peso en la Tierra"
  - "Se mantiene exactamente igual"
  - "Su masa también se reduce a 1/6"
respuesta: "Se reduce a aproximadamente 1/6 de su peso en la Tierra"

explicacion: |
  Peso = m × g: con g mucho menor, el peso baja proporcionalmente. La
  masa (60 kg) no cambia en ningún lugar.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([800, 1000, 1200])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "Un auto de {m} kg frena con una desaceleración de {a} m/s². ¿Cuál es la magnitud de la fuerza neta (de frenado) que actúa sobre él?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  El cálculo es el mismo, aunque la aceleración esté frenando el auto
  en vez de acelerarlo.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "F = m·a describe DOS proporcionalidades a la vez: directa entre fuerza y aceleración, e inversa entre masa y aceleración."

explicacion: |
  Es la forma más completa de leer la segunda ley.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 5, 10])
  a: uno_de([2, 3])

respuesta: a * 2
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la fuerza (manteniendo la misma masa), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a * 2} ÷ {m} = {a * 2} m/s²"

explicacion: |
  Al duplicar la fuerza con la misma masa, la aceleración también se
  duplica (proporcionalidad directa).
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 6, 10])
  a: uno_de([2, 4, 6])

respuesta: a / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la masa (manteniendo la misma fuerza), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a} ÷ {m * 2} = {a / 2} m/s²"

explicacion: |
  Al duplicar la masa con la misma fuerza, la aceleración se reduce a
  la mitad (proporcionalidad inversa).
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "ordenar"]

enunciado: "Ordená los pasos para calcular la aceleración de un objeto, conociendo la fuerza neta y la masa."
tipo: ordenar
opciones_explicitas:
  - "Dividir la fuerza neta por la masa"
  - "Identificar la fuerza neta que actúa sobre el objeto"
  - "Identificar la masa del objeto"
respuesta_orden: ["Identificar la fuerza neta que actúa sobre el objeto", "Identificar la masa del objeto", "Dividir la fuerza neta por la masa"]
explicacion: |
  a = F_neta / m.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "En F = m·a, la masa m es la masa total del objeto que está siendo acelerado."

explicacion: |
  Es un dato fijo del objeto, no algo que varíe según la fuerza
  aplicada.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["peso", "problema"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de 0,5 kg en la Tierra? (usá g = 10 m/s²)"

pasos:
  - "0,5 × 10 = 5 N"

explicacion: |
  Mismo cálculo, con una masa menor a 1 kg.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Para qué sirve, en la práctica, poder calcular la aceleración con F = m·a?"
tipo: mc
opciones_explicitas:
  - "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"
  - "Sólo sirve para calcular la masa de objetos ya conocidos"
  - "No tiene ninguna aplicación práctica real"
respuesta: "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"

explicacion: |
  Es la fórmula central de la dinámica.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "problema"]

variables:
  m: uno_de([20, 40, 60])
  g_marte: 4

respuesta: m * g_marte
tipo: input
tolerancia_abs: 0

enunciado: "La gravedad en Marte es aproximadamente 4 m/s². ¿Cuál sería el peso de un objeto de {m} kg en Marte?"

pasos:
  - "{m} × 4 = {m * g_marte} N"

explicacion: |
  Mismo cálculo que en la Tierra, sólo que con la gravedad de Marte en
  vez de 10 m/s².
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La segunda ley de Newton, F = m·a, sólo tiene sentido para objetos que tienen masa."

explicacion: |
  Es un principio de la mecánica clásica, pensado para objetos con
  masa.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([5, 10])
  f1: uno_de([20, 30])
  f2: f1 * 2

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto de {m} kg actúan, en dos situaciones distintas, fuerzas de {f1} N y de {f2} N. ¿Es la aceleración en la segunda situación el doble que en la primera?"

explicacion: |
  Con la misma masa, duplicar la fuerza duplica la aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"
  - "Sólo sirve para calcular masas en el laboratorio"
  - "Sólo aplica a objetos en reposo"
respuesta: "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"

explicacion: |
  Es la fórmula que cuantifica lo que la primera ley sólo describía en
  palabras.
```

