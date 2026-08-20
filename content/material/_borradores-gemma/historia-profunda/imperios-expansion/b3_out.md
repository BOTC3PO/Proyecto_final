### 1 — El motor de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "basico"
  tags: ["conquista", "militar"]

respuesta: "conquista militar"
tipo: mc

enunciado: "La estrategia de expansión que consiste en la anexión de nuevos territorios mediante el uso de la fuerza armada se denomina ___."

opciones_explicitas: ["conquista militar", "tratado diplomático", "intercambio cultural", "asimilación religiosa"]

explicacion: |
  La conquista militar ha sido históricamente uno de los métodos más directos para la expansión de un imperio, permitiendo la toma de recursos y control territorial inmediato.
```

### 2 — Infraestructura y Control
```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["infraestructura", "caminos"]

variables:
  escenario: uno_de([
    ["un sistema de calzadas romanas", "facilitar el movimiento de legiones y el comercio"],
    ["la Gran Muralla China", "defender fronteras y controlar el paso de caravanas"],
    ["el sistema de caminos del Inca", "conectar los diversos puntos del Tahuantinsuyo para la administración"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["facilitar el movimiento de legiones y el comercio", "defender fronteras y controlar el paso de caravanas", "conectar los diversos puntos del Tahuantinsuyo para la administración"]

enunciado: "El desarrollo de obras como {escenario[0]} tenía como objetivo principal {escenario[1]}."

explicacion: |
  La construcción de infraestructura vial es una herramienta de poder que permite la proyección de la fuerza militar y la integración económica del territorio conquistado.
```

### 3 — El orden administrativo
```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "avanzado"
  tags: ["administracion", "centralizacion"]

respuesta: "centralizada"
tipo: mc

enunciado: "Cuando un imperio establece un gobierno único que ejerce el control sobre territorios con diversas culturas y leyes, está aplicando una administración ___."

opciones_explicitas: ["descentralizada", "centralizada", "autónoma", "federativa"]

explicacion: |
  La administración centralizada permite al núcleo del imperio imponer su voluntad y recaudar tributos de manera eficiente en zonas distantes.
```

### 4 — Flujos de riqueza
```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["comercio", "rutas"]

respuesta: "Ruta de la Seda"
tipo: completar
respuestas_validas: ["Ruta de la Seda", "Ruta de la Fraga", "Ruta del Ámbar"]

enunciado: "La expansión de los imperios asiáticos a menudo se vio impulsada por el control de las redes comerciales, siendo la ___ un ejemplo fundamental de conexión entre Oriente y Occidente."

explicacion: |
  El control de las rutas comerciales permite al imperio no solo obtener riqueza mediante impuestos, sino también expandir su influencia cultural.
```

### 5 — Elementos de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "estrategias_expansion"
  nivel: "intermedio"
  tags: ["estrategias", "ordenar"]

respuesta: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]
tipo: ordenar
opciones_explicitas: ["Conquista militar", "Control de rutas comerciales", "Construcción de infraestructura", "Administración de territorios"]

enunciado: "Ordene las fases típicas de una expansión imperial desde la fase de choque hasta la fase de consolidación:"

explicacion: |
  Primero se suele imponer la fuerza (conquista), luego se asegura la riqueza (comercio), se facilita el movimiento (infraestructura) y finalmente se estabiliza el control (administración).
```