# Oficios — tecnicas carpinteria aluminio (cuestionario, 30 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/tecnicas-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["corte", "angulos", "esquinas"]

variables:
  angulo_esquina: 90
  angulo_corte: angulo_esquina / 2

respuesta: "{redondear(angulo_corte, 0)}"
tipo: input

enunciado: "Para armar una esquina de 90° en un marco de aluminio, ¿a qué ángulo se debe cortar cada perfil?"

explicacion: |
  Para obtener una unión de 90 grados, cada perfil se corta a la mitad del ángulo total.
  90 / 2 = 45 grados.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["instalacion", "holguras", "corredizas"]

variables:
  ancho_apertura: random(100, 200)
  holgura_total: 10
  holgura_por_lado: holgura_total / 2

respuesta: "{redondear(holgura_por_lado, 1)}"
tipo: input

enunciado: "Si el ancho de la apertura es {ancho_apertura} cm y se deja una holgura total de 10 mm para el deslizamiento, ¿cuántos mm de holgura corresponden a cada lado del perfil móvil?"

explicacion: |
  La holgura total se distribuye equitativamente entre los lados de contacto.
  10 mm / 2 = 5 mm por lado.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["corte", "calculos", "esquinas"]

variables:
  largo_lado: random(50, 150)
  angulo_bisel: 45
  # En esquinas de 90, el corte es a 45. La longitud se mide al exterior.
  # Pregunta simple sobre el ángulo de corte necesario.
  angulo_corte: angulo_bisel

respuesta: "{angulo_corte}"
tipo: input

enunciado: "Para unir dos perfiles en una esquina de 90° con bisel, ¿a cuántos grados se corta cada extremo?"

explicacion: |
  El bisel estándar para esquinas de 90° es de 45 grados en cada perfil.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["vidrios", "calculos", "area"]

variables:
  alto_vidrio: random(60, 120)
  ancho_vidrio: random(60, 120)
  area_cm2: alto_vidrio * ancho_vidrio
  area_m2: area_cm2 / 10000

respuesta: "{redondear(area_m2, 4)}"
tipo: input

enunciado: "Si un vidrio tiene {alto_vidrio} cm de alto y {ancho_vidrio} cm de ancho, ¿cuántos metros cuadrados (m²) de superficie tiene?"

explicacion: |
  Área = alto * ancho.
  Para pasar de cm² a m², se divide por 10.000.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["calculos", "materiales", "inventario"]

variables:
  alto: random(1, 3)
  ancho: random(1, 3)
  # Un marco simple tiene 2 perfiles de alto y 2 de ancho
  total_perfiles: 4

respuesta: "{total_perfiles}"
tipo: input

enunciado: "Para armar un marco rectangular simple de una ventana, ¿cuántos perfiles de larguero (2 de alto y 2 de ancho) se necesitan como base?"

explicacion: |
  Un rectángulo tiene 4 lados. Se necesitan 2 perfiles verticales y 2 horizontales.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["corte", "precision", "herramientas"]

variables:
  largo_necesario: random(50, 100)
  holgua_sierra: 2
  largo_corte: largo_necesario - holgua_sierra

respuesta: "{largo_corte}"
tipo: input

enunciado: "Si necesitas un perfil de {largo_necesario} cm y la sierra quita {holgua_sierra} cm de material por el grosor de la hoja (corte), ¿a qué medida debes marcar el corte para obtener la longitud final correcta?"

explicacion: |
  Se debe restar el ancho del corte (kerf) a la medida final deseada.
  50 - 2 = 48 cm (ejemplo).
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["ergonomia", "mecanismos"]

variables:
  fuerza_requerida: random(5, 15)
  # Pregunta conceptual sobre la ergonomía
  respuesta_texto: "fuerza_razonable"

respuesta: "{respuesta_texto}"
tipo: input

enunciado: "La ventana debe ser fácil de operar sin requerir una fuerza excesiva. ¿Qué concepto describe esta característica?"

explicacion: |
  La ergonomía y la funcionalidad exigen que el mecanismo de cierre y apertura
  tenga una resistencia razonable para no dañar el sistema ni fatigar al usuario.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["calculos", "perimetro"]

