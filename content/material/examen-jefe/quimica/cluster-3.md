# Examen jefe — Maestro del Equilibrio y Gibbs

> Logro #143. Demuestra dominio total sobre la energía libre, polaridad de enlaces y los distintos tipos de equilibrio químico. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **104 preguntas totales** en 5/5 secciones.

---

## Sección: energia-libre-gibbs (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

respuesta: "entropia"
tipo: completar
respuestas_validas: ["entropía", "entropia"]

enunciado: "La medida del desorden o dispersión de energía de un sistema se llama ___."

explicacion: |
  La entropía (S) mide el grado de desorden de un sistema.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "soluciones"]

respuesta: verdadero
tipo: vf

enunciado: "Si un sólido se disuelve en un líquido, la entropía del sistema aumenta."

explicacion: |
  Al disolverse, las partículas pasan de una estructura cristalina ordenada a una distribución más desordenada: aumenta la entropía.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "segunda_ley"]

respuesta: falso
tipo: vf

enunciado: "El universo en conjunto tiende siempre a DISMINUIR su entropía."

explicacion: |
  Falso. Según la segunda ley de la termodinámica, la entropía total del universo siempre tiende a AUMENTAR.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entropia", "espontaneidad"]

respuesta: falso
tipo: vf

enunciado: "Cada reacción individual está obligada a aumentar su propia entropía."

explicacion: |
  Falso. Una reacción puede disminuir su propia entropía (ej.: la formación de hielo) siempre que el entorno compense con un aumento mayor, de modo que la entropía TOTAL del universo aumente.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "calculo"]

