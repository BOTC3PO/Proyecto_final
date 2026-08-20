### 1 — La represión y el acceso consciente
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: falso
tipo: vf

enunciado: "Según el concepto de represión en el psicoanálisis, los contenidos reprimidos son recuerdos que han sido borrados permanentemente de la mente y que nunca podrán volver a la conciencia."

explicacion: |
  La represión no es un borrado definitivo, sino un mecanismo de defensa que desplaza los contenidos traumáticos o inaceptables fuera de la conciencia hacia el inconsciente. Sin embargo, estos contenidos siguen activos y pueden emerger a través de sueños, actos fallidos o síntomas.
```

### 2 — El error de la "memoria fotográfica" en el inconsciente
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  tema_secundario: "confusiones_conceptuales"
  nivel: "basico"
  tags: ["inconsciente", "memoria", "confusion"]

variables:
  escenario: uno_de([["un evento traumático", "represión"], ["un dato matemático", "memoria semántica"], ["el nombre de un color", "memoria episódica"]])

respuesta: escenario[0][1]
tipo: completar
respuestas_validas: ["represión", "memoria semántica", "memoria episódica"]

enunciado: "Cuando un individuo experimenta un evento traumático que su psiquismo considera inaceptable, el mecanismo de defensa que actúa para alejarlo de la conciencia se denomina ___."

explicacion: |
  Es común confundir el olvido natural o la falla de memoria con la represión. La represión implica una acción activa del aparato psíquico para mantener un contenido fuera de la conciencia debido a su carga afectiva conflictiva.
```

### 3 — Naturaleza de los contenidos inconscientes
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "psicoanalisis"]

respuesta: "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia."
tipo: mc
opciones_explicitas: ["Los contenidos inconscientes son estáticos y no afectan el comportamiento.", "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia.", "El inconsciente es simplemente una falta de atención momentánea.", "El inconsciente es equivalente a la memoria a corto plazo."]

explicacion: |
  Para el psicoanálisis, el inconsciente no es un depósito pasivo de información olvidada, sino un sistema dinámico donde los contenidos reprimidos luchan constantemente por manifestarse.
```

### 4 — El proceso de olvido patológico
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "mecanismos_defensa"]

respuesta: verdadero
tipo: vf

enunciado: "En el marco del psicoanálisis, el olvido por represión se diferencia del olvido fisiológico en que el primero es un proceso activo de defensa del yo."

explicacion: |
  El olvido fisiológico es una falla en la codificación o recuperación de la información, mientras que la represión es un proceso dinámico donde el sujeto "hace" algo para evitar el acceso a un contenido doloroso.
```

### 5 — Niveles de la mente según el modelo estructural
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["estructura_psiquica", "inconsciente"]

respuesta: ["Inconsciente", "Preconsciente", "Consciente"]
tipo: ordenar
opciones_explicitas: ["Inconsciente", "Preconsciente", "Consciente"]

enunciado: "Ordene los niveles de la estructura psíquica de Freud, desde el que tiene mayor contenido reprimido (más profundo) hacia el que tiene mayor acceso inmediato a la conciencia:"

explicacion: |
  El modelo topográfico de Freud establece que el Inconsciente es el nivel más profundo y dinámico, el Preconsciente contiene elementos que no están en la conciencia pero pueden ser evocados fácilmente, y la Conciencia es el nivel de percepción inmediata.
```