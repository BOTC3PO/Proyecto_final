# ESI — ITS: transmisión, prevención, detección (cuestionario, 25 preguntas VBLang)

> Tema: `ES3a/b/c`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: varias preguntas `tipo: vf`
> cuya `respuesta:` era un texto libre en vez de `verdadero`/`falso`
> — reclasificadas a `completar`/`mc`; dos preguntas con **dos**
> blancos en el `enunciado` pero una `respuesta:` combinada (un caso
> como array) — recortadas a un solo blanco; `tipo: vf` con
> `opciones_explicitas: ["Verdadero","Falso"]` innecesario —
> normalizado.

---

### 1 — Causas de las ITS

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["biologia", "salud"]

enunciado: "Las Infecciones de Transmisión Sexual (ITS) pueden ser causadas por diferentes microorganismos, principalmente bacterias o ___."

respuestas_validas:
  - "virus"
respuesta: "virus"
tipo: completar

explicacion: |
  Las ITS pueden ser causadas por bacterias (como la sífilis o la gonorrea), virus (como el VPH o el VIH) o parásitos.
```

### 2 — Vías de transmisión

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "salud"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["relaciones sexuales sin protección", "el uso del preservativo"], ["contacto con sangre infectada", "el uso de material estéril"], ["transmisión de madre a hijo durante el parto", "el control prenatal"]]

enunciado: "Una de las principales vías de contagio es a través de {datos[escenario_idx][0]}, por lo que la prevención fundamental es ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "el uso del preservativo"
  - "el uso de material estéril"
  - "el control prenatal"

explicacion: |
  Existen múltiples vías de transmisión, pero el uso de barreras de protección y controles médicos son claves para reducir riesgos.
```

### 3 — Síntomas invisibles

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["deteccion", "concientizacion"]

enunciado: "Es fundamental saber que muchas ITS son asintomáticas, lo que significa que la persona puede tener la infección pero ___ síntomas visibles."

respuestas_validas:
  - "no presenta"
  - "no tiene"
  - "no muestra"
respuesta: "no presenta"
tipo: completar

explicacion: |
  Que una ITS no presente síntomas no significa que la persona no pueda transmitirla. Por eso es importante realizarse chequeos periódicos.
```

### 4 — Tipos de microorganismos

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["biologia"]

variables:
  ejemplo_tipo: uno_de([0, 1])
  casos: [["el VIH", "el virus"], ["la sífilis", "la bacteria"]]

enunciado: "Si hablamos de {casos[ejemplo_tipo][0]}, estamos ante un caso de infección causada por ___."

respuesta: casos[ejemplo_tipo][1]
tipo: completar
respuestas_validas:
  - "el virus"
  - "la bacteria"

explicacion: |
  Es vital distinguir si la infección es viral o bacteriana, ya que los tratamientos (como los antibióticos) varían según el agente.
```

### 5 — Prevención y detección

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["prevencion", "salud"]

enunciado: "Para prevenir las ITS durante las relaciones sexuales, el método más eficaz es el uso de ___."

respuestas_validas:
  - "preservativo"
  - "condón"
  - "barrera de látex"
respuesta: "preservativo"
tipo: completar

explicacion: |
  El preservativo es el único método de barrera que previene tanto embarazos como la mayoría de las ITS.
```

### 6 — El preservativo y su efectividad

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "preservativo", "riesgo"]

tipo: mc
opciones_explicitas: ["Elimina el riesgo de contagio al 100%", "Reduce significativamente el riesgo, pero no lo elimina totalmente", "Sólo es efectivo si se usa con lubricante a base de aceite", "No tiene utilidad si no hay penetración"]

respuesta: "Reduce significativamente el riesgo, pero no lo elimina totalmente"

enunciado: "Sobre el uso del preservativo como método de barrera, es correcto afirmar que..."

explicacion: |
  El preservativo es el método más eficaz para prevenir ITS, pero su efectividad depende de un uso correcto y consistente. No garantiza una protección del 100%, pero reduce drásticamente el riesgo.
```

### 7 — Vacunación y prevención

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["vacunacion", "vph", "hepatitis_b"]

tipo: vf
respuesta: verdadero

enunciado: "Existen vacunas disponibles para prevenir algunas infecciones de transmisión sexual, como el Virus del Papiloma Humano (VPH) y la Hepatitis B."

explicacion: |
  La vacunación es una herramienta de prevención fundamental. La vacuna contra el VPH previene los tipos de virus que causan la mayoría de los cánceres de cuello uterino y otros problemas, mientras que la vacuna contra la Hepatitis B protege contra esta infección viral que afecta al hígado.
```

### 8 — Estrategias de prevención

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["prevencion", "estrategias", "riesgo"]

tipo: mc
opciones_explicitas: ["La abstinencia es la única forma de evitar ITS", "El uso de preservativo es la única estrategia válida", "La combinación de prevención (barrera, vacunación, controles) es lo más efectivo", "Los controles médicos no ayudan a la prevención"]

respuesta: "La combinación de prevención (barrera, vacunación, controles) es lo más efectivo"

enunciado: "Para reducir el riesgo de contraer una ITS, la estrategia más integral es..."

explicacion: |
  Si bien la abstinencia es el único método que elimina el riesgo de transmisión sexual, no es la única estrategia válida para quienes deciden iniciar su vida sexual. Una combinación de uso de preservativo, vacunación y controles médicos periódicos constituye una red de protección mucho más robusta.
```

