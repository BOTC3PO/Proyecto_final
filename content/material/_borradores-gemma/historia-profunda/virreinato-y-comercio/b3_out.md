### 1 — El Reglamento de 1778
```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "reformas_borbonicas", "virreinato"]

tipo: mc
opciones_explicitas: ["Eliminó por completo el monopolio español", "Amplió el número de puertos autorizados", "Prohibió el comercio con Inglaterra", "Estableció el sistema de flotas y galeones"]

enunciado: "El Reglamento de Libre Comercio de 1778 tuvo como objetivo principal..."

explicacion: |
  El reglamento no eliminó el monopolio, sino que flexibilizó el sistema permitiendo que más puertos (como Buenos Aires) participaran en el comercio transatlántico, aunque manteniendo el control de la metrópoli.
```

### 2 — Impacto en Buenos Aires
```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["buenos_aires", "puertos", "comercio"]

variables:
  escenario: uno_de([
    ["puerto de Cádiz", "puerto de Buenos Aires"],
    ["comercio restringido", "comercio ampliado"]
  ])

tipo: completar
respuestas_validas: ["puerto de Buenos Aires"]

enunciado: "Gracias a las reformas borbonicas, el ___ obtuvo un rol protagónico como salida de productos hacia el Atlántico."

explicacion: |
  La apertura de nuevos puertos allowed que Buenos Aires creciera económicamente al dejar de depender exclusivamente del sistema de flotas hacia un solo puerto en España.
```

### 3 — Dinámica Comercial
```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "reformas"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "¿El Reglamento de Libre Comercio de 1778 significó la desaparición total del monopolio comercial español en América?"

explicacion: |
  Falso. El sistema de monopolio persistió, solo se expandió la red de puertos y rutas permitidas; el control de la Corona sobre el comercio seguía siendo la norma.
```

### 4 — Secuencia de Reformas
```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["procesos", "reformas_borbonicas"]

tipo: ordenar
opciones_explicitas: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]

enunciado: "Ordene cronológicamente la evolución del sistema comercial en el Virreinato del Río de la Plata:"

explicacion: |
  Primero existía el monopolio estricto de flotas; luego el Reglamento de 1778 permitió el libre comercio entre puertos españoles; y finalmente esto consolidó a Buenos Aires como puerto principal.
```

### 5 — El factor económico
```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "impuestos"]

variables:
  valor_impuesto: uno_de([
    ["aumento", "disminución"]
  ])

tipo: input
tolerancia_abs: 0

enunciado: "La implementación de nuevos puertos y la mayor actividad comercial trajeron un ___ en la recaudación de aduanas para la Corona."

pasos:
  - "Analizar el impacto de la mayor circulación de mercancías en los puertos autorizados."
  - "Relacionar el volumen de carga con la recaudación fiscal."

explicacion: |
  Al haber más barcos y más puertos operando legalmente, el volumen de mercancías aumentó, lo que derivó en un aumento de la recaudación de impuestos (alcabala y derechos de puerto).
```