# Plan: modo sin conexión de la app de Android (L8)

> **Reemplazado** el 3 de noviembre de 2026 por [app-sin-conexion-tauri.md](app-sin-conexion-tauri.md): la app sin
> conexión va a ser una app aparte hecha con Tauri. Este plan queda como referencia.

Pedido de Javier (2026-10-29): una versión de la app que solo necesite conexión con la API para iniciar sesión, y
que guarde la cuenta en el dispositivo para las veces siguientes. Este plan lo baja a fases que se pueden
entregar por separado. Fecha: 3 de noviembre de 2026.

## Qué existe hoy

- **App** (`apps/mobile`, Expo 54, solo Android): inicio de sesión, inicio por rol, módulos, cuestionarios,
  tareas, mensajes, calendario y pagos. Todo pide los datos a la API en el momento: sin red, no muestra nada.
- **Sesión:** el token de acceso (1 hora) y el de renovación (7 días) ya se guardan en `expo-secure-store`, que en
  Android cifra con el Keystore del sistema. Si el de renovación vence o no hay red, hay que volver a escribir la
  contraseña.
- **API de sincronización** (`routes/sync.ts`): recibe una cola de cambios (`progreso`, `quiz_attempt`,
  `competencia`, `mensajes_leidos`), entrega una foto del aula (`/api/sync/pull/:aulaId`) y lista conflictos.
  Ninguna app la usa todavía.
- **Contenido:** el temario completo pesa unos 39 MB en JSON (2382 módulos, 49.193 plantillas de preguntas), más
  17 MB de imágenes y 29 MB de audio. Comprimido, el texto queda en unos 6 a 8 MB.
- **Preguntas:** las genera el servidor al empezar un intento, con una semilla. El motor (`@vb/vblang`, 1,2 MB)
  es TypeScript sin dependencias de Node: puede correr dentro de la app.

## Qué significa «sin conexión» en este plan

| Funciona sin red | Necesita red |
|---|---|
| Entrar con la cuenta ya usada en ese celular | El primer inicio de sesión y cada 30 días |
| Leer la teoría de los módulos descargados | Exámenes formales y exámenes jefe (la nota tiene que salir del servidor) |
| Practicar con los cuestionarios de práctica (corrección local) | Pagos |
| Ver tareas, calendario, notas y mensajes de la última sincronización | Recibir mensajes nuevos |
| Escribir una entrega o un mensaje (se envían al volver la red) | Las monedas y el ranking (se acreditan cuando el servidor corrige) |

## Decisiones que necesito

1. **Guardar la contraseña.** Propongo no guardarla tal cual: guardar una huella de ella (PBKDF2 con sal propia
   del dispositivo) que solo sirve para comprobar, sin red, que quien entra sabe la contraseña. Para la persona es
   lo mismo: escribe su usuario y contraseña y entra. Si alguien roba el celular, no puede leer la contraseña.
   Alternativa: no pedir nada y entrar directo (más cómodo, pero cualquiera con el celular entra).
2. **Cuánto puede durar sin conectarse.** Propongo 30 días. Pasado ese plazo pide red una vez, para que una cuenta
   dada de baja, suspendida o con la contraseña cambiada deje de funcionar en el celular.
3. **Qué se descarga.** Propongo por materia, a elección del alumno, más lo asignado en sus aulas (se descarga
   solo). Descargar todo el temario serían unos 90 MB con audio.
4. **Práctica sin red.** La corrección local da la nota al instante, pero las respuestas viajan en el dispositivo:
   alguien hábil podría verlas. Propongo que la práctica sin red cuente para el progreso y que las monedas se
   acrediten solo cuando el servidor vuelva a corregir el intento con la misma semilla.
5. **Cómo se instala.** «Build local»: un APK que se compila en el servidor (`eas build --local` o
   `expo run:android --variant release`) y se instala a mano, sin tienda. Más adelante, la Play Store.

## Fases

