# Oficios — herramientas carpinteria aluminio (cuestionario, 29 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/herramientas-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["herramientas", "discos", "carburo"]

variables:
  material: "aluminio"
  tipo_disco: uno_de(["carburo de tungsteno", "carburo de wolframio"])

respuesta: "carburo de tungsteno"
tipo: completar

enunciado: "Para cortar perfiles de {material} sin sobrecalentamiento ni deformación, es crucial utilizar discos de corte fabricados en {tipo_disco} con dientes finos."

explicacion: |
  El carburo de tungsteno (o wolframio) es el material estándar para discos de corte en aluminio debido a su dureza y resistencia al calor generado por la fricción. Los dientes finos previenen el desgarro del material blando.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "lubricante", "friccion"]

variables:
  usar_lubricante: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Al realizar cortes con la sierra de ingleta en perfiles de aluminio, se debe aplicar un lubricante adecuado para reducir la fricción y prolongar la vida útil del disco."

explicacion: |
  El lubricante es esencial en el corte de aluminio para disipar el calor, reducir la fricción y evitar que el material se adhiera al disco, lo cual prolonga su vida útil y mejora la calidad del corte.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["remachadora", "union", "permanente"]

variables:
  es_permanente: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Las uniones realizadas con remaches mediante la remachadora son exclusivamente temporales y pueden desmontarse fácilmente sin dañar los perfiles."

explicacion: |
  Aunque existen remaches desmontables, la mayoría de los remaches estructurales utilizados en carpintería de aluminio son permanentes. Romperlos o extraerlos generalmente daña el remache o requiere taladrado, no siendo un desmontaje simple como un tornillo.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["fresadora", "rebajes", "ranuras"]

variables:
  tipo_corte: "rebajes"

respuesta: "rebajes"
tipo: completar

enunciado: "La fresadora no solo crea ranuras, sino también {tipo_corte} para adaptar los perfiles a componentes como sellos o uniones especiales."

explicacion: |
  Los rebajes son cavidades superficiales creadas por la fresadora para que ciertos componentes queden a ras o encajen profundamente en el perfil, asegurando un ajuste perfecto y una estética limpia.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["fresadora", "ranuras", "identificacion"]

variables:
  herramienta: "fresadora"

respuesta: "fresadora"
tipo: completar

enunciado: "La {herramienta} es la herramienta utilizada para realizar ranuras y ajustes precisos en los perfiles de aluminio, permitiendo la inserción de vidrios y sellos."

explicacion: |
  La fresadora es la herramienta clave para el mecanizado de perfiles, permitiendo crear las guías y cavidades necesarias para el ensamblaje de los componentes del cerramiento.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "sujeción", "seguridad"]

variables:
  es_critico: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Es crucial sujetar firmemente el perfil de aluminio en la mesa de la sierra de ingleta para evitar vibraciones que alteren la precisión del corte."

explicacion: |
  El aluminio es ligero pero puede vibrar si no está bien sujeto. Estas vibraciones causan cortes irregulares, desviaciones angulares y pueden ser peligrosas para el operario.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["remachadora", "union", "identificacion"]

variables:
  herramienta: "remachadora"

respuesta: "remachadora"
tipo: completar

enunciado: "Para realizar uniones mecánicas mediante remaches en perfiles de aluminio, se utiliza la {herramienta}."

explicacion: |
  La remachadora es la herramienta específica diseñada para deformar y fijar los remaches, creando una unión sólida entre los perfiles de aluminio.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "calibración", "precisión"]

variables:
  objetivo: "ensamblaje"

respuesta: "ensamblaje"
tipo: completar

enunciado: "Verificar el ángulo de corte antes del trabajo definitivo asegura que el {objetivo} final sea exitoso y la instalación tenga calidad."

explicacion: |
  La calibración previa evita errores acumulados. Si los ángulos son incorrectos, las piezas no encajan durante el ensamblaje, comprometiendo la estanqueidad y la estética del producto final.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["sierra", "discos", "dientes"]

variables:
  es_necesario: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Los discos de corte para aluminio deben tener dientes finos para evitar el desgarro del material y lograr un acabado limpio."

explicacion: |
  Los dientes finos permiten un corte más suave y preciso en el aluminio, un material blando que tiende a adherirse y deshilacharse si se usan dientes gruesos o discos inadecuados.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["remaches", "materiales", "compatibilidad"]

variables:
  material: "aluminio"

respuesta: "aluminio"
tipo: completar

