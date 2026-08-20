### 1 — El fin del absolutismo
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["absolutismo", "soberania"]

respuesta: "soberanía_nacional"
tipo: completar
respuestas_validas: ["soberanía_nacional"]

enunciado: "Con el ascenso de las revoluciones burguesas, el principio de la ___ desplazó al concepto de la soberanía de derecho divino del monarca."

explicacion: |
  Las revoluciones burguesas (como la Revolución Francesa) trasladaron el origen del poder del monarca a la nación o al pueblo, estableciendo la soberanía nacional como base del Estado moderno.
```

### 2 — Transición de estamentos a ciudadanos
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["ciudadania", "estamentos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["El sistema de estamentos", "La sociedad de ciudadanos"],
    ["El absolutismo monárquico", "El constitucionalismo liberal"]
  ]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["escenario[0][1]", "escenario[1][1]"]

enunciado: "La burguesía buscaba reemplazar ___ por ___."

explicacion: |
  El paso fundamental fue la transición de una sociedad dividida por privilegios de nacimiento (estamentos) a una sociedad de individuos con derechos iguales ante la ley (ciudadanía).
```

### 3 — Elementos del Estado Liberal
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["constitucion", "derechos"]

respuesta: ["Constitución", "División de poderes", "Derechos individuales"]
tipo: ordenar
opciones_explicitas: ["Constitución", "División de poderes", "Derechos individuales"]

enunciado: "Ordena los pilares del Estado Liberal que surgieron para limitar el poder absoluto:"

explicacion: |
  El orden lógico y funcional del Estado Liberal implica primero una norma suprema (Constitución), la fragmentación del poder para evitar la tiranía (División de poderes) y la protección de las libertades (Derechos individuales).
```

### 4 — El rol de la propiedad privada
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["economia", "propiedad"]

variables:
  valor_propiedad: 1
  es_derecho_fundamental: valor_propiedad == 1

respuesta: verdadero
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "En el marco de las revoluciones burguesas, la propiedad privada se consolidó como un derecho natural e inviolable, oponiéndose a las trabas feudales."

explicacion: |
  La protección de la propiedad privada fue un motor clave de la burguesía para eliminar los derechos señoriales y los impuestos arbitrarios de la nobleza.
```

### 5 — Impacto en la representación política
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["parlamento", "representacion"]

variables:
  tipo_sufragio: uno_de(["universal", "censitario"])
  tipo_texto: ["universal", "censitario"]

respuesta: tipo_texto[tipo_sufragio]
tipo: mc
opciones_explicitas: ["universal", "censitario"]

enunciado: "Aunque las revoluciones burguesas promovieron la representación, en la práctica inicial, la mayoría de los regímenes liberales aplicaron un sufragio ___ (basado en la renta o propiedad)."

explicacion: |
  Si bien el ideal era la igualdad, el liberalismo clásico fue inicialmente 'censitario', limitando el derecho al voto a aquellos con propiedades o ingresos suficientes, excluyendo a las masas trabajadoras.
```