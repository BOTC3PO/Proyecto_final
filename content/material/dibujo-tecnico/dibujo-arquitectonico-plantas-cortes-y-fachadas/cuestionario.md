# Dibujo técnico — Dibujo arquitectónico: plantas, cortes y fachadas (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Juego de planos

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un juego de planos de obra incluye como mínimo..."
tipo: mc
opciones_explicitas:
  - "Plantas, cortes y vistas"
  - "Solo el rótulo"
  - "Una foto"
respuesta: "Plantas, cortes y vistas"

explicacion: |
  Más detalles e instalaciones.
```

### 2 — Planta

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La planta de un edificio es..."
tipo: mc
opciones_explicitas:
  - "La vista superior de un corte horizontal a cierta altura"
  - "Una vista frontal"
  - "Una perspectiva"
respuesta: "La vista superior de un corte horizontal a cierta altura"

explicacion: |
  Muestra muros, aberturas y escaleras.
```

### 3 — Altura del corte

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  h: uno_de([1.2])

respuesta: h * 100
tipo: input
tolerancia_abs: 0

enunciado: "El plano de corte horizontal de una planta se ubica a unos {h} m del piso. ¿Cuántos centímetros son?"

pasos:
  - "1 m = 100 cm"

explicacion: |
  Se multiplica por 100.
```

### 4 — Cada nivel

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Cada nivel del edificio tiene..."
tipo: mc
opciones_explicitas:
  - "Su propia planta"
  - "Un único dibujo para todos"
  - "Ninguna planta"
respuesta: "Su propia planta"

explicacion: |
  Se numeran o nombran.
```

### 5 — Planta de techos

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La planta de techos es..."
tipo: mc
opciones_explicitas:
  - "La vista desde arriba del techo"
  - "El interior de los ambientes"
  - "Un corte vertical"
respuesta: "La vista desde arriba del techo"

explicacion: |
  Muestra pendientes y cumbreras.
```

### 6 — Ubicación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La planta de ubicación muestra..."
tipo: mc
opciones_explicitas:
  - "El lote en su manzana, con orientación"
  - "La cocina"
  - "La instalación eléctrica"
respuesta: "El lote en su manzana, con orientación"

explicacion: |
  Y las líneas municipales.
```

### 7 — Corte

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El corte arquitectónico es..."
tipo: mc
opciones_explicitas:
  - "Una sección vertical que atraviesa el edificio"
  - "Una vista exterior"
  - "Una planta"
respuesta: "Una sección vertical que atraviesa el edificio"

explicacion: |
  Muestra alturas y niveles.
```

### 8 — Qué muestra corte

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un corte permite ver..."
tipo: mc
opciones_explicitas:
  - "Alturas, losas, escaleras y cimientos"
  - "Los muebles del dormitorio"
  - "Las cañerías únicamente"
respuesta: "Alturas, losas, escaleras y cimientos"

explicacion: |
  Relación vertical de espacios.
```

### 9 — Vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las vistas o fachadas muestran..."
tipo: mc
opciones_explicitas:
  - "El exterior del edificio visto de frente"
  - "El interior"
  - "Las instalaciones"
respuesta: "El exterior del edificio visto de frente"

explicacion: |
  Cada lado tiene su vista.
```

### 10 — Nombres vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las vistas se nombran por..."
tipo: mc
opciones_explicitas:
  - "Orientación o por calle"
  - "Color"
  - "Fecha"
respuesta: "Orientación o por calle"

explicacion: |
  Por ejemplo, vista norte o frente.
```

### 11 — Puertas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En una planta, una puerta se indica con..."
tipo: mc
opciones_explicitas:
  - "Un arco de 90° que muestra hacia dónde abre"
  - "Un rombo"
  - "Una cruz"
respuesta: "Un arco de 90° que muestra hacia dónde abre"

explicacion: |
  Es la simbología habitual.
