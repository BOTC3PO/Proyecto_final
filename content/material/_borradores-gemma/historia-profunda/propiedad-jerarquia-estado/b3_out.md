### 1 — Origen del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sociologia", "estado", "organizacion"]

respuesta: "recaudar excedente"
tipo: completar
respuestas_validas: ["recaudar excedente"]

enunciado: "Uno de los propósitos fundamentales de la formación de las estructuras estatales fue la capacidad de ___ para financiar la administración y la burocracia."

explicacion: |
  El surgimiento de sociedades complejas permitió la acumulación de excedentes agrícolas, lo que permitió la creación de una clase administrativa y militar que no producía sus propios alimentos.
```

### 2 — Funciones del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["funciones", "justicia", "defensa"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["gestión de conflictos entre ciudadanos", "administrar justicia"],
    ["protección de las fronteras ante invasores", "organizar defensa"],
    ["construcción de canales y caminos", "obras públicas"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["administrar justicia", "organizar defensa", "obras públicas", "todas las anteriores"]

enunciado: "Si el Estado se enfoca en '{escenarios[escenario_idx][0]}', está ejerciendo la función de: ___"

explicacion: |
  El Estado centraliza funciones que las comunidades pequeñas resolvían de forma tribal para permitir la convivencia en sociedades de gran escala.
```

### 3 — La complejidad social
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["complejidad", "sociedad"]

respuesta: "complejas"
tipo: completar
respuestas_validas: ["complejas"]

enunciado: "El Estado surge como una respuesta institucional a la transición de sociedades tribales hacia sociedades más ___."

explicacion: |
  A medida que la población crece y la división del trabajo se especializa, la coordinación requiere una autoridad centralizada.
```

### 4 — Elementos de la estructura estatal
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["jerarquia", "orden"]

respuesta: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]
tipo: ordenar
opciones_explicitas: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]

enunciado: "Ordene los procesos que consolidan la autoridad de un Estado centralizado, desde la base económica hasta la cohesión social:"

explicacion: |
  Primero se extrae el excedente (tributos), luego se establecen reglas (normas) y finalmente se asegura la estabilidad (orden).
```

### 5 — El rol de la infraestructura
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["obras", "infraestructura"]

respuesta: "obras públicas"
tipo: mc
opciones_explicitas: ["recaudación de tributos", "obras públicas", "defensa militar", "administración de justicia"]

enunciado: "La organización de grandes proyectos como sistemas de riego o calzadas es una función característica de la administración de: ___"

explicacion: |
  Las obras públicas requieren una coordinación de mano de obra masiva y recursos que solo una estructura estatal puede movilizar.
```