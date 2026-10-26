# Química — Enlace químico y polaridad (cuestionario, 20 preguntas VBLang)

> Tema: `QG`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Estabilidad atómica

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["estabilidad", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "Los átomos se enlazan para alcanzar una configuración más estable, generalmente con 8 electrones de valencia."

explicacion: |
  Los átomos buscan una configuración de baja energía, que en la mayoría de los elementos corresponde a 8 electrones en su capa de valencia (configuración de gas noble).
```

### 2 — La regla del octeto

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["regla_del_octeto"]

respuesta: "octeto"
tipo: completar
respuestas_validas:
  - "octeto"

enunciado: "La regla que dice que los átomos buscan 8 electrones de valencia se llama regla del ___."

explicacion: |
  La regla del octeto establece que los átomos tienden a ganar, perder o compartir electrones para completar ocho en su nivel más externo.
```

### 3 — Mecanismos de estabilidad

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["estabilidad", "electrones"]

respuesta: "ceder, ganar o compartir electrones"
tipo: mc
opciones_explicitas: ["ceder, ganar o compartir electrones", "crear o destruir electrones", "cambiar de protones", "fusionar núcleos"]

enunciado: "Para lograr estabilidad, un átomo puede:"

explicacion: |
  Los átomos interactúan transfiriendo (cediendo/ganando) o compartiendo electrones de valencia para alcanzar estabilidad electrónica.
```

### 4 — Reactividad y gases nobles

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["gases_nobles", "reactividad"]

respuesta: falso
tipo: vf

enunciado: "Un átomo con la capa de valencia ya completa (como un gas noble) tiende a formar muchos enlaces."

explicacion: |
  Los átomos con la capa de valencia completa son muy estables y de baja reactividad: tienden a NO formar enlaces.
```

### 5 — Comportamiento de los electrones según el tipo de enlace

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace", "electrones"]

variables:
  escenario: uno_de([["ionico", "se transfieren completamente de un atomo a otro"], ["covalente polar", "se comparten de forma desigual"], ["covalente no polar", "se comparten de forma igual"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["se transfieren completamente de un atomo a otro", "se comparten de forma desigual", "se comparten de forma igual"]

enunciado: "En un enlace de tipo {escenario[0]}, ¿qué sucede con los electrones?"

explicacion: |
  El tipo de enlace determina cómo se distribuyen los electrones de valencia entre los núcleos.
```

### 6 — Naturaleza del enlace iónico

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_ionico", "metal", "no_metal"]

respuesta: verdadero
tipo: vf

enunciado: "En un enlace iónico, un metal cede electrones y un no metal los gana."

explicacion: |
  Correcto. La transferencia de electrones desde el átomo de baja electronegatividad (metal) hacia el de alta (no metal) genera iones con cargas opuestas que se atraen.
```

### 7 — Diferencia de electronegatividad

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "enlace_ionico"]

respuesta: "ionico"
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "Un enlace entre dos átomos con una gran diferencia de electronegatividad es predominantemente:"

explicacion: |
  Una diferencia de electronegatividad alta (generalmente > 1,7) indica que un átomo tiene tanta fuerza sobre los electrones que se los arranca al otro: enlace iónico.
```

### 8 — El modelo del mar de electrones

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico", "mar_de_electrones"]

respuesta: "mar"
tipo: completar
respuestas_validas:
  - "mar"

enunciado: "En el enlace metálico, los electrones de valencia se deslocalizan formando un ___ de electrones."

explicacion: |
  Los electrones de valencia de los metales no están ligados a un átomo específico: forman un "mar" que rodea a todos los núcleos positivos.
```

### 9 — Relación electronegatividad e ionicidad

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "caracter_ionico"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más grande es la diferencia de electronegatividad entre dos átomos, más iónico es el enlace."

explicacion: |
  La diferencia de electronegatividad es el indicador del carácter iónico: a mayor diferencia, mayor transferencia de carga.
```

### 10 — Polaridad de carga en enlaces covalentes

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "enlace_covalente"]

respuesta: "negativa (delta menos)"
tipo: mc
opciones_explicitas: ["negativa (delta menos)", "positiva (delta mas)", "neutra"]

enunciado: "En un enlace covalente polar, el átomo más electronegativo atrae con más fuerza el par de electrones compartidos, quedando con carga parcial ___."

explicacion: |
  El átomo más electronegativo tiene mayor afinidad por los electrones, así que la densidad electrónica se desplaza hacia él: carga parcial negativa (δ−).
```

### 11 — Enlaces entre átomos idénticos

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_no_polar", "simetria"]

respuesta: verdadero
tipo: vf

enunciado: "Un enlace entre dos átomos idénticos (por ejemplo, H-H) es siempre covalente no polar porque la diferencia de electronegatividad es cero."

explicacion: |
  Al ser átomos del mismo elemento, ambos atraen los electrones con la misma fuerza, así que el par se comparte parejo.
```

### 12 — Polaridad molecular vs. enlace

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["geometria_molecular", "momento_dipolar"]

respuesta: falso
tipo: vf

enunciado: "Una molécula que tiene enlaces polares es siempre una molécula polar en su conjunto."

explicacion: |
  No necesariamente. Depende de la geometría molecular: si los momentos dipolares de los enlaces se cancelan por simetría (como en el CO₂), la molécula es apolar.
```

### 13 — Carga en el átomo menos electronegativo

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "carga_parcial"]

respuesta: "positiva (delta mas)"
tipo: completar
respuestas_validas:
  - "positiva (delta mas)"
  - "positiva (delta más)"

enunciado: "En un enlace covalente polar, el átomo menos electronegativo queda con carga parcial ___."

explicacion: |
  Al tener menos electronegatividad, ese átomo retiene con menos fuerza los electrones compartidos: carga parcial positiva (δ+).
```

### 14 — Determinación del tipo de enlace

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "enlace_ionico", "enlace_covalente"]

respuesta: "la diferencia de electronegatividad entre los átomos"
tipo: mc
opciones_explicitas: ["la diferencia de electronegatividad entre los átomos", "el tamaño de los átomos", "la cantidad de neutrones", "el color del elemento"]

enunciado: "¿Qué factor determina si un enlace es iónico, covalente polar o covalente no polar?"

explicacion: |
  La diferencia de electronegatividad (ΔEN) indica cómo se comparten los electrones: alta → iónico, intermedia → covalente polar, baja o nula → covalente no polar.
```

### 15 — Tipo de enlace de una sustancia

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["enlace", "sustancias"]

variables:
  escenario: uno_de([["NaCl", "ionico"], ["H2O", "covalente polar"], ["O2", "covalente no polar"], ["Cu (cobre metálico)", "metalico"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "¿Cuál es el tipo de enlace predominante en {escenario[0]}?"

explicacion: |
  {escenario[0]} tiene un enlace de tipo {escenario[1]}.
```

### 16 — Naturaleza del enlace metálico

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace metálico ocurre entre dos átomos metálicos."

explicacion: |
  Verdadero. En los metales, los átomos forman una red donde los electrones de valencia se deslocalizan en un "mar de electrones" que los mantiene unidos.
```

### 17 — Mecanismo del enlace covalente

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_covalente", "enlace_ionico"]

respuesta: falso
tipo: vf

enunciado: "En un enlace covalente, los electrones se transfieren completamente de un átomo a otro."

explicacion: |
  Falso. En el enlace covalente los electrones se comparten. La transferencia completa es la característica del enlace iónico.
```

### 18 — Diferencia de electronegatividad y tipo de enlace (metal-no metal)

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "enlace_ionico"]

respuesta: "ionico"
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "¿Qué tipo de enlace se da típicamente entre un metal y un no metal con gran diferencia de electronegatividad?"

explicacion: |
  Cuando la diferencia de electronegatividad es muy alta, el átomo más electronegativo le arranca el electrón al otro: enlace iónico.
```

### 19 — Estados de agregación y enlace metálico

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace metálico explica por qué los metales son buenos conductores eléctricos: los electrones del \"mar\" se mueven con libertad."

explicacion: |
  Correcto. Como los electrones de valencia no están fijos a un átomo particular, se desplazan con facilidad cuando se aplica un campo eléctrico — de ahí la buena conductividad de los metales.
```

### 20 — Ejemplo de enlace covalente no polar

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["covalente_no_polar", "ejemplos"]

respuesta: "O2 (oxígeno diatómico)"
tipo: mc
opciones_explicitas: ["O2 (oxígeno diatómico)", "NaCl (cloruro de sodio)", "HCl (ácido clorhídrico)", "MgO (óxido de magnesio)"]

enunciado: "¿Cuál de las siguientes sustancias tiene un enlace covalente NO polar?"

explicacion: |
  O₂ es un enlace entre dos átomos idénticos (misma electronegatividad, diferencia cero): covalente no polar. Los otros tres tienen electronegatividades distintas entre sus átomos.
```
