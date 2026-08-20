# Oficios — calculo carpinteria aluminio (cuestionario, 23 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/calculo-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["perfil", "luz", "estructura"]

variables:
  luz: random(1500, 2500)

respuesta: verdadero
tipo: vf

enunciado: "Para una abertura de aluminio con una luz de {luz} mm, es necesario utilizar perfiles de mayor sección estructural en comparación con una abertura de 500 mm."

explicacion: |
  A mayor luz (distancia entre apoyos), mayor es la flexión que sufre el perfil bajo cargas como el viento, requiriendo mayor rigidez.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["dilatacion", "temperatura", "coeficiente"]

variables:
  delta_t: random(20, 40)
  longitud_m: random_float(1.0, 3.0)

respuesta: verdadero
tipo: vf

enunciado: "Al instalar perfiles de aluminio en un ambiente con una variación térmica de {delta_t} °C, es necesario considerar la dilatación térmica para evitar tensiones en la estructura."

explicacion: |
  El aluminio tiene un coeficiente de dilatación térmica significativo. Cambios de temperatura provocan expansión o contracción que debe ser compensada en el diseño.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["rigidez", "geometria", "perfil"]

variables:
  tipo_perfil: uno_de(["canal", "cajon"])

respuesta: verdadero
tipo: vf

enunciado: "Un perfil de aluminio de sección cajón (cerrada) ofrece mayor rigidez a la torsión que un perfil de sección canal (abierta) de igual masa y dimensiones externas."

explicacion: |
  Las secciones cerradas distribuyen el material de manera más eficiente para resistir torsión y flexión, siendo más rígidas que las abiertas.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["dilatacion", "calcula", "coeficiente"]

variables:
  coeficiente: 23
  delta_t: 30
  longitud_mm: 2000

respuesta: verdadero
tipo: vf

enunciado: "Con un coeficiente de dilatación de {coeficiente} x 10⁻⁶ /°C, un ΔT de {delta_t} °C y una longitud de {longitud_mm} mm, la dilatación resultante es menor a 2 mm."

explicacion: |
  Dilatación = L * α * ΔT = 2000 * 23e-6 * 30 = 1.38 mm. Como 1.38 < 2, la afirmación es verdadera.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["area", "bisel", "vidrio"]

variables:
  ancho_vidrio: 800
  alto_vidrio: 1000
  ancho_marco: 50

respuesta: falso
tipo: vf

enunciado: "El área de vidrio efectiva para el cálculo de carga es siempre igual al área exterior del hueco, independientemente del ancho del marco de aluminio."

explicacion: |
  El área efectiva de vidrio es ligeramente menor que el hueco total, ya que el vidrio se asienta dentro del perfil, reduciendo sus dimensiones libres.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["fuego", "resistencia", "seguridad"]

variables:
  tipo_vidrio: uno_de(["común", "ignífugo"])

respuesta: verdadero
tipo: vf

enunciado: "El uso de vidrio ignífugo en carpintería de aluminio puede mejorar la resistencia al fuego del conjunto de la abertura."

explicacion: |
  El vidrio ignífugo está diseñado para mantener la integridad y aislamiento térmico bajo condiciones de fuego, a diferencia del vidrio común.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "carpinteria_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["solape", "medidas", "corrección"]

variables:
  solape: 20

respuesta: verdadero
tipo: vf

enunciado: "Al calcular las longitudes de corte de los perfiles de marco, se debe restar el doble del espesor del perfil de la medida del hueco para obtener la dimensión interna correcta."

explicacion: |
  El perfil del marco ocupa espacio dentro del hueco. La dimensión interna del marco es el hueco menos el espesor de los perfiles laterales.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["marco", "desglose", "medidas"]

variables:
  luz: random(80, 150)
  holgura_total: 10

respuesta: luz + holgura_total
tipo: input

enunciado: "Se debe fabricar un marco rectangular para una abertura de {luz} cm de ancho. Si se deben agregar {holgura_total} cm de holgura total (5 cm por cada lado vertical) para el ajuste en el hueco, ¿cuál es el largo exacto del perfil superior del marco en cm?"

explicacion: |
  El largo del perfil del marco se calcula sumando la luz de la abertura más la holgura necesaria para la instalación. En este caso: 80-150 cm (luz) + 10 cm (holgura) = resultado.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["conversión", "medidas", "corte"]

variables:
  metros: random_float(1.2, 3.5)
  centimetros: redondear(metros * 100, 0)

