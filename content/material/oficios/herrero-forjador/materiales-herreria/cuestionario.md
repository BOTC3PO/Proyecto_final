# Oficios — materiales herreria (cuestionario, 28 preguntas VBLang)

> Tema: `oficios/herrero-forjador/materiales-herreria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "propiedades_mecanicas"]

variables:
  carbono: random_float(0.01, 0.07)

respuesta: "bajo"
tipo: input

enunciado: "El hierro dulce se caracteriza por tener un contenido de carbono {carbono:.2%}. ¿Cómo describirías este nivel?"

explicacion: |
  El hierro dulce contiene menos del 0.08% de carbono, lo que lo clasifica como de bajo contenido carbónico.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["temperatura", "forja"]

variables:
  estado: uno_de(["blanco", "viscoso"])

respuesta: "blanco"
tipo: mc
opciones_explicitas: ["rojo", "blanco", "gris", "negro"]

enunciado: "Al alcanzar la temperatura adecuada de forja, el hierro dulce se vuelve {estado} y viscoso."

explicacion: |
  El hierro dulce se vuelve blanco y viscoso al calentarse, permitiendo su moldeo.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["acero", "carbono"]

variables:
  min_c: random_float(0.05, 0.10)
  max_c: random_float(2.0, 2.1)

respuesta: "0.05% y 2.1%"
tipo: input

enunciado: "El acero al carbono es una aleación de hierro y carbono donde este varía típicamente entre {min_c:.2%} y {max_c:.1%}."

explicacion: |
  El contenido de carbono en el acero al carbono varía entre 0.05% y 2.1%.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "resistencia"]

variables:
  propiedad: uno_de(["dureza", "resistencia"])

respuesta: "resistencia"
tipo: mc
opciones_explicitas: ["ductilidad", "maleabilidad", "resistencia", "corrosión"]

enunciado: "A diferencia del hierro dulce, el acero al carbono ofrece mayor {propiedad} para herramientas y estructuras."

explicacion: |
  El acero al carbono es más duro y resistente que el hierro dulce.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["hierro_dulce", "defectos"]

variables:
  riesgo: uno_de(["quemarse", "fundirse"])

respuesta: "quemarse"
tipo: input

enunciado: "Si se sobrecalienta el hierro dulce, puede {riesgo} o fundirse en los bordes."

explicacion: |
  El sobrecalentamiento del hierro dulce puede causar que se queme o funda en los bordes.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "avanzado"
  tags: ["hierro_dulce", "enfriamiento"]

variables:
  contraccion: random_float(1.0, 1.5)

respuesta: "más"
tipo: input

enunciado: "Al enfriarse, el hierro dulce tiende a contraerse {contraccion:.1f} veces más que otros aceros."

explicacion: |
  El hierro dulce se contrae más que otros aceros al enfriarse, afectando ajustes y uniones.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "calidad"]

variables:
  textura: "fibrosa"

respuesta: "fibrosa"
tipo: input

enunciado: "La textura {textura}, visible al fracturar el hierro, es señal de su calidad."

explicacion: |
  La textura fibrosa es una característica distintiva del hierro dulce de calidad.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "aplicaciones"]

variables:
  uso: "decorativo"

respuesta: "decorativo"
tipo: input

enunciado: "El hierro dulce es ideal para piezas {uso} que requieren dobles y curvas complejas."

explicacion: |
  El hierro dulce es preferido para trabajos decorativos por su ductilidad.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["hierro_dulce", "corrosión"]

variables:
  resistencia: "alta"

respuesta: "alta"
tipo: input

enunciado: "El hierro dulce tiene una resistencia a la corrosión {resistencia} comparado con otros metales ferrosos."

explicacion: |
  El hierro dulce resiste mejor la corrosión que otros metales ferrosos.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "deformación"]

variables:
  energia: "más"

respuesta: "más"
tipo: input

enunciado: "El acero al carbono requiere {energia} energía para ser deformado en la forja."

explicacion: |
  El acero es más duro y requiere más energía para deformarse que el hierro dulce.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "maleabilidad"]

variables:
  propiedad: "maleable"

respuesta: "maleable"
tipo: input

enunciado: "El hierro dulce es notablemente dúctil y {propiedad}."

explicacion: |
  La maleabilidad permite deformar el hierro dulce sin romperlo.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["acero", "aleación"]

variables:
  componentes: "hierro y carbono"

respuesta: "hierro y carbono"
tipo: input

enunciado: "El acero al carbono es una aleación de {componentes}."

explicacion: |
  El acero al carbono está compuesto principalmente de hierro y carbono.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["hierro_dulce", "carbono"]

variables:
  limite: "0.08%"

respuesta: "0.08%"
tipo: input

enunciado: "El hierro dulce contiene generalmente menos del {limite} de carbono."

explicacion: |
  El límite superior de carbono para el hierro dulce es 0.08%.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "acabado"]

variables:
  acabado: "pulidos"

respuesta: "pulidos"
tipo: input

enunciado: "El hierro dulce puede recibir acabados {acabado} de alta calidad."

explicacion: |
  El hierro dulce permite obtener acabados pulidos brillantes.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "aplicaciones"]

variables:
  uso: "herramientas"

respuesta: "herramientas"
tipo: input

enunciado: "El acero al carbono es adecuado para fabricar {uso} que soportan cargas pesadas."

explicacion: |
  El acero es ideal para herramientas estructurales por su resistencia.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "avanzado"
  tags: ["hierro_dulce", "control"]

variables:
  control: "preciso"

respuesta: "preciso"
tipo: input

enunciado: "La ductilidad del hierro dulce requiere un control de temperatura {control}."

explicacion: |
  El control preciso es vital para evitar defectos en el hierro dulce.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["hierro_dulce", "integridad"]

variables:
  integridad: "estructural"

respuesta: "estructural"
tipo: input

enunciado: "Sobrecalentar el hierro puede perder su integridad {integridad}."

explicacion: |
  La integridad estructural se pierde si el hierro se sobrecalienta.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "propiedades"]

variables:
  propiedad: "dureza"

respuesta: "dureza"
tipo: input

enunciado: "El acero es más {propiedad} pero menos dúctil que el hierro a temperatura ambiente."

explicacion: |
  El acero gana dureza a costa de la ductilidad en frío.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "fractura"]

variables:
  señal: "textura"

respuesta: "textura"
tipo: input

enunciado: "La {señal} visible al fracturar indica la pureza del hierro."

explicacion: |
  La textura de la fractura revela la calidad del material.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["combustibles", "fragua"]

variables:
  combustible: "carbón"

respuesta: "carbón"
tipo: input

enunciado: "Los combustibles tradicionales para alimentar la fragua incluyen el {combustible}."

explicacion: |
  El carbón es un combustible común en la forja tradicional.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "avanzado"
  tags: ["filosofía", "técnica"]

variables:
  acción: "anticipando"

respuesta: "anticipando"
tipo: input

enunciado: "Conocer los materiales permite al artesano {acción} cómo reaccionará al calor."

explicacion: |
  El conocimiento permite anticipar el comportamiento del metal.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "historia"]

variables:
  material: "hierro dulce"

respuesta: "hierro dulce"
tipo: input

enunciado: "Históricamente, el {material} ha sido el material por excelencia de la herrería artística."

explicacion: |
  El hierro dulce es el material histórico por defecto para la herrería artística.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "deformación"]

variables:
  condición: "sin romperse"

respuesta: "sin romperse"
tipo: input

enunciado: "La ductilidad permite deformar el hierro {condición}."

explicacion: |
  La ductilidad es la capacidad de deformarse sin fracturarse.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "cargas"]

variables:
  resistencia: "pesadas"

respuesta: "pesadas"
tipo: input

enunciado: "El acero ofrece resistencia para estructuras que soportan cargas {resistencia}."

explicacion: |
  El acero es adecuado para cargas pesadas debido a su resistencia.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "avanzado"
  tags: ["hierro_dulce", "uniones"]

variables:
  ajuste: "medida"

respuesta: "medida"
tipo: input

enunciado: "La contracción del hierro dulce debe tenerse en cuenta al realizar uniones o ajustes de {ajuste}."

explicacion: |
  La contracción afecta las medidas finales en las uniones.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["temperatura", "forja"]

variables:
  estado: "viscoso"

respuesta: "viscoso"
tipo: input

enunciado: "A temperatura de forja, el hierro dulce se vuelve blanco y {estado}."

explicacion: |
  La viscosidad permite el moldeo en la fragua.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "intermedio"
  tags: ["acero", "versatilidad"]

variables:
  propiedad: "versatilidad"

respuesta: "versatilidad"
tipo: input

enunciado: "El acero al carbono combina resistencia y {propiedad}."

explicacion: |
  El acero es versátil para múltiples aplicaciones.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "avanzado"
  tags: ["defectos", "calor"]

variables:
  defecto: "quemarse"

respuesta: "quemarse"
tipo: input

enunciado: "Un defecto común por sobrecalentamiento es que el metal puede {defecto}."

explicacion: |
  El sobrecalentamiento provoca quemaduras en el material.
```
