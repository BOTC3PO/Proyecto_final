### 1 — Circunnavegación de la Tierra
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["era_de_descubrimientos", "circunnavegacion"]
variables:
  lider: uno_de(["Fernando de Magallanes", "Juan Sebastián Elcano"])
tipo: vf
enunciado: "La expedición liderada por {lider} fue la primera en completar exitosamente una circunnavegación del globo terráqueo, demostrando la esféricidad del planeta y la unidad de los océanos."
respuesta: verdadero
explicacion: "Aunque Magallanes murió en Filipinas, la expedición continuó bajo Elcano y completó el viaje, regresando a España en 1522."
```

### 2 — Tratado de Tordesillas
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["colonizacion", "diplomacia"]
tipo: completar
enunciado: "El Tratado de Tordesillas (1494) estableció una línea de demarcación a ___ al oeste de las islas de Cabo Verde, dividiendo las zonas de influencia entre Castilla y Portugal."
respuesta: "370 leguas"
respuestas_validas:
  - "370 leguas"
  - "370 leguas al oeste"
  - "370 leguas hacia el oeste"
  - "370 leguas oeste"
explicacion: "Esta línea otorgó a Portugal las rutas hacia Asia y África, y a Castilla las tierras al oeste, incluyendo América."
```

### 3 — Carabelas de Colón
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["colon", "tecnologia_naval"]
tipo: mc
enunciado: "¿Cuáles fueron las tres naves que Cristóbal Colón utilizó en su primer viaje de 1492?"
opciones_explicitas:
  - "Santa Maria, Pinta y Niña"
  - "Victoria, Trinidad y Concepción"
  - "San Felipe y Santiago"
  - "Endeavour y Resolution"
respuesta: "Santa Maria, Pinta y Niña"
explicacion: "Estas fueron las tres naves utilizadas en el primer viaje de Cristóbal Colón en 1492. La Santa María era la nao capitana, y la Pinta y la Niña eran carabelas."
```

### 4 — Ruta del Cabo de Buena Esperanza
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["portugal", "asia"]
tipo: completar
enunciado: "El navegante ___ logró abrir la ruta marítima directa hacia la India en 1498, rodeando el Cabo de Buena Esperanza y evitando el control árabe y veneciano del comercio de especias."
respuesta: "Vasco da Gama"
respuestas_validas:
  - "Vasco da Gama"
  - "vasco da gama"
explicacion: "Este logro rompió el monopolio comercial de las rutas terrestres y otorgó a Portugal una ventaja económica crucial."
```

### 5 — El Pacífico
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["magallanes", "oceano_pacifico"]
tipo: completar
enunciado: "___ fue quien bautizó como \"Pacífico\" al vasto océano que cruzó en 1521, debido a la calma de sus aguas en comparación con el Atlántico tormentoso."
respuesta: "Magallanes"
respuestas_validas:
  - "Fernando de Magallanes"
  - "Fernando de Magalhães"
  - "Magallanes"
  - "el capitán Magallanes"
explicacion: "El nombre es irónico, ya que la travesía posterior fue extremadamente dura por la falta de provisiones."
```

### 6 — Navegación Celeste
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["instrumentos", "astronomia"]
tipo: mc
enunciado: "¿Qué combinación de instrumentos era típica de la navegación de altura en los siglos XV y XVI, para mantener el rumbo y estimar la latitud a partir de la altura de los astros?"
opciones_explicitas:
  - "Astrolabio y sextante"
  - "Brújula y cuadrante"
  - "Cronómetro y teodolito"
  - "Ballestilla y astrolabio"
respuesta: "Brújula y cuadrante"
explicacion: "La brújula permitía mantener la dirección cardinal y el cuadrante (o astrolabio marino) medía la altura de los astros para estimar la latitud. El sextante y cronómetro son posteriores."
```

### 7 — La Carabela
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia_naval", "portugal"]
tipo: vf
enunciado: "La carabela fue un diseño naval desarrollado principalmente por los portugueses, caracterizado por su velocidad, maniobrabilidad y capacidad para navegar a la contra del viento (bolina), ideal para la exploración costera."
respuesta: verdadero
explicacion: "Su estructura ligera y velamen latino/cuadrado la hacía superior a las naos para la exploración en aguas poco profundas y vientos cambiantes."
```

### 8 — El Archipiélago de Cabo Verde
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["portugal", "rutas_africanas"]
tipo: vf
enunciado: "El descubrimiento del archipiélago de Cabo Verde por Diogo Gomes en 1456 fue crucial para establecer una escala estratégica en la ruta de circunnavegación de África hacia la India."
respuesta: verdadero
explicacion: "Estas islas sirvieron como punto de referencia y abastecimiento vital para las expediciones portuguesas que descendían por la costa africana."
```

