# Examen jefe — Dueño de la Elasticidad y Estados

> Logro #193. Desarmaste la estructura del patrimonio y dominaste los estados contables para cerrar el parcial con todo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: elasticidad (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. ¿Cuál es el valor absoluto de la elasticidad?"

pasos:
  - "|E| = {pct_cantidad}%/{pct_precio}% = {k}"

explicacion: |
  |E| = (%ΔQ)/(%ΔP), tomando los valores absolutos de cada variación.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: pct_cantidad
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. Sin dividir todavía, ¿cuál es el numerador (%ΔQ, en valor absoluto) del cociente de elasticidad?"

explicacion: |
  El numerador de |E| es directamente %ΔQ = {pct_cantidad}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: "Elástica"
tipo: mc
opciones_explicitas:
  - "Elástica"
  - "Inelástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}% (|E|={k}). ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E|={k} > 1 → elástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: "Inelástica"
tipo: mc
opciones_explicitas:
  - "Inelástica"
  - "Elástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E| = {pct_cantidad}/{pct_precio} < 1 → inelástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "verdadero_falso"]

variables:
  pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct}% y la cantidad baja exactamente {pct}%. ¿Es unitaria la elasticidad?"

explicacion: |
  |E| = {pct}/{pct} = 1 → elasticidad unitaria.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  cantidad_inicial: k * 100
  pct: random(5, 40)
  cantidad_final: cantidad_inicial - k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada baja de {cantidad_inicial} a {cantidad_final} unidades. ¿Cuál es la variación porcentual (en valor absoluto)?"

pasos:
  - "%Δ = ({cantidad_inicial}−{cantidad_final})/{cantidad_inicial} × 100 = {pct}%"

explicacion: |
  Se compara el cambio con el valor INICIAL, no el final.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  precio_inicial: k * 100
  pct: random(5, 40)
  precio_final: precio_inicial + k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube de {precio_inicial} a {precio_final}. ¿Cuál es la variación porcentual?"

explicacion: |
  %Δ = ({precio_final}−{precio_inicial})/{precio_inicial} × 100 =
  {pct}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  k: random(1, 5)
  precio_inicial: k * 100
  pct_precio: random(5, 20)
  precio_final: precio_inicial + k * pct_precio
  cantidad_inicial: k * 100
  m: random(2, 4)
  pct_cantidad: pct_precio * m
  cantidad_final: cantidad_inicial - k * pct_cantidad

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "El precio pasa de {precio_inicial} a {precio_final}, y la cantidad de {cantidad_inicial} a {cantidad_final}. ¿Cuál es |E|?"

pasos:
  - "%ΔP = {pct_precio}%, %ΔQ = {pct_cantidad}% → |E| = {pct_cantidad}/{pct_precio} = {m}"

explicacion: |
  Primero se calcula cada variación porcentual, y después se dividen.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad mide cuánto responde (en términos porcentuales) la cantidad demandada ante un cambio porcentual en el precio."

explicacion: |
  Es la definición central: un cociente de variaciones RELATIVAS, no
  absolutas.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La elasticidad de la demanda es exactamente lo mismo que la pendiente de la curva de demanda."

explicacion: |
  La pendiente usa variaciones absolutas (ΔP/ΔQ); la elasticidad usa
  variaciones porcentuales — son cálculos relacionados pero distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Como la elasticidad usa porcentajes (no unidades), permite comparar la sensibilidad al precio de productos completamente distintos entre sí (por ejemplo, pan vs. autos)."

explicacion: |
  La pendiente sola no permitiría esa comparación, porque depende de las
  unidades de cada producto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes esenciales, sin sustitutos cercanos (como medicamentos), suelen tener demanda inelástica."

explicacion: |
  La gente sigue comprándolos casi igual aunque suba el precio, porque
  no tiene alternativa.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes con sustitutos cercanos (por ejemplo, una marca de gaseosa cuando hay otras parecidas) suelen tener demanda elástica."

explicacion: |
  Si sube el precio, es fácil cambiar a otra opción — la cantidad
  demandada responde fuerte.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por la ley de demanda (precio sube, cantidad baja), la elasticidad suele dar un número negativo, aunque se clasifique según su valor absoluto."

explicacion: |
  El signo refleja la dirección opuesta entre precio y cantidad; la
  magnitud (valor absoluto) es lo que importa para clasificar.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una elasticidad de −3 representa una demanda MÁS elástica que una de −2, aunque −3 sea 'más negativo' — lo que importa es el valor absoluto (3 > 2)."

