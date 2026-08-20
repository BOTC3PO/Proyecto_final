### 1 — Origen de la desigualdad
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["sociologia", "desigualdad"]

respuesta: "prestigio"
tipo: mc
opciones_explicitas: ["prestigio", "esfuerzo", "tiempo", "herramientas"]

enunciado: "Con la especialización de tareas, no todas las labores adquirieron el mismo nivel de ______, lo que permitió la jerarquización social."

explicacion: |
  La especialización permitió que algunas tareas fueran valoradas socialmente por encima de otras, otorgando a quienes las realizaban mayor estatus y control sobre los recursos.
```

### 2 — El impacto en la distribución
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["economia", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["agricultores", "excedente"], ["artesanos", "especialización"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["excedente", "especialización"]

enunciado: "En los primeros asentamientos sedentarios, la división del trabajo permitió que ciertos grupos controlaran el {datos[escenario_idx][1]}, consolidando la desigualdad."

explicacion: |
  El control sobre el excedente de producción (como el grano) o sobre procesos técnicos específicos permitió que ciertos individuos acumularan poder sobre el resto de la comunidad.
```

### 3 — Jerarquías de valor
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["estructura_social", "clases"]

respuesta: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]
tipo: ordenar

opciones_explicitas: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]

enunciado: "Ordene las actividades desde la que históricamente ha generado mayor acumulación de recursos y estatus hasta la de menor estatus en una sociedad estratificada:"

explicacion: |
  La jerarquización social se basa en la complejidad de la tarea y el control de los medios de producción; las tareas de especialización técnica suelen estar en la cima de la pirámide de prestigio.
```

### 4 — Relación de poder
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["poder", "sociedad"]

respuesta: "desigualdad"
tipo: input
tolerancia_abs: 0

enunciado: "La asignación desigual de tareas y el acceso diferenciado a los bienes producidos sentaron las bases de la _______ social."

explicacion: |
  Al no ser todas las tareas equivalentes en términos de acceso a la riqueza, se crearon estratos sociales permanentes.
```

### 5 — El rol de la propiedad
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["recursos", "propiedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["tierras", "dueños"], ["herramientas", "maestros"]]

respuesta: casos[caso_idx][1]

tipo: mc
opciones_explicitas: ["dueños", "maestros", "trabajadores", "esclavos"]

enunciado: "Cuando la división del trabajo se vinculó con la propiedad de los medios de producción, surgieron grupos como los {casos[caso_idx][0]} que controlaban a los demás."

explicacion: |
  La combinación de la especialización con la propiedad privada de los recursos (tierra o herramientas) es el motor fundamental de la estratificación de clases.
```