### 9 — La Liga de las Especias
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["comercio", "portugal"]
tipo: mc
enunciado: "¿Quién fue el navegante portugués cuyo primer objetivo comercial en Calicut (1498) era establecer contacto directo con los mercaderes de especias locales, rompiendo la cadena de intermediarios otomanos y venecianos?"
opciones_explicitas:
  - "Vasco da Gama"
  - "Pedro Álvares Cabral"
  - "Alfonso de Albuquerque"
  - "Bartolomeu Dias"
respuesta: "Vasco da Gama"
explicacion: "Aunque el encuentro inicial fue hostil, el viaje sentó las bases del Estado da Índia portugués."
```

### 10 — La Búsola
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia", "china"]
tipo: completar
enunciado: "La brújula magnética, fundamental para la navegación de altura, fue introducida en Europa desde ___ durante la Edad Media, revolucionando la capacidad de los navegantes para orientarse en mar abierto."
respuesta: "China"
respuestas_validas:
  - "China"
  - "china"
explicacion: "Aunque los chinos la usaban para adivinación y geomancia, fue la adaptación náutica europea lo que permitió la expansión marítima."
```

### 11 — Bartolomeu Dias
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["portugal", "cabo_buena_esperanza"]
tipo: completar
enunciado: "___ fue el primer europeo en doblar el Cabo de Buena Esperanza en 1488, demostrando que el Océano Atlántico y el Índico estaban conectados."
respuesta: "Bartolomeu Dias"
respuestas_validas:
  - "Bartolomeu Dias"
  - "Bartolomeu Diaz"
  - "Bartolomeu"
explicacion: "Inicialmente lo llamó \"Cabo das Tormentas\", pero el rey Juan II de Portugal lo renombró \"Cabo da Boa Esperança\"."
```

### 12 — La Nao Santa María
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["colon", "naufragio"]
tipo: vf
enunciado: "La nao capitana de Cristóbal Colón, la Santa María, se encalló y naufragó en la costa de Haití en 1502, obligando a los supervivientes a construir el Fuerte Navidad con sus restos."
respuesta: verdadero
explicacion: "Este evento marcó el primer asentamiento europeo permanente en las Américas, aunque efímero."
```

### 13 — El Paso del Sur
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["magallanes", "estrecho"]
tipo: completar
enunciado: "La expedición de Magallanes encontró la ruta hacia el Pacífico a través de un laberinto de canales y montañas en el extremo sur de Sudamérica, conocido como el ___."
respuesta: "estrecho de Magallanes"
respuestas_validas:
  - "estrecho de Magallanes"
  - "Estrecho de Magallanes"
  - "Estrecho de Magalhães"
  - "estrecho de Magalhães"
explicacion: "Este paso natural permitió a la flota pasar del Atlántico al Pacífico sin tener que rodear completamente el continente."
```

### 14 — La Carabela Redonda
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia_naval", "castilla"]
tipo: vf
enunciado: "Las naos, a diferencia de las carabelas, eran barcos más pequeños, rápidos y maniobrables, diseñados específicamente para la exploración costera y la navegación a la contra del viento."
respuesta: falso
explicacion: "Las naos eran más grandes, lentas y de mayor capacidad de carga, utilizadas para el transporte de mercancías y tropas, no tanto para la exploración ágil."
```

### 15 — El Tratado de Zaragoza
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["colonizacion", "asia"]
tipo: completar
enunciado: "El Tratado de Zaragoza, firmado en ___, estableció la línea de demarcación opuesta a la de Tordesillas para resolver los conflictos en las Molucas y el Pacífico entre España y Portugal."
respuesta: "1529"
respuestas_validas:
  - "1529"
  - "mil quinientos veintinueve"
explicacion: "Este tratado dividió el mundo en dos hemisferios de influencia, aunque su aplicación práctica fue limitada."
```

### 16 — La Ruta de las Indias
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["espana", "comercio"]
tipo: completar
enunciado: "El sistema de flotas español para el transporte de plata y mercancías entre América y Europa tenía como principales puertos de salida en el Nuevo Mundo a ___ y Portobelo (Panamá)."
respuesta: "Veracruz y Cartagena"
respuestas_validas:
  - "Veracruz y Cartagena"
  - "Veracruz y Portobelo"
  - "Veracruz y Cartagena de Indias"
  - "Veracruz y Santa Marta"
explicacion: "Veracruz era el puerto principal de la Nueva España y Cartagena de Indias el de la Nueva Granada, conectados por caminos terrestres a los puertos del Caribe."
```

### 17 — Pedro Álvares Cabral
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["brasil", "portugal"]
tipo: completar
enunciado: "En 1500, Pedro Álvares Cabral, mientras buscaba la ruta a la India, llegó a la costa de ___, afirmando la posesión de este territorio para Portugal."
respuesta: "Brasil"
respuestas_validas:
  - "Brasil"
  - "brasil"