```

### 12 — Ventanas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las ventanas en planta se indican con..."
tipo: mc
opciones_explicitas:
  - "Líneas paralelas dentro del muro"
  - "Un círculo"
  - "Un triángulo"
respuesta: "Líneas paralelas dentro del muro"

explicacion: |
  Marcan la abertura.
```

### 13 — Ejes

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Los ejes de columnas y muros se dibujan con línea..."
tipo: mc
opciones_explicitas:
  - "De trazo y punto"
  - "Continua gruesa"
  - "Ondulada"
respuesta: "De trazo y punto"

explicacion: |
  Definen la estructura.
```

### 14 — Nivel cero

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Los niveles de piso se indican respecto de..."
tipo: mc
opciones_explicitas:
  - "Un punto de referencia cero (0,00)"
  - "Una opinión"
  - "El nivel del mar siempre"
respuesta: "Un punto de referencia cero (0,00)"

explicacion: |
  Con cotas de nivel.
```

### 15 — Escala planta

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una escala habitual para plantas generales es..."
tipo: mc
opciones_explicitas:
  - "1:100"
  - "1:1"
  - "1000:1"
respuesta: "1:100"

explicacion: |
  Para detalles se usa 1:50, 1:20, 1:10.
```

### 16 — Real a papel

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  real: uno_de([3, 4, 5, 6, 8, 10])

respuesta: real * 100 / 100
tipo: input
tolerancia_abs: 0

enunciado: "A escala 1:100, un muro de {real} m de largo ocupa en el papel ___ cm."

pasos:
  - "1 cm en el papel = 100 cm reales = 1 m"
  - "Por lo tanto, {real} m son {real} cm"

explicacion: |
  Con 1:100, cada metro real mide 1 cm en el papel.
```

### 17 — Papel a real

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  cm: random(3, 20)

respuesta: cm
tipo: input
tolerancia_abs: 0

enunciado: "A escala 1:100, un segmento mide {cm} cm en el papel. ¿Cuántos metros mide en la realidad?"

pasos:
  - "1 cm en papel = 1 m real"

explicacion: |
  A 1:100 la equivalencia es 1 cm = 1 m.
```

### 18 — Escala 50

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  cm: random(2, 20)

respuesta: cm * 50 / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "A escala 1:50, un segmento mide {cm} cm en el papel. ¿Cuántos metros mide en la realidad? (decimales)"

pasos:
  - "Real = papel × 50"
  - "Pasar de cm a m dividiendo por 100"

explicacion: |
  Cada centímetro del papel son 50 cm reales.
```

### 19 — Cotas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las cotas parciales y totales sirven para..."
tipo: mc
opciones_explicitas:
  - "Controlar que las sumas cierren"
  - "Decorar"
  - "Ahorrar tinta"
respuesta: "Controlar que las sumas cierren"

explicacion: |
  Evita errores en obra.
```

### 20 — Acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "En obra se prioriza acotar con claridad porque quien construye mide en el terreno."

explicacion: |
  Una acotación inconsistente cuesta dinero.
```

### 21 — Orientación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La orientación de un ambiente afecta..."
tipo: mc
opciones_explicitas:
  - "La luz, el calor y el consumo de energía"
  - "El color de la pintura"
  - "El tamaño del papel"
respuesta: "La luz, el calor y el consumo de energía"

explicacion: |
  Por eso se indica el norte.
```

### 22 — Zonas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En una vivienda se suelen distinguir zonas..."
tipo: mc
opciones_explicitas:
  - "Social, de servicio y privada"
  - "Roja, verde y azul"
  - "Alta, media y baja"
respuesta: "Social, de servicio y privada"

explicacion: |
  Se organiza la circulación.
```

### 23 — Muros cortados

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Los muros cortados en una planta se rellenan con rayado o llenado más ___."
respuestas_validas:
  - "oscuro"

explicacion: |
  Para distinguirlos.
```
