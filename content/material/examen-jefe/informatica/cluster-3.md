# Examen jefe — [PENDIENTE #818]

> Logro #818. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: criptografia-clave-simetrica-asimetrica-hash (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

respuesta: "misma clave"
tipo: completar
respuestas_validas:
  - "misma clave"

enunciado: "En la criptografía simétrica, se utiliza la ___ para cifrar y descifrar el mensaje."

explicacion: |
  En la criptografía simétrica, tanto el emisor como el receptor utilizan la misma clave secreta para realizar las operaciones de cifrado y descifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "clave_publica"]

variables:
  textos: ["La clave privada debe compartirse con cualquier persona para que el sistema funcione.", "La clave pública se puede distribuir libremente para que cualquiera pueda cifrar un mensaje para el dueño."]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf

enunciado: "En un sistema de clave pública (asimétrica), {textos[idx]}"

explicacion: |
  En la criptografía asimétrica, la clave pública se distribuye para cifrar, mientras que la privada se mantiene en secreto para descifrar. Compartir la clave privada rompería la seguridad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

respuesta: "integridad"
tipo: mc
opciones_explicitas: ["confidencialidad", "integridad", "autenticidad", "disponibilidad"]

enunciado: "Las funciones hash se utilizan principalmente para garantizar la ___ de los datos, asegurando que el mensaje no haya sido alterado."

explicacion: |
  Un hash es una huella digital única. Si el mensaje cambia, el hash cambia, permitiendo verificar la integridad del archivo.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["clave_privada", "clave_publica"]

respuesta_orden: ["Clave Pública", "Clave Privada"]
tipo: ordenar
opciones_explicitas: ["Clave Pública", "Clave Privada"]

enunciado: "Ordena el proceso de cifrado asimétrico para enviar un mensaje privado a alguien: el emisor usa la ___ del destinatario para cifrar, y el destinatario usa su ___ para descifrar."

explicacion: |
  En la criptografía asimétrica, el emisor utiliza la clave pública del receptor para que solo el receptor, con su clave privada correspondiente, pueda leer el mensaje.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "unidireccional"]

respuesta: "unidireccional"
tipo: completar
respuestas_validas:
  - "unidireccional"

enunciado: "Una de las propiedades fundamentales de una función hash es que es ___; es decir, es computacionalmente imposible reconstruir el mensaje original a partir del hash obtenido."

explicacion: |
  La propiedad de unidireccionalidad (o resistencia a la preimagen) es lo que impide que un atacante pueda revertir el proceso de hashing para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenarios: [["Alice envía un mensaje a Bob usando la misma clave que ambos conocen para cifrar y descifrar.", "Simétrica"], ["Alice envía un mensaje a Bob usando su clave privada para cifrar y Bob usa la clave pública de Alice para descifrar.", "Asimétrica"], ["Un sistema de comunicación donde la clave de cifrado es idéntica a la de descifrado.", "Simétrica"], ["Un sistema de firma digital donde la clave de cifrado es distinta a la de descifrado.", "Asimétrica"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si estamos ante el escenario de: {escenarios[idx][0]}, ¿qué tipo de criptografía se está utilizando?"

opciones_explicitas: ["Simétrica", "Asimétrica"]
respuesta: escenarios[idx][1]
tipo: mc

explicacion: |
  En la criptografía simétrica, se utiliza una única clave compartida para ambas operaciones. En la asimétrica, se utiliza un par de claves (pública y privada) relacionadas matemáticamente.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

enunciado: "Se aplica una función hash a un archivo de 1 GB. Si se cambia un solo bit del archivo original, el valor del hash resultante será ___."

respuestas_validas:
  - "completamente diferente"
respuesta: "completamente diferente"
tipo: completar

explicacion: |
  Una de las propiedades fundamentales de las funciones hash criptográficas es el "efecto avalancha": un cambio mínimo en la entrada produce un cambio drástico e impredecible en la salida.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["firma_digital", "asimetrica"]

enunciado: "Ordena los pasos para que Alice firme digitalmente un documento para asegurar su autenticidad:"

opciones_explicitas: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
respuesta_orden: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
tipo: ordenar

explicacion: |
  La firma digital no cifra el documento completo (que sería lento), sino el hash del documento usando la clave privada del emisor. El receptor descifra el hash con la clave pública del emisor para verificar la integridad y autoría.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "teoria"]

enunciado: "¿Es posible recuperar el mensaje original a partir de su valor hash?"

respuesta: falso
tipo: vf

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way functions). Están diseñadas para ser computacionalmente imposibles de invertir.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "verificacion"]

variables:
  hash_original: "a1b2c3d4"
  opciones_hash: ["a1b2c3d4", "f9e8d7c6"]
  respuestas_texto: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
  idx: uno_de([0, 1])
  hash_recibido: opciones_hash[idx]

enunciado: "El emisor envía un archivo con el hash '{hash_original}'. El receptor, tras descargar el archivo, calcula el hash y obtiene '{hash_recibido}'. ¿El archivo ha sido alterado?"

opciones_explicitas: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
respuesta: respuestas_texto[idx]
tipo: mc

explicacion: |
  Si el hash calculado por el receptor coincide exactamente con el hash enviado por el emisor, se garantiza que el contenido no ha sido modificado durante la transmisión.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

tipo: mc
opciones_explicitas: ["Cifrado simétrico", "Cifrado asimétrico", "Función Hash", "No es una técnica de cifrado"]
respuesta: "Cifrado asimétrico"

enunciado: "En un escenario donde dos personas necesitan comunicarse de forma segura pero nunca se han encontrado previamente para intercambiar una clave secreta, ¿qué tipo de criptografía es la más adecuada para establecer la comunicación inicial?"

explicacion: |
  El cifrado asimétrico utiliza un par de claves (pública y privada), lo que permite que dos entidades se comuniquen sin haber compartido previamente una clave secreta. El cifrado simétrico requiere que la clave ya sea conocida por ambas partes.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

respuesta: falso
tipo: vf

enunciado: "Una función hash criptográfica es un proceso reversible; es decir, es posible reconstruir el mensaje original a partir de su valor hash."

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way). Su propósito es generar una huella digital única de un mensaje, pero no permiten recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

tipo: completar
respuesta: "integridad"
respuestas_validas:
  - "integridad"

enunciado: "Si un software utiliza una función hash para verificar que un archivo descargado no ha sido modificado por un tercero durante la transmisión, está garantizando la _________ del archivo."

explicacion: |
  El hash permite verificar que el contenido no ha cambiado (integridad). No garantiza la confidencialidad, ya que el archivo original sigue siendo legible si no está cifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "proceso"]

respuesta_orden: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]
tipo: ordenar

opciones_explicitas: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]

enunciado: "Para realizar una firma digital sobre un documento y que el receptor pueda verificarla, ¿cuál es el orden correcto de los pasos técnicos?"

explicacion: |
  Primero se genera el hash del mensaje original. Luego, ese hash se cifra con la clave privada del emisor (esto es la firma). El receptor descifra la firma con la clave pública del emisor y compara el resultado con el hash que él mismo calcula del mensaje recibido.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "intermedio"
  tags: ["eficiencia", "hibrida"]

respuesta: falso
tipo: vf

enunciado: "Dado que el cifrado asimétrico es mucho más seguro que el simétrico, la práctica estándar en la navegación web (HTTPS) es cifrar todo el tráfico de datos usando únicamente criptografía asimétrica."

explicacion: |
  Falso. El cifrado asimétrico es computacionalmente muy costoso y lento. Por eso, se usa un sistema híbrido: la criptografía asimétrica para intercambiar una clave simétrica, y luego se usa esa clave simétrica para cifrar el flujo de datos real por su rapidez.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

variables:
  escenario: uno_de(["simetrica", "asimetrica"])

enunciado: "En un sistema de cifrado {escenario}, se utiliza la misma clave para cifrar y descifrar el mensaje."

respuesta: escenario == "simetrica"
tipo: vf
explicacion: |
  En la criptografía simétrica, la clave compartida es idéntica para ambas operaciones. En la asimétrica, se usa un par de claves (pública y privada).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

opciones_explicitas: ["Garantizar la confidencialidad del mensaje", "Garantizar la integridad del mensaje", "Cifrar el mensaje para que nadie lo lea", "Comprimir el mensaje para que ocupe menos"]

