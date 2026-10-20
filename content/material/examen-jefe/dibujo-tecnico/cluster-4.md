# Examen jefe — [PENDIENTE #937]

> Logro #937. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: tolerancias-y-ajustes (23 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La tolerancia es..."
tipo: mc
opciones_explicitas:
  - "La variación admisible de una medida"
  - "El error de la máquina"
  - "El nombre de la pieza"
respuesta: "La variación admisible de una medida"

explicacion: |
  Define el intervalo aceptable.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  sup: uno_de([0.02, 0.03, 0.05])
  inf: uno_de([0.01, 0.02, 0.04])

respuesta: redondear(sup + inf, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota es {nom} con desviación superior +{sup} e inferior −{inf} mm. ¿Cuál es la tolerancia, en mm?"

pasos:
  - "Tolerancia = desviación superior − desviación inferior"
  - "Con inferior negativa, se suman los valores"

explicacion: |
  Es el ancho del intervalo admisible.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  sup: uno_de([0.02, 0.03, 0.05])

respuesta: redondear(nom + sup, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota {nom} +{sup} / −0,01 mm. ¿Cuál es la medida máxima admisible, en mm?"

pasos:
  - "Máxima = nominal + desviación superior"

explicacion: |
  La pieza mayor que ese valor se rechaza.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  inf: uno_de([0.01, 0.02, 0.04])

respuesta: redondear(nom - inf, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota {nom} +0,02 / −{inf} mm. ¿Cuál es la medida mínima admisible, en mm?"

pasos:
  - "Mínima = nominal − |desviación inferior|"

explicacion: |
  La pieza menor que ese valor se rechaza.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  tol: uno_de([0.02, 0.05, 0.1])

respuesta: redondear(2 * tol, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota se especifica como {nom} ± {tol} mm. ¿Cuál es la tolerancia total, en mm?"

pasos:
  - "Tolerancia total = 2 × tolerancia simétrica"

explicacion: |
  El intervalo va de nom − tol a nom + tol.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Cuanto más chica la tolerancia..."
tipo: mc
opciones_explicitas:
  - "Más cara y precisa debe ser la fabricación"
  - "Más barata"
  - "Igual de cara"
respuesta: "Más cara y precisa debe ser la fabricación"

explicacion: |
  Por eso se especifica la más grande que funcione.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Conviene especificar siempre la tolerancia más chica posible."

explicacion: |
  Aumenta el costo sin necesidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un ajuste con juego el eje siempre es..."
tipo: mc
opciones_explicitas:
  - "Menor que el agujero"
  - "Mayor que el agujero"
  - "Igual al agujero"
respuesta: "Menor que el agujero"

explicacion: |
  Permite movimiento.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un ajuste con interferencia el eje siempre es..."
tipo: mc
opciones_explicitas:
  - "Mayor que el agujero"
  - "Menor que el agujero"
  - "Igual al agujero"
respuesta: "Mayor que el agujero"

explicacion: |
  Se monta a presión o con calor.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El ajuste indeterminado (de transición) puede dar..."
tipo: mc
opciones_explicitas:
  - "Un pequeño juego o un pequeño aprieto"
  - "Solo juego"
  - "Ninguna unión"
respuesta: "Un pequeño juego o un pequeño aprieto"

explicacion: |
  Se usa para ubicar con precisión piezas desmontables.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un eje que gira en un buje requiere un ajuste..."
tipo: mc
opciones_explicitas:
  - "Con juego"
  - "Con interferencia"
  - "Soldado"
respuesta: "Con juego"

explicacion: |
  Para que pueda girar.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una rueda calada a un eje requiere un ajuste..."
tipo: mc
opciones_explicitas:
  - "Con interferencia"
  - "Con juego"
  - "Indeterminado siempre"
respuesta: "Con interferencia"

explicacion: |
  Para quedar fija.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  idx: uno_de([0, 1, 2])
  amaxs: [25.021, 30.021, 40.025]
  emins: [24.980, 29.980, 39.975]
  Amax: amaxs[idx]
  emin: emins[idx]

respuesta: redondear(Amax - emin, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un agujero admite como máximo {Amax} mm y el eje como mínimo {emin} mm. ¿Cuál es el juego máximo, en mm?"

pasos:
  - "Juego máximo = agujero máximo − eje mínimo"

explicacion: |
  Es la mayor holgura posible.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  idx: uno_de([0, 1, 2])
  amins: [25.000, 30.000, 40.000]
  emaxs: [24.993, 29.993, 39.991]
  Amin: amins[idx]
  emax: emaxs[idx]

respuesta: redondear(Amin - emax, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un agujero admite como mínimo {Amin} mm y el eje como máximo {emax} mm. ¿Cuál es el juego mínimo, en mm?"

pasos:
  - "Juego mínimo = agujero mínimo − eje máximo"

explicacion: |
  Es la menor holgura posible.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Si el juego mínimo es negativo, hay..."
tipo: mc
opciones_explicitas:
  - "Interferencia en alguna combinación"
  - "Siempre holgura"
  - "Un error de dibujo"
respuesta: "Interferencia en alguna combinación"

explicacion: |
  El eje puede ser mayor que el agujero.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La norma ISO 286 organiza las tolerancias con..."
tipo: mc
opciones_explicitas:
  - "Un código de letra y número"
  - "Colores"
  - "Solo números"
respuesta: "Un código de letra y número"

explicacion: |
  Por ejemplo H7.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En el código ISO, el número indica..."
tipo: mc
opciones_explicitas:
  - "El ancho de la zona de tolerancia"
  - "La posición de la zona"
  - "El material"
respuesta: "El ancho de la zona de tolerancia"

explicacion: |
  A menor número, más precisión.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En el código ISO, la letra indica..."
tipo: mc
opciones_explicitas:
  - "La posición de la zona respecto de la medida nominal"
  - "El ancho de la zona"
  - "El color"
respuesta: "La posición de la zona respecto de la medida nominal"

explicacion: |
  Mayúscula para agujeros, minúscula para ejes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las letras mayúsculas (H, G, P) se usan para..."
tipo: mc
opciones_explicitas:
  - "Agujeros"
  - "Ejes"
  - "Tornillos"
respuesta: "Agujeros"

explicacion: |
  Las minúsculas, para ejes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "En el sistema de agujero base..."
tipo: mc
opciones_explicitas:
  - "El agujero se mantiene H y se varía el eje"
  - "Se varía el agujero"
  - "Se varía el material"
respuesta: "El agujero se mantiene H y se varía el eje"

explicacion: |
  Permite lograr distintos ajustes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Según la bibliografía técnica, un ajuste H7/g6 es..."
tipo: mc
opciones_explicitas:
  - "Con juego (deslizante)"
  - "Con fuerte interferencia"
  - "Soldado"
respuesta: "Con juego (deslizante)"

explicacion: |
  H7/p6, en cambio, es con interferencia.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una tolerancia geométrica controla, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "La forma o la posición, como la redondez"
  - "Solo el color"
  - "El peso"
respuesta: "La forma o la posición, como la redondez"

explicacion: |
  Un eje puede tener el diámetro correcto y estar ovalado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Una pieza fuera de las medidas ___ se rechaza o se reprocesa."
respuestas_validas:
  - "límite"

explicacion: |
  Máxima y mínima.
```

## Sección: dibujo-arquitectonico-plantas-cortes-y-fachadas (23 preguntas)

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

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El plano de corte horizontal de una planta se ubica aproximadamente a..."
tipo: mc
opciones_explicitas:
  - "1,20 m del piso"
  - "10 cm del piso"
  - "5 m del piso"
respuesta: "1,20 m del piso"

explicacion: |
  Así muestra muros, aberturas y elementos bajos.
```

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

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_arquitectonico_plantas_cortes_y_fachadas"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  real: uno_de([3, 4, 5, 6, 8, 10])

respuesta: real
tipo: input
tolerancia_abs: 0

enunciado: "A escala 1:100, un muro de {real} m de largo ocupa en el papel ___ cm."

pasos:
  - "1 cm en el papel = 100 cm reales = 1 m"
  - "Por lo tanto, {real} m son {real} cm"

explicacion: |
  Con 1:100, cada metro real mide 1 cm en el papel.
```

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

## Sección: dibujo-electrico-y-esquemas-de-instalaciones (23 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un plano eléctrico se dibujan..."
tipo: mc
opciones_explicitas:
  - "Símbolos normalizados"
  - "La forma real de cada componente"
  - "Fotografías"
respuesta: "Símbolos normalizados"

explicacion: |
  Representan lámparas, interruptores, motores, etc.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Los símbolos eléctricos se definen en normas..."
tipo: mc
opciones_explicitas:
  - "Internacionales y nacionales"
  - "Solo locales de cada taller"
  - "De cada alumno"
respuesta: "Internacionales y nacionales"

explicacion: |
  Por ejemplo la IEC.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En la Argentina, la referencia técnica para instalaciones eléctricas en inmuebles es de..."
tipo: mc
opciones_explicitas:
  - "La Asociación Electrotécnica Argentina (AEA)"
  - "La Real Academia"
  - "El INDEC"
respuesta: "La Asociación Electrotécnica Argentina (AEA)"

explicacion: |
  Verificar la edición vigente.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El esquema unifilar representa..."
tipo: mc
opciones_explicitas:
  - "Un conjunto de conductores con una sola línea"
  - "Cada conductor por separado"
  - "Solo el tablero"
respuesta: "Un conjunto de conductores con una sola línea"

explicacion: |
  Con trazos que indican la cantidad de conductores.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El esquema unifilar se usa sobre todo para..."
tipo: mc
opciones_explicitas:
  - "Mostrar tablero, protecciones y circuitos de una instalación"
  - "Mostrar cada cable de un mando de motor"
  - "Dibujar una vista de un edificio"
respuesta: "Mostrar tablero, protecciones y circuitos de una instalación"

explicacion: |
  Es compacto y claro.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El esquema multifilar dibuja..."
tipo: mc
opciones_explicitas:
  - "Cada conductor"
  - "Solo la fuente"
  - "El edificio"
respuesta: "Cada conductor"

explicacion: |
  Útil en circuitos de mando.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El esquema topográfico muestra..."
tipo: mc
opciones_explicitas:
  - "La posición real de los elementos en el espacio"
  - "Solo la lógica"
  - "El presupuesto"
respuesta: "La posición real de los elementos en el espacio"

explicacion: |
  Sobre la planta del edificio.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El esquema funcional busca..."
tipo: mc
opciones_explicitas:
  - "Explicar cómo opera el circuito de mando"
  - "Mostrar las distancias"
  - "Medir"
respuesta: "Explicar cómo opera el circuito de mando"

explicacion: |
  Ordena para comprender, no para ubicar.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un esquema, un punto en el cruce de dos líneas indica..."
tipo: mc
opciones_explicitas:
  - "Una conexión"
  - "Que no se tocan"
  - "Un error"
respuesta: "Una conexión"

explicacion: |
  Los cruces sin conexión no llevan punto.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un cruce de líneas sin punto significa..."
tipo: mc
opciones_explicitas:
  - "Que los conductores no están conectados"
  - "Que están conectados"
  - "Que hay un fusible"
respuesta: "Que los conductores no están conectados"

explicacion: |
  Pasan uno por encima del otro.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una llave termomagnética es un elemento de..."
tipo: mc
opciones_explicitas:
  - "Protección"
  - "Iluminación"
  - "Medición de ángulos"
respuesta: "Protección"

explicacion: |
  Corta ante sobrecargas y cortocircuitos.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El interruptor diferencial protege sobre todo a..."
tipo: mc
opciones_explicitas:
  - "Las personas contra contactos eléctricos"
  - "Los muebles"
  - "Las lámparas"
respuesta: "Las personas contra contactos eléctricos"

explicacion: |
  Detecta fugas a tierra.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En un esquema, Q1, M1 y F1 son..."
tipo: mc
opciones_explicitas:
  - "Designaciones de llave, motor y fusible, según la convención"
  - "Cotas"
  - "Escalas"
respuesta: "Designaciones de llave, motor y fusible, según la convención"

explicacion: |
  Identifican componentes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un plano de vivienda, los símbolos eléctricos se colocan sobre..."
tipo: mc
opciones_explicitas:
  - "La planta arquitectónica"
  - "La fachada solamente"
  - "Una hoja en blanco"
respuesta: "La planta arquitectónica"

explicacion: |
  En la posición de cada punto de luz y tomacorriente.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Junto al circuito se anotan las secciones de los conductores y..."
tipo: mc
opciones_explicitas:
  - "La capacidad de las protecciones"
  - "El color de la pared"
  - "El nombre del dibujante"
respuesta: "La capacidad de las protecciones"

explicacion: |
  Datos clave para seguridad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El primer paso para leer un esquema eléctrico es..."
tipo: mc
opciones_explicitas:
  - "Ubicar la fuente o el tablero de origen"
  - "Mirar los colores"
  - "Contar los símbolos"
respuesta: "Ubicar la fuente o el tablero de origen"

explicacion: |
  Luego se sigue cada circuito.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En la lectura de un esquema hay que verificar..."
tipo: mc
opciones_explicitas:
  - "Las conexiones a tierra"
  - "El color del papel"
  - "La tipografía"
respuesta: "Las conexiones a tierra"

explicacion: |
  Son parte de la seguridad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "El esquema se ordena de modo que la energía fluya de izquierda a derecha o de arriba hacia abajo."

explicacion: |
  Facilita la lectura.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las conexiones se trazan con líneas..."
tipo: mc
opciones_explicitas:
  - "Rectas, horizontales y verticales"
  - "Curvas libres"
  - "Diagonales al azar"
respuesta: "Rectas, horizontales y verticales"

explicacion: |
  Se evitan cruces innecesarios.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "avanzado"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Un esquema reemplaza el procedimiento de corte y verificación de ausencia de tensión."

explicacion: |
  Es una ayuda, no un reemplazo.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Las instalaciones eléctricas las debe realizar y firmar..."
tipo: mc
opciones_explicitas:
  - "Personal matriculado, según la normativa"
  - "Cualquier persona"
  - "Un dibujante"
respuesta: "Personal matriculado, según la normativa"

explicacion: |
  Verificar la normativa de cada jurisdicción.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Los planos eléctricos usan ___ normalizados en vez de la forma real."
respuestas_validas:
  - "símbolos"

explicacion: |
  Figuras simples que representan componentes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "dibujo_electrico_y_esquemas_de_instalaciones"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Una pregunta clave al leer un esquema es..."
tipo: mc
opciones_explicitas:
  - "¿Qué protege a qué, y qué pasa si falla este elemento?"
  - "¿Qué color tiene?"
  - "¿Quién lo dibujó?"
respuesta: "¿Qué protege a qué, y qué pasa si falla este elemento?"

explicacion: |
  Es lectura funcional.
```

## Sección: rugosidad-y-acabado-superficial (23 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad es..."
tipo: mc
opciones_explicitas:
  - "El conjunto de irregularidades finas de una superficie"
  - "El color de la pieza"
  - "El peso de la pieza"
respuesta: "El conjunto de irregularidades finas de una superficie"

explicacion: |
  Dejadas por el proceso de fabricación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad proviene principalmente de..."
tipo: mc
opciones_explicitas:
  - "El proceso de fabricación"
  - "El color"
  - "La iluminación"
respuesta: "El proceso de fabricación"

explicacion: |
  Marcas de herramienta, abrasión, fundición.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad influye en..."
tipo: mc
opciones_explicitas:
  - "Rozamiento, desgaste, estanqueidad y fatiga"
  - "Solo el color"
  - "Solo el costo"
respuesta: "Rozamiento, desgaste, estanqueidad y fatiga"

explicacion: |
  Es una propiedad funcional.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un asiento de válvula debe tener rugosidad..."
tipo: mc
opciones_explicitas:
  - "Lo bastante baja para sellar"
  - "Máxima"
  - "Indistinta"
respuesta: "Lo bastante baja para sellar"

explicacion: |
  La estanqueidad depende del acabado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Las marcas profundas de una superficie pueden..."
tipo: mc
opciones_explicitas:
  - "Concentrar tensiones y originar fisuras"
  - "Aumentar la resistencia siempre"
  - "No afectar nada"
respuesta: "Concentrar tensiones y originar fisuras"

explicacion: |
  Por eso se pulen piezas sometidas a fatiga.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Conviene siempre especificar la menor rugosidad posible."

explicacion: |
  Cada mejora cuesta más: se especifica la necesaria.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Ra significa..."
tipo: mc
opciones_explicitas:
  - "Rugosidad media aritmética"
  - "Radio de la arista"
  - "Rotación angular"
respuesta: "Rugosidad media aritmética"

explicacion: |
  Es el parámetro más usado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La rugosidad Ra se expresa en..."
tipo: mc
opciones_explicitas:
  - "Micrómetros (µm)"
  - "Metros"
  - "Kilogramos"
respuesta: "Micrómetros (µm)"

explicacion: |
  Un micrómetro es una milésima de milímetro.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  ra: uno_de([0.8, 1.6, 3.2, 6.3, 12.5])

respuesta: ra / 1000
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una superficie tiene Ra = {ra} µm. ¿Cuántos milímetros son?"

pasos:
  - "1 µm = 0,001 mm"

explicacion: |
  Se divide por mil.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  mm: uno_de([0.0004, 0.0008, 0.0016, 0.0032])

respuesta: mm * 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Una rugosidad media de {mm} mm, ¿cuántos micrómetros son?"

pasos:
  - "1 mm = 1000 µm"

explicacion: |
  Se multiplica por mil.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Un Ra menor significa una superficie..."
tipo: mc
opciones_explicitas:
  - "Más lisa"
  - "Más rugosa"
  - "Más pesada"
respuesta: "Más lisa"

explicacion: |
  La rugosidad es la altura media de las irregularidades.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué superficie es más lisa?"
tipo: mc
opciones_explicitas:
  - "Ra 0,4 µm"
  - "Ra 3,2 µm"
  - "Ra 12,5 µm"
respuesta: "Ra 0,4 µm"

explicacion: |
  El menor valor indica mayor suavidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Rz describe..."
tipo: mc
opciones_explicitas:
  - "La altura promedio de crestas a valles"
  - "El peso de la pieza"
  - "El color"
respuesta: "La altura promedio de crestas a valles"

explicacion: |
  Complementa a Ra.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Dos superficies con igual Ra siempre se comportan igual."

explicacion: |
  La forma de las irregularidades puede ser distinta.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Para lograr acabados muy finos se usan procesos como..."
tipo: mc
opciones_explicitas:
  - "Rectificado, lapeado y pulido"
  - "Fundición en arena"
  - "Corte con soplete"
respuesta: "Rectificado, lapeado y pulido"

explicacion: |
  Son más lentos y más caros.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El símbolo básico de rugosidad en un plano se parece a..."
tipo: mc
opciones_explicitas:
  - "Una 'V' a modo de visto"
  - "Un círculo"
  - "Una estrella"
respuesta: "Una 'V' a modo de visto"

explicacion: |
  Con el valor del parámetro cuando corresponde.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Un círculo dentro del símbolo de rugosidad indica que la superficie se obtiene..."
tipo: mc
opciones_explicitas:
  - "Sin arranque de material"
  - "Con arranque de material"
  - "Pintada"
respuesta: "Sin arranque de material"

explicacion: |
  Por ejemplo, fundición o forja.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Cuando la mayoría de las superficies tienen el mismo acabado..."
tipo: mc
opciones_explicitas:
  - "Se indica el valor general y se destacan las excepciones"
  - "Se repite en cada superficie"
  - "No se indica"
respuesta: "Se indica el valor general y se destacan las excepciones"

explicacion: |
  Evita recargar el plano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "El rugosímetro es un instrumento que..."
tipo: mc
opciones_explicitas:
  - "Recorre la superficie con un palpador y registra el perfil"
  - "Pesa la pieza"
  - "Mide la temperatura"
respuesta: "Recorre la superficie con un palpador y registra el perfil"

explicacion: |
  También hay métodos ópticos.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Las muestras patrón de rugosidad sirven para..."
tipo: mc
opciones_explicitas:
  - "Comparar visual y táctilmente"
  - "Cortar"
  - "Pintar"
respuesta: "Comparar visual y táctilmente"

explicacion: |
  Son referencias de rugosidad conocida.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Dos superficies que deslizan necesitan un acabado controlado."

explicacion: |
  Influye en rozamiento y desgaste.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Para que una pintura se adhiera bien, la superficie puede requerir..."
tipo: mc
opciones_explicitas:
  - "Algo de rugosidad"
  - "Pulido espejo"
  - "Aceite"
respuesta: "Algo de rugosidad"

explicacion: |
  No siempre lo más liso es lo mejor.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "rugosidad_y_acabado_superficial"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "La suma de rugosidad, ondulación y errores de forma se llama textura ___."
respuestas_validas:
  - "superficial"

explicacion: |
  Descripción completa del acabado.
```

## Sección: vistas-auxiliares-y-detalles (22 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una cara inclinada en las vistas principales se ve..."
tipo: mc
opciones_explicitas:
  - "Acortada o deformada"
  - "En verdadera magnitud"
  - "Invisible"
respuesta: "Acortada o deformada"

explicacion: |
  Un círculo inclinado aparece como elipse.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una cara se ve en verdadera magnitud cuando es..."
tipo: mc
opciones_explicitas:
  - "Paralela al plano de proyección"
  - "Perpendicular al plano de proyección"
  - "Oblicua a todos los planos"
respuesta: "Paralela al plano de proyección"

explicacion: |
  Entonces no hay deformación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una vista auxiliar se obtiene proyectando sobre un plano..."
tipo: mc
opciones_explicitas:
  - "Paralelo a la cara inclinada"
  - "Horizontal siempre"
  - "Vertical siempre"
respuesta: "Paralelo a la cara inclinada"

explicacion: |
  Muestra esa cara sin deformación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La vista auxiliar sirve sobre todo para..."
tipo: mc
opciones_explicitas:
  - "Dibujar y acotar con precisión la cara inclinada"
  - "Reducir el tamaño de la hoja"
  - "Agregar color"
respuesta: "Dibujar y acotar con precisión la cara inclinada"

explicacion: |
  Las medidas se toman en verdadera magnitud.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En una vista auxiliar se dibuja..."
tipo: mc
opciones_explicitas:
  - "Solo la parte que interesa"
  - "La pieza entera siempre"
  - "Solo el contorno exterior"
respuesta: "Solo la parte que interesa"

explicacion: |
  La cara inclinada y sus detalles.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una vista auxiliar fuera de proyección directa se indica con..."
tipo: mc
opciones_explicitas:
  - "Una flecha de mirada y una letra"
  - "Un color"
  - "Un número de plano"
respuesta: "Una flecha de mirada y una letra"

explicacion: |
  Para saber desde dónde se mira.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Las profundidades de la vista auxiliar se toman de..."
tipo: mc
opciones_explicitas:
  - "La otra vista donde la cara se ve de canto"
  - "El rótulo"
  - "El material"
respuesta: "La otra vista donde la cara se ve de canto"

explicacion: |
  Se transportan con el compás.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una vista parcial muestra..."
tipo: mc
opciones_explicitas:
  - "Solo una parte de la pieza"
  - "La pieza dos veces"
  - "Solo el rótulo"
respuesta: "Solo una parte de la pieza"

explicacion: |
  Cuando el resto es simétrico o repetido.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una vista interrumpida se usa para piezas..."
tipo: mc
opciones_explicitas:
  - "Largas y uniformes, como ejes"
  - "Redondas"
  - "Muy pequeñas"
respuesta: "Largas y uniformes, como ejes"

explicacion: |
  Se cortan con línea ondulada.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "En una vista interrumpida, las cotas indican el largo real de la pieza."

explicacion: |
  La interrupción es solo gráfica.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "En una vista girada, un nervio o brazo no alineado se..."
tipo: mc
opciones_explicitas:
  - "Abate hasta ponerlo en posición para mostrar su forma real"
  - "Elimina"
  - "Raya doble"
respuesta: "Abate hasta ponerlo en posición para mostrar su forma real"

explicacion: |
  Es una convención.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Una vista de detalle se usa para..."
tipo: mc
opciones_explicitas:
  - "Mostrar ampliada una zona chica"
  - "Mostrar la pieza completa"
  - "Reducir una zona grande"
respuesta: "Mostrar ampliada una zona chica"

explicacion: |
  Por ejemplo, una ranura o rosca.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una zona de detalle se encierra con..."
tipo: mc
opciones_explicitas:
  - "Una circunferencia fina con una letra"
  - "Un rectángulo grueso"
  - "Un número"
respuesta: "Una circunferencia fina con una letra"

explicacion: |
  Y se dibuja ampliada en otro lugar.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "La escala de un detalle ampliado se indica..."
tipo: mc
opciones_explicitas:
  - "Aparte de la del resto del dibujo"
  - "No se indica"
  - "Con el color"
respuesta: "Aparte de la del resto del dibujo"

explicacion: |
  Por ejemplo 'Detalle A, escala 5:1'.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  esc: uno_de([2, 4, 5, 10])
  real: random(2, 20)

respuesta: real * esc
tipo: input
tolerancia_abs: 0

enunciado: "Un detalle de {real} mm reales se dibuja con ampliación {esc}:1. ¿Cuántos milímetros mide en el dibujo?"

pasos:
  - "Medida dibujada = medida real × factor de ampliación"

explicacion: |
  Una escala {esc}:1 multiplica por {esc}.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  esc: uno_de([2, 4, 5, 10])
  dib: random(10, 80)

respuesta: dib / esc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un detalle dibujado en escala {esc}:1 mide {dib} mm en el papel. ¿Cuántos milímetros mide en la pieza real? (podés usar decimales)"

pasos:
  - "Medida real = medida dibujada / factor"

explicacion: |
  La acotación siempre indica la medida real.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Cuantas más vistas se dibujen, mejor es el plano."

explicacion: |
  Se usan las que hagan falta y ninguna de más.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Cuándo se justifica una vista auxiliar?"
tipo: mc
opciones_explicitas:
  - "Cuando hay una cara inclinada con detalles importantes"
  - "En una pieza prismática simple"
  - "Siempre"
respuesta: "Cuando hay una cara inclinada con detalles importantes"

explicacion: |
  No es necesaria en piezas simples.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Las medidas de una cara inclinada se acotan..."
tipo: mc
opciones_explicitas:
  - "En la vista auxiliar, donde están en verdadera magnitud"
  - "En la vista superior"
  - "No se acotan"
respuesta: "En la vista auxiliar, donde están en verdadera magnitud"

explicacion: |
  Evita errores de medición.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Las vistas interrumpidas se limitan con línea ___ o de zigzag."
respuestas_validas:
  - "ondulada"

explicacion: |
  Es una línea fina.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: verdadero
tipo: vf

enunciado: "Para trazar una vista auxiliar se llevan proyectantes perpendiculares a la cara inclinada."

explicacion: |
  Es parte del método.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_auxiliares_y_detalles"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "¿Qué zona suele merecer una vista de detalle?"
tipo: mc
opciones_explicitas:
  - "Una rosca o ranura pequeña"
  - "La pieza entera"
  - "El rótulo"
respuesta: "Una rosca o ranura pequeña"

explicacion: |
  Por su tamaño reducido.
```

