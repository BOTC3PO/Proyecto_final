# Historia Profunda — Pueblos originarios territorio argentino (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Ubicación de los Diaguitas

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "norte", "geografia"]

tipo: mc
opciones_explicitas: ["Noroeste (valles y montañas)", "Litoral (ríos)", "Patagonia (estepa)", "Pampa (llanura)"]
respuesta: "Noroeste (valles y montañas)"

enunciado: "Los pueblos de cultura Diaguita se asentaban principalmente en la zona del ______."

explicacion: |
  Los diaguitas habitaban los valles calchaquíes y zonas montañosas del actual Noroeste Argentino, desarrollando una agricultura avanzada en terrazas.
```

### 2 — Modo de vida de los Tehuelches

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia", "nómadas"]

tipo: mc
opciones_explicitas: ["Agricultores sedentarios", "Cazadores-recolectores nómadas", "Pescadores de gran escala", "Comerciantes de seda"]
respuesta: "Cazadores-recolectores nómadas"

enunciado: "Los Tehuelches, habitantes de la Patagonia, se caracterizaban por su estilo de vida de:"

explicacion: |
  Eran grupos nómadas que se desplazaban siguiendo los ciclos de caza de guanacos y choiques, además de la recolección de frutos silvestres.
```

### 3 — La cultura Guaraní y el Litoral

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["guaraníes", "litoral", "agricultura"]

variables:
  escenario: uno_de([["Guaraníes", "agricultura de roza y quema", "selva/ríos"], ["Mapuches", "pastoreo y agricultura", "zonas templadas"], ["Selk'nam", "caza de focas", "Tierra del Fuego"]])

tipo: completar
respuestas_validas:
  - "agricultura de roza y quema"
  - "pastoreo y agricultura"
  - "caza de focas"
respuesta: escenario[1]
enunciado: "Los pueblos {escenario[2]} se destacaban por su técnica de {escenario[1]}."

explicacion: |
  Los guaraníes utilizaban la técnica de roza y quema para la agricultura en las zonas de selva y ríos del Litoral.
```

### 4 — Orden de expansión/presencia

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["ordenar", "geografia"]

tipo: ordenar
opciones_explicitas: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]
respuesta_orden: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]

enunciado: "Ordene los siguientes pueblos de Norte a Sur (desde el Noroeste hacia la Patagonia):"

explicacion: |
  El orden geográfico de norte a sur es: Diaguitas (Noroeste), Guaraníes (Litoral/Noreste), Mapuches (Zona Centro/Sur) y Tehuelches (Patagonia).
```

### 5 — El entorno de los Mapuches

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["mapuches", "sur", "territorio"]

tipo: completar
tolerancia_abs: 0

variables:
  datos: uno_de([["mapuches", "sur", "Pampa"], ["diaguitas", "noroeste", "Noroeste"], ["tehuelches", "patagonia", "Patagonia"]])

enunciado: "Los pueblos ______ habitaban principalmente en la zona ______ de Argentina."

respuesta: "mapuches"

explicacion: |
  Los mapuches ocupaban territorios que se extendían desde el centro-sur de la actual Argentina hacia el oeste (Chile).
```

### 6 — Organización social y agricultura

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "agricultura", "sedentarismo"]

respuesta: "sedentaria"
tipo: completar
respuestas_validas:
  - "sedentaria"

enunciado: "A diferencia de los grupos nómadas, los pueblos como los diaguitas desarrollaron una organización social ___ basada en la agricultura y el control de terrazas de cultivo."

explicacion: |
  Los diaguitas, al establecerse en valles y zonas montañosas, desarrollaron una agricultura avanzada que requería asentamientos permanentes, lo que define a una sociedad sedentaria.
```

### 7 — Movilidad y subsistencia

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "nómadas", "caza"]

variables:
  escenario: uno_de([["Tehuelches", "Patagonia"], ["Guaraníes", "Litoral"]])
  tipo_sociedad: uno_de(["nómada", "sedentaria"])

respuesta: "nómada"
tipo: mc
opciones_explicitas: ["nómada", "sedentaria"]

enunciado: "Los {escenario[0]} se caracterizaban por un estilo de vida {tipo_sociedad}, desplazándose constantemente para la caza y la recolección."

explicacion: |
  Los pueblos de la Patagonia, como los tehuelches, dependían de la migración estacional de la fauna para su subsistencia, lo que impedía el sedentarismo.
