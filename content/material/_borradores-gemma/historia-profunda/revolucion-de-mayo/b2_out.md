### 1 — El vacío de poder en España
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["contexto", "napoleon", "monarquia"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas: ["Napoleón Bonaparte", "Napoleón"]

enunciado: "La invasión de ___ a España en 1808 provocó una crisis de legitimidad que debilitó el control sobre las colonias americanas."

explicacion: |
  La invasión napoleónica a España y la captura del rey Fernando VII crearon un vacío de poder que las élites criollas utilizaron para cuestionar la autoridad colonial.
```

### 2 — Consecuencia de la crisis monárquica
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "autoridad", "colonia"]

opciones_explicitas: ["Se fortaleció el control absoluto de la metrópoli", "Se produjo un debilitamiento de la autoridad real sobre las colonias", "Se unificaron los ejércitos de España y América"]
respuesta: "Se produjo un debilitamiento de la autoridad real sobre las colonias"
tipo: mc

enunciado: "¿Cuál fue la consecuencia directa de la crisis de la monarquía española en 1808 respecto a sus territorios en América?"

explicacion: |
  Al no haber un rey legítimo en el trono, las autoridades coloniales perdieron su fuente de legitimidad, lo que permitió que los cabildos empezaran a reclamar autonomía.
```

### 3 — El orden de los eventos
```
metadata:
  materia: "historia_profucha"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "causas"]

opciones_explicitas: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
respuesta: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
tipo: ordenar

enunciado: "Ordena cronológicamente los sucesos que desencadenaron el proceso revolucionario:"

explicacion: |
  Primero ocurrió la invasión de Napoleón, esto generó la crisis de legitimidad en España y finalmente ese vacío de poder facilitó la Revolución de Mayo en el Virreinato.
```

### 4 — La legitimidad del poder
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "derecho"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1]
tabla:
  - ["La autoridad reside en el Rey", "La soberanía recae en el pueblo"]
tipo: mc

opciones_explicitas: ["La autoridad reside en el Rey", "La soberanía recae en el pueblo"]

enunciado: "Ante la ausencia del rey, los criollos aplicaron la idea de que la soberanía debe volver al ___."

explicacion: |
  El concepto de 'retroversión de la soberanía' sostenía que, ante la falta del monarca, el poder volvía al pueblo, lo que justificó la formación de juntas.
```

### 5 — El impacto de la crisis
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["causas", "impacto"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Si la invasión napoleónica debilitó la autoridad de España, la probabilidad de una revolución en América fue (0: nula / 1: alta). Indica el número de la opción correcta."

explicacion: |
  La debilidad de la metrópoli fue el catalizador fundamental que permitió que las aspiraciones de autonomía se transformaran en una revolución política.
```