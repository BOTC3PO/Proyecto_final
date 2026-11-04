# Plan: app sin conexión con Tauri (L8)

Pedido de Javier (3 de noviembre de 2026): una **app aparte**, hecha con Tauri, que funcione **completamente sin
conexión**. La app trae los diccionarios y los módulos oficiales con sus evaluaciones, verifica al usuario en el
propio dispositivo y sincroniza todo con la web cuando hay red. El permiso sin conexión dura 3 meses; si la
plataforma deja de estar en producción, pasa a no vencer y se pueden crear usuarios locales.

Este plan reemplaza al de `modo-sin-conexion.md`, que suponía agregar el modo sin conexión a la app Expo. La app
Expo sigue igual para el uso con red: avisos al celular, mensajes y pagos.

## Qué hace la app

| Sin red, siempre | Con red, cuando la hay |
|---|---|
| Entrar con una cuenta ya activada en ese dispositivo, o con un usuario local | Activar una cuenta de la plataforma por primera vez |
| Leer la teoría y usar las herramientas de los módulos oficiales descargados | Descargar o actualizar paquetes de módulos y diccionarios |
| Hacer las prácticas y las evaluaciones de esos módulos, con nota al instante | Sincronizar: subir intentos y progreso, bajar el progreso hecho en la web |
| Consultar el diccionario de los idiomas descargados | Renovar el permiso de 3 meses |
| Ver el progreso, los logros y el historial de intentos | Vincular un usuario local a una cuenta de la plataforma |

La app está pensada para alumnos, pero también tiene en cuenta a padres o tutores y a docentes (ver «Padres, tutores
y docentes»). Quedan fuera: mensajes, pagos y la gestión completa de aulas, que siguen en la web y en la app Expo.

Varias personas pueden usar el mismo dispositivo (tablets compartidas de una escuela). Cada una tiene su perfil, y
el contenido descargado se comparte entre todas.

## Cómo está hecha

- **Proyecto nuevo `apps/offline`**, con Tauri 2 para Android y también para Windows y Linux (salas de
  computación). La interfaz reutiliza los componentes y las páginas de `apps/web`: módulos, cuestionarios,
  diccionario y progreso.
- **API local dentro de la app.** Las páginas de la web piden datos con `apiGet` y `apiPost`. En la app, esas
  llamadas las atiende una API local que responde lo mismo que el servidor, con los mismos formatos. Así las páginas
  no se reescriben: cambia de dónde salen los datos.
  - Está escrita en **TypeScript** y corre dentro de la propia web: un interceptor de `fetch` desvía a la API local
    las llamadas a `/api/...`. Reutiliza la lógica del servidor que no depende de Node (formatos de respuesta,
    candados por dependencias, motor de preguntas). La web usa 222 rutas: se implementan solo las que hacen falta sin
    conexión, por fases.
  - Revisión del 4 de noviembre de 2026: antes estaba prevista en Rust. Se cambió porque obligaba a reescribir y
    mantener dos veces la lógica del servidor.
  - **Rust** queda para lo que el navegador no puede hacer solo: la base SQLite, los paquetes, el diccionario y los
    ZIP. En Tauri se llama con comandos; en el «modo navegador» de Huayra 5 y 6, el mismo programa atiende esas
    operaciones por HTTP en `127.0.0.1`.
- **Almacenamiento:**
  - El contenido y los diccionarios van en SQLite, manejado desde Rust (`rusqlite` con SQLite incluido).
  - Arquitecturas: 64 y 32 bits (x86_64 e i686 en Windows y Linux; arm64 y armv7 en Android). Hay computadoras de
    prueba de los dos tipos.
  - Las imágenes y el audio van en archivos dentro de la carpeta de datos de la app.
  - Los datos de cada persona (perfil, intentos, progreso, cola de sincronización) van en una base SQLite aparte
    por dispositivo.
- **Motor de preguntas:** `@vb/vblang` ya corre en la web y corre igual en la app (en el visor o en el navegador). Cada intento guarda la semilla,
  la versión del cuestionario y las respuestas, así el servidor lo puede volver a corregir.

## Padres, tutores y docentes

