# Economia — elementos de las organizaciones (cuestionario, 28 preguntas VBLang)

> Tema: `economia/elementos-de-las-organizaciones`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["factores", "naturales", "clasificacion"]

variables:
  recurso: uno_de(["tierra", "agua", "minerales", "energía solar"])

respuesta: recurso
tipo: completar

enunciado: "La {recurso} es un ejemplo clásico de recurso natural porque la naturaleza la provee sin intervención humana directa."

explicacion: |
  Los recursos naturales incluyen la tierra, el agua, los minerales y la energía renovable. Se distinguen de los materiales porque no son fabricados por el hombre.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital", "físico", "recursos"]

variables:
  bien: uno_de(["máquinas industriales", "edificios", "herramientas", "inventario"])

respuesta: "capital físico"
tipo: completar

enunciado: "Las {bien} se clasifican como recursos materiales o capital físico, ya que son bienes creados por el hombre para producir otros bienes."

explicacion: |
  El capital físico (o recursos materiales) incluye máquinas, edificios e inventario. A diferencia de los recursos naturales, estos pueden ser acumulados y mejorados mediante inversión.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital humano", "talento"]

variables:
  concepto: "capital humano"

respuesta: concepto
tipo: completar

enunciado: "El {concepto} se refiere a las habilidades, conocimientos, salud y experiencia de las personas, no solo a la cantidad de empleados."

explicacion: |
  El capital humano valora la calidad de la fuerza laboral. Es crucial para adaptar tecnologías y mejorar procesos, diferenciándose de la simple cantidad de trabajadores.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "salarios", "distribución"]

variables:
  factor: "mano de obra"

respuesta: "salarios"
tipo: completar

enunciado: "El ingreso que recibe el factor de producción asociado a la {factor} por su trabajo se denomina salarios."

explicacion: |
  Cada factor de producción recibe un ingreso específico: salarios para el trabajo, rentas para la tierra, intereses para el capital y ganancias para el emprendimiento.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "rentas", "tierra"]

variables:
  factor: "recursos naturales"

respuesta: "rentas"
tipo: completar

enunciado: "El ingreso que corresponde al factor {factor} por su disponibilidad y uso se llama rentas."

explicacion: |
  Las rentas son la compensación económica por el uso de la tierra y otros recursos naturales. Su valor depende de la escasez y la productividad del recurso.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "intereses", "capital"]

variables:
  factor: "capital físico"

respuesta: "intereses"
tipo: completar

enunciado: "El ingreso que obtiene el propietario del {factor} por cederlo temporalmente a una empresa se denomina intereses."

explicacion: |
  Los intereses son el retorno por el capital financiero o físico prestado. Reflejan el costo de oportunidad de usar ese capital en producción en lugar de en otros usos.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "ganancias", "emprendimiento"]

variables:
  factor: "emprendimiento"

respuesta: "ganancias"
tipo: completar

enunciado: "El ingreso residual que recibe el factor {factor} por asumir los riesgos de la actividad económica se llama ganancias."

explicacion: |
  Las ganancias son el beneficio que queda después de pagar todos los demás factores (salarios, rentas, intereses). Compensan la incertidumbre y la innovación del emprendedor.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["definición", "factores", "insumos"]

variables:
  termino: "factores de producción"

respuesta: termino
tipo: completar

enunciado: "Los {termino} son los insumos necesarios para crear valor y generar bienes y servicios."

explicacion: |
  Los factores de producción son los recursos (naturales, materiales, humanos) combinados para producir bienes y servicios.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["factores", "naturales", "clasificacion"]

variables:
  recurso: uno_de(["tierra", "agua", "minerales", "viento", "sol"])
  recurso_clase: "recurso natural"

respuesta: "recurso natural"
tipo: completar

enunciado: "La {recurso} es un ejemplo de {recurso_clase} porque proviene directamente de la naturaleza sin intervención humana directa."

explicacion: |
  Los recursos naturales son aquellos proveídos por la naturaleza sin intervención humana directa, como la tierra, el agua o los minerales.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital", "diferenciacion"]

variables:
  bien: uno_de(["maquina", "edificio", "herramienta", "inventario"])
  clasificacion: "capital fisico"

respuesta: "capital fisico"
tipo: completar

enunciado: "Las {bien} son bienes creados por el hombre para producir otros bienes, por lo tanto se clasifican como {clasificacion}."

explicacion: |
  Los recursos materiales o capital físico son bienes creados por el hombre (máquinas, edificios) que se utilizan para producir otros bienes.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "definicion"]

variables:
  concepto: "capital humano"
  definicion: "habilidades, conocimientos, salud y experiencia"

respuesta: "capital humano"
tipo: completar

enunciado: "Las {definicion} de las personas que trabajan en una organización se denominan {concepto}."

explicacion: |
  El capital humano se refiere a las habilidades, conocimientos, salud y experiencia de los trabajadores, no solo a su cantidad.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["costos", "valor", "calculos"]

variables:
  tierra: random(10, 50)
  trabajo: random(20, 100)
  capital: random(30, 150)
  total: redondear(tierra + trabajo + capital, 0)

respuesta: total
tipo: input

enunciado: "Si una organización utiliza recursos naturales valorados en {tierra}, capital humano en {trabajo} y capital físico en {capital}, ¿cuál es el valor total de los elementos combinados?"

explicacion: |
  Se suman los valores de los diferentes factores de producción para obtener el costo total de los insumos.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["argentina", "agricultura", "ventaja comparativa"]

variables:
  region: "pampa humeda"
  factor: "recurso natural"

respuesta: "recurso natural"
tipo: completar

enunciado: "La {region} es un {factor} clave para la producción agrícola argentina debido a su fertilidad natural."

