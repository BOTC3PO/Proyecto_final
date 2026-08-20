# Geografia — geografia industrial mundial (cuestionario, 26 preguntas VBLang)

> Tema: `geografia/geografia-industrial-mundial`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["causas", "mc"]

respuesta: 0
tipo: mc
opciones: 4

enunciado: "¿Cuál de las siguientes NO es una causa principal de la deslocalización industrial?"

explicacion: |
  Las causas son reducción de costos de transporte y revolución de la información. El aumento de aranceles o la escasez de recursos no son causas directas de este fenómeno específico.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["ejemplos", "mc"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál de estos países es un ejemplo típico de receptor de deslocalización industrial?"

explicacion: |
  China, India y Vietnam son ejemplos clásicos. Alemania, Japón y EE.UU. son emisores tradicionales.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["efectos", "mc"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "¿Qué efecto suele experimentar el sector manufacturero tradicional en los países emisores?"

explicacion: |
  Sufre desempleo y cierre de fábricas. No suele haber aumento de empleo ni mejora inmediata sin reconvertir la economía.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "mc"]

respuesta: 0
tipo: mc
opciones: 4

enunciado: "¿Qué avance tecnológico ha permitido la 'geografía invisible' de la producción?"

explicacion: |
  Las telecomunicaciones y la digitalización permiten coordinar procesos a distancia. El vapor, la electricidad o la imprenta no tienen este efecto directo en la logística global moderna.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["deslocalizacion", "definicion"]

variables:
  motivo_principal: uno_de(["menores costos operativos", "maximizar ganancias", "eficiencia económica"])

respuesta: "menores costos operativos"
tipo: completar

enunciado: "La deslocalización industrial consiste en transferir actividades productivas a países con {motivo_principal}."

explicacion: |
  La deslocalización busca reducir costos de producción (mano de obra, impuestos, regulación) moviendo la actividad a otros territorios.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["globalizacion", "transporte", "telecomunicaciones"]

variables:
  factor: uno_de(["reducción de costos de transporte", "revolución de la información", "avances en telecomunicaciones"])

respuesta: "{factor}"
tipo: completar

enunciado: "Un factor clave que aceleró la deslocalización fue el {factor}."

explicacion: |
  La globalización permitió coordinar cadenas de valor globales gracias a mejoras en transporte y comunicación.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desindustrializacion", "norte_global"]

variables:
  sector_afectado: uno_de(["manufactura tradicional", "servicios tecnológicos", "agricultura"])

respuesta: "manufactura tradicional"
tipo: completar

enunciado: "En los países emisores, la deslocalización suele generar desempleo en el sector de {sector_afectado}."

explicacion: |
  Al trasladar la producción, los países desarrollados pierden puestos de trabajo en la manufactura básica.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["regulacion", "medio_ambiente"]

variables:
  riesgo: uno_de(["falta de regulaciones estrictas", "exceso de burocracia", "alta tributación"])

respuesta: "falta de regulaciones estrictas"
tipo: completar

enunciado: "Un riesgo para los países receptores es la {riesgo} que permite a las corporaciones reducir costos."

explicacion: |
  A veces, la deslocalización se dirige a lugares con normas ambientales más laxas, generando contaminación.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["motivacion", "multinacionales"]

variables:
  objetivo: uno_de(["maximizar ganancias", "reducir impuestos", "crecer tecnológicamente"])

respuesta: "maximizar ganancias"
tipo: completar

enunciado: "La decisión de deslocalizar responde a la búsqueda de {objetivo} por parte de las multinacionales."

explicacion: |
  El motor principal es económico: producir más barato para ganar más.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["sur_global", "ejemplos"]

variables:
  pais: uno_de(["China", "India", "Vietnam"])

respuesta: "{pais}"
tipo: completar

enunciado: "Un ejemplo clásico de país receptor de deslocalización industrial es {pais}."

explicacion: |
  Estos países han atraído inversiones masivas por su gran fuerza laboral y bajos costos.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desindustrializacion", "consecuencias"]

variables:
  fenomeno: uno_de(["desindustrialización", "reindustrialización", "industrialización tardía"])

respuesta: "desindustrialización"
tipo: completar

enunciado: "El debate político en países emisores a menudo gira en torno al riesgo de {fenomeno}."

explicacion: |
  La pérdida de capacidad manufactura interna es un tema sensible en países desarrollados.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["infraestructura", "compensacion"]

variables:
  ventaja_emisora: uno_de(["alta tecnología", "infraestructura sólida", "mercados ricos"])
  desventaja_receptora: uno_de(["infraestructura menos desarrollada", "falta de mano de obra", "costos altos"])

respuesta: "infraestructura menos desarrollada"
tipo: completar

enunciado: "Aunque los países receptores tienen bajos costos, a veces compensan con {ventaja_emisora} y sufren {desventaja_receptora}."

explicacion: |
  Existe un trade-off: los receptores ofrecen mano de obra barata pero a veces carecen de infraestructura avanzada.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "causas"]

variables:
  causa: uno_de(["la revolución de la información", "el aumento de aranceles", "la crisis del petróleo"])

respuesta: "la revolución de la información"
tipo: completar

enunciado: "La {causa} ha permitido gestionar cadenas de producción globales en tiempo real."

explicacion: |
  Sin internet y sistemas de gestión, la coordinación de partes en distintos países sería inviable.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "avanzado"
  tags: ["globalizacion", "soberania"]

