# Frontend — JavaScript orientado a objetos (cuestionario, 24 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Objeto

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["objetos"]

tipo: mc
opciones_explicitas: ["Datos (propiedades) y comportamiento (métodos)", "Solo datos", "Solo funciones", "Solo textos"]
respuesta: "Datos (propiedades) y comportamiento (métodos)"

enunciado: "¿Qué agrupa un objeto?"

explicacion: |
  Bajo una misma identidad.
```

### 2 — Propiedad

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["propiedades"]

tipo: mc
opciones_explicitas: ["`alumno.nombre`", "`alumno(nombre)`", "`alumno->nombre`", "`alumno:nombre`"]
respuesta: "`alumno.nombre`"

enunciado: "¿Cómo se accede a la propiedad `nombre` del objeto `alumno`?"

explicacion: |
  También con corchetes.
```

### 3 — Método

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["metodos"]

tipo: mc
opciones_explicitas: ["Una función dentro de un objeto", "Una variable", "Un comentario", "Un tipo"]
respuesta: "Una función dentro de un objeto"

enunciado: "¿Qué es un método?"

explicacion: |
  Se llama con `objeto.metodo()`.
```

### 4 — This

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["this"]

tipo: mc
opciones_explicitas: ["Al objeto sobre el que se llama el método", "Al navegador", "A la función", "A la clase madre"]
respuesta: "Al objeto sobre el que se llama el método"

enunciado: "¿A qué apunta `this` dentro de un método?"

explicacion: |
  Depende de cómo se llama.
```

### 5 — Copia

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["referencias"]

tipo: mc
opciones_explicitas: ["Hace que `b` apunte al mismo objeto, sin copiarlo", "Copia el objeto", "Borra `a`", "Da un error"]
respuesta: "Hace que `b` apunte al mismo objeto, sin copiarlo"

enunciado: "¿Qué hace `const b = a` si `a` es un objeto?"

explicacion: |
  Un cambio en `b` se ve en `a`.
```

### 6 — Spread

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["copia"]

tipo: mc
opciones_explicitas: ["`{{ ...a }}`", "`a.copy()`", "`copy(a)`", "`a = a`"]
respuesta: "`{{ ...a }}`"

enunciado: "¿Cómo se hace una copia superficial de un objeto?"

explicacion: |
  Para copias profundas, `structuredClone`.
```

### 7 — Clase

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["clases"]

tipo: mc
opciones_explicitas: ["Una plantilla para crear objetos del mismo tipo", "Un objeto concreto", "Una función global", "Un arreglo"]
respuesta: "Una plantilla para crear objetos del mismo tipo"

enunciado: "¿Qué es una clase?"

explicacion: |
  Cada objeto creado es una instancia.
