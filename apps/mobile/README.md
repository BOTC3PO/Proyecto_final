# apps/mobile — Virtual Book (Expo / React Native)

PLAN-R Parte 1: fundación conectada (login real, sesión persistente,
shell de alumno, puente `WebContent` hacia la web). Ver
`tareas_pendientes/PLAN-R-app-react-native.md` para el plan completo
(Partes 2-5).

## Arquitectura

- **Expo managed + `expo-router`** (rutas por archivo en `app/`).
- **Híbrido nativo + WebView**: navegación/auth/listas son nativas;
  contenido rico (presentaciones, bloques, mapas, libros) se embebe vía
  `src/components/WebContent.tsx`, que carga rutas de `apps/web` dentro
  de un WebView con la sesión inyectada por query param (nunca cookies).
- **Una sola paleta** (`src/theme/tokens.js`), mapeada del tema default
  de `apps/web/src/index.css`. Los 8 temas web no se portaron.
- **Tipos copiados, no compartidos** (`src/types/`): no hay workspace
  npm entre `api`/`apps/web`/`apps/mobile` hoy: cada tipo copiado trae
  un comentario con su origen en `apps/web`.

## Correr en desarrollo

Desde la raíz del repo, un solo comando levanta los 3 (api :5050 + web
:5173 + Expo en modo LAN — necesario para el WebView y para probar
desde un teléfono):

```bash
pnpm dev:mobile
```

(`pnpm dev`, sin `:mobile`, sigue existiendo y sólo levanta api+web —
lo de siempre para trabajar en la web sola.)

Alternativa manual, sólo la app (si api/web ya están arriba por su
cuenta): `pnpm --filter mobile run dev` (alias de `expo start --lan`),
o desde `apps/mobile/` directamente `npx expo start --web` para el
fallback en navegador (ver limitaciones abajo).

### Probar en un teléfono físico (Android/iOS, misma red WiFi)

1. Instalá **Expo Go** en el teléfono.
2. Corré `pnpm dev:mobile` (o `npx expo start` desde esta carpeta).
3. Escaneá el QR (o entrá manualmente `exp://<IP-LAN-de-tu-PC>:8081`).
4. La app resuelve la URL de la API sola: usa la MISMA IP que Metro
   (`Constants.expoConfig.hostUri`, puerto :5050) — no hace falta
   configurar nada si la API corre en la misma PC que Metro. Ver
   `src/api/client.ts` (`resolveApiBaseUrl`).
5. Si la API corre en OTRA máquina, seteá `EXPO_PUBLIC_API_BASE_URL`
   (ver `.env.example`) con esa URL explícita — pisa la detección
   automática.

**CORS**: el fetch nativo de un teléfono real NO aplica CORS (es una
restricción sólo de navegadores) — no hace falta tocar nada en la API
para esto. CORS sólo importa para el fallback `--web` (ver abajo).

### Emulador Android/iOS

Mismo flujo: `npx expo start`, después `a` (Android) o `i` (iOS) en la
terminal interactiva (necesita `adb`/Android Studio o Xcode instalados
— no verificado en este entorno de desarrollo, sin emulador disponible
acá).

### Fallback: `expo start --web`

`expo-secure-store` no existe en web (no hay concepto de
keychain/keystore en un navegador) — `src/lib/secureStorage.ts` cae a
`localStorage` ahí sólo para que este modo sea usable como loop rápido
de desarrollo; en Android/iOS reales sigue siendo 100% SecureStore.

Como corre en un navegador, ahí SÍ aplica CORS: la API sólo permite
`http://localhost:5173` (la web) por defecto. Si usás `--web`, agregá
el puerto que te imprima Expo (default 8081) a `CORS_ORIGIN` en
`api/.env`:

```
CORS_ORIGIN=http://localhost:5173,http://localhost:8081
```

(y reiniciá la API — `.env` se lee una sola vez al arrancar).

## Variables de entorno

Copiá `.env.example` a `.env.local` (gitignored) si necesitás pisar la
detección automática de la API:

```
EXPO_PUBLIC_API_BASE_URL=http://192.168.0.69:5050
```

## Estado (Parte 1)

- ✅ Login real contra `POST /api/auth/login`, refresh automático en
  401, sesión persistente en SecureStore (sobrevive reinicio de app).
- ✅ Shell de alumno: tabs Inicio/Módulos/Tareas/Calendario/Mensajes/
  Perfil. Inicio muestra datos reales (`/api/modulos`, `/api/progreso`,
  `/api/tareas`, `/api/economia/saldos`).
- ✅ `WebContent` (puente WebView) mínimo viable: carga una ruta web
  autenticada. Sin modo chromeless (`?embed=1`, sin navbar) — pantalla
  completa nativa alrededor lo compensa por ahora; anotado como tarea
  web si se necesita más adelante.
- ⚠️ **No verificado en Android/iOS real** — este entorno de desarrollo
  no tiene emulador ni dispositivo conectado (sin `adb`, sin
  `emulator`). Verificado sí: typecheck limpio, Metro bundlea sin
  errores, y el flujo completo (login → dashboard con datos reales)
  funciona vía `expo start --web` con el CORS de arriba agregado.

## Estado (Parte 2)

- ✅ Módulos: lista (`/api/modulos`, búsqueda + filtro por materia) +
  detalle (`/api/modulos/:id`).
- ✅ Teoría, dispatch por tipo: Texto/Nota/Artículo/Documento/Video son
  texto plano nativo (expandible); Enlace abre por `Linking` (o
  WebContent si es ruta interna); Presentación/Herramienta/
  HerramientaStandalone/Libro/TuesdayJS abren el módulo completo en
  WebContent — reusa `TheoryItemCard` de la web en vez de reconstruir
  un router por tipo de recurso.
- ✅ Cuestionarios: sólo lista, tap abre el módulo en WebContent —
  jugar nativo es Parte 3 a propósito.
- ✅ Calendario (tab nueva): lista de eventos del mes actual
  (`/api/calendario/unificado`), sin edición ni navegación de mes.
- ✅ Mensajes: tabs Mensajes/Avisos, lista + detalle + responder
  (`/api/mensajeria/hilos*`, `/api/mensajeria/avisos*`). Crear hilo
  nuevo (buscar destinatario) queda afuera — sólo responder existentes.
- ⚠️ Mismo bloqueo de entorno que Parte 1 (sin device/emulador); esta
  vez además la extensión del navegador de este entorno quedó
  intermitente durante la verificación, así que Parte 2 sólo se
  typecheckeó limpio y se revisó por lectura de código — no se probó
  en vivo ni siquiera vía `--web`. Recomendado probar en un teléfono
  real antes de dar esto por cerrado.
