### 1 — El fin de un muro
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["berlin", "simbolo"]

tipo: mc
opciones_explicitas: ["La caída del Muro de Berlín", "La Revolución Rusa", "La Crisis de los Misiles", "La Guerra de Vietnam"]

enunciado: "El evento ocurrido en 1989 que simbolizó el fin de la división de Europa y el colapso del bloque socialista fue ___."

explicacion: |
  La caída del Muro de Berlín en noviembre de 1989 marcó el inicio del fin de la Guerra Fría, permitiendo la reunificación de Alemania y el colapso de los regímenes comunistas en Europa del Este.
```

### 2 — El fin de la Unión Soviética
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["urss", "geopolitica"]

variables:
  escenario: uno_de([["URSS", "1991"], ["Alemania", "1989"]])

tipo: completar
respuestas_validas: ["URSS", "1991"]

enunciado: "La disolución formal de la {escenario[0]} ocurrió en el año {escenario[1]}."

explicacion: |
  La desintegración de la Unión Soviética en 1991 puso fin a la existencia de la superpotencia que lideraba el bloque socialista, consolidando el orden mundial unipolar liderado por EE.UU.
```

### 3 — Causas del colapso
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["gorbachev", "reformas"]

tipo: mc
opciones_explicitas: ["Glasnost y Perestroika", "El Plan Marshall", "La Doctrina Monroe", "La Doctrina Truman"]

enunciado: "Las reformas políticas y económicas implementadas por Mijaíl Gorbachachev que aceleraron el fin de la URSS fueron la ___."

explicacion: |
  La Perestroika (reestructuración económica) y la Glasnost (apertura política) fueron los motores de cambio que, aunque buscaban modernizar el sistema, terminaron por desestabilizar el control centralizado de la URSS.
```

### 4 — Cronología del fin de la Guerra Fría
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

tipo: ordenar
opciones_explicitas: ["Caída del Muro de Berlín", "Disolución de la URSS", "Reunificación de Alemania", "Tratado de Malta"]

enunciado: "Ordena cronológicamente los siguientes eventos que marcaron el fin de la Guerra Fría:"

explicacion: |
  La secuencia comenzó con la caída del muro (1989), seguida de la reunificación alemana (1990), la firma de acuerdos de paz/fin de la era (Tratado de Malta, 1989/90) y culminó con la disolución total de la URSS (1991).
```

### 5 — El nuevo orden mundial
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: input
tolerancia_abs: 0

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```

*(Nota: Para la pregunta 5, la respuesta correcta es "unipolar". Como el sistema es de input y requiere una respuesta exacta, el usuario debe escribir "unipolar")*

**Corrección técnica para la pregunta 5 (ajuste de tipo para cumplir estrictamente):**

### 5 — El nuevo orden mundial
```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "tripolar", "multipolar"]

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```