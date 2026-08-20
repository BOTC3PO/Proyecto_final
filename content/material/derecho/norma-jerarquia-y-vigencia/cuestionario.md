# Derecho — Norma jerarquia y vigencia (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de norma jurídica

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["definicion", "norma"]

tipo: mc
opciones_explicitas: ["Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social.", "Un conjunto de opiniones personales sobre lo que es justo o injusto.", "Una sugerencia de comportamiento que no conlleva sanción legal.", "Un conjunto de costumbres que se repiten en el tiempo sin necesidad de aprobación estatal."]

enunciado: "Se define como norma jurídica a ___."

respuesta: "Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social."

explicacion: |
  La norma jurídica es un mandato dictado por un órgano competente que tiene como fin regular la conducta humana en sociedad, cuya observancia puede ser exigida mediante la aplicación de una sanción.
```

### 2 — La Pirámide de Kelsen

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["jerarquia", "kelsen"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la doctrina de la Pirámide de Kelsen:"

respuesta_orden: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

explicacion: |
  En un sistema jurídico jerarquizado, la Constitución es la norma suprema. Las leyes nacionales se encuentran por debajo de la Constitución, seguidas por los decretos y, finalmente, los reglamentos.
```

### 3 — Vigencia de la norma

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

variables:
  datos: [["publicación en el Boletín Oficial", "vigente"], ["omisión de publicación", "inexistente"]]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas:
  - "publicación en el Boletín Oficial"
  - "omisión de publicación"

enunciado: "Para que una norma sea obligatoria y tenga vigencia, es requisito indispensable su ___."

respuesta: datos[idx][0]

explicacion: |
  La vigencia de una norma comienza, por regla general, desde su publicación en el órgano oficial correspondiente (como el Boletín Oficial), permitiendo que sea conocida por todos los ciudadanos.
```

### 4 — Validez y jerarquía

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["validez", "jerarquia"]

tipo: vf

enunciado: "¿Puede un decreto del Poder Ejecutivo contradecir lo establecido en la Constitución Nacional sin perder su validez jurídica?"

respuesta: falso

explicacion: |
  No. Debido al principio de jerarquía normativa, ninguna norma de inferior rango (como un decreto) puede contradecir o vulnerar lo establecido por una norma de rango superior (la Constitución).
```

### 5 — El concepto de sanción

```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["sancion", "caracteristica"]

tipo: mc
opciones_explicitas: ["Coercibilidad", "Moralidad", "Costumbre", "Opinión"]

enunciado: "La característica que permite al Estado imponer una consecuencia jurídica ante el incumplimiento de una norma se denomina ___."

respuesta: "Coercibilidad"

explicacion: |
  La coercibilidad es la posibilidad legítima de aplicar la fuerza o la sanción por parte del Estado para asegurar el cumplimiento de la norma jurídica.
```

### 6 — Supremacía Constitucional

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "inconstitucional"], ["Un decreto presidencial contradice una ley vigente.", "ilegal"]]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["constitucional", "inconstitucional", "ilegal", "nulo"]

enunciado: "En el caso donde {escenarios[caso_idx][0]}, la norma de menor jerarquía es considerada ___."

explicacion: |
  Según el principio de supremacía constitucional, la Constitución es la norma de mayor jerarquía. Cualquier norma que la contradiga es inválida por ser inconstitucional.
```

### 7 — Vigencia de la Norma

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Una norma jurídica adquiere vigencia obligatoria desde el momento exacto de su sanción por el legislativo, incluso antes de su publicación en el Boletín Oficial?"

explicacion: |
  Falso. Para que una norma sea obligatoria, debe cumplir con el proceso de promulgación y su posterior publicación en el Boletín Oficial para que sea conocida por todos.
```

### 8 — Orden Jerárquico

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

variables:
  orden_lista: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]
tipo: ordenar

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

pasos:
  - "Identifique la norma de máxima autoridad (Constitución)."
  - "Ubique los tratados con jerarquía constitucional."
  - "Coloque las leyes nacionales por debajo de los tratados."
  - "Ubique los decretos del Poder Ejecutivo."
  - "Finalice con las normas de menor rango (reglamentos)."

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]

explicacion: |
  La jerarquía normativa sigue la estructura de la Pirámide de Kelsen, donde las normas superiores validan la validez de las inferiores.
