### 1 — El fin de la era del vapor
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["revolucion_industrial", "energia"]

respuesta: "centralizada"
tipo: completar
respuestas_validas: ["centralizada", "distribuida"]

enunciado: "A diferencia de los motores eléctricos que permiten una distribución flexible, el sistema de máquinas de vapor dependía de una fuente de energía ___."

explicacion: |
  Las máquinas de vapor requerían una ubicación centralizada y un complejo sistema de ejes y correas para transmitir movimiento a toda la fábrica.
```

### 2 — Ventajas del motor eléctrico
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["eficiencia", "motores"]

variables:
  escenario: uno_de([
    ["El motor eléctrico permite mover máquinas individuales", "mayor flexibilidad"],
    ["El motor eléctrico consume menos energía en reposo", "mayor eficiencia"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["mayor flexibilidad", "mayor eficiencia", "menor costo de instalación"]

enunciado: "Al reemplazar la transmisión por correas de cuero de una máquina de vapor por motores eléctricos individuales en cada máquina, se logra principalmente: {escenario[1]}."

explicacion: |
  La electrificación permitió que cada máquina tuviera su propio motor, eliminando la necesidad de mantener todo el sistema funcionando si solo una máquina se necesitaba.
```

### 3 — Transición energética industrial
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

respuesta: "eléctrica"
tipo: completar
respuestas_validas: ["eléctrica", "térmica"]

enunciado: "La transición de la energía mecánica a la energía ___ permitió que las fábricas dejaran de depender de la proximidad de fuentes de agua o carbón masivo para sus ejes de transmisión."

explicacion: |
  La electricidad permitió que la energía se transportara a través de cables, permitiendo que las fábricas se ubicaran en cualquier lugar, no solo cerca de ríos o minas.
```

### 4 — Orden de la revolución industrial
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Implementación de máquinas de vapor", "Instalación de redes eléctricas", "Uso de motores eléctricos individuales", "Sistemas de correas y ejes centrales"]
respuesta: ["Implementación de máquinas de vapor", "Sistemas de correas y ejes centrales", "Instalación de redes eléctricas", "Uso de motores eléctricos individuales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de la potencia industrial desde la Primera hasta la Segunda Revolución Industrial:"

explicacion: |
  Primero se usaba el vapor directamente, luego se intentó distribuir ese movimiento mediante correas (lo cual era ineficiente), y finalmente la electricidad permitió la independencia de cada máquina.
```

### 5 — Impacto en la arquitectura de fábrica
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["arquitectura", "espacio"]

variables:
  caso: uno_de([
    ["una fábrica con motores eléctricos", "espacios más abiertos y seguros"],
    ["una fábrica con máquinas de vapor", "espacios saturados de ejes y correas"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["espacios más abiertos y seguros", "espacios saturados de ejes y correas", "espacios con mayor ruido mecánico"]

enunciado: "Comparado con el sistema de vapor, el uso de {caso[0]} resultó en: {caso[1]}."

explicacion: |
  Al eliminar los enormes ejes de transmisión que atravesaban los techos y suelos de las fábricas, el espacio se volvió más seguro, limpio y versátil.
```