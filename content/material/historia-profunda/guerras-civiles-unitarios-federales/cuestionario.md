# Historia Profunda — Guerras civiles unitarios federales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El modelo de gobierno

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

respuesta: "Unitarios"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Anarquistas", "Monárquicos"]

enunciado: "El grupo político que defendía un gobierno centralizado con sede en Buenos Aires y la centralización del poder era el de los ___."

explicacion: |
  Los Unitarios buscaban un Estado centralizado donde las provincias perdieran su autonomía en favor de un poder central fuerte, generalmente controlado por la élite porteña.
```

### 2 — Autonomía provincial

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["federalismo", "provincias"]

respuesta: "Federales"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Centralistas", "Conservadores"]

enunciado: "Aquellos que luchaban por la autonomía de las provincias y la distribución de la renta aduanera entre todas las jurisdicciones eran los ___."

explicacion: |
  El federalismo proponía que cada provincia mantuviera su soberanía y autonomía para autogobernarse, oponiéndose al control absoluto de Buenos Aires.
```

### 3 — La disputa por la Aduana

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Buenos Aires", "centralizar la recaudación de la aduana para el gobierno central"], ["Las provincias", "repartir los ingresos de la aduana de forma equitativa"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "centralizar la recaudación de la aduana para el gobierno central"
  - "repartir los ingresos de la aduana de forma equitativa"

enunciado: "En el conflicto por la renta aduanera, el principal punto de discordia era que las provincias exigían ___."

explicacion: |
  La disputa económica era clave: Buenos Aires quería controlar la aduana (recaudación de impuestos de importación/exportación), mientras las provincias querían una distribución justa de esos fondos.
```

### 4 — El orden de los factores

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["Centralismo", "Autonomía provincial", "Guerras civiles"]
tipo: ordenar
opciones_explicitas: ["Centralismo", "Autonomía provincial", "Guerras civiles"]

enunciado: "Ordene los conceptos desde la causa política hasta la consecuencia histórica resultante del conflicto:"

pasos:
  - "Causa: El deseo de control central (Unitarios)"
  - "Contrapeso: El deseo de soberanía local (Federales)"
  - "Resultado: El conflicto armado prolongado"

explicacion: |
  La tensión entre el centralismo unitario y la autonomía federal derivó en un periodo de constantes guerras civiles en el territorio argentino.
```

### 5 — El peso de la economía

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "causas"]

variables:
  valor_base: 1820
  inflacion_estimada: 1.5

respuesta: redondear(valor_base * inflacion_estimada, 0)
tipo: completar
tolerancia_abs: 1

enunciado: "Si un conflicto de la era de las guerras civiles incrementara los costos de guerra en un factor de {inflacion_estimada} sobre una base de ${valor_base} pesos, ¿cuál sería el nuevo costo total?"

pasos:
  - "Multiplicar el valor base por el factor de incremento."

explicacion: |
  El costo de mantener ejércitos permanentes durante las guerras civiles era altísimo para las arcas de las provincias y de la ciudad de Buenos Aires.
```

### 6 — Los bandos en pugna

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "siglo_XIX"]

tipo: completar
enunciado: "Durante las guerras civiles argentinas del siglo XIX, las dos facciones políticas principales que se enfrentaron por el modelo de organización del Estado fueron los ___ y los ___."
respuesta: "Unitarios, Federales"
explicacion: |
  Los Unitarios buscaban un gobierno centralizado en Buenos Aires, mientras que los Federales defendían la autonomía de las provincias.
```

### 7 — El modelo de gobierno

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["modelo_estatal", "centralismo"]

variables:
  escenario: uno_de([["centralismo", "Buenos Aires"], ["federalismo", "Provincias"]])

tipo: completar
respuestas_validas:
  - "centralismo"
  - "federalismo"
respuesta: escenario[0]

enunciado: "Si un grupo político propone que todas las leyes y decisiones administrativas deben emanar exclusivamente de un gobierno central en la capital, está defendiendo el ___."

explicacion: |
  El centralismo es la característica principal del pensamiento unitario, que buscaba la concentración del poder en un solo núcleo.
```

### 8 — El rol de la Aduana

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "aduana"]

tipo: mc
opciones_explicitas: ["la libre navegación de los ríos", "la nacionalización de la aduana", "la eliminación de los impuestos", "la unión aduanera"]
respuesta: "la nacionalización de la aduana"

enunciado: "Uno de los principales focos de conflicto económico entre las provincias y Buenos Aires fue ___."

explicacion: |
  Las provincias federales exigían la nacionalización de los ingresos de la aduana de Buenos Aires y la libre navegación de los ríos interiores, mientras que Buenos Aires quería retener la renta aduanera.
```

### 9 — Secuencia de tensiones

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["proceso_historico"]

