# Documentación Completa del Proyecto Final

## Resumen Ejecutivo

Este proyecto es una plataforma educativa integral diseñada como tesis final. Es una solución full-stack que conecta una aplicación web moderna con un back-end robusto, proporcionando un entorno de aprendizaje interactivo a estudiantes, profesores y administradores.

### Descripción del Sistema

La plataforma educativa está diseñada para:
- Gestionar cursos, materias y aulas virtuales
- Establecer un sistema de gobernanza democrática en la institución
- Permitir la evaluación a través de cuestionarios y simulaciones
- Facilitar la comunicación entre stakeholders
- Implementar un sistema de pagos para usuarios enterprise
- Dar seguimiento al progreso académico de los estudiantes

## Estructura del Proyecto

```
Proyecto_final/
├── api/                              # Backend Express/TypeScript
│   ├── src/
│   │   ├── base/                     # Configuración base DB, middlewares, helpers
│   │   ├── db/                       # Clientes de base de datos
│   │   ├── lib/                      # Utilidades JWT, validación, seguridad
│   │   ├── routes/                   # Endpoints API por dominio funcional
│   │   ├── schema/                   # Validaciones Zod
│   │   ├── types/                    # Tipos TypeScript compartidos
│   │   └── index.ts                  # Entry point
├── apps/
│   └── web/                          # Frontend React/TypeScript
│       └── src/
│           ├── pages/                # Componentes por página/vista
│           ├── components/           # Componentes UI compartidos
│           ├── services/             # Wrappers de llamadas API
│           ├── hooks/                # Hooks personalizados React
│           ├── router.tsx            # Rutas del frontend
│           ├── auth/                 # Contexto de autenticación
│           └── layouts/              # Layouts de la aplicación
└── auto docs/                        # Documentación generada
```

## Características Principales

### 1. Sistema de Autenticación y Autorización

**Funcionamiento:**
- **JWT-based authentication**: Tokens con JWT para sesiones de usuario
- **Roles diferenciados**: Administradores, profesores, estudiantes
- **Sesiones de invitado**: `POST /api/auth/guest` para pruebas
- **Registro**: Proceso de creación de cuentas de usuarios
- **Bootstrap admin**: Endpoint para inicializar administradores

**Mecanismos:**
- Tokens de acceso (3600 segundos por defecto)
- Tokens de refresh (configuración opcional)
- Middleware de protección de rutas
- Headers requeridos: `Authorization: Bearer <token>`

### 2. Gestión Cursos/Aulas

**Funcionalidades:**
- Crear y administrar aulas virtuales
- Configuración de material y recursos
- Seguimiento de asistencia
- Historial de calificaciones
- Publicaciones y tareas dentro del aula

**Endpoints Clave:**
- `GET /api/aulas`: Listar aulas
- `POST /api/aulas`: Crear nueva aula
- `PUT /api/aulas/:id`: Editar aula
- `DELETE /api/aulas/:id`: Eliminar aula

### 3. Sistema de Evaluación

**Cuestionarios:**
- Creación dinámica de cuestionarios
- Aplicación de quizzes a estudiantes
- Toma de respuestas con sistema de calificación automático
- Historial de intentos

**Simulaciones:**
- Simulaciones de física interactivas
- Entorno de Laboratorio Web3
- Herramientas educativas interactivas

### 4. Sistema de Progreso

**Características:**
- Seguimiento de progreso por estudiante
- Vista del progreso global
- Historial de modulos completados
- Reportes de avance

### 5. Sistema de Gobernanza

**Propuesta de Gobernanza**
- Sistema democrático de votación institucional
- Ruta propuesta vs ruta actual con documentación
- Reglas de quórum (GOV_GOVERNANCE_RULE)

**Funcionalidades:**
- `GET /api/governance/rule`: Ver regla actual
- `GET /api/governance/proposals`: Lista de propuestas
- `POST /api/governance/proposal`: Crear propuesta
- `POST /api/governance/proposal/:id/vote`: Votar

### 6. Sistema de Pagos

**Feature Enterprise:**
- Módulo de pagos para usuarios enterprise
- Configuración de planes de servicio
- Facturación y reporting
- Manejo de delinquencia
- Gobernanza de contenidos con aprobación de comunidad

