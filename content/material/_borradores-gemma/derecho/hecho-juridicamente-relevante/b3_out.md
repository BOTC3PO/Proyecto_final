### 1 — ¿Hecho o Acto?
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["Un accidente de tránsito sin culpa", "El nacimiento de una persona", "El paso de una nube por el cielo", "El deseo de comprar un auto"]

enunciado: "Un hecho es jurídicamente relevante cuando su ocurrencia produce una transformación en el ordenamiento jurídico (crea, modifica o extingue derechos). ¿Cuál de los siguientes es un ejemplo de hecho jurídico relevante?"

explicacion: |
  El nacimiento es un hecho jurídico relevante porque genera la capacidad de derecho y la personalidad jurídica. Un accidente sin culpa es un hecho natural, y el deseo es una mera intención sin manifestación externa.
```

### 2 — La relevancia del efecto legal
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["distincion_fundamental"]

tipo: vf
respuesta: falso

enunciado: "Todo hecho de la naturaleza, como la lluvia o el paso del tiempo, es automáticamente un hecho jurídicamente relevante."

explicacion: |
  Falso. Para que un hecho sea jurídicamente relevante, debe tener una consecuencia legal prevista por la norma. La lluvia es un hecho natural; la lluvia que destruye una cosecha asegurada es un hecho jurídicamente relevante por el contrato de seguro.
```

### 3 — Elementos del hecho jurídico
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["causalidad"]

variables:
  escenario_idx: uno_de([0, 1])

datos:
  - ["La muerte de una persona", "La extinción de la personalidad jurídica y de los derechos patrimoniales"]
  - ["El cumplimiento de la mayoría de edad", "El adquiremiento de la capacidad de ejercicio"]

tipo: completar
respuestas_validas: [datos[escenario_idx][1]]
respuesta: datos[escenario_idx][1]]

enunciado: "Si ocurre {datos[escenario_idx][0]}, la consecuencia jurídica es ___."

pasos:
  - "Identificar el hecho natural o social planteado."
  - "Relacionar el hecho con la consecuencia legal correspondiente según la normativa vigente."

explicacion: |
  El hecho jurídico es el suceso, y la consecuencia es el efecto legal que la norma asigna a ese suceso.
```

### 4 — Diferencia entre Hecho y Acto
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["acto_juridico"]

tipo: mc
opciones_explicitas: ["El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos", "El hecho es siempre legal, el acto es siempre ilegal", "No hay diferencia, son sinónimos en derecho", "El acto es un hecho de la naturaleza y el hecho es un contrato"]

enunciado: "¿Cuál es la distinción fundamental entre un hecho jurídico y un acto jurídico?"

explicacion: |
  La voluntad es el factor clave. En el acto jurídico, la persona busca deliberadamente producir efectos legales; en el hecho jurídico, la consecuencia se produce por la ley, independientemente de la voluntad del sujeto.
```

### 5 — Secuencia de la relevancia jurídica
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["proceso_juridico"]

tipo: ordenar
opciones_explicitas: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]
respuesta: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]

enunciado: "Ordene cronológicamente los elementos necesarios para que un suceso se transforme en un hecho con relevancia jurídica:"

explicacion: |
  Primero debe ocurrir el suceso; segundo, debe existir una norma que haya previsto ese suceso (hipótesis normativa); y finalmente, se produce el efecto legal.
```