respuesta: "Garantizar la integridad del mensaje"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de aplicar una función hash a un archivo o mensaje?"

explicacion: |
  Una función hash genera una huella digital única. Si el archivo cambia, el hash cambia, lo que permite verificar que el contenido no ha sido alterado (integridad).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "seguridad"]

enunciado: "Una función hash es considerada ___ si es computacionalmente imposible encontrar el mensaje original a partir de su hash."

pasos:
  - "Identificar la propiedad descrita."

respuesta: "unidireccional"

tipo: completar
respuestas_validas:
  - "unidireccional"

explicacion: |
  La propiedad de unidireccionalidad (one-way) impide revertir el proceso de hash para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrica", "claves"]

opciones_explicitas: ["Clave privada", "Clave pública", "Clave secreta", "Clave de sesión"]

respuesta: "Clave pública"
tipo: mc

enunciado: "Si Alice quiere enviarle un mensaje cifrado a Bob de forma segura usando criptografía asimétrica, ¿qué clave debe utilizar Alice para cifrar el mensaje?"

explicacion: |
  En la criptografía asimétrica, se cifra con la clave pública del destinatario, de modo que solo el destinatario pueda descifrarlo con su clave privada correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_conceptos"
  nivel: "basico"
  tags: ["conceptos", "seguridad"]

opciones_explicitas: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]

respuesta_orden: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos de mayor a menor capacidad de recuperación de la información original (desde que es posible recuperar el mensaje original hasta que es imposible):"

explicacion: |
  1. Cifrado Simétrico/Asimétrico: Están diseñados para ser reversibles con la clave correcta.
  2. Hash: Es una función de una sola vía; no se puede recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "simetrico"]

variables:
  datos: [["400 GB de datos", "simetrico"], ["2 KB de texto", "asimetrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simetrico", "asimetrico"]

enunciado: "Un servidor necesita cifrar un archivo de {datos[idx][0]} para su almacenamiento seguro. Dado que la velocidad de procesamiento es la prioridad, ¿qué tipo de cifrado debería utilizar?"

explicacion: |
  Para grandes volúmenes de datos, el cifrado simétrico es preferible por su alta velocidad y eficiencia computacional en comparación con el asimétrico.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["integridad", "hash"]

respuesta: "hash"
tipo: completar
respuestas_validas:
  - "hash"
  - "checksum"
  - "resumen"

enunciado: "Para verificar que un archivo no ha sido alterado durante una descarga, se suele comparar su valor ___ con el proporcionado por el servidor."

explicacion: |
  Una función hash genera una huella digital única (hash) de un mensaje. Si el contenido cambia, el hash cambia completamente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrico", "clave_publica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de criptografía asimétrica, si utilizo la clave pública del destinatario para cifrar un mensaje, solo él podrá descifrarlo usando su clave privada correspondiente."

explicacion: |
  Esa es la base de la criptografía de clave pública: la clave de cifrado es pública, pero la de descifrado es privada y secreta.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "ordenar"]

respuesta_orden: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]
tipo: ordenar
opciones_explicitas: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]

enunciado: "Para realizar una firma digital sobre un documento, se deben seguir estos pasos en orden:"

pasos:
  - "Generar un resumen del documento."
  - "Cifrar ese resumen con la clave privada del emisor."
  - "Enviar el documento original junto con la firma generada."

explicacion: |
  La firma digital no cifra el documento entero, sino el hash del mismo, utilizando la clave privada para garantizar el no repudio y la integridad.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["claves", "seguridad"]

