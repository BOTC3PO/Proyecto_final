### 1 — El origen de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "excedente", "division_del_trabajo"]

tipo: mc
opciones_explicitas: ["La agricultura de subsistencia", "La acumulación de excedente", "La caza y recolección", "El nomadismo"]

enunciado: "El fenómeno que permitió, por primera vez, que ciertos grupos humanos se dedicaran a tareas distintas a la obtención de alimento fue..."

explicacion: |
  El excedente agrícola permitió que no toda la población tuviera que producir comida, dando lugar a la especialización del trabajo.
```

### 2 — La nueva estructura social
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["clases_sociales", "especializacion"]

variables:
  escenario: uno_de([
    ["artesanos", "creadores de herramientas y objetos"],
    ["sacerdotes", "encargados de rituales y la cosmogonía"],
    ["gobernantes", "encargados de la administración y defensa"]
  ])

tipo: completar
respuestas_validas: ["artesanos", "sacerdotes", "gobernantes"]

enunciado: "Gracias al excedente, surgieron roles especializados. Un grupo dedicado a la producción de objetos se denomina {escenario[0]}, mientras que quienes gestionaban el orden político eran los {escenario[2]}."

pasos:
  - "Identificar la función social descrita."
  - "Relacionar la función con el término correspondiente."

explicacion: |
  La división del trabajo permitió la aparición de especialistas en la producción, la religión y la política.
```

### 3 — Consecuencias de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["division_del_trabajo", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron la aparición de las primeras civilizaciones complejas:"

explicacion: |
  Primero se establece el sedentarismo, lo que permite producir excedentes; esto a su vez permite la división del trabajo y finalmente la especialización de roles sociales.
```

### 4 — La base de la división del trabajo
```
metadata:
  materia: "historia_profucha"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["excedente", "base_social"]

tipo: mc
opciones_explicitas: ["La escasez de recursos", "La división del trabajo", "El excedente de producción", "La guerra constante"]

enunciado: "La base fundamental que permitió la división del trabajo en las sociedades neolíticas fue..."

explicacion: |
  Sin un excedente de alimentos, cada individuo debe dedicar la mayor parte de su tiempo a asegurar la supervivencia alimentaria.
```

### 5 — Identificación de roles
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["especializacion", "clases_sociales"]

variables:
  rol: uno_de([
    ["artesano", "el que transforma la materia prima"],
    ["sacerdote", "el que media con lo sagrado"],
    ["gobernante", "el que ejerce el poder político"]
  ])

tipo: mc
opciones_explicitas: ["artesano", "sacerdote", "gobernante"]

enunciado: "Si una sociedad cuenta con excedentes y surge una clase dedicada exclusivamente a la gestión del orden y la defensa, estamos ante la figura del {rol[2]}."

explicacion: |
  La gestión del poder es una de las especializaciones más tempranas derivadas de la organización de sociedades con excedentes.
```