### 9 — Controles de salud

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["controles", "deteccion", "salud"]

tipo: vf
respuesta: verdadero

enunciado: "Realizarse controles médicos periódicos es una práctica recomendada para la detección temprana de infecciones, incluso si no se presentan síntomas."

explicacion: |
  Muchas ITS son asintomáticas. Por ello, los controles periódicos son esenciales para detectar infecciones de forma temprana y recibir tratamiento oportuno, evitando complicaciones a largo plazo.
```

### 10 — El concepto de riesgo cero

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["riesgo", "prevencion", "abstinencia"]

tipo: mc
opciones_explicitas: ["El uso de preservativo garantiza riesgo cero", "La abstinencia es la única estrategia que implica riesgo cero", "Los controles médicos eliminan el riesgo de contagio", "La vacunación elimina el riesgo de todas las ITS"]

respuesta: "La abstinencia es la única estrategia que implica riesgo cero"

enunciado: "En el contexto de la prevención de ITS, se considera que el único escenario de 'riesgo cero' es..."

explicacion: |
  Es importante distinguir entre 'reducción de riesgo' y 'riesgo cero'. El preservativo y las vacunas reducen el riesgo de manera muy efectiva, pero la única forma de evitar la transmisión por vía sexual es la abstinencia — sin que eso la vuelva la única estrategia válida para quienes sí eligen tener vida sexual.
```

### 11 — La importancia del testeo

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "salud_sexual"]

tipo: vf
respuesta: falso

enunciado: "Si una persona no presenta síntomas visibles, se puede asegurar que no tiene una Infección de Transmisión Sexual (ITS)."

explicacion: |
  Falso. Muchas ITS son asintomáticas, lo que significa que la persona se siente bien pero puede transmitir la infección o sufrir daños a largo plazo. La única forma confiable de saberlo es mediante un test médico.
```

### 12 — Detección temprana: beneficios

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "tratamiento"]

tipo: completar

enunciado: "Realizar un test de detección de forma temprana permite acceder a un mejor ___."

respuestas_validas:
  - "tratamiento"
respuesta: "tratamiento"

explicacion: |
  La detección temprana es clave: permite iniciar un tratamiento adecuado antes de que la infección avance y evita que la cadena de contagio continúe.
```

### 13 — El estigma como barrera

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["estigma", "barreras_salud"]

tipo: vf
respuesta: verdadero

enunciado: "El miedo al juicio social o el estigma son factores que pueden impedir que una persona se realice un test de ITS."

explicacion: |
  El estigma social actúa como una barrera real para la salud pública, ya que el miedo a ser juzgado o señalado impide que las personas busquen diagnóstico y tratamiento oportuno.
```

### 14 — El diagnóstico médico

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["diagnostico", "salud"]

tipo: completar

enunciado: "Para saber con certeza si se tiene una ITS, no basta con observar el cuerpo; es necesario realizar un ___ profesional."

respuestas_validas:
  - "examen"
  - "test"
  - "estudio"
respuesta: "examen"

explicacion: |
  La autoevaluación visual no es científica. Los profesionales de la salud utilizan métodos clínicos y de laboratorio para confirmar la presencia de una infección.
```

### 15 — Prevención y responsabilidad

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["prevencion", "salud_sexual"]

tipo: vf
respuesta: verdadero

enunciado: "Hacerse un test de ITS es una forma de cuidar la salud propia y la de la pareja."

explicacion: |
  Efectivamente. El diagnóstico permite el tratamiento temprano (cuidando la salud propia) y evita la transmisión involuntaria (cuidando la salud de los demás).
```

### 16 — Apariencia física y ITS

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["mitos", "salud_sexual"]

tipo: mc
opciones_explicitas: ["Sí, las ITS se pueden notar a simple vista", "No, muchas ITS son asintomáticas", "Sólo se ven si hay heridas", "La apariencia física siempre indica salud"]

respuesta: "No, muchas ITS son asintomáticas"

enunciado: "Un mito común es creer que si una persona tiene buena apariencia física o se ve 'limpia', no puede tener una ITS. ¿Por qué esto es falso?"

explicacion: |
  Muchas infecciones de transmisión sexual (ITS) no presentan síntomas visibles (son asintomáticas) durante mucho tiempo, por lo que la apariencia física no es un indicador de salud sexual.
```

### 17 — Grupos de riesgo

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["mitos", "prevencion"]

tipo: vf
respuesta: falso

enunciado: "Las ITS sólo afectan a ciertos grupos específicos de personas (como personas que tienen múltiples parejas o personas de ciertas orientaciones sexuales)."

explicacion: |
  Falso. Las ITS pueden afectar a cualquier persona que mantenga relaciones sexuales sin protección, independientemente de su orientación sexual, identidad de género o apariencia.