```

### 9 — El Rol del Decreto

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["decreto", "poder_ejecutivo"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [["El Presidente dicta un decreto que busca regular una materia reservada exclusivamente a la ley.", "decreto"], ["El Presidente dicta un decreto para reglamentar una ley ya existente.", "decreto"]]

respuesta: "decreto"
tipo: completar
respuestas_validas:
  - "decreto"

enunciado: "Si el Poder Ejecutivo dicta una norma para reglamentar una ley, estamos ante un ___."

explicacion: |
  Los decretos reglamentarios tienen como función facilitar la aplicación de una ley, pero siempre deben estar subordinados a ella y no pueden modificar su espíritu.
```

### 10 — Aplicación de la Norma en el Tiempo

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["irretroactividad", "vigencia"]

tipo: mc
opciones_explicitas: ["retroactiva", "prospectiva", "inaplicable", "nula"]

respuesta: "retroactiva"

enunciado: "Si una ley establece sanciones para hechos ocurridos antes de su entrada en vigencia, se trata de una norma ___."

explicacion: |
  Por regla general, las leyes son prospectivas (rigen hacia el futuro). La aplicación retroactiva es excepcional y suele estar limitada por la Constitución (especialmente en materia penal).
```

### 11 — Jerarquía de normas

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: "mc"
opciones_explicitas: ["Constitución Nacional", "Ley Nacional", "Decreto del Poder Ejecutivo", "Resolución Ministerial"]

enunciado: "En el ordenamiento jurídico, la norma de mayor jerarquía, que sirve de base para todas las demás y no puede ser contradicha por ninguna ley o decreto, es la _______."

explicacion: |
  Según la Pirámide de Kelsen, la Constitución Nacional es la norma suprema. Ninguna norma de inferior jerarquía (como una ley o un decreto) puede vulnerar lo establecido en ella.
```

### 12 — Validez vs. Vigencia

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una norma jurídica entra en vigencia automáticamente desde el momento en que es redactada y firmada por la autoridad competente, sin necesidad de ser publicada."

explicacion: |
  Para que una norma sea obligatoria y tenga vigencia, debe ser publicada en el Boletín Oficial (o medio equivalente) para que sea del conocimiento público. La mera firma no garantiza la vigencia.
```

### 13 — Confusión entre Ley y Decreto

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto", "jerarquia"]

tipo: "mc"
opciones_explicitas: ["Ley", "Decreto", "Resolución"]

respuesta: "Ley"

enunciado: "Si un Decreto contradice lo establecido en una Ley, la norma de mayor jerarquía prevalece y el acto administrativo es inválido por jerarquía. ¿Cuál de las dos normas es la de mayor jerarquía?"

explicacion: |
  En la jerarquía normativa, la Ley (dictada por el Congreso) tiene un rango superior al Decreto (dictado por el Ejecutivo). Por lo tanto, un decreto no puede modificar ni contradecir una ley.
```

### 14 — Orden de prelación normativa

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
respuesta_orden: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas desde la de mayor jerarquía a la de menor jerarquía, considerando el bloque de constitucionalidad y la normativa infralegal."

explicacion: |
  El orden correcto sigue la supremacía constitucional, seguida por las leyes nacionales, los actos del poder ejecutivo (decretos) y finalmente las normas de menor rango como reglamentos o resoluciones.
```

### 15 — Jerarquía de la norma fundamental

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"
  - "Constitución"

enunciado: "En el sistema jurídico, la norma de mayor jerarquía que fundamenta la validez de todo el ordenamiento es la ___."

explicacion: |
  La Constitución Nacional se encuentra en la cúspide de la pirámide jurídica; ninguna norma inferior puede contrariar su contenido.
```

### 16 — Distinción entre Ley y Decreto

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto"]

respuesta: verdadero
tipo: vf
enunciado: "En una comparación de jerarquía, una Ley sancionada por el Congreso tiene un rango superior a un Decreto emitido por el Poder Ejecutivo."

explicacion: |
  Correcto. Las leyes son dictadas por el Poder Legislativo y tienen una jerarquía superior a los decretos reglamentarios del Ejecutivo.