El permiso firmado lleva los roles de la persona y sus vínculos confirmados por el servidor: los hijos de un padre o
tutor, y los alumnos de las aulas de un docente. En el dispositivo, cada rol solo ve los perfiles con los que tiene
un vínculo confirmado o los usuarios locales que creó.

### Padres, tutores y acompañantes
- **Acceso a la teoría.** Pueden leer la teoría y las herramientas de todos los módulos descargados en el dispositivo,
  para explicarle al alumno si lo necesita. No rinden evaluaciones ni suman progreso.
- **Seguimiento sin red.** Si el hijo usa el mismo dispositivo, el tutor ve su progreso, sus notas y su tiempo de
  estudio al momento. Si usa otro, ve la última copia que bajó en la sincronización, con su fecha.
- **Vista de padre sin iniciar sesión.** En la pantalla de entrada, «Ver como padre o tutor» abre, sin usuario ni
  contraseña, el progreso de los perfiles del dispositivo y la teoría de los módulos descargados. Es solo lectura: no
  rinde, no edita y no ve contraseñas ni mensajes. Como todo queda en el dispositivo, se puede ser más permisivo que
  en la web:
  - los usuarios locales se ven siempre;
  - los perfiles de cuentas de la plataforma se ven si su dueño lo deja activado («Mostrar mi progreso en la vista de
    padre»; activado por defecto en menores de 18);
  - en las computadoras de la escuela, un profesor del dispositivo puede apagar la vista de padre.
  Un padre o tutor con cuenta de la plataforma sigue pudiendo entrar con ella para ver a sus hijos aunque usen otro
  dispositivo.
- **Recuperar la contraseña.** Sin red no se puede mandar un correo. La contraseña de un usuario local la cambia un
  profesor de ese dispositivo; la de una cuenta de la plataforma, el padre o tutor con vínculo confirmado, o la propia
  persona al volver a tener red.
- **Compartir el dispositivo.** Un modo «dispositivo familiar» deja entrar a varios hermanos con un mismo tutor
  responsable.

### Docentes
- **Crear módulos y aulas sin red.** El docente arma módulos (teoría, herramientas, preguntas) y aulas en el
  dispositivo, con los mismos editores de la web. Al sincronizar se suben a la plataforma como suyos.
- **Qué no está sin red:** lo que depende de otras personas o del servidor. Responder mensajes y el chat del aula,
  anuncios, encuestas, calendario compartido, economía del aula (subastas, tickets), pagos, invitar a otros
  docentes y unir alumnos por código. La web muestra esas funciones deshabilitadas, con el aviso «Necesita
  conexión».
- **Exportar a ZIP.** Los módulos que crea el docente se exportan a un archivo ZIP (teoría, herramientas, preguntas,
  imágenes y un `modulo.json` con la versión del formato).
- **Importar ZIP.** La app importa esos ZIP sin conexión, desde un archivo o un pendrive, con «Importar módulo». El
  módulo queda disponible para todos los perfiles del dispositivo; si ya existe uno con el mismo identificador, la app
  ofrece reemplazarlo o guardarlo como copia. Así crear y compartir módulos sigue funcionando aunque la plataforma
  deje de estar en producción. El formato del ZIP es el mismo que el de
  `temario-oficial`, para que un módulo se pueda sumar a ese repositorio.
- **Preparar y dar clase sin red.** El docente lee los módulos con las resoluciones de las evaluaciones visibles.
  También tiene un **modo clase** para proyectar la teoría y las herramientas.
- **Dispositivos del aula.** En tablets o computadoras de la escuela, el docente puede:
  - dar de alta a los alumnos de su aula en el dispositivo, una sola vez y con red;
  - crear usuarios locales para quien no tiene cuenta;
  - poner una contraseña nueva a un alumno;
  - ver el progreso de todos los perfiles del dispositivo.
- **Asignar sin red.** El docente marca qué módulos y evaluaciones tiene que hacer el aula, con una fecha. Los
  alumnos lo ven en el dispositivo. Al sincronizar, la asignación pasa a ser una tarea del aula en la web, y los
  intentos de los alumnos quedan asociados a ella.
