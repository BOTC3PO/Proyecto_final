# MiApp

## Estructura
- apps/web â€” React + TypeScript + Tailwind + React Router v7
- apps/mobile â€” Expo (React Native) + NativeWind (Tailwind RN)
- server â€” MongoDB (native)
- imports â€” repos clonados (opcional)

## Comandos
### Web
cd apps/web
npm install
npm run dev

### Mobile
cd apps/mobile
npm install
# si algo se ve raro con NativeWind:
# npx expo start -c
npm run start

### MongoDB (native)
cd server
# Primer plano:
./start.ps1

# Servicio de Windows (recomendado):
./install-service.ps1
./service-start.ps1
./service-stop.ps1
./uninstall-service.ps1

ConexiÃ³n: mongodb://localhost:27018
(Para habilitar auth, edita server/native/mongod.conf y descomenta 'security.authorization')