variables:
  importancia: uno_de(["importan menos", "son irrelevantes", "son más importantes que nunca"])

respuesta: "importan menos"
tipo: completar

enunciado: "En la 'geografía invisible' de la producción global, las fronteras políticas {importancia} que la eficiencia económica."

explicacion: |
  La lógica del mercado global trasciende las fronteras nacionales tradicionales.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["riesgos", "receptores"]

variables:
  riesgo: uno_de(["dependencia económica excesiva", "autonomía total", "crecimiento sostenible"])

respuesta: "dependencia económica excesiva"
tipo: completar

enunciado: "Un riesgo para los receptores es la {riesgo} de las decisiones de corporaciones extranjeras."

explicacion: |
  Si las multinacionales se van, la economía local puede colapsar por falta de diversificación.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["transporte", "logistica"]

variables:
  tendencia: uno_de(["reducción de costos", "aumento de costos", "estabilidad de precios"])

respuesta: "reducción de costos"
tipo: completar

enunciado: "La {tendencia} en el transporte ha hecho viable producir lejos del mercado consumidor."

explicacion: |
  Contenedores y logística eficiente abarataron el envío de productos terminados o partes.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["norte_global", "mercado"]

variables:
  caracteristica: uno_de(["mercados consumidores ricos", "mercados consumidores pobres", "mercados aislados"])

respuesta: "mercados consumidores ricos"
tipo: completar

enunciado: "Los países del Norte Global ofrecen {caracteristica} además de alta tecnología."

explicacion: |
  Aunque producen menos, siguen siendo los principales mercados de consumo final.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["mano_obra", "receptores"]

variables:
  caracteristica: uno_de(["fuerza laboral numerosa", "fuerza laboral escasa", "fuerza laboral muy costosa"])

respuesta: "fuerza laboral numerosa"
tipo: completar

enunciado: "Los países emergentes suelen atraer industria por tener {caracteristica}."

explicacion: |
  La disponibilidad de trabajadores es un factor clave para la manufactura intensiva en mano de obra.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["politica_economica", "emisoras"]

variables:
  necesidad: uno_de(["reconvertir la economía", "aumentar la producción agrícola", "cerrar industrias"])

respuesta: "reconvertir la economía"
tipo: completar

enunciado: "Los países emisores necesitan {necesidad} hacia servicios y tecnología tras la deslocalización."

explicacion: |
  La estrategia de desarrollo en países desarrollados se ha desplazado hacia la innovación y servicios.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["actores", "multinacionales"]

variables:
  actor: uno_de(["grandes multinacionales", "pequeñas cooperativas", "gobiernos locales"])

respuesta: "grandes multinacionales"
tipo: completar

enunciado: "Son las {actor} las que evalúan constantemente dónde es más rentativo producir."

explicacion: |
  Las grandes corporaciones tienen la capacidad logística y financiera para operar globalmente.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desigualdad", "consecuencias"]

variables:
  naturaleza: uno_de(["complejos y desiguales", "uniformes y positivos", "negativos para todos"])

respuesta: "complejos y desiguales"
tipo: completar

enunciado: "Los efectos de la deslocalización son {naturaleza}."

explicacion: |
  Algunos ganan empleo, otros pierden; algunos crecen, otros se contaminan. No es uniforme.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["comercio", "receptores"]

variables:
  beneficio: uno_de(["mayor integración en el comercio mundial", "aislamiento comercial", "reducción de exportaciones"])

respuesta: "mayor integración en el comercio mundial"
tipo: completar

enunciado: "Para los receptores, la deslocalización puede significar {beneficio}."

explicacion: |
  Al insertarse en cadenas globales, los países receptores se vinculan más al comercio internacional.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["decision", "economia"]

variables:
  ecuacion: uno_de(["ecuación de costos versus beneficios", "ecuación de oferta y demanda", "ecuación de inflación"])

respuesta: "ecuación de costos versus beneficios"
tipo: completar

enunciado: "La decisión de deslocalizar es, en esencia, una {ecuacion}."

explicacion: |
  Las empresas comparan el ahorro generado con los riesgos y costos de mover la producción.
```

### 24 — pregunta 24

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "causas"]

variables:
  avance: uno_de(["avances en las telecomunicaciones", "retrocesos en la navegación", "estancamiento digital"])

respuesta: "avances en las telecomunicaciones"
tipo: completar

enunciado: "La deslocalización se aceleró gracias a la globalización y a los {avance}."

explicacion: |
  La comunicación instantánea es vital para gestionar operaciones distribuidas geográficamente.
```

### 25 — pregunta 25

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["norte_global", "ventajas"]

variables:
  ventaja: uno_de(["infraestructura sólida", "infraestructura precaria", "infraestructura obsoleta"])

respuesta: "infraestructura sólida"
tipo: completar

enunciado: "Los países del Norte Global mantienen {ventaja} como ventaja competitiva."

explicacion: |
  Aunque la manufactura se fue, la infraestructura y la tecnología siguen siendo fuertes en el Norte.
```

### 26 — pregunta 26

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["historia", "tendencia"]

variables:
  estado: uno_de(["se ha acelerado drásticamente", "se ha detenido", "es una tendencia nueva"])

respuesta: "se ha acelerado drásticamente"
tipo: completar

enunciado: "Aunque no es una tendencia nueva, la deslocalización {estado} en las últimas décadas."

explicacion: |
  La globalización reciente intensificó un fenómeno que existía desde antes, pero a otra escala.
```