### Fase 1 · Sesión sin conexión (2 a 3 días)
- Al iniciar sesión con red, la app guarda: el usuario, sus roles, el token de renovación y la huella de la
  contraseña (decisión 1), todo en `expo-secure-store`.
- Sin red, la pantalla de inicio comprueba la huella y entra en «modo sin conexión» (aviso visible arriba).
- Con red otra vez, renueva la sesión sola; si el servidor responde que la cuenta no existe, está suspendida o la
  contraseña cambió, borra todo lo guardado y pide entrar de nuevo.
- Plazo máximo sin conectarse (decisión 2). «Cerrar sesión» borra la huella, los tokens y el contenido del
  dispositivo.
- API: el token de renovación de la app pasa a durar 30 días (hoy 7); el resto queda igual.

### Fase 2 · Paquetes de contenido (4 a 5 días)
- API nueva `GET /api/offline/paquetes` (lista con versión y tamaño) y `GET /api/offline/paquetes/:id` (módulos
  con teoría y herramientas, plantillas de práctica y configuración de los cuestionarios), comprimidos y con un
  hash para saber si cambiaron. Solo contenido público o de las aulas de quien lo pide; nunca respuestas de
  exámenes formales.
- La app guarda los paquetes en SQLite (`expo-sqlite`) y las imágenes en archivos (`expo-file-system`), y muestra
  cuánto ocupan y cómo borrarlos.
- Las pantallas de módulos leen del dispositivo y, si hay red, actualizan.

### Fase 3 · Práctica sin conexión (4 a 5 días)
- `@vb/vblang` dentro de la app: genera las preguntas con una semilla y corrige localmente.
- Cada intento queda en una cola local con la semilla y las respuestas.
- Hay que comprobar que el motor da exactamente lo mismo en Hermes (el motor de JavaScript de la app) que en el
  servidor: pruebas que generen 1000 preguntas en los dos lados y comparen.

### Fase 4 · Sincronización (3 a 4 días)
- Al volver la red, la app manda la cola a `/api/sync/push`. El servidor **vuelve a corregir** cada intento con su
  semilla y sus respuestas (no confía en la nota que manda el celular); recién ahí acredita monedas y progreso.
- Las entregas de tareas y los mensajes escritos sin red se envían en el orden en que se hicieron. Si una tarea ya
  cerró, se avisa.
- `/api/sync/pull/:aulaId` trae la foto del aula (tareas, calendario, notas, mensajes recientes) para leer sin red.
- Conflictos: gana el servidor; el alumno ve un aviso con lo que no se pudo guardar.

### Fase 5 · APK local (1 a 2 días)
- Configuración de compilación local (firma propia, versión, URL de la API) y un script en `config/` que compila
  el APK en el servidor y lo deja descargable desde la web para instalarlo a mano.

### Fase 6 · Pruebas y documentación (2 días)
- Pruebas de la API (paquetes, nueva corrección en el servidor, plazo de 30 días, cuenta dada de baja).
- Pruebas de la app: modo avión al entrar, a mitad de un cuestionario y al volver la red.
- Manual de usuario y política de privacidad (qué queda guardado en el celular y cómo borrarlo).

**Total estimado: 16 a 21 días de trabajo.** Las fases 1 y 2 ya sirven solas: entrar sin red y leer la teoría.

## Riesgos

- **Seguridad del celular:** la huella y los tokens están cifrados por Android, pero un celular sin bloqueo de
  pantalla deja entrar a cualquiera. La app puede pedir que el dispositivo tenga bloqueo para activar el modo sin
  conexión.
- **Espacio:** algunos celulares de alumnos tienen poco lugar; por eso la descarga es por materia.
- **Diferencias del motor de preguntas** entre la app y el servidor: si existieran, la nota local y la del servidor
  no coincidirían. Lo cubre la prueba de la fase 3.
- **Ley 25.326:** guardar datos en el celular es tratamiento de datos; la política tiene que decirlo, y cerrar
  sesión tiene que borrar todo.
