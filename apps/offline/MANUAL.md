# Virtual Book sin conexión — manual de uso

La app sin conexión sirve para estudiar con Virtual Book sin internet: leer la teoría de los módulos, hacer las
prácticas y las evaluaciones con la nota al instante y consultar el diccionario. Cuando hay internet, sube lo hecho a
la plataforma y baja lo que se hizo en la web.

Está pensada para alumnos y para equipos compartidos (las tablets o las computadoras de una escuela, la computadora de
la familia): cada persona tiene su perfil y el contenido descargado es de todo el equipo.

## 1. Instalar

Los instaladores están en la página «Descargas» de Virtual Book (enlace al pie de la página) o en el paquete
completo, que se puede copiar a un pendrive.

| Equipo | Qué bajar | Cómo se instala |
|---|---|---|
| Android 8 o posterior | `virtualbook-…-android.apk` | Abrirlo en el teléfono. La primera vez pide permiso para instalar apps de esa fuente. |
| Windows 10 y 11 | `…-windows-x64.exe` (64 bits) o `…-windows-x86.exe` (32 bits) | Abrirlo y seguir los pasos. No necesita internet. Windows puede avisar que el programa no es conocido: «Más información → Ejecutar de todas formas». |
| Huayra 6.5 y Debian 12 | `…-linux-escritorio-amd64.deb` | Abrirlo con el instalador de paquetes del sistema. |
| Huayra 5 y 6, otros Linux | `…-linux-navegador-amd64` (64 bits) o `-i386` (32 bits) | El `.tar.gz` se instala sin contraseña de administrador: descomprimirlo y, en una terminal dentro de la carpeta, escribir `sh instalar.sh`. El `.deb` lo instala para todo el equipo. |

En Huayra 5 y 6 la app se abre en el navegador del equipo. Hay que abrirla siempre desde el menú de aplicaciones
(«Virtual Book sin conexión», en Educación): si se escribe la dirección a mano, la app pide abrirla desde el menú.

Para comprobar que un archivo llegó entero, cada descarga muestra su código en «Verificación (SHA-256)».

## 2. Entrar

Hay dos formas:

- **Con tu cuenta de Virtual Book.** La primera vez hace falta internet: entrá con el mismo usuario (o correo) y la
  misma contraseña de la web. Si tenés la verificación en dos pasos, la app pide el código. Después entrás sin
  internet durante **3 meses**; cada vez que te conectás, el plazo vuelve a empezar.
- **Con un usuario local.** En «Registrate» se crea un usuario que vive solo en ese equipo, sin internet y sin correo.
  Puede ser de alumno o de profesor. Sus datos no salen del equipo; si después querés pasarlos a una cuenta de
  Virtual Book, ver «Vincular un usuario local».

Después de 5 contraseñas incorrectas seguidas hay que esperar un rato antes de volver a probar, y la espera crece con
cada fallo.

La primera vez que se entra puede aparecer el aviso de la política de privacidad: la política se lee sin internet,
desde el pie de la página.

## 3. Bajar materias y diccionarios

La app trae Matemática. Para sumar más: **Mi perfil → Contenido sin conexión**.

- **Bajar:** con internet, cada materia y cada diccionario se baja por separado. Si una materia necesita temas de otra
  (por ejemplo, Antropología pide un tema de Historia), se baja también esa otra.
- **Actualizar:** aparece cuando hay una versión más nueva del contenido.
- **Importar desde un archivo:** sin internet, desde un archivo copiado de un pendrive o del paquete completo
  (carpeta `Paquetes`). Cada materia y cada diccionario es un archivo.
- **Módulos de mi escuela:** los que crearon los docentes de tu escuela. Se actualizan solos cada vez que entrás con
  internet con tu cuenta.

Lo bajado sirve para todos los perfiles del equipo. Quitar una materia no borra el progreso de nadie.

## 4. Estudiar

En **Módulos** están los módulos de las materias bajadas. Los que tienen candado piden terminar antes otros módulos:
el candado dice cuáles, aunque sean de una materia que no está en el equipo. Sin conexión solo se abre lo que ya está
desbloqueado.

Las prácticas y las evaluaciones se corrigen en el equipo y la nota sale al instante. Aprobar la evaluación de un
módulo lo completa y desbloquea los siguientes. En el historial del módulo están todos tus intentos.

En **Progreso** y en **Mi perfil** (pestañas «Progreso» y «Logros») se ve el avance por materia. El diccionario
funciona con los idiomas bajados.

## 5. Sincronizar

Con una cuenta de Virtual Book, lo que hacés sin internet queda guardado y sube solo:

