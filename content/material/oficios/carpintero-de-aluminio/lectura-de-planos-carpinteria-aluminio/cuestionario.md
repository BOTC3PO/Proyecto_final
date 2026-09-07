# Oficios — lectura de planos carpinteria aluminio (cuestionario, 20 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/lectura-de-planos-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "basico"
  tags: ["planos", "abertura", "montantes"]

variables:
  ancho_hueco: random(800, 1200)
  alto_hueco: random(1500, 2000)

respuesta: "montante"
tipo: completar

enunciado: "En un plano de abertura de una ventana de {ancho_hueco}x{alto_hueco} mm, ¿qué término se usa para referirse a las piezas verticales principales que sostienen la estructura?"

explicacion: |
  Las piezas verticales en un plano de abertura se denominan montantes. Las horizontales son trasversales. El plano muestra la distribución de estos perfiles en la vista frontal.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "cálculo", "trasversal"]

variables:
  ancho_exterior: random(1000, 1500)
  espesor_perfil: 50
  holgura: 10
  largo_transversal: ancho_exterior - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_transversal
tipo: input

enunciado: "Si el ancho exterior del hueco es {ancho_exterior} mm, el espesor del perfil es {espesor_perfil} mm y se considera una holgura de {holgura} mm por lado para el ajuste, ¿cuál es la longitud de corte de la trasversal superior del marco fijo?"

explicacion: |
  La trasversal del marco fijo se calcula restando el espesor de los dos montantes laterales al ancho total y sumando las holguras necesarias para el ensamblaje. Fórmula: Ancho - (2 * Espesor) + (2 * Holgura).
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "cálculo", "montante"]

variables:
  alto_exterior: random(1800, 2200)
  espesor_perfil: 60
  holgura: 10
  largo_montante: alto_exterior - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_montante
tipo: input

enunciado: "Para un hueco de {alto_exterior} mm de alto, con perfiles de {espesor_perfil} mm de espesor y {holgura} mm de holgura por lado, ¿cuánto mide el montante lateral del marco fijo?"

explicacion: |
  El montante lateral del marco fijo se calcula restando el espesor de las trasversales superior e inferior al alto total, más las holguras de ensamblaje. Fórmula: Alto - (2 * Espesor) + (2 * Holgura).
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["cotas", "lectura", "precisión"]

variables:
  cota_dibujo: random(50, 100)
  escala: uno_de([1, 2, 5])
  cota_real: cota_dibujo * escala

respuesta: cota_real
tipo: input

enunciado: "Si en un plano a escala 1:{escala}, una línea que representa el espesor de un perfil mide {cota_dibujo} mm en el dibujo, ¿cuál es su medida real en milímetros?"

explicacion: |
  Para obtener la medida real, se multiplica la medida del dibujo por el factor de escala. Si la escala es 1:X, la realidad es X veces mayor que el dibujo.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "hoja", "batiente"]

variables:
  ancho_hueco: random(1000, 1400)
  ancho_marco: 50
  holgura_bisagra: 15
  ancho_hoja: ancho_hueco - (2 * ancho_marco) - (2 * holgura_bisagra)

respuesta: ancho_hoja
tipo: input

enunciado: "Si el hueco mide {ancho_hueco} mm, el marco fijo tiene {ancho_marco} mm de espesor y se deja una holgura de {holgura_bisagra} mm por lado para las bisagras, ¿cuál es el ancho interior de la hoja batiente?"

explicacion: |
  El ancho de la hoja se calcula restando al ancho del hueco el doble del espesor del marco (lados izquierdo y derecho) y el doble de la holgura necesaria para el movimiento de las bisagras.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["despiece", "estructura", "cálculo"]

variables:
  alto_hueco: random(2000, 2500)
  espesor_perfil: 60
  holgura: 10
  largo_montante: alto_hueco - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_montante
tipo: input

enunciado: "En una puerta de {alto_hueco} mm de alto, si el montante intermedio debe tener la misma longitud que los montantes laterales del marco, y el espesor del perfil es {espesor_perfil} mm con {holgura} mm de holgura, ¿cuál es su longitud de corte?"

