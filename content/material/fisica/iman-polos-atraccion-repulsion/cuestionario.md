# Fisica — Iman polos atraccion repulsion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Polos de un imán

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

### 2 — Interacción de polos

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

### 3 — Ley de atracción y repulsión

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

### 4 — Identificación de polos

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

### 5 — Comportamiento de polos iguales

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

### 6 — Polos magnéticos y fuerza

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

### 7 — Identificación de polos

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

### 8 — Cálculo de fuerza magnética

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

### 9 — Comportamiento de campos

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

### 10 — Comparación de fuerzas

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

### 11 — ¿Qué sucede al acercar polos iguales?

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

### 12 — Identificación de polos

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

### 13 — El mito del imán de un solo polo

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

### 14 — Experimento de orientación

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

### 15 — Secuencia de interacción

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

### 16 — Polos magnéticos y carga eléctrica

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

### 17 — Diferencia entre imán y carga eléctrica

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

### 18 — Interacción de polos magnéticos

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

### 19 — Comportamiento de la aguja de una brújula

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

### 20 — Comparación de fuerzas de campo

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

### 21 — El juego de imanes

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

### 22 — El experimento de la brújula

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

### 23 — Clasificación de fuerzas

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

### 24 — Secuencia de interacción

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

### 25 — El imán de la puerta

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
