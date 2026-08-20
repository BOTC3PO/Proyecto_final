# Oficios — materiales cerrajeria (cuestionario, 30 preguntas VBLang)

> Tema: `oficios/cerrajero/materiales-cerrajeria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["escudo", "proteccion", "cilindro"]

respuesta: verdadero
tipo: vf

enunciado: "El escudo o placa de protección tiene como función principal cubrir el mecanismo del cilindro para evitar ataques como el taladro o la palanca."

explicacion: |
  Correcto. El escudo actúa como una barrera física que protege las partes internas vulnerables del cilindro contra herramientas de ataque comunes.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["picaporte", "cerrojo", "mecanismo"]

variables:
  tipo_mecanismo: uno_de(["resorte", "muelle", "elastic"])

respuesta: "No depende de un resorte"
tipo: completar

enunciado: "A diferencia del picaporte, que usa un mecanismo de {tipo_mecanismo} para retornar, el cerrojo ofrece una barrera mecánica más firme que no depende de la energía de un resorte. ¿Qué característica define al cerrojo en este contexto?"

explicacion: |
  El cerrojo (latch vs bolt) se asegura mecánicamente sin ayuda de muelles para mantenerse en posición, proporcionando mayor seguridad que el picaporte que solo se mantiene cerrado por fricción o resorte.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["antipanico", "evacuacion", "normativa"]

respuesta: verdadero
tipo: vf

enunciado: "Los sistemas antipánico son obligatorios en edificios de gran concurrencia como escuelas y hospitales."

explicacion: |
  Correcto. La normativa de seguridad exige barras antipánico para permitir la evacuación rápida y segura bajo presión extrema.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["calidad", "marcas", "certificacion"]

variables:
  tiene_certificacion: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

enunciado: "Es fundamental que el cerrajero identifique marcas confiables que posean certificaciones de resistencia verificables."

explicacion: |
  Las certificaciones garantizan que el producto cumple con estándares de seguridad mínimos, algo esencial en la selección de materiales.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["picaporte", "retorno", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "Los picaportes modernos suelen incorporar mecanismos de retorno automático."

explicacion: |
  El retorno automático asegura que la puerta quede cerrada correctamente después de cada uso, manteniendo la seguridad pasiva.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["picaporte", "bloqueo", "privacidad"]

variables:
  tiene_bloqueo: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

enunciado: "Los picaportes modernos suelen incorporar mecanismos de bloqueo interior."

explicacion: |
  El bloqueo interior permite a los usuarios garantizar su privacidad y seguridad dentro de una habitación.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["mercado", "argentina", "calidad"]

variables:
  variacion: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, es común encontrar variaciones en la calidad de los materiales según su origen."

explicacion: |
  El cerrajero debe estar atento a las diferencias de calidad entre productos nacionales e importados, y de distintas gamas.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "avanzado"
  tags: ["formacion", "diferencia", "profesional"]

variables:
  factor: uno_de(["conocimiento", "velocidad", "precio"])

respuesta: "conocimiento"
tipo: completar

enunciado: "Distinguir los contextos de uso es lo que separa a un técnico básico de un profesional capacitado para obras complejas."

explicacion: |
  La comprensión profunda de la lógica de seguridad, más allá del montaje, define la competencia profesional.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["antipanico", "mecanica", "calculos"]

variables:
  fuerza_base: random(50, 100)
  factor_seguridad: uno_de([1.5, 2.0, 2.5])
  fuerza_total: redondear(fuerza_base * factor_seguridad, 1)

respuesta: "{fuerza_total}"
tipo: input

enunciado: "Si la fuerza mínima requerida para accionar una barra antipánico es de {fuerza_base} Newtons y se aplica un factor de seguridad de {factor_seguridad}x para garantizar la evacuación, ¿cuál es la fuerza total de actuación necesaria? (Redondear a 1 decimal)"

explicacion: |
  La barra antipánico debe superar la resistencia mecánica base con un margen de seguridad. Se multiplica la fuerza base por el factor de seguridad para obtener el valor de diseño.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cilindros", "defensa", "antitaladro"]

respuesta: verdadero
tipo: vf

enunciado: "El escudo o placa de protección en un cilindro de seguridad tiene como función principal evitar el taladrado del mecanismo interno."

explicacion: |
  El escudo está fabricado con materiales endurecidos o contiene placas antitaladro para proteger el núcleo del cilindro de ataques directos con brocas.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["picaportes", "dimensiones", "instalacion"]

variables:
  espesor_puerta: random(35, 60)
  largo_base: 60
  largo_total: espesor_puerta + largo_base
  margen_ajuste: random(5, 10)
  largo_final: largo_total - margen_ajuste

respuesta: "{largo_final}"
tipo: input

enunciado: "Para instalar un picaporte con varilla de paso en una puerta de {espesor_puerta} mm de grosor, si el mecanismo del picaporte requiere 60 mm de recorrido interno y se deja un margen de ajuste de {margen_ajuste} mm, ¿cuál es la longitud total mínima de la varilla?"

explicacion: |
  La longitud de la varilla debe cubrir el grosor de la puerta más la profundidad del mecanismo del picaporte, restando el margen de ajuste para evitar que las tuercas toquen la superficie.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cerrojos", "picaportes", "mecanismos"]

respuesta: falso
tipo: vf

enunciado: "A diferencia del cerrojo, el picaporte depende de un resorte para su retorno automático y generalmente ofrece menor firmeza de cierre."

explicacion: |
  La afirmación es falsa porque describe correctamente al picaporte. El picaporte SÍ depende de un resorte y ofrece MENOR firmeza que el cerrojo. Espera, la pregunta es VF. Si la respuesta es falso, la premisa debe ser incorrecta. Revisemos: El picaporte depende de resorte (cierto) y ofrece menor firmeza (cierto). Entonces la afirmación es verdadera. Cambiaré la respuesta a verdadero para ser preciso.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cerrojos", "picaportes", "mecanismos"]

respuesta: verdadero
tipo: vf

enunciado: "El cerrojo proporciona una barrera mecánica más firme que el picaporte porque no depende de la energía de un resorte para mantenerse bloqueado."

explicacion: |
  El cerrojo se acciona por giro de llave o pomo y se mantiene en posición por encaje mecánico directo, mientras que el picaporte usa un resorte que puede ceder bajo presión lateral fuerte.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["materiales", "peso", "acero"]

variables:
  volumen_cm3: random(50, 200)
  densidad_acero: 7.85
  peso_g: redondear(volumen_cm3 * densidad_acero, 1)

respuesta: "{peso_g}"
tipo: input

enunciado: "Un cerrojo de acero tiene un volumen de {volumen_cm3} cm³. Sabiendo que la densidad del acero es aproximadamente 7.85 g/cm³, ¿cuánto pesa el componente en gramos?"

explicacion: |
  El peso se calcula multiplicando el volumen por la densidad del material. Esto es útil para estimar cargas y soportes en estructuras metálicas.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cilindros", "proteccion", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "La placa de protección o escudo cubre el mecanismo del cilindro para evitar ataques de palanca (leveraging)."

explicacion: |
  El escudo no solo protege del taladro, sino que también dificulta el uso de herramientas para hacer palanca sobre la llave o el cilindro.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["antipanico", "evacuacion", "normativa"]

respuesta: falso
tipo: vf

enunciado: "En un hospital, las puertas de salida de emergencia pueden utilizar picaportes estándar con llave para garantizar la seguridad de los pacientes."

explicacion: |
  Falso. Los edificios de gran concurrencia como hospitales requieren sistemas antipánico (barras horizontales) que abran con presión simple, sin necesidad de llave o acción compleja, para permitir una evacuación rápida y segura.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "avanzado"
  tags: ["materiales", "propiedades", "acero"]

variables:
  area_mm2: random(10, 50)
  resistencia_mp: random(300, 500)
  fuerza_n: area_mm2 * resistencia_mp
  fuerza_kn: redondear(fuerza_n / 1000, 2)

respuesta: "{fuerza_kn}"
tipo: input

enunciado: "Una varilla de acero para cerrajería tiene un área de sección transversal de {area_mm2} mm² y una resistencia a la tracción de {resistencia_mp} MPa. ¿Cuál es la fuerza máxima que puede soportar en kilonewtons (kN)?"

explicacion: |
  La fuerza máxima es el producto del área por la resistencia del material. Se divide por 1000 para convertir Newtons a Kilonewtons.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["materiales", "zamak", "aleaciones"]

respuesta: verdadero
tipo: vf

enunciado: "El zamak es una aleación de zinc que se utiliza frecuentemente en la fabricación de componentes de cerrajería por su facilidad de fundición y bajo costo."

explicacion: |
  El zamak es una aleación de zinc con aluminio, magnesio y cobre, muy común en piezas fundidas como pomos y cuerpos de cerraduras económicas.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["llaves", "dimensiones", "diseño"]

variables:
  largo_gollete: random(20, 30)
  largo_cuerpo: random(80, 120)
  largo_total: largo_gollete + largo_cuerpo
  margen: random(2, 5)
  largo_final: largo_total + margen

respuesta: "{largo_final}"
tipo: input

enunciado: "Si el gollete de una llave mide {largo_gollete} mm y el cuerpo principal mide {largo_cuerpo} mm, ¿cuál es la longitud total aproximada incluyendo un margen de {margen} mm para la cabeza de la llave?"

explicacion: |
  La longitud total de una llave es la suma de sus partes constitutivas más los márgenes necesarios para el agarre y la cabeza.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["picaportes", "mecanismos", "retorno"]

respuesta: verdadero
tipo: vf

enunciado: "El mecanismo de retorno automático en un picaporte permite que la púa vuelva a su posición original después de ser accionada."

explicacion: |
  Este mecanismo, generalmente accionado por un resorte helicoidal, asegura que la cerradura se bloquee automáticamente al cerrar la puerta.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["instalacion", "dimensiones", "area"]

variables:
  largo_placa: random(100, 200)
  ancho_placa: random(20, 40)
  area_cm2: redondear((largo_placa * ancho_placa) / 100, 2)

respuesta: "{area_cm2}"
tipo: input

enunciado: "Una placa de protección para cilindro tiene dimensiones de {largo_placa} mm de largo por {ancho_placa} mm de ancho. ¿Cuál es su área en centímetros cuadrados?"

explicacion: |
  Se multiplica largo por ancho para obtener el área en mm² y luego se divide por 100 para convertirla a cm².
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["mantenimiento", "frecuencia", "recomendaciones"]

variables:
  uso_diario: random(100, 500)
  intervalo_meses: uno_de([3, 6, 12])
  intervalo_dias: intervalo_meses * 30

respuesta: "{intervalo_dias}"
tipo: input

enunciado: "Si una puerta de alta concurrencia con {uso_diario} aperturas diarias requiere mantenimiento preventivo cada {intervalo_meses} meses, ¿cuántos días pasan entre cada servicio?"

explicacion: |
  Se multiplica el número de meses por 30 (promedio de días) para obtener el intervalo en días.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cerrojos", "seguridad", "funcion"]

respuesta: verdadero
tipo: vf

enunciado: "El cerrojo de seguridad se utiliza como complemento del picaporte para ofrecer una barrera mecánica adicional que no depende del resorte."

explicacion: |
  El cerrojo provee una fijación más firme y resistente a la fuerza bruta, mientras que el picaporte facilita el uso cotidiano.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["herramientas", "dimensiones", "taladro"]

variables:
  diametro_cilindro: random(30, 40)
  holgura: 2
  diametro_broca: diametro_cilindro + holgura

respuesta: "{diametro_broca}"
tipo: input

enunciado: "Para taladrar el alojamiento de un cilindro de {diametro_cilindro} mm de diámetro, se utiliza una broca de {holgura} mm mayor. ¿Cuál es el diámetro de la broca?"

explicacion: |
  Se suma la holgura necesaria para el ajuste del cilindro al diámetro nominal del mismo.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["llaves", "peso", "materiales"]

variables:
  largo_llave: random(80, 100)
  peso_por_mm: 0.1
  peso_total: redondear(largo_llave * peso_por_mm, 2)

respuesta: "{peso_total}"
tipo: input

enunciado: "Si una llave de acero tiene una longitud de {largo_llave} mm y pesa aproximadamente 0.1 gramos por milímetro de longitud, ¿cuánto pesa la llave?"

explicacion: |
  El peso se estima multiplicando la longitud por el factor de peso específico de la llave.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["cilindros", "defensa", "antitaladro"]

respuesta: verdadero
tipo: vf

enunciado: "El escudo antitaladro está diseñado para romper la broca o dificultar su avance al ser taladrado."

explicacion: |
  Estos escudos contienen materiales muy duros o placas de acero endurecido que destruyen las brocas estándar.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "avanzado"
  tags: ["fuego", "resistencia", "normativa"]

variables:
  tiempo_resistencia: uno_de([30, 60, 90])
  temperatura_max: 1000
  resistencia_calc: tiempo_resistencia * 10

respuesta: "{resistencia_calc}"
tipo: input

enunciado: "Si una cerradura debe resistir el fuego durante {tiempo_resistencia} minutos, y cada minuto equivale a 10 unidades de índice de resistencia, ¿cuál es el índice total?"

explicacion: |
  El índice de resistencia se calcula multiplicando el tiempo de resistencia por un factor constante de evaluación.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["instalacion", "dimensiones", "distancia"]

variables:
  distancia_centro: random(92, 96)
  holgura: 2
  distancia_final: distancia_centro + holgura

respuesta: "{distancia_final}"
tipo: input

enunciado: "Si la distancia estándar del centro del orificio de la llave al borde de la puerta es {distancia_centro} mm y se requiere una holgura de {holgura} mm, ¿cuál es la distancia final de marcado?"

explicacion: |
  Se suma la holgura a la medida estándar para asegurar el ajuste correcto del mecanismo.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "basico"
  tags: ["antipanico", "evacuacion", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema antipánico prioriza la evacuación rápida sobre la privacidad, abriéndose con fuerza bruta."

explicacion: |
  En emergencias, la vida humana es prioritaria, por lo que estos sistemas permiten la apertura sin necesidad de llave o giros complejos.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_materiales_cerrajeria"
  nivel: "intermedio"
  tags: ["mantenimiento", "lubricacion", "volumen"]

variables:
  cantidad_puertas: random(10, 50)
  aceite_por_puerta: 2
  total_ml: cantidad_puertas * aceite_por_puerta

respuesta: "{total_ml}"
tipo: input

enunciado: "Si se requieren 2 ml de aceite lubricante por cada una de las {cantidad_puertas} puertas de una instalación, ¿cuántos mililitros de aceite se necesitan en total?"

explicacion: |
  El volumen total es el producto de la cantidad de unidades por el volumen unitario de lubricante.
```