variables:
  textos: ["enviar una sola clave por un canal inseguro", "usar dos llaves distintas (pública y privada)"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "En el cifrado simétrico, el principal problema de seguridad es: {textos[idx]}."

explicacion: |
  El cifrado simétrico requiere que ambas partes compartan la misma clave. Si el canal para compartirla es inseguro, un atacante podría interceptarla.
```

## Sección: direccionamiento-ip-dns (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "conceptos"]

respuesta: "identificador"
tipo: completar
respuestas_validas:
  - "identificador"
  - "dirección"
  - "etiqueta"

enunciado: "En una red de computadoras, la dirección IP funciona como un ___ único que permite identificar un dispositivo en la red."

explicacion: |
  La dirección IP (Internet Protocol) es la etiqueta numérica que identifica de manera lógica a un dispositivo dentro de una red, permitiendo que los datos lleguen al destino correcto.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "redes", "internet"]

opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar direcciones IP dinámicas", "Cifrar el tráfico de la red", "Almacenar páginas web"]

respuesta: "Traducir nombres de dominio a direcciones IP"
tipo: mc

enunciado: "Si escribes 'google.com' en tu navegador, ¿qué tarea realiza principalmente el sistema DNS?"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce los nombres de dominio legibles para humanos (como google.com) en direcciones IP legibles para las máquinas.
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: verdadero
tipo: vf

enunciado: "La principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits, mientras que IPv4 utiliza 32 bits."

explicacion: |
  Verdadero. IPv4 usa direcciones de 32 bits (unos 4.3 mil millones posibles), mientras que IPv6 usa direcciones de 128 bits, lo que ofrece un espacio prácticamente ilimitado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: verdadero
tipo: vf

enunciado: "El protocolo IPv4 es una versión más antigua que IPv6 y ofrece un espacio de direcciones mucho más limitado."

explicacion: |
  Es verdadero. IPv4 utiliza 32 bits (aprox. 4.3 mil millones de direcciones), mientras que IPv6 utiliza 128 bits, proporcionando un número prácticamente infinito de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_flujo"
  nivel: "intermedio"
  tags: ["dns", "redes", "orden"]

opciones_explicitas: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]

respuesta_orden: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]
tipo: ordenar

enunciado: "Ordena los pasos que ocurren desde que escribes una URL hasta que ves la página en tu pantalla:"

explicacion: |
  Primero el cliente pregunta al DNS, el DNS devuelve la IP, y finalmente el cliente usa esa IP para establecer la conexión con el servidor web.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

variables:
  idx: uno_de([0, 1])
  datos: [["192.168.1.1", "Dirección IP"], ["google.com", "Nombre de dominio"]]

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["Dirección IP", "Nombre de dominio"]

enunciado: "Si tenemos el valor {datos[idx][0]}, este representa un/a ___."

explicacion: |
  Dependiendo del valor sorteado, se identifica si es una dirección numérica (IP) o un nombre alfanumérico (Dominio).
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip"]

tipo: mc
opciones_explicitas: ["La dirección física de la tarjeta de red", "La etiqueta lógica que identifica un dispositivo en una red", "El nombre asignado por el usuario al equipo", "La velocidad de conexión a internet"]

respuesta: "La etiqueta lógica que identifica un dispositivo en una red"

enunciado: "En una red local, cada dispositivo necesita una identidad única para que los datos lleguen al destino correcto. Esta identidad se conoce como dirección IP. ¿Cuál es su función principal?"

explicacion: |
  La dirección IP (Internet Protocol) actúa como una etiqueta lógica que permite identificar un dispositivo (como tu móvil o tu router) dentro de una red, permitiendo que la información sepa exactamente a dónde dirigirse.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario: uno_de([["www.google.com", "142.250.190.46"], ["www.wikipedia.org", "103.102.166.224"]])

tipo: completar
respuestas_validas:
  - "142.250.190.46"
  - "103.102.166.224"
respuesta: escenario[1]

enunciado: "Cuando escribes un nombre de dominio en tu navegador, el sistema DNS realiza una traducción. Si el dominio es {escenario[0]}, el servidor DNS te devolverá la dirección IP correspondiente, que es ___."

explicacion: |
  El DNS (Domain Name System) funciona como una agenda telefónica: tú buscas el nombre (dominio) y el DNS te devuelve el número (dirección IP) necesario para establecer la conexión.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "verdadero_falso"]

tipo: vf

enunciado: "¿Es correcto afirmar que la función principal del DNS es traducir nombres de dominio (como google.com) en direcciones IP (como 142.250.190.46) para que las computadoras puedan comunicarse?"

respuesta: verdadero

explicacion: |
  Verdadero. Las computadoras se comunican mediante números (IPs), pero los humanos preferimos usar nombres (dominios). El DNS es el traductor que permite esta interoperabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "flujo_dns"
  nivel: "intermedio"
  tags: ["dns", "redes"]

tipo: ordenar
opciones_explicitas: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

respuesta_orden: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que presionas 'Enter' en tu navegador hasta que ves una página web:"

explicacion: |
  Primero se consulta al DNS para obtener la IP, luego se usa esa IP para establecer la conexión con el servidor de destino y finalmente se descarga el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  ip_base: "192.168.1.0"
  mascara: "255.255.255.0"
  total_hosts: 254

tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos una red con máscara de subred {mascara}, y el rango de direcciones utilizables comienza en {ip_base} (excluyendo la red) y termina en 192.168.1.255 (excluyendo el broadcast), ¿cuántos dispositivos distintos pueden tener una IP válida en este segmento?"

pasos:
  - "Identificar el número total de direcciones en el bloque (256)"
  - "Restar la dirección de red (.0) y la dirección de broadcast (.255)"
  - "Resultado: 256 - 2 = 254"

respuesta: 254

explicacion: |
  En una red con máscara /24 (255.255.255.0), hay 256 direcciones totales. Se deben restar siempre dos: la dirección de red (la primera) y la de broadcast (la última), dejando 254 direcciones para hosts.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["redes", "internet", "dns"]

respuesta: "traducción"
tipo: "completar"
respuestas_validas:
  - "traducción"
  - "traducir"
  - "resolver"

enunciado: "El sistema DNS tiene la función principal de realizar la ___ de nombres de dominio a direcciones IP."

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, transformando nombres fáciles de recordar (como google.com) en direcciones IP numéricas que las máquinas pueden entender.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "dns", "conceptos"]

variables:
  escenario: uno_de([["192.168.1.1", "google.com"], ["8.8.8.8", "facebook.com"], ["10.0.0.5", "wikipedia.org"]])

respuesta: "El dominio es el nombre y la IP es la dirección"
tipo: mc
opciones_explicitas: ["La IP es el nombre y el dominio es la dirección", "El dominio es el nombre y la IP es la dirección", "Ambos son lo mismo", "El DNS convierte IPs en dominios"]

enunciado: "Si intentas acceder a {escenario[1]}, tu navegador primero buscará la dirección IP correspondiente a ese nombre. En este contexto, {escenario[1]} es el dominio y {escenario[0]} es la IP."

explicacion: |
  El nombre de dominio es la etiqueta legible para humanos, mientras que la dirección IP es la identificación numérica única de un dispositivo en la red.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "pasos", "redes"]

respuesta_orden: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]
tipo: "ordenar"
opciones_explicitas: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]

enunciado: "Ordena los pasos lógicos que ocurren cuando escribes una URL en tu navegador y el nombre no está en caché:"

explicacion: |
  El proceso sigue un orden jerárquico: primero se pregunta al servidor DNS, este responde con la IP y finalmente el cliente puede establecer la conexión con el servidor de destino.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "capas_modelo_osi"]

respuesta: falso

tipo: "vf"

enunciado: "La dirección IP es una dirección física única grabada en el hardware de la tarjeta de red (MAC Address)."

explicacion: |
  Falso. La dirección IP es una dirección lógica asignada por la red para el direccionamiento en la capa de red, mientras que la dirección MAC es la dirección física grabada en el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "dns_cache"
  nivel: "intermedio"
  tags: ["dns", "troubleshooting"]

variables:
  caso: uno_de([["un sitio web cambió de servidor y la IP vieja sigue cargando", "el servidor DNS tiene datos desactualizados"], ["un sitio web no carga pero la IP funciona", "hay un problema de resolución de nombres"]])

respuesta: "El DNS tiene datos desactualizados"
tipo: "mc"
opciones_explicitas: ["La IP es incorrecta", "El DNS tiene datos desactualizados", "El cable de red está desconectado", "El dominio expiró"]

enunciado: "Si un usuario intenta entrar a una web y recibe un error de 'no se encuentra el servidor', pero al usar la IP directamente la web carga, ¿cuál es la causa más probable? {caso[0]}."

explicacion: |
  Esto ocurre cuando el sistema operativo o el servidor DNS mantienen en caché una información antigua (la IP vieja) que ya no apunta al servidor actual del sitio web.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "mac"]

respuesta: "capa de red"
tipo: completar
respuestas_validas:
  - "capa de red"
  - "capa red"

enunciado: "Mientras que la dirección MAC se utiliza para la comunicación en la capa de enlace, la dirección IP se utiliza para el direccionamiento en la ___."

explicacion: |
  La dirección MAC es una dirección física única grabada en el hardware (Capa 2), mientras que la IP es una dirección lógica que permite el enrutamiento entre redes distintas (Capa 3).
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"]]
  escenario: uno_de(datos)

respuesta: "Traducir nombres de dominio a direcciones IP"
tipo: mc
opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar una dirección MAC a un dispositivo", "Encriptar el tráfico de la web", "Almacenar archivos de sitios web"]

enunciado: "Si un usuario intenta acceder a {escenario[0]}, el sistema DNS se encarga de realizar la siguiente tarea: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce nombres legibles para humanos a direcciones IP legibles para las máquinas.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "intermedio"
  tags: ["ipv4", "ipv6"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits para ofrecer un espacio de direccionamiento mucho mayor que los 32 bits de IPv4?"

explicacion: |
  Verdadero. El agotamiento de direcciones IPv4 fue el motor principal para la transición hacia IPv6, que permite un número prácticamente infinito de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta_orden: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]
tipo: ordenar
opciones_explicitas: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]

enunciado: "Ordena los pasos lógicos que sigue un cliente cuando busca resolver un nombre de dominio que no está en la caché local:"

explicacion: |
  El proceso comienza con el Resolver (usualmente tu ISP), que pregunta a los Root Servers, estos derivan a los servidores TLD (como .com) y finalmente al servidor autoritativo que tiene la IP real.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip_estatica", "ip_dinamica"]

variables:
  config: [["estatica", "servidor web"], ["dinamica", "computadora de hogar"]]
  tipo_ip_idx: uno_de([0, 1])
  tipo_seleccionado: config[tipo_ip_idx][0]
  respuesta_correcta: config[tipo_ip_idx][1]

respuesta: respuesta_correcta

tipo: mc
opciones_explicitas: ["servidor web", "computadora de hogar", "router principal", "switch de capa 2"]

enunciado: "Para el tipo de dirección IP {tipo_seleccionado}, es más común utilizar una dirección de tipo ___."

explicacion: |
  Los servidores necesitan una IP estática para que siempre sean localizables en la misma dirección. Los dispositivos finales suelen usar IPs dinámicas asignadas por DHCP para optimizar el uso de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["redes", "dns"]

variables:
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"], ["github.com", "140.82.121.4"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "142.250.190.46"
  - "103.102.166.224"
  - "140.82.121.4"

enunciado: "Un usuario escribe en su navegador el nombre de dominio {datos[idx][0]}. Para poder conectar con el servidor, el sistema DNS debe traducir ese nombre a la dirección IP: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, traduciendo nombres legibles para humanos en direcciones IP numéricas que las máquinas pueden entender.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección IP 192.168.1.1 es una dirección lógica que identifica a un dispositivo en una red, a diferencia de la dirección MAC que es física."

explicacion: |
  Correcto. La dirección IP es una dirección lógica asignada por software (capa de red), mientras que la MAC es la dirección física grabada en el hardware (capa de enlace).
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "protocolos"]

respuesta: "DNS"
tipo: mc
opciones_explicitas: ["DNS", "DHCP", "HTTP", "FTP"]

enunciado: "Si un ordenador conoce el nombre de un servidor pero no sabe su dirección IP para establecer la comunicación, ¿qué servicio debe consultar?"

explicacion: |
  El servicio DNS es el encargado de la resolución de nombres a direcciones IP.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta_orden: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]
tipo: ordenar
opciones_explicitas: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]

enunciado: "Ordena los pasos lógicos que sigue un sistema operativo para resolver un nombre de dominio cuando no lo tiene en memoria:"

explicacion: |
  El proceso comienza buscando en la caché local; si no está, consulta al resolver (recursivo), quien a su vez consulta a los servidores raíz y otros niveles hasta encontrar la IP.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "redes"]

variables:
  datos: [["192.168.1.5", "192.168.1.255"], ["10.0.0.1", "10.0.0.255"], ["172.16.0.10", "172.16.0.255"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["192.168.1.255", "10.0.0.255", "172.16.0.255"]

enunciado: "Si un host tiene la dirección IP {datos[idx][0]} en una red con máscara /24 (255.255.255.0), ¿cuál es la dirección de broadcast de esa red?"

explicacion: |
  La dirección de broadcast es la dirección que se utiliza para enviar paquetes a todos los hosts de una red específica; es la última dirección de ese rango de red.
```

## Sección: diseno-y-arquitectura-de-software (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: mc
opciones_explicitas: ["El diseño detallado de algoritmos y estructuras de datos", "La estructura fundamental de un sistema y sus componentes", "La escritura de código siguiendo un estándar de estilo", "La gestión de los servidores donde se aloja la aplicación"]
respuesta: "La estructura fundamental de un sistema y sus componentes"
enunciado: "La arquitectura de software se define principalmente como ___."

explicacion: |
  La arquitectura de software se refiere a la estructura de alto nivel de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que rigen su diseño y evolución.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["calidad", "requerimientos"]

tipo: vf

respuesta: verdadero

enunciado: "Los atributos de calidad (como la escalabilidad, la seguridad y la disponibilidad) forman parte de los requerimientos no funcionales del sistema. ¿Es esto verdadero?"

explicacion: |
  Correcto. Mientras que los requerimientos funcionales describen qué hace el sistema, los no funcionales (atributos de calidad) describen cómo se comporta el sistema bajo ciertas condiciones.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "procesos"]