- **Sin internet en la escuela.** El docente exporta los resultados de los alumnos a un archivo, firmado y cifrado
  con la clave del aula. Después lo importa desde la web en su casa, y el servidor vuelve a corregir cada intento
  igual que en una sincronización normal. A la inversa, puede llevar en un archivo las asignaciones y los alumnos
  nuevos.
- **Exámenes propios del docente:** en esta versión no se descargan, porque las respuestas quedarían en dispositivos
  de alumnos. Se pueden agregar más adelante como opción del docente, con la misma regla de la nueva corrección en
  el servidor.

La app no es para directivos ni administradores. Los roles salen de la base de datos de la plataforma, y una misma
cuenta puede tener varios: la app usa los de alumno, profesor y padre o tutor que tenga la cuenta y deja afuera los
de directivo y administrador. Una cuenta de directivo o administrador que también es profesor o padre usa la app
con ese rol. Si no tiene ninguno de esos tres, la app le pide agregarse el de alumno desde la web antes de activarla.

- **Roles al día:** la app toma los roles en la activación y los vuelve a leer en cada sincronización.
- **Pedir otro rol (padre o tutor, profesor o directivo):** la app ofrece el mismo pedido que la web
  (`POST /api/solicitar-rol`). Sin red, el pedido queda en la cola y se manda en la próxima sincronización. Lo
  aprueba un administrador en la plataforma, y el rol nuevo aparece en la app en la sincronización siguiente. Las
  reglas son las del servidor (por ejemplo, ser mayor de 18 años).
- **Administrador:** solo lo otorga otro administrador desde la plataforma; no pasa por la app.
- **Usuarios locales:** hay dos tipos, **alumno** y **profesor**, y se elige al crear el usuario (no hay servidor
  que apruebe). Como no se guardan en la base de la plataforma, no necesitan sus reglas: no piden correo, fecha de
  nacimiento ni aprobación. El padre o tutor no necesita usuario local: usa la vista de padre sin iniciar sesión.

## Computadoras del Estado (público principal)

Revisión del 4 de noviembre de 2026. El público principal son las computadoras que el Estado entregó a escuelas y
alumnos. Fuentes: notas de prensa y documentación pública de los programas; no hay una ficha oficial única por lote,
así que antes de publicar hay que probar en equipos reales.

| Programa | Años | Equipo | Sistema |
|---|---|---|---|
| Conectar Igualdad (primeras generaciones) | 2010–2015 | Atom N450/N455 con 1 a 2 GB; después Celeron N2600/N2806 con 2 a 4 GB | Windows 7 u 8.1 y Huayra 1 a 4 (Debian 7 a 9) o Ubuntu |
| Plan Federal Juana Manso y Conectar Igualdad relanzado | 2021–2023 | Celeron N4020, 4 GB DDR4, SSD de 240 GB, pantalla de 11,6" (1366×768) | Huayra 5 (Debian 10) o Huayra 6 (Debian 11); algunos lotes con Windows 10 en arranque doble |
| Conectar Igualdad Bonaerense | 2023–2024 | 4 GB DDR4, SSD de 120 GB | Windows 11 (según una fuente sin confirmar) |

El programa nacional se dejó de financiar en 2024; Huayra quedó en la 6.5 «Ráfaga» (Debian 12, febrero de 2024) y no
tuvo versiones nuevas.

### Qué puede correr cada uno

- **Windows 10 y 11: sí.** Tauri usa WebView2, que viene en Windows 11 y se instala en Windows 10. Como muchas
  escuelas no tienen internet, el instalador tiene que llevar WebView2 adentro (`webviewInstallMode` en modo
  `offlineInstaller`, unos 130 MB más) en lugar de descargarlo.
- **Windows 7 y 8.1: no conviene.** La última versión de WebView2 para esos sistemas es la 109 (enero de 2023), sin
  actualizaciones de seguridad.
- **Huayra 6.5 (Debian 12): sí.** Tiene `libwebkit2gtk-4.1`, que es lo que pide Tauri 2.
- **Huayra 5 y 6 (Debian 10 y 11): no, con Tauri 2.** Esas versiones solo tienen `libwebkit2gtk-4.0`, y Tauri 2
  necesita la 4.1. Tampoco sirve un AppImage armado en Debian 12, porque pide una versión de glibc más nueva que la de
  Debian 11. Es el caso más común en las netbooks de 2021 a 2023.