explicacion: |
  La pampa húmeda es un recurso natural fundamental que otorga ventaja comparativa a la agricultura argentina.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["conocimiento", "tecnologia", "adaptacion"]

variables:
  ventaja: "adaptar tecnologias"

respuesta: "adaptar tecnologias"
tipo: completar

enunciado: "El capital humano permite a las organizaciones {ventaja} y mejorar los procesos productivos."

explicacion: |
  El capital humano es crucial porque permite adaptar las tecnologías y mejorar la eficiencia de los procesos.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["litio", "recursos naturales", "argentina"]

variables:
  recurso: "litio"
  region: "noroeste"
  uso: "industria tecnologica"

respuesta: "litio"
tipo: completar

enunciado: "Los yacimientos de {recurso} en el {region} son vitales para la {uso} mundial."

explicacion: |
  El litio es un recurso natural estratégico extraído en el noroeste argentino, esencial para la tecnología.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["escasez", "precios", "dinamica de mercado"]

variables:
  condicion: "escasez"
  efecto: "afecta los precios"

respuesta: "afecta los precios"
tipo: completar

enunciado: "La {condicion} de ciertos recursos {efecto} en el mercado."

explicacion: |
  La escasez de recursos influye directamente en los costos y, por ende, en los precios finales de los bienes y servicios.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["insumos", "definicion"]

variables:
  termino: "factores de produccion"
  definicion: "insumos necesarios para crear valor"

respuesta: "factores de produccion"
tipo: completar

enunciado: "Los {termino} son los {definicion} para crear bienes y servicios."

explicacion: |
  Los factores de producción son los insumos necesarios para generar valor económico.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ventaja comparativa", "geografia"]

variables:
  factor: "disponibilidad geografica"
  efecto: "influencia directamente"

respuesta: "influencia directamente"
tipo: completar

enunciado: "La {factor} de los recursos naturales {efecto} en la ventaja comparativa de cada región."

explicacion: |
  La ubicación y disponibilidad de recursos naturales definen las ventajas comparativas de las regiones.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["costos", "estructura"]

variables:
  concepto: "estructura de costos"
  utilidad: "entender la dinamica del mercado"

respuesta: "entender la dinamica del mercado"
tipo: completar

enunciado: "Identificar los elementos de producción permite entender la {concepto} y {utilidad}."

explicacion: |
  Separar la producción en categorías claras ayuda a analizar costos y la dinámica del mercado.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "calidad"]

variables:
  aspecto: "calidad"
  contraste: "cantidad"

respuesta: "calidad"
tipo: completar

enunciado: "El capital humano se refiere a la {aspecto} de la formación, no solo a la {contraste} de empleados."

explicacion: |
  El capital humano valora la calidad (habilidades, salud) más que la simple cantidad de trabajadores.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["inventario", "capital fisico"]

variables:
  elemento: "inventario"
  clasificacion: "capital fisico"

respuesta: "capital fisico"
tipo: completar

enunciado: "El {elemento} de productos terminados se considera parte del {clasificacion}."

explicacion: |
  El inventario, junto con máquinas y edificios, forma parte del capital físico o recursos materiales.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["competitividad", "globalizacion"]

variables:
  factor: "comprender esta division"
  resultado: "analizar la eficiencia economica"

respuesta: "analizar la eficiencia economica"
tipo: completar

enunciado: "{factor} es fundamental para {resultado} y la competitividad en un mundo globalizado."

explicacion: |
  Entender la división de factores es clave para analizar la eficiencia y competitividad en la economía global.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["emprendimiento", "ganancia"]

variables:
  factor: "emprendimiento"
  ingreso: "ganancia"

respuesta: "ganancia"
tipo: completar

enunciado: "El factor de producción 'emprendimiento' recibe como ingreso la {ingreso}."

explicacion: |
  El emprendimiento o capacidad empresarial se remuneda con ganancias.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["diferenciacion", "tierra", "maquina"]

variables:
  recurso1: "tierra"
  recurso2: "maquina"
  diferencia: "intervencion humana"

respuesta: "intervencion humana"
tipo: completar

enunciado: "La principal diferencia entre {recurso1} y {recurso2} es el grado de {diferencia} requerida para su obtención."

explicacion: |
  La tierra es un recurso natural (poca intervención), mientras que la máquina es capital físico (alta intervención).
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "salud"]

variables:
  elemento: "salud"
  categoria: "capital humano"

respuesta: "capital humano"
tipo: completar

enunciado: "La salud de los trabajadores es un componente del {categoria}."

explicacion: |
  El capital humano incluye la salud, conocimientos y habilidades de las personas.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["escasez", "valor"]

variables:
  concepto: "escasez"
  efecto: "determina el valor"

respuesta: "determina el valor"
tipo: completar

enunciado: "La {concepto} de los recursos {efecto} en el mercado."

explicacion: |
  La escasez es un principio económico fundamental que determina el valor y precio de los recursos.
```

### 27 — pregunta 27

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["conocimiento", "acumulacion"]

variables:
  recurso: "conocimiento"
  capacidad: "puede ser acumulado"

respuesta: "puede ser acumulado"
tipo: completar

enunciado: "El {recurso} es un activo intangible que {capacidad} con el tiempo y la educación."

explicacion: |
  El conocimiento y el capital humano pueden acumularse y mejorarse mediante la educación y la experiencia.
```

### 28 — pregunta 28

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["sintesis", "organizacion"]

variables:
  numero_factores: 4
  factores: "naturales, materiales, humanos y conocimiento"

respuesta: "naturales, materiales, humanos y conocimiento"
tipo: completar

enunciado: "Los principales elementos de las organizaciones se dividen en factores {factores}."

explicacion: |
  Los factores de producción se clasifican generalmente en recursos naturales, materiales (capital físico), humanos y conocimiento.
```