respuesta: centimetros
tipo: input

enunciado: "Un perfil de contramarco tiene una longitud de {metros} metros. ¿A cuántos centímetros equivale esta medida para programar el corte en la sierra de precisión?"

explicacion: |
  Para convertir metros a centímetros se multiplica por 100. {metros} m * 100 = {centimetros} cm.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["área", "vidrio", "presupuesto"]

variables:
  ancho: random(60, 120)
  alto: random(80, 180)
  area_cm2: ancho * alto
  area_m2: area_cm2 / 10000

respuesta: area_m2
tipo: input

enunciado: "Se debe colocar un vidrio de dimensiones {ancho} cm de ancho por {alto} cm de alto. Calculá el área total del vidrio en metros cuadrados (m²), redondeando a dos decimales."

explicacion: |
  El área en cm² es ancho * alto. Para pasar a m² se divide por 10.000. Ejemplo: 60 * 80 = 4800 cm² / 10000 = 0.48 m².
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["holgura", "instalación", "normativa"]

variables:
  luz: random(50, 100)
  holgura_sugerida: 10

respuesta: verdadero
tipo: vf

enunciado: "Para una abertura de {luz} cm, es recomendable dejar una holgura de al menos 10 cm en total (superior e inferior combinados) para permitir la dilatación térmica y el ajuste del marco."

explicacion: |
  La holgura permite que el aluminio se expanda o contraiga con los cambios de temperatura sin deformar la estructura o bloquear el movimiento de las hojas.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["montante", "desglose", "corte"]

variables:
  alto_abertura: random(100, 200)
  holgura_vertical: 10
  largo_perfil: alto_abertura + holgura_vertical

respuesta: largo_perfil
tipo: input

enunciado: "Si la altura de la abertura es de {alto_abertura} cm y se deben sumar {holgura_vertical} cm de holgura vertical para el contramarco, ¿cuánto mide cada perfil vertical (montante) del marco?"

explicacion: |
  El largo del perfil vertical es la altura de la abertura más la holgura necesaria para la instalación en el hueco de la pared.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["junta", "hermeticidad", "perfil"]

variables:
  tipo_ventana: uno_de(["corrediza", "abatiente", "fija"])
  respuesta_correcta: uno_de(["goma EPDM", "burlete de espuma", "silicona"])

respuesta: "goma EPDM"
tipo: input

enunciado: "Para garantizar la hermeticidad al agua y aire en una ventana de aluminio de tipo {tipo_ventana}, ¿qué material se utiliza comúnmente en las juntas de contacto entre el marco y la hoja?"

explicacion: |
  Las gomas de EPDM (caucho etileno propileno dieno) son el estándar en carpintería de aluminio por su durabilidad y resistencia a la intemperie.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["peso", "logística", "perfil"]

variables:
  largo_total: random(10, 50)
  peso_por_metro: 2.5
  peso_total: largo_total * peso_por_metro

respuesta: peso_total
tipo: input

enunciado: "Se necesitan {largo_total} metros lineales de un perfil de aluminio que pesa {peso_por_metro} kg/m. ¿Cuál es el peso total aproximado de estos perfiles en kg?"

explicacion: |
  El peso total se calcula multiplicando la longitud total por el peso unitario por metro. {largo_total} * {peso_por_metro} = {peso_total} kg.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["proporción", "estructura", "diseño"]

variables:
  luz: random(100, 200)
  alto: random(100, 200)
  ratio: luz / alto
  es_alta: ratio > 1.5

respuesta: uno_de([verdadero, falso])
tipo: vf

enunciado: "Si la abertura tiene una luz de {luz} cm y un alto de {alto} cm, es una abertura 'alta' (relación luz/altura > 1.5), lo que exige perfiles con mayor inercia."

explicacion: |
  Se calcula la relación luz/alto. Si es mayor a 1.5, la abertura se considera alta y más susceptible a la flexión lateral, requiriendo perfiles más resistentes.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["contramarco", "desglose", "cantidad"]

variables:
  luz: random(80, 150)
  alto: random(100, 180)
  perfiles_horizontales: 2
  perfiles_verticales: 2
  total: perfiles_horizontales + perfiles_verticales

respuesta: total
tipo: input

enunciado: "Para armar el contramarco de una abertura rectangular de {luz} x {alto} cm, ¿cuántos perfiles lineales completos se necesitan como mínimo (sin contar piezas de unión ni refuerzos)?"