- **Netbooks de 2010 a 2015:** quedan afuera de la app de escritorio (1 a 2 GB de memoria y sistemas sin soporte).

El hardware de 2021 en adelante alcanza: el visor web usa entre 200 y 400 MB de memoria, el contenido de una materia
pesa pocos megabytes y la web ya funciona en 1366×768.

### Solución para Huayra 5 y 6: «modo navegador»

La misma app, sin visor propio. El programa de la app (en Rust) se compila **estático** (destino
`x86_64-unknown-linux-musl`, sin depender de las bibliotecas del sistema), levanta un servidor solo en `127.0.0.1` y
abre la app en el navegador que trae Huayra (Firefox ESR o Chromium). Los datos quedan en la misma base SQLite.

La API local es la misma en todos los casos (TypeScript dentro de la web). Lo que cambia es cómo llega a la base:
- en Android y en Windows o Huayra 6.5, por los comandos de Tauri;
- en Huayra 5 y 6, por HTTP a `127.0.0.1`.

Cuidado con el navegador: una netbook que nunca se actualizó puede tener Firefox ESR 102 o anterior, y la web hoy se
compila para navegadores más nuevos. El paquete de Huayra se compila con un destino más viejo (`es2020`) y se prueba
en Firefox ESR 102.

### Pruebas antes de publicar
- Máquinas virtuales con Huayra 6.0 (Debian 11), Huayra 6.5 (Debian 12) y Windows 10, con 4 GB de memoria y sin red.
- Al menos una netbook real Juana Manso o Conectar Igualdad 2022.

## Cuentas y verificación

### Cuenta de la plataforma
1. **Activación, con red y una sola vez por dispositivo.**
   - La persona entra con su usuario y su contraseña. El servidor responde con un **permiso sin conexión firmado**:
     identificador, nombre, roles y vencimiento.
   - La firma es Ed25519; la app trae la clave pública y la clave privada queda solo en el servidor.
   - La app guarda una huella de la contraseña (PBKDF2, con sal propia del dispositivo). La contraseña en sí no se
     guarda.
2. **Ingreso sin red.** La app comprueba la contraseña contra la huella, la firma del permiso y que no esté
   vencido.
3. **Renovación.** Cada sincronización renueva el permiso por 3 meses más. Si el servidor responde que la cuenta
   fue dada de baja o suspendida, el perfil se bloquea; los intentos pendientes se suben antes. Si la contraseña
   cambió, la app pide la nueva.
4. **Vencido sin haber sincronizado:** el perfil sigue existiendo, pero para entrar hay que conectarse una vez.

El plazo sale de una variable del servidor, `OFFLINE_PERMISO_DIAS=90`. La app también trae un valor por defecto de
90 días.

### Si la plataforma deja de estar en producción («modo autónomo»)
Se publica una versión de la app con `modoAutonomo: true`, sin cambiar el código. En ese modo:
- los permisos ya emitidos no vencen;
- se pueden crear **usuarios locales** de alumno o de profesor: nombre, usuario y contraseña que existen solo en ese
  dispositivo;
- se descargan los paquetes desde un archivo, porque ya no hay servidor (ver «Distribución»).

### Usuarios locales mientras la plataforma está en producción
Decidido el 4 de noviembre de 2026: la opción existe desde el primer día, con el interruptor `usuariosLocales`.
Sirven para quien no tiene cuenta o no quiere crearla:
- sus datos no salen del dispositivo;
- más adelante se pueden **vincular** a una cuenta de la plataforma, y entonces su historial sube y el servidor lo
  vuelve a corregir.

Para la Ley 25.326 es lo más simple: si los datos no salen del dispositivo, la plataforma no los trata.

## Evaluaciones sin conexión

- Las prácticas y las evaluaciones de los módulos oficiales se generan y se corrigen en el dispositivo. La nota se
  ve al instante.
