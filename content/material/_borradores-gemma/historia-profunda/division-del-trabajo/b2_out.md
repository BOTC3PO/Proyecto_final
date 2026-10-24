### 1 — El origen de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["agricultura", "excedente", "especializacion"]

respuesta: "excedente agrícola"
tipo: completar
respuestas_validas: ["excedente agrícola", "excedente"]

enunciado: "La división del trabajo surgió históricamente como una consecuencia directa de la aparición del ___."

explicacion: |
  Cuando las sociedades lograron producir más alimento del que necesitaban para su subsistencia inmediata (excedente), no todos los individuos tuvieron que dedicarse a la agricultura. Esto permitió que otros se especializaran en otras tareas.
```

### 2 — Nuevos roles sociales
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["roles", "sociedad", "especializacion"]

variables:
  rol_idx: uno_de([0, 1, 2])
  roles: [["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"]]

opciones_explicitas: ["artesanos", "comerciantes", "sacerdotes", "agricultores"]
respuesta: roles[rol_idx][2]
tipo: mc

enunciado: "Gracias al excedente de alimentos, algunas personas pudieron dedicarse a funciones no productoras de comida, como es el caso de los {roles[rol_idx][2]}."

explicacion: |
  La especialización permitió la aparición de roles como artesanos, comerciantes, sacerdotes o gobernantes, liberando a una parte de la población de la tarea de producir alimento.
```

### 3 — La lógica de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["causalidad", "economia_antigua"]

respuesta: "verdadero"
tipo: vf

enunciado: "¿Es correcto afirmar que la división del trabajo es una consecuencia de la capacidad de producir excedentes agrícolas?"

explicacion: |
  Correcto. Sin un excedente que alimentar a quienes no cultivan, la especialización laboral sería imposible, ya que todos deberían dedicarse a la obtención de alimentos para sobrevivir.
```

### 4 — Evolución de la estructura social
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["jerarquia", "especializacion", "sociedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"], ["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"]]

opciones_explicitas: ["agricultores y guerreros", "artesanos, comerciantes y sacerdotes", "cazadores y recolectores", "nómadas y pastores"]
respuesta: escenarios[escenario_idx][0]
tipo: mc

enunciado: "Al producirse un excedente agrícola, la estructura social se vuelve más compleja, pasando de ser mayoritariamente agricultores a incluir roles como ___."

explicacion: |
  La complejidad social aumenta cuando la población se diversifica en funciones que no están ligadas directamente a la extracción de recursos primarios.
```

### 5 — Secuencia de la complejidad social
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "causalidad"]

opciones_explicitas: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
respuesta: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos históricos que permitieron la aparición de la especialización laboral:"

pasos:
  - "Se desarrolla la agricultura para el autoconsumo."
  - "Se produce más comida de la necesaria (excedente)."
  - "Surgen artesanos, sacerdotes y gobernantes."

explicacion: |
  El proceso es causal: primero la agricultura permite el excedente, y el excedente permite que la sociedad se divida en diferentes profesiones.
```