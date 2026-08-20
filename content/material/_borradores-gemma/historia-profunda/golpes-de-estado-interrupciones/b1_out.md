### 1 — Definición de Golpe de Estado
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["La toma del poder mediante procesos electorales y respeto a la constitución.", "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas.", "Un cambio de gobierno derivado de una crisis económica sin violencia.", "La renuncia voluntaria de un presidente por motivos de salud."]

enunciado: "Un golpe de Estado se define fundamentalmente como:"

explicacion: |
  Un golpe de Estado es una ruptura del orden constitucional donde se toma el poder de forma ilegítima, interrumpiendo el mandato de las autoridades electas.
```

### 2 — Elementos de un Golpe de Estado
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["caracteristicas", "instituciones"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El uso de la fuerza militar para deponer al ejecutivo.", "La ocupación de edificios gubernamentales y la suspensión de la Constitución."],
    ["La movilización social masiva para exigir nuevas elecciones.", "La renuncia del gabinete ministerial ante una crisis parlamentaria."]
  ]

tipo: mc
opciones_explicitas: ["Uso de mecanismos legales para cambiar al presidente.", "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal.", "Un proceso de transición democrática supervisado."]

enunciado: "En un escenario de {"escenarios[escenario_idx][0]}, el elemento central que caracteriza al golpe es:"

explicacion: |
  La característica distintiva es la ruptura del marco legal preestablecido y el uso de medios no previstos por la norma constitucional.
```

### 3 — Secuencia de una Interrupción Institucional
```
metadata:
  materia: "historia_profucha"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]

enunciado: "Ordene cronológicamente los pasos típicos de una interrupción institucional clásica:"

explicacion: |
  Un golpe suele comenzar con una crisis que debilita al gobierno, seguido de la acción directa que rompe el orden legal y culmina con la instauración de un régimen no electo.
```

### 4 — Consecuencias de la Ruptura Constitucional
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["consecuencias", "derecho"]

tipo: completar
respuestas_validas: ["inconstitucional", "ilegitima"]

enunciado: "Un golpe de Estado es un acto ___ que rompe con la legitimidad ___ del mandato popular."

explicacion: |
  Al ignorar las reglas establecidas en la Carta Magna, la acción es inconstitucional y carece de legitimidad democrática.
```

### 5 — Diferencia entre Golpe y Cambio de Gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas.", "Ambos son procesos de la misma naturaleza pero con distinta duración.", "El golpe siempre es pacífico y el cambio de gobierno es violento.", "No existe diferencia técnica entre ambos conceptos."]

enunciado: "¿Cuál es la diferencia fundamental entre un cambio de gobierno democrático y un golpe de Estado?"

explicacion: |
  La diferencia radica en el respeto a la legalidad: el primero ocurre dentro del marco de la ley, el segundo lo destruye.
```