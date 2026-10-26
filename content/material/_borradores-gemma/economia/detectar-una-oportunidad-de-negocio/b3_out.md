### 1 — El mito de la idea brillante
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "error_comun"]

respuesta: "necesidad"
tipo: "completar"
respuestas_validas: ["necesidad", "problema"]

enunciado: "Un error común en el emprendimiento es centrarse exclusivamente en tener una idea innovadora y brillante, cuando el foco real debe estar en resolver una ___ insatisfecha en el mercado."

explicacion: |
  Una idea por sí sola no tiene valor si no resuelve un problema o satisface una necesidad real de un grupo de personas.
```

### 2 — Idea vs Oportunidad
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["conceptos_clave", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un inventor crea un dispositivo para limpiar nubes, pero nadie está dispuesto a pagarlo.", "falso"],
    ["Un emprendedor nota que en su barrio no hay lavanderías y abre una con alta demanda.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "vf"

enunciado: "Si un producto es altamente innovador pero no existe un segmento de clientes con la disposición y capacidad de pago para adquirirlo, ¿podemos decir que se ha detectado una oportunidad de negocio real? {escenarios[escenario_idx][0]}"

explicacion: |
  Para que una idea sea oportunidad, debe haber un mercado (clientes con necesidad y capacidad de pago).
```

### 3 — El sesgo del producto
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["enfoque_cliente"]

respuesta: "solución"
tipo: "completar"
respuestas_validas: ["solución", "solucion"]

enunciado: "Muchos emprendedores cometen el error de enamorarse de su ___ (el producto) en lugar de enamorarse del problema del cliente."

explicacion: |
  El producto puede cambiar (pivotar), pero el problema que resuelves debe ser el centro de tu estrategia.
```

### 4 — Pasos para la validación
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

opciones_explicitas: ["Observar el mercado y detectar dolores", "Desarrollar el producto final con todo el capital", "Lanzar una campaña de marketing masiva", "Crear un plan de negocios de 50 páginas"]
respuesta: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio de manera eficiente, evitando el desperdicio de recursos:"

explicacion: |
  La validación debe ser incremental: primero entiendes el problema, luego pruebas una solución mínima y finalmente escalas.
```

### 5 — El error de la observación pasiva
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["investigacion", "errores"]

respuesta: "falso"
tipo: "vf"

enunciado: "¿Es suficiente con observar cómo se comporta la competencia para identificar una oportunidad de negocio única? falso"

explicacion: |
  Observar a la competencia es útil, pero centrarse solo en ellos puede llevarte a copiar modelos existentes en lugar de descubrir necesidades que la competencia está ignorando.
```