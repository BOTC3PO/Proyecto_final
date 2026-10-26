### 1 — Empuje vs Peso
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "peso", "flotacion"]

variables:
  densidad_obj: uno_de([2500, 800])
  densidad_liq: 1000

respuesta: densidad_obj < densidad_liq
tipo: vf

enunciado: "Si un objeto tiene una densidad de {densidad_obj} kg/m³ y se sumerge en un líquido de {densidad_liq} kg/m³, el objeto flotará en la superficie. ¿Es esto verdadero o falso?"

explicacion: |
  Si la densidad del objeto es menor que la del líquido (como en el caso de 800 < 1000), el objeto flota. Si es mayor (2500 > 1000), el objeto se hunde.
```

### 2 — El concepto de Empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["arquimedes", "fuerza", "empuje"]

respuesta: "fuerza vertical hacia arriba"
tipo: completar
respuestas_validas: ["fuerza vertical hacia arriba", "fuerza hacia arriba", "empuje"]

enunciado: "El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta una ___ que es igual al peso del volumen del fluido desalojado."

explicacion: |
  El empuje es la fuerza que ejerce el fluido sobre el cuerpo, dirigida siempre hacia arriba (verticalmente).
```

### 3 — Condición de flotación
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

variables:
  peso_obj: uno_de([50, 150])
  empuje: uno_de([100, 20])

respuesta: peso_obj == empuje
tipo: mc
opciones_explicitas: ["El peso es mayor que el empuje", "El peso es menor que el empuje", "El peso es igual al empuje"]

enunciado: "Para que un objeto flote en equilibrio en la superficie de un fluido (flotación neutra), se debe cumplir que el peso del objeto sea ___ que el empuje."

explicacion: |
  Cuando un objeto flota sin hundirse ni emerger completamente, el peso es igual al empuje (equilibrio de fuerzas).
```

### 4 — Factores que determinan el empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "avanzado"
  tags: ["calculo", "empuje", "volumen"]

variables:
  vol_sumergido: uno_de([0.5, 2.0])
  dens_liq: 1000
  g: 9.8

respuesta: [
  "Calcular el volumen del fluido desplazado",
  "Multiplicar ese volumen por la densidad del fluido",
  "Multiplicar el resultado por la aceleración de la gravedad"
]
tipo: ordenar

opciones_explicitas: [
  "Calcular el volumen del fluido desplazado",
  "Multiplicar ese volumen por la densidad del fluido",
  "Multiplicar el resultado por la aceleración de la gravedad",
  "Sumar la densidad con la gravedad"
]

enunciado: "Ordena los pasos lógicos para calcular la magnitud del empuje ($E = \rho \cdot V_{sum} \cdot g$) de un cuerpo sumergido:"

explicacion: |
  El empuje depende del volumen desplazado, la densidad del fluido y la gravedad.
```

### 5 — Diferencia entre masa y empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["masa", "empuje", "densidad"]

variables:
  masa_bloque: 10
  vol_bloque: 0.05
  dens_agua: 1000

respuesta: false
tipo: vf

enunciado: "Si un bloque de hierro tiene una masa de {masa_bloque} kg y un volumen de {vol_bloque} m³, el empuje que recibe al sumergirse totalmente en agua es de {masa_bloque} Newtons. ¿Es esto verdadero o falso?"

explicacion: |
  El empuje es igual al peso del fluido desalojado ($\rho_{agua} \cdot V_{bloque} \cdot g$), no a la masa del objeto ni a su peso directamente. En este caso: $1000 \cdot 0.05 \cdot 9.8 = 490$ N, que es distinto a 10 N.
```