### 1 — El estallido del conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "causas_primera_guerra"
  nivel: "basico"
  tags: ["causas", "nacionalismo", "imperialismo"]

respuesta: "Francisco Fernando"
tipo: completar
respuestas_validas: ["Francisco Fernando"]

enunciado: "El asesinato del archiduque ___ en Sarajevo fue el detonante que activó el sistema de alianzas en Europa en 1914."

explicacion: |
  El asesinato del heredero al trono austrohúngaro, Francisco Fernando, por un nacionalista serbio, desencadenó la crisis de julio que llevó a la guerra.
```

### 2 — El sistema de alianzas
```
metadata:
  materia: "historia_profunda"
  tema: "alianzas_guerra"
  nivel: "intermedio"
  tags: ["alianzas", "triple_entente", "triple_entente"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: 
  - ["Triple Entente", "Triple Alianza"]
  - ["Triple Entente", "Triple Alianza"]

enunciado: "Si consideramos el bloque de potencias formado por Francia, Gran Bretaña y Rusia, estamos hablando de la {tabla[idx][0]}."

pasos:
  - "Identificar los miembros del bloque mencionado."
  - "Diferenciar entre la Triple Entente y la Triple Alianza."

explicacion: |
  La Triple Entente estaba compuesta por Francia, Reino Unido y Rusia, mientras que la Triple Alianza (Potencias Centrales) incluía a Alemania, Austria-Hungría e Italia (inicialmente).

tabla:
  - ["Triple Entente", "Triple Entente"]
  - ["Triple Alianza", "Triple Alianza"]
```

### 3 — La guerra de posiciones
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_trincheras"
  nivel: "basico"
  tags: ["trench_warfare", "estancamiento"]

respuesta: "estancamiento"
tipo: mc
opciones_explicitas: ["movimiento", "estancamiento", "guerra_relampago"]

enunciado: "El predominio de la defensa sobre la ofensiva y el uso de redes de trincheras provocaron un ___ táctico en el frente occidental."

explicacion: |
  La guerra de trincheras impidió avances significativos durante años, convirtiendo el conflicto en una guerra de desgaste y posiciones estáticas.
```

### 4 — Evolución tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "tecnologia_militar"
  nivel: "intermedio"
  tags: ["tecnologia", "tanques", "guerra_quimica"]

respuesta: "tanques"
tipo: mc
opciones_explicitas: ["tanques", "aviones de combate", "submarinos", "guerra química"]

enunciado: "Para romper el estancamiento de las trincheras, los británicos introdujeron nuevos blindados conocidos como ___."

explicacion: |
  Aunque los tanques no ganaron la guerra por sí solos, fueron un intento tecnológico clave para cruzar el terreno devastado de las trincheras.
```

### 5 — Orden cronológico de causas
```
metadata:
  materia: "historia_profunda"
  tema: "causas_guerra"
  nivel: "avanzado"
  tags: ["ordenar", "causas"]

respuesta: ["Imperialismo", "Nacionalismo", "Asesinato de Francisco Fernando"]
tipo: ordenar
opciones_explicitas: ["Nacionalismo", "Imperialismo", "Asesinato de Francisco Fernando"]

enunciado: "Ordena cronológicamente las tensiones que llevaron a la guerra, desde las causas estructurales de largo plazo hasta el evento detonante."

explicacion: |
  Primero existieron las tensiones imperialistas y nacionalistas (causas estructurales) y finalmente el asesinato en Sarajevo (causa inmediata).
```