```

### 18 — Uso de preservativo

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["mitos", "prevencion"]

tipo: mc
opciones_explicitas: ["El preservativo es 100% infalible siempre", "Si se usa mal o se rompe, el riesgo de contagio aumenta", "No hay riesgo si sólo se usó una vez", "El preservativo sólo protege de embarazos"]

respuesta: "Si se usa mal o se rompe, el riesgo de contagio aumenta"

enunciado: "Se afirma que 'con un solo uso de preservativo no hay riesgo de contagio si se usa mal'. ¿Cuál es la realidad sobre esto?"

explicacion: |
  El uso incorrecto del preservativo (por ejemplo, si se desliza, se rompe o no se coloca correctamente) anula su función de barrera, permitiendo la transmisión de fluidos e infecciones.
```

### 19 — Importancia de la comunicación

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["comunicación", "prevencion"]

tipo: mc
opciones_explicitas: ["La comunicación es innecesaria si hay confianza", "Hablar con la pareja permite acordar el uso de métodos de barrera", "Comunicar la salud sexual es una pérdida de tiempo", "Sólo se debe hablar si hay síntomas"]

respuesta: "Hablar con la pareja permite acordar el uso de métodos de barrera"

enunciado: "¿Cuál es una de las razones principales por las que la comunicación con la pareja sobre salud sexual es fundamental?"

explicacion: |
  La comunicación permite establecer acuerdos sobre el uso de preservativos, realizar chequeos médicos preventivos y cuidar el bienestar mutuo.
```

### 20 — Detección y síntomas

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["mitos", "deteccion"]

tipo: vf
respuesta: falso

enunciado: "Si una persona no siente dolor ni tiene secreciones extrañas, puede estar segura de que no tiene ninguna ITS."

explicacion: |
  Falso. Como se mencionó anteriormente, muchas ITS son asintomáticas. La única forma segura de saberlo es mediante análisis clínicos, incluso si no hay síntomas.
```

### 21 — El mito del preservativo infalible

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "mitos", "preservativo"]

variables:
  escenario: uno_de([["Si una persona usa preservativo, el riesgo de contagio de ITS es cero en todas las prácticas.", "Mito"], ["El preservativo es el método más eficaz para prevenir la mayoría de las ITS.", "Verdadero"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Mito", "Verdadero"]

enunciado: "Analizá el siguiente escenario: {escenario[0]}"

explicacion: |
  Si bien el preservativo es fundamental, algunas ITS se transmiten por contacto con fluidos o lesiones en zonas no cubiertas por el látex (como el VPH o el Herpes), por eso no da riesgo cero.
```

### 22 — ¿Cómo se detectan las ITS?

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["deteccion", "diagnostico"]

variables:
  caso: uno_de([["Para saber si tengo una ITS, debo esperar a tener síntomas o dolor.", "Falso"], ["Muchas ITS pueden ser asintomáticas (no presentan síntomas) pero aun así se pueden transmitir.", "Verdadero"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Falso", "Verdadero"]

enunciado: "Sobre el siguiente caso: {caso[0]}"

explicacion: |
  La ausencia de síntomas no significa ausencia de infección. La única forma de estar seguro es mediante estudios médicos.
```

### 23 — Prevención y métodos de barrera

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["prevencion", "barrera"]

variables:
  situacion: uno_de([["El uso de lubricantes a base de aceite con preservativos de látex puede romper el material.", "Verdadero"], ["Los lubricantes a base de aceite son seguros para usar con preservativos de látex.", "Falso"]])

respuesta: situacion[1]
tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "Evaluá la veracidad de esta afirmación: {situacion[0]}"

explicacion: |
  El aceite (como el de cocina o cremas) degrada el látex. Siempre se deben usar lubricantes a base de agua o silicona.
```

### 24 — El concepto de portador asintomático

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "intermedio"
  tags: ["transmision", "asintomaticos"]

variables:
  afirmacion: uno_de([["Si una persona no se siente mal, no puede transmitir una ITS.", "Falso"], ["Una persona puede ser portadora de una ITS sin saberlo.", "Verdadero"]])

respuesta: afirmacion[1]
tipo: mc
opciones_explicitas: ["Falso", "Verdadero"]

enunciado: "Analizá la afirmación: {afirmacion[0]}"

explicacion: |
  Muchas infecciones son silenciosas, por eso es importante el testeo regular si se tiene una vida sexual activa.
```

### 25 — Completar la prevención

```
metadata:
  materia: "esi"
  tema: "its_transmision_prevencion_deteccion"
  nivel: "basico"
  tags: ["prevencion", "completar"]

variables:
  contexto: uno_de([["El método de barrera más utilizado para prevenir ITS es el ___.", "preservativo"], ["Para evitar el contagio de ITS en relaciones sexuales, es fundamental el uso de ___.", "preservativo"]])

respuesta: contexto[1]
tipo: completar
respuestas_validas:
  - "preservativo"

enunciado: "Completá la frase: {contexto[0]}"

explicacion: |
  El uso correcto del preservativo (masculino o femenino) es la medida más eficaz para reducir el riesgo de transmisión de la mayoría de las ITS.
```
