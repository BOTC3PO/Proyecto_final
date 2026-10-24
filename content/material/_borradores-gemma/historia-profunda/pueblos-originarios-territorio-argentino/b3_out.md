### 1 — El Collasuyo y la expansión Inca
```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["incas", "collasuyo", "noroeste_argentino"]

respuesta: "Collasuyo"
tipo: completar
respuestas_validas: ["Collasuyo"]

enunciado: "La región del noroeste argentino, que incluía partes de las actuales Salta y Jujuy, formaba parte de la división territorial del Imperio Inca conocida como ___."

explicacion: |
  El Imperio Inca se dividía en cuatro regiones o 'suyos'. La región sur, que comprendía gran parte del actual territorio argentino, se denominaba Collasuyo.
```

### 2 — Organización territorial y control
```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["incas", "administracion", "territorio"]

variables:
  escenario: uno_de([["control_administrativo", "el control de los recursos mediante el sistema de mitas"], ["control_mita", "el control de los recursos mediante el sistema de mitas"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["el control de los recursos mediante el sistema de mitas", "la construcción de grandes pirámides de piedra", "la navegación de los ríos de montaña", "el uso exclusivo del idioma quechua en todos los pueblos"]

enunciado: "Para consolidar su dominio en el noroeste argentino, el Imperio Inca implementó una estrategia de {escenario[1]} para asegurar la lealtad de los pueblos locales y la producción de excedentes."

explicacion: |
  El sistema de la 'mita' era un trabajo por turnos que permitía al Estado Inca movilizar grandes cantidades de mano de obra para obras públicas y agricultura, asegurando el control sobre los territorios conquistados.
```

### 3 — Infraestructura: El Camino del Inca
```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["caminos", "qhapaq_ñan", "incas"]

respuesta: "Qhapaq Ñan"
tipo: completar
respuestas_validas: ["Qhapaq Ñan"]

enunciado: "La red de caminos que conectaba los centros administrativos del imperio, permitiendo el tránsito de ejércitos y mensajeros por el noroeste argentino, se denominaba ___."

explicacion: |
  El Qhapaq Ñan (Camino del Inca) era una red vial altamente sofisticada que conectaba todo el imperio, facilitando la comunicación y el control territorial.
```

### 4 — La importancia de la agricultura en altura
```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["agricultura", "terrazas", "tecnologia"]

respuesta: "terrazas"
tipo: mc
opciones_explicitas: ["terrazas", "canales de riego por inundación", "campos de cultivo de llanura", "sistemas de rotación de cultivos"]

enunciado: "Debido a la geografía montañosa de Jujuy y Salta, los Incas perfeccionaron una técnica agrícola de escalonamiento de las laderas para maximizar la superficie cultivable y evitar la erosión. Esta técnica se conoce como ___."

explicacion: |
  Las terrazas de cultivo permitían aprovechar las pendientes de los cerros, optimizando el uso del agua y evitando que la lluvia lavara los nutrientes del suelo.
```

### 5 — Secuencia de expansión
```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["expansion", "etapas", "incas"]

respuesta: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]
tipo: ordenar
opciones_explicitas: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]

enunciado: "El proceso de expansión del Imperio Inca sobre los pueblos del noroeste argentino seguía generalmente un orden lógico de integración. Ordena las etapas de este proceso:"

pasos:
  - "Primero se buscaba la integración mediante regalos o alianzas."
  - "Si la diplomacia fallaba, se procedía a la acción militar."
  - "Finalmente, se establecían centros para la administración y el control."

explicacion: |
  La expansión incaica no era puramente militar; preferían la diplomacia y el intercambio de bienes de prestigio. Si los pueblos locales se resistían, utilizaban la fuerza, para luego establecer una estructura administrativa (como los mitimaes) para asegurar el control.
```