tipo: ordenar
opciones_explicitas: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]

enunciado: "Ordene las etapas del ciclo de vida de desarrollo de software en un orden lógico secuencial, desde la concepción hasta la entrega."

explicacion: |
  Un flujo estándar comienza con entender qué se necesita (Análisis), diseñar cómo se construirá (Arquitectura/Diseño), escribir el código (Implementación) y verificar que funcione (Pruebas/Despliegue).
respuesta_orden: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones", "arquitectura"]

variables:
  escenario: [[ "Monolítica", "Un solo bloque de código donde todo está interconectado" ], [ "Microservicios", "Un conjunto de servicios pequeños e independientes" ]]
  idx: uno_de([0, 1])

tipo: completar

enunciado: "Si elegimos una arquitectura de tipo {escenario[idx][0]}, el sistema se caracteriza por ser {escenario[idx][1]}."

respuestas_validas:
  - "Un solo bloque de código donde todo está interconectado"
  - "Un conjunto de servicios pequeños e independientes"
respuesta: escenario[idx][1]

explicacion: |
  La arquitectura Monolítica centraliza toda la lógica en una única unidad, mientras que los Microservicios descomponen la aplicación en servicios autónomos que se comunican entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["principios", "calidad_codigo"]

tipo: vf

respuesta: falso

enunciado: "En un buen diseño de arquitectura de software, se busca que los componentes tengan un alto acoplamiento y una baja cohesión. ¿Es esto correcto?"

explicacion: |
  Falso. Un buen diseño busca **bajo acoplamiento** (que los componentes dependan poco entre sí) y **alta cohesión** (que cada componente tenga una responsabilidad única y bien definida).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseño", "observer"]

variables:
  escenario: uno_de([["Sistema de Clima", "Sensor de Temperatura"], ["App de Bolsa", "Widget de Cotizaciones"], ["Videojuego", "Sistema de Logros"]])

enunciado: "En un sistema de {escenario[0]}, el {escenario[1]} actúa como el 'Subject'. Cuando su estado cambia, debe notificar a todos los observadores registrados. Si un observador no está suscrito, no recibirá la actualización."

opciones_explicitas: ["El Subject mantiene una lista de suscriptores", "El Observer decide cuándo notificar al Subject", "El Subject debe conocer la implementación interna de cada Observer"]

respuesta: "El Subject mantiene una lista de suscriptores"
tipo: mc

explicacion: |
  El patrón Observer define una relación de uno a muchos. El 'Subject' mantiene una lista de suscriptados y, ante un cambio de estado, recorre dicha lista llamando al método de actualización de cada uno.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura_hexagonal", "dependencias"]

variables:
  capa_externa: uno_de(["Base de Datos", "Interfaz de Usuario", "Servicio de Email"])
  capa_core: "Dominio (Lógica de Negocio)"

enunciado: "Siguiendo los principios de la Arquitectura Hexagonal (Ports and Adapters), la dependencia debe fluir hacia el centro. Si tenemos un componente de {capa_externa}, este debe depender de una interfaz definida en el {capa_core}, pero el {capa_core} NUNCA debe depender de {capa_externa}."

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: vf

