# Economia — tipos de sociedades (cuestionario, 27 preguntas VBLang)

> Tema: `economia/tipos-de-sociedades`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  num_socios_min: 2

respuesta: "dos"
tipo: input

enunciado: "Para constituir una sociedad, se requiere como mínimo la participación de {num_socios_min} personas."

explicacion: |
  Por definición legal y económica, una sociedad implica la reunión de dos o más personas que aportan bienes o trabajo para realizar una actividad económica común. El comercio individual, en cambio, es ejercido por una sola persona.
```

### 2 — pregunta 2

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "reparto"]

variables:
  total_utilidad: random(100000, 1000000)
  porcentaje_socio_a: random(30, 60)
  porcentaje_socio_b: 100 - porcentaje_socio_a

respuesta: "{redondear(total_utilidad * porcentaje_socio_a / 100, 0)}"
tipo: input

enunciado: "Si una sociedad obtiene {total_utilidad} en utilidades y el Socio A tiene un {porcentaje_socio_a}% de participación, ¿cuánto le corresponde recibir (valor entero)?"

explicacion: |
  Las utilidades se reparten generalmente en proporción al capital aportado o según lo establecido en el contrato social. El cálculo es directo: Total * Porcentaje. Esto ilustra cómo la estructura societaria define el flujo de beneficios.
```

### 3 — pregunta 3

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["gestion", "administracion"]

variables:
  tipo_sociedad: uno_de(["S.A.", "S.R.L."])

respuesta: "S.A."
tipo: completar

enunciado: "En la sociedad {tipo_sociedad}, es común que los propietarios (accionistas/socios) deleguen la administración diaria en un directorio o gerente profesional, separando la propiedad de la gestión."

explicacion: |
  En las S.A., especialmente las grandes, la propiedad (acciones) y la gestión (directorio) suelen estar separadas. En las S.R.L., es más frecuente que los socios participen directamente en la gestión o la controlen de forma más directa.
```

### 4 — pregunta 4

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["srl", "socios"]

variables:
  min_socios: 2
  max_socios: 50

respuesta: "entre " + min_socios + " y " + max_socios
tipo: completar

enunciado: "La ley argentina establece que una S.R.L. debe tener un número de socios comprendido entre {min_socios} y {max_socios}."

explicacion: |
  La Ley General de Sociedades (y su precursora) regula que las S.R.L. deben tener entre 2 y 50 socios. Si quedan con uno solo, debe transformarse en sociedad unipersonal o disolverse. Si supera el límite, debe convertirse en S.A.
```

### 5 — pregunta 5

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["sa", "inversion"]

variables:
  cantidad_inversores: random(10, 100)

respuesta: "muchos"
tipo: completar

enunciado: "Las S.A. son ideales cuando se necesita atraer a {cantidad_inversores} inversores que no participan en la gestión diaria."

explicacion: |
  La estructura accionaria permite dispersar la propiedad entre muchos inversores. Estos aportan capital pero delegan la gestión operativa en profesionales (directorios), lo que es crucial para proyectos que requieren grandes capitales pero no cuentan con la confianza personal entre todos los aportantes.
```

### 6 — pregunta 6

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["sociedad", "definicion", "concepto"]

variables:
  socios: random(2, 5)

respuesta: "sociedad"
tipo: completar

enunciado: "Cuando {socios} o más personas deciden trabajar juntas para obtener ganancias, se constituyen en una ________."

explicacion: |
  La unión de dos o más personas con fines lucrativos se denomina sociedad. Esto permite reunir capitales y conocimientos.
```

### 7 — pregunta 7

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SRL", "responsabilidad", "limitada"]

variables:
  capital: random(100000, 500000)

respuesta: "limitado"
tipo: completar

enunciado: "En una S.R.L., la responsabilidad de los socios se limita al {capital} pesos que han aportado como capital."

explicacion: |
  La característica clave de la S.R.L. es que los socios no responden con su patrimonio personal, solo con lo aportado a la empresa.