- Las respuestas correctas viajan en el paquete; alguien con conocimientos técnicos podría leerlas. Por eso:
  - En el dispositivo, la nota cuenta para el progreso y los logros locales.
  - Al sincronizar, el servidor **vuelve a corregir** cada intento con su semilla, su versión y sus respuestas, y
    recién ahí acredita monedas, progreso oficial y ranking. Si las notas no coinciden, vale la del servidor y el
    intento queda marcado para revisión.
  - En el historial de la web, los intentos hechos en la app figuran como «hecho sin conexión».
- Exámenes jefe: se pueden rendir sin red como el resto, con la misma regla.
- Los exámenes que arma un docente para su aula no se descargan.

## Sincronización

- **Subida.** Cada cambio local (intento, avance de un módulo, logro, edición del perfil) se guarda como un evento
  con un identificador único. Al volver la red, la app manda los eventos en orden a `POST /api/offline/sync`. El
  servidor los aplica una sola vez aunque lleguen repetidos.
- **Bajada.** En la misma llamada vuelve lo hecho en la web desde la última sincronización: progreso, intentos y
  logros. Así la app y la web muestran lo mismo.
- **Conflictos:**
  - Los intentos nunca chocan, porque cada uno es un hecho.
  - El progreso se combina quedándose con el mayor avance.
  - En el perfil gana el servidor.
- **Versiones del contenido.** Si un módulo cambió en el servidor, la app ofrece actualizar el paquete. Los
  intentos hechos con la versión anterior se corrigen con esa versión, porque el servidor conserva las versiones de
  los cuestionarios.

## Paquetes

### Módulos oficiales
- Un paquete por materia: módulos con teoría y herramientas, plantillas de preguntas, configuración de
  evaluaciones, imágenes y audio.
- Todo el temario tiene 2382 módulos y 2130 cuestionarios. Pesa unos 39 MB de texto, que comprimido queda en 6 a
  8 MB, más 17 MB de imágenes y 29 MB de audio. Una materia sola pesa pocos megabytes.

### Módulos de la escuela
- Además del temario oficial, el alumno puede descargar los módulos que crearon los docentes de **su escuela**,
  incluidos los asignados en sus aulas, que se descargan solos. El servidor solo entrega los de las escuelas donde el
  alumno está registrado. Los exámenes propios de los docentes siguen sin descargarse (ver «Docentes»).
- Se arman a pedido, con el mismo formato que los paquetes oficiales, y llevan la fecha de la última modificación
  para saber si cambiaron.

### Diccionario
- Un paquete por idioma; el diccionario entero pesa 1,35 GB y no entra cómodo en un celular.
- Tamaño de los datos sin comprimir, sin contar índices:

| Idioma | Palabras | Tamaño |
|---|---|---|
| Alemán | 959.221 | 271 MB |
| Francés | 2.035.150 | 210 MB |
| Inglés | 1.389.724 | 118 MB |
| Español | 835.748 | 100 MB |
| Latín | 836.886 | 63 MB |
| Italiano | 540.964 | 59 MB |
| Portugués | 382.428 | 46 MB |
| Ruso | 456.461 | 42 MB |
| Hindi | 185.582 | 17 MB |
| Esperanto | 134.873 | 9 MB |
| Japonés | 125.732 | 8 MB |
| Chino | 74.290 | 5 MB |
| Coreano | 68.290 | 4 MB |
| Árabe | 29.852 | 3 MB |

- Para los idiomas grandes conviene ofrecer también una versión **reducida**: las 100.000 palabras más usadas,
  sin formas flexionadas. Ronda los 15 a 30 MB.

### Fuente: el repositorio `temario-oficial`
- La teoría y los exámenes viven también en un repositorio git aparte, `temario-oficial`, versión **1.0**, con la
  etiqueta `v1.0`. Tiene solo teoría, cuestionarios, herramientas, dependencias, exámenes jefe, libros e
  imágenes: 4501 archivos, 71 MB.
- Lo genera `install/copiar_temario_oficial.py` desde `content/material`. El manifiesto que se arma desde la copia
  es idéntico byte a byte al que se arma desde el repositorio principal.