variables:
  alto: random(1, 2)
  ancho: random(1, 3)
  perimetro_cm: (alto + ancho) * 200 # Convertido a cm si las vars son en m
  perimetro_m: (alto + ancho) * 2

respuesta: "{perimetro_m}"
tipo: input

enunciado: "Si una ventana tiene {alto} m de alto y {ancho} m de ancho, ¿cuántos metros lineales de perfil se necesitan para el perímetro exterior?"

explicacion: |
  Perímetro = 2 * (alto + ancho).
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["propiedades_materiales", "peso"]

variables:
  largo_m: random(1, 3)
  peso_por_metro: 2.5 # kg/m aproximado para un perfil estándar
  peso_total: largo_m * peso_por_metro

respuesta: "{redondear(peso_total, 1)}"
tipo: input

enunciado: "Si un perfil de aluminio pesa aproximadamente {peso_por_metro} kg/m, ¿cuánto pesa un trozo de {largo_m} metros?"

explicacion: |
  Peso total = largo * peso por metro.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["ensamble", "tornilleria", "calculos"]

variables:
  largo_m: random(1, 3)
  # Se recomienda un tornillo cada 30-50 cm. Usaremos 1 cada 0.5m para simplificar.
  tornillos_por_metro: 2
  total_tornillos: largo_m * tornillos_por_metro * 2 # 2 lados

respuesta: "{total_tornillos}"
tipo: input

enunciado: "Si se debe fijar el marco al muro con un tornillo cada 50 cm en ambos lados verticales, ¿cuántos tornillos se necesitan para un alto de {largo_m} m?"

explicacion: |
  Número de puntos = largo / 0.5.
  Total = puntos * 2 (ambos lados).
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["corte", "geometria", "perfiles"]

variables:
  lado: random(500, 1000)
  angulo: 45
  factor: 1.4142

respuesta: redondear(lado * factor, 1)
tipo: input

enunciado: "Para armar una esquina de 45° en un marco de aluminio, si el lado interno del marco mide {lado} mm, ¿cuánto mide aproximadamente el corte de la pieza en diagonal? (Usa 1.4142 como factor de conversión)."

