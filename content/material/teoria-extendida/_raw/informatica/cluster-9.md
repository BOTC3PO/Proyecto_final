## La arquitectura invisible: De la revolución de los tubos de vacío a la lógica de los sistemas modernos

Imaginate por un momento que tenés que enviar una caja enorme llena de libros a otra ciudad, pero el camión que la va a llevar solo tiene espacio para cargar paquetes del tamaño de una carpeta escolar. No podés meter la caja entera; tenés que abrirla, sacar cada libro, envolverlo individualmente y escribirle una dirección a cada uno para que lleguen todos juntos a su destino. Si uno se pierde, el resto no sirve de mucho. Esta metáfora, aunque simple, es la base de cómo funciona internet hoy en día. Sin embargo, para entender por qué la tecnología que usás para chatear con tus amigos o ver una película en streaming es posible, no alcanza con mirar solo el paquete que llega a tu celular. Tenés que mirar atrás, mucho más atrás, hasta el momento en que la humanidad decidió que calcular números no debía ser tarea exclusiva de los matemáticos con papel y lápiz, sino algo que una máquina pudiera hacer por vos.

En este capítulo, vamos a recorrer el camino que nos trajo desde las salas abarrotadas de máquinas gigantes hasta la nube invisible donde viven tus archivos. Veremos cómo la **Revolución Informática** transformó nuestra sociedad, cómo hoy dividimos esa inmensa cantidad de datos mediante la **Segmentación**, y finalmente, cómo todo esto se traduce en la planificación de cualquier programa que uses: los **Requisitos Funcionales y No Funcionales**. Estos tres conceptos no están aislados; forman un hilo conductor que va desde el hardware físico hasta la experiencia del usuario final.

### El gran salto: De las salas militares a tu escritorio

Para entender la magnitud de lo que vivimos hoy, hay que recordar de dónde salimos. Hace apenas unas décadas, la "computación" no era algo que se llevaba en el bolsillo. En la década de 1940, cuando nació la computación electrónica moderna, las máquinas eran colosos físicos. La ENIAC, inaugurada en 1945, pesaba casi treinta toneladas. Ocupaba una sala entera y consumía tanta energía como una pequeña ciudad. No tenía pantalla, ni teclado, ni mouse. Se programaba conectando y desconectando cientos de cables físicos y configurando interruptores.

Aquí estaba la primera gran limitante: el tamaño y la fragilidad. Estas primeras computadoras usaban **tubos de vacío**. Imaginá las luces de neón antiguas, pero miles de ellas encendidas y apagadas miles de veces por segundo para procesar información (unos y ceros). El problema era que los tubos se quemaban constantemente, generaban un calor insoportable y eran carísimos de fabricar. Si querías una computadora más poderosa, tenías que hacerla más grande, lo cual significaba más tubos, más calor y más fallos. Era un círculo vicioso tecnológico.

La solución llegó con la invención del **transistor** en la década de 1950. Este pequeño componente de silicio podía hacer lo mismo que un tubo de vacío, pero era diminuto, no se calentaba tanto, no se fundía tan rápido y costaba una fracción del precio. La llegada del transistor fue el detonante de la miniaturización. Si antes necesitabas una sala para hacer un cálculo balístico durante la Segunda Guerra Mundial, ahora podías poner una computadora en un escritorio.

Sin embargo, la verdadera magia ocurrió cuando la electrónica dejó de ser solo para científicos y militares. En la década de 1970, aparecieron las primeras computadoras personales. Máquinas como el Apple II o el IBM PC democratizaron el acceso. De repente, no solo las grandes instituciones podían procesar datos; las escuelas, las oficinas pequeñas y las casas tenían su propia "máquina de pensar". Esto cambió la estructura social y económica del mundo. La información dejó de ser un bien escaso y controlado para convertirse en un flujo constante y accesible. Pero, ¿cómo es que esa información viaja desde un servidor en otro país hasta tu pantalla sin romperse? Ahí entra la segmentación.

### El arte de dividir para conquistar: La segmentación de datos

Volvamos a la metáfora de la caja de libros. Cuando abrí una página web, subiste una foto a redes sociales o enviaste un correo electrónico, tu computadora envió una cantidad enorme de información. Pero las redes de telecomunicaciones (los cables de fibra óptica, las ondas de Wi-Fi, las antenas celulares) tienen límites físicos de cuánto pueden transportar a la vez sin saturarse. Si intentaras enviar un archivo de video de cuatro gigabytes de golpe, la red colapsaría o se perdería la conexión antes de que terminara.

Aquí es donde entra la **segmentación**. Es el proceso mediante el cual un sistema toma un flujo de datos grande y lo divide en partes más pequeñas y manejables, llamadas **paquetes** o **segmentos**. Cada uno de estos paquetes lleva consigo no solo los datos en sí, sino también información de control: quién lo envía, a quién va dirigido, en qué orden debe ir y cómo verificar que no se dañó durante el viaje.

El protocolo más común para esto es TCP (Transmission Control Protocol). Imaginá que TCP es un mensajero muy organizado. Él toma tu archivo, lo corta en pedazos, les pone un número de orden (paquete 1 de 100, paquete 2 de 100, etc.) y los envía por la red. Es interesante notar que estos paquetes pueden tomar caminos diferentes. El paquete número 50 puede viajar por un cable submarino, mientras que el número 51 viaja por una conexión satelital. Al llegar al otro lado, otro programa se encarga de "rearmar" el archivo original poniendo los paquetes en el orden correcto.

¿Por qué es esto tan importante para vos como usuario? Porque la segmentación permite la **multiplexación**. Significa que muchos usuarios pueden compartir el mismo cable de internet al mismo tiempo sin interferirse. Si yo estoy viendo una película en streaming y vos estás jugando un videojuego online, nuestros datos están mezclados en el cable, pero gracias a la segmentación y a las etiquetas de control, cada paquete sabe a dónde pertenece. Sin esta técnica, internet sería lento, inestable y solo permitiría una conexión a la vez.