**Endpoints Clave:**
- `POST /api/payments/webhook`: Webhooks de pagos
- `GET /api/payments/status`: Estado de transacciones

### 7. Sistema de Reportes

**Tipos de Reportes:**
- Reportes globales por institución
- Reportes por aula
- Reportes por profesor
- Reportes por estudiante
- Reportes administrativos

**Funcionalidades:**
- Generación automática
- Exportación de datos
- Reportes de actividad

### 8. Sistema de Estadísticas

**Análisis de Datos:**
- Estadísticas de uso
- Métricas de rendimiento
- Información sobre comportamiento

**Características:**
- Dashboard para profesores y estudiantes
- Visualización de datos grafica
- KPIs relevantes

### 9. Módulos Curriculares

**Contenido:**
- Cursos completos con material
- Materias organizadas
- Sistema de asignaciones
- Evaluación continua

### 10. Sistema Administrativo

**Funcionalidades para Admin:**
- Gestión de usuarios
- Moderación de contenidos
- Control de aulas y cursos
- Reportes globales

**Permisos de Admin:**
- `POST /api/auth/bootstrap-admin`: Crea usuario admin
- `DELETE /api/users/:id`: Elimina usuario
- `PUT /api/profesor/update`: Actualiza perfil profesor
- `GET /api/admin/info`: Información general admin

## Arquitectura Técnica

### Backend (API - Express 5 + TypeScript)

**Tecnologías:**
- Express 5 server framework
- TypeScript para type safety
- SQLite como base de datos principal
- Zod para validaciones
- JWT para autenticación
- Helmet para seguridad

**Características de Seguridad:**
- Headers de seguridad configurados vía Helmet
- Rate limiting a través de `express-rate-limit`
- CORS configurado dinámicamente
- Validación de JWT y tokens

**Estructura de Routes:**
- Cada feature tiene su propio archivo de rutas
- Prefijo `/api` para todos los endpoints
- Wildcard routes con sintaxis `/*splat`

### Frontend (Web App - React 19)

**Tecnologías:**
- React 19 con JSX
- TypeScript para type safety
- Vite como build tool
- Tailwind CSS v4 para estilos
- React Router v7 para navegación
- D3-Geo + TopoJSON para mapas/geografía
- Lucide-react para iconos

**Estructura:**
- Componentes por página (one component per page)
- Services wrapper for API calls
- Auth Context for state management
- Custom hooks for reusable logic
- Layouts for consistent UI structure

### Base de Datos

**SQLite Configuration:**
- `core_schema.sqlite`: Esquema principal del sistema
- `modulos_quizzes.sqlite`: Contenido educativo y evaluaciones
- `Diccionario.sqlite`: Diccionario específico del sistema
- `geonames_index.sqlite`: Índice geográfico para maps

**Feature Dictionary (SQLite):**
- Servicio `/api/dictionary`
- Modo modo solo lectura por defecto
- Cache de 64KB para optimización
- Índices para lectura rápida

## Configuración del Sistema

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `PORT` | Puerto del servidor web | 5050 |
| `CORS_ORIGIN` | Origen CORS | `http://localhost:5173` |
| `DB_KIND` | Tipo de base de datos | `sqlite` |
| `SQLITE_CORE_PATH` | Ruta archivo esquema core | `./src/base/core_schema.sqlite` |
| `SQLITE_CONTENT_PATH` | Ruta archivo contenido | `./src/base/modulos_quizzes.sqlite` |
| `SQLITE_PATH` | Ruta archivo diccionario | `./src/diccionarios/Diccionario.sqlite` |
| `JWT_SECRET` | Secreto para tokens JWT | `dev-secret` |
| `BOOTSTRAP_ADMIN_KEY` | Key para crear admin | *(vacío)* |
| `SQLITE_CACHE_KB` | Cache para dictionary | 65536 |
| `BILLING_PAST_DUE_DAYS` | Días para morosidad | 7 |
| `BILLING_SUSPEND_DAYS` | Días para suspensión | 30 |
| `GOV_GOVERNANCE_RULE` | Regla gobernanza | `SUPERMAJORITY_2_3` |

## Roles de Usuario

