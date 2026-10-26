### 1 — El ascenso de Perón
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["peronismo", "politica", "argentina"]

respuesta: "Juan Domingo Perón"
tipo: completar
respuestas_validas: ["Juan Domingo Perón"]

enunciado: "El líder que encabezó el movimiento que transformó la estructura política y social de Argentina a partir de 1946 fue ___."

explicacion: |
  Juan Domingo Perón consolidó su poder mediante una fuerte alianza con los sectores obreros, transformando la relación entre el Estado y la clase trabajadora.
```

### 2 — Base social del movimiento
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clase_obrera", "movimiento_sustitutivo"]

opciones_explicitas: ["La oligarquía terrateniente", "La clase trabajadora", "La burguesía industrial", "La clase media profesional"]
respuesta: "La clase trabajadora"
tipo: mc

enunciado: "¿Cuál fue el principal sector social que brindó el sustento político y electoral al peronismo en sus inicios?"

explicacion: |
  El peronismo se caracterizó por la integración política de la clase trabajadora, que hasta entonces había sido marginada de los procesos de decisión estatal.
```

### 3 — Derechos laborales y justicia social
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["justicia_social", "derechos_laborales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["vacaciones pagas", "la implementación de las vacaciones pagas"],
    ["aguinaldo", "la instauración del aguinaldo"]
  ]
  respuestas: [
    ["vacaciones pagas", "la implementación de las vacaciones pagas"],
    ["aguinaldo", "la instauración del aguinaldo"]
  ]

respuesta: "la implementación de las vacaciones pagas"
tipo: completar
respuestas_validas: ["la implementación de las vacaciones pagas", "la instauración del aguinaldo"]

enunciado: "Uno de los grandes hitos de la justicia social peronista fue {escenarios[escenario_idx][1]}."

explicacion: |
  La extensión de derechos como las vacaciones pagas o el aguinaldo permitió una redistribución de la riqueza hacia el consumo interno.
```

### 4 — Pilares de la doctrina
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["doctrina", "peronismo"]

opciones_explicitas: ["Justicia Social, Independencia Económica y Soberanía Política", "Libertad de mercado, Propiedad privada y Globalización", "Estado ausente, Libre comercio y Individualismo", "Autoritarismo, Centralismo y Proteccionismo"]
respuesta: "Justicia Social, Independencia Económica y Soberanía Política"
tipo: mc

enunciado: "¿Cuáles son las tres columnas fundamentales de la doctrina peronista?"

explicacion: |
  Estas tres consignas definieron el programa político de Perón durante sus mandatos, buscando un equilibrio entre el capital y el trabajo.
```

### 5 — Secuencia de consolidación
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["proceso_historico", "ordenar"]

opciones_explicitas: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
respuesta: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron el ascenso y consolidación del peronismo:"

explicacion: |
  El proceso comenzó con la organización de los sindicatos, seguido por la victoria electoral, la implementación de medidas de bienestar y el fomento de la industria para sostener dicho modelo.
```