explicacion: |
  En un corte a 45°, la hipotenusa se calcula multiplicando el cateto por la raíz cuadrada de 2 (aproximadamente 1.4142). Esto asegura que la pieza encaje perfectamente en la esquina cuadrada del marco.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["propiedades_materiales", "termica", "sellado"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "El aluminio tiene una tasa de expansión térmica similar a la del ladrillo, por lo que no es necesario considerar holguras por cambios de temperatura durante la instalación."

explicacion: |
  Falso. El aluminio se expande y contrae significativamente más que la albañilería (ladrillo/hormigón) con los cambios de temperatura. Si no se dejan holguras o se usa sellado flexible, el marco puede deformarse o generar grietas en el muro.
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["vidrios", "dimensiones", "calculos"]

variables:
  ancho: random(100, 200)
  alto: random(120, 180)
  holgura: 10
  ancho_vidrio: ancho - holgura
  alto_vidrio: alto - holgura
  area: ancho_vidrio * alto_vidrio

respuesta: redondear(area / 10000, 2)
tipo: input

enunciado: "Una ventana corrediza tiene un marco interior de {ancho} cm de ancho por {alto} cm de alto. Si se dejan {holgura} cm de holgura total para el deslizamiento del vidrio, ¿cuál es el área del vidrio en metros cuadrados? (Redondear a 2 decimales)."

explicacion: |
  Primero se restan las holguras a las dimensiones del marco para obtener las medidas del vidrio. Luego se multiplican ancho y alto para obtener el área en cm² y se divide por 10.000 para convertirlo a m². La precisión aquí evita que el vidrio quede suelto o atascado.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["logistica", "costos", "corte"]

variables:
  largo_barra: 6000
  corte1: random(500, 1500)
  corte2: random(500, 1500)
  corte3: random(500, 1500)
  corte4: random(500, 1500)
  ancho_corte: 3
  total_cortes: corte1 + corte2 + corte3 + corte4
  desperdicio: ancho_corte * 4
  usado: total_cortes + desperdicio
  sobrante: largo_barra - usado

respuesta: sobrante
tipo: input

enunciado: "Tienes una barra estándar de aluminio de {largo_barra} mm. Necesitas cortar 4 piezas de longitudes: {corte1} mm, {corte2} mm, {corte3} mm y {corte4} mm. Si cada corte pierde {ancho_corte} mm de material por el disco, ¿cuánto mide el sobrante final de la barra en mm?"

explicacion: |
  Se suman las longitudes de las piezas más el ancho total de los cortes (desperdicio). Al restar este total de la longitud original de la barra, obtenemos el sobrante. Es crucial calcular esto para optimizar costos y reducir residuos.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["seguridad", "estructura", "normativas"]

variables:
  area: random(1, 4)
  presion: 150
  fuerza: area * presion

respuesta: fuerza
tipo: input

enunciado: "Si una ventana tiene un área de {area} m² y está expuesta a una presión de viento de {presion} kg/m², ¿cuál es la fuerza total en kg que soporta la estructura de la ventana?"

explicacion: |
  La fuerza total se calcula multiplicando el área expuesta por la presión del viento. Esta cifra es vital para dimensionar correctamente el grosor del perfil y la fijación al muro, asegurando que la ventana no se desprendan en tormentas.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["aislamiento", "vidrios", "confort"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El uso de vidrios dobles (doble acristalamiento) mejora significativamente el aislamiento acústico y térmico en comparación con el vidrio simple."

explicacion: |
  Verdadero. La cámara de aire entre los dos vidrios actúa como barrera para las ondas sonoras y reduce la transferencia de calor. Esto es crucial en zonas urbanas ruidosas o con climas extremos.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "carpintero_de_aluminio_tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["herrajes", "fijacion", "logistica"]

variables:
  perfiles: 4
  tornillos_por_union: 2
  uniones: 4
  total: perfiles * tornillos_por_union * uniones / 2

respuesta: total
tipo: input

enunciado: "Para armar un marco rectangular de 4 perfiles, se usan {tornillos_por_union} tornillos autorroscantes en cada una de las {uniones} esquinas. ¿Cuántos tornillos se necesitan en total para el armado del marco?"

explicacion: |
  Se multiplican los tornillos por unión por el número de uniones. En un rectángulo hay 4 esquinas. Si cada unión requiere 2 tornillos, el total es 4 * 2 = 8 tornillos. Esto garantiza la rigidez de la estructura.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["propiedades", "materiales", "dilatacion"]

respuesta: verdadero
tipo: vf

enunciado: "El aluminio es un material rígido que no se expande ni contrae significativamente como la madera o el PVC ante cambios de temperatura."

explicacion: |
  El aluminio tiene un coeficiente de dilatación térmica, pero en el contexto de la comparación con la madera o PVC para la construcción, se describe como rígido y con menor movimiento relativo en esta escala, lo que exige sellado flexible.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["vidrios", "dimensiones", "area"]

variables:
  ancho: random(80, 120)
  alto: random(100, 140)

respuesta: "{ancho} * {alto}"
tipo: input

enunciado: "Se debe instalar una hoja de vidrio rectangular con {ancho} cm de ancho y {alto} cm de alto. ¿Cuál es el área total del vidrio en cm²?"

explicacion: |
  El área de un rectángulo se calcula multiplicando el ancho por el alto.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["perfiles", "calculos", "marco"]

variables:
  largo: random(100, 150)
  ancho: random(80, 120)

respuesta: "2 * {largo} + 2 * {ancho}"
tipo: input

enunciado: "Para armar el marco rectangular de una ventana, se necesitan perfiles de {largo} cm y {ancho} cm. ¿Cuál es la suma total de longitudes de perfil necesarias para el perímetro?"

explicacion: |
  El perímetro de un rectángulo es la suma de dos veces el largo más dos veces el ancho.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["instalacion", "tornillos", "cantidad"]

variables:
  num_esquinas: 4
  tornillos_por_esquina: 2

respuesta: "{num_esquinas} * {tornillos_por_esquina}"
tipo: input

enunciado: "Para asegurar un marco rectangular de aluminio, se utilizan {tornillos_por_esquina} tornillos autorroscantes por cada una de las {num_esquinas} esquinas. ¿Cuántos tornillos se necesitan en total?"

explicacion: |
  Se multiplica la cantidad de esquinas por la cantidad de tornillos por esquina.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["precision", "holgura", "tolerancia"]

variables:
  medida_perfil: 50
  medida_abertura: 52

respuesta: "{medida_abertura} - {medida_perfil}"
tipo: input

enunciado: "Si un perfil de {medida_perfil} mm entra en una abertura de {medida_abertura} mm, ¿cuál es la holgura resultante en mm?"

explicacion: |
  La holgura es la diferencia entre la medida del hueco y la medida del elemento.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["corte", "durabilidad", "calidad"]

respuesta: verdadero
tipo: vf

enunciado: "La precisión del corte inicial determina la durabilidad de toda la obra de carpintería de aluminio."

explicacion: |
  Un corte preciso asegura un ensamble correcto, lo cual es fundamental para la durabilidad.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["propiedades", "peso", "densidad"]

variables:
  longitud_m: random(2, 5)
  peso_por_m: 2.5

respuesta: "{longitud_m} * {peso_por_m}"
tipo: input

enunciado: "Un perfil de aluminio tiene un peso de {peso_por_m} kg/m. Si se utiliza una barra de {longitud_m} metros, ¿cuál es el peso total en kg?"

explicacion: |
  El peso total se obtiene multiplicando la longitud por el peso unitario.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sellado", "perimetro", "calculo"]

variables:
  ancho_muro: 100
  alto_muro: 120
  espesor_sello: 5

respuesta: "2 * ({ancho_muro} + {alto_muro}) * {espesor_sello}"
tipo: input

enunciado: "Se aplica sellado en todo el perímetro de un marco de {ancho_muro} cm x {alto_muro} cm. Si el ancho del sello es de {espesor_sello} cm, ¿cuál es el área total de sellado en cm²?"

explicacion: |
  El área es el perímetro del rectángulo multiplicado por el ancho del sello.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["seguridad", "resistencia", "viento"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventana mal instalada puede desprenderse o no resistir vientos fuertes, afectando la seguridad."

explicacion: |
  El texto destaca que la calidad afecta la seguridad estructural ante vientos.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["economía", "costo", "perfiles"]

variables:
  metros_totales: random(10, 20)
  precio_por_metro: 1500

respuesta: "{metros_totales} * {precio_por_metro}"
tipo: input

enunciado: "Si se necesitan {metros_totales} metros de perfil de aluminio y el precio es de ${precio_por_metro} por metro, ¿cuál es el costo total?"

explicacion: |
  El costo total es la cantidad de metros multiplicada por el precio unitario.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["corte", "angulo", "esquina"]

variables:
  angulo_total: 360
  num_esquinas: 4

respuesta: "{angulo_total} / {num_esquinas}"
tipo: input

enunciado: "Para un marco rectangular, si se divide el giro completo de {angulo_total} grados entre las {num_esquinas} esquinas, ¿cuál es el ángulo de corte ideal para cada esquina?"

explicacion: |
  Un rectángulo tiene ángulos de 90 grados, que es 360 dividido por 4.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["propiedades", "dilatacion", "madera"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la madera, el aluminio no se contrae ni expande de la misma manera ante la humedad."

explicacion: |
  El aluminio es rígido y tiene un comportamiento térmico diferente a la madera frente a la humedad.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "tecnicas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["instalacion", "distancia", "tornillos"]

variables:
  longitud_esquina: 50
  num_tornillos: 2

respuesta: "{longitud_esquina} / ({num_tornillos} - 1)"
tipo: input

enunciado: "Si se colocan {num_tornillos} tornillos equidistantes a lo largo de una esquina de {longitud_esquina} cm, ¿cuál es la distancia entre ellos en cm?"

explicacion: |
  Con 2 tornillos en una línea, la distancia es la longitud dividida por (n-1).
```
