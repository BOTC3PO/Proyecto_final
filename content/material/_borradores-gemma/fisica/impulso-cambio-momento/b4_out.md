### 1 — Impulso vs Fuerza
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "teoria"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "momento", "aceleracion", "velocidad"]

enunciado: "El impulso se define como el producto de una ___ aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa."

explicacion: |
  El impulso (J) es el producto de la fuerza por el tiempo (J = F * Δt). Mientras que la fuerza es la causa inmediata del cambio de movimiento, el impulso describe el efecto acumulado de esa fuerza en un intervalo de tiempo determinado.
```

### 2 — Relación entre Impulso y Momento
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["teorema", "momento", "impulso"]

variables:
  escenario: uno_de([
    ["un objeto gana velocidad", "aumenta"],
    ["un objeto frena", "disminuye"],
    ["un objeto mantiene velocidad", "es_cero"]
  ])

respuesta: escenario[1]
tipo: "vf"

enunciado: "Si el impulso aplicado a un objeto es positivo (J > 0), el cambio en el momento lineal del objeto es ___."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, el impulso es igual al cambio en el momento lineal (J = Δp). Si el impulso es positivo, el momento final es mayor que el inicial, por lo tanto, el cambio es positivo (aumenta).
```

### 3 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "kg·m/s"
tipo: "completar"
respuestas_validas: ["kg·m/s", "N·s", "kg·m/s^2"]

enunciado: "El impulso puede expresarse en unidades de Newton-segundo (N·s) o en unidades de momento lineal, que son ___."

explicacion: |
  Ambas unidades son dimensionalmente equivalentes. Como F = kg·m/s² y t = s, entonces F·t = (kg·m/s²)·s = kg·m/s.
```

### 4 — Componentes del Impulso
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["vector", "direccion"]

respuesta: ["Fuerza", "Tiempo", "Cambio de momento"]
tipo: "ordenar"
opciones_explicitas: ["Fuerza", "Tiempo", "Cambio de momento"]

enunciado: "Ordene los conceptos de izquierda a derecha según la relación causal: la ___ aplicada durante un ___ produce un ___."

explicacion: |
  La secuencia lógica es: la fuerza (causa) actúa durante un intervalo de tiempo (duración) y esto resulta en un cambio en el momento lineal (efecto).
```

### 5 — Dependencia del tiempo
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["grafico", "fuerza_tiempo"]

variables:
  caso: uno_de([
    [100.0, "aumenta"],
    [20.0, "disminuye"],
    [0.0, "se_mantiene"]
  ])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se_mantiene"]

enunciado: "Si una fuerza constante de {caso[0]} N actúa sobre un objeto durante un tiempo de {caso[1]} s, el cambio en el momento lineal será de {caso[2]} unidades de medida. Si el tiempo de aplicación se duplica, el cambio en el momento lineal..."

explicacion: |
  Dado que J = F * Δt, el impulso es directamente proporcional al tiempo. Si el tiempo se duplica manteniendo la fuerza constante, el cambio en el momento lineal también se duplica (aumenta).
```