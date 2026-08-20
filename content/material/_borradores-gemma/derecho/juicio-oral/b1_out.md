### 1 — Definición de Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "definicion"]

tipo: mc
opciones_explicitas: ["La etapa de investigación donde se recolectan elementos de convicción.", "La etapa de debate público donde se presentan pruebas y argumentos para obtener un veredicto.", "La etapa de revisión de la sentencia por un tribunal superior.", "La fase de detención del imputado por parte de la policía."]

enunciado: "El juicio oral se define fundamentalmente como:"

explicacion: |
  El juicio oral es la etapa culminante del proceso penal, caracterizada por la oralidad, la inmediación y la publicidad, donde se debate la culpabilidad o inocencia.
```

### 2 — El rol del Tribunal
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sujetos_procesales", "juez"]

tipo: vf
enunciado: "En un juicio oral, el tribunal tiene la función de dictar una sentencia basada en las pruebas presentadas durante el debate."

respuesta: verdadero

explicacion: |
  Correcto. El tribunal (juez o tribunal de enjuiciamiento) debe valorar las pruebas bajo las reglas de la sana crítica para emitir un fallo.
```

### 3 — Secuencia del Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas principales de un debate en juicio oral:"

respuesta: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de testigos y peritos (prueba), los alegatos finales (clausura) y concluye con el fallo (sentencia).
```

### 4 — Terminología: Alegatos
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["argumentacion", "terminos"]

tipo: completar
respuestas_validas: ["clausura", "apertura"]

enunciado: "El alegato de ___ es la exposición final que realiza cada parte para convencer al tribunal de su teoría del caso tras la producción de la prueba."

respuesta: "clausura"

explicacion: |
  El alegato de clausura es la oportunidad para la parte para realizar un análisis crítico de la prueba producida y reforzar su pretensión.
```

### 5 — Principios del Juicio
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "publicidad"]

variables:
  escenario: uno_de([0,1])

enunciado: "Si el juicio se realiza en una sala abierta al público y sin restricciones de acceso, se está cumpliendo con el principio de {escenario_tipo}."

pasos:
  - "Identificar el principio relacionado con la visibilidad del acto."

variables_texto:
  escenario_tipo: uno_de(["publicidad", "inmediación"])

# Nota: Para cumplir con la regla de que la respuesta sea del mismo tipo que la variable de sorteo en un contexto de completar/mc complejo, 
# en este caso simplificamos para asegurar que la lógica de respuesta sea directa según el escenario sorteado.

# Re-estructurando para cumplir estrictamente la regla de respuesta igual al dato sorteado:
# (En este caso, como es un concepto fijo, se usa el escenario para el texto pero la respuesta depende del valor)

tipo: mc
opciones_explicitas: ["Publicidad", "Inmediación", "Contradicción", "Oralidad"]

respuesta: "Publicidad"

explicacion: |
  El principio de publicidad garantiza que los actos procesales sean conocidos por la sociedad, asegurando transparencia en la administración de justicia.
```