```

### 17 — El orden de prelación normativa

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden_jerarquico", "normas"]

opciones_explicitas: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
respuesta_orden: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
tipo: ordenar

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía jurídica:"

pasos:
  - "Identifique la norma suprema."
  - "Ubique la norma dictada por el Congreso."
  - "Ubique la norma de carácter administrativo del Ejecutivo."
  - "Ubique la norma que desarrolla una ley previa."

explicacion: |
  El orden jerárquico descendente es: Constitución, Leyes, Decretos y Reglamentos.
```

### 18 — Vigencia y sanción

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "publicacion"]

tipo: mc
opciones_explicitas: ["publicación en el Boletín Oficial", "sanción por el Congreso", "firma del Presidente", "debate parlamentario"]

respuesta: "publicación en el Boletín Oficial"

enunciado: "Para que una norma sea jurídicamente vigente y obligatoria para todos, es requisito indispensable su ___."

explicacion: |
  La sanción es un paso necesario, pero la vigencia (obligatoriedad) se perfecciona con la publicación oficial.
```

### 19 — Diferencia entre Ley y Reglamento

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "avanzado"
  tags: ["reglamento", "ley"]

variables:
  es_reglamento_que_crea_derechos: falso

respuesta: es_reglamento_que_crea_derechos
tipo: completar
enunciado: "A diferencia de la Ley, un Reglamento tiene la capacidad de crear derechos y obligaciones nuevos de manera autónoma, sin necesidad de una ley previa."

explicacion: |
  Falso. El reglamento es una norma de carácter secundario que tiene como función reglamentar (desarrollar) una ley existente, no crear derechos nuevos de forma autónoma.
```

### 20 — Jerarquía normativa en conflicto

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["constitucion", "ley", "jerarquia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "Constitución"], ["Un decreto presidencial contradice una Ley Nacional vigente.", "Ley Nacional"]]

tipo: mc
opciones_explicitas: ["Constitución", "Ley Nacional", "Decreto Presidencial", "Reglamento"]

enunciado: "En el caso de un conflicto normativo donde {datos[escenario_idx][0]}, ¿qué norma prevalece según la jerarquía jurídica?"

respuesta: datos[escenario_idx][1]

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la norma de mayor rango prevalece sobre las de menor rango. En este caso, la Constitución es la norma suprema.
```

### 21 — Vigencia de la norma

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

tipo: vf
respuesta: verdadero

enunciado: "Una norma jurídica adquiere vigencia y es obligatoria para los ciudadanos una vez que ha sido debidamente promulgada y publicada en el Boletín Oficial."

explicacion: |
  La vigencia requiere que la norma sea conocida públicamente a través de la publicación oficial para que el principio de ignorancia de la ley no sea excusa.
```

### 22 — Orden jerárquico de normas

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

explicacion: |
  La jerarquía establece que la Constitución y los Tratados con jerarquía constitucional están en la cima, seguidos por las leyes y, finalmente, los reglamentos o decretos.
```

### 23 — El rol del reglamento

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["reglamento", "decreto"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El Poder Ejecutivo dicta un decreto para reglamentar una ley existente.", "reglamentar"], ["Un Ministerio dicta una resolución para aplicar una norma superior.", "aplicar"]]

tipo: completar
respuestas_validas:
  - "reglamentar"
  - "aplicar"

enunciado: "El objetivo principal de un decreto reglamentario es ___ la norma de jerarquía superior para facilitar su ejecución."

respuesta: casos[caso_idx][1]

explicacion: |
  Los reglamentos y decretos no pueden modificar el espíritu de la ley, sino que su función es reglamentar o aplicar los detalles técnicos para su cumplimiento.
```

### 24 — Validez vs Vigencia

```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["validez", "vigencia", "derogacion"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["Una ley ha sido derogada por una nueva ley posterior.", "no tiene vigencia"], ["Una ley fue sancionada pero aún no se publicó en el Boletín Oficial.", "no tiene vigencia"]]

tipo: mc
opciones_explicitas: ["tiene vigencia", "no tiene vigencia", "es nula"]

enunciado: "Si una norma se encuentra en la situación descrita: {situaciones[situacion_idx][0]}, ¿cuál es su estado respecto a la vigencia?"

respuesta: situaciones[situacion_idx][1]

explicacion: |
  Para que una norma sea vigente debe estar publicada y no haber sido derogada por otra norma de igual o superior jerarquía.
```
