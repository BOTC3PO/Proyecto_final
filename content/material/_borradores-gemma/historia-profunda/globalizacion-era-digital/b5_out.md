### 1 — Fenómeno de integración económica
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["economia", "comercio"]

variables:
  escenario: uno_de([["La firma de un tratado de libre comercio entre dos bloques continentales", "globalización económica"], ["La difusión masiva de una serie de televisión coreana en todo el mundo", "globalización cultural"], ["La creación de una nueva red de protocolos de comunicación para internet", "globalización tecnológica"]])
  idx: uno_de([0, 1, 2])

enunciado: "Un ejemplo de {escenario[idx][0]} es un fenómeno de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["globalización económica", "globalización cultural", "globalización tecnológica"]

explicacion: |
  El escenario describe la integración de mercados, la difusión de contenidos o la estandarización de redes, pilares de la globalización según su dimensión.
```

### 2 — El impacto de las redes sociales
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  caso: uno_de([["El uso de una misma aplicación de mensajería instantánea en todos los continentes", "tecnológica"], ["La adopción de modas estéticas globales a través de influencers", "cultural"], ["La fragmentación de las cadenas de suministro globales", "económica"]])
  idx: uno_de([0, 1, 2])

enunciado: "La adopción de {caso[idx][0]} representa una dimensión {caso[idx][1]} de la globalización."

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["tecnológica", "cultural", "económica"]

explicacion: |
  La digitalización permite que las herramientas, las costumbres o los flujos de capital se muevan de forma casi instantánea por el planeta.
```

### 3 — Dimensiones de la globalización
```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "La capacidad de transmitir datos de forma instantánea a través de satélites es un ejemplo de globalización ___."

respuesta_validas: ["tecnológica"]
respuesta: "tecnológica"
tipo: completar

explicacion: |
  La infraestructura tecnológica es el soporte físico y digital que permite que las otras dimensiones (económica y cultural) operen a escala global.
```

### 4 — Secuencia de la digitalización económica
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "economia"]

enunciado: "Ordena el proceso de integración de un mercado digital global:"

pasos:
  - "Desarrollo de infraestructura de fibra óptica y satélites"
  - "Creación de plataformas de comercio electrónico transfronterizo"
  - "Consolidación de un mercado de consumo global interconectado"

opciones_explicitas: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
respuesta: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
tipo: ordenar

explicacion: |
  Primero se requiere el medio (tecnología), luego la herramienta de intercambio (plataforma) y finalmente el resultado sistémico (mercado global).
```

### 5 — Identificación de flujos culturales
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "consumo"]

variables:
  ejemplo: uno_de([["La estandarización de los menús de comida rápida en países con dietas tradicionales", "cultural"], ["El flujo de capitales especulativos entre bolsas de valores", "económica"], ["La exportación de software de código abierto para uso mundial", "tecnológica"]])
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {ejemplo[idx][0]} es un ejemplo de globalización ___."

respuesta: ejemplo[idx][1]
tipo: mc
opciones_explicitas: ["cultural", "económica", "tecnológica"]

explicacion: |
  Cuando los hábitos de consumo o valores se vuelven homogéneos a pesar de las diferencias locales, estamos ante la globalización cultural.
```