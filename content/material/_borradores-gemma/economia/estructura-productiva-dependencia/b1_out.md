### 1 — El modelo agroexportador y la estructura heredada
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportador"]

respuesta: "primarias"
tipo: completar
respuestas_validas: ["primarias"]

enunciado: "La estructura productiva argentina, consolidada durante el modelo agroexportador, se caracterizó por una fuerte especialización en la exportación de productos de naturaleza ___."

explicacion: |
  El modelo agroexportador (1880-1930) posicionó a Argentina como el "granero del mundo", basando su economía en la exportación de materias primas (cereales, carnes) hacia Europa, lo que generó una dependencia estructural de los sectores primarios.
```

### 2 — Dependencia de precios internacionales
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["commodities", "volatilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["soja", "caída"], ["trigo", "subida"]]
  efecto: [["menor ingreso de divisas", "mayor ingreso de divisas"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["datos[0][1]", "datos[1][1]", "sin cambios"]

enunciado: "Si el precio internacional de la {datos[escenario_idx][0]} sufre una {datos[escenario_idx][1]}, el efecto inmediato en la balanza comercial argentina es un ___."

pasos:
  - "Identificar el commodity y la tendencia del precio."
  - "Relacionar el precio del producto de exportación con el ingreso de divisas."

explicacion: |
  Dado que Argentina es un exportador neto de commodities, la volatilidad de los precios internacionales impacta directamente en la recaudación fiscal y la disponibilidad de dólares (divisas).
```

### 3 — Caracterización de la estructura productiva
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "commodities"]

respuesta: "Dependencia de los precios de los commodities"
tipo: mc
opciones_explicitas: ["Diversificación industrial avanzada", "Dependencia de los precios de los commodities", "Autosuficiencia tecnológica"]

enunciado: "¿Cuál es la principal vulnerabilidad de una estructura productiva basada en la exportación de materias primas?"

explicacion: |
  La falta de valor agregado en las exportaciones hace que la economía sea altamente sensible a los ciclos de precios internacionales, fenómeno conocido como la "vulnerabilidad externa".
```

### 4 — Secuencia de la dinámica exportadora
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclos_economicos", "exportación"]

opciones_explicitas: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
respuesta: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
tipo: ordenar

enunciado: "Ordene cronológicamente la cadena de efectos que genera un ciclo alcista en la economía argentina basado en el modelo agroexportador:"

explicacion: |
  Un aumento en la demanda mundial de productos agrícolas eleva los precios de los commodities, lo que permite un mayor ingreso de divisas al país, impulsando finalmente el crecimiento económico interno.
```

### 5 — El valor agregado y la exportación
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["valor_agregado", "industria"]

respuesta: "bajo"
tipo: completar
respuestas_validas: ["bajo", "nulo"]

enunciado: "La estructura productiva heredada presenta un perfil de exportación con un ___ grado de valor agregado, lo que se traduce en una mayor dependencia de la demanda externa de materias primas."

explicacion: |
  A diferencia de las economías industrializadas, la estructura argentina exporta mayoritariamente bienes con poco procesamiento industrial, lo que limita la capacidad de captura de valor en la cadena global.
```