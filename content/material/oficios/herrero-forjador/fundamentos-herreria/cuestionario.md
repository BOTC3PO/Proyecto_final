# Oficios — fundamentos herreria (cuestionario, 32 preguntas VBLang)

> Tema: `oficios/herrero-forjador/fundamentos-herreria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_fundamentos_herreria"
  nivel: "basico"
  tags: ["herrero_forjador_fundamentos_herreria", "termologia_basica"]

variables:
  concepto: uno_de(["temperatura", "calor"])

respuesta: "medida de energia interna"
tipo: completar

enunciado: "En el contexto de la forja, {concepto} se define como la medida de la energía interna del metal, a diferencia del calor que es la energía en tránsito."

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

variables:
  accion: uno_de(["vibran", "se detienen", "colapsan"])

respuesta: "vibran"
tipo: completar

enunciado: "Cuando calentamos el hierro, los átomos {accion} más intensamente y se separan ligeramente, aumentando la maleabilidad."

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

variables:
  resultado: uno_de(["se quema", "se endurece", "se funde"])

respuesta: "se funde"
tipo: completar

enunciado: "Si se supera la temperatura crítica de fusión, el metal {resultado} y pierde sus propiedades estructurales permanentemente."

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

variables:
  propiedad: uno_de(["dúctil", "frágil", "rígido"])

respuesta: "dúctil"
tipo: completar

enunciado: "El hierro dulce es extremadamente {propiedad}, lo que permite estirarlo y doblarlo mucho sin que se rompa."

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

variables:
  concepto_clave: uno_de(["calor", "temperatura"])

respuesta: "temperatura"
tipo: completar

enunciado: "En el contexto de la forja, {concepto_clave} se define como la medida de la energía interna del metal, no la energía en tránsito."

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

variables:
  accion: uno_de(["vibran", "se detienen", "colapsan"])

respuesta: "vibran"
tipo: completar

enunciado: "Al calentar el hierro o el acero, los átomos {accion} más intensamente y se separan ligeramente, aumentando la maleabilidad."

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

variables:
  resultado_negativo: uno_de(["se quema", "se endurece", "se funde completamente"])

respuesta: "se quema"
tipo: completar

enunciado: "Si se supera la línea crítica sin controlar el calor, el metal comienza a {resultado_negativo}, perdiendo permanentemente sus propiedades estructurales."

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

variables:
  analogia: uno_de(["termómetro visual", "barómetro", "cronómetro"])

respuesta: "termómetro visual"
tipo: completar

enunciado: "El herrero lee los colores del metal como un {analogia}, guiándose por la luz emitida para determinar la temperatura exacta de trabajo."

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

variables:
  propiedad: uno_de(["dúctil", "frágil", "magnético"])

respuesta: "dúctil"
tipo: completar

enunciado: "El hierro dulce es extremadamente {propiedad}, lo que permite estirarlo y doblarlo mucho sin que se rompa."

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

variables:
  uso_inadecuado: uno_de(["trabajos decorativos", "herramientas de filo", "remaches"])

respuesta: "herramientas de filo"
tipo: completar

enunciado: "El hierro dulce NO es adecuado para crear {uso_inadecuado}, ya que no mantiene el filo ni soporta grandes impactos."

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

variables:
  componente: uno_de(["carbono", "zinc", "cobre"])

respuesta: "carbono"
tipo: completar

enunciado: "El acero es una aleación compuesta principalmente de hierro y {componente}."

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

variables:
  comportamiento: uno_de(["responden bien", "no responden bien", "se funden"])

respuesta: "no responden bien"
tipo: completar

enunciado: "Los aceros de bajo carbono son fáciles de forjar, pero {comportamiento} al temple (endurecimiento mediante enfriamiento rápido)."

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

variables:
  caracteristica: uno_de(["blandos", "duros", "flexibles"])

respuesta: "duros"
tipo: completar

enunciado: "Los aceros de alto carbono son mucho más {caracteristica} y resistentes, pero también más frágiles."

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

variables:
  objeto: uno_de(["cuchillos", "varillas decorativas", "tubos"])

respuesta: "cuchillos"
tipo: completar

enunciado: "El acero de alto carbono es el material preferido para la fabricación de {objeto} debido a su capacidad de mantener un filo afilado."

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

variables:
  tipo_acero: uno_de(["bajo carbono", "alto carbono", "inoxidable"])

respuesta: "bajo carbono"
tipo: completar

enunciado: "Para trabajos que requieren mucha flexibilidad y soldadura sin complicaciones, se prefiere el acero de {tipo_acero} sobre el hierro dulce por su resistencia."

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
tipo: input

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
tipo: input

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
tipo: input

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

variables:
  proceso: uno_de(["recocido", "templado", "normalizado"])

respuesta: "templado"
tipo: completar

enunciado: "El {proceso} consiste en calentar el acero hasta su temperatura crítica y luego enfriarlo rápidamente para endurecerlo."

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

variables:
  consecuencia: uno_de(["se vuelve más dúctil", "se vuelve más frágil", "se vuelve magnético"])

respuesta: "se vuelve más frágil"
tipo: completar

enunciado: "Al realizar el temple, el acero gana dureza pero pierde tenacidad, volviéndose más {consecuencia}."

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

variables:
  termino: uno_de(["maleabilidad", "elasticidad", "plasticidad"])

respuesta: "maleabilidad"
tipo: completar

enunciado: "La capacidad del metal de ser deformado por compresión (golpes) sin romperse se denomina {termino}."

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

variables:
  afirmacion: uno_de(["El calor es energía en tránsito", "La temperatura es energía en tránsito", "Son lo mismo"])

respuesta: "El calor es energía en tránsito"
tipo: completar

enunciado: "Selecciona la definición correcta: {afirmacion}."

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

variables:
  pieza: uno_de(["una reja curva", "un cincel", "un gancho"])

respuesta: "un cincel"
tipo: completar

enunciado: "Para fabricar {pieza}, se debe utilizar acero de alto carbono en lugar de hierro dulce."

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

variables:
  material_recomendado: uno_de(["hierro dulce", "acero de alto carbono", "bronce"])

respuesta: "hierro dulce"
tipo: completar

enunciado: "Para remaches que requieren mucha flexibilidad y no necesitan filo, el {material_recomendado} es ideal por su ductilidad."

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

variables:
  condicion: uno_de(["a temperatura ambiente", "al alcanzar temperaturas críticas", "al enfriarse lentamente"])

respuesta: "al alcanzar temperaturas críticas"
tipo: completar

enunciado: "La estructura cristalina del acero cambia por completo {condicion}, permitiendo deformaciones imposibles en frío."

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
tipo: input

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

variables:
  metal: uno_de(["hierro dulce", "acero inoxidable", "acero al carbono"])

respuesta: "acero inoxidable"
tipo: completar

enunciado: "El {metal} es difícil de forjar tradicionalmente debido a su alta resistencia y conductividad térmica diferente, a menudo requiriendo hornos especiales."

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

variables:
  definicion: uno_de(["estirar sin romperse", "golpear sin romperse", "ser magnético"])

respuesta: "estirar sin romperse"
tipo: completar

enunciado: "La {definicion} es la propiedad que hace al hierro dulce ideal para estirar alambres o varillas."

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

variables:
  sintoma: uno_de(["se vuelve negro", "se vuelve frágil y se deshace", "se vuelve magnético"])

respuesta: "se vuelve frágil y se deshace"
tipo: completar

enunciado: "Si el metal se 'quema', su estructura interna se oxida entre los granos, haciendo que {sintoma} al golpearlo."

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

variables:
  relacion: uno_de(["inversa", "directa", "nula"])

respuesta: "directa"
tipo: completar

enunciado: "En general, a mayor contenido de carbono en el acero, mayor será su {relacion} con la dureza alcanzable."

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

variables:
  instrumento: uno_de(["termopar", "pírometro óptico", "ojos del herrero"])

respuesta: "ojos del herrero"
tipo: completar

enunciado: "Tradicionalmente, el {instrumento} principal para medir la temperatura en la forja es la experiencia visual del herrero."

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

variables:
  ventaja: uno_de(["alta resistencia a la tracción", "extrema ductilidad", "alta dureza"])

respuesta: "extrema ductilidad"
tipo: completar

enunciado: "La principal ventaja del hierro dulce sobre el acero de bajo carbono en trabajos decorativos es su {ventaja}."

explicacion: |
  La ductilidad permite curvas cerradas y deformaciones complejas sin riesgo de fractura, algo más difícil con aceros.
```