explicacion: |
  Es el error de comparación más común: hay que comparar magnitudes, no
  el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["elasticidad_puntual"]

variables:
  pendiente_demanda: -random(1, 5)
  precio: random(10, 50)
  cantidad: random(10, 50)

respuesta: (pendiente_demanda * precio) / cantidad
tipo: input
tolerancia_abs: 0.01

enunciado: "La función de demanda tiene dQ/dP = {pendiente_demanda} en el punto (P={precio}, Q={cantidad}). ¿Cuál es la elasticidad puntual E = (dQ/dP)×(P/Q)?"

explicacion: |
  Es la versión con derivada de la misma fórmula — la elasticidad
  exacta en un punto específico, no un promedio entre dos puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad puntual, calculada con la derivada dQ/dP, es la versión 'instantánea' de la elasticidad, igual que la derivada es la versión instantánea de una pendiente promedio."

explicacion: |
  Misma relación ya vista entre velocidad media e instantánea, o entre
  costo promedio y marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto clasificar esta demanda como elástica?"

explicacion: |
  |E| = {k} > 1 → elástica, correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto que |E| sea {propuesto}?"

explicacion: |
  El valor correcto es {pct_cantidad}/{pct_precio} = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una empresa que vende un producto con demanda inelástica puede subir el precio sin perder demasiadas ventas — a diferencia de un producto con demanda elástica."

explicacion: |
  Es una de las aplicaciones prácticas de conocer la elasticidad de lo
  que se vende.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Todos los productos tienen la misma elasticidad, así que una vez calculada para uno, sirve para cualquier otro."

explicacion: |
  Cada producto tiene su propia elasticidad, según tenga o no
  sustitutos, sea esencial o no, etc.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar"]

variables:
  pct_precio: random(5, 30)

respuesta: pct_precio
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}%. ¿Qué variación porcentual de la cantidad daría elasticidad unitaria (|E|=1)?"

explicacion: |
  Para |E|=1, %ΔQ tiene que ser exactamente igual a %ΔP.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Elasticidad y costo marginal son la misma familia de idea (una razón de cambio) aplicada a dos preguntas distintas: una a cuánto cuesta producir más, la otra a cuánto responde la demanda al precio."

explicacion: |
  Es el resumen de por qué `../costo-marginal/` es el prerrequisito de
  este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea central de la elasticidad es usar variaciones RELATIVAS (porcentuales) en vez de ABSOLUTAS, lo que permite comparar sensibilidades entre magnitudes de escalas muy distintas."

explicacion: |
  Es el resumen del módulo: el mismo principio de 'porcentaje' ya
  trabajado en Tronco 1, aplicado ahora a comparar dos tasas de cambio
  entre sí.
```

## Sección: elementos-de-las-organizaciones (28 preguntas)

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

respuesta: "{total}"
tipo: input

enunciado: "Si una organización utiliza recursos naturales valorados en {tierra}, capital humano en {trabajo} y capital físico en {capital}, ¿cuál es el valor total de los elementos combinados?"

explicacion: |
  Se suman los valores de los diferentes factores de producción para obtener el costo total de los insumos.
```

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

## Sección: estado-de-resultados (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "ingresos"]

respuesta: "ingresos"
tipo: completar
respuestas_validas: ["ingresos", "ventas"]

enunciado: "El conjunto de incrementos en los beneficios económicos durante el período, que resultan en aumentos del patrimonio neto, se denominan _______."

explicacion: |
  Los ingresos representan las entradas de recursos o incrementos en el valor de los activos que surgen de las actividades principales de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "resultado"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1000, 800, 200], [500, 700, -200]]

respuesta: escenario[idx][2
tipo: completar
tolerancia_abs: 0

enunciado: "En un escenario donde los ingresos son de ${escenario[idx][0]} y los costos/gastos totales son de ${escenario[idx][1]}, el resultado del período es _______."

pasos:
  - "Identificar el total de ingresos: ${escenario[idx][0]}"
  - "Identificar el total de costos y gastos: ${escenario[idx][1]}"
  - "Restar: Ingresos - Costos = Resultado"

explicacion: |
  El resultado se obtiene restando los costos y gastos de los ingresos totales. Si el resultado es positivo es ganancia, si es negativo es pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si el total de ingresos es menor que el total de costos y gastos en un período determinado, la organización presenta una pérdida."

explicacion: |
  Exacto. La pérdida ocurre cuando los egresos superan a los ingresos en el estado de resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura"]

respuesta: ["Ingresos", "Costos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Costos", "Resultado"]

enunciado: "Ordene los elementos según la estructura lógica de cálculo del estado de resultados (desde el origen del recurso hasta el resultado final):"

explicacion: |
  La secuencia lógica es: primero se registran los ingresos, luego se restan los costos/gastos y finalmente se obtiene el resultado (utilidad o pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0, 1])
  resultado_tipo: [["Ganancia", "positivo"], ["Pérdida", "negativo"]]

