# Oficios — fundamentos herreria (cuestionario, 32 preguntas VBLang)

> Tema: `oficios/herrero-forjador/fundamentos-herreria`. Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: 28 bloques sorteaban una palabra/frase con
> `uno_de([...])` interpolándola directamente en una oración
> declarativa fija, produciendo afirmaciones fácticamente falsas o
> autocontradictorias para 2 de cada 3 ramas ("los átomos se detienen
> más intensamente", "temperatura se define como... a diferencia de la
> temperatura que es energía en tránsito") mientras la respuesta seguía
> fija a la rama original — sorteos removidos, huecos `___` reales
> agregados en todos los casos; Q1 además tenía `respuesta:` con el
> texto de una definición en vez de la palabra que llena el hueco,
> corregida a "temperatura"; `tipo: input` (alias legacy) normalizado a
> `completar`.

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["herrero_forjador_fundamentos_herreria", "termologia_basica"]

respuesta: "temperatura"
tipo: completar

enunciado: "En el contexto de la forja, la ___ se define como la medida de la energía interna del metal, a diferencia del calor que es la energía en tránsito."

explicacion: |
  Es fundamental distinguir que la temperatura es una medida del estado interno, mientras que el calor es la transferencia de energía.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["herrero_forjador_fundamentos_herreria", "estructura_atomica"]

respuesta: "vibran"
tipo: completar

enunciado: "Cuando calentamos el hierro, los átomos ___ más intensamente y se separan ligeramente, aumentando la maleabilidad."

explicacion: |
  El aumento de la vibración atómica es lo que permite que el material se deforme sin romperse inmediatamente.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["herrero_forjador_fundamentos_herreria", "propiedades_metal"]

respuesta: "se funde"
tipo: completar

enunciado: "Si se supera la temperatura crítica de fusión, el metal ___ y pierde sus propiedades estructurales permanentemente."

explicacion: |
  La fusión destruye la integridad del material para la forja; el herrero debe evitar llegar a este punto si busca forjar.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["herrero_forjador_fundamentos_herreria", "tipos_de_hierro"]

respuesta: "dúctil"
tipo: completar

enunciado: "El hierro dulce es extremadamente ___, lo que permite estirarlo y doblarlo mucho sin que se rompa."

explicacion: |
  La ductilidad es la característica clave del hierro dulce para trabajos decorativos complejos.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["fundamentos", "termologia"]

respuesta: "temperatura"
tipo: completar

enunciado: "En el contexto de la forja, la ___ se define como la medida de la energía interna del metal, no la energía en tránsito."

explicacion: |
  El calor es la energía en tránsito (transferencia térmica), mientras que la temperatura es la medida del estado interno de energía del material.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["metalurgia", "estructura"]

respuesta: "vibran"
tipo: completar

enunciado: "Al calentar el hierro o el acero, los átomos ___ más intensamente y se separan ligeramente, aumentando la maleabilidad."

explicacion: |
  El aumento de temperatura provoca que los átomos vibren más y se separen, reduciendo la resistencia interna y permitiendo la deformación plástica.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["seguridad", "errores"]

respuesta: "se quema"
tipo: completar

enunciado: "Si se supera la línea crítica sin controlar el calor, el metal comienza a ___, perdiendo permanentemente sus propiedades estructurales."

explicacion: |
  El sobrecalentamiento ("quemado") oxida el interior del grano y debilita la estructura, haciendo que el metal se deshaga o quiebre al forjar.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["observacion", "temperatura"]

respuesta: "termómetro visual"
tipo: completar

enunciado: "El herrero lee los colores del metal como un ___, guiándose por la luz emitida para determinar la temperatura exacta de trabajo."

explicacion: |
  Dado que no siempre hay termómetros en la antena, los colores del brillo (dorado, rojo, naranja, blanco) indican rangos de temperatura específicos.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["materiales", "propiedades"]

respuesta: "dúctil"
tipo: completar

enunciado: "El hierro dulce es extremadamente ___, lo que permite estirarlo y doblarlo mucho sin que se rompa."

explicacion: |
  La ductilidad es la capacidad de un material para deformarse plásticamente bajo tensión de tracción, ideal para formas decorativas complejas.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["materiales", "aplicacion"]

respuesta: "herramientas de filo"
tipo: completar

enunciado: "El hierro dulce NO es adecuado para crear ___, ya que no mantiene el filo ni soporta grandes impactos."

explicacion: |
  Al ser blando y de baja resistencia, el hierro dulce se deformaría o perdería el filo rápidamente bajo uso intenso.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["aleaciones", "quimica"]

respuesta: "carbono"
tipo: completar

enunciado: "El acero es una aleación compuesta principalmente de hierro y ___."

explicacion: |
  El carbono es el elemento de aleación principal que determina la dureza y la capacidad de templado del acero.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["materiales", "templado"]

respuesta: "no responden bien"
tipo: completar

enunciado: "Los aceros de bajo carbono son fáciles de forjar, pero ___ al temple (endurecimiento mediante enfriamiento rápido)."

explicacion: |
  Sin suficiente carbono, no se forman las fases duras (martensita) necesarias para endurecer el acero durante el temple.
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["materiales", "propiedades"]

respuesta: "duros"
tipo: completar

enunciado: "Los aceros de alto carbono son mucho más ___ y resistentes, pero también más frágiles."

explicacion: |
  El alto contenido de carbono aumenta la dureza y resistencia al desgaste, pero reduce la tenacidad, haciéndolo más propenso a fracturas.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["aplicacion", "herramientas"]

respuesta: "cuchillos"
tipo: completar

enunciado: "El acero de alto carbono es el material preferido para la fabricación de ___ debido a su capacidad de mantener un filo afilado."

explicacion: |
  Los cuchillos requieren dureza para afilarse y retener el filo, propiedades que solo los aceros con mayor contenido de carbono ofrecen.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["comparacion", "forja"]

respuesta: "bajo carbono"
tipo: completar

enunciado: "Para trabajos que requieren mucha flexibilidad y soldadura sin complicaciones, se prefiere el acero de ___ sobre el hierro dulce por su resistencia."

explicacion: |
  El acero de bajo carbono ofrece un equilibrio: es más resistente que el hierro dulce pero sigue siendo fácil de trabajar y soldar.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "avanzado"
  tags: ["temperatura", "colores"]

variables:
  temp_min: 600
  temp_max: 700

respuesta: "650"
tipo: completar

enunciado: "Si el metal emite un color rojo oscuro u opaco, la temperatura aproximada está en el rango de {temp_min} a {temp_max} °C. ¿Cuál es el punto medio de este rango?"

explicacion: |
  El rojo oscuro indica temperaturas de forja baja. El punto medio entre 600 y 700 es 650.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "avanzado"
  tags: ["temperatura", "colores"]

variables:
  temp_min: 900
  temp_max: 1000

respuesta: "950"
tipo: completar

enunciado: "Un color naranja brillante suele indicar una temperatura entre {temp_min} y {temp_max} °C. ¿Cuál es el punto medio?"

explicacion: |
  El naranja es una temperatura común para forjar acero medio. El punto medio es 950.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "avanzado"
  tags: ["temperatura", "colores"]

variables:
  temp_min: 1200
  temp_max: 1300

respuesta: "1250"
tipo: completar

enunciado: "Cuando el metal brilla en blanco, la temperatura supera los {temp_min} °C. ¿Cuál es el punto medio del rango {temp_min}-{temp_max}?"

explicacion: |
  El blanco indica temperaturas muy altas, cercanas al punto de fusión. El punto medio es 1250.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["tratamiento", "templado"]

respuesta: "templado"
tipo: completar

enunciado: "El ___ consiste en calentar el acero hasta su temperatura crítica y luego enfriarlo rápidamente para endurecerlo."

explicacion: |
  El templado transforma la estructura cristalina (austenita a martensita), aumentando significativamente la dureza.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["propiedades", "riesgos"]

respuesta: "se vuelve más frágil"
tipo: completar

enunciado: "Al realizar el temple, el acero gana dureza pero pierde tenacidad, volviéndose más ___."

explicacion: |
  La dureza extrema a menudo viene acompañada de fragilidad, por lo que a veces se requiere un revenido posterior para aliviar tensiones.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["terminologia", "propiedades"]

respuesta: "maleabilidad"
tipo: completar

enunciado: "La capacidad del metal de ser deformado por compresión (golpes) sin romperse se denomina ___."

explicacion: |
  La maleabilidad es la propiedad clave que permite al herrero dar forma al metal mediante la forja.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["fisica", "conceptos"]

respuesta: "El calor es energía en tránsito"
tipo: completar

enunciado: "Selecciona la definición correcta: ___."

explicacion: |
  Es fundamental distinguir que el calor fluye de un cuerpo caliente a uno frío, mientras que la temperatura es una propiedad del estado del cuerpo.
```

### 23 — pregunta 23

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["seleccion", "materiales"]

respuesta: "un cincel"
tipo: completar

enunciado: "Para fabricar ___, se debe utilizar acero de alto carbono en lugar de hierro dulce."

explicacion: |
  Las herramientas de corte (cinceles) necesitan mantener el filo bajo impacto, requisito que solo el acero de alto carbono templado puede cumplir.
```

### 24 — pregunta 24

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["técnicas", "uniones"]

respuesta: "hierro dulce"
tipo: completar

enunciado: "Para remaches que requieren mucha flexibilidad y no necesitan filo, el ___ es ideal por su ductilidad."

explicacion: |
  Los remaces se doblan y ajustan; el hierro dulce permite esta deformación sin riesgo de rotura frágil.
```

### 25 — pregunta 25

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["metalurgia", "cambio_fase"]

respuesta: "al alcanzar temperaturas críticas"
tipo: completar

enunciado: "La estructura cristalina del acero cambia por completo ___, permitiendo deformaciones imposibles en frío."

explicacion: |
  Las transformaciones de fase (como a austenita) ocurren a temperaturas críticas específicas, cambiando las propiedades mecánicas.
```

### 26 — pregunta 26

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "avanzado"
  tags: ["temperatura", "colores"]

variables:
  temp_min: 1000
  temp_max: 1100

respuesta: "1050"
tipo: completar

enunciado: "El color amarillo pálido indica temperaturas entre {temp_min} y {temp_max} °C. ¿Cuál es el punto medio?"

explicacion: |
  El amarillo indica temperaturas altas de forja. El punto medio es 1050.
```

### 27 — pregunta 27

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "avanzado"
  tags: ["materiales", "limitaciones"]

respuesta: "acero inoxidable"
tipo: completar

enunciado: "El ___ es difícil de forjar tradicionalmente debido a su alta resistencia y conductividad térmica diferente, a menudo requiriendo hornos especiales."

explicacion: |
  El acero inoxidable tiene una estructura diferente (austenítica o ferrítica) y no responde a la forja tradicional de la misma manera que el acero al carbono.
```

### 28 — pregunta 28

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["terminologia", "diferencias"]

respuesta: "estirar sin romperse"
tipo: completar

enunciado: "La ___ es la propiedad que hace al hierro dulce ideal para estirar alambres o varillas."

explicacion: |
  La ductilidad se refiere específicamente a la deformación bajo tensión de tracción (estiramiento), mientras que la maleabilidad es bajo compresión.
```

### 29 — pregunta 29

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["seguridad", "errores"]

respuesta: "se vuelve frágil y se deshace"
tipo: completar

enunciado: "Si el metal se 'quema', su estructura interna se oxida entre los granos, haciendo que ___ al golpearlo."

explicacion: |
  El quemado es irreversible en la mayoría de los casos prácticos; el metal pierde cohesión y se desintegra.
```

### 30 — pregunta 30

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "intermedio"
  tags: ["quimica", "propiedades"]

respuesta: "directa"
tipo: completar

enunciado: "En general, a mayor contenido de carbono en el acero, mayor será su ___ con la dureza alcanzable."

explicacion: |
  El carbono forma carburos que endurecen la matriz de hierro, aumentando la dureza y resistencia.
```

### 31 — pregunta 31

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["instrumentos", "observacion"]

respuesta: "ojos del herrero"
tipo: completar

enunciado: "Tradicionalmente, el ___ principal para medir la temperatura en la forja es la experiencia visual del herrero."

explicacion: |
  Aunque existen instrumentos modernos, la habilidad de leer el color es fundamental en la herrería artesanal.
```

### 32 — pregunta 32

```
metadata:
  materia: "oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["propiedades", "aplicacion"]

respuesta: "extrema ductilidad"
tipo: completar

enunciado: "La principal ventaja del hierro dulce sobre el acero de bajo carbono en trabajos decorativos es su ___."

explicacion: |
  La ductilidad permite curvas cerradas y deformaciones complejas sin riesgo de fractura, algo más difícil con aceros.
```
