# Historia — Industrialización por sustitución de importaciones (ISI) (cuestionario, 22 preguntas VBLang)

> Tema: `historia/industrializacion-por-sustitucion-de-importaciones-isi`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "producir localmente lo que antes se importaba"
tipo: mc
opciones_explicitas: ["exportar más materias primas", "producir localmente lo que antes se importaba", "abrir la economía sin aranceles"]

enunciado: "La ISI (Industrialización por Sustitución de Importaciones) buscaba principalmente..."

explicacion: |
  La idea central era fabricar dentro del país los bienes manufacturados
  que antes se compraban al exterior, para generar empleo y reducir la
  dependencia económica.
```

### 2 — pregunta 2

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI alcanzó su mayor impulso en Argentina durante el primer gobierno de Juan Domingo Perón (1946-1955)."

explicacion: |
  Aunque el proceso empezó a cobrar relevancia desde la década de 1930,
  fue durante el primer peronismo cuando alcanzó su mayor impulso.
```

### 3 — pregunta 3

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["contexto"]

variables:
  evento: uno_de(["la crisis mundial de 1929", "la Segunda Guerra Mundial"])

respuesta: verdadero
tipo: vf

enunciado: "\"{evento}\" fue uno de los eventos que impulsó el surgimiento de la ISI, al interrumpir el comercio internacional."

explicacion: |
  Ambos eventos cortaron el acceso de los países latinoamericanos a
  productos industriales importados, empujando a producir localmente.
```

### 4 — pregunta 4

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["politica economica"]

variables:
  n: uno_de([1, 1])

respuesta: "aranceles altos a la importación"
tipo: mc
opciones_explicitas: ["aranceles altos a la importación", "subsidios a productos importados", "eliminación de impuestos al comercio exterior"]

enunciado: "Para proteger a las fábricas nacientes, el Estado argentino implementó principalmente..."

explicacion: |
  Los aranceles altos encarecían los productos extranjeros, incentivando
  a comprar lo producido localmente.
```

### 5 — pregunta 5

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["organismos"]

variables:
  n: uno_de([1, 1])

respuesta: "IAPI"
tipo: completar

enunciado: "El organismo estatal creado para controlar la compra de materias primas agrarias y su venta al exterior fue el ___ (Instituto Argentino de Promoción del Intercambio)."

respuestas_validas:
  - "IAPI"

explicacion: |
  El IAPI centralizaba el comercio exterior agrario, usando ese margen
  para financiar la industrialización.
```

### 6 — pregunta 6

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["nacionalizaciones"]

variables:
  servicio: uno_de(["los ferrocarriles", "las empresas de gas"])

respuesta: verdadero
tipo: vf

enunciado: "Durante la ISI, {servicio} fueron nacionalizados por el Estado argentino."

explicacion: |
  El Estado nacionalizó servicios públicos clave para fortalecer su
  control sobre la infraestructura económica del país.
```

### 7 — pregunta 7

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["estructura productiva"]

variables:
  n: uno_de([1, 1])

respuesta: "agroexportadora a una con base industrial"
tipo: mc
opciones_explicitas: ["industrial a agroexportadora", "agroexportadora a una con base industrial", "minera a financiera"]

enunciado: "Con la ISI, Argentina pasó de ser una nación principalmente..."

explicacion: |
  El país desarrolló sectores como el alimenticio, textil, químico y
  automotor, sumando una base industrial a su perfil agroexportador previo.
```

### 8 — pregunta 8

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["efectos sociales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El crecimiento del empleo industrial durante la ISI se acompañó de un movimiento sindical más fuerte, con mayor poder de negociación para los trabajadores."

explicacion: |
  El auge industrial fortaleció al movimiento obrero organizado, que ganó
  poder de negociación frente a las patronales.
```

### 9 — pregunta 9

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["debilidades estructurales"]

variables:
  n: uno_de([1, 1])

respuesta: "se volvían ineficientes al depender de la protección estatal"
tipo: mc
opciones_explicitas: ["se volvían ineficientes al depender de la protección estatal", "se volvían más competitivas que las extranjeras", "dejaban de necesitar maquinaria importada"]

enunciado: "Una debilidad estructural clave del modelo ISI era que las industrias protegidas..."

explicacion: |
  Al no competir en mercados abiertos, muchas industrias locales se
  volvían costosas e ineficientes, incapaces de competir sin protección.
```

### 10 — pregunta 10

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["restriccion externa"]

variables:
  n: uno_de([1, 1])

respuesta: "de la exportación de productos primarios"
tipo: mc
opciones_explicitas: ["de la exportación de productos primarios", "de préstamos internacionales exclusivamente", "de impuestos internos únicamente"]

enunciado: "Para conseguir los dólares necesarios para importar maquinaria industrial, la economía argentina seguía dependiendo principalmente..."

explicacion: |
  El país seguía necesitando exportar carne, trigo y maíz para conseguir
  las divisas con las que importar equipos y tecnología.
```

