### 1 — Función ritual del arte rupestre
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "ritual"]

tipo: mc
opciones_explicitas: ["Decoración estética", "Magia de caza", "Registro de eventos históricos", "Expresión de identidad"]

enunciado: "Se cree que muchas pinturas rupestres de animales no tenían un fin decorativo, sino que formaban parte de un ritual para asegurar el éxito en la obtención de alimento. ¿Qué función describe mejor esta creencia?"

respuesta: "Magia de caza"

explicacion: |
  La teoría de la 'magia simpática' sugiere que pintar al animal era un acto ritual para controlarlo y facilitar la caza real.
```

### 2 — El arte como registro
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["registro", "comunicación"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [["pinturas de escenas de danza", "registrar eventos sociales"], ["grabados de manos", "marcar la presencia de individuos"]]

tipo: completar
respuestas_validas: ["registrar eventos sociales", "marcar la presencia de individuos"]

enunciado: "Si un grupo de homínidos utilizaba el arte para dejar constancia de lo ocurrido en su comunidad, el arte estaría cumpliendo la función de ___."

respuesta: escenario_datos[escenario_idx][1]

explicacion: |
  El arte también funcionó como un sistema de registro para preservar la memoria de eventos o la identidad de quienes habitaban un lugar.
```

### 3 — Identidad y pertenencia
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["identidad", "social"]

tipo: mc
opciones_explicitas: ["Identidad grupal", "Uso utilitario", "Ritual de fertilidad", "Decoración de refugio"]

enunciado: "El uso de símbolos o marcas específicas en las cuevas que permitían a diferentes bandas reconocer el territorio de otros sugiere una función de:"

respuesta: "Identidad grupal"

explicacion: |
  Los símbolos compartidos ayudan a fortalecer la cohesión del grupo y a diferenciar la identidad de una comunidad frente a otra.
```

### 4 — Secuencia de funciones del arte
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["teoria", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

respuesta: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

enunciado: "Ordena las siguientes teorías sobre la evolución de la función del arte, desde la más ligada a la supervivencia inmediata hasta la más abstracta/contemplativa:"

explicacion: |
  Históricamente, se debate si el arte comenzó con propósitos mágicos-supervivencia, pasó a ser un registro social y finalmente se convirtió en un objeto de contemplación estética.
```

### 5 — El arte como herramienta mágica
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["magia", "supervivencia"]

tipo: input
tolerancia_abs: 0

enunciado: "Si el arte rupestre se utilizaba para realizar un ritual de fertilidad de la fauna, su función principal era asegurar la ___."

respuesta: "supervivencia"

explicacion: |
  Al intentar influir en la naturaleza mediante el arte, el ser humano primitivo buscaba asegurar la continuidad de su propia subsistencia.
```