### 1 — El Cabildo Abierto
```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["cabildo", "mayo_1816"]

variables:
  escenario: [[ "El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Juan José Castelli"], ["El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Cornelio Saavedra"]]
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Juan José Castelli", "Cornelio Saavedra", "Mariano Moreno", "Manuel Belgrano"]

enunciado: "En el Cabildo Abierto del 22 de mayo, ¿qué figura fue uno de los principales oradores defendiendo la soberanía del pueblo frente al virreinato? {escenario[idx][0]}"

explicacion: |
  Juan José Castelli fue conocido como 'el orador de la Revolución', defendiendo la postura de que el poder volvía al pueblo ante la caída de la Junta de Sevilla.
```

### 2 — La Primera Junta
```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "gobierno"]

variables:
  datos: [["Presidente", "Cornelio Saavedra"], ["Secretario", "Mariano Moreno"], ["Secretario", "Juan José Castelli"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Castelli", "Baltasar Hidalgo de Cisneros"]

enunciado: "La Primera Junta de Gobierno, establecida tras la Revolución de Mayo, tenía una estructura con un Presidente y dos Secretarios. Si el rol seleccionado es {datos[idx][0]}, ¿quién ocupaba dicho cargo? {datos[idx][1]}"

explicacion: |
  La Primera Junta estaba integrada por Saavedra (Presidente), Moreno y Castelli (Secretarios), junto a otros miembros vocales.
```

### 3 — La caída del Virrey
```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["virrey", "cisneros"]

variables:
  caso: [["El último virrey del Río de la Plata fue...", "Baltasar Hidalgo de Cisneros"], ["El último virrey del Río de Plata fue...", "Cisneros"]]
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["Baltasar Hidalgo de Cisneros", "Cisneros"]

enunciado: "El proceso revolucionario de mayo de 1816 culminó con la destitución de ___. "

explicacion: |
  Baltasar Hidalgo de Cisneros fue el último virrey enviado por la corona española que gobernó el territorio antes de la formación de la Primera Junta.
```

### 4 — El orden de los eventos
```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "mayo"]

respuesta: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]
tipo: ordenar
opciones_explicitas: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]

enunciado: "Ordena cronológicamente los hitos clave de la Semana de Mayo de 1816:"

explicacion: |
  La secuencia comenzó con la crisis de legitimidad, el debate en el Cabildo, la formación de la Junta de Gobierno y finalmente la instauración de la Primera Junta.
```

### 5 — El rol de la prensa
```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["prensa", "ideologia"]

variables:
  rol: [["La principal publicación de ideas revolucionarias fue la...", "La Gazeta de Buenos Ayres"], ["La principal publicación de ideas revolucionarias fue la...", "El Correo de la Patria"]]
  idx: uno_de([0,1])

respuesta: rol[idx][1]
tipo: completar
respuestas_validas: ["La Gazeta de Buenos Ayres", "El Correo de la Patria"]

enunciado: "Durante el proceso revolucionario, la difusión de ideas fue vital. Se destaca que la principal publicación de ideas revolucionarias fue la ___. "

explicacion: |
  La Gazeta de Buenos Ayres fue el primer periódico de la ciudad, utilizado para difundir los ideales de la revolución.
```