### 11 — pregunta 11

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["restriccion externa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una caída en los precios internacionales de la soja o la carne podía afectar directamente la capacidad argentina de importar insumos industriales durante la ISI."

explicacion: |
  Como los dólares venían de exportar productos primarios, una baja en
  sus precios reducía la capacidad de importar lo que la industria
  necesitaba, generando inflación y desabastecimiento.
```

### 12 — pregunta 12

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["declive"]

variables:
  factor: uno_de(["la ineficiencia industrial", "la deuda externa", "la hiperinflación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{factor}\" fue uno de los factores que hicieron insostenible el modelo ISI en las décadas de 1970 y 1980."

explicacion: |
  Los tres factores combinados (ineficiencia, deuda, hiperinflación)
  llevaron al declive del modelo hacia fines del siglo XX.
```

### 13 — pregunta 13

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["alcance regional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI se extendió por gran parte de América Latina en el siglo XX, y Argentina fue uno de sus ejemplos más tempranos."

explicacion: |
  No fue un fenómeno exclusivamente argentino: varios países
  latinoamericanos aplicaron modelos similares, aunque Argentina estuvo
  entre los pioneros.
```

### 14 — pregunta 14

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["industria automotriz"]

variables:
  marca: uno_de(["Ford", "Volkswagen"])

respuesta: verdadero
tipo: vf

enunciado: "La llegada de la marca \"{marca}\" a Argentina es un ejemplo del desarrollo de la industria automotriz durante la ISI."

explicacion: |
  La instalación de terminales automotrices extranjeras en el país fue
  uno de los hitos que muestran el esfuerzo por generar producción
  industrial interna.
```

### 15 — pregunta 15

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["industria siderurgica"]

variables:
  n: uno_de([1, 1])

respuesta: "Siderar"
tipo: completar

enunciado: "La empresa que ejemplifica el desarrollo de la industria siderúrgica argentina durante este período es ___."

respuestas_validas:
  - "Siderar"

explicacion: |
  Siderar es el hito mencionado como ejemplo del desarrollo de la
  industria del acero nacional en esa etapa.
```

### 16 — pregunta 16

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["propaganda"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La propaganda de la época de la ISI solía promover el consumo de productos nacionales como un acto patriótico."

explicacion: |
  Comprar lo producido en el país se presentaba como una forma de apoyar
  el desarrollo nacional, reforzando el discurso oficial.
```

### 17 — pregunta 17

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["legado"]

variables:
  n: uno_de([1, 1])

respuesta: "la estructura urbana y la distribución de la riqueza"
tipo: mc
opciones_explicitas: ["la estructura urbana y la distribución de la riqueza", "el sistema electoral vigente hoy", "el idioma oficial del país"]

enunciado: "El legado de la ISI en la Argentina contemporánea se nota especialmente en..."

explicacion: |
  La estructura urbana, la distribución de la riqueza y la identidad
  nacional están profundamente marcadas por ese período de
  industrialización.
```

### 18 — pregunta 18

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["sectores industriales"]

variables:
  sector: uno_de(["alimenticio", "textil", "químico", "automotor"])

respuesta: verdadero
tipo: vf

enunciado: "El sector \"{sector}\" fue uno de los que se desarrolló con fuerza durante la ISI en Argentina."

explicacion: |
  Estos cuatro sectores están mencionados explícitamente como los que
  ganaron peso en la nueva estructura industrial del país.
```

### 19 — pregunta 19

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["debates actuales"]

variables:
  n: uno_de([1, 1])

respuesta: "protección industrial, comercio exterior y desarrollo tecnológico"
tipo: mc
opciones_explicitas: ["protección industrial, comercio exterior y desarrollo tecnológico", "el sistema previsional exclusivamente", "la política exterior con Europa"]

enunciado: "Muchas discusiones actuales sobre... tienen sus raíces en los debates y experiencias de la era ISI."

explicacion: |
  Los debates de hoy sobre proteccionismo, apertura comercial y
  tecnología nacional se conectan directamente con lo vivido durante
  la ISI.
```

### 20 — pregunta 20

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["consumo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI permitió que las clases medias y populares se insertaran en el consumo de bienes duraderos, mejorando temporalmente su nivel de vida."

explicacion: |
  El crecimiento industrial amplió el acceso de amplios sectores sociales
  a bienes de consumo antes reservados a minorías, aunque el efecto fue
  temporal.
```

### 21 — pregunta 21

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["sigla"]

variables:
  n: uno_de([1, 1])

respuesta: "Industrialización por Sustitución de Importaciones"
tipo: completar

enunciado: "La sigla ISI significa ___."

respuestas_validas:
  - "Industrialización por Sustitución de Importaciones"

explicacion: |
  ISI es la sigla de Industrialización por Sustitución de Importaciones,
  el modelo económico que buscaba producir localmente lo antes importado.
```

### 22 — pregunta 22

```
metadata:
  materia: "historia"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["ciclo economico"]

variables:
  n: uno_de([1, 1])

respuesta: "inflación y desabastecimiento"
tipo: mc
opciones_explicitas: ["inflación y desabastecimiento", "deflación sostenida", "superávit comercial permanente"]

enunciado: "La combinación de dependencia de divisas agrarias y necesidad de importar tecnología generaba, según el modelo ISI, ciclos de..."

explicacion: |
  Cuando caían los precios de las exportaciones primarias, escaseaban
  los dólares para importar insumos, lo que derivaba en inflación y
  desabastecimiento.
```

