# Fundamentos Avanzados de TypeScript: Más allá del tipado básico

## Introducción: Tipado estructural y seguridad en escala

En el desarrollo frontend moderno, TypeScript no es solo un "superset" de JavaScript con tipos; es una herramienta de diseño de software. A nivel avanzado, el foco deja de estar en declarar variables y se traslada a la composición de tipos, la inferencia inteligente y la garantía de integridad de datos en entornos complejos. El objetivo principal es prevenir errores de lógica en tiempo de compilación que serían difíciles de rastrear en tiempo de ejecución, especialmente en aplicaciones con grandes volúmenes de código o equipos distribuidos.

## Explicación Central: Generics, Utility Types y Type Guards

La potencia real de TypeScript se revela cuando combinamos **Generics**, **Utility Types** y **Type Guards**.

### Generics: Abstracción sin perder seguridad
Los generics permiten crear componentes reutilizables que funcionan con múltiples tipos mientras mantienen la seguridad de tipos. En frontend, son esenciales para APIs genéricas.

```typescript
// Ejemplo real: Wrapper de respuesta de API
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// El compilador infiere el tipo de 'data' al usarlo
async function fetchUser(): Promise<ApiResponse<User>> {
  // ... implementación
}
```

### Utility Types: Transformación de tipos
Las utilidades como `Partial`, `Pick`, `Omit` y `Record` son vitales para la manipulación de interfaces.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Para formularios de edición: todos los campos son opcionales
type UserUpdateForm = Partial<User>;

// Para logs: solo ciertos campos
type UserLog = Pick<User, 'id' | 'name'>;
```

### Type Guards: Refinamiento de tipos
En runtime, necesitamos asegurar que un valor desconocido pertenece a un tipo específico. Los type guards (como `is` o `instanceof`) permiten al compilador afinar el tipo en bloques condicionales.

```typescript
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'role' in value &&
    (value as any).role === 'admin' || (value as any).role === 'user'
  );
}

if (isUser(data)) {
  // Aquí 'data' es de tipo User, no 'unknown'
  console.log(data.role); 
}
```

## Errores Comunes

1.  **Abuso de `any`**: Usar `any` por pereza o desconocimiento destruye la ventaja de TypeScript. Siempre prefiere `unknown` si el tipo es realmente indeterminado, ya que obliga a realizar un guardado explícito.
2.  **Ignorar la inferencia**: Forzar tipos donde TypeScript puede inferirlos aumenta la verbosidad sin agregar valor. Por ejemplo, `const x: string = "hola"` es redundante si el contexto lo deja claro.
3.  **Confundir `interface` con `type`**: Aunque se superponen, `interface` es extensible (puede ser declarada múltiples veces) y se usa mejor para contratos de objetos públicos. `type` es más flexible para uniones, intersecciones y mapeos, ideal para lógica interna.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usar TypeScript avanzado cuando**:
    *   El proyecto crece y la refactorización manual es riesgosa.
    *   Se integra con librerías de terceros que no tienen definiciones de tipos (`@types`).
    *   Se necesita documentar contratos de datos entre frontend y backend.
*   **No forzar la complejidad cuando**:
    *   Es un prototipo rápido (MVP) que cambiará frecuentemente en días.
    *   El código es trivial y la sobrecarga de tipos no aporta seguridad significativa.
    *   Se trabaja con datos dinámicos generados por el usuario final sin esquema definido (ahí, validación en runtime con Zod/Yup es complementaria).

## Ejemplo Extendido: Sistema de Gestión de Permisos

Imagina un sistema donde los permisos se definen dinámicamente. Usamos generics y condicionales para asegurar que solo se asignen roles válidos.

```typescript
// Definición de roles permitidos
type Role = 'admin' | 'editor' | 'viewer';

// Utilidad para generar permisos según el rol
type PermissionsMap = {
  admin: 'create' | 'read' | 'update' | 'delete';
  editor: 'create' | 'read' | 'update';
  viewer: 'read';
};

// Interfaz de usuario con permisos derivados del rol
interface UserWithPermissions<T extends Role> {
  role: T;
  permissions: PermissionsMap[T]; // Acceso indexado a la interfaz
}

// Función de validación con type guard
function assignRole(user: any, newRole: Role): UserWithPermissions<Role> {
  if (!['admin', 'editor', 'viewer'].includes(newRole)) {
    throw new Error('Role invalid');
  }
  
  // TypeScript sabe que user ahora es UserWithPermissions<Role>
  return {
    role: newRole,
    permissions: newRole === 'admin' ? 'create' as 'create' | 'read' | 'update' | 'delete' : 
                 newRole === 'editor' ? 'create' as 'create' | 'read' | 'update' : 
                 'read'
  };
}

// Uso seguro
const adminUser = assignRole({}, 'admin');
// adminUser.permissions es de tipo 'create' | 'read' | 'update' | 'delete'
```

Este enfoque asegura que, al cambiar el tipo `Role`, todo el sistema de permisos se actualice automáticamente, previniendo inconsistencias entre el rol asignado y los permisos disponibles.