# Historia — crisis de 2001 (cuestionario, 21 preguntas VBLang)

> Tema: `historia/crisis-de-2001`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["corralito", "fechas"]

variables:
  dia: 1
  mes: 12
  anio: 2001

respuesta: dia + "/" + mes + "/" + anio
tipo: input

enunciado: "¿En qué fecha (dd/mm/aaaa) se decretó el Corralito?"

explicacion: |
  El Corralito fue decretado el 1 de diciembre de 2001 por el ministro Ricardo López Murphy, aunque su implementación efectiva ocurrió poco después bajo Domingo Cavallo.
```

### 2 — pregunta 2

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["convertibilidad", "déficit_fiscal"]

variables:
  paridad: 1

respuesta: "uno a uno"
tipo: completar

enunciado: "Durante la década de los noventa, la convertibilidad vinculaba el peso argentino al dólar estadounidense a una paridad de {paridad} a {paridad}."

explicacion: |
  La paridad era de 1:1, lo que significaba que un dólar estadounidense equivalía exactamente a un peso argentino.
```

### 3 — pregunta 3

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["inflación", "déficit"]

variables:
  resultado: random(0, 1)

respuesta: "déficit fiscal crónico"
tipo: completar

enunciado: "Aunque frenó la hiperinflación, la convertibilidad generó {resultado + 1} problema estructural principal mencionado: un _______________ crónico que obligó al endeudamiento."

explicacion: |
  El texto indica que la convertibilidad generó desequilibrios estructurales, específicamente un déficit fiscal crónico.
```

### 4 — pregunta 4

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["estancamiento", "desempleo"]

variables:
  condicion: random(0, 1)

respuesta: "insostenible"
tipo: completar

enunciado: "Para el año 2001, la situación económica se había tornado _______________ debido al estancamiento y el alto desempleo."

explicacion: |
  El contexto describe que para 2001 la situación era insostenible por la acumulación de problemas estructurales.
```

### 5 — pregunta 5

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["fmi", "ajuste"]

variables:
  entidad: "Fondo Monetario Internacional"

respuesta: "FMI"
tipo: completar

enunciado: "El gobierno intentó negociar un nuevo plan de ajuste con el _______________ (FMI), pero las negociaciones colapsaron."

explicacion: |
  Las negociaciones con el FMI fueron clave y terminaron en fracaso, acelerando la crisis de confianza.
```

### 6 — pregunta 6

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["reservas", "déficit"]

variables:
  falta: "falta"

respuesta: "reservas"
tipo: completar

enunciado: "La _______________ de reservas para defender la moneda fue un factor clave del pánico financiero."

explicacion: |
  La falta de reservas impidió al gobierno sostener la paridad del peso frente al dólar.
```

### 7 — pregunta 7

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fuga de capitales", "pánico"]

variables:
  accion: "retirar"

respuesta: "retirar"
tipo: completar

enunciado: "Los ciudadanos comenzaron a _______________ sus ahorros de los bancos por miedo al colapso."

explicacion: |
  La fuga de capitales consistió en la retirada masiva de dinero de las cuentas bancarias.
```

### 8 — pregunta 8

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["corralito", "medidas"]

variables:
  medida: "Corralito"

respuesta: "Corralito"
tipo: completar

enunciado: "El congelamiento de depósitos bancarios fue conocido popularmente como el '_______________'."

explicacion: |
  El término "Corralito" se refiere a las restricciones de retiro de dinero implementadas por el gobierno.
```

### 9 — pregunta 9

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["liquidez", "banco"]

variables:
  objetivo: "evitar"

respuesta: "evitar"
tipo: completar

enunciado: "El objetivo declarado del Corralito era _______________ el vaciamiento total del sistema financiero."

explicacion: |
  Se justificó como una medida para proteger las reservas y evitar el colapso bancario.
```

### 10 — pregunta 10

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["actividad económica", "restricción"]

variables:
  efecto: "paralizar"

respuesta: "paralizar"
tipo: completar

enunciado: "El efecto inmediato del Corralito fue _______________ la actividad económica cotidiana."

explicacion: |
  Las restricciones de retiro y transferencia paralizaron el flujo de caja de comercios y empresas.
```