La segmentación también resuelve el problema de la pérdida de datos. Si un paquete se pierde en el camino, el sistema receptor no tiene que pedirte que vuelvas a enviar todo el archivo de cuatro gigabytes. Solo tiene que pedir que se reenvíe ese paquete específico. Esto hace que la comunicación digital sea eficiente y robusta, capaz de sobrevivir a cortes de línea momentáneos o rutas congestionadas.

### Del código al diseño: Requisitos funcionales y no funcionales

Hasta aquí hemos hablado de la historia de las máquinas y de cómo viajan los datos. Pero, ¿cómo se diseña un software que funcione en este mundo complejo? Cuando un programador o un analista de sistemas se sienta a crear una aplicación, por ejemplo, una app de banco o un videojuego, no empieza a escribir código a lo loco. Primero necesita definir las reglas del juego. Esas reglas se dividen en dos grandes categorías: los **requisitos funcionales** y los **requisitos no funcionales**.

Aunque suenan técnicos, son conceptos que usás todo el tiempo, aunque no lo notes. La diferencia fundamental es simple: los requisitos funcionales describen **qué** hace el sistema, mientras que los no funcionales describen **cómo** lo hace.

Pensemos en un sistema de compras en línea. Un requisito funcional sería: *"El sistema debe permitir al usuario agregar productos al carrito de compras"*. Otro sería: *"El sistema debe generar un recibo de compra al finalizar el pago"*. Estos son claros, directos y medibles. Si el sistema no permite agregar productos, falla su propósito principal. Son las acciones, las funciones, las cosas que el usuario espera poder hacer. Sin requisitos funcionales, no tendríamos un software útil, tendríamos solo código vacío.

Pero, ¿qué pasa si el sistema permite agregar productos, pero tarda diez segundos en abrir la página? ¿Qué pasa si la contraseña se guarda en texto plano, sin ninguna protección? Ahí entran los **requisitos no funcionales**. Estos definen la calidad del servicio. Un requisito no funcional podría ser: *"El tiempo de respuesta de la página de inicio no debe superar los 2 segundos"*. Otro sería: *"Las contraseñas de los usuarios deben estar encriptadas utilizando el estándar AES-256"*.

Fijate la diferencia. El requisito funcional dice "guardar la contraseña". El no funcional dice "guardarla de forma segura". Si un sistema cumple con el requisito funcional (guarda la contraseña) pero ignora el no funcional (la guarda en claro), el sistema es técnicamente "funcional" según la lista de tareas, pero es un fracaso total porque cualquiera podría robar los datos de los usuarios.

En la práctica, los requisitos no funcionales son a menudo los más difíciles de cumplir y los que más impacto tienen en la experiencia del usuario. Incluyen aspectos como:
*   **Rendimiento:** ¿Qué tan rápido responde el sistema?
*   **Seguridad:** ¿Cómo protege la información sensible?
*   **Disponibilidad:** ¿Cuánto tiempo está el sistema operativo? (Por ejemplo, "99,9% del tiempo").
*   **Escalabilidad:** ¿Puede el sistema manejar más usuarios si se hace famoso?
*   **Usabilidad:** ¿Es fácil de usar para una persona que nunca ha visto una computadora?

### La intersección de las tecnologías

Es importante notar que estos tres temas que analizamos no existen en vacíos separados. Están profundamente entrelazados. La **Revolución Informática** nos dio la capacidad de tener dispositivos pequeños y potentes. La **Segmentación** nos permite que esos dispositivos se comuniquen globalmente de manera eficiente. Y los **Requisitos de Software** son el plano que guía a los ingenieros para construir aplicaciones que aprovechen esa infraestructura sin colapsarla.

Por ejemplo, si querés diseñar una app para ver videos en vivo (streaming), necesitás entender que la segmentación es vital. No podés enviar el video completo de golpe. Tenés que segmentarlo en tiempos muy cortos (segundos) para que el usuario pueda empezar a ver el contenido inmediatamente, sin esperar a que se descargue todo. Ese es un requisito no funcional de rendimiento y latencia. Pero también tenés un requisito funcional: *"El usuario debe poder pausar y reanudar la reproducción"*.

Si los desarrolladores ignoran la historia de la computación y asumen que las redes son perfectas y rápidas siempre, fallarán en los requisitos no funcionales. Si ignoran la segmentación, su app no funcionará en redes móviles lentas. Y si ignoran los requisitos funcionales, la app será rápida y segura, pero no servirá para nada porque no permitirá al usuario ver el video.

### Conclusión: La complejidad detrás de lo simple

Al cerrar este capítulo, mirá tu teléfono o tu computadora. Lo que ves en la pantalla es el resultado de décadas de evolución tecnológica. Detrás de cada clic hay una máquina que procesa información a velocidades inimaginables para los creadores de la ENIAC. Detrás de cada mensaje de texto hay cientos de paquetes segmentados viajando por cables de fibra óptica y ondas de radio, rearmándose al otro lado. Y detrás de toda esa magia técnica, hay un equipo de personas que definió cuidadosamente qué debe hacer el programa (funcional) y cómo debe hacerlo (no funcional) para que la experiencia sea fluida, segura y útil.

Entender estos conceptos no es solo para aprobar un examen de informática. Es para comprender el mundo en el que vivís. En la era digital, la capacidad de distinguir entre lo que un sistema *hace* y *cómo lo hace*, y de valorar la infraestructura invisible que lo sostiene, es una competencia fundamental. La tecnología no es solo código; es historia, es física, es lógica y, sobre todo, es diseño humano.