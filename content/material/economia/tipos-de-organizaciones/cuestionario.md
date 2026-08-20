# Economia — tipos de organizaciones (cuestionario, 24 preguntas VBLang)

> Tema: `economia/tipos-de-organizaciones`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  num_personas: random(5, 20)

respuesta: "agrupamiento"
tipo: completar

enunciado: "Una organización se define como un {num_personas} o más personas estructuradas con un propósito común."

explicacion: |
  Las organizaciones surgen porque es difícil satisfacer necesidades individuales por separado. Requieren estructura y objetivos compartidos.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["factores_produccion", "empresa"]

variables:
  factor1: "trabajo"
  factor2: "capital"
  factor3: "tierra"

respuesta: "trabajo, capital y tierra"
tipo: completar

enunciado: "Para crear bienes o servicios, la empresa combina factores como el {factor1}, el {factor2} y la {factor3}."

explicacion: |
  La empresa transforma estos tres factores de producción para generar valor económico.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  n_personas: random(5, 20)

respuesta: "un grupo de personas estructuradas con un propósito común"
tipo: completar

enunciado: "Según la teoría, una organización se define como {n_personas} o más personas agrupadas para:"

explicacion: |
  Las organizaciones surgen porque rara vez podemos satisfacer todas nuestras necesidades individualmente. Se trata de un conjunto de personas estructuradas con un propósito común para trabajar en conjunto y compartir recursos.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["factores", "empresa"]

variables:
  f1: "trabajo"
  f2: "capital"
  f3: "tierra"

respuesta: "trabajo, capital y tierra"
tipo: completar

enunciado: "Para crear bienes o prestar servicios, la empresa combina los factores de producción: {f1}, {f2} y {f3}."

explicacion: |
  La empresa combina tres factores clave de producción: el trabajo (mano de obra), el capital (dinero, maquinaria) y la tierra (recursos naturales) para generar productos o servicios.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "propietarios"]

variables:
  resultado: uno_de(["ganancia", "pérdida"])

respuesta: "propietarios"
tipo: completar

enunciado: "En una empresa, si el resultado es una {resultado}, el riesgo y la recompensa recaen directamente en los:"

explicacion: |
  Lo que distingue a la empresa es que el riesgo y la recompensa (ganancias o pérdidas) recaen directamente en sus propietarios o accionistas, no en el Estado ni en los socios de una cooperativa.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["estado", "bienestar"]

variables:
  fin: "bienestar general de la sociedad"

respuesta: "bienestar general de la sociedad"
tipo: completar

enunciado: "La administración pública tiene como fin el:"

explicacion: |
  Mientras la empresa busca ganancias, la administración pública (gestionada por el Estado) tiene como fin el bienestar general de la sociedad, proveiendo servicios esenciales.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["financiamiento", "impuestos"]

variables:
  fuente: "impuestos"

respuesta: "impuestos"
tipo: completar

enunciado: "Las organizaciones de la administración pública se financian principalmente a través de los {fuente} que pagan los ciudadanos."

explicacion: |
  El Estado financia sus organizaciones (hospitales, escuelas, policía) principalmente mediante los impuestos que recauda de los ciudadanos, ya que no buscan generar lucro.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["pyme", "economia_argentina"]

variables:
  rol: "corazón de la economía argentina"

respuesta: "corazón de la economía argentina"
tipo: completar

enunciado: "Las pequeñas y medianas empresas (PyMEs) son consideradas el {rol}, ofreciendo empleo local y productos específicos."

explicacion: |
  En la economía argentina, las PyMEs son fundamentales. Aunque existen grandes corporaciones, las PyMEs constituyen el corazón de la economía al ofrecer empleo local y productos específicos.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["eficiencia", "competencia"]

variables:
  clave: "eficiencia"

respuesta: "eficiencia"
tipo: completar

enunciado: "La {clave} es la clave de la empresa: debe producir de la mejor manera posible para ofrecer precios competitivos y seguir siendo rentable."

explicacion: |
  Para sobrevivir y ser rentable, la empresa debe basarse en la eficiencia. Debe producir de la mejor manera posible para ofrecer precios competitivos en el mercado.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["ong", "sin_animo_de_lucro"]

variables:
  fin: "ayudar a la comunidad sin ánimo de lucro"

respuesta: "ayudar a la comunidad sin ánimo de lucro"
tipo: completar

enunciado: "Las organizaciones no gubernamentales (ONG) existen para:"

explicacion: |
  Las ONG son organizaciones que buscan ayudar a la comunidad sin ánimo de lucro. Su objetivo es social o benéfico, no económico.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["ejemplo", "servicios_publicos"]

variables:
  gestion: "administración pública"

respuesta: "administración pública"
tipo: completar

enunciado: "Para entender cómo se financian los hospitales públicos, debemos mirar a la {gestion}, que provee servicios esenciales."

explicacion: |
  Los hospitales públicos son un ejemplo de servicios provistos por la administración pública. Su financiamiento proviene de impuestos, no de ventas al consumidor final con fin de lucro.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "avanzado"
  tags: ["ejemplo", "problemas_economicos"]

