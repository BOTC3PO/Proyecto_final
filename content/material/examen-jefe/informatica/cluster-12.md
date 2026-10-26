# Examen jefe — Constructor de Redes y Páginas Web

> Logro #827. Completaste el parcial dominando las redes locales y el wifi, las bases de datos no relacionales y cómo se construye una página web con HTML, CSS y JavaScript. Pool agregado de los `cuestionario.md` ya validados de sus 3 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **69 preguntas totales** en 3/3 secciones.

---

## Sección: bases-de-datos-no-relacionales-nosql (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué significa el término NoSQL?"
opciones_explicitas:
  - "Bases de datos que no usan el modelo relacional de tablas (\"Not only SQL\")"
  - "Bases de datos sin ninguna estructura"
  - "Un reemplazo obligatorio de SQL"
  - "Un lenguaje de programación"
respuesta: "Bases de datos que no usan el modelo relacional de tablas (\"Not only SQL\")"

explicacion: |
  No significa que sean mejores ni que no tengan estructura.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Cómo guarda los datos una base de tipo clave-valor?"
opciones_explicitas:
  - "En pares clave y valor, como un diccionario"
  - "En tablas con filas y columnas"
  - "En nodos y relaciones"
  - "En archivos de texto"
respuesta: "En pares clave y valor, como un diccionario"

explicacion: |
  Redis es un ejemplo.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué guarda una base de datos de documentos como MongoDB?"
opciones_explicitas:
  - "Documentos tipo JSON con campos anidados"
  - "Pares clave-valor planos"
  - "Solo imágenes"
  - "Solo números"
respuesta: "Documentos tipo JSON con campos anidados"

explicacion: |
  Un documento puede incluir listas dentro del mismo registro.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Para qué problema conviene una base de datos de grafos?"
opciones_explicitas:
  - "Redes sociales y recomendaciones basadas en relaciones"
  - "Facturación contable"
  - "Almacenar archivos grandes"
  - "Cálculos matemáticos"
respuesta: "Redes sociales y recomendaciones basadas en relaciones"

explicacion: |
  Guarda nodos y relaciones entre ellos, como Neo4j.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué tipo de base NoSQL es Cassandra?"
opciones_explicitas:
  - "Columnar"
  - "De grafos"
  - "De clave-valor"
  - "Relacional"
respuesta: "Columnar"

explicacion: |
  Se usa para volúmenes enormes y series de tiempo.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué necesidad impulsó el desarrollo de las bases NoSQL?"
opciones_explicitas:
  - "Manejar enormes volúmenes de datos y repartirlos en muchos servidores"
  - "Eliminar las computadoras personales"
  - "Evitar el uso de Internet"
  - "Reemplazar los archivos de texto"
respuesta: "Manejar enormes volúmenes de datos y repartirlos en muchos servidores"

explicacion: |
  El reparto horizontal es más fácil con modelos simples.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué significa tener un esquema flexible?"
opciones_explicitas:
  - "Que documentos de la misma colección pueden tener campos distintos"
  - "Que la base cambia sola de tipo"
  - "Que no se pueden consultar"
  - "Que solo acepta texto"
respuesta: "Que documentos de la misma colección pueden tener campos distintos"

explicacion: |
  Pero el control de la estructura pasa a la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué es la consistencia eventual?"
opciones_explicitas:
  - "Que las copias de un dato pueden diferir un momento y luego convergen"
  - "Que los datos nunca cambian"
  - "Que se aplica sólo a bancos"
  - "Que todas las copias son idénticas siempre"
respuesta: "Que las copias de un dato pueden diferir un momento y luego convergen"

explicacion: |
  Es característica del modelo BASE.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué propiedades considera el teorema CAP?"
opciones_explicitas:
  - "Consistencia, Disponibilidad y Tolerancia a particiones"
  - "Capacidad, Acceso y Precisión"
  - "Cifrado, Autenticación y Privacidad"
  - "Cálculo, Algoritmo y Programa"
