# Oficios — diagnostico cerrajeria por casos (cuestionario, 28 preguntas VBLang)

> Tema: `oficios/cerrajero/diagnostico-cerrajeria-por-casos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "llave_trabada", "suciedad"]

variables:
  causa_suciedad: uno_de(["suciedad acumulada", "residuos de lubricante viejo"])
  causa_desalineacion: uno_de(["desalineación mecánica", "eje doblado"])

respuesta: "{causa_suciedad}"
tipo: completar

enunciado: "Cuando una llave no entra o queda trabada en el bombín, una causa frecuente es la {causa_suciedad}, que impide la alineación correcta de los pasados internos."

explicacion: |
  La suciedad, compuesta por polvo, óxido o residuos de lubricantes viejos, impide que los pasadores internos se alineen correctamente con la llave.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "sensacion_tactil", "suciedad"]

variables:
  sintoma: "resistencia granular"

respuesta: "{sintoma}"
tipo: completar

enunciado: "El diagnóstico de suciedad interna se confirma al notar una {sintoma} al girar la llave en el bombín."

explicacion: |
  La presencia de partículas en el interior genera una fricción irregular que se percibe táctilmente como una resistencia granular.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "mecanico", "eje"]

variables:
  causa_posible: uno_de(["eje de la llave doblado", "mecanismo de retorno atascado"])

respuesta: "{causa_posible}"
tipo: completar

enunciado: "Si la llave entra pero no gira, o gira con mucho juego sin accionar el pestillo, puede deberse a que el {causa_posible}."

explicacion: |
  Una llave que entra pero no transmite movimiento sugiere un fallo en la transmisión de fuerza, ya sea por deformación del eje o bloqueo del retorno.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "cerrojo", "alineacion"]

variables:
  causa_principal: "alineación entre la hoja móvil y la placa fija"

respuesta: "{causa_principal}"
tipo: completar

enunciado: "En los cerrojos que no cierran o cierran mal, el problema rara vez es del cilindro en sí, sino de la {causa_principal}."

explicacion: |
  El cerrojo depende de la coincidencia precisa entre la hoja que se mueve y la placa fija donde encaja el pestillo.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "herramientas", "tiza"]

variables:
  material: uno_de(["tiza", "lápiz"])

respuesta: "{material}"
tipo: completar

enunciado: "Para diagnosticar si el pestillo golpea fuera de su ranura, se marca el punto de contacto con {material}."

explicacion: |
  Marcar el pestillo permite visualizar si el impacto ocurre en el centro o en los bordes, indicando desajustes de la puerta.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "puerta", "asentamiento"]

variables:
  diagnostico: "la puerta se ha asentado"

respuesta: "{diagnostico}"
tipo: completar

enunciado: "Si la marca del pestillo aparece arriba, el diagnóstico indica que {diagnostico}."

explicacion: |
  Una marca superior sugiere que la puerta ha bajado por asentamiento o que las bisagras superiores están sueltas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "puerta", "bisagras"]

variables:
  diagnostico: "las bisagras se han relajado"

respuesta: "{diagnostico}"
tipo: completar

enunciado: "Si la marca del pestillo aparece en los laterales, el diagnóstico suele indicar que {diagnostico}."

explicacion: |
  El desplazamiento lateral del pestillo es típico de puertas que han perdido su verticalidad por relajación de las bisagras.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["seguridad", "errores_comunes", "fuerza"]

variables:
  riesgo: "destrucción total del cilindro o de la hoja metálica"

respuesta: "{riesgo}"
tipo: completar

enunciado: "Intentar forzar una cerradura sin entender su estado interno puede convertir un problema menor en una {riesgo}."

explicacion: |
  La fuerza bruta sin diagnóstico previo es la principal causa de daños irreparables en los mecanismos de seguridad.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "avanzado"
  tags: ["diagnostico", "llave_rota", "herramientas"]

variables:
  consecuencia: "imposible su recuperación sin taladrar"

respuesta: "{consecuencia}"
tipo: completar

enunciado: "Intentar extraer una llave rota con herramientas inadecuadas puede empujar el fragmento más al fondo, haciendo {consecuencia}."

explicacion: |
  Las herramientas incorrectas actúan como cuñas, profundizando la llave hasta la zona de los pasadores, donde no se puede alcanzar.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["teoria", "pilares", "metodologia"]

variables:
  pilar1: "inspección visual"
  pilar2: "sensación táctil"
  pilar3: "evaluación del estado"

respuesta: "{pilar1}"
tipo: completar

enunciado: "El diagnóstico se basa en tres pilares: la {pilar1} del llavero y la ranura, la sensación táctil y la evaluación del estado de las piezas móviles."

explicacion: |
  La inspección visual es el primer paso para identificar obstrucciones externas o daños visibles en la llave.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "mecanico", "eje"]

variables:
  sintoma: "gira con mucho juego"

respuesta: "{sintoma}"
tipo: completar

enunciado: "Si la llave gira con mucho juego sin accionar el pestillo, un diagnóstico posible es que el eje de la llave se ha doblado."

explicacion: |
  El juego excesivo indica que la fuerza no se transmite al mecanismo de giro, sino que se pierde en la holgura del eje.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "mecanico", "retorno"]

variables:
  causa: "mecanismo de retorno está atascado"

respuesta: "{causa}"
tipo: completar

enunciado: "Si la llave entra pero no gira, otra causa posible es que el {causa}."

explicacion: |
  El mecanismo de retorno es responsable de la posición neutra; si se atasca, impide el movimiento rotatorio normal.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["teoria", "economia", "costo"]

variables:
  beneficio: "determina la viabilidad de la reparación y el costo final"

respuesta: "{beneficio}"
tipo: completar

enunciado: "El diagnóstico es crítico porque {beneficio} del servicio."

explicacion: |
  Sin un diagnóstico preciso, es imposible presupuestar correctamente o decidir si la reparación es viable.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["teoria", "tipos_cerraduras", "mecanismos"]

variables:
  ejemplo1: "cerraduras de perno tradicional"
  ejemplo2: "cilindros de alta seguridad con pasadores de pinza"

respuesta: "{ejemplo1}"
tipo: completar

enunciado: "Desde las {ejemplo1} hasta los cilindros de alta seguridad con pasadores de pinza, cada sistema responde distinto a la presión."

explicacion: |
  La variedad de mecanismos requiere que el cerrajero adapte su diagnóstico a la tecnología específica de cada cerradura.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "avanzado"
  tags: ["diagnostico", "tipos_falla", "comparacion"]

variables:
  falla_mecanica: "falta de lubricación"
  falla_estructural: "rotura de un resorte interno"

respuesta: "{falla_mecanica}"
tipo: completar

enunciado: "Un diagnóstico preciso permite distinguir entre una falla mecánica simple, como la {falla_mecanica}, y una estructural."

explicacion: |
  La lubricación es un mantenimiento rutinario, mientras que la rotura de resortes implica una intervención más compleja.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "avanzado"
  tags: ["diagnostico", "llaves_maestras", "desgaste"]

variables:
  sintoma: "desgaste excesivo de las llaves maestras"

respuesta: "{sintoma}"
tipo: completar

enunciado: "El diagnóstico debe considerar el {sintoma}, que afecta la compatibilidad y el funcionamiento del sistema."

explicacion: |
  Las llaves maestras tienen cortes especiales que, si se desgastan, pierden su capacidad de activar múltiples cerraduras.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["teoria", "eficiencia", "cliente"]

variables:
  beneficio: "ahorra tiempo al cliente"

respuesta: "{beneficio}"
tipo: completar

enunciado: "La capacidad de diagnosticar rápidamente {beneficio}, además de evitar el daño colateral."

explicacion: |
  Un diagnóstico rápido reduce la duración de la intervención y mejora la satisfacción del usuario final.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "inspeccion", "llavero"]

variables:
  elemento: "llavero"

respuesta: "{elemento}"
tipo: completar

enunciado: "El primer pilar del diagnóstico es la inspección visual del {elemento} y la ranura de la cerradura."

explicacion: |
  El llavero puede mostrar signos de uso excesivo, doblez o corrosión que explican el fallo.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "tactil", "giro"]

variables:
  accion: "sensación táctil"

respuesta: "{accion}"
tipo: completar

enunciado: "La {accion} al girar la llave es fundamental para detectar resistencias o juego anormal."

explicacion: |
  El tacto del cerrajero es una herramienta de diagnóstico tan importante como la vista.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "piezas", "movilidad"]

variables:
  objeto: "piezas móviles"

respuesta: "{objeto}"
tipo: completar

enunciado: "El tercer pilar es la evaluación del estado de las {objeto} internas."

explicacion: |
  Verificar si los pasadores, resortes o ejes se mueven libremente es clave para el diagnóstico interno.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "herramientas", "marcado"]

variables:
  material: uno_de(["tiza", "lápiz"])

respuesta: "{material}"
tipo: completar

enunciado: "Para diagnosticar la alineación del pestillo, se marca el punto de contacto con {material}."

explicacion: |
  El material de marcado deja una huella clara en la placa fija, revelando el punto exacto de impacto.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "puerta", "alineacion"]

variables:
  diagnostico: "la puerta se ha asentado"

respuesta: "{diagnostico}"
tipo: completar

enunciado: "Si la marca aparece abajo, el diagnóstico indica que {diagnostico}."

explicacion: |
  Una marca inferior confirma que la puerta ha bajado, desalineando el pestillo con la placa.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["teoria", "prevencion", "daño"]

variables:
  objetivo: "evita el daño colateral"

respuesta: "{objetivo}"
tipo: completar

enunciado: "El diagnóstico preciso en el contexto profesional {objetivo}."

explicacion: |
  Prevenir daños adicionales es una obligación ética y técnica del cerrajero profesional.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "suciedad", "causa"]

variables:
  causa: "suciedad acumulada"

respuesta: "{causa}"
tipo: completar

enunciado: "Cuando la llave no entra, una causa suele ser la {causa}."

explicacion: |
  La acumulación de partículas es la falla más común en cerraduras de uso frecuente.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "basico"
  tags: ["diagnostico", "mecanica", "causa"]

variables:
  causa: "desalineación mecánica"

respuesta: "{causa}"
tipo: completar

enunciado: "La otra causa frecuente de llave trabada es la {causa}."

explicacion: |
  La desalineación puede deberse a golpes, desgaste de bisagras o deformación de la hoja.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "confirmacion", "suciedad"]

variables:
  sintoma: "resistencia granular"

respuesta: "{sintoma}"
tipo: completar

enunciado: "La presencia de {sintoma} confirma el diagnóstico de suciedad interna."

explicacion: |
  Este síntoma es distintivo y no suele aparecer en fallas puramente mecánicas de eje o retorno.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "diferencial", "mecanico"]

variables:
  falla1: "eje de la llave se ha doblado"
  falla2: "mecanismo de retorno está atascado"

respuesta: "{falla1}"
tipo: completar

enunciado: "Si la llave entra pero no gira, puede deberse a que el {falla1}."

explicacion: |
  Ambos problemas provocan falta de giro, pero el eje doblado suele tener un origen físico externo (golpe).
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_diagnostico_cerrajeria_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "cerrojo", "alineacion"]

variables:
  componente: "hoja móvil y la placa fija"

respuesta: "{componente}"
tipo: completar

enunciado: "El problema de cerrojos defectuosos suele estar en la alineación entre la {componente}."

explicacion: |
  La coincidencia geométrica entre estas dos piezas es esencial para el cierre correcto de la puerta.
```