```

### 8 — pregunta 8

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "patrimonio", "riesgo"]

variables:
  escenario: uno_de(["unipersonal", "SRL"])

respuesta: "todo su patrimonio personal"
tipo: completar

enunciado: "Si el negocio es de un comerciante unipersonal, responde por las deudas con {escenario}."

explicacion: |
  El comerciante unipersonal responde con todo su patrimonio personal. En cambio, en una S.R.L. la responsabilidad está limitada al capital aportado.
```

### 9 — pregunta 9

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "participacion", "calculos"]

variables:
  capital_total: random(100, 1000) * 1000
  aporte_socio: random(10, 50) * 1000
  porcentaje: redondear((aporte_socio / capital_total) * 100, 0)

respuesta: porcentaje
tipo: input

enunciado: "Si el capital total de una S.R.L. es {capital_total} pesos y un socio aporta {aporte_socio} pesos, ¿qué porcentaje de la sociedad posee?"

explicacion: |
  El porcentaje se calcula dividiendo el aporte individual por el capital total y multiplicando por 100.
```

### 10 — pregunta 10

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["SA", "inversion", "escala"]

variables:
  monto: random(1000000, 5000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para un proyecto que requiere una inversión inicial de {monto} pesos y atrae a muchos inversores, la estructura más adecuada es una ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son ideales para grandes proyectos que requieren mucha inversión y permiten la negociación de acciones.
```

### 11 — pregunta 11

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "directores", "SA"]

variables:
  rol: uno_de(["accionistas", "directores"])

respuesta: "directores"
tipo: completar

enunciado: "En una S.A., los inversores suelen delegar la administración diaria en los {rol}."

explicacion: |
  En las S.A., los accionistas no participan necesariamente en la gestión diaria; esta queda a cargo de un directorio.
```

### 12 — pregunta 12

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ventajas", "recursos", "capital"]

variables:
  recurso: uno_de(["capitales", "conocimientos", "recursos"])

respuesta: "reunir"
tipo: completar

enunciado: "Una ventaja principal de la sociedad es la capacidad de ________ {recurso} de varios actores."

explicacion: |
  La sociedad permite reunir capitales, conocimientos y recursos de varios actores, facilitando proyectos de mayor envergadura.
```

### 13 — pregunta 13

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "definicion", "legal"]

variables:
  numero_socios: 1

respuesta: "una sola persona"
tipo: completar

enunciado: "La sociedad unipersonal permite que ________ constituya una sociedad, combinando flexibilidad y protección patrimonial."

explicacion: |
  La sociedad unipersonal es una figura legal que permite a una sola persona constituir una sociedad con patrimonio separado.
```

### 14 — pregunta 14

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["identificacion", "responsabilidad", "SRL"]

variables:
  tipo_respuesta: uno_de(["limitada", "ilimitada"])

respuesta: "limitada"
tipo: completar

enunciado: "Si la responsabilidad de los socios es {tipo_respuesta} al capital aportado, es probable que se trate de una S.R.L."

explicacion: |
  La S.R.L. se caracteriza por la responsabilidad limitada de los socios al capital que han aportado.
```

### 15 — pregunta 15

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["perdida", "capital", "SRL"]

variables:
  aporte: random(5000, 50000)

respuesta: aporte
tipo: input

enunciado: "En una S.R.L., si el socio aporta {aporte} pesos y la empresa quiebra con deudas impagables, ¿cuál es su pérdida máxima?"

explicacion: |
  En una S.R.L., la pérdida máxima del socio es el capital que aportó. No responde con su patrimonio personal.
```

### 16 — pregunta 16

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "capital", "acciones"]

variables:
  capital: random(1000000, 10000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Una empresa con capital dividido en acciones y un monto superior a {capital} pesos suele constituirse como ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son el formato estándar para grandes capitales divididos en acciones negociables.
```

### 17 — pregunta 17

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["accionistas", "gestion", "SA"]

variables:
  participacion: uno_de(["directa", "indirecta"])

respuesta: "indirecta"
tipo: completar

enunciado: "En una S.A., los accionistas suelen tener participación ________ en la gestión diaria."

explicacion: |
  Los accionistas de una S.A. generalmente no participan directamente en la gestión; delegan esa función a los directores.