explicacion: |
  La regla de oro de la arquitectura hexagonal es la inversión de dependencias. El núcleo (Core) es independiente de los detalles de infraestructura (DB, UI, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

tipo: ordenar
opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

enunciado: "En el modelo de Cascada (Waterfall), las fases deben completarse de forma secuencial. Ordena las etapas correctamente:"

explicacion: |
  El modelo en Cascada (Waterfall) es lineal y rígido: no se puede pasar a la fase de implementación sin haber finalizado el diseño y los requerimientos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_solid", "cohesion"]

variables:
  modulo: uno_de(["Modulo_Pagos", "Modulo_Usuarios", "Modulo_Inventario"])

enunciado: "Estamos diseñando un sistema para una tienda online. Si el {modulo} contiene funciones para procesar pagos, generar facturas PDF y también para enviar emails de bienvenida, el módulo tiene una ___ baja."

respuestas_validas:
  - "cohesión"

respuesta: "cohesión"
tipo: completar

explicacion: |
  Una baja cohesión ocurre cuando un módulo realiza demasiadas tareas distintas que no están relacionadas entre sí. Un buen diseño busca que cada módulo tenga una responsabilidad única (Single Responsibility Principle).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_of_software"
  nivel: "intermedio"
  tags: ["microservicios", "monolito"]

variables:
  escenario_carga: uno_de(["El módulo de pagos recibe 1000 peticiones por segundo, pero el resto del sistema no.", "El módulo de catálogo es muy pesado en memoria, pero el resto es ligero.", "El módulo de búsqueda requiere escalar su CPU constantemente por la alta demanda."])

enunciado: "En un escenario donde {escenario_carga}, una arquitectura de microservicios permite escalar solo el componente afectado, mientras que en un monolito se debe escalar toda la aplicación. ¿Cuál es la principal ventaja de microservicios en este caso?"

opciones_explicitas: ["Escalabilidad selectiva", "Simplicidad de despliegue", "Menor latencia de red"]

respuesta: "Escalabilidad selectiva"
tipo: mc

explicacion: |
  Los microservicios permiten el "Scaling out" dirigido. Si solo un componente tiene carga, solo pagamos por más recursos para ese componente, optimizando costos y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_diseno", "mantenibilidad"]

tipo: mc
opciones_explicitas: ["alta cohesión y bajo acoplamiento", "baja cohesión y alto acoplamiento", "alta cohesión y alto acoplamiento", "baja cohesión y bajo acoplamiento"]
respuesta: "alta cohesión y bajo acoplamiento"

enunciado: "En el diseño de software, para facilitar el mantenimiento buscamos que los módulos tengan:"

explicacion: |
  Una alta cohesión significa que el módulo está enfocado en una sola responsabilidad. Un bajo acoplamiento significa que los módulos están poco interconectados, lo que permite cambiarlos sin afectar al resto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

enunciado: "¿Es siempre preferible una arquitectura de microservicios sobre una arquitectura monolítica para cualquier proyecto de software?"

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Los microservicios añaden una complejidad operativa significativa (red, latencia, consistencia de datos). Para proyectos pequeños o equipos reducidos, un monolito bien estructurado suele ser más eficiente y menos costoso.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

enunciado: "Ordena las fases típicas del ciclo de vida de desarrollo de software (SDLC) desde la concepción hasta el cierre:"

opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza entendiendo qué se necesita (Requerimientos), cómo se estructurará (Diseño), escribiendo el código (Implementación), verificando que funcione (Pruebas) y asegurando su vida útil (Mantenimiento).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "creacionales"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplo: [["gestión de una conexión a una base de datos única", "Singleton"], ["crear diferentes tipos de botones en una interfaz", "Factory"]]

enunciado: "Si un programador necesita asegurar que una clase tenga una única instancia en todo el sistema, está intentando implementar el patrón ___."

respuestas_validas:
  - "Singleton"
  - "Factory"

respuesta: ejemplo[caso_idx][1]
tipo: completar

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella, evitando conflictos de recursos como conexiones a bases de datos o archivos de configuración.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["acoplamiento", "diseño_estructural"]

enunciado: "Cuando un módulo A le pasa un objeto a un módulo B, pero además le indica a B qué método debe llamar y en qué orden, estamos ante un acoplamiento de ___."

opciones_explicitas: ["control", "datos"]

respuesta: "control"
tipo: mc

explicacion: |
  El acoplamiento de control es peligroso porque el módulo emisor debe conocer la lógica interna del receptor. El objetivo es evolucionar hacia un acoplamiento de datos, donde solo se intercambie la información necesaria.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["arquitectura", "diseno", "conceptos"]

respuesta: "arquitectura"
tipo: "mc"
opciones_explicitas: ["diseño", "arquitectura", "codificación", "testing"]

enunciado: "Mientras que el diseño de software se enfoca en los detalles de algoritmos y estructuras de datos internas, la ___ se ocupa de la estructura global y las decisiones de alto nivel del sistema."

explicacion: |
  La arquitectura define la estructura macro (componentes, interacciones y patrones), mientras que el diseño se encarga de la micro-estructura (lógica interna de los componentes).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["acoplamiento", "cohesion"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema con buen diseño, buscamos que el acoplamiento sea bajo y la cohesión sea alta."

explicacion: |
  Un bajo acoplamiento minimiza la dependencia entre módulos, facilitando cambios. Una alta cohesión asegura que cada módulo tenga una responsabilidad única y clara.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["monolito", "microservicios", "despliegue"]

respuesta: "microservicios"
tipo: "completar"
respuestas_validas:
  - "microservicios"

enunciado: "A diferencia de una arquitectura monolítica, donde todos los componentes están en un único paquete desplegable, la arquitectura de ___ divide la aplicación en servicios independientes que se comunican por red."

explicacion: |
  Los microservicios permiten escalar partes específicas del sistema de forma independiente, algo que en un monolito requiere escalar toda la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["capas", "arquitectura", "orden"]

respuesta_orden: ["Presentación", "Lógica de Negocio", "Acceso a Datos"]
tipo: "ordenar"
opciones_explicitas: ["Acceso a Datos", "Lógica de Negocio", "Presentación"]

enunciado: "Ordene las capas de una arquitectura clásica en capas (N-Tier) desde la más cercana al usuario hasta la más cercana a la base de datos:"

explicacion: |
  La capa de Presentación maneja la interfaz, la de Lógica de Negocio procesa las reglas y la de Acceso a Datos gestiona la persistencia.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["atributos", "calidad", "mantenibilidad"]

respuesta: "mantenibilidad"
tipo: "mc"
opciones_explicitas: ["rendimiento", "mantenibilidad", "usabilidad", "seguridad"]

enunciado: "Un sistema puede ser muy rápido (alto rendimiento), pero si su arquitectura es desordenada y difícil de modificar, carece de buena ___."

explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado para corregir errores, mejorar el rendimiento o adaptarse a nuevos requisitos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["arquitectura", "patrones"]

variables:
  escenario: uno_de([["Se requiere un sistema donde la interfaz de usuario y la lógica de negocio estén totalmente desacopladas para permitir múltiples vistas (web, móvil, CLI) usando el mismo núcleo.", "MVC"], ["Se requiere un sistema donde las componentes se comuniquen mediante eventos asíncronos para garantizar un desacoplamiento máximo entre productores y consumidores.", "Event-Driven"], ["Se requiere un sistema basado en servicios independientes que se comunican por red, permitiendo escalar cada componente de forma autónoma.", "Microservicios"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["MVC", "Event-Driven", "Microservicios", "Monolito"]

enunciado: "Un arquitecto de software debe elegir la estructura para un proyecto con las siguientes características: {escenario[0]}"

explicacion: |
  El patrón seleccionado es {escenario[1]}. Cada patrón responde a necesidades específicas de escalabilidad, desacoplamiento o complejidad de interfaz.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["principios_solid", "refactorizacion"]

variables:
  textos: ["Una clase 'Factura' que calcula el total, guarda en la base de datos y genera un PDF.", "Una clase 'Usuario' que contiene solo los atributos de datos y métodos de acceso."]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Analice el siguiente caso: {textos[idx]}. ¿Cumple esta clase con el Principio de Responsabilidad Única (SRP)?"

explicacion: |
  El SRP establece que una clase debe tener una, y solo una, razón para cambiar. Una clase que mezcla cálculo, persistencia y generación de PDF viola ese principio; una clase que solo agrupa datos y su acceso lo cumple.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["capas", "arquitectura_n_capas"]

tipo: ordenar

opciones_explicitas: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]
respuesta_orden: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]

enunciado: "Ordene las capas de un sistema de software estándar desde la capa más externa (usuario) hasta la más interna (almacenamiento):"

explicacion: |
  El orden correcto es: Presentación, Negocio, Acceso a Datos y Base de Datos. La arquitectura en capas busca separar la lógica de presentación de la lógica de negocio y el acceso a datos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["calidad_codigo", "acoplamiento", "cohesion"]

variables:
  caso_estudio: uno_de([["Un módulo que tiene funciones muy relacionadas entre sí pero que depende fuertemente de variables globales de otros módulos.", "Baja Cohesion, Alto Acoplamiento"], ["Un módulo con funciones diversas que no tienen relación entre sí, pero que son independientes de otros sistemas.", "Alta Cohesion, Bajo Acoplamiento"]])

respuesta: caso_estudio[1]
tipo: completar
respuestas_validas:
  - "Baja Cohesion, Alto Acoplamiento"
  - "Alta Cohesion, Bajo Acoplamiento"

enunciado: "En el diseño de software, el caso descrito es: ___"

explicacion: |
  El diagnóstico es {caso_estudio[1]}. Un buen diseño busca Maximizar la Cohesión y Minimizar el Acoplamiento.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["mantenibilidad", "deuda_tecnica"]

variables:
  textos: ["Se decide omitir la creación de tests unitarios y la documentación de la arquitectura para cumplir con una fecha de entrega inmediata.", "Se implementa un patrón de diseño robusto y se realiza una revisión de arquitectura antes de cada sprint."]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "¿Es cierto que el siguiente escenario representa la acumulación de deuda técnica?: {textos[idx]}"

explicacion: |
  La deuda técnica surge cuando se prioriza la rapidez sobre la calidad del diseño y la estructura del código, como al omitir tests y documentación por una fecha límite. Una revisión de arquitectura regular con buenos patrones, en cambio, reduce la deuda técnica.
```

## Sección: estructuras-de-control-bucles (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "iteración"
tipo: completar
respuestas_validas:
  - "iteración"
  - "iteracion"

enunciado: "En programación, cada una de las repeticiones de un bloque de instrucciones dentro de un bucle se denomina ___."

explicacion: |
  Un bucle permite ejecutar un conjunto de instrucciones varias veces. Cada vez que el ciclo se ejecuta, se dice que ha ocurrido una iteración.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["diferencias", "for", "while"]

respuesta: falso
tipo: vf
enunciado: "El bucle 'while' se utiliza preferentemente cuando se conoce de antemano el número exacto de veces que se debe repetir el bloque de código."

explicacion: |
  Falso. El bucle 'while' se basa en una condición lógica y se usa cuando no sabemos cuántas veces se repetirá. El bucle 'for' es el ideal cuando conocemos el número de iteraciones (iteraciones controladas).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["i", "inicio", "paso"], ["cont", "valor_inicial", "incremento"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["i", "cont", "valor_inicial", "incremento"]

enunciado: "En una estructura de control 'for' estándar, el primer parámetro suele representar la ___ que actúa como contador."

explicacion: |
  La variable de control (comúnmente llamada 'i' o 'j') es la que toma los valores sucesivos durante el ciclo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]
tipo: ordenar
opciones_explicitas: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada ciclo para asegurar un funcionamiento correcto y evitar bucles infinitos."

explicacion: |
  Primero se verifica si la condición es verdadera, luego se ejecuta el código y finalmente se actualiza la variable de control para que la condición pueda llegar a ser falsa eventualmente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["errores", "bucle_infinito"]

respuesta: falso
tipo: vf
enunciado: "Un bucle infinito ocurre únicamente cuando la condición de parada es siempre verdadera debido a un error de lógica en el programa."

explicacion: |
  Falso. Aunque es la causa más común (error de lógica), un bucle infinito también puede ser intencional (por ejemplo, en el bucle principal de un sistema operativo o un videojuego que espera una señal de salida).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion", "suma"]

variables:
  escenario: uno_de([[10, 55], [5, 15], [20, 210]])
  limite: escenario[0]
  suma_final: escenario[1]

respuesta: suma_final
tipo: completar
tolerancia_abs: 0

enunciado: "Considera un bucle que recorre un rango desde 1 hasta {limite} (inclusive) sumando cada valor a una variable acumuladora que inicia en 0. ¿Cuál es el valor final de la suma?"

pasos:
  - "Inicializar acumulador = 0"
  - "Iterar desde i = 1 hasta {limite}"
  - "En cada paso, sumar i al acumulador"

explicacion: |
  El bucle recorre todos los enteros desde 1 hasta el límite definido. La suma de los primeros n números se calcula con la fórmula (n * (n + 1)) / 2. En este caso, para un límite de {limite}, la suma es {suma_final}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

variables:
  valor_inicial: 10
  divisor: 2
  resultado_final: 1

respuesta: falso
tipo: vf

enunciado: "Se ejecuta el siguiente pseudocódigo: \n x = {valor_inicial} \n while (x > 1): \n   x = x / {divisor} \n \n ¿La variable x terminará siendo exactamente igual a 1 al finalizar el bucle? (Verdadero/Falso)"

explicacion: |
  En cada iteración, x se divide por 2. La secuencia es: 10, 5, 2.5, 1.25, 0.625... Como x siempre será mayor que 1 hasta que cruce el umbral, el bucle se detiene cuando x <= 1. En este caso, el valor final es 0.625, por lo tanto, no es exactamente 1.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "anidado", "iteraciones"]

variables:
  i_max: 3
  j_max: 2

respuesta: 6
tipo: completar
tolerancia_abs: 0

enunciado: "En un bucle anidado donde el bucle externo corre desde i = 1 hasta {i_max} y el bucle interno corre desde j = 1 hasta {j_max}, ¿cuántas veces se ejecutará el cuerpo del bucle interno en total?"

pasos:
  - "El bucle externo se ejecuta {i_max} veces"
  - "Por cada iteración del externo, el interno se ejecuta {j_max} veces"
  - "Total = {i_max} * {j_max}"

explicacion: |
  Cuando tenemos bucles anidados, el número total de iteraciones es el producto del número de iteraciones de cada bucle. En este caso, 3 * 2 = 6.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["ordenar", "flujo"]

respuesta_orden: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]
tipo: ordenar

opciones_explicitas: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada iteración para asegurar su funcionamiento correcto:"

explicacion: |
  Primero se debe evaluar si la condición es verdadera. Si lo es, se ejecuta el código interno. Luego, es crucial actualizar la variable de control (incrementar o decrementar) para evitar un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "incremento"]

variables:
  puntos_iniciales: 5
  incremento: 2
  puntos_finales: 11

respuesta: "11"
tipo: completar

opciones_explicitas: ["11"]
respuestas_validas:
  - "11"

enunciado: "Un programa tiene un bucle 'while' que continúa mientras 'puntos' sea menor que 10. Si 'puntos' comienza en {puntos_iniciales} y en cada iteración se le suma {incremento}, ¿cuál será el valor final de 'puntos' cuando el bucle termine?"

explicacion: |
  1. Inicio: puntos = 5. ¿5 < 10? Sí. Sumamos 2 -> puntos = 7.
  2. ¿7 < 10? Sí. Sumamos 2 -> puntos = 9.
  3. ¿9 < 10? Sí. Sumamos 2 -> puntos = 11.
  4. ¿11 < 10? No. El bucle termina. El valor final es 11.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["error_comun", "while", "logica"]

variables:
  i: 0

enunciado: "Analiza el siguiente fragmento de código en pseudocódigo: \n\n x = 10\n i = 0\n while (i < x):\n   print(i)\n   i = i - 1"

opciones_explicitas: ["El bucle termina correctamente", "El bucle entra en un bucle infinito", "El bucle no se ejecuta nunca", "Se produce un error de sintaxis"]

respuesta: "El bucle entra en un bucle infinito"
tipo: mc

explicacion: |
  Al decrementar `i` en cada iteración (`i = i - 1`), la condición `i < 10` siempre será verdadera, ya que `i` se aleja cada vez más del valor 10 hacia los números negativos. Esto causa un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "index_out_of_bounds"]

variables:
  lista: ["A", "B", "C"]
  largo_lista: largo(lista)

enunciado: "Si tenemos una lista con {largo_lista} elementos (índices 0, 1 y 2) y ejecutamos el siguiente bucle:\n\n for i from 0 to 3:\n   print(lista[i])\n\n ¿Qué sucede al llegar a la última iteración?"

opciones_explicitas: ["Se imprime el último elemento", "Se imprime un error de índice fuera de rango", "Se imprime un valor nulo", "El bucle se detiene sin error"]

respuesta: "Se imprime un error de índice fuera de rango"
tipo: mc

explicacion: |
  En la mayoría de los lenguajes, si una lista tiene 3 elementos, los índices válidos son 0, 1 y 2. Intentar acceder al índice 3 provocará un error de desbordamiento de índice (IndexOutOfBounds).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "logica"]

enunciado: "En un bucle `while`, la condición evaluada determina si el cuerpo del bucle se ejecuta o no. Si la condición es falsa desde el primer momento, el bucle se ejecuta ___ veces."

respuestas_validas:
  - "0"
tipo: completar

explicacion: |
  A diferencia de un bucle `do-while` (que garantiza al menos una ejecución), el bucle `while` evalúa la condición *antes* de entrar al bloque. Si la condición es falsa inicialmente, el cuerpo nunca se ejecuta.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["anidados", "orden"]

variables:
  resultado: "A, B, C, D"

enunciado: "Ordena la secuencia de salida de los mensajes para el siguiente código:\n\n for i from 1 to 2:\n   for j from 1 to 2:\n     print(i, j)"

opciones_explicitas: ["(1,1), (1,2), (2,1), (2,2)"]

respuesta_orden: ["(1,1), (1,2), (2,1), (2,2)"]
tipo: ordenar

explicacion: |
  En los bucles anidados, el bucle interno (j) debe completar todas sus iteraciones para cada una de las iteraciones del bucle externo (i). Por eso, primero se agota la secuencia de `j` para `i=1` y luego se pasa a `i=2`.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["boolean", "logica"]

variables:
  condicion_inicial: falso

enunciado: "Supongamos que tenemos el siguiente código:\n\n x = 5\n while (x > 0):\n   x = x - 1\n   if (x == 2):\n     break\n\n ¿El valor final de `x` al salir del bucle es 2? (Responde verdadero o falso)"

respuesta: verdadero
tipo: vf

explicacion: |
  El bucle se ejecuta para x=5, 4, 3. Cuando x llega a 2 tras la resta, la instrucción `break` interrumpe inmediatamente el bucle, dejando el valor de `x` en 2.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["bucles", "for", "while"]

tipo: mc
opciones_explicitas: ["El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica.", "El bucle for es más rápido que el while en todos los lenguajes.", "El bucle while solo puede usarse con números enteros.", "No existe diferencia funcional entre ambos."]

respuesta: "El bucle for se usa cuando se conoce de antemano el número de iteraciones, mientras que el while depende de una condición lógica."

enunciado: "En programación, ¿cuál es la distinción principal entre un bucle 'for' y un bucle 'while'?"

explicacion: |
  El bucle 'for' está diseñado para iterar sobre una secuencia finita o un rango conocido, mientras que el 'while' es una estructura de control que se ejecuta mientras una condición booleana sea verdadera, sin importar cuántas veces ocurra.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

tipo: completar
respuestas_validas:
  - "verdadero"

respuesta: "verdadero"

enunciado: "Si una condición en un bucle 'while' nunca cambia su valor y permanece siempre como ___, el programa entrará en un bucle infinito."

explicacion: |
  Un bucle 'while' evalúa la condición antes de cada iteración. Si la condición es siempre 'falso', el bucle no se ejecuta; si es siempre 'verdadero', el bucle nunca termina.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "booleano"]

tipo: vf

respuesta: verdadero

enunciado: "¿Es posible que un bucle 'while' no se ejecute ni una sola vez si la condición inicial es falsa?"

explicacion: |
  Correcto. A diferencia del bucle 'do-while' (que ejecuta el bloque al menos una vez), el bucle 'while' evalúa la condición al principio. Si es falsa desde el inicio, el cuerpo del bucle se salta por completo.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["iteracion", "pasos"]

tipo: ordenar
opciones_explicitas: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

respuesta_orden: ["Inicialización de la variable de control", "Evaluación de la condición", "Ejecución del cuerpo del bucle", "Actualización de la variable de control"]

enunciado: "Ordena los pasos lógicos que ocurren en una iteración estándar de un bucle controlado por una variable:"

explicacion: |
  Para que un bucle funcione correctamente, primero se establece el punto de partida (inicialización), luego se verifica si se debe entrar (condición), se realiza la tarea (cuerpo) y finalmente se modifica la variable para avanzar (actualización).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["break", "control"]

respuesta: "La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera."

tipo: mc
opciones_explicitas: ["La instrucción 'break' termina el bucle inmediatamente, independientemente de si la condición del 'while' sigue siendo verdadera.", "La instrucción 'break' solo sirve para saltar una iteración y continuar con la siguiente."]

enunciado: "Considerando un bucle 'while' que está en ejecución, ¿qué diferencia marca el uso de la instrucción 'break' respecto a la condición del bucle?"

explicacion: |
  El comando 'break' fuerza la salida inmediata del bucle, ignorando la evaluación de la condición lógica que normalmente controlaría la repetición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion"]

variables:
  datos: [["i", "1", "3", "3"], ["j", "0", "1", "2"], ["k", "5", "8", "4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si ejecutamos un bucle 'for' con la variable {datos[idx][0]} que recorre desde el valor inicial {datos[idx][1]} hasta el valor final {datos[idx][2]} inclusive, ¿cuántas veces se ejecutará el cuerpo del bucle?"

respuesta: datos[idx][3]
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

explicacion: |
  El número de iteraciones en un bucle que va de 'a' hasta 'b' (inclusive) se calcula como: (b - a) + 1.
  En este caso: ({datos[idx][2]} - {datos[idx][1]}) + 1 = {datos[idx][3]}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["while", "condicion"]

variables:
  datos: [["x", 10, 2], ["y", 20, 5], ["z", 15, 3]]
  idx: uno_de([0, 1, 2])

enunciado: "Considera el siguiente código: \n`valor = {datos[idx][1]} \nwhile (valor > 1): \n    valor = valor - {datos[idx][2]}` \n\n¿Cuál será el valor final de la variable después de que el bucle termine?"

respuesta: "0"
tipo: mc
opciones_explicitas: ["0", "1", "2", "5"]

explicacion: |
  El bucle resta {datos[idx][2]} repetidamente mientras el valor sea mayor a 1. Como {datos[idx][1]} es múltiplo exacto de {datos[idx][2]}, la secuencia de restas llega exactamente a 0 (por ejemplo, para x: 10 → 8 → 6 → 4 → 2 → 0), momento en el que "0 > 1" es falso y el bucle se detiene.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "avanzado"
  tags: ["anidados", "complejidad"]

variables:
  casos: [[3, 4], [2, 5], [4, 2]]
  caso: uno_de(casos)
  a: caso[0]
  b: caso[1]
  iteraciones: a * b

enunciado: "Dado el siguiente fragmento de código:\n`for i from 1 to {a}:\n    for j from 1 to {b}:\n        print(i, j)`\n\n¿Cuántas veces se imprimirá el mensaje en total?"

respuesta: iteraciones
tipo: completar
tolerancia_abs: 0

explicacion: |
  En un bucle anidado, el número total de iteraciones es el producto del número de iteraciones del bucle externo por el número de iteraciones del bucle interno.
  {a} * {b} = {iteraciones}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "infinito"]

enunciado: "Si tenemos un bucle `while (i < 10)` y dentro del bucle la variable `i` nunca aumenta su valor, el programa entrará en un bucle infinito."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Si la condición de parada (`i < 10`) nunca deja de ser verdadera porque `i` no cambia, el programa nunca saldrá del bucle.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["orden", "flujo"]

enunciado: "Ordena los pasos de ejecución de un bucle 'for' que recorre una lista de elementos:"

opciones_explicitas: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
respuesta_orden: ["Inicializar el contador", "Evaluar la condición de parada", "Ejecutar el cuerpo del bucle", "Incrementar el contador"]
tipo: ordenar

explicacion: |
  El flujo estándar es: 1. Inicialización, 2. Evaluación de condición, 3. Ejecución de instrucciones, 4. Actualización/Incremento.
```

## Sección: estructuras-de-control-condicionales (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["conceptos", "logica"]

tipo: mc
opciones_explicitas: ["Una estructura que repite un bloque de código", "Una estructura que permite ejecutar código según una condición", "Una función que realiza cálculos matemáticos", "Un tipo de dato que almacena números"]
respuesta: "Una estructura que permite ejecutar código según una condición"
enunciado: "En programación, una estructura condicional es..."
explicacion: |
  Las estructuras condicionales permiten que el flujo de un programa cambie de dirección dependiendo de si una condición es verdadera o falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "logica"]

tipo: vf

enunciado: "Para que una sentencia 'if' ejecute su bloque de código, la expresión evaluada debe ser verdadera."

respuesta: verdadero

explicacion: |
  El cuerpo de un 'if' solo se ejecuta si la condición evaluada resulta en un valor booleano verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if_else", "flujo"]

tipo: completar
respuestas_validas:
  - "else"

enunciado: "Si la condición del 'if' es falsa, el programa puede ejecutar un bloque alternativo utilizando la palabra clave ___."

explicacion: |
  La cláusula 'else' define el camino que toma el programa cuando la condición principal no se cumple.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["evaluacion", "booleano"]

variables:
  escenario: uno_de([["10 > 5", verdadero], ["5 > 10", falso], ["7 == 7", verdadero], ["3 != 3", falso]])

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado es ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [verdadero, falso]

explicacion: |
  Cada expresión de comparación se evalúa como verdadera o falsa según los valores involucrados: {escenario[0]} da como resultado {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

tipo: ordenar
opciones_explicitas: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

enunciado: "Ordena los pasos lógicos que sigue una estructura 'if-else' estándar:"

respuesta_orden: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

explicacion: |
  El flujo lógico siempre comienza con la evaluación de la condición para luego decidir qué camino seguir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "booleanos", "logica"]

variables:
  x: 10

respuesta: verdadero
tipo: vf

enunciado: "En un programa, si evaluamos la expresión x > 5 siendo x = {x}, el resultado de la condición es ___."

explicacion: |
  Dado que 10 es mayor que 5, la expresión es verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "flujo"]

respuesta: "reprobado"
tipo: mc
opciones_explicitas: ["reprobado", "aprobado"]

enunciado: "Si tenemos el siguiente código: \nif (edad >= 18) {{\n  print('aprobado');\n}} else {{\n  print('reprobado');\n}}\n\nSi la variable edad es 15, ¿qué se imprimirá en consola?"

pasos:
  - "Evaluar la condición: ¿15 >= 18? La respuesta es falso."
  - "Como la condición es falsa, el programa salta el bloque 'if' y entra al bloque 'else'."
  - "Se ejecuta la instrucción dentro del 'else'."

explicacion: |
  Al ser la condición falsa, se ejecuta la rama alternativa (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else", "sintaxis"]

tipo: completar
respuesta: "else"
respuestas_validas:
  - "else"

enunciado: "Completa la sintaxis correcta para este fragmento de código:\n\nif (puntuacion > 50) {{\n  print('Excelente');\n}} ___ {{\n  print('Inténtalo de nuevo');\n}}"

explicacion: |
  La estructura completa es 'if' para la condición inicial y 'else' para el caso contrario.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else if", "logica"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "frio", "templado"]

enunciado: "Analiza el siguiente código:\n\nif (temp > 25) {{\n  print('calor');\n}} else if (temp > 0) {{\n  print('templado');\n}} else {{\n  print('frio');\n}}\n\nSi la variable temp es 30, ¿cuál es la salida?"

pasos:
  - "Se evalúa la primera condición: 30 > 25. Es verdadero."
  - "Al cumplirse la primera condición, se ejecuta su bloque y se sale de la estructura."
  - "Las condiciones 'else if' y 'else' se ignoran completamente."

explicacion: |
  En una estructura if/else if/else, solo se ejecuta el primer bloque cuya condición sea verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]
tipo: ordenar
opciones_explicitas: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al encontrar una estructura condicional if-else:"

explicacion: |
  Primero se determina si la condición es verdadera o falsa, luego se elige qué camino seguir y finalmente se procesa la instrucción correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["error_comun", "if_else"]

enunciado: "Observa el siguiente código: if (x > 0) \n  print('Positivo') \n print('Siempre sale'). Si el programador quería que el segundo 'print' SOLO se ejecute si x > 0, pero lo escribió fuera de la indentación, ¿qué tipo de error ha cometido?"

opciones_explicitas: ["error_de_sintaxis", "error_de_logica", "error_de_tipo", "no hay error"]
respuesta: "error_de_logica"
tipo: mc

explicacion: |
  El código es sintácticamente correcto (no dará error al compilar), pero la lógica es errónea porque el segundo comando se ejecutará siempre, independientemente de la condición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["confusión_operadores"]

variables:
  caso: uno_de([["if (edad = 18) { ... }", "error_sintaxis"], ["if (edad == 18) { ... }", "correcto"]])

enunciado: "En muchos lenguajes de programación, intentar usar un solo signo de igual '{caso[0]}' dentro de una condición 'if' en lugar de un doble signo de igual suele provocar un error de tipo '{caso[1]}' o un comportamiento inesperado. ¿Cuál es el operador correcto para comparar igualdad?"

opciones_explicitas: ["=", "==", "!=", "<=>"]
respuesta: "=="
tipo: mc

explicacion: |
  El signo '=' se usa para asignación (dar un valor a una variable), mientras que '==' se usa para comparación (verificar si dos valores son iguales).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["truthy_falsy"]

enunciado: "En lenguajes como Python o JavaScript, una lista vacía [] o el número 0 se evalúan como ___ en una estructura condicional 'if'. (Escribe 'falso' o 'verdadero')"

respuestas_validas:
  - "falso"
respuesta: "falso"
tipo: completar

explicacion: |
  En la evaluación de contextos booleanos (truthy/falsy), los valores vacíos, el cero y el valor null/none se consideran falsos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["lógica_booleana"]

enunciado: "Si tenemos la expresión: 'if (x > 5 && x < 15)'. Si x es 20, ¿cuál es el resultado booleano de la condición?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  Como el operador '&&' (AND) requiere que AMBAS condiciones sean verdaderas, y 20 no es menor que 15, el resultado es falso.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "avanzado"
  tags: ["anidamiento"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al evaluar una estructura 'if-elif-else' para encontrar la primera coincidencia verdadera:"

opciones_explicitas: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
respuesta_orden: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
tipo: ordenar

explicacion: |
  Las estructuras condicionales múltiples se evalúan de arriba hacia abajo. En cuanto se encuentra una condición verdadera, se ejecuta su bloque y se salta el resto de la estructura.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["condicionales", "lógica"]

respuesta: "else"
tipo: "completar"
respuestas_validas:
  - "else"

enunciado: "Mientras que la estructura 'if' permite ejecutar un bloque de código si una condición es verdadera, la cláusula ___ se utiliza para definir qué código debe ejecutarse cuando dicha condición es falsa."

explicacion: |
  La estructura 'if' evalúa una condición. Si es verdadera, ejecuta su bloque. El 'else' es el bloque opcional que se ejecuta únicamente cuando la condición del 'if' resulta ser falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "lógica"]

variables:
  escenario: uno_de([["8 > 5", "verdadero"], ["3 == 10", "falso"], ["5 < 2", "falso"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado booleano que la estructura de control procesará es ___."

explicacion: |
  En programación, las estructuras condicionales dependen de valores booleanos. Si la expresión matemática o lógica se cumple, el resultado es 'verdadero'; de lo contrario, es 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo_de_control", "lógica"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que una estructura 'if' sin un bloque 'else' puede ser utilizada para ejecutar código de forma selectiva sin necesidad de manejar el caso contrario?"

explicacion: |
  Verdadero. Un 'if' independiente es perfectamente válido y se usa precisamente para ejecutar algo solo si se cumple una condición, ignorando el flujo si la condición es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["anidamiento", "flujo"]

respuesta_orden: ["if", "else if", "else"]
tipo: "ordenar"
opciones_explicitas: ["if", "else if", "else"]

enunciado: "En una estructura condicional compuesta (múltiples opciones), ¿cuál es el orden lógico de evaluación que debe seguir el procesador para evaluar condiciones de forma jerárquica?"

explicacion: |
  El programa evalúa primero la condición principal (if). Si no se cumple, pasa a las condiciones intermedias (else if) una por una. Si ninguna se cumple, se ejecuta el bloque por defecto (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["operadores", "comparación"]

variables:
  caso: uno_de([["5 == 5", "igualdad"], ["5 != 5", "desigualdad"]])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["igualdad", "desigualdad"]

enunciado: "Si comparamos la expresión {caso[0]}, el operador utilizado busca determinar la ___ entre los dos valores."

explicacion: |
  El operador '==' comprueba si dos valores son iguales, mientras que '!=' (o distinto de) comprueba si son diferentes. Son la base de las decisiones en los condicionales.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "logica"]

variables:
  datos: [["rojo", "detenerse"], ["verde", "avanzar"], ["amarillo", "precaucion"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["detenerse", "avanzar", "precaucion"]

enunciado: "Un sensor detecta que el semáforo está en color {datos[idx][0]}. Según la lógica de control, la acción a ejecutar es ___."

explicacion: |
  El programa utiliza una estructura condicional para evaluar el estado de la variable 'color'. Si el color es rojo, la acción es detenerse.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "comparacion"]

variables:
  edad: uno_de([15, 20, 12])
  es_mayor: edad >= 18

respuesta: es_mayor
tipo: vf
enunciado: "Si tenemos una variable `edad` con el valor {edad}, ¿es verdadera la expresión `edad >= 18`?"

explicacion: |
  La expresión evalúa si el valor de la variable es mayor o igual a 18. Como {edad} es {edad}, el resultado es {es_mayor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if_else", "condicionales_anidadas"]

variables:
  datos: [["compra_alta", "aplicar_descuento"], ["compra_media", "sin_descuento"], ["compra_baja", "sin_descuento"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "aplicar_descuento"
  - "sin_descuento"

enunciado: "Un sistema de ventas evalúa el tipo de compra: {datos[idx][0]}. Si la condición es verdadera para una 'compra_alta', el sistema debe ___."

pasos:
  - "Evaluar el tipo de compra"
  - "Asignar la acción correspondiente al bloque else o if"

explicacion: |
  En una estructura if/else, el flujo se desvía hacia el bloque que cumple la condición. Para 'compra_alta', se ejecuta el primer bloque.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  temp: uno_de([35, 15, 25])
  es_calor: temp > 30

respuesta: es_calor
tipo: vf
enunciado: "Dada una variable `temp` con valor {temp}, ¿es verdadera la condición `temp > 30`?"

explicacion: |
  Al comparar {temp} con 30, obtenemos el valor booleano {es_calor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["ordenar", "logica_flujo"]

respuesta_orden: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]
tipo: ordenar
opciones_explicitas: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]

enunciado: "Ordena los pasos lógicos de un programa que controla el acceso a un panel de administración mediante condicionales:"

explicacion: |
  Primero se debe verificar si la identidad es correcta (if password_ok), luego si el rol tiene permiso (if user_role == 'admin') y finalmente permitir el acceso.
```

