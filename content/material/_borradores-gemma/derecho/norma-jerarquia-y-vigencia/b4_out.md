### 1 — Jerarquía de la norma fundamental
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas: ["Constitución Nacional", "Constitución"]

enunciado: "En el sistema jurídico, la norma de mayor jerarquía que fundamenta la validez de todo el ordenamiento es la ___."

explicacion: |
  La Constitución Nacional se encuentra en la cúspide de la pirámide jurídica; ninguna norma inferior puede contrariar su contenido.
```

### 2 — Distinción entre Ley y Decreto
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto"]

variables:
  es_ley_que_prevalece: true

respuesta: es_ley_que_prevalece
tipo: vf

enunciado: "En una comparación de jerarquía, una Ley sancionada por el Congreso tiene un rango superior a un Decreto emitido por el Poder Ejecutivo."

explicacion: |
  Correcto. Las leyes son dictadas por el Poder Legislativo y tienen una jerarquía superior a los decretos reglamentarios del Ejecutivo.
```

### 3 — El orden de prelación normativa
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden_jerarquico", "normas"]

opciones_explicitas: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
respuesta: ["Constitución Nacional", "Leyes", "Decretos", "Reglamentos"]
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

### 4 — Vigencia y sanción
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "publicacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["publicación en el Boletín Oficial", "vigente"], ["sanción por el Congreso", "no vigente"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["publicación en el Boletín Oficial", "sanción por el Congreso", "firma del Presidente", "debate parlamentario"]

enunciado: "Para que una norma sea jurídicamente {datos[escenario_idx][0]} y obligatoria para todos, es requisito indispensable su ___."

explicacion: |
  La sanción es un paso necesario, pero la vigencia (obligatoriedad) se perfecciona con la publicación oficial.
```

### 5 — Diferencia entre Ley y Reglamento
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "avanzado"
  tags: ["reglamento", "ley"]

variables:
  es_reglamento_que_crea_derechos: falso

respuesta: es_reglamento_que_crea_derechos
tipo: vf

enunciado: "A diferencia de la Ley, un Reglamento tiene la capacidad de crear derechos y obligaciones nuevos de manera autónoma, sin necesidad de una ley previa."

explicacion: |
  Falso. El reglamento es una norma de carácter secundario que tiene como función reglamentar (desarrollar) una ley existente, no crear derechos nuevos de forma autónoma.
```