explicacion: "El descubrimiento fue probablemente accidental debido a la desviación hacia el oeste en el Atlántico Sur."
```

### 18 — La Navegación de Cabotaje
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia", "estrategia"]
tipo: vf
enunciado: "Durante los primeros siglos de la era de los descubrimientos, la navegación de cabotaje (siguiendo la costa) era la técnica predominante porque permitía el avituallamiento constante y la orientación segura."
respuesta: verdadero
explicacion: "La navegación de altura, que se alejaba de la costa, se desarrolló posteriormente gracias a mejores instrumentos y conocimiento de los vientos y corrientes."
```

### 19 — El Cronómetro Marino
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia", "longitud"]
tipo: mc
enunciado: "¿Quién inventó el cronómetro marino (el H4) que resolvió el problema de determinar la longitud en el mar durante el siglo XVIII?"
opciones_explicitas:
  - "John Harrison"
  - "Isaac Newton"
  - "Galileo Galilei"
  - "Tycho Brahe"
respuesta: "John Harrison"
explicacion: "Harrison inventó el cronómetro marino H4, resolviendo el problema de la determinación de la longitud en el mar, un avance crucial para la navegación segura en el siglo XVIII."
```

### 20 — La Liga Hanseática
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["europa_norte", "comercio"]
tipo: vf
enunciado: "Antes de la era de los descubrimientos oceánicos, la Liga Hanseática dominó el comercio y la navegación en el Mar Báltico y el Mar del Norte, estableciendo una red comercial que precedió a las potencias atlánticas."
respuesta: verdadero
explicacion: "Esta liga de ciudades comerciales controlaba las rutas de la madera, el grano y las especias en el norte de Europa."
```

### 21 — El Estrecho de Magallanes
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["geografia", "explotacion"]
tipo: completar
enunciado: "El primer paso registrado por el estrecho que lleva su nombre fue realizado por la expedición de ___ en 1520, tras una difícil navegación por canales y tormentas."
respuesta: "Magallanes"
respuestas_validas:
  - "Fernando de Magallanes"
  - "Magallanes"
  - "Elcano"
  - "Juan Sebastián Elcano"
explicacion: "Aunque Magallanes lideraba la expedición, fue Elcano quien completó la circunnavegación, pero el estrecho fue descubierto y cruzado por la flota magallánica."
```

### 22 — La Carabela de Redonda
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia_naval", "castilla"]
tipo: vf
enunciado: "Las carabelas de redonda eran naves más grandes y pesadas que las carabelas de vela latina, diseñadas para la guerra y el transporte de carga pesada en lugar de la exploración rápida."
respuesta: falso
explicacion: "El término \"carabela de redonda\" es confuso; generalmente se distinguían entre carabelas (ligeras) y naos (grandes). Las carabelas no eran \"redondas\"."
```

### 23 — El Descubrimiento de Japón
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["expansion", "asia"]
tipo: completar
enunciado: "Aunque el primer contacto europeo con Japón en 1543 se debió a comerciantes portugueses varados en Tanegashima, la primera misión jesuita sostenida en Japón, a partir de 1549, fue liderada por ___."
respuesta: "Francisco Xavier"
respuestas_validas:
  - "Francisco Xavier"
  - "Francisco Javier"
explicacion: "El primer contacto en 1543 en Tanegashima fue accidental, protagonizado por mercaderes portugueses. Fue Francisco Javier quien, a partir de 1549, estableció la primera misión jesuita sostenida en Japón, iniciando la evangelización del país."
```

### 24 — La Navegación a Vela
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["tecnologia", "vela"]
tipo: completar
enunciado: "Las naos utilizaban principalmente velas ___ en el trinquete y la mayor, lo que las hacía eficientes con el viento de popa pero difíciles de manejar contra el viento."
respuesta: "cuadradas"
respuestas_validas:
  - "cuadradas"
  - "cuadrada"
explicacion: "La combinación de velas cuadradas (para velocidad con viento de popa) y latinas (para maniobrabilidad) fue común en las naos posteriores."
```

### 25 — El Tratado de Tordesillas y Brasil
```yaml
metadata:
  materia: "historia_profunda"
  tema: "navegacion"
  nivel: "intermedio"
  tags: ["colonizacion", "brasil"]
tipo: vf
enunciado: "El Tratado de Tordesillas de 1494 asignó inmediatamente la totalidad del territorio que hoy es Brasil a España, ya que la línea de demarcación pasaba al este de la costa americana."
respuesta: falso
explicacion: "La línea pasaba a 370 leguas de Cabo Verde, lo que dejaba la proyección oriental de Sudamérica (Brasil) en la zona portuguesa, aunque esto no fue claro hasta el descubrimiento de Cabral en 1500."
```