### 11 — pregunta 11

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["empresas", "liquidez"]

variables:
  afectado: "comercios"

respuesta: "comercios"
tipo: completar

enunciado: "Las restricciones afectaron tanto a ahorristas como a _______________ y empresas que necesitaban flujo de caja."

explicacion: |
  El Corralito no solo afectó a los ahorristas, sino también a la operatividad de los comercios.
```

### 12 — pregunta 12

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["derechos", "legitimidad"]

variables:
  percepcion: "violación"

respuesta: "violación"
tipo: completar

enunciado: "Muchos vieron el Corralito como una _______________ de sus derechos patrimoniales."

explicacion: |
  La medida fue percibida como una invasión a la propiedad privada y los derechos de los ciudadanos.
```

### 13 — pregunta 13

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["protesta", "social"]

variables:
  transformacion: "transformar"

respuesta: "transformar"
tipo: completar

enunciado: "La indignación creció, buscando una salida _______________ a la crisis."

explicacion: |
  El descontento económico se convirtió en malestar social con demandas políticas concretas.
```

### 14 — pregunta 14

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["política", "gobierno"]

variables:
  nivel: "extrema"

respuesta: "extrema"
tipo: completar

enunciado: "La crisis derivó en una inestabilidad política _______________."

explicacion: |
  La incapacidad de resolver la crisis generó una crisis política severa.
```

### 15 — pregunta 15

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["presidencia", "tiempo"]

variables:
  dias: 11

respuesta: "11"
tipo: input

enunciado: "En apenas {dias} días, entre el 19 y el 30 de diciembre, Argentina tuvo cinco presidentes o figuras de poder."

explicacion: |
  El periodo de sucesión presidencial rápida duró 11 días en diciembre de 2001.
```

### 16 — pregunta 16

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

variables:
  inicio: 19

respuesta: "19"
tipo: input

enunciado: "La sucesión presidencial crítica comenzó el {inicio} de diciembre de 2001."

explicacion: |
  El 19 de diciembre fue el inicio de los eventos que llevaron a la renuncia de De la Rúa.
```

### 17 — pregunta 17

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

variables:
  fin: 30

respuesta: "30"
tipo: input

enunciado: "La sucesión presidencial crítica finalizó el {fin} de diciembre de 2001."

explicacion: |
  El 30 de diciembre marca el final del periodo de cinco presidentes en tan pocos días.
```

### 18 — pregunta 18

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["de la rúa", "presidencia"]

variables:
  presidente: "Fernando de la Rúa"

respuesta: "Fernando de la Rúa"
tipo: completar

enunciado: "El gobierno que intentó negociar con el FMI estaba presidido por _______________."

explicacion: |
  Fernando de la Rúa fue el presidente durante el estallido de la crisis en diciembre de 2001.
```

### 19 — pregunta 19

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["vicepresidente", "renuncia"]

variables:
  vp: "Carlos"

respuesta: "Carlos"
tipo: completar

enunciado: "La renuncia del vicepresidente _______________ (Carl...) fue parte de la inestabilidad."

explicacion: |
  El texto menciona la renuncia del vicepresidente Carlos como parte de la sucesión caótica.
```

### 20 — pregunta 20

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["confianza", "pánico"]

variables:
  causa: "incapacidad"

respuesta: "incapacidad"
tipo: completar

enunciado: "La _______________ de pagar la deuda externa erosionó la confianza de la población."

explicacion: |
  La incapacidad de cumplir con la deuda fue un detonante clave de la pérdida de confianza.
```

### 21 — pregunta 21

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["síntoma", "corralito"]

variables:
  sintoma: "síntoma"

respuesta: "síntoma"
tipo: completar

enunciado: "El Corralito fue visto como un _______________ de la incapacidad del Estado para gestionar la economía."

explicacion: |
  La medida no solo fue económica, sino un indicador de la debilidad institucional.
```