explicacion: |
  Los montantes verticales (laterales e intermedios) en un marco fijo tienen la misma longitud calculada: Alto del hueco menos dos veces el espesor de las trasversales más holguras.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "puerta", "cálculo"]

variables:
  ancho_hueco: random(900, 1300)
  espesor_perfil: 55
  holgura: 10
  largo_transversal: ancho_hueco - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_transversal
tipo: input

enunciado: "Para una puerta de {ancho_hueco} mm de ancho, con perfiles de {espesor_perfil} mm y {holgura} mm de holgura, ¿cuál es la longitud de la trasversal inferior del marco?"

explicacion: |
  La trasversal inferior del marco se calcula igual que la superior: Ancho del hueco menos dos espesores de montantes más dos holguras.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "hoja", "corrediza"]

variables:
  ancho_hueco: random(1200, 1600)
  ancho_marco: 50
  holgura_rueda: 20
  ancho_hoja: (ancho_hueco - (2 * ancho_marco) - (2 * holgura_rueda)) / 2

respuesta: ancho_hoja
tipo: input

enunciado: "En una puerta corrediza de {ancho_hueco} mm de ancho, con marco de {ancho_marco} mm y holgura de {holgura_rueda} mm por lado para las ruedas, ¿cuál es el ancho de cada hoja (asumiendo 2 hojas iguales)?"

explicacion: |
  Para puertas corredizas de 2 hojas, se calcula el espacio disponible restando marco y holguras, y luego se divide por 2. Fórmula: (Ancho - 2*Marco - 2*Holgura) / 2.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["despiece", "cálculo", "estructura"]

variables:
  alto_hueco: random(2000, 2400)
  espesor_perfil: 60
  holgura: 10
  largo_montante: alto_hueco - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_montante
tipo: input

enunciado: "Si un marco tiene una trasversal intermedia a la altura de la manija, ¿cambia la longitud de los montantes laterales respecto a un marco sin ella? (Asumiendo mismo alto de hueco {alto_hueco} mm, espesor {espesor_perfil} mm y holgura {holgura} mm)."

explicacion: |
  No cambia la longitud de los montantes laterales. La trasversal intermedia es una pieza adicional que se corta por su cuenta (generalmente ancho del hueco menos espesores). Los montantes laterales siguen la misma fórmula de altura.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "marco", "cálculo"]

variables:
  ancho_hueco: random(1000, 1400)
  espesor_perfil: 50
  holgura: 10
  largo_transversal: ancho_hueco - (2 * espesor_perfil) + (2 * holgura)

respuesta: largo_transversal
tipo: input

enunciado: "Para un hueco de {ancho_hueco} mm, con perfiles de {espesor_perfil} mm y {holgura} mm de holgura, ¿cuál es la longitud de la trasversal superior del marco fijo?"

explicacion: |
  La trasversal superior del marco fijo se calcula restando el espesor de los dos montantes laterales al ancho del hueco y sumando las holguras de ensamblaje.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["despiece", "hoja", "batiente"]

variables:
  alto_hueco: random(1800, 2200)
  alto_marco: 60
  holgura_bisagra: 10
  alto_hoja: alto_hueco - (2 * alto_marco) - (2 * holgura_bisagra)

respuesta: alto_hoja
tipo: input

enunciado: "Si el hueco mide {alto_hueco} mm, el marco tiene {alto_marco} mm de espesor y se deja {holgura_bisagra} mm de holgura por arriba y abajo para las bisagras, ¿cuál es el alto de la hoja batiente?"

explicacion: |
  El alto de la hoja se calcula restando al alto del hueco el doble del espesor de las trasversales (superior e inferior) y el doble de la holgura para las bisagras.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["despiece", "cálculo", "estructura"]

variables:
  ancho_hueco: random(1000, 1400)
  espesor_perfil: 50
  largo_transversal: ancho_hueco - (2 * espesor_perfil)

respuesta: largo_transversal
tipo: input

enunciado: "Si se instala una trasversal intermedia en un marco de {ancho_hueco} mm de ancho, con espesor de perfil de {espesor_perfil} mm, ¿cuál es su longitud de corte (sin holguras adicionales, asumiendo empalme exacto)?"