- Los paquetes de la app salen de ese repositorio y llevan su versión. Para actualizar el temario se corrige ahí,
  se sube la versión (1.1 para correcciones, 2.0 si cambian temas o exámenes) y se regeneran los paquetes. Si la
  plataforma deja de estar en producción, ese repositorio alcanza para seguir manteniendo el contenido.

### Formato
- Cada paquete es un archivo SQLite comprimido, con su versión y su hash.
- Se generan en el servidor con un script, `config/generar-paquetes.sh`, a partir de `temario-oficial` y de
  `Diccionario.sqlite`. La API los sirve en `GET /api/offline/paquetes` (lista) y `GET /api/offline/paquetes/:id`
  (descarga).
- **Descarga desde un archivo:** la app también puede importar un paquete desde un archivo, por ejemplo copiado de
  un pendrive. Sirve para escuelas sin internet y para el modo autónomo.

## Distribución

- El APK de Android se compila en el servidor, firmado con una clave propia, y se descarga desde la web para
  instalarlo a mano. Más adelante, la Play Store.
- Los instaladores de Windows y Linux salen del mismo proyecto.
- **Paquete completo para el modo autónomo:** los instaladores más todos los paquetes en una carpeta, para copiar
  a un pendrive o publicar en cualquier lado.

## Fases

| Fase | Qué | Días |
|---|---|---|
| 0 | Prueba: instalar Rust, el SDK y el NDK de Android; envolver la web en un APK; certificado propio; probar en un celular real | 1 a 2 |
| 1 | Esqueleto de `apps/offline`, API local sobre SQLite, perfiles por dispositivo | 3 a 4 |
| 2 | Activación con permiso firmado, huella de contraseña, plazo de 90 días, usuarios locales, modo autónomo | 3 a 4 |
| 3 | Paquetes: generación en el servidor, descarga, importación desde archivo, diccionario por idioma, módulos de la escuela del alumno | 5 a 6 |
| 4 | Módulos, prácticas y evaluaciones locales; progreso y logros en el dispositivo | 4 a 5 |
| 5 | Sincronización en las dos direcciones, nueva corrección en el servidor, vinculación de usuarios locales | 4 a 5 |
| 6 | Distribución: APK firmado, instaladores de escritorio (Windows con WebView2 incluido), «modo navegador» para Huayra 5 y 6, paquete completo | 3 a 4 |
| 7 | Pruebas (modo avión, permiso vencido, cuenta dada de baja, intentos repetidos, notas que no coinciden) y documentación (manual, política de privacidad) | 3 |
| 8 | Padres, tutores y acompañantes: teoría de los módulos, seguimiento, perfiles de los hijos, contraseña nueva, dispositivo familiar | 2 a 3 |
| 9 | Docentes: crear módulos y aulas sin red, exportar e importar módulos en ZIP, funciones con red deshabilitadas, resoluciones y modo clase, alumnos del aula en el dispositivo, asignaciones, resultados por archivo | 9 a 11 |

**Total estimado: 37 a 47 días de trabajo** (26 a 33 la parte de alumnos). Las fases 0 a 4 ya dan una app usable sin red; la sincronización se
puede entregar después.

## Riesgos

- **Guardado seguro en Android:** Tauri no trae un equivalente oficial de `expo-secure-store`. Para la clave que
  protege la huella y el permiso se usa el Keystore de Android con un complemento chico en Kotlin; en escritorio,
  el almacén de claves del sistema.
- **Celular sin bloqueo de pantalla:** cualquiera que lo tome puede intentar adivinar la contraseña. La app limita
  los intentos fallidos, con espera creciente.
- **Respuestas en el dispositivo:** se aceptan para estudiar; lo que vale (monedas, ranking, progreso oficial) lo
  confirma el servidor.
- **Celulares viejos:** la app usa el WebView del sistema. Hay que fijar una versión mínima de Android (propuesta:
  Android 8) y probar en uno real.
- **Espacio:** los diccionarios grandes pesan; por eso van por idioma y con versión reducida.
- **Ley 25.326:** la política de privacidad tiene que decir qué guarda la app en el dispositivo, que eliminar el
  perfil lo borra todo y que los usuarios locales no envían datos.