respuesta: "Consistencia, Disponibilidad y Tolerancia a particiones"

explicacion: |
  En un corte de red hay que elegir entre priorizar la consistencia o la disponibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Para cuál de estos casos suele convenir más una base relacional?"
opciones_explicitas:
  - "Transacciones bancarias que exigen consistencia estricta"
  - "Un caché de sesiones web"
  - "Una red de contactos"
  - "Millones de lecturas rápidas sin relaciones"
respuesta: "Transacciones bancarias que exigen consistencia estricta"

explicacion: |
  Las transacciones ACID son su punto fuerte.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué es escalar horizontalmente?"
opciones_explicitas:
  - "Repartir los datos en muchas máquinas"
  - "Comprar una máquina más potente"
  - "Borrar datos antiguos"
  - "Cambiar el lenguaje de consulta"
respuesta: "Repartir los datos en muchas máquinas"

explicacion: |
  Escalar verticalmente es usar un equipo más potente.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: mc
enunciado: "¿Qué tipo de base NoSQL es Redis?"
opciones_explicitas:
  - "Clave-valor"
  - "Documentos"
  - "Grafos"
  - "Columnar"
respuesta: "Clave-valor"

explicacion: |
  Se usa mucho como caché.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "Las bases NoSQL son siempre mejores que las relacionales."

explicacion: |
  Son herramientas distintas para necesidades distintas.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "NoSQL significa que los datos no tienen ninguna estructura."

explicacion: |
  Tienen estructura, aunque más flexible o distinta de las tablas.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Es común combinar bases relacionales y NoSQL en una misma aplicación."

explicacion: |
  Cada una se usa donde rinde mejor.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Un documento de MongoDB puede contener una lista de pedidos dentro del registro de un cliente."

explicacion: |
  Eso evita uniones pero repite información.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: falso

enunciado: "Todas las bases NoSQL ofrecen transacciones ACID estrictas por defecto."

explicacion: |
  Muchas priorizan disponibilidad y consistencia eventual.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: vf
respuesta: verdadero

enunciado: "Según CAP, en un corte de comunicación entre nodos hay que elegir entre consistencia y disponibilidad."

explicacion: |
  Las particiones pueden ocurrir en cualquier red.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "NoSQL suele leerse como Not only ___."
respuestas_validas:
  - "SQL"
  - "sql"

explicacion: |
  No se opone a SQL, lo complementa.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "basico"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "MongoDB es una base de datos orientada a ___."
respuestas_validas:
  - "documentos"

explicacion: |
  Guarda documentos tipo JSON.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "intermedio"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "Neo4j es una base de datos de ___."
respuestas_validas:
  - "grafos"

explicacion: |
  Guarda nodos y relaciones.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "El teorema CAP fue propuesto por Eric ___."
respuestas_validas:
  - "Brewer"
  - "brewer"

explicacion: |
  Habla de sistemas distribuidos.
```

```
metadata:
  materia: "informatica"
  tema: "bases_de_datos_no_relacionales_nosql"
  nivel: "avanzado"
  tags: ["bases_de_datos", "nosql"]

tipo: completar
enunciado: "En el modelo BASE se acepta la consistencia ___."
respuestas_validas:
  - "eventual"

explicacion: |
  Las copias convergen con el tiempo.
