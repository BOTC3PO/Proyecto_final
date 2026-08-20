# Oficios — seguridad jardineria (cuestionario, 22 preguntas VBLang)

> Tema: `oficios/jardinero-paisajista/seguridad-jardineria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["seguridad", "quimicos", "dosificacion"]

variables:
  area: random(50, 200)
  dosis_por_m2: 0.025

respuesta: redondear(area * dosis_por_m2, 2)
tipo: input

enunciado: "Un jardinero debe aplicar herbicida en un lote de {area} m². La dosis recomendada es de 0.025 litros por metro cuadrado. ¿Cuántos litros de producto necesita en total? (Redondear a 2 decimales)"

explicacion: |
  Para calcular la cantidad total de producto, se multiplica el área total por la dosis unitaria recomendada. Es fundamental respetar la dosis para evitar fitotoxicidad en las plantas o contaminación ambiental.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["EPP", "maquinaria", "proteccion"]

respuesta: verdadero
tipo: vf

enunciado: "Al utilizar una desbrozadora, es obligatorio el uso de protección auditiva y gafas de seguridad para protegerse de proyectiles y ruido excesivo."

explicacion: |
  Las desbrozadoras generan ruido por encima de los niveles seguros y proyectan objetos a gran velocidad. El EPP adecuado (orejeras/tapones y gafas) es la última barrera de defensa contra lesiones irreversibles.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["quimicos", "mezcla", "seguridad"]

variables:
  volumen_agua: random(10, 50)
  concentracion: uno_de([0.01, 0.02, 0.05])

respuesta: redondear(volumen_agua * concentracion, 2)
tipo: input

enunciado: "Se debe preparar una solución de abono líquido. Si se tienen {volumen_agua} litros de agua y la concentración requerida es del {redondear(concentracion*100, 0)}%, ¿cuántos litros de abono puro se deben agregar?"

explicacion: |
  La cantidad de producto se calcula multiplicando el volumen de agua por la fracción de concentración. Ejemplo: 50L * 0.02 = 1L. Siempre verificar la ficha técnica del producto.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["ergonomia", "salud", "riesgos"]

respuesta: verdadero
tipo: vf

enunciado: "El trabajo prolongado en posturas forzadas o repetitivo sin pausas adecuadas puede causar lesiones musculoesqueléticas graves a largo plazo en jardineros."

explicacion: |
  A diferencia de lo que se cree, la jardinería no es una actividad inofensiva. La repetición y la mala postura son causas frecuentes de dolor crónico y lesiones. La ergonomía es parte de la seguridad.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "avanzado"
  tags: ["quimicos", "distancia", "viento"]

variables:
  viento: random_float(0, 15)
  umbral: 10

respuesta: "No aplicar"
tipo: input

enunciado: "Si la velocidad del viento es de {redondear(viento, 1)} km/h y el límite de seguridad para aplicar productos aerotransportados es de 10 km/h, ¿qué acción se debe tomar?"

explicacion: |
  Si la velocidad del viento supera el umbral establecido (en este caso 10 km/h), no se debe aplicar el producto para evitar la deriva y la contaminación de áreas circundantes o la inhalación por parte del operador.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["herramientas", "corte", "seguridad"]

respuesta: falso
tipo: vf

enunciado: "Es seguro pasar la mano por la hoja de una podadora eléctrica inmediatamente después de apagarla, ya que el motor se detiene al instante."

explicacion: |
  Falso. Las hojas pueden seguir girando por inercia o mantenerse calientes. Siempre se debe esperar a la detención total y verificar que la herramienta esté desconectada antes de manipularla.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["quimicos", "mezcla", "calculos"]

variables:
  litros_mochila: 16
  dosis_por_ha: random(500, 1000)
  area_m2: random(100, 500)

respuesta: redondear((area_m2 / 10000) * dosis_por_ha, 2)
tipo: input

enunciado: "Para tratar {area_m2} m² con un fungicida cuya dosis es de {dosis_por_ha} litros por hectárea, ¿cuántos litros de producto puro se necesitan?"

explicacion: |
  Primero se convierte el área a hectáreas (dividiendo por 10.000) y luego se multiplica por la dosis. Ejemplo: 500 m² = 0.05 ha. 0.05 * 800 = 40 litros. (Nota: en la práctica se diluye en agua, aquí se pide la cantidad de producto puro).
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["clima", "proteccion", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de sombrero de ala ancha y protector solar de alto espectro es recomendable para jardineros que trabajan expuestos al sol durante jornadas completas."

explicacion: |
  La exposición prolongada a los rayos UV aumenta el riesgo de quemaduras solares y cáncer de piel. La protección física (sombrero) y química (protector solar) son medidas preventivas clave.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["suelo", "compost", "volumen"]

variables:
  largo: random(2, 5)
  ancho: random(1, 3)
  alto: random(0.5, 1.5)

respuesta: redondear(largo * ancho * alto, 2)
tipo: input

enunciado: "Se va a construir un montón de compost con dimensiones de {largo}m de largo, {ancho}m de ancho y {alto}m de alto. ¿Cuál es el volumen aproximado de materia orgánica necesaria en metros cúbicos?"

explicacion: |
  El volumen de un prisma rectangular se calcula multiplicando largo x ancho x alto. Es importante conocer el volumen para estimar la cantidad de materiales y la capacidad de la pila.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["electricidad", "herramientas", "riesgos"]

respuesta: verdadero
tipo: vf

enunciado: "Nunca se debe utilizar una herramienta eléctrica con cable cerca de fuentes de agua o suelo húmedo si no se cuenta con un diferencial de protección adecuado."

explicacion: |
  El agua es conductora de electricidad. El uso de herramientas eléctricas en ambientes húmedos sin protección contra contactos indirectos (diferencial) aumenta el riesgo de electrocución.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["vegetacion", "toxicidad", "prevencion"]

respuesta: falso
tipo: vf

enunciado: "Es seguro tocar cualquier planta de jardín con las manos desnudas si no se tienen heridas abiertas."

explicacion: |
  Falso. Muchas plantas pueden causar dermatitis de contacto, alergias o irritación en la piel incluso sin heridas. El uso de guantes es la norma de seguridad recomendada para proteger la piel.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["paisajismo", "calculos", "siembra"]

variables:
  area: random(100, 1000)
  plantas_por_m2: uno_de([4, 6, 9, 12])

respuesta: floor(area * plantas_por_m2)
tipo: input

enunciado: "Si se debe plantar vegetación a una densidad de {plantas_por_m2} plantas por metro cuadrado en un área de {area} m², ¿cuántas plantas se necesitan en total?"

explicacion: |
  Se multiplica el área total por la densidad de siembra. El resultado indica la cantidad de ejemplares requeridos para cubrir el espacio según el diseño paisajístico.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["EPP", "quimicos", "proteccion"]

respuesta: verdadero
tipo: vf

enunciado: "Al trabajar con productos fitosanitarios que tienen riesgo de salpicaduras, el uso de careta facial completa es obligatorio junto con guantes resistentes a químicos."

explicacion: |
  Las gafas de seguridad no protegen la piel ni las mucosas de la cara. La careta facial proporciona una barrera completa contra salpicaduras, protegiendo ojos, nariz y boca.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["salud", "hidratacion", "ergonomia"]

respuesta: verdadero
tipo: vf

enunciado: "Mantenerse hidratado y realizar estiramientos periódicos ayuda a prevenir calambres musculares durante el trabajo en el jardín."

explicacion: |
  La deshidratación y el esfuerzo físico continuo son causas comunes de calambres. La hidratación constante y las pausas activas son medidas preventivas esenciales para la salud del trabajador.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "avanzado"
  tags: ["topografia", "seguridad", "calculos"]

variables:
  desnivel: random(1, 10)
  distancia: random(5, 20)

respuesta: redondear((desnivel / distancia) * 100, 1)
tipo: input

enunciado: "Un terreno tiene un desnivel de {desnivel} metros en una distancia horizontal de {distancia} metros. ¿Cuál es el porcentaje de pendiente del terreno?"

explicacion: |
  La pendiente porcentual se calcula como (desnivel / distancia) * 100. Conocer la pendiente es vital para elegir herramientas adecuadas y evaluar riesgos de deslizamiento o esfuerzo físico.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["residuos", "seguridad", "reciclaje"]

respuesta: falso
tipo: vf

enunciado: "Las ramas con espinas y los restos de poda punzante pueden tirarse directamente en la basura común sin contenedores especiales."

explicacion: |
  Falso. Los residuos punzantes deben depositarse en bolsas rígidas o contenedores señalizados para proteger a los recolectores y evitar lesiones. No se deben mezclar con residuos orgánicos blandos.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["quimicos", "tiempo", "seguridad"]

variables:
  tiempo_reingreso: uno_de([12, 24, 48])

respuesta: "Esperar {tiempo_reingreso} horas"
tipo: input

enunciado: "Si la etiqueta del producto indica un tiempo de reingreso de {tiempo_reingreso} horas, ¿qué acción se debe tomar antes de volver a entrar al área tratada?"

explicacion: |
  El tiempo de reingreso es el período mínimo que debe transcurrir después de la aplicación antes de que las personas (incluido el aplicador) puedan entrar al área. Respetar este tiempo previene la exposición a residuos frescos.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["EPP", "auditiva", "maquinaria"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de protección auditiva es obligatorio cuando se trabaja con maquinaria que genera niveles de ruido superiores a 85 decibeles durante períodos prolongados."

explicacion: |
  La exposición continua a ruidos fuertes causa pérdida auditiva irreversible. La normativa de seguridad establece el uso de protección cuando los niveles superan los 85 dB, siendo común en desbrozadoras y cortadoras.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["siembra", "calculos", "semillas"]

variables:
  area: random(50, 300)
  gramos_por_m2: random(5, 20)

respuesta: redondear(area * gramos_por_m2, 0)
tipo: input

enunciado: "Para sembrar un césped en {area} m², con una recomendación de {gramos_por_m2} gramos de semilla por metro cuadrado, ¿cuántos gramos de semilla se necesitan en total?"

explicacion: |
  Se multiplica el área por la densidad de siembra en peso. Este cálculo asegura la cobertura adecuada del terreno sin desperdiciar insumos.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["biologico", "insectos", "prevencion"]

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable usar pantalones largos y calzado cerrado para prevenir picaduras de insectos y arácnidos al trabajar en zonas de vegetación alta o densa."

explicacion: |
  La vegetación alta es hábitat de insectos y arácnidos que pueden picar o morded. La barrera física de la ropa adecuada reduce significativamente este riesgo.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "intermedio"
  tags: ["herramientas", "mantenimiento", "higiene"]

respuesta: falso
tipo: vf

enunciado: "No es necesario limpiar las herramientas de jardinería después de cada uso, ya que el resto del trabajo las mantendrá limpias."

explicacion: |
  Falso. Limpiar las herramientas previene la propagación de enfermedades de las plantas (hongos, bacterias) y evita la corrosión por residuos de productos químicos o savia. Es parte del mantenimiento y la seguridad.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "jardinero_paisajista_seguridad_jardineria"
  nivel: "basico"
  tags: ["sustrato", "calculos", "maceteros"]

variables:
  diametro: random(30, 60)
  profundidad: random(20, 40)

respuesta: redondear(pi * (diametro/2)^2 * profundidad / 1000000, 3)
tipo: input

enunciado: "Se necesita llenar una maceta cilíndrica de {diametro} cm de diámetro y {profundidad} cm de profundidad. ¿Cuántos metros cúbicos de sustrato se requieren? (Usar pi = 3.14159)"

explicacion: |
  El volumen de un cilindro es pi * radio^2 * altura. Como las medidas están en cm, el resultado se divide por 1.000.000 para convertir a metros cúbicos. Ejemplo: 0.3m * 0.3m * radio^2 * altura.
```
