# Estado actual vs Roadmap

## Implementado

- **Bootstrap del administrador inicial** mediante el endpoint `POST /api/auth/bootstrap-admin`, con validación de clave de instalación y condiciones de existencia previa de usuarios ADMIN.
- **Roles globales y por escuela**, incluyendo reglas para admins, directivos y docentes, y la separación entre rol global y membresías por escuela.
- **Editor de libros** con ruta `/editor`, manejo de borradores en `localStorage` y estructura de datos `Book` para el schema `book.pages@1.0` y `book.pages@1.1`.

## Diseñado

- No hay documentación interna disponible que describa funcionalidades diseñadas o planificadas más allá de lo ya implementado en los documentos actuales.

## Fuera de alcance

- No hay referencias internas en la documentación disponible que indiquen funcionalidades explícitamente fuera de alcance.
