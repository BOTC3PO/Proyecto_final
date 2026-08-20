### 1 — El desembarco en las islas
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["cronologia", "conflicto"]

variables:
  escenario: uno_de([[2, "2 de abril de 1982"], [1, "1 de abril de 1982"]])
  fecha_evento: escenario[0]

respuesta: fecha_evento
tipo: completar
respuestas_validas: ["2 de abril de 1982", "1 de abril de 1982"]

enunciado: "La operación de desembarco de las fuerzas argentinas en las islas Malvinas tuvo lugar el ___."

explicacion: |
  El desembarco de las fuerzas argentinas en las islas Malvinas ocurrió el 2 de abril de 1982, marcando el inicio del conflicto bélico.
```

### 2 — El hundimiento del General Belgrano
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["hechos", "maritimo"]

variables:
  escenario: uno_de([[0, "2 de mayo de 1982"], [1, "25 de mayo de 1982"]])
  fecha_hundimiento: escenario[0]

respuesta: fecha_hundimiento
tipo: completar
respuestas_validas: ["2 de mayo de 1982", "25 de mayo de 1982"]

enunciado: "El hundimiento del crucero ARA General Belgrano por parte de un submarino británico ocurrió el ___."

explicacion: |
  El ataque al crucero General Belgrano fue uno de los eventos más significativos del conflicto, ocurrido el 2 de mayo de 1982.
```

### 3 — Secuencia de eventos clave
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

variables:
  orden_correcta: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina", "Firma de la cesación de hostilidades"]

enunciado: "Ordene cronológicamente los siguientes hitos de la guerra:"

explicacion: |
  La secuencia correcta es: Desembarco (2 de abril), Hundimiento del Belgrano (2 de mayo) y la Rendición (14 de junio).
```

### 4 — La rendición final
```
metadata:
  materia: "historia_profucha"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["final", "rendicion"]

variables:
  escenario: uno_de([[0, "14 de junio de 1982"], [1, "2 de abril de 1982"]])
  fecha_final: escenario[0]

respuesta: fecha_final
tipo: completar
respuestas_validas: ["14 de junio de 1982", "2 de abril de 1982"]

enunciado: "La firma de la rendición de las fuerzas argentinas en las islas Malvinas se produjo el ___."

explicacion: |
  El conflicto terminó formalmente el 14 de junio de 1982 con la rendición de las fuerzas argentinas ante las británicas.
```

### 5 — El inicio de las hostilidades
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["inicio", "fecha"]

variables:
  escenario: uno_de([[0, "2 de abril de 1982"], [1, "1 de mayo de 1982"]])
  fecha_inicio: escenario[0]

respuesta: fecha_inicio
tipo: mc
opciones_explicitas: ["2 de abril de 1982", "1 de mayo de 1982", "2 de mayo de 1982", "14 de junio de 1982"]

enunciado: "¿En qué fecha se produjo el desembarco argentino que dio inicio al conflicto?"

explicacion: |
  El conflicto bélico comenzó con el desembarco argentino el 2 de abril de 1982.
```