explicacion: |
  Un rectángulo tiene 4 lados. Se necesitan 2 perfiles horizontales y 2 perfiles verticales. Total = 4 perfiles.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["carga", "viento", "estructura"]

variables:
  area_vidrio: random_float(1.0, 4.0)
  presion_viento: 1.2
  carga_kn: area_vidrio * presion_viento

respuesta: carga_kn
tipo: input

enunciado: "Si el área del vidrio es de {area_vidrio} m² y la presión de viento de diseño es de {presion_viento} kN/m², ¿cuál es la carga total en kN que debe soportar el marco?"

explicacion: |
  La carga total se obtiene multiplicando el área expuesta por la presión de viento. {area_vidrio} * {presion_viento} = {carga_kn} kN.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["hoja", "corrediza", "desglose"]

variables:
  luz_abertura: random(100, 200)
  holgura_deslizamiento: 2
  ancho_hoja: luz_abertura + holgura_deslizamiento

respuesta: ancho_hoja
tipo: input

enunciado: "Para una abertura de {luz_abertura} cm, la hoja de la ventana corrediza debe ser más ancha que la luz para permitir el traslape y el cierre. Si se suma {holgura_deslizamiento} cm de traslape, ¿cuál es el ancho mínimo de la hoja?"

explicacion: |
  El ancho de la hoja debe cubrir la abertura más el traslape necesario para el cierre hermético. {luz_abertura} + {holgura_deslizamiento} = {ancho_hoja} cm.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["fijación", "tornillos", "normativa"]

variables:
  largo_perfil: random(1.0, 3.0)
  distancia_max: 0.5
  cantidad_tornillos: ceil(largo_perfil / distancia_max) + 1

respuesta: cantidad_tornillos
tipo: input

enunciado: "Para fijar un perfil de {largo_perfil} metros al muro, y sabiendo que la distancia máxima permitida entre puntos de anclaje es de 0.5 m, ¿cuántos tornillos como mínimo se necesitan?"

explicacion: |
  Se divide la longitud por la distancia máxima y se suma 1 (por el extremo inicial). ceil({largo_perfil} / 0.5) + 1 = {cantidad_tornillos}.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["área", "superficie", "acabado"]

variables:
  perimetro: random(4.0, 10.0)
  altura_perfil: 0.05
  area_m2: perimetro * altura_perfil

respuesta: area_m2
tipo: input

enunciado: "Si el perímetro del marco es de {perimetro} m y la altura del perfil es de 0.05 m, ¿cuál es el área lateral total del marco en m²?"

explicacion: |
  El área lateral se calcula multiplicando el perímetro por la altura del perfil. {perimetro} * 0.05 = {area_m2} m².
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "basico"
  tags: ["vidrio", "holgura", "instalación"]

variables:
  ancho_vidrio: random(50, 100)
  holgura_lado: 5
  ancho_canal: ancho_vidrio + holgura_lado

respuesta: ancho_canal
tipo: input

enunciado: "Si el vidrio mide {ancho_vidrio} cm de ancho, ¿cuál debe ser el ancho interno del canal del perfil para recibir el vidrio, considerando una holgura de {holgura_lado} cm en total?"

explicacion: |
  El canal debe ser más ancho que el vidrio para permitir su inserción y la aplicación de la junta. {ancho_vidrio} + {holgura_lado} = {ancho_canal} cm.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["cerramiento", "desglose", "total"]

variables:
  perimetro: random(10, 30)
  holgura_total: 0.5
  largo_total: perimetro + holgura_total

respuesta: largo_total
tipo: input

enunciado: "Para un cerramiento de perímetro {perimetro} m, se debe sumar un 0.5% de holgura para cortes y ajustes. ¿Cuál es el largo total de perfiles necesarios en metros?"

explicacion: |
  El largo total incluye la holgura por cortes y ajustes. {perimetro} + 0.5 = {largo_total} m (aproximado para simplificación en este contexto básico).
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_calculo_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["costo", "presupuesto", "material"]

variables:
  metros: random(5, 20)
  precio_por_metro: 2500
  costo_total: metros * precio_por_metro

respuesta: costo_total
tipo: input

enunciado: "Si se necesitan {metros} metros de perfil y el precio es de ${precio_por_metro} por metro, ¿cuál es el costo total del material de perfiles en pesos?"

explicacion: |
  El costo total es la cantidad de metros multiplicada por el precio unitario. {metros} * {precio_por_metro} = {costo_total}.
```