```

### 8 — Influencia cultural en el NOA

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["diaguitas", "inca", "influencia"]

respuesta: "incaica"
tipo: mc
opciones_explicitas: ["incaica", "maya", "azteca", "guaraní"]

enunciado: "La organización política y técnica de muchos pueblos del Noroeste Argentino, como los diaguitas, estuvo fuertemente influenciada por la expansión del imperio ___."

explicacion: |
  La expansión del Tahuantinsuyo (Imperio Inca) dejó una huella profunda en la organización social, el uso de terrazas y la administración de recursos en el actual territorio argentino.
```

### 9 — Secuencia de complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["organización", "social", "secuencia"]

respuesta_orden: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]
tipo: ordenar
opciones_explicitas: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]

enunciado: "Ordene de menor a mayor complejidad en la organización social y permanencia en el territorio:"

explicacion: |
  La complejidad social suele estar ligada a la capacidad de producir excedentes alimentarios: desde la recolección (nómadas) hasta la agricultura intensiva (sedentarios con jerarquías).
```

### 10 — Comparación de modos de vida

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["nómadas", "sedentarios", "comparación"]

variables:
  caso: uno_de([["nómadas", "caza y recolección"], ["sedentarios", "agricultura y excedente"]])

respuesta: "caza y recolección"
tipo: mc
opciones_explicitas: ["caza y recolección", "agricultura y excedente"]

enunciado: "Las sociedades con un modo de vida {caso[0]} se basaban principalmente en la {caso[1]}."

explicacion: |
  Los grupos nómadas dependen de los ciclos naturales de los recursos disponibles en el entorno, moviéndose según la disponibilidad de presas o frutos.
```

### 11 — El Collasuyo y la expansión Inca

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["incas", "collasuyo", "noroeste_argentino"]

respuesta: "Collasuyo"
tipo: completar
respuestas_validas:
  - "Collasuyo"

enunciado: "La región del noroeste argentino, que incluía partes de las actuales Salta y Jujuy, formaba parte de la división territorial del Imperio Inca conocida como ___."

explicacion: |
  El Imperio Inca se dividía en cuatro regiones o 'suyos'. La región sur, que comprendía gran parte del actual territorio argentino, se denominaba Collasuyo.
```

### 12 — Organización territorial y control

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["incas", "administracion", "territorio"]

variables:
  escenario: uno_de([["control_administrativo", "el control de los recursos mediante el sistema de mitas"], ["control_mita", "el control de los recursos mediante el sistema de mitas"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["el control de los recursos mediante el sistema de mitas", "la construcción de grandes pirámides de piedra", "la navegación de los ríos de montaña", "el uso exclusivo del idioma quechua en todos los pueblos"]

enunciado: "Para consolidar su dominio en el noroeste argentino, el Imperio Inca implementó una estrategia de {escenario[1]} para asegurar la lealtad de los pueblos locales y la producción de excedentes."

explicacion: |
  El sistema de la 'mita' era un trabajo por turnos que permitía al Estado Inca movilizar grandes cantidades de mano de obra para obras públicas y agricultura, asegurando el control sobre los territorios conquistados.
```

### 13 — Infraestructura: El Camino del Inca

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["caminos", "qhapaq_ñan", "incas"]

respuesta: "Qhapaq Ñan"
tipo: completar
respuestas_validas:
  - "Qhapaq Ñan"

enunciado: "La red de caminos que conectaba los centros administrativos del imperio, permitiendo el tránsito de ejércitos y mensajeros por el noroeste argentino, se denominaba ___."

explicacion: |
  El Qhapaq Ñan (Camino del Inca) era una red vial altamente sofisticada que conectaba todo el imperio, facilitando la comunicación y el control territorial.
```

### 14 — La importancia de la agricultura en altura

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

### 15 — Secuencia de expansión

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["expansion", "etapas", "incas"]

respuesta_orden: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]
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

### 16 — Ubicación Mapuche

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["mapuches", "geografia"]

tipo: mc
opciones_explicitas: ["Norte", "Litoral", "Sur y Cordillera", "Cuyo"]

enunciado: "La región geográfica principal asociada históricamente al pueblo Mapuche en el territorio argentino es la zona de: ___"

respuesta: "Sur y Cordillera"

explicacion: |
  El pueblo Mapuche se asentó principalmente en las regiones del sur y la zona de la cordillera de los Andes.
```

### 17 — Territorio Guaraní

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["guaraníes", "litoral"]

tipo: completar
respuestas_validas:
  - "Litoral/Noreste"