enunciado: "Para evitar la corrosión galvánica, los remaches utilizados en perfiles de aluminio deben ser preferiblemente de {material} o acero inoxidable pasivado."

explicacion: |
  El uso de remaches del mismo material o compatibles evita la corrosión galvánica, que ocurre cuando dos metales diferentes están en contacto en presencia de un electrolito, debilitando la unión.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["remachadora", "union", "temporal"]

variables:
  herramienta: "remachadora"

respuesta: "remachadora"
tipo: completar

enunciado: "La {herramienta} permite realizar uniones mecánicas que pueden ser temporales o permanentes, dependiendo del tipo de remache utilizado."

explicacion: |
  La remachadora es la herramienta versátil que permite fijar distintos tipos de remaches, ofreciendo flexibilidad en el tipo de unión (temporal o permanente) requerida por el diseño.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["fresadora", "profundidad", "control"]

variables:
  es_vital: verdadero

respuesta: verdadero
tipo: vf

enunciado: "El control sobre la profundidad y el ancho de la ranura en la fresadora es vital para garantizar que las uniones sean estancas y estéticamente agradables."

explicacion: |
  Un error en la profundidad puede dejar el sello demasiado suelto (filtraciones) o demasiado apretado (daño al sello o al perfil), afectando tanto la funcionalidad como la estética.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["sierra", "ingletar", "corte"]

respuesta: "sierra de ingletar"
tipo: completar

enunciado: "¿Qué herramienta se utiliza principalmente para realizar cortes angulares precisos en perfiles de aluminio?"

explicacion: |
  La sierra de ingletar es la herramienta clave para cortar perfiles de aluminio en ángulos específicos, como 90 grados, para formar esquinas perfectas.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "lubricante", "friccion"]

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable aplicar un lubricante adecuado durante el corte con sierra de ingletar para reducir la fricción."

explicacion: |
  Aplicar lubricante reduce la fricción, evita el sobrecalentamiento del disco y prolonga su vida útil, además de mejorar la calidad del corte.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "angulo", "calculos"]

variables:
  angulo_total: 90
  angulo_pieza: random(10, 80)

respuesta: "{angulo_total} - {angulo_pieza}"
tipo: input

enunciado: "Si necesitas unir dos perfiles para formar una esquina de {angulo_total} grados, y una pieza ya está cortada a {angulo_pieza} grados, ¿a qué ángulo debe cortarse la otra pieza para completar la unión?"

explicacion: |
  Para formar una esquina de 90 grados, la suma de los ángulos de corte de las dos piezas debe ser 90. Por lo tanto, el segundo corte es 90 menos el primero.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "basico"
  tags: ["remachadora", "union", "mecanica"]

respuesta: "remachadora"
tipo: completar

enunciado: "¿Qué herramienta es indispensable para realizar uniones mecánicas temporales o permanentes mediante remaches en la carpintería de aluminio?"

explicacion: |
  La remachadora es la herramienta específica para instalar remaches, que sirven para unir piezas de aluminio de manera segura.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["remachadora", "cantidad", "calculos"]

variables:
  largo_perfil: random_float(1.0, 3.0)
  espaciamiento: 0.5
  cantidad: "{ceil(largo_perfil / espaciamiento)}"

respuesta: "{cantidad}"
tipo: input

enunciado: "Si tienes un perfil de {largo_perfil} metros y debes colocar remaches cada {espaciamiento} metros, ¿cuántos remaches necesitas como mínimo para cubrir toda la longitud?"

explicacion: |
  Se divide la longitud total por el espaciamiento y se redondea hacia arriba (ceil) para asegurar que toda la extensión esté cubierta.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "disco", "seguridad"]

respuesta: falso
tipo: vf

enunciado: "Se puede usar indistintamente un disco de corte para madera en la sierra de ingletar cuando se trabaja con aluminio."

explicacion: |
  No es recomendable. Los discos para madera no están diseñados para la conductividad térmica y la dureza del aluminio, lo que puede causar sobrecalentamiento, adherencia del material y cortes de mala calidad.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "longitud", "calculos"]

variables:
  largo_original: random_float(2.0, 4.0)
  ancho_disco: 3
  largo_final: "{redondear(largo_original - (ancho_disco / 1000), 2)}"

respuesta: "{largo_final}"
tipo: input

enunciado: "Un perfil de aluminio mide {largo_original} metros. Si el ancho del disco de corte es {ancho_disco} mm y necesitas un corte recto, ¿cuál es la longitud máxima aproximada que puedes obtener restando el ancho del disco?"