respuesta: resultado_tipo[idx][1
tipo: mc

opciones_explicitas: ["positivo", "negativo"]

enunciado: "Si el resultado del período es una '_______', el valor numérico final es ${resultado_tipo[idx][0]}."

explicacion: |
  Una ganancia implica un valor positivo (ingresos > costos), mientras que una pérdida implica un valor negativo (ingresos < costos).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "ingresos", "costos"]

variables:
  datos: [[150000, 90000], [250000, 180000], [80000, 50000]]
  idx: uno_de([0,1,2])
  ventas: datos[idx][0]
  costo_ventas: datos[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa presenta las siguientes cifras en su estado de resultados: Ventas Totales de ${ventas} y Costo de Mercaderías Vendidas de ${costo_ventas}. ¿Cuál es el Resultado Bruto?"

pasos:
  - "Identificar las Ventas Netas: ${ventas}"
  - "Identificar el Costo de Ventas: ${costo_ventas}"
  - "Restar el Costo de las Ventas a las Ventas Netas: ${ventas} - ${costo_ventas}"

explicacion: |
  El Resultado Bruto se obtiene restando el costo de lo vendido a los ingresos por ventas. En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "conceptos"]

respuesta: "Ingreso"
tipo: mc
opciones_explicitas: ["Ingreso", "Costo", "Gasto", "Activo"]

enunciado: "Si una empresa realiza una venta de servicios por un valor de $50.000, este concepto se clasifica contablemente en el Estado de Resultados como un:"

explicacion: |
  Las entradas de recursos que incrementan el patrimonio neto de la entidad, provenientes de la actividad principal, se denominan Ingresos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["utilidad", "impuestos", "gastos"]

variables:
  escenario: [[10000, 4000, 2000], [25000, 12000, 5000], [5000, 6000, 1000]]
  idx: uno_de([0,1,2])
  res_bruto: escenario[idx][0]
  gastos_op: escenario[idx][1]
  impuestos: escenario[idx][2]

respuesta: res_bruto - gastos_op - impuestos
tipo: completar
tolerancia_abs: 0

enunciado: "Se dispone de un Resultado Bruto de ${res_bruto}, Gastos Operativos de ${gastos_op} e Impuestos de ${impuestos}. Calcule la Utilidad Neta (Resultado del Ejercicio)."

pasos:
  - "Partir del Resultado Bruto: ${res_bruto}"
  - "Restar los Gastos Operativos: ${res_bruto} - ${gastos_op}"
  - "Restar los Impuestos para obtener el resultado final: ${res_bruto} - ${gastos_op} - ${impuestos}"

explicacion: |
  La Utilidad Neta es el resultado final después de deducir todos los costos, gastos y obligaciones impositivas.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si el total de ingresos de una organización es menor al total de sus costos y gastos en un período determinado, el resultado se denomina 'Ganancia'."

explicacion: |
  Falso. Cuando los gastos superan a los ingresos, el resultado es una 'Pérdida'. La 'Ganancia' ocurre cuando los ingresos son mayores.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "proceso"]

opciones_explicitas: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
respuesta: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
tipo: ordenar

enunciado: "Ordene los siguientes conceptos según la estructura lógica de cascada de un Estado de Resultados, desde el ingreso principal hasta el resultado final:"

explicacion: |
  La estructura sigue un orden de deducción sucesiva: se parte de las Ventas, se restan los costos para obtener el Bruto, luego se restan gastos operativos para el Operativo, y finalmente impuestos y otros para el Neto.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["ingresos", "devengado", "flujo_de_caja"]

respuesta: falso
tipo: vf

enunciado: "Un ingreso registrado en el Estado de Resultados implica necesariamente que el dinero ya ingresó a la cuenta bancaria de la organización."

explicacion: |
  El Estado de Resultados se rige por el principio de lo devengado. Esto significa que los ingresos se registran cuando se produce la venta o la prestación del servicio, independientemente de si el cliente pagó en efectivo o si la transacción fue a crédito.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado", "ganancia", "perdida"]