```

### 8 — New

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["new"]

tipo: mc
opciones_explicitas: ["Crea una nueva instancia de la clase", "Define la clase", "Borra la clase", "Importa un archivo"]
respuesta: "Crea una nueva instancia de la clase"

enunciado: "¿Qué hace `new Alumno(\"Ana\")`?"

explicacion: |
  Ejecuta el constructor.
```

### 9 — Constructor

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["constructor"]

tipo: mc
opciones_explicitas: ["Al crear una instancia con `new`", "Al definir la clase", "Al cerrar la página", "Nunca"]
respuesta: "Al crear una instancia con `new`"

enunciado: "¿Cuándo se ejecuta el `constructor`?"

explicacion: |
  Inicializa las propiedades.
```

### 10 — Getter

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["get"]

tipo: mc
opciones_explicitas: ["Para acceder al promedio como si fuera una propiedad", "Para borrar", "Para importar", "Para repetir"]
respuesta: "Para acceder al promedio como si fuera una propiedad"

enunciado: "¿Para qué sirve `get promedio()`?"

explicacion: |
  Se usa `ana.promedio`, sin paréntesis.
```

### 11 — Extends

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["herencia"]

tipo: mc
opciones_explicitas: ["Hace que Docente herede de Persona", "Importa Persona", "Borra Persona", "Crea una instancia"]
respuesta: "Hace que Docente herede de Persona"

enunciado: "¿Qué hace `class Docente extends Persona`?"

explicacion: |
  Reutiliza propiedades y métodos.
```

### 12 — Super

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["super"]

tipo: mc
opciones_explicitas: ["Para llamar al constructor de la clase madre", "Para crear otra clase", "Para borrar", "Para exportar"]
respuesta: "Para llamar al constructor de la clase madre"

enunciado: "¿Para qué sirve `super(nombre)` en el constructor de una clase hija?"

explicacion: |
  Debe llamarse antes de usar `this`.
```

### 13 — Sobrescribir

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["override"]

tipo: mc
opciones_explicitas: ["Definir en la hija un método con el mismo nombre que el de la madre", "Borrar el método", "Copiar la clase", "Importar el método"]
respuesta: "Definir en la hija un método con el mismo nombre que el de la madre"

enunciado: "¿Qué es sobrescribir un método?"

explicacion: |
  La hija puede llamar al de la madre con `super`.
```

### 14 — Polimorfismo

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["polimorfismo"]

tipo: mc
opciones_explicitas: ["Que objetos de distintas clases respondan al mismo mensaje a su manera", "Que una clase tenga muchos métodos", "Que se copien objetos", "Que se borren clases"]
respuesta: "Que objetos de distintas clases respondan al mismo mensaje a su manera"

enunciado: "¿Qué es el polimorfismo?"

explicacion: |
  Por ejemplo, `saludar()` en Persona y en Docente.
```

### 15 — Composición

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "avanzado"
  tags: ["composicion"]

tipo: mc
opciones_explicitas: ["Armar objetos con partes en lugar de crear jerarquías profundas", "Usar más herencia", "No usar clases", "Usar globales"]
respuesta: "Armar objetos con partes en lugar de crear jerarquías profundas"

enunciado: "¿Qué significa preferir la composición a la herencia?"

explicacion: |
  Es más flexible.
```

### 16 — Privado

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["privado"]

tipo: mc
opciones_explicitas: ["Con `#`, por ejemplo `#saldo`", "Con `private`", "Con `_` obligatorio", "Con `hidden`"]
respuesta: "Con `#`, por ejemplo `#saldo`"

enunciado: "¿Cómo se declara una propiedad privada en una clase?"

explicacion: |
  Solo se accede desde dentro de la clase.
```

### 17 — Encapsulamiento

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["encapsulamiento"]

tipo: mc
opciones_explicitas: ["Ocultar los detalles internos y exponer solo lo necesario", "Duplicar datos", "Heredar", "Importar"]
respuesta: "Ocultar los detalles internos y exponer solo lo necesario"

enunciado: "¿Qué es el encapsulamiento?"

explicacion: |
  Protege el estado interno.
```

### 18 — Validar

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Para evitar estados inválidos, como un saldo con monto negativo", "Para ahorrar tiempo", "Por estética", "No hace falta"]
respuesta: "Para evitar estados inválidos, como un saldo con monto negativo"

enunciado: "¿Por qué se valida en los métodos que modifican el estado?"

explicacion: |
  Mantiene la coherencia.
```

### 19 — Static

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "intermedio"
  tags: ["static"]

tipo: mc
opciones_explicitas: ["A la clase, no a las instancias", "A las instancias", "A la función", "Al navegador"]
respuesta: "A la clase, no a las instancias"

enunciado: "¿A qué pertenece un miembro `static`?"

explicacion: |
  Se llama `Clase.metodo()`.
```

### 20 — Prototipo

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "avanzado"
  tags: ["prototipos"]

tipo: mc
opciones_explicitas: ["Otro objeto al que delega lo que no encuentra", "Su copia", "Su nombre", "Su tipo"]
respuesta: "Otro objeto al que delega lo que no encuentra"

enunciado: "¿Qué es el prototipo de un objeto?"

explicacion: |
  Forma la cadena de prototipos.
```

### 21 — This perdido

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "avanzado"
  tags: ["this"]

tipo: mc
opciones_explicitas: ["`this` ya no apunta a `ana`", "`f` no existe", "`5` es inválido", "Falta `new`"]
respuesta: "`this` ya no apunta a `ana`"

enunciado: "`const f = ana.agregarNota; f(5);` falla. ¿Por qué?"

explicacion: |
  El valor de `this` depende de cómo se llama.
```

### 22 — Flecha

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "avanzado"
  tags: ["flecha"]

tipo: mc
opciones_explicitas: ["Conservan el `this` del contexto en el que se definen", "Son más largas", "No tienen parámetros", "Son globales"]
respuesta: "Conservan el `this` del contexto en el que se definen"

enunciado: "¿Qué ventaja tienen las funciones flecha con `this`?"

explicacion: |
  Evitan sorpresas en callbacks.
```

### 23 — Responsabilidad

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Que cada clase se ocupe de una sola cosa bien definida", "Que haya una sola clase", "Que sea corta siempre", "Que no tenga métodos"]
respuesta: "Que cada clase se ocupe de una sola cosa bien definida"

enunciado: "¿Qué significa \"una clase, una responsabilidad\"?"

explicacion: |
  Facilita probar y cambiar.
```

### 24 — Nombres

```
metadata:
  materia: "frontend"
  tema: "javascript_orientado_a_objetos"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`PascalCase`", "`snake_case`", "`kebab-case`", "`MAYÚSCULAS`"]
respuesta: "`PascalCase`"

enunciado: "¿Qué convención se usa para nombrar clases?"

explicacion: |
  Por ejemplo, `AlumnoRegular`.
```