tipo: ordenar
opciones_explicitas: ["Caos de las guerras civiles", "Lucha por la organización constitucional", "Consolidación del Estado Nacional"]

enunciado: "Ordene cronológicamente los procesos que marcaron la transición desde la desintegración post-independencia hasta la formación del Estado moderno:"

explicacion: |
  Primero hubo un largo periodo de guerras civiles, luego el debate constitucional de 1853 y finalmente la consolidación del Estado bajo la presidencia de Mitre, Sarmiento y Avellaneda.
respuesta_orden: ["Caos de las guerras civiles", "Lucha por la organización constitucional", "Consolidación del Estado Nacional"]
```

### 10 — El conflicto de la soberanía

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["soberania", "provincias"]

tipo: vf
respuesta: verdadero

enunciado: "El federalismo buscaba que cada provincia mantuviera su propia autonomía y autoridades locales, sin estar subordinada totalmente al poder central."

explicacion: |
  Verdadero. El federalismo se basaba en el respeto a la soberanía de las entidades provinciales preexistentes.
```

### 11 — El rol de Rosas en la Confederación

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["rosas", "federales", "confederacion"]

variables:
  rol_rosas: uno_de(["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"])

respuesta: "gobernador de Buenos Aires"
tipo: mc
opciones_explicitas: ["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"]

enunciado: "Durante el período de la Confederación Argentina, Juan Manuel de Rosas ejercía el poder real como {rol_rosas}, manteniendo el control sobre la Aduana y los recursos de la provincia."

explicacion: |
  Aunque Rosas era el líder de facto de la Confederación, formalmente su cargo era el de Gobernador de la Provincia de Buenos Aires, cargo desde el cual ejercía una hegemonía política y económica sobre las demás provincias.
```

### 12 — El sistema de relaciones políticas

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["relaciones", "federales", "unitarios"]

respuesta: "unitarios"
tipo: completar
respuestas_validas:
  - "unitarios"

enunciado: "En el contexto de las guerras civiles, el proyecto político de Rosas se alineaba con el bando ___ , enfrentándose a las aspiraciones de centralismo de los opositores."

explicacion: |
  Rosas era el máximo exponente del federalismo, lo que lo colocaba en constante conflicto con los unitarios, quienes buscaban un gobierno centralizado en Buenos Aires.
```

### 13 — La base del poder económico

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana", "rosas"]

respuesta: "Aduana"
tipo: mc
opciones_explicitas: ["Aduana", "Aduana de Montevideo", "Impuesto de libre navegación"]

enunciado: "El control de la ___ de Buenos Aires fue la principal herramienta de Rosas para asegurar la supremacía de su provincia sobre la Confederación."

explicacion: |
  La recaudación de los derechos de importación y exportación de la Aduana de Buenos Aires permitía a la provincia controlar la economía nacional y limitar la autonomía de las provincias del interior.
```

### 14 — Secuencia de la hegemonía rosista

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["orden", "etapas", "rosas"]

variables:
  etapa_idx: uno_de([0,1,2])

respuesta_orden: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]
tipo: ordenar
opciones_explicitas: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del poder de Rosas en la Confederación:"

pasos:
  - "El ascenso de los caudillos locales en el interior."
  - "La concesión de facultades extraordinarias por parte de la legislatura."
  - "El establecimiento de un orden basado en la sumisión de las provincias."

explicacion: |
  El proceso comenzó con el ascenso de caudillos, seguido por la necesidad de orden que llevó a la delegación de poderes en Rosas, culminando en un régimen de hegemonía federal.
```