variables:
  datos: [["Ingresos: 1000, Costos: 800", "200"], ["Ingresos: 500, Costos: 600", "-100"], ["Ingresos: 1200, Costos: 1200", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["200", "-100", "0", "No se puede determinar"]

enunciado: "Si una organización presenta un total de ingresos de {datos[idx][0].split(':')[1].split(',')[0].strip()} y un total de costos de {datos[idx][0].split(':')[2].strip()}, su resultado del período es:"

explicacion: |
  El resultado (ganancia o pérdida) se obtiene restando los costos y gastos de los ingresos totales. En el caso {datos[idx][1]}, el resultado es positivo (ganancia) o negativo (pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["orden", "estructura"]

respuesta: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]

enunciado: "Ordene los conceptos según el orden lógico de presentación en un Estado de Resultados estándar para determinar la utilidad operativa."

explicacion: |
  El orden lógico comienza con los ingresos por ventas, se restan los costos directos para obtener el margen bruto, luego se restan los gastos operativos para llegar al resultado operativo.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["costo", "gasto", "clasificacion"]

respuesta: "gasto"
tipo: completar
respuestas_validas: ["gasto"]

enunciado: "Mientras que el costo está directamente vinculado a la producción de un bien o servicio, el pago de la factura de luz de la oficina administrativa se clasifica contablemente como un ___."

explicacion: |
  Los costos son inversiones que se recuperan al vender el producto (están en el inventario hasta la venta), mientras que los gastos son consumos que se utilizan para mantener la estructura operativa de la empresa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["impuestos", "resultado_neto"]

variables:
  escenario: [["Resultado antes de impuestos: 100, Tasa: 0.3", "70"], ["Resultado antes de impuestos: -50, Tasa: 0.3", "-50"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Calcule el Resultado Neto (utilidad o pérdida después de impuestos) considerando el siguiente escenario: {escenario[idx][0]}."

explicacion: |
  El resultado neto es el resultado final después de restar los impuestos al resultado antes de impuestos. Si hay pérdida, generalmente no se calcula impuesto sobre la renta (dependiendo de la legislación local, pero en ejercicios académicos se asume que no se resta impuesto a una pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "contabilidad"]

respuesta: "flujo"
tipo: completar
respuestas_validas: ["flujo", "flujo de fondos", "flujo de caja"]

enunciado: "A diferencia del Balance General, que muestra la situación patrimonial en un momento dado, el Estado de Resultados muestra el ___ de ingresos y gastos durante un período determinado."

explicacion: |
  El Balance General es una "foto" estática, mientras que el Estado de Resultados es un "video" que registra el flujo de transacciones en un tiempo determinado.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["rentabilidad", "liquidez"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[true, false], [false, true]]

respuesta: "escenarios[escenario_idx][0]"
tipo: mc
opciones_explicitas: ["La utilidad neta indica la liquidez inmediata de la empresa", "La utilidad neta indica la rentabilidad del período, no necesariamente el efectivo disponible"]

enunciado: "Si una empresa reporta una utilidad neta positiva pero tiene problemas para pagar sus deudas corrientes, ¿qué concepto se está diferenciando correctamente?"

explicacion: |
  El principio del devengado implica que los ingresos y gastos se registran cuando ocurren, independientemente de si hubo movimiento de efectivo o no.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el Resultado del Ejercicio se obtiene simplemente restando el Activo del Pasivo?"

explicacion: |
  Falso. La diferencia entre Activo y Pasivo es el Patrimonio Neto. El Resultado del Ejercicio se obtiene de la diferencia entre Ingresos y Gastos en el Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar
opciones_explicitas: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los conceptos según la estructura lógica de un Estado de Resultados para determinar la utilidad operativa:"

explicacion: |
  La estructura sigue un orden descendente: primero se determinan las ventas, se restan los costos directos para obtener la utilidad bruta, y luego se restan los gastos de administración y ventas para llegar a la utilidad operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["costos", "clasificacion"]

variables:
  tipo_item_idx: uno_de([0, 1])
  items: [[0, 1], [1, 0]]

respuesta: "items[tipo_item_idx][0]"
tipo: mc
opciones_explicitas: ["Costo", "Gasto"]

enunciado: "En el Estado de Resultados, el concepto que se relaciona directamente con el ingreso por ventas para determinar la utilidad bruta se denomina ___."

explicacion: |
  El 'Costo' (como el CMV) está directamente vinculado a la producción o adquisición de lo vendido, mientras que el 'Gasto' suele referirse a consumos para la estructura operativa (administración/ventas).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "utilidad_bruta"]

variables:
  escenario: [[150000, 85000, 45000], [200000, 120000, 30000], [180000, 90000, 55000]]
  idx: uno_de([0, 1, 2])
  ventas: escenario[idx][0]
  costo_ventas: escenario[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa reporta en su estado de resultados un total de ventas de ${ventas} y un costo de ventas de ${costo_ventas}. ¿Cuál es el monto de la utilidad bruta?"

explicacion: |
  La utilidad bruta se calcula restando el costo de ventas de los ingresos totales por ventas:
  Utilidad Bruta = Ventas - Costo de Ventas
  En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "gastos"]

respuesta: "Gastos Operativos"
tipo: mc
opciones_explicitas: ["Costo de Ventas", "Gastos Operativos", "Ingresos No Operativos"]

enunciado: "Si una empresa tiene un listado de pagos por sueldos administrativos, alquiler de oficinas y servicios de luz para la administración, ¿en qué categoría del estado de resultados se clasifican principalmente?"

explicacion: |
  Los gastos de administración, ventas y financieros se agrupan como Gastos Operativos, a diferencia del Costo de Ventas que está directamente ligado a la producción o adquisición de bienes vendidos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado_neto", "perdida"]

variables:
  datos: [[5000, 8000], [12000, 10000], [4500, 4500]]
  idx: uno_de([0, 1, 2])
  ingresos: datos[idx][0]
  gastos: datos[idx][1]

respuesta: ingresos > gastos
tipo: completar
enunciado: "Considerando que los ingresos totales son ${ingresos} y los gastos totales son ${gastos}, ¿el resultado del ejercicio es una utilidad (ganancia)?"

explicacion: |
  Para que haya utilidad, los ingresos deben ser mayores que los gastos. 
  En este escenario: ${ingresos} > ${gastos} es ${ingresos > gastos}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["orden", "estructura"]

respuesta: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los siguientes conceptos según la secuencia lógica de presentación en un Estado de Resultados convencional (de mayor a menor margen):"

explicacion: |
  La estructura lógica comienza con el ingreso principal (Ventas), se le resta el costo directo para obtener la Utilidad Bruta, luego se restan los gastos operativos para llegar a la Utilidad Operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["utilidad_neta", "impuestos"]

variables:
  escenario: [[10000, 2000], [15000, 3000], [8000, 1500]]
  idx: uno_de([0, 1, 2])
  utilidad_antes_imp: escenario[idx][0]
  impuesto_tasa: 0.30

respuesta: utilidad_antes_imp * (1 - impuesto_tasa)

tipo: completar
respuestas_validas: [7000, 10500, 5600]

enunciado: "Si una empresa obtiene una utilidad antes de impuestos de ${utilidad_antes_imp} y debe afrontar una tasa impositiva del 30%, el valor de la utilidad neta es ___"

explicacion: |
  La utilidad neta se obtiene aplicando la tasa impositiva sobre la utilidad antes de impuestos:
  Utilidad Neta = Utilidad Antes de Impuestos * (1 - Tasa)
  En este caso: ${utilidad_antes_imp} * (1 - 0.30) = ${utilidad_antes_imp * 0.7}.
```

## Sección: estados-contables (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"
  - "El período de un año calendario, sin más"
  - "El nombre de un software de contabilidad"
respuesta: "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"

explicacion: |
  Conecta todos los pasos ya vistos por separado (asiento, Diario,
  Mayor) con los estados contables finales.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo contable, del primero al último."
opciones_explicitas:
  - "Se arman los estados contables"
  - "Ocurre el hecho económico"
  - "Se pasa la información al Libro Mayor"
  - "Se registra el asiento en el Libro Diario"
respuesta_orden: ["Ocurre el hecho económico", "Se registra el asiento en el Libro Diario", "Se pasa la información al Libro Mayor", "Se arman los estados contables"]

explicacion: |
  Cada paso depende del anterior: sin el hecho económico no hay
  asiento, sin asiento no hay mayor, sin mayor no hay estados
  contables.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Situación Patrimonial?"
tipo: mc
opciones_explicitas:
  - "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Sólo las cuentas de Caja y Bancos"
respuesta: "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"

explicacion: |
  Es una fotografía, no una película: describe un momento, no un
  período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Una foto de un instante puntual de la empresa"
  - "Sólo los préstamos pendientes de pago"
respuesta: "Todo lo que ganó y gastó la empresa durante un período completo"

explicacion: |
  Es una película de un período (un mes, un año), no una foto de un
  instante.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Estado de Situación Patrimonial se arma con la misma ecuación ya vista en Debe y Haber: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Es la misma ecuación contable fundamental, aplicada acá como
  producto final del ciclo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 900) * 1000
  pasivo: random(100, 400) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Activo de ${activo} y un Pasivo de ${pasivo}. ¿Cuál es su Patrimonio Neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo, despejando la ecuación contable.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 400) * 1000
  patrimonio_neto: random(200, 600) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Pasivo de ${pasivo} y un Patrimonio Neto de ${patrimonio_neto}. ¿Cuál es su Activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto, aplicando la ecuación directo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuándo una empresa tiene ganancia en el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Cuando los Ingresos son mayores que los Gastos"
  - "Cuando el Activo es mayor que el Pasivo"
  - "Cuando el Pasivo es igual a cero"
respuesta: "Cuando los Ingresos son mayores que los Gastos"

explicacion: |
  Resultado = Ingresos - Gastos; si da positivo, es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(300, 700) * 1000
  gastos: random(100, 250) * 1000

respuesta: ingresos - gastos
tipo: input
tolerancia_abs: 0

enunciado: "Durante el mes, una empresa tuvo Ingresos por ${ingresos} y Gastos por ${gastos}. ¿Cuál es su resultado del período?"

explicacion: |
  Resultado = Ingresos - Gastos. Un número positivo es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(100, 400) * 1000
  gastos: random(300, 700) * 1000
  resultado: ingresos - gastos

respuesta: (resultado < 0)
tipo: vf

enunciado: "Una empresa tuvo Ingresos de ${ingresos} y Gastos de ${gastos} en el período. ¿Es correcto decir que tuvo una pérdida?"

explicacion: |
  Se compara Ingresos contra Gastos: si Gastos es mayor, el resultado
  es negativo, o sea pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Para qué sirve el balance de comprobación, dentro del ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"
  - "Para calcular el impuesto a las ganancias del período"
  - "Para registrar un nuevo asiento contable"
respuesta: "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"

explicacion: |
  Es un control: si no coinciden, hay un error de carga en algún
  asiento del período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué son los ajustes de cierre, en el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"
  - "Los primeros asientos que se cargan al empezar un ejercicio"
  - "Un tipo de impuesto que paga la empresa"
respuesta: "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"

explicacion: |
  No vienen de un movimiento nuevo, sino de reconocer contablemente
  algo que ya venía ocurriendo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al cerrar el ejercicio, el resultado del período (ganancia o pérdida) pasa a formar parte del Patrimonio Neto."

explicacion: |
  Es el punto donde se conectan los dos estados contables: lo que
  ganó o perdió la empresa modifica lo que le queda a los dueños.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene ganancia en un período, su Patrimonio Neto aumenta al cerrar el ejercicio."

explicacion: |
  La ganancia se suma al Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene pérdida en un período, su Patrimonio Neto se reduce al cerrar el ejercicio."

explicacion: |
  La pérdida se resta del Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  patrimonio_inicial: random(500, 900) * 1000
  ingresos: random(200, 500) * 1000
  gastos: random(50, 180) * 1000

respuesta: patrimonio_inicial + (ingresos - gastos)
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa arrancó el período con un Patrimonio Neto de ${patrimonio_inicial}. Durante el período tuvo Ingresos de ${ingresos} y Gastos de ${gastos}. ¿Cuál es su Patrimonio Neto al cierre?"

pasos:
  - "Resultado del período: {ingresos} - {gastos} = {ingresos - gastos}"
  - "Patrimonio final: {patrimonio_inicial} + {ingresos - gastos}"

explicacion: |
  El Patrimonio Neto final es el inicial más el resultado del
  período (que puede ser positivo o negativo).
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuál de estas comparaciones describe mejor la diferencia entre el Estado de Situación Patrimonial y el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"
  - "El Patrimonial es mensual y el de Resultados es siempre anual"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"

explicacion: |
  Es la metáfora central del tema: uno describe un momento, el otro
  describe un tramo de tiempo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un banco quiere saber qué tiene y qué debe una empresa HOY antes de decidir si le da un crédito. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Situación Patrimonial"
  - "El Estado de Resultados"
  - "El balance de comprobación únicamente"
respuesta: "El Estado de Situación Patrimonial"

explicacion: |
  Es la foto del instante presente: exactamente lo que necesita el
  banco para esa decisión.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un inversor quiere saber si una empresa gana o pierde plata de forma sostenida en los últimos años. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Resultados de varios períodos"
  - "El Estado de Situación Patrimonial de un solo día"
  - "El Libro Diario del último mes"
respuesta: "El Estado de Resultados de varios períodos"

explicacion: |
  Muestra la evolución de ganancias y pérdidas período a período, que
  es justo lo que necesita evaluar.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad"]

variables:
  ingresos: random(200, 600) * 1000
  gastos: random(50, 150) * 1000
  resultado: ingresos - gastos

tipo: completar
enunciado: "Completá: Resultado = {ingresos} - {gastos} = ___ (resultado)."
respuestas_validas:
  - resultado

explicacion: |
  Es la aplicación directa de la fórmula del Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo es el PROCESO, y los estados contables (patrimonio y resultados) son el PRODUCTO de ese proceso: por eso se enseñan como un solo tema."

explicacion: |
  Es la idea central que conecta las dos partes del título de este
  tema.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo va desde que ocurre un movimiento económico (asiento, Diario, Mayor) hasta que se arman los estados contables finales de la empresa."

explicacion: |
  Es el resumen de todo el recorrido de esta sub-rama de Contabilidad.
```

## Sección: estructura-del-patrimonio (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion_patrimonial"]

respuesta: verdadero
tipo: vf

enunciado: "El patrimonio neto es igual a los activos menos los pasivos."

explicacion: |
  Esta es la ecuación patrimonial fundamental: Pat = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)
  pasivo: activo - patrimonio

respuesta: pasivo
tipo: input

enunciado: "Una empresa tiene un activo total de ${activo} y un patrimonio neto de ${patrimonio}. ¿Cuál es el total de sus pasivos?"

explicacion: |
  Si Activo - Pasivo = Patrimonio, entonces Pasivo = Activo - Patrimonio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["interpretacion", "insolvencia"]

respuesta: falso
tipo: vf

enunciado: "Si el patrimonio neto es negativo, la empresa tiene más bienes que deudas."

explicacion: |
  Patrimonio negativo significa que los pasivos superan a los activos (Activo < Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(50000, 200000)
  patrimonio: random(10000, 50000)
  activo: pasivo + patrimonio

respuesta: activo
tipo: input

enunciado: "Si el pasivo total es ${pasivo} y el patrimonio neto es ${patrimonio}, ¿cuál es el activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["variacion", "ganancia"]

variables:
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  ganancia: random(10000, 50000)
  activo_final: activo_inicial + ganancia
  pasivo_final: pasivo_inicial
  pat_inicial: activo_inicial - pasivo_inicial
  pat_final: activo_final - pasivo_final
  variacion: pat_final - pat_inicial

respuesta: variacion
tipo: input

enunciado: "Si una empresa tiene Activo {activo_inicial} y Pasivo {pasivo_inicial}, y luego obtiene una ganancia de {ganancia} que aumenta su activo, ¿cuánto aumentó su patrimonio neto?"

explicacion: |
  Al aumentar el activo sin cambiar el pasivo, el patrimonio neto aumenta exactamente por el monto de la ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "financiamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El financiamiento de una empresa proviene de sus acreedores (pasivo) y de sus dueños (patrimonio)."

explicacion: |
  Correcto. Los activos se financian con deuda externa e interna.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["calculo", "agregacion"]

variables:
  activo_caja: random(5000, 20000)
  activo_banco: random(10000, 50000)
  activo_inventario: random(20000, 100000)
  activo_maquinaria: random(50000, 200000)
  pasivo_proveedores: random(5000, 20000)
  pasivo_prestamo: random(10000, 50000)
  
  activo_total: activo_caja + activo_banco + activo_inventario + activo_maquinaria
  pasivo_total: pasivo_proveedores + pasivo_prestamo
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Caja: {activo_caja}, Activo Banco: {activo_banco}, Activo Inventario: {activo_inventario}, Activo Maquinaria: {activo_maquinaria}. Pasivo Proveedores: {pasivo_proveedores}, Pasivo Préstamo: {pasivo_prestamo}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar todos los activos, restar todos los pasivos. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "balance"]

variables:
  monto: random(10000, 50000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial + monto
  pasivo_final: pasivo_inicial + monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa compra un activo de ${monto} a crédito, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al aumentar activo y pasivo en la misma cantidad, la diferencia (patrimonio) no cambia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["solvencia", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrimonio neto negativo puede indicar que la empresa es insolvente técnicamente."

explicacion: |
  Si Pasivo > Activo, la empresa no tiene suficiente para cubrir sus deudas con sus propios bienes, lo que es un riesgo de insolvencia técnica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo_circulante"]

variables:
  activo_total: random(200000, 500000)
  activo_no_circulante: random(50000, 200000)
  activo_circulante: activo_total - activo_no_circulante

respuesta: activo_circulante
tipo: input

enunciado: "El activo total es ${activo_total} y el no circulante es ${activo_no_circulante}. ¿Cuánto es el activo circulante?"

explicacion: |
  Activo Circulante = Activo Total - Activo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["principio", "doble entrada"]

respuesta: verdadero
tipo: vf

enunciado: "Todo activo está financiado por pasivos o patrimonio."

explicacion: |
  Es la base de la partida doble: no hay activo sin una fuente de financiamiento (deuda o capital propio).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo_circulante"]

variables:
  pasivo_total: random(100000, 300000)
  pasivo_no_circulante: random(20000, 100000)
  pasivo_circulante: pasivo_total - pasivo_no_circulante

respuesta: pasivo_circulante
tipo: input

enunciado: "Si el pasivo total es ${pasivo_total} y el no circulante es ${pasivo_no_circulante}, ¿cuánto es el pasivo circulante?"

explicacion: |
  Pasivo Circulante = Pasivo Total - Pasivo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

variables:
  monto: random(5000, 20000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial - monto
  pasivo_final: pasivo_inicial - monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa paga ${monto} de su deuda, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al bajar activo y pasivo en la misma cantidad, el patrimonio neto permanece igual.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["activo", "efectivo"]

respuesta: verdadero
tipo: vf

enunciado: "El efectivo en caja es un activo circulante."

explicacion: |
  El efectivo es el activo más líquido y se usa inmediatamente, por lo que es circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["capital", "variacion"]

variables:
  activo: random(200000, 500000)
  pasivo: random(50000, 150000)
  capital_inicial: random(50000, 100000)
  nueva_inversion: random(10000, 50000)
  activo_final: activo + nueva_inversion
  pasivo_final: pasivo
  capital_final: activo_final - pasivo_final
  incremento_patrimonio: capital_final - (activo - pasivo)

respuesta: nueva_inversion
tipo: input

enunciado: "Si se realiza una nueva inversión de ${nueva_inversion} en efectivo que aumenta el activo, ¿cuánto aumenta el patrimonio neto?"

explicacion: |
  La inversión de los dueños aumenta el activo y el patrimonio neto en la misma cuantía.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "propiedad"]

respuesta: falso
tipo: vf

enunciado: "El pasivo representa la propiedad de los accionistas sobre los activos."

explicacion: |
  El patrimonio neto representa la propiedad de los accionistas. El pasivo representa la deuda con terceros.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "balance"]

variables:
  activo_circulante: random(50000, 150000)
  activo_no_circulante: random(100000, 300000)
  pasivo_circulante: random(20000, 80000)
  pasivo_no_circulante: random(30000, 100000)
  
  activo_total: activo_circulante + activo_no_circulante
  pasivo_total: pasivo_circulante + pasivo_no_circulante
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Circulante: {activo_circulante}, Activo No Circulante: {activo_no_circulante}, Pasivo Circulante: {pasivo_circulante}, Pasivo No Circulante: {pasivo_no_circulante}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar activos totales, restar pasivos totales. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion", "contabilidad", "completar"]

respuesta: "Pasivo"
tipo: completar

enunciado: "Completa la ecuación fundamental: Activo = Patrimonio Neto + _______."

respuestas_validas:
  - "Pasivo"
  - "pasivo"
  - "pasivos"

explicacion: |
  La ecuación patrimonial básica establece que lo que tiene la empresa (Activo) se financia con
  recursos propios (Patrimonio) y recursos de terceros (Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["pasivo", "clasificacion", "completar"]

respuesta: "Circulante"
tipo: completar

enunciado: "Los pasivos que vencen en menos de un año se clasifican como Pasivo _______."

respuestas_validas:
  - "Circulante"
  - "circulante"
  - "corriente"
  - "corriente"

explicacion: |
  Los pasivos de corto plazo se denominan Pasivo Circulante (o Corriente).
  Los de largo plazo son Pasivo No Circulante (o Largo Plazo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["patrimonio", "componentes", "completar"]

respuesta: "Utilidades"
tipo: completar

enunciado: "Además del capital social, las _______ acumuladas forman parte del patrimonio neto."

respuestas_validas:
  - "Utilidades"
  - "utilidades"
  - "ganancias"
  - "ganancias"

explicacion: |
  El patrimonio neto incluye el capital aportado y las utilidades (o pérdidas) acumuladas de la empresa.
```
