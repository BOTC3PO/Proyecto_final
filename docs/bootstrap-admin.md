# Bootstrap del administrador inicial

Esta guia describe como crear el primer usuario administrador mediante el endpoint
`POST /api/auth/bootstrap-admin`. El flujo solo funciona cuando no existe ningun usuario
con `role: "ADMIN"` en la coleccion `usuarios`.

## Configuracion

1. Define una clave de instalacion en el entorno, generada para esta instalacion (la API no arranca con
   valores de ejemplo y en produccion exige al menos 32 caracteres):

```
openssl rand -hex 32   # copiar el resultado en BOOTSTRAP_ADMIN_KEY=
```

2. Reinicia el backend para cargar la nueva variable de entorno.

## Ejecucion del bootstrap

Envia una peticion HTTP con la clave en el header `x-bootstrap-key` y los datos del administrador.

```
POST /api/auth/bootstrap-admin
x-bootstrap-key: <tu BOOTSTRAP_ADMIN_KEY>
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@example.com",
  "fullName": "Administrador Principal",
  "password": "una-clave-larga"
}
```

Respuesta esperada:

```
HTTP/1.1 201 Created
{ "id": "<objectId>" }
```

Si ya existe un usuario con rol administrador, el endpoint responde `409`.
Si la clave es invalida o falta, responde `401`.