### 15 — El símbolo de la lealtad

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["simbolos", "color", "rosas"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["rojo", "azul", "blanco"]

enunciado: "Para demostrar la lealtad al régimen de Rosas, se utilizaba el color ___ en la vestimenta y en las insignias."

explicacion: |
  El uso de la 'divisa punzó' (una cinta roja) era obligatorio para demostrar la adhesión al bando federal de Rosas y marcar la distinción frente a los unitarios.
```

### 16 — La Batalla de Caseros

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["caseros", "urquiza", "rosas"]

respuesta: "Justo José de Urquiza"
tipo: mc
opciones_explicitas: ["Juan Manuel de Rosas", "Justo José de Urquiza", "Facundo Quiroga", "Manuel Dorrego"]

enunciado: "En la batalla de Caseros, ocurrida en 1852, el líder del Ejército Grande que derrotó a Juan Manuel de Rosas fue ___."

explicacion: |
  La victoria de Urquiza en Caseros puso fin al régimen de Rosas y permitió el inicio del proceso de organización constitucional de la Argentina.
```

### 17 — Consecuencia de la batalla

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["organización_nacional", "constitucion"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"
  - "Constitución de 1853"

enunciado: "La derrota de Rosas en Caseros permitió la convocatoria al Congreso Constituyente de 1853, que dio como resultado la primera ___."

explicacion: |
  Tras la caída de la hegemonía rosista, se abrió un periodo de institucionalización que culminó con la sanción de la Constitución de 1853.
```

### 18 — El bando de los vencedores

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["urquiza", "ejercito_grande"]

respuesta: "Ejército Grande"
tipo: mc
opciones_explicitas: ["Ejército de Granaderos", "Ejército Grande", "Ejército de Orientales", "Ejército de Montoneras"]

enunciado: "El contingente militar liderado por Urquiza para enfrentar a Rosas fue conocido como el ___."

explicacion: |
  El Ejército Grande estaba compuesto por fuerzas de diversas provincias y también por apoyo de fuerzas internacionales.
```

### 19 — El fin de una era

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["rosas", "caída"]

respuesta: "exilio"
tipo: completar
respuestas_validas:
  - "exilio"
  - "muerte"
  - "derrota"

enunciado: "Tras la derrota en la batalla de Caseros, Juan Manuel de Rosas se vio obligado a partir hacia el ___."

explicacion: |
  Rosas se retiró hacia Inglaterra, donde pasó el resto de sus días.
```

### 20 — Orden cronológico de la caída de Rosas

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Tratado de San Justo", "Batalla de Caseros", "Sanción de la Constitución Nacional"]
respuesta_orden: ["Tratado de San Justo", "Batalla de Caseros", "Sanción de la Constitución Nacional"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con el fin del rosismo y la organización nacional:"

pasos:
  - "1. El pacto entre Urquiza y los colorados de Buenos Aires."
  - "2. El enfrentamiento militar decisivo."
  - "3. La consolidación institucional del país."

explicacion: |
  Primero se pactó la alianza (Tratado de San Justo), luego se combatió (Caseros) y finalmente se organizó el Estado (Constitución).
```

### 21 — Posturas en el conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

variables:
  escenario: uno_de([["Un grupo de caudillos busca que cada provincia mantenga su propia autonomía y leyes locales.", "federal"], ["Un gobierno centralizado busca concentrar todo el poder político y económico en Buenos Aires.", "unitario"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "En el contexto de las guerras civiles argentinas, si se propone que {escenario[0]}, ¿qué postura se está defendiendo?"

explicacion: |
  El Federalismo defendía la autonomía de las provincias, mientras que el Unitarismo buscaba un mando centralizado en Buenos Aires.
```

### 22 — El control de la Aduana

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  caso: uno_de([["La libre navegación de los ríos interiores es una demanda clave de las provincias.", "federal"], ["El control exclusivo de la renta aduanera por parte del gobierno central es la prioridad.", "unitario"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Analizando la estructura económica de la época, si el objetivo es {caso[0]}, ¿qué modelo se está representando?"

explicacion: |
  Los federales necesitaban la libre navegación para comerciar por sus propios ríos; los unitarios buscaban centralizar las rentas de la aduana.
```

### 23 — El rol del Ejecutivo

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["constitucion", "poder"]

variables:
  modelo: uno_de([["Un gobierno central con un poder ejecutivo fuerte que designa a los gobernadores.", "unitario"], ["Un sistema donde las provincias eligen a sus propios gobernadores de forma autónoma.", "federal"]])

tipo: completar
respuestas_validas:
  - "unitario"
  - "federal"

enunciado: "Si el diseño institucional busca que {modelo[0]}, el modelo de gobierno es de tipo ___."

explicacion: |
  La designación de autoridades provinciales por parte del centro es la característica principal del centralismo unitario.
```

### 24 — Causas del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["causas"]

variables:
  conflicto: uno_de([["La disputa por la distribución de los ingresos de la aduana de Buenos Aires.", "federal"], ["La lucha por la hegemonía política entre la élite porteña y los caudillos.", "unitario"]])

respuesta: conflicto[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Si el núcleo del conflicto es {conflicto[0]}, la demanda principal es de carácter ___."

explicacion: |
  La distribución de la renta aduanera era el principal punto de fricción entre la autonomía provincial y el control central.
```

### 25 — Orden de conceptos

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden"]

variables:
  idx: uno_de([0, 1])
  modelos: ["federal", "unitario"]
  descripciones: ["La soberanía reside en las provincias, que delegan facultades a la nación", "La nación es la fuente de autoridad y las provincias dependen de ella"]

respuesta: descripciones[idx]
tipo: mc
opciones_explicitas: ["La soberanía reside en las provincias, que delegan facultades a la nación", "La nación es la fuente de autoridad y las provincias dependen de ella"]

enunciado: "Según el modelo {modelos[idx]}, ¿cómo se organiza la jerarquía de poder entre la nación y las provincias?"

explicacion: |
  En el federalismo la soberanía reside en las provincias que delegan facultades a la nación; en el unitarismo la nación es la fuente de autoridad sobre las provincias.
```
