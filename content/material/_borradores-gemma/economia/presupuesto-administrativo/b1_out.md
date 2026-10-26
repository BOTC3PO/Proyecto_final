### 1 — Definición de Presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas: ["estimación anticipada de ingresos y gastos", "estimación de ingresos y gastos"]

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicación: |
  El presupuesto es la herramienta de planificación que permite proyectar los recursos que entrarán (ingresos) y los que saldrán (gastos) de una organización.
```

### 2 — Componentes del Presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes", "ingresos", "gastos"]

opciones_explicitas: ["Ingresos y Gastos", "Activos y Pasivos", "Oferta y Demanda"]
respuesta: "Ingresos y Gastos"
tipo: mc

enunciado: "Un presupuesto se compone fundamentalmente de dos tipos de flujos: los ___."

explicación: |
  Los ingresos representan las entradas de dinero, mientras que los gastos representan las salidas de recursos necesarias para la operación.
```

### 3 — Carácter del Presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["naturaleza", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El presupuesto tiene un carácter preventivo, ya que se elabora antes de que ocurran los hechos económicos."

explicación: |
  Correcto. Al ser una herramienta de planificación, su objetivo es anticiparse a los eventos para tomar decisiones informadas.
```

### 4 — Etapas del Ciclo Presupuestario
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestario"]

opciones_explicitas: ["Elaboración", "Ejecución", "Control"]
respuesta: ["Elaboración", "Ejecución", "Control"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas principales del ciclo presupuestario:"

explicación: |
  Primero se planifica (elaboración), luego se pone en marcha (ejecución) y finalmente se compara lo real con lo proyectado (control).
```

### 5 — Desviaciones Presupuestarias
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["desviaciones", "control"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario[0]][1]
tipo: mc
opciones_explicitas: ["Favorable", "Desfavorable"]

enunciado: "Si los ingresos reales son menores a los presupuestados, la desviación se considera: ___"

pasos:
  - "Comparar el valor real obtenido con el valor estimado."
  - "Determinar si la diferencia impacta positivamente o negativamente en el saldo."

tabla:
  - ["Ingresos reales > Ingresos presupuestados", "Favorable"]
  - ["Ingresos reales < Ingresos presupuestados", "Desfavorable"]

explicación: |
  Una desviación es favorable cuando el resultado real mejora la posición financiera respecto al plan, y desfavorable cuando la empeora.
```