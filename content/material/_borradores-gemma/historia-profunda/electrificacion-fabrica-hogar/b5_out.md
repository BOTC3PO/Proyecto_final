### 1 — El motor eléctrico en la industria
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["industria", "motor"]

variables:
  escenario: uno_de([["motor_de_induccion", "fábrica"], ["bombilla_incandescente", "hogar"], ["telar_electrico", "fábrica"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["fábrica", "hogar"]

enunciado: "La implementación del {escenario[idx][0]} transformó radicalmente el ámbito de la: ___"

explicacion: |
  El {escenario[idx][0]} fue un pilar fundamental para la automatización en la {escenario[idx][1]}.
```

### 2 — Iluminación y vida doméstica
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["hogar", "iluminacion"]

variables:
  escenario: uno_de([["luz_eléctrica", "hogar"], ["máquina_de_vapor", "fábrica"], ["telégrafo", "comunicación"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["fábrica", "hogar", "comunicación"]

enunciado: "La llegada de la {escenario[idx][0]} permitió extender las actividades nocturnas en el ___."

explicacion: |
  La {escenario[idx][0]} permitió que el ___ cambiara sus hábitos de descanso y ocio.
```

### 3 — Impacto en la producción masiva
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["produccion", "transicion"]

variables:
  escenario: uno_de([["línea_de_montaje", "fábrica"], ["radio_transmisor", "hogar"], ["lavadora", "hogar"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["fábrica", "hogar"]

enunciado: "La electrificación de la {escenario[idx][0]} fue clave para la producción en serie en la: ___"

explicacion: |
  La {escenario[idx][0]} es un ejemplo clásico de la mecanización en la {escenario[idx][1]}.
```

### 4 — Secuencia de la electrificación urbana
```
metadata:
  materia: "historia_profucha"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["orden", "progreso"]

variables:
  secuencia: ["generación_central", "distribución_red", "consumo_final"]
  idx: 0

respuesta: ["generación_central", "distribución_red", "consumo_final"]
tipo: ordenar
opciones_explicitas: ["generación_central", "distribución_red", "consumo_final"]

enunciado: "Ordena el proceso técnico necesario para que la electricidad llegue desde la central hasta un electrodoméstico:"

explicacion: |
  El flujo eléctrico sigue la secuencia: {secuencia[0]} -> {secuencia[1]} -> {secuencia[2]}.
```

### 5 — Identificación de tecnologías
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tecnologia", "clasificacion"]

variables:
  escenario: uno_de([["electrodoméstico", "hogar"], ["transformador_industrial", "fábrica"], ["enchufe_doméstico", "hogar"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Un {escenario[idx][0]} es un invento destinado principalmente al ___."

explicacion: |
  El uso de un {escenario[idx][0]} es típico del ámbito del {escenario[idx][1]}.
```