explicacion: |
  La trasversal intermedia (como la de la manija) se corta restando el espesor de los dos montantes laterales al ancho del hueco. No suele tener holguras laterales si empalma con los montantes.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "basico"
  tags: ["planos", "marco", "estructura"]

variables:
  ancho_hueco: random(800, 1200)
  alto_hueco: random(1500, 2000)

respuesta: "marco de obra"
tipo: completar

enunciado: "En el plano de abertura de una ventana de {ancho_hueco}x{alto_hueco} mm, la pieza que se ancla directamente a la pared y no se mueve se denomina:"

explicacion: |
  El marco de obra (o marco fijo) es la estructura principal que se fija al hueco de la pared. Las hojas móviles son las que se abren y cierran.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "basico"
  tags: ["montantes", "trasversales", "orientación"]

variables:
  orientacion: uno_de(["vertical", "horizontal"])

respuesta: "montante"
tipo: completar

enunciado: "Si en el plano de abertura observamos una pieza con orientación {orientacion}, estamos identificando un montante (si es vertical) o una trasversal (si es horizontal). Complete: Las piezas verticales se llaman:"

explicacion: |
  Los montantes son las piezas verticales que soportan la estructura, mientras que las trasversales son las horizontales.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["cálculo", "trasversal", "despiece"]

variables:
  ancho_hueco: random(900, 1100)
  espesor_perfil: 50
  holgura: 10

respuesta: ancho_hueco + " - " + espesor_perfil + " + " + holgura
tipo: input

enunciado: "Si el ancho del hueco es {ancho_hueco} mm, el perfil de trasversal superior se corta restando el espesor del montante ({espesor_perfil} mm) y sumando la holgura ({holgura} mm). Escriba la expresión de cálculo:"

explicacion: |
  La longitud de la trasversal interior se calcula restando los espesores de los montantes laterales y ajustando por holgura.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["cálculo", "montante", "altura"]

variables:
  alto_hueco: random(1400, 1800)
  espesor_perfil: 50
  holgura: 10

respuesta: alto_hueco + " - " + espesor_perfil + " + " + holgura
tipo: input

enunciado: "Para un hueco de alto {alto_hueco} mm, la longitud del montante lateral se calcula con la expresión (restando espesor {espesor_perfil} y sumando holgura {holgura}):"

explicacion: |
  El montante lateral se corta restando el espesor de la trasversal superior e inferior y ajustando por holgura.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "basico"
  tags: ["montante", "trasversal", "identificación"]

variables:
  linea: uno_de(["vertical", "horizontal"])

respuesta: "montante"
tipo: completar

enunciado: "En el plano de abertura, la línea {linea} representa un montante."

explicacion: |
  Los montantes son verticales. Las trasversales son horizontales.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["cálculo", "trasversal", "inferior"]

variables:
  ancho_hueco: random(800, 1000)
  espesor_perfil: 50
  holgura: 10

respuesta: ancho_hueco + " - " + espesor_perfil + " + " + holgura
tipo: input

enunciado: "La trasversal inferior tiene la misma longitud que la superior. Para un hueco de {ancho_hueco} mm, con espesor {espesor_perfil} y holgura {holgura}, la expresión es:"

explicacion: |
  Tanto la trasversal superior como la inferior se calculan restando el espesor de los montantes y sumando holgura.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["montante", "central", "cálculo"]

variables:
  alto_hueco: random(1500, 2000)
  espesor_perfil: 50
  holgura: 10

respuesta: alto_hueco + " - " + espesor_perfil + " + " + holgura
tipo: input

enunciado: "Un montante central (si existe) tiene la misma longitud que los laterales. Para un hueco de {alto_hueco} mm, con espesor {espesor_perfil} y holgura {holgura}, la expresión es:"

explicacion: |
  Los montantes verticales (laterales y centrales) se calculan restando el espesor de las trasversales y sumando holgura.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_lectura_de_planos_carpinteria_aluminio"
  nivel: "basico"
  tags: ["claridad", "identificación", "vital"]

variables:
  elemento: uno_de(["montantes", "trasversales"])

respuesta: "vital"
tipo: completar

enunciado: "La claridad en la identificación de los {elemento} es vital para saber qué perfil se corta en qué medida."

explicacion: |
  Distinguir montantes de trasversales es esencial para el corte correcto.
```