```

### 18 — pregunta 18

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ganancias", "fines", "sociedad"]

variables:
  fin: uno_de(["lucro", "filantropia"])

respuesta: "lucro"
tipo: completar

enunciado: "Las sociedades se constituyen con el fin de obtener ________."

explicacion: |
  El propósito fundamental de una sociedad económica es la obtención de ganancias o lucro.
```

### 19 — pregunta 19

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "distribucion", "calculos"]

variables:
  utilidad: random(100000, 1000000)
  porcentaje_socio: random(10, 50)
  monto_socio: redondear(utilidad * (porcentaje_socio / 100), 0)

respuesta: monto_socio
tipo: input

enunciado: "Si la sociedad obtuvo {utilidad} pesos de utilidad y un socio tiene el {porcentaje_socio}% de participación, ¿cuánto le corresponde?"

explicacion: |
  Se calcula el porcentaje de la utilidad total según la participación accionaria o societaria del socio.
```

### 20 — pregunta 20

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "diferencia", "SRL", "SA"]

variables:
  tipo_sociedad: uno_de(["SRL", "SA"])

respuesta: "socios"
tipo: completar

enunciado: "En una {tipo_sociedad}, la gestión suele estar más directamente vinculada a los socios o administradores designados, a diferencia de la S.A."

explicacion: |
  En la S.R.L., la gestión es más cercana a los socios, mientras que en la S.A. hay una separación clara entre propiedad (accionistas) y gestión (directores).
```

### 21 — pregunta 21

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["acciones", "identificacion", "SA"]

variables:
  instrumento: uno_de(["acciones", "cuotas"])

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Si el capital se divide en {instrumento}, la sociedad es una Sociedad Anónima."

explicacion: |
  La división del capital en acciones es la característica distintiva de las Sociedades Anónimas (S.A.).
```

### 22 — pregunta 22

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["riesgo", "unipersonal", "patrimonio"]

variables:
  activo: uno_de(["casa", "ahorros", "auto"])

respuesta: "todo su patrimonio"
tipo: completar

enunciado: "En el comercio unipersonal, el dueño responde con {activo} y el resto de su patrimonio por las deudas."

explicacion: |
  El comerciante unipersonal responde ilimitadamente con todo su patrimonio personal por las deudas del negocio.
```

### 23 — pregunta 23

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "resta", "SRL"]

variables:
  total: random(200000, 1000000)
  aportado: random(50000, total - 10000)
  restante: total - aportado

respuesta: restante
tipo: input

enunciado: "Si el capital de una S.R.L. es {total} y un socio aportó {aportado}, ¿cuánto falta para completar el capital?"

explicacion: |
  Se resta el aporte realizado del capital total para determinar el monto restante a completar.
```

### 24 — pregunta 24

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["separacion", "patrimonio", "proteccion"]

variables:
  beneficio: uno_de(["proteger", "ocultar"])

respuesta: "proteger"
tipo: completar

enunciado: "La separación patrimonial en sociedades como la S.R.L. sirve para ________ el patrimonio personal de los socios."

explicacion: |
  La separación patrimonial protege los bienes personales de los socios de las deudas de la empresa.
```

### 25 — pregunta 25

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "inversores", "escala"]

variables:
  cantidad: random(100, 1000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para atraer a {cantidad} inversores que no participan en la gestión, se utiliza una ________."

explicacion: |
  Las S.A. permiten la captación de gran cantidad de inversores mediante la emisión de acciones, sin que estos participen en la gestión.
```

### 26 — pregunta 26

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["socios", "minimo", "definicion"]

variables:
  minimo: 2

respuesta: minimo
tipo: input

enunciado: "¿Cuál es el número mínimo de socios para constituir una sociedad (excluyendo la sociedad unipersonal)?"

explicacion: |
  Por definición, una sociedad requiere dos o más personas. La sociedad unipersonal es una excepción legal específica.
```

### 27 — pregunta 27

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["comparacion", "SRL", "SA", "estructura"]

variables:
  estructura: uno_de(["SRL", "SA"])

respuesta: "SRL"
tipo: completar

enunciado: "La ________ es más flexible y común para PYMES, mientras que la S.A. es más compleja y para grandes capitales."

explicacion: |
  La S.R.L. es más ágil y adecuada para pequeñas y medianas empresas, mientras que la S.A. está diseñada para grandes proyectos y capital abierto.
```
