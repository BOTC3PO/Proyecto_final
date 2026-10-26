### 1 — El motor del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

enunciado: "El paso fundamental que permitió la acumulación de riqueza y el fin del nomadismo fue la generación de un ___."

respuestas_validas: ["excedente agrícola"]
tipo: completar

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos dejaran de producir comida para dedicarse a otras tareas.
```

### 2 — La consecuencia de la acumulación
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["propiedad_privada", "desigualdad"]

variables:
  escenario: uno_de([
    ["La acumulación de excedentes permitió que la tierra y los bienes pasaran de ser de uso común a ser de uso individual.", "propiedad privada"],
    ["La gestión de los graneros llevó a la creación de leyes para proteger el acaparamiento de recursos.", "propiedad privada"]
  ])

enunciado: "Según el proceso de transición histórica, la aparición de la {escenario[0]} es la consecuencia directa de la acumulación de excedentes."

opciones_explicitas: ["propiedad común", "propiedad privada", "propiedad estatal"]
respuesta: "propiedad privada"
tipo: mc

explicacion: |
  Al existir un exceso de producción, surge la necesidad de delimitar quién es dueño de qué, transformando el acceso a los recursos en un derecho de propiedad privada.
```

### 3 — La estructura social
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["jerarquia", "clases_sociales"]

enunciado: "Cuando la propiedad privada genera disparidades en la riqueza, surge una estructura de ___ para organizar a la población según su estatus y funciones."

respuestas_validas: ["jerarquía social"]
tipo: completar

explicacion: |
  La división del trabajo y la diferencia de riqueza crean estratos sociales: quienes controlan el excedente y quienes lo producen.
```

### 4 — El orden de la civilización
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

enunciado: "Ordena la secuencia lógica de la transición hacia las sociedades complejas:"

opciones_explicitas: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
respuesta: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
tipo: ordenar

explicacion: |
  La secuencia lógica parte de la producción (excedente), que permite la apropiación (propiedad), que genera desigualdad (jerarquía) y finalmente requiere una autoridad que regule todo (Estado).
```

### 5 — El rol del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "poder"]

variables:
  caso: uno_de([
    ["El Estado surge para proteger la propiedad y administrar la fuerza.", "Estado organizado"],
    ["El Estado aparece como un mecanismo de control de la jerarquía establecida.", "Estado organizado"]
  ])

enunciado: "En el proceso histórico estudiado, la fase final de la organización social compleja es la aparición del {caso[0]}."

opciones_explicitas: ["comunidad tribal", "Estado organizado", "anarquía"]
respuesta: "Estado organizado"
tipo: mc

explicacion: |
  El Estado surge como la institución que institucionaliza la jerarquía, establece leyes para la propiedad y administra el excedente y la defensa.
```