explicacion: |
  El disco de corte elimina material. La longitud final es la original menos el ancho del disco (convertido a metros).
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["fresadora", "union", "funcion"]

respuesta: falso
tipo: vf

enunciado: "La fresadora se utiliza principalmente para realizar uniones mecánicas permanentes con remaches."

explicacion: |
  La fresadora se usa para ranuras y rebajes. Las uniones mecánicas con remaches se realizan con la remachadora.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "area", "calculos"]

variables:
  ancho_perfil: 5
  alto_perfil: 10
  area: "{ancho_perfil * alto_perfil}"

respuesta: "{area}"
tipo: input

enunciado: "Si el perfil de aluminio tiene un ancho de {ancho_perfil} cm y un alto de {alto_perfil} cm, ¿cuál es el área de la sección transversal que corta la sierra?"

explicacion: |
  El área de la sección transversal se calcula multiplicando el ancho por el alto del perfil.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "vibracion", "precision"]

respuesta: verdadero
tipo: vf

enunciado: "Las vibraciones durante el corte con sierra de ingletar pueden alterar la precisión del corte en perfiles de aluminio."

explicacion: |
  Es crucial sujetar bien el perfil en la mesa de la sierra para evitar vibraciones que comprometan la exactitud del ángulo y la línea de corte.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "angulo", "calculos"]

variables:
  angulo_meta: 90
  angulo_cortado: random(15, 75)
  angulo_restante: "{angulo_meta - angulo_cortado}"

respuesta: "{angulo_restante}"
tipo: input

enunciado: "Para formar una esquina de {angulo_meta} grados, si ya cortaste una pieza a {angulo_cortado} grados, ¿cuántos grados debe medir el corte de la otra pieza?"

explicacion: |
  La suma de los ángulos de corte de las dos piezas que forman una esquina debe ser igual al ángulo total deseado.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "disco", "dientes"]

respuesta: verdadero
tipo: vf

enunciado: "Los discos de corte para aluminio deben tener dientes finos para evitar el sobrecalentamiento y la deformación del material."

explicacion: |
  Los dientes finos permiten un corte más limpio y generan menos calor, lo cual es vital para el aluminio que se ablanda con la temperatura.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "calibracion", "precisión"]

respuesta: verdadero
tipo: vf

enunciado: "Es importante verificar el ángulo de corte antes de realizar el trabajo definitivo, asegurándose de que la sierra esté calibrada correctamente."

explicacion: |
  Una sierra mal calibrada produce cortes inexactos, lo que compromete el ensamblaje final y la calidad de la instalación.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "tiempo", "calculos"]

variables:
  numero_cortes: random(5, 10)
  tiempo_por_corte: 0.5
  tiempo_total: "{numero_cortes * tiempo_por_corte}"

respuesta: "{tiempo_total}"
tipo: input

enunciado: "Si cada corte con la sierra de ingletar tarda aproximadamente {tiempo_por_corte} minutos, ¿cuánto tiempo tomarán {numero_cortes} cortes consecutivos?"

explicacion: |
  El tiempo total es el producto del número de cortes por el tiempo promedio de cada corte.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["aluminio", "adherencia", "herramientas"]

respuesta: verdadero
tipo: vf

enunciado: "El aluminio tiene una tendencia a adherirse a las herramientas, lo que requiere un manejo específico y lubricación."

explicacion: |
  La adherencia del aluminio al acero de las herramientas puede causar rebabas y cortes irregulares si no se usa lubricante o discos adecuados.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["sierra", "area", "calculos"]

variables:
  ancho_perfil: 4
  alto_perfil: 8
  num_cortes: random(3, 6)
  area_corte: "{ancho_perfil * alto_perfil * num_cortes}"

respuesta: "{area_corte}"
tipo: input

enunciado: "Si cada corte atraviesa un perfil de {ancho_perfil} cm de ancho y {alto_perfil} cm de alto, ¿cuál es el área total de sección transversal cortada en {num_cortes} cortes?"

explicacion: |
  El área total es el producto del área de una sección transversal por el número de cortes realizados.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_herramientas_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["sierra", "lubricante", "madera"]

respuesta: falso
tipo: vf

enunciado: "El lubricante utilizado para cortar aluminio es el mismo que se usa para cortar madera."

explicacion: |
  Los lubricantes para aluminio están diseñados para manejar la conductividad térmica y la adherencia específica de este metal, mientras que los de madera tienen otras propiedades.
```