```

## Sección: como-se-construye-una-pagina-web-html-css-javascript (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Cuál es la función de HTML en una página web?"
opciones_explicitas:
  - "Definir la estructura y el contenido"
  - "Definir los colores y el diseño"
  - "Programar el comportamiento interactivo"
  - "Almacenar los datos del usuario"
respuesta: "Definir la estructura y el contenido"

explicacion: |
  HTML es el esqueleto de la página.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Para qué se usa CSS?"
opciones_explicitas:
  - "Para definir la presentación: colores, tipografía y disposición"
  - "Para guardar datos en una base"
  - "Para enviar correos"
  - "Para traducir nombres de dominio"
respuesta: "Para definir la presentación: colores, tipografía y disposición"

explicacion: |
  CSS describe el aspecto de los elementos.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué aporta JavaScript a una página web?"
opciones_explicitas:
  - "El comportamiento: reaccionar a clics y modificar contenido"
  - "Solo las imágenes"
  - "El nombre de dominio"
  - "El cable de red"
respuesta: "El comportamiento: reaccionar a clics y modificar contenido"

explicacion: |
  Es un lenguaje de programación.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "Al escribir una dirección en el navegador, ¿qué ocurre primero?"
opciones_explicitas:
  - "Se consulta el DNS para obtener la dirección IP"
  - "El servidor dibuja la página"
  - "Se instala el sitio"
  - "Se descarga el CSS"
respuesta: "Se consulta el DNS para obtener la dirección IP"

explicacion: |
  Luego se envía la petición HTTP al servidor.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué suele devolver el servidor ante la petición de una página?"
opciones_explicitas:
  - "Un archivo HTML y otros recursos asociados"
  - "Solo una imagen"
  - "Un programa instalable"
  - "Una dirección MAC"
respuesta: "Un archivo HTML y otros recursos asociados"

explicacion: |
  El navegador pide luego los estilos, imágenes y scripts.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué es el DOM?"
opciones_explicitas:
  - "Un árbol de objetos que representa la página y que se puede modificar"
  - "Un lenguaje de estilos"
  - "Un tipo de servidor"
  - "Un protocolo de red"
respuesta: "Un árbol de objetos que representa la página y que se puede modificar"

explicacion: |
  JavaScript lo usa para cambiar la página.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Para qué sirve el atributo alt de una imagen?"
opciones_explicitas:
  - "Para dar un texto alternativo que lee un lector de pantalla"
  - "Para cambiar el tamaño"
  - "Para elegir el color"
  - "Para enlazar otra página"
respuesta: "Para dar un texto alternativo que lee un lector de pantalla"

explicacion: |
  Mejora la accesibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué contiene la sección body de un documento HTML?"
opciones_explicitas:
  - "Lo que se ve en la página"
  - "Solo información interna como el título del documento"
  - "Los estilos del navegador"
  - "El código del servidor"
respuesta: "Lo que se ve en la página"

explicacion: |
  El head tiene información sobre la página.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Con qué símbolo se escribe en CSS un selector de clase?"
opciones_explicitas:
  - "Punto"
  - "Numeral"
  - "Arroba"
  - "Asterisco"
respuesta: "Punto"

explicacion: |
  El identificador se escribe con numeral.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué se compara cuando dos reglas CSS chocan?"
opciones_explicitas:
  - "La especificidad y el orden"
  - "El tamaño del archivo"
  - "El color elegido"
  - "La velocidad del servidor"
respuesta: "La especificidad y el orden"

explicacion: |
  Es la cascada de CSS.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué etiqueta HTML se usa para crear un enlace?"
opciones_explicitas:
  - "a"
  - "img"
  - "p"
  - "h1"
respuesta: "a"

explicacion: |
  Lleva el atributo href con el destino.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué es usar HTML semántico?"
opciones_explicitas:
  - "Elegir las etiquetas por su significado, como h1, nav y ul"
  - "Escribir todo en una sola línea"
  - "Usar solo la etiqueta div"
  - "Evitar los títulos"
respuesta: "Elegir las etiquetas por su significado, como h1, nav y ul"

explicacion: |
  Ayuda a la accesibilidad y a los buscadores.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "En la regla p {{ color: blue; }}, ¿qué es \"color\"?"
opciones_explicitas:
  - "La propiedad"
  - "El selector"
  - "El valor"
  - "La clase"
respuesta: "La propiedad"

explicacion: |
  \"p\" es el selector y \"blue\" es el valor.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: falso

enunciado: "HTML es un lenguaje de programación como JavaScript."

explicacion: |
  HTML describe contenido; no tiene bucles ni condiciones.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Es recomendable escribir el CSS en un archivo aparte para reutilizarlo en varias páginas."

explicacion: |
  Facilita el mantenimiento.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Cada elemento de una página se representa como una caja con contenido, relleno, borde y margen."

explicacion: |
  Es el modelo de caja de CSS.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "En una página estática el servidor entrega siempre el mismo archivo."

explicacion: |
  En una dinámica el contenido se arma según el usuario o los datos.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Los navegadores incluyen herramientas para desarrolladores que permiten ver el HTML y probar CSS."

explicacion: |
  Suelen abrirse con la tecla F12.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Un clic es un ejemplo de evento al que puede responder JavaScript."

explicacion: |
  Los eventos permiten la interactividad.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "HTML significa HyperText ___ Language."
respuestas_validas:
  - "Markup"
  - "markup"

explicacion: |
  Es un lenguaje de marcado.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "El programa que pide, interpreta y dibuja la página es el ___."
respuestas_validas:
  - "navegador"

explicacion: |
  Hace de cliente frente al servidor.
```

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "El lenguaje que agrega interactividad a una página es ___."
respuestas_validas:
  - "JavaScript"
  - "javascript"
  - "Javascript"