variables:
  datos: [[-40, 100, 0.1], [-20, 200, 0.2], [20, 300, 0.1], [40, 100, 0.2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][0] - datos[idx][1] * datos[idx][2]
tipo: input
tolerancia_abs: 0.5

enunciado: "Calculá ΔG para una reacción con ΔH = {datos[idx][0]} kJ/mol, T = {datos[idx][1]} K y ΔS = {datos[idx][2]} kJ/(K·mol)."

pasos:
  - "ΔG = ΔH - T × ΔS"

explicacion: |
  ΔG = {datos[idx][0]} - ({datos[idx][1]} × {datos[idx][2]}).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "espontanea"
tipo: mc
opciones_explicitas: ["espontanea", "no espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es negativo, la reacción es..."

explicacion: |
  ΔG < 0 indica que el proceso es termodinámicamente espontáneo.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "no espontanea"
tipo: mc
opciones_explicitas: ["no espontanea", "espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es positivo, la reacción es..."

explicacion: |
  ΔG > 0 indica que la reacción directa no es espontánea (la inversa sí lo sería).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si ΔG es igual a 0, el sistema está en equilibrio."

explicacion: |
  Cuando ΔG = 0, no hay tendencia neta hacia reactivos ni hacia productos: equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH negativo (libera calor) y ΔS positivo (más desorden), es espontánea a cualquier temperatura."

explicacion: |
  ΔG = ΔH - TΔS: con ΔH negativo y -TΔS también negativo (porque ΔS>0), la suma siempre da ΔG < 0, sin importar T.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH positivo (absorbe calor) y ΔS negativo (más orden), nunca es espontánea."

explicacion: |
  ΔH positivo y -TΔS también positivo (porque ΔS<0): la suma siempre da ΔG > 0, para cualquier temperatura.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas bajas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH < 0 y ΔS < 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es positivo (compite contra el ΔH negativo). A temperaturas bajas ese término pesa poco y gana el ΔH negativo: ΔG < 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas altas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH > 0 y ΔS > 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es negativo y crece con la temperatura. A temperaturas altas ese término supera al ΔH positivo: ΔG < 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más negativo es el ΔG° estándar, mayor es la constante de equilibrio Kc de esa reacción."

explicacion: |
  ΔG° = -RT×ln(Kc): un ΔG° muy negativo implica un ln(Kc) grande y positivo, entonces Kc es grande.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["equilibrio", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "En el equilibrio químico, ΔG es igual a 0."

explicacion: |
  En el equilibrio no hay tendencia espontánea al cambio en ninguna dirección: ΔG = 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica"]

respuesta: "S"
tipo: completar
respuestas_validas: ["S", "entropia"]

enunciado: "La ecuación de Gibbs es ΔG = ΔH - T × Δ___."

explicacion: |
  ΔG = ΔH - T×ΔS, donde ΔS es el cambio de entropía del sistema.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "La temperatura T en la ecuación de Gibbs debe expresarse en Kelvin."

explicacion: |
  Igual que en las otras fórmulas termodinámicas de este tronco, T siempre va en la escala absoluta.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["comparacion", "espontaneidad"]

respuesta: "la reacción con ΔG = -50 kJ/mol"
tipo: mc
opciones_explicitas: ["la reacción con ΔG = -50 kJ/mol", "la reacción con ΔG = +10 kJ/mol", "ambas son igual de espontáneas", "ninguna es espontánea"]

enunciado: "Entre dos reacciones, una con ΔG = -50 kJ/mol y otra con ΔG = +10 kJ/mol, ¿cuál es espontánea?"

explicacion: |
  Sólo la que tiene ΔG negativo (-50 kJ/mol) es espontánea. La de +10 kJ/mol necesita energía externa para ocurrir.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una reacción exotérmica (ΔH negativo) siempre es espontánea, sin importar el valor de ΔS."

explicacion: |
  Falso. Si ΔS también es negativo, a temperaturas muy altas el término -TΔS puede volverse más positivo que lo que ΔH aporta de negativo, haciendo ΔG > 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "reversibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción directa tiene ΔG > 0 (no espontánea), la reacción inversa tiene ΔG < 0 (sí es espontánea)."

explicacion: |
  Verdadero. El ΔG de la reacción inversa es el opuesto exacto del de la reacción directa (mismo valor absoluto, signo contrario).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "Una reacción espontánea (ΔG < 0) siempre ocurre rápido, en la práctica."

explicacion: |
  Falso. Espontaneidad (termodinámica) y velocidad (cinética) son cosas distintas — ver ../cinetica-reaccion/. La oxidación del hierro es espontánea pero muy lenta.
```

## Sección: enlace-quimico-polaridad (20 preguntas)

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

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["regla_del_octeto"]

respuesta: "octeto"
tipo: completar
respuestas_validas: ["octeto"]

enunciado: "La regla que dice que los átomos buscan 8 electrones de valencia se llama regla del ___."

explicacion: |
  La regla del octeto establece que los átomos tienden a ganar, perder o compartir electrones para completar ocho en su nivel más externo.
```

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

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico", "mar_de_electrones"]

respuesta: "mar"
tipo: completar
respuestas_validas: ["mar"]

enunciado: "En el enlace metálico, los electrones de valencia se deslocalizan formando un ___ de electrones."

explicacion: |
  Los electrones de valencia de los metales no están ligados a un átomo específico: forman un "mar" que rodea a todos los núcleos positivos.
```

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

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "carga_parcial"]

respuesta: "positiva (delta mas)"
tipo: completar
respuestas_validas: ["positiva (delta mas)", "positiva (delta más)"]

enunciado: "En un enlace covalente polar, el átomo menos electronegativo queda con carga parcial ___."

explicacion: |
  Al tener menos electronegatividad, ese átomo retiene con menos fuerza los electrones compartidos: carga parcial positiva (δ+).
```

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

## Sección: equilibrio-quimico-kc (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "En el equilibrio químico, la reacción se detiene por completo y no hay movimiento de partículas."

explicacion: |
  Falso. El equilibrio es dinámico: las reacciones directa e inversa siguen ocurriendo, pero a la misma velocidad, así que las concentraciones no cambian.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "El equilibrio se alcanza cuando la velocidad de la reacción directa se iguala a la velocidad de la reacción inversa."

explicacion: |
  Verdadero. Esa igualdad de velocidades es la condición para que las concentraciones dejen de variar.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "dinamico"
tipo: completar
respuestas_validas: ["dinamico"]

enunciado: "Por eso el equilibrio químico se llama equilibrio ___."

explicacion: |
  Se llama dinámico porque, aunque las concentraciones no cambian, las reacciones directa e inversa siguen sucediendo constantemente.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "En el estado de equilibrio, las concentraciones de reactivos y productos dejan de cambiar con el tiempo."

explicacion: |
  Verdadero. Al ser iguales las velocidades directa e inversa, la cantidad neta de cada especie se mantiene constante.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["equilibrio", "calculo"]

variables:
  a: uno_de([1, 2, 4])
  b: uno_de([1, 2])
  c: uno_de([2, 4, 8])

respuesta: c / (a * b)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para la reacción A + B ⇌ C en equilibrio, con [A] = {a} M, [B] = {b} M y [C] = {c} M, calculá la constante de equilibrio Kc."

pasos:
  - "Kc = [C] / ([A] × [B])"

explicacion: |
  Kc = {c} / ({a} × {b}).
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "ley_accion_masas"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Kc, los exponentes de cada concentración molar corresponden a los coeficientes de la ecuación balanceada."

explicacion: |
  Correcto. Para aA + bB ⇌ cC + dD, Kc = [C]^c × [D]^d / ([A]^a × [B]^b).
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "fases"]

respuesta: falso
tipo: vf

enunciado: "En la expresión de Kc, los sólidos puros y los líquidos puros se incluyen usando su concentración molar como un término más."

explicacion: |
  Falso. Su "concentración" es constante (se considera 1), así que se omiten de la expresión de Kc.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "equilibrio"
tipo: completar
respuestas_validas: ["equilibrio"]

enunciado: "En la expresión de Kc, la notación [X] representa la concentración de X en el ___ (no la inicial)."

explicacion: |
  Kc se calcula con las concentraciones en el momento en que el sistema ya alcanzó el equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "constante_equilibrio"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "cantidades iguales", "ninguno"]

enunciado: "Si Kc es mucho mayor que 1, en el equilibrio predominan..."

explicacion: |
  Un Kc muy grande indica que la relación productos/reactivos es alta: la reacción se desplazó casi hasta el final.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "constante_equilibrio"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "cantidades iguales", "ninguno"]

enunciado: "Si Kc es mucho menor que 1, en el equilibrio predominan..."

explicacion: |
  Un Kc muy chico indica que la concentración de reactivos es mucho mayor que la de productos: la reacción casi no avanzó.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["temperatura", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Kc depende exclusivamente de la temperatura y no cambia si se aumenta la concentración de un reactivo en un sistema ya en equilibrio."

explicacion: |
  Correcto. Cambiar concentraciones desplaza el equilibrio (Le Chatelier), pero mientras la temperatura no varíe, Kc se mantiene igual.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["concentracion", "le_chatelier"]

respuesta: falso
tipo: vf

enunciado: "Si se agrega más reactivo a un sistema en equilibrio, el valor de Kc cambia para compensar el exceso de sustancia."

explicacion: |
  Falso. Al agregar reactivo, cambian las concentraciones (el sistema se reacomoda), pero el cociente vuelve a dar el mismo Kc si la temperatura no cambió.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["le_chatelier", "equilibrio"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los productos", "los reactivos", "no se mueve", "se detiene"]

enunciado: "Si se agrega más reactivo a un sistema en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  Según Le Chatelier, el sistema consume el exceso desplazándose hacia la formación de productos.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "termoquimica"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "no se mueve", "se detiene"]

enunciado: "Si se aumenta la temperatura en una reacción EXOTÉRMICA en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  En una exotérmica, el calor "funciona" como un producto más. Al subir la temperatura, el sistema se desplaza hacia los reactivos (el lado que absorbe ese calor extra).
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "presion"]

respuesta: "menos moles de gas"
tipo: mc
opciones_explicitas: ["menos moles de gas", "más moles de gas", "igual cantidad de moles", "no se mueve"]

enunciado: "Si se aumenta la presión en un sistema gaseoso en equilibrio, el equilibrio se desplaza hacia el lado con..."

explicacion: |
  Aumentar la presión favorece el lado con menos moles de gas, para achicar el volumen que ocupan.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["le_chatelier", "concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Quitar producto de un sistema en equilibrio desplaza el equilibrio hacia los productos, para reponer lo que se quitó."

explicacion: |
  Verdadero. Al bajar la concentración de un producto, el sistema se desplaza hacia la derecha para compensar esa pérdida.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["conceptos", "balanceo"]

respuesta: verdadero
tipo: vf

enunciado: "Para escribir la expresión de Kc de una reacción, primero hay que tener la ecuación química balanceada."

explicacion: |
  Correcto. Los coeficientes balanceados son los exponentes que van en la expresión de Kc.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "concentracion"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "no se mueve", "se detiene"]

enunciado: "Si se quita reactivo de un sistema en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  El sistema se desplaza hacia los reactivos (favoreciendo la reacción inversa) para reponer parte de lo que se quitó.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["interpretacion", "kc"]

respuesta: verdadero
tipo: vf

enunciado: "Si Kc es aproximadamente 1, hay cantidades comparables de reactivos y productos en el equilibrio."

explicacion: |
  Verdadero. Un Kc cercano a 1 indica que ni los reactivos ni los productos predominan claramente.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "avanzado"
  tags: ["le_chatelier", "termoquimica"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los productos", "los reactivos", "no se mueve", "se detiene"]

enunciado: "Si se aumenta la temperatura en una reacción ENDOTÉRMICA en equilibrio, ¿hacia dónde se desplaza el equilibrio?"

explicacion: |
  En una endotérmica, el calor "funciona" como reactivo. Subir la temperatura favorece que se consuma ese calor extra, desplazando el equilibrio hacia los productos — al revés que en una exotérmica.
```

## Sección: equilibrio-solubilidad-ksp (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["equilibrio", "ksp", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Ksp es un caso particular de Kc, aplicado al equilibrio de una sal disolviéndose en un solvente."

explicacion: |
  Correcto. Ksp es la constante de equilibrio de la reacción de disolución de un sólido poco soluble.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "solubilidad"
tipo: completar
respuestas_validas: ["solubilidad"]

enunciado: "Ksp significa producto de ___."

explicacion: |
  Ksp es el producto de las concentraciones molares de los iones en solución, elevadas a sus coeficientes.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["calculo", "estequiometria"]

variables:
  a: uno_de([1, 2, 3, 4])
  b: uno_de([1, 2, 3])

respuesta: a * b
tipo: input
tolerancia_abs: 0.01

enunciado: "Para AB ⇌ A+ + B-, Ksp = [A+] × [B-]. Si [A+] = {a} M y [B-] = {b} M, ¿cuál es el valor de Ksp?"

explicacion: |
  Ksp = {a} × {b}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["reglas_ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, el sólido puro (AB) no se incluye, porque su actividad es constante (se toma como 1)."

explicacion: |
  Correcto, igual que en Kc: los sólidos puros no aparecen explícitamente en la expresión de la constante.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "[A2+]*[B-]^2"
tipo: mc
opciones_explicitas: ["[A2+]*[B-]^2", "[A2+]*[B-]", "[A2+]^2*[B-]", "[A2+]+2[B-]"]

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), la expresión correcta de Ksp es..."

explicacion: |
  Cada concentración se eleva a su coeficiente: 1 para A2+ y 2 para B-, entonces Ksp = [A2+]×[B-]².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "calculo"]

variables:
  a2: uno_de([1, 2, 3, 4])
  b: uno_de([2, 3, 4, 5])

respuesta: a2 * (b ^ 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), con [A2+] = {a2} M y [B-] = {b} M en el equilibrio, calculá Ksp."

pasos:
  - "Ksp = [A2+] × [B-]²"

explicacion: |
  Ksp = {a2} × ({b}²).
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["teoria", "ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, cada concentración iónica se eleva a la potencia de su coeficiente en la ecuación balanceada."

explicacion: |
  Verdadero, mismo patrón que Kc: exponente = coeficiente estequiométrico.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  s: uno_de([2, 3, 4, 5])

respuesta: s * s
tipo: input
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s², con s la solubilidad molar. Si s = {s} mol/L, ¿cuál es Ksp?"

pasos:
  - "AB ⇌ A+ + B-, entonces [A+]=[B-]=s"
  - "Ksp = s × s = s²"

explicacion: |
  Ksp = {s} × {s}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  ksp: uno_de([4, 9, 16, 25])

respuesta: sqrt(ksp)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s². Si Ksp = {ksp}, ¿cuál es la solubilidad molar s?"

pasos:
  - "s = raíz cuadrada de Ksp"

explicacion: |
  s = √{ksp}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["estequiometria", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Para una sal AB2 que se disocia en A2+ + 2B-, si se disuelven s moles de la sal, la concentración de B- es el doble que la de A2+."

explicacion: |
  Verdadero. Por cada mol de AB2 disuelto se forma 1 mol de A2+ pero 2 moles de B-.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "2"
tipo: completar
respuestas_validas: ["2"]

enunciado: "Para una sal AB (1:1), la fórmula que relaciona Ksp con la solubilidad molar s es Ksp = s elevado a la ___."

explicacion: |
  Como la disociación produce dos iones (uno de cada tipo), Ksp = s × s = s².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor de Ksp muy pequeño, como 10⁻¹⁰, indica que la sal es muy poco soluble en agua."

explicacion: |
  Correcto. Cuanto menor el Ksp, menos iones se disuelven antes de saturar la solución.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "saturacion"]

respuesta: "la solución no está saturada, no precipita"
tipo: mc
opciones_explicitas: ["la solución no está saturada, no precipita", "la solución está sobresaturada y precipita", "la solución está exactamente en equilibrio", "no se puede saber"]

enunciado: "Si el producto iónico Q es MENOR que Ksp, la solución..."

explicacion: |
  Q < Ksp significa que hay menos iones disueltos de los que el equilibrio permite: la solución no está saturada.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "precipitacion"]

respuesta: "la solución está sobresaturada, el exceso precipita"
tipo: mc
opciones_explicitas: ["la solución está sobresaturada, el exceso precipita", "la solución está saturada", "la solución no está saturada", "la solución está exactamente en equilibrio"]

enunciado: "Si el producto iónico Q es MAYOR que Ksp, la solución..."

explicacion: |
  Q > Ksp significa que hay más iones de los que el equilibrio permite: el exceso precipita hasta que Q vuelva a igualar Ksp.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto iónico Q es igual a Ksp, la solución está exactamente saturada, en equilibrio."

explicacion: |
  Correcto. Q = Ksp es la definición misma del punto de saturación.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Agregar más sólido sin disolver a una solución ya saturada aumenta el valor de Ksp."

explicacion: |
  Falso. Ksp depende sólo de la temperatura, no de cuánto sólido en exceso haya en el fondo del recipiente.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["comparacion", "ksp"]

respuesta: "la sal con Ksp = 1x10^-3"
tipo: mc
opciones_explicitas: ["la sal con Ksp = 1x10^-3", "la sal con Ksp = 1x10^-12", "ambas son igual de solubles", "no se puede comparar sin más datos"]

enunciado: "Entre dos sales del mismo tipo (AB 1:1), una con Ksp = 1×10⁻³ y otra con Ksp = 1×10⁻¹², ¿cuál es más soluble?"

explicacion: |
  A mayor Ksp, mayor solubilidad (para sales del mismo tipo estequiométrico): 1×10⁻³ es mucho más grande que 1×10⁻¹².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["ion_comun", "le_chatelier"]

respuesta: verdadero
tipo: vf

enunciado: "Si a una solución saturada de AB se le agrega más B- (de otra fuente, ej. otra sal soluble con el mismo anión), la solubilidad de AB disminuye."

explicacion: |
  Verdadero (efecto del ion común). Por Le Chatelier, agregar más B- desplaza el equilibrio AB ⇌ A+ + B- hacia la izquierda, precipitando más AB sólido.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["aplicacion", "precipitacion"]

respuesta: "sí precipita, porque Q supera a Ksp"
tipo: mc
opciones_explicitas: ["sí precipita, porque Q supera a Ksp", "no precipita nunca, porque son soluciones diluidas", "sólo precipita si se calienta la mezcla", "depende únicamente del color de los iones"]

enunciado: "Al mezclar dos soluciones cuyos iones forman una sal poco soluble, ¿cuándo precipita esa sal?"

explicacion: |
  Precipita cuando el producto iónico Q de la mezcla resultante supera el Ksp de esa sal — el mismo criterio Q vs. Ksp de siempre.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Ksp siempre tiene las mismas unidades para cualquier tipo de sal, sin importar su estequiometría."

explicacion: |
  Falso. Las unidades de Ksp dependen de los exponentes (coeficientes) de la sal: no es lo mismo M² (sal 1:1) que M³ (sal tipo AB2), por ejemplo.
```

## Sección: estados-y-cambios (24 preguntas)

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["particulas", "estados"]

variables:
  descripcion: "Las partículas están muy separadas, se mueven al azar a alta velocidad y no presentan fuerzas de atracción significativas."

respuesta: "gas"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gas"]

enunciado: "Si las partículas presentan la siguiente descripción: {descripcion}, ¿a qué estado de la materia nos referimos?"

explicacion: |
  En el estado gaseoso, la energía cinética es tan alta que las fuerzas intermoleculares no logran mantener a las partículas unidas, permitiendo que ocupen todo el volumen disponible.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["propiedades", "volumen"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un líquido tiene volumen propio pero no tiene forma propia (se adapta al recipiente)?"

explicacion: |
  Correcto. Los líquidos tienen fuerzas de atracción suficientes para mantener un volumen constante, pero no para mantener una estructura rígida, lo que les permite fluir.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "ionizacion"]

respuesta: "gas ionizado"
tipo: mc
opciones_explicitas: ["gas ionizado", "sólido denso", "líquido viscoso"]

enunciado: "El plasma se define principalmente como un..."

explicacion: |
  El plasma es un gas que ha sido sometido a tanta energía que sus electrones se han separado de los núcleos, resultando en un medio de partículas cargadas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["energia", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría cinético-molecular, si la temperatura de un sistema aumenta, la energía cinética promedio de sus partículas también aumenta."

explicacion: |
  La temperatura es, por definición, una medida de la energía cinética promedio de las partículas de un cuerpo.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "completar"]

variables:
  pares: [["el hielo derritiéndose", "fusion"], ["el vapor de agua volviéndose líquido", "condensacion"], ["el agua hirviendo", "vaporizacion"]]
  idx: uno_de([0, 1, 2])

respuesta: pares[idx][1]
tipo: completar
respuestas_validas: [pares[idx][1]]

enunciado: "Identifica el cambio de estado que ocurre cuando: {pares[idx][0]}."

explicacion: |
  El proceso descrito corresponde a la {pares[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion_inversa", "mc"]

respuesta: "Sublimación inversa"
tipo: mc
opciones_explicitas: ["Fusión", "Sublimación inversa", "Condensación", "Sublimación"]

enunciado: "¿Cómo se denomina al paso directo del estado gaseoso al estado sólido sin pasar por el líquido?"

explicacion: |
  El paso de gas a sólido se llama sublimación inversa (o deposición).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["completar", "estados"]

variables:
  pares: [["fusión", "sólido a líquido"], ["vaporización", "líquido a gas"], ["condensación", "gas a líquido"], ["sublimación", "sólido a gas"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: pares[idx][0]
tipo: completar
respuestas_validas: [pares[idx][0]]

enunciado: "¿Cómo se llama el cambio de estado descrito como: {pares[idx][1]}?"

explicacion: |
  El cambio de {pares[idx][1]} es la {pares[idx][0]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "¿En el proceso de sublimación, la sustancia pasa directamente de sólido a gas sin pasar por el estado líquido?"

explicacion: |
  Es verdadero. La sublimación es un cambio de estado directo que evita la fase líquida.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor", "temperatura", "cambio_de_estado"]

respuesta: verdadero
tipo: vf

enunciado: "Durante un cambio de estado, ¿la temperatura se mantiene constante mientras se sigue entregando calor?"

explicacion: |
  En un cambio de fase, la energía térmica se utiliza para romper las fuerzas de atracción intermoleculares en lugar de aumentar la energía cinética (temperatura).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor_latente", "calor_sensible"]

respuesta: "Hielo derritiéndose en un vaso"
tipo: mc
opciones_explicitas: ["Calentar agua de 20°C a 50°C", "Hielo derritiéndose en un vaso", "Calentar un metal"]

enunciado: "Identifica la situación que representa un proceso de calor LATENTE:"

explicacion: |
  El calor latente ocurre durante el cambio de fase (fusión del hielo), donde la temperatura no varía a pesar de la transferencia de energía.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "ebullicion"]

variables:
  valor: 100

respuesta: valor
tipo: completar
respuestas_validas: [valor]

enunciado: "El agua hirviendo a presión atmosférica normal no supera los {valor} grados Celsius."

explicacion: |
  A presión atmosférica estándar (1 atm), el agua alcanza su punto de ebullición a los 100°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["fusion", "endotermico"]

respuesta: "endotermico"
tipo: mc
opciones_explicitas: ["endotermico", "exotermico"]

enunciado: "¿Cómo se clasifica el proceso de fusión (paso de sólido a líquido) según el flujo de calor?"

explicacion: |
  La fusión es un proceso endotérmico porque el sistema debe absorber calor del entorno para romper las estructuras sólidas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "cotidiano"]

variables:
  ejemplos: [["hielo seco humeando", "sublimacion"], ["escarcha en el pasto", "sublimacion inversa"], ["vapor en el espejo del baño", "condensacion"], ["ropa que se seca al sol", "vaporizacion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: ejemplos[idx][1]
tipo: mc
opciones_explicitas: ["sublimacion", "sublimacion inversa", "condensacion", "vaporizacion"]

enunciado: "Si observamos el fenómeno de {ejemplos[idx][0]}, ¿qué proceso de cambio de estado está ocurriendo?"

explicacion: |
  El fenómeno descrito corresponde a la {ejemplos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["vaporizacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La evaporación y la ebullición son las dos formas de vaporización."

explicacion: |
  Es correcto. La evaporación es un proceso superficial y lento, mientras que la ebullición es un proceso en toda la masa del líquido con formación de burbujas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["termodinamica", "energia"]

variables:
  cambios: [["fusión", "endotérmico"], ["solidificación", "exotérmico"], ["vaporización", "endotérmico"], ["condensación", "exotérmico"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: cambios[idx][1]
tipo: completar
respuestas_validas: [cambios[idx][1]]

enunciado: "El proceso de {cambios[idx][0]} es un proceso ___ (absorbe o libera calor)."

explicacion: |
  Los procesos que absorben calor para cambiar de estado (como la fusión) son endotérmicos; los que lo liberan (como la condensación) son exotérmicos.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["cinetica", "teoria_cinetica"]

respuesta: "MAYOR"
tipo: mc
opciones_explicitas: ["MAYOR", "MENOR", "IGUAL"]

enunciado: "¿La energía cinética promedio de las partículas de un gas es MAYOR, MENOR o IGUAL que la de un sólido a la misma masa y temperatura?"

explicacion: |
  En un gas, las fuerzas de atracción intermolecular son mucho más débiles, lo que permite un movimiento desordenado y mayor energía cinética promedio que en un sólido.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cinetica", "estados_materia", "ordenar"]

variables:
  orden_correcto: ["Sólido", "Líquido", "Gas"]

respuesta: orden_correcto
tipo: ordenar
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR energía cinética de sus partículas."

explicacion: |
  En el sólido la energía es mínima (solo vibran), en el líquido es intermedia y en el gas es máxima debido a la alta velocidad de sus partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["solido", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "En un sólido, las partículas no se desplazan de su lugar, solo vibran en sus posiciones de equilibrio."

explicacion: |
  Correcto. Las fuerzas de atracción son lo suficientemente fuertes como para mantener a las partículas en posiciones fijas, permitiendo únicamente el movimiento vibratorio.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["forma", "volumen"]

respuesta: "Sólido"
tipo: mc
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "¿Qué estado de la materia posee forma propia Y volumen propio?"

explicacion: |
  Los sólidos tienen fuerzas intermoleculares fuertes que mantienen su forma y volumen constantes independientemente del recipiente.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["gas", "propiedades"]

respuesta: "gas"
tipo: completar
respuestas_validas: ["gas"]

enunciado: "El estado que no tiene forma propia NI volumen propio es el ___."

explicacion: |
  Los gases se expanden hasta ocupar todo el volumen del recipiente que los contiene y adoptan su forma, debido a la gran distancia entre sus partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_fusion: 0

respuesta: valor_fusion
tipo: input

enunciado: "Indica el punto de fusión del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de fusión del agua es 0°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_ebullicion: 100

respuesta: valor_ebullicion
tipo: input

enunciado: "Indica el punto de ebullición del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de ebullición del agua es 100°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "condensacion"]

respuesta: "El vapor se enfría y condensa al tocar la superficie fría"
tipo: mc
opciones_explicitas: ["El vapor se enfría y condensa al tocar la superficie fría", "El vapor se expande por el choque térmico", "La tapa absorbe el calor y evapora las gotas", "El vapor se sublima directamente"]

enunciado: "¿Por qué el vapor de una olla hirviendo se convierte en gotitas al tocar una tapa fría?"

explicacion: |
  Al entrar en contacto con una superficie fría, el vapor de agua pierde energía térmica, pasando de estado gaseoso a líquido (condensación).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "universo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el plasma el estado de la materia más común en el universo, superando la suma de sólidos, líquidos y gases?"

explicacion: |
  Debido a la enorme cantidad de estrellas y gas ionizado en el espacio, el plasma es el estado predominante en el cosmos.
```
