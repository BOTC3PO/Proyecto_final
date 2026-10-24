### 1 — Definición de Control de Gestión
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas: ["proceso"]

enunciado: "El control de gestión se define como el ________ de recolectar, analizar y utilizar información para asegurar que la organización alcance sus objetivos."

explicacion: |
  El control de gestión es un proceso continuo que permite comparar el desempeño real con los planes establecidos para tomar medidas correctivas.
```

### 2 — Tipos de Indicadores
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "KPI"]

variables:
  tipo_indicador: uno_de(["eficiencia", "eficacia"])

respuesta: uno_de(["eficiencia", "eficacia"])
tipo: "mc"
opciones_explicitas: ["eficiencia", "eficacia", "efectividad"]

enunciado: "Si una empresa logra sus objetivos de ventas utilizando la menor cantidad de recursos posibles, está demostrando un alto nivel de {tipo_indicador}."

explicacion: |
  La eficiencia se refiere a la relación entre los resultados obtenidos y los recursos utilizados. La eficacia, en cambio, se centra solo en el cumplimiento del objetivo.
```

### 3 — El Cuadro de Mando Integral
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["balanced_scorecard", "perspectivas"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿El Cuadro de Mando Integral (Balanced Scorecard) propone medir a la organización únicamente desde una perspectiva financiera?"

explicacion: |
  Falso. El Balanced Scorecard integra cuatro perspectivas: Financiera, Cliente, Procesos Internos y Aprendizaje/Crecimiento.
```

### 4 — Ciclo de Gestión
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["ciclo_pdca", "gestion"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordene las etapas del ciclo PHVA (Ciclo de Deming) para asegurar la mejora continua en el control de gestión:"

explicacion: |
  El ciclo PHVA (Plan, Do, Check, Act) es la base de la mejora continua: se planifica, se ejecuta, se verifica el resultado y se actúa sobre las desviaciones.
```

### 5 — Desviaciones en el Control
```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["desviacion", "analisis"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla_desviacion[escenario][1]
tipo: "mc"
opciones_explicitas: ["Positiva", "Negativa", "Nula"]

variables_aux:
  tabla_desviacion: [["Positiva", "Positiva"], ["Negativa", "Negativa"]]

enunciado: "En un escenario donde el gasto real es mayor al presupuesto planificado, la desviación presupuestaria es considerada: {uno_de(['Positiva', 'Negativa'])}."

explicacion: |
  En términos de control de costos, una desviación negativa suele indicar que se ha excedido el presupuesto, lo cual requiere una acción correctiva.
```