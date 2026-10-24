### 1 — Concepto de Memoria Virtual
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que excede la capacidad física de la memoria RAM disponible, utilizando el almacenamiento secundario como extensión."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que utiliza el espacio en el disco duro para simular memoria RAM adicional, permitiendo ejecutar procesos más grandes que la RAM física.
```

### 2 — Cálculo de Espacio en Memoria
```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["calculo", "paginacion"]

variables:
  escenario: uno_de([
    ["4096", "4096"],
    ["8192", "8192"],
    ["1024", "1024"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["1024", "2048", "4096", "8192"]

enunciado: "Un proceso requiere un bloque de memoria de {escenario[0]} bytes. Si el sistema utiliza páginas de tamaño fijo de {escenario[2]} bytes, ¿cuántas páginas se deben asignar para cubrir el requerimiento total del proceso?"

pasos:
  - "Dividir el tamaño total del proceso por el tamaño de la página: {escenario[0]} / {escenario[2]}"
  - "Si el resultado no es entero, redondear hacia arriba (ceil) para asegurar que el proceso quepa."

explicacion: |
  Para calcular el número de páginas: 
  {escenario[0]} / {escenario[2]} = {escenario[1]}. 
  Se requiere asignar exactamente esa cantidad de páginas.
```

### 3 — Fragmentación Interna
```
metadata:
  materia: "informatica"
  tema: "fragmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "fragmentacion_interna"]

variables:
  datos: uno_de([
    ["15000", "4096", "14048"],
    ["18000", "4096", "17856"],
    ["10000", "4096", "9408"]
  ])

respuesta: datos[2]
tipo: completar
respuestas_validas: ["14048", "17856", "9408"]

enunciado: "En un sistema con paginación de {datos[1]} bytes, se asigna un proceso de {datos[0]} bytes. La fragmentación interna (espacio desperdiciado en la última página) es de ___ bytes."

explicacion: |
  1. Calculamos cuántas páginas completas se necesitan: ceil({datos[0]} / {datos[1]}) = 4 páginas.
  2. Espacio total asignado: 4 * {datos[1]} = 16384 (en el primer caso).
  3. Fragmentación: 16384 - {datos[0]} = {datos[2]}.
```

### 4 — Ciclo de Intercambio (Swapping)
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["swapping", "gestion_procesos"]

respuesta: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]
tipo: ordenar

enunciado: "Ordene los pasos que ocurren cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria RAM (Page Fault):"

opciones_explicitas: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]

explicacion: |
  El flujo lógico es:
  1. El proceso solicita una dirección de memoria.
  2. La MMU detecta que la página no está en RAM (Page Fault).
  3. El SO busca la página en el disco y la carga en RAM (Swap-in).
  4. Se actualiza la tabla de páginas para marcar la página como presente.
```

### 5 — Desplazamiento de Página
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_virtual"
  nivel: "avanzado"
  tags: ["direccionamiento", "paginacion"]

variables:
  direccion: uno_de([
    ["0x0045", "0x0005"],
    ["0x01A2", "0x01A2"],
    ["0x03FF", "0x03FF"]
  ])

respuesta: direccion[1]
tipo: mc
opciones_explicitas: ["0x0000", "0x0005", "0x01A2", "0x03FF"]

enunciado: "Si el tamaño de página es de 16 bytes (0x10 en hex) y una dirección virtual es {direccion[0]}, ¿cuál es el desplazamiento (offset) dentro de la página?"

pasos:
  - "El desplazamiento se obtiene calculando el residuo de la dirección dividido por el tamaño de la página."
  - "En hexadecimal: {direccion[0]} MOD 0x10 = {direccion[1]}."

explicacion: |
  El desplazamiento (offset) identifica la posición exacta dentro de una página. Se calcula mediante la operación módulo: {direccion[0]} % 16 = {direccion[1]}.
```