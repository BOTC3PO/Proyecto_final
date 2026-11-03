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

Quedan fuera: aulas, tareas de docentes, mensajes, pagos y exámenes que arma un docente. Todo eso depende de otras
personas y sigue en la web y en la app Expo.

Varias personas pueden usar el mismo dispositivo (tablets compartidas de una escuela). Cada una tiene su perfil, y
el contenido descargado se comparte entre todas.

## Cómo está hecha

- **Proyecto nuevo `apps/offline`**, con Tauri 2 para Android y también para Windows y Linux (salas de
  computación). La interfaz reutiliza los componentes y las páginas de `apps/web`: módulos, cuestionarios,
  diccionario y progreso.
- **API local dentro de la app.** Las páginas de la web piden datos con `apiGet` y `apiPost`. En la app, esas
  llamadas las atiende una API local que responde lo mismo que el servidor, con los mismos formatos, leyendo de
  SQLite. Así las páginas no se reescriben: cambia de dónde salen los datos. Unas pruebas comparan las respuestas
  locales con las del servidor para que no se separen.
- **Almacenamiento:**
  - El contenido y los diccionarios van en SQLite (`tauri-plugin-sql`).
  - Las imágenes y el audio van en archivos dentro de la carpeta de datos de la app.
  - Los datos de cada persona (perfil, intentos, progreso, cola de sincronización) van en una base SQLite aparte
    por dispositivo.
- **Motor de preguntas:** `@vb/vblang` ya corre en la web y corre igual en la app. Cada intento guarda la semilla,
  la versión del cuestionario y las respuestas, así el servidor lo puede volver a corregir.

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
- se pueden crear **usuarios locales**: nombre, usuario y contraseña que existen solo en ese dispositivo;
- se descargan los paquetes desde un archivo, porque ya no hay servidor (ver «Distribución»).

### Usuarios locales mientras la plataforma está en producción
También se pueden permitir desde el primer día, con el interruptor `usuariosLocales`. Sirven para quien no tiene
cuenta o no quiere crearla:
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

### Formato
- Cada paquete es un archivo SQLite comprimido, con su versión y su hash.
- Se generan en el servidor con un script, `config/generar-paquetes.sh`, a partir de la base y de
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
| 3 | Paquetes: generación en el servidor, descarga, importación desde archivo, diccionario por idioma | 4 a 5 |
| 4 | Módulos, prácticas y evaluaciones locales; progreso y logros en el dispositivo | 4 a 5 |
| 5 | Sincronización en las dos direcciones, nueva corrección en el servidor, vinculación de usuarios locales | 4 a 5 |
| 6 | Distribución: APK firmado, instaladores de escritorio, paquete completo | 1 a 2 |
| 7 | Pruebas (modo avión, permiso vencido, cuenta dada de baja, intentos repetidos, notas que no coinciden) y documentación (manual, política de privacidad) | 3 |

**Total estimado: 23 a 30 días de trabajo.** Las fases 0 a 4 ya dan una app usable sin red; la sincronización se
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