### Administrador (Role: `ADMIN`)
- Control total del sistema
- Gestión completa de usuarios
- Moderación de contenidos
- Configuración global
- Acceso ilimitado

### Profesor (Role: `PROFESOR`)
- Control del aula
- Publicación de contenido
- Creación de evaluaciones
- Gestión de estudiantes del aula

### Estudiante (Role: `ESTUDIANTE`)
- Acceso a cursos y aulas
- Evaluación y progreso
- Interacción con comunidad

## Workflow del Sistema

### Para Estudiantes
1. Registro de cuenta
2. Selección de curso/aula
3. Acceso a modulos educativos
4. Respondiendo evaluaciones
5. Progreso de seguimiento
6. Feedback y calificaciones

### Para Profesor
1. Registro o creación de cuenta
2. Configuración de aula
3. Subida de material
4. Asignación de tareas
5. Evaluación de estudiantes
6. Recopilación de reportes

### Para Administrador
1. Acceso al panel de administración
2. Gestión de usuarios
3. Aprobación de contenidos
4. Monitoreo global
5. Configuración institucional

## Tecnologías Usadas

### Backend
- Node.js (v18+)
- Express 5 server
- TypeScript 5.x
- SQLite3 para base de datos
- Zod para validaciones
- JWT (jsonwebtoken)
- Express-rate-limit
- Helmet

### Frontend
- React 19
- Vite
- TypeScript 5.x
- Tailwind CSS v4
- React Router v7
- D3-Geo (maps)
- TopoJSON (geo data)
- Lucide-react (icons)

## Servicios Integrados

### Dictionary Service
- Servicio de diccionario dedicado
- Soporte de búsqueda eficiente
- Caching para rendimiento
- Sistema de índices

### Maps Service
- Geocoding y location services
- Visualización de mapa
- Índice geográfico optimizado

### Payments Service
- Módulo integrado de pagos
- Webhooks para transacciones
- Gestión de enterprise accounts

### Audit Log
- Logging de actividades críticas
- Tracking de acciones del sistema
- Auditoría de seguridad

## Roadmap y Estado del Proyecto

### Estado Actual: Alpha 0.5

| Componente | Estado |
|---|---|
| Backend API | ✅ Funcional |
| Frontend Web | ✅ Casi completo |
| Mobile App | 🚧 Estructura base |
| Database | ✅ SQLite configurado |
| Authentication | ✅ JWT implemented |
| Modules | ✅ Funcional |
| Evaluation | ✅ Fully functional |
| Governance | ✅ Implemented |
| Reports | ✅ Functional |
| Payments | ✅ Basic implementation |
| Admin Panel | ✅ Fully functional |

### Próximas Fases Propuestas

1. Migración SQLite a producción optimizada
2. Completar Mobile App
3. Optimización de rendimiento
4. Migración de test suite
5. Mejoras en UX/UI
6. Implementación de multilingüismo
7. Integración con redes sociales externas

### Componentes Pendientes

- Mobile App: Todavía en fase de estructura base
- Tests: Scripts de prueba no implementados
- Deploy: Scripts de despliegue no implementados
- Analytics: Sistema de análisis mejorado
- Mobile-to-web integration: Conexión móvil-web

## Integraciones

### API Integration
- API base: `http://localhost:5050`
- Configurado vía env vars
- CORS habilitado entre fronted y backend

### Third-party Services (Configurable)
- MongoDB (para migración, no requerido en producción)
- Payment providers (configurables)
- Maps services (geonames)

## Consideraciones de Seguridad

### Auth Security
- Tokens JWT con expiración configurable
- Secret tokens en env vars
- Rate limiting activado
- Middleware de autorización

### Data Security
- Validación de inputs
- Sanitización de datos
- CORS严格控制
- Database permissions

## Conclusión

Esta plataforma educativa ofrece una solución completa y robusta con:

✅ Sistema de gestión integrado
✅ Arquitectura escalable
✅ Tecnología moderna (React 19, Express 5, TypeScript)
✅ Funcionalidades avanzadas de gobernanza
✅ Sistema de evaluación completo
✅ Integración de pagos para enterprise
✅ Reportes y estadísticas detallados

El proyecto es una excelente base para una plataforma educativa moderna, con capacidad para escalar y adaptarse a las necesidades de instituciones educativas del futuro.