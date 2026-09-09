# Oficios — materiales herreria (cuestionario, 28 preguntas VBLang)

> Tema: `oficios/herrero-forjador/materiales-herreria`. Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q1/Q6 usaban especificadores de formato estilo
> Python (`{var:.2%}`, `{var:.1f}`) ajenos a la convención real del
> proyecto (que usa `redondear()`), con un error de escala de 100x en
> Q1 (el valor 0.01-0.07 mostrado como "%" habría renderizado 1%-7% en
> vez de 0.01%-0.07%), corregidos a `redondear()` sin especificador; Q3
> combinaba dos rangos aleatorios con una `respuesta` de texto fija
> ("0.05% y 2.1%") que nunca podía coincidir con los valores realmente
> sorteados, simplificado a un hecho fijo con un solo hueco real; Q2/Q4/
> Q5 sorteaban una palabra ausente de las propias opciones/coherencia de
> la oración (ej. "viscoso y viscoso", "fundirse o fundirse en los
> bordes"), sorteos removidos; 22 bloques adicionales interpolaban una
> variable fija en una oración declarativa sin hueco (autorrevelador),
> corregidos con hueco `___` real; `tipo: input` (alias legacy)
> normalizado a `completar`.

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_materiales_herreria"
  nivel: "basico"
  tags: ["hierro_dulce", "propiedades_mecanicas"]

variables:
  carbono: redondear(random_float(0.01, 0.07), 2)

respuesta: "bajo"
tipo: completar

enunciado: "El hierro dulce se caracteriza por tener un contenido de carbono de aproximadamente {carbono}%. ¿Cómo describirías este nivel?"

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

respuesta: "blanco"
tipo: mc
opciones_explicitas: ["rojo", "blanco", "gris", "negro"]

enunciado: "Al alcanzar la temperatura adecuada de forja, el hierro dulce se vuelve ___ y viscoso."

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

respuesta: "2.1"
tipo: completar

enunciado: "El acero al carbono es una aleación de hierro y carbono donde este último varía típicamente entre 0.05% y ___% de contenido de carbono."

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

respuesta: "resistencia"
tipo: mc
opciones_explicitas: ["ductilidad", "maleabilidad", "resistencia", "corrosión"]

enunciado: "A diferencia del hierro dulce, el acero al carbono ofrece mayor ___ para herramientas y estructuras."

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

respuesta: "quemarse"
tipo: completar

enunciado: "Si se sobrecalienta el hierro dulce, puede ___ o fundirse en los bordes."

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
  contraccion: redondear(random_float(1.0, 1.5), 1)

respuesta: "más"
tipo: completar

enunciado: "Al enfriarse, el hierro dulce tiende a contraerse {contraccion} veces ___ que otros aceros."

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

respuesta: "fibrosa"
tipo: completar

enunciado: "La textura ___, visible al fracturar el hierro, es señal de su calidad."

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

respuesta: "decorativo"
tipo: completar

enunciado: "El hierro dulce es ideal para piezas ___ que requieren dobles y curvas complejas."

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

respuesta: "alta"
tipo: completar

enunciado: "El hierro dulce tiene una resistencia a la corrosión ___ comparado con otros metales ferrosos."

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

respuesta: "más"
tipo: completar

enunciado: "El acero al carbono requiere ___ energía para ser deformado en la forja."

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

respuesta: "maleable"
tipo: completar

enunciado: "El hierro dulce es notablemente dúctil y ___."

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

respuesta: "hierro y carbono"
tipo: completar

enunciado: "El acero al carbono es una aleación de ___."

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

respuesta: "0.08%"
tipo: completar

enunciado: "El hierro dulce contiene generalmente menos del ___ de carbono."

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

respuesta: "pulidos"
tipo: completar

enunciado: "El hierro dulce puede recibir acabados ___ de alta calidad."

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

respuesta: "herramientas"
tipo: completar

enunciado: "El acero al carbono es adecuado para fabricar ___ que soportan cargas pesadas."

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

respuesta: "preciso"
tipo: completar

enunciado: "La ductilidad del hierro dulce requiere un control de temperatura ___."

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

respuesta: "estructural"
tipo: completar

enunciado: "Sobrecalentar el hierro puede perder su integridad ___."

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

respuesta: "dureza"
tipo: completar

enunciado: "El acero es más ___ pero menos dúctil que el hierro a temperatura ambiente."

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

respuesta: "textura"
tipo: completar

enunciado: "La ___ visible al fracturar indica la pureza del hierro."

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

respuesta: "carbón"
tipo: completar

enunciado: "Los combustibles tradicionales para alimentar la fragua incluyen el ___."

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

respuesta: "anticipando"
tipo: completar

enunciado: "Conocer los materiales permite al artesano ___ cómo reaccionará al calor."

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

respuesta: "hierro dulce"
tipo: completar

enunciado: "Históricamente, el ___ ha sido el material por excelencia de la herrería artística."

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

respuesta: "sin romperse"
tipo: completar

enunciado: "La ductilidad permite deformar el hierro ___."

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

respuesta: "pesadas"
tipo: completar

enunciado: "El acero ofrece resistencia para estructuras que soportan cargas ___."

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

respuesta: "medida"
tipo: completar

enunciado: "La contracción del hierro dulce debe tenerse en cuenta al realizar uniones o ajustes de ___."

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

respuesta: "viscoso"
tipo: completar

enunciado: "A temperatura de forja, el hierro dulce se vuelve blanco y ___."

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

respuesta: "versatilidad"
tipo: completar

enunciado: "El acero al carbono combina resistencia y ___."

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

respuesta: "quemarse"
tipo: completar

enunciado: "Un defecto común por sobrecalentamiento es que el metal puede ___."

explicacion: |
  El sobrecalentamiento provoca quemaduras en el material.
```