- al entrar con internet,
- después de cada evaluación entregada, si hay internet,
- o con **Mi perfil → Sincronización → Sincronizar ahora**.

Ahí también se ve cuántos intentos faltan subir, cuándo fue la última vez y hasta qué día funciona la cuenta sin
internet.

La plataforma vuelve a corregir cada intento que sube, y **vale la nota de la plataforma**. Si no coincide con la del
equipo, el historial del módulo muestra al lado del intento la nota de la plataforma («Plataforma: 0/2», por
ejemplo) y la sincronización lo avisa. Pasa, por ejemplo, si
alguien cambió la nota guardada en el equipo.

Lo que hiciste en la web también baja: el progreso (se queda el mayor avance) y los intentos.

### Vincular un usuario local

Si empezaste con un usuario local y después tenés una cuenta de Virtual Book: **Mi perfil → Sincronización →
Vincular con una cuenta de la plataforma**, con internet. Tu historial, tu progreso y tus favoritos pasan a la cuenta,
la plataforma vuelve a corregir cada intento y el usuario local deja de existir.

## 6. Lo que necesita internet

En la app no aparecen las clases, las tareas, los pagos, los mensajes, el calendario, las monedas, la tienda de temas
ni las encuestas: dependen del servidor o de otras personas. Se usan desde la web o desde la app de Virtual Book con
internet. Lo mismo pasa con la verificación en dos pasos, con descargar los datos que guarda la plataforma y con dar de
baja la cuenta: se hacen desde la web, en «Mi perfil».

La vista para padres y tutores y las herramientas para docentes en la app llegan en próximas versiones. Hoy, un
profesor local puede leer la teoría de los módulos.

## 7. Tus datos en este equipo

El equipo guarda tu perfil, una huella de tu contraseña (nunca la contraseña), tu progreso, tus intentos con las
respuestas y tus favoritos. Los detalles están en la política de privacidad, punto 9.

En **Mi perfil → Tus datos en este dispositivo**:

- **Descargar en JSON:** una copia de todo lo que el equipo guarda de tu perfil.
- **Borrar este perfil del dispositivo:** pide tu contraseña y borra todo lo tuyo del equipo. Tu cuenta de Virtual
  Book sigue igual: podés volver a activarla con internet. Si quedan intentos sin subir, la app avisa antes: conectate
  y tocá «Sincronizar ahora», o borrá igual (se pierden).

Si no podés entrar (por ejemplo, porque la cuenta fue suspendida), en la pantalla de ingreso está **Quitar un perfil
de este dispositivo**, con el usuario y la contraseña de ese perfil.

Si la cuenta se da de baja en la plataforma, la app borra sus datos del equipo la próxima vez que se conecta.

Para desinstalar: en Android, desinstalar la app borra todos sus datos. En una computadora, la carpeta de datos
puede quedar: conviene borrar los perfiles antes. En Linux con el `.tar.gz`, `sh desinstalar.sh --borrar-datos` borra
también los datos.

## 8. Mensajes y qué hacer

| Mensaje | Qué pasa | Qué hacer |
|---|---|---|
| «Para usar tu cuenta de la plataforma en este dispositivo, conectate a internet una vez.» | La cuenta nunca se activó en este equipo. | Entrar una vez con internet. |
| «Pasaron más de 3 meses sin conectarte…» | Venció el permiso para usar la cuenta sin internet. No se perdió nada. | Entrar una vez con internet: se renueva y sube lo pendiente. |
| «Tu contraseña cambió en la plataforma…» | Cambiaste la contraseña en la web. | Entrar con la contraseña nueva, con internet. |
| «Esta cuenta está suspendida o fue dada de baja en la plataforma.» | La escuela o la plataforma suspendió la cuenta. Lo que habías hecho sin internet se subió antes. | Consultar con la escuela. Para sacar el perfil del equipo: «Quitar un perfil de este dispositivo». |
| «Demasiados intentos con la contraseña incorrecta…» | Hubo 5 o más contraseñas incorrectas seguidas. | Esperar los segundos que indica. |
| «Necesita conexión: esta función no está disponible sin conexión.» | Esa parte depende del servidor. | Usarla desde la web. |
| «Plataforma: …» al lado de un intento | La nota de la plataforma no coincide con la del equipo. | Vale la de la plataforma. Si te parece un error, consultá con tu docente. |
| «Abrí Virtual Book desde el menú de aplicaciones…» (Huayra 5 y 6) | Se abrió escribiendo la dirección en el navegador. | Abrirla desde el menú de aplicaciones. |
