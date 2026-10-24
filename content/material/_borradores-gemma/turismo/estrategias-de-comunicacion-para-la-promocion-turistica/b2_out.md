### 1 — El Mix de Medios en el Destino "Costa Azul"
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["mix_de_medios", "promocion"]

variables:
  escenario: uno_de([
    ["Instagram", "Influencers", "Visual"],
    ["Radio local", "Pautas en radio", "Auditivo"],
    ["Email Marketing", "Newsletter", "Directo"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Un destino busca captar público joven mediante una estrategia de redes sociales utilizando {escenario[idx][0]} a través de {escenario[idx][1]} para lograr un impacto {escenario[idx][2]}."

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["Visual", "Auditivo", "Directo"]

explicacion: |
  La elección del canal determina el tipo de estímulo: Instagram es visual, la radio es auditiva y el email es comunicación directa.
```

### 2 — Secuencia de una Campaña de Branding
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["branding", "fases"]

enunciado: "Para promocionar un nuevo destino emergente, se debe seguir un orden lógico de comunicación para construir el posicionamiento. Ordene las siguientes fases:"

opciones_explicitas: ["Reconocimiento", "Consideración", "Conversión"]
respuesta: ["Reconocimiento", "Consideración", "Conversión"]
tipo: ordenar

explicacion: |
  Primero se debe crear conciencia (Reconocimiento), luego el turista evalúa la opción (Consideración) y finalmente realiza la reserva (Conversión).
```

### 3 — Verdad o Falso: Segmentación de Audiencias
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["segmentacion", "audiencia"]

variables:
  caso_segmentacion: uno_de([
    ["turismo_de_aventura", "jovenes"],
    ["turismo_gastronomico", "adultos"],
    ["turismo_religioso", "seniors"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si aplicamos una estrategia de comunicación para {caso_segmentacion[idx][0]}, el público objetivo principal será compuesto por {caso_segmentacion[idx][1]}. ¿Es esto correcto?"

respuesta: verdadero
tipo: vf

explicacion: |
  La segmentación permite dirigir el mensaje al perfil demográfico o psicográfico que tiene mayor probabilidad de interés en el producto turístico.
```

### 4 — El Concepto de USP (Unique Selling Proposition)
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["propuesta_valor", "marketing"]

enunciado: "Un destino que se promociona destacando que es 'el único lugar con playas de arena negra en la región' está utilizando una estrategia basada en su ___."

respuestas_validas: ["Propuesta Única de Venta"]
tipo: completar

explicacion: |
  La Propuesta Única de Venta (USP) se enfoca en un atributo diferenciador que la competencia no posee, facilitando la decisión de compra.
```

### 5 — Presupuesto de Pauta Digital
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["presupuesto", "roi"]

variables:
  datos: [
    [1000, 50], 
    [2500, 120], 
    [5000, 300]
  ]
  idx: uno_de([0, 1, 2])

enunciado: "Si un destino invierte {datos[idx][0]} USD en una campaña de Google Ads y obtiene {datos[idx][1]} reservas directas, el costo por reserva (CPA) es de ___ USD."

pasos:
  - "Dividir el presupuesto total invertido por la cantidad de reservas obtenidas."

respuesta: redondear(datos[idx][0] / datos[idx][1], 2)
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El cálculo del Costo por Adquisición (CPA) es vital para medir la eficiencia de la inversión publicitaria en el sector turístico.
```