enunciado: "Los pueblos Guaraníes se desarrollaron predominantemente en la región del ___."

respuesta: "Litoral/Noreste"

explicacion: |
  Los guaraníes habitaban las zonas de selva y ríos, principalmente en el Litoral y el Noreste argentino.
```

### 18 — La zona de los Diaguitas

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "noroeste"]

tipo: mc
opciones_explicitas: ["Patagonia", "Noroeste", "Pampa", "Mesopotamia"]

enunciado: "Si un historiador estudia las culturas de los Diaguitas, debe centrar su investigación en la región del: ___"

respuesta: "Noroeste"

explicacion: |
  Los diaguitas habitaron las zonas montañosas del Noroeste argentino.
```

### 19 — El territorio Patagónico

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia"]

tipo: completar
tolerancia_abs: 0

enunciado: "El pueblo Tehuelche habitaba históricamente la región de la ___."

respuesta: "Patagonia"

explicacion: |
  Los tehuelches eran pueblos nómadas que recorrían las estepas de la Patagonia.
```

### 20 — Relación Pueblo-Región

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["repaso", "geografia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Mapuches", "Sur/Cordillera"], ["Guaraníes", "Litoral/Noreste"], ["Diaguitas", "Noroeste"], ["Tehuelches", "Patagonia"]]

tipo: mc
opciones_explicitas: ["Sur/Cordillera", "Litoral/Noreste", "Noroeste", "Patagonia"]

enunciado: "De acuerdo a la información histórica, el pueblo {datos[idx][0]} se asocia con la región de: ___"

respuesta: datos[idx][1]

explicacion: |
  La respuesta correcta corresponde a la región geográfica donde se asentó el pueblo seleccionado.
```

### 21 — Regiones y pueblos

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["geografia", "etnias"]

variables:
  escenario: [[ "Los Selk'nam habitaban la región de la Tierra del Fuego", "Tierra del Fuego" ], [ "Los Guaraníes se asentaban principalmente en el noreste", "Noreste" ], [ "Los Mapuches ocupaban gran parte de la zona andina y central", "Zona Andina" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tierra del Fuego", "Noreste", "Zona Andina", "Pampa"]

enunciado: "Identificá la región geográfica correspondiente al pueblo mencionado: {escenario[idx][0]}."

explicacion: |
  El pueblo mencionado se caracteriza por habitar la región de {escenario[idx][1]}.
```

### 22 — Nomadismo y sedentarismo

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["estilos_de_vida", "antropologia"]

variables:
  idx: uno_de([0, 1])
  pueblos: ["Tehuelches", "Diaguitas"]
  modos: ["nómadas", "sedentarios"]

tipo: completar
respuesta: modos[idx]

enunciado: "Considerando el modo de vida de los {pueblos[idx]}, su organización social era de tipo ___."

explicacion: |
  Los {pueblos[idx]} se definían por ser {modos[idx]}.
```

### 23 — Relación con el entorno

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["cultura"]

respuesta: "agricultura"
tipo: mc
opciones_explicitas: ["caza", "agricultura", "pesca", "recolección"]

enunciado: "Los pueblos de la región de los Andes Centrales, como los Diaguitas, basaban su economía principalmente en la ___."

explicacion: |
  La agricultura fue la base de la economía de los pueblos sedentarios de la zona andina.
```

### 24 — Orden de expansión/presencia

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["cronologia", "territorio"]

respuesta_orden: ["Selk'nam", "Tehuelches", "Guaraníes"]
tipo: ordenar
opciones_explicitas: ["Selk'nam", "Tehuelches", "Guaraníes"]

enunciado: "Ordená estos pueblos de Sur a Norte según su ubicación geográfica predominante en el territorio argentino."

explicacion: |
  El orden correcto de Sur a Norte es: Selk'nam (Tierra del Fuego), Tehuelches (Patagonia) y Guaraníes (Noreste).
```

### 25 — Identificación de territorio

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["geografia"]

variables:
  pueblo_datos: [[ "Qom", "Chaco" ], [ "Mapuche", "Patagonia/Andes" ], [ "Selk'nam", "Tierra del Fuego" ]]
  idx: uno_de([0, 1, 2])

respuesta: pueblo_datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Escribí el nombre de la región donde habita el pueblo {pueblo_datos[idx][0]}."

explicacion: |
  El pueblo {pueblo_datos[idx][0]} se asocia con la región de {pueblo_datos[idx][1]}.
```