explicacion: |
  Se ejecuta en el navegador.
```

## Sección: redes-locales-lan-wifi-y-topologias (24 preguntas)

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué es una LAN?"
opciones_explicitas:
  - "Una red que conecta dispositivos en un espacio limitado, como una casa o una escuela"
  - "Una red que cubre todo un país"
  - "Un tipo de cable de fibra óptica"
  - "Un programa para navegar"
respuesta: "Una red que conecta dispositivos en un espacio limitado, como una casa o una escuela"

explicacion: |
  LAN significa Local Area Network, red de área local.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cómo se describe a Internet?"
opciones_explicitas:
  - "Como una red de redes"
  - "Como una LAN gigante"
  - "Como un único servidor"
  - "Como un tipo de router"
respuesta: "Como una red de redes"

explicacion: |
  Conecta muchas redes (WAN) entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "En una topología en estrella, ¿qué ocurre si falla el dispositivo central?"
opciones_explicitas:
  - "Cae toda la red"
  - "Solo se desconecta un equipo"
  - "No pasa nada"
  - "La red pasa a ser un bus"
respuesta: "Cae toda la red"

explicacion: |
  Si falla un equipo, los demás siguen funcionando.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué ocurre en una topología de bus si falla el cable compartido?"
opciones_explicitas:
  - "Toda la red deja de funcionar"
  - "Solo falla un equipo"
  - "La red se repara sola"
  - "Se convierte en malla"
respuesta: "Toda la red deja de funcionar"

explicacion: |
  En el bus todos comparten un único cable.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué topología es la más usada hoy en las redes locales?"
opciones_explicitas:
  - "Estrella"
  - "Bus"
  - "Anillo"
  - "Punto a punto"
respuesta: "Estrella"

explicacion: |
  Los equipos se conectan a un switch o a un punto de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cómo decide un switch a qué equipo enviar cada mensaje?"
opciones_explicitas:
  - "Mirando la dirección MAC de destino"
  - "Mirando el color del cable"
  - "Enviándolo a todos los equipos"
  - "Usando el nombre de la red Wi-Fi"
respuesta: "Mirando la dirección MAC de destino"

explicacion: |
  Un hub, en cambio, repite todo a todos.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuál es la función principal de un router?"
opciones_explicitas:
  - "Unir redes distintas y decidir por dónde enviar los paquetes"
  - "Amplificar la señal eléctrica"
  - "Guardar archivos"
  - "Convertir texto en voz"
respuesta: "Unir redes distintas y decidir por dónde enviar los paquetes"

explicacion: |
  El router de casa une la LAN con Internet.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuántos bits tiene una dirección MAC?"
opciones_explicitas:
  - "48"
  - "32"
  - "16"
  - "128"
respuesta: "48"

explicacion: |
  Es la dirección física de la placa de red.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué familia de estándares IEEE corresponde al Wi-Fi?"
opciones_explicitas:
  - "802.11"
  - "802.3"
  - "802.5"
  - "802.16"
respuesta: "802.11"

explicacion: |
  802.3 es Ethernet, la red por cable.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué ventaja tiene la banda de 2,4 GHz frente a la de 5 GHz?"
opciones_explicitas:
  - "Mayor alcance y mejor paso por paredes"
  - "Mayor velocidad"
  - "Menos dispositivos usándola"
  - "Mayor seguridad"
respuesta: "Mayor alcance y mejor paso por paredes"

explicacion: |
  La de 5 GHz es más rápida pero llega menos lejos.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué es el SSID de una red Wi-Fi?"
opciones_explicitas:
  - "El nombre con que se identifica la red"
  - "La contraseña de la red"
  - "La velocidad de la red"
  - "La dirección MAC del router"
respuesta: "El nombre con que se identifica la red"

explicacion: |
  Es lo que aparece al buscar redes.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué hace el servicio DHCP del router?"
opciones_explicitas:
  - "Asigna direcciones IP automáticamente"
  - "Cifra el tráfico"
  - "Descarga páginas web"
  - "Mide la velocidad de Internet"
respuesta: "Asigna direcciones IP automáticamente"

explicacion: |
  Evita conflictos de dirección entre equipos.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué protocolo de seguridad Wi-Fi es obsoleto e inseguro?"
opciones_explicitas:
  - "WEP"
  - "WPA2"
  - "WPA3"
  - "Ninguno"
respuesta: "WEP"

explicacion: |
  Hoy se usan WPA2 y WPA3.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuál de estas es una dirección IP privada?"
opciones_explicitas:
  - "192.168.1.20"
  - "8.8.8.8"
  - "200.45.10.3"
  - "1.1.1.1"
respuesta: "192.168.1.20"

explicacion: |
  Los rangos privados son 10.x.x.x, 172.16 a 172.31 y 192.168.x.x.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Para qué sirve NAT en el router de una casa?"
opciones_explicitas:
  - "Para que varios equipos con IP privada salgan a Internet con una sola IP pública"
  - "Para cifrar el Wi-Fi"
  - "Para asignar nombres de dominio"
  - "Para amplificar la señal"
respuesta: "Para que varios equipos con IP privada salgan a Internet con una sola IP pública"

explicacion: |
  NAT traduce direcciones entre la red privada y la pública.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: falso

enunciado: "Un hub envía cada mensaje solo al equipo destinatario."

explicacion: |
  El hub repite todo a todos; el switch envía al destinatario.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "Una WAN conecta redes ubicadas a gran distancia."

explicacion: |
  Internet es la WAN más grande.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "El cable UTP con conector RJ45 es muy usado en las redes Ethernet."

explicacion: |
  Se usan categorías como Cat5e o Cat6.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "En una topología de malla hay varios caminos posibles entre los equipos."

explicacion: |
  Es más cara pero tolera mejor las fallas.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: vf
respuesta: falso

enunciado: "Una red Wi-Fi no necesita cifrado porque la señal no sale de la casa."

explicacion: |
  La señal inalámbrica se puede escuchar desde afuera, por eso se cifra.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "La puerta de enlace es el router al que se envía el tráfico que sale de la LAN."

explicacion: |
  Suele ser el router de la casa.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "LAN significa Local ___ Network."
respuestas_validas:
  - "Area"
  - "area"

explicacion: |
  Local Area Network.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "En la topología en estrella, los equipos se conectan a un dispositivo central, como un ___."
respuestas_validas:
  - "switch"
  - "Switch"
  - "punto de acceso"
  - "router"

explicacion: |
  También puede ser un punto de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "La banda de ___ GHz del Wi-Fi ofrece más velocidad pero menos alcance."
respuestas_validas:
  - "5"

explicacion: |
  La de 2,4 GHz tiene más alcance.
```