variables:
  razon: "lógica diferente"

respuesta: "lógica diferente"
tipo: completar

enunciado: "Algunos clubes deportivos tienen problemas económicos mientras otros prosperan debido a que tienen una {razon} para generar riqueza o distribuir bienes."

explicacion: |
  La diversidad en los tipos de organizaciones (clubes, empresas, ONG) implica que cada una tiene una lógica diferente para generar riqueza o distribuir bienes, lo que explica sus distintos resultados económicos.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["clasificacion", "sector_privado"]

variables:
  sector: "sector privado"

respuesta: "sector privado"
tipo: completar

enunciado: "La empresa es la organización más común en el {sector}."

explicacion: |
  La empresa pertenece al sector privado. Es la unidad básica de la economía de mercado, dedicada a la producción de bienes y servicios con fines de lucro.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "propietarios"]

variables:
  quien: "propietarios o accionistas"

respuesta: "propietarios o accionistas"
tipo: completar

enunciado: "En una empresa, si fracasa, las pérdidas las asumen los {quien}."

explicacion: |
  Una característica distintiva de la empresa es que los propietarios o accionistas asumen personalmente las pérdidas si la empresa fracasa, a diferencia de otros tipos de organizaciones.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["bien_publico", "estado"]

variables:
  quien: "el Estado"

respuesta: "el Estado"
tipo: completar

enunciado: "Los bienes y servicios públicos esenciales son provistos por {quien}."

explicacion: |
  El Estado (a través de la administración pública) es responsable de proveer bienes y servicios públicos esenciales que el mercado por sí solo no proveería eficientemente.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["clasificacion", "fin"]

variables:
  criterio: "su fin principal"

respuesta: "su fin principal"
tipo: completar

enunciado: "Las organizaciones se pueden clasificar según {criterio}."

explicacion: |
  Una de las formas principales de clasificar las organizaciones es según su fin principal: generar ganancias, ayudar a la comunidad o proveer servicios públicos.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["eficiencia", "precio"]

variables:
  objetivo: "precios competitivos"

respuesta: "precios competitivos"
tipo: completar

enunciado: "La eficiencia permite a la empresa ofrecer {objetivo} y seguir siendo rentable."

explicacion: |
  La eficiencia productiva es crucial para que la empresa pueda ofrecer precios competitivos en el mercado, lo cual es necesario para mantenerse rentable.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["ong", "objetivo"]

variables:
  objetivo: "ayudar a la comunidad"

respuesta: "ayudar a la comunidad"
tipo: completar

enunciado: "El objetivo de las ONG es {objetivo} sin ánimo de lucro."

explicacion: |
  Las organizaciones no gubernamentales (ONG) tienen como objetivo principal ayudar a la comunidad, operando sin fines de lucro.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["mercado", "sociedad"]

variables:
  concepto: "sociedad moderna"

respuesta: "sociedad moderna"

enunciado: "La diversidad de tipos de organizaciones permite que funcione la {concepto}."

explicacion: |
  La existencia de diferentes tipos de organizaciones (empresas, estado, ONG) con lógicas distintas es lo que permite que funcione la sociedad moderna.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "recompensa"]

variables:
  quien: "propietarios"

respuesta: "propietarios"

enunciado: "En la empresa, el riesgo y la recompensa recaen directamente en los {quien}."

explicacion: |
  Una característica clave de la empresa es que los propietarios (o accionistas) asumen directamente tanto el riesgo de pérdida como la recompensa de ganancia.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["financiamiento", "estado"]

variables:
  fuente: "impuestos"

respuesta: "impuestos"

enunciado: "La administración pública se financia principalmente a través de los {fuente}."

explicacion: |
  El Estado financia sus operaciones y servicios públicos principalmente mediante la recaudación de impuestos de los ciudadanos.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["pyme", "empleo"]

variables:
  rol: "corazón de la economía argentina"

respuesta: "corazón de la economía argentina"

enunciado: "Las PyMEs son consideradas el {rol} porque ofrecen empleo local."

explicacion: |
  Las PyMEs son el corazón de la economía argentina debido a su capacidad para ofrecer empleo local y productos específicos, diferenciándose de las grandes corporaciones.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["comparacion", "fin"]

respuesta: "falso"

enunciado: "Verdadero o Falso: Todas las organizaciones buscan lo mismo y lo hacen de la misma manera."

explicacion: |
  Falso. Las organizaciones no todas buscan lo mismo ni lo hacen de la misma manera. Algunas buscan ganancias, otras bienestar social, y otras servicios públicos.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "avanzado"
  tags: ["resumen", "clasificacion"]

variables:
  tipo1: "empresa"
  tipo2: "administración pública"
  tipo3: "ONG"

respuesta: "empresa, administración pública y ONG"

enunciado: "Las tres categorías principales de organizaciones mencionadas son: {tipo1}, {tipo2} y {tipo3}."

explicacion: |
  El texto clasifica las organizaciones principalmente en tres tipos: la empresa (sector privado con fin de lucro), la administración pública (Estado con fin social) y las ONG (sin ánimo de lucro).
```
