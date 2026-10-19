# Backend — Acceso a datos desde el backend (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Rol

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["rol"]

tipo: mc
opciones_explicitas: ["Recibe la petición, valida, consulta la base y arma la respuesta", "Reemplaza a la base de datos", "Solo dibuja la pantalla del usuario", "Permite que el cliente consulte la base directamente"]
respuesta: "Recibe la petición, valida, consulta la base y arma la respuesta"

enunciado: "¿Qué rol cumple el backend entre el cliente y la base de datos?"

explicacion: |
  El cliente nunca habla directo con la base.
```

### 2 — Driver

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["driver"]

tipo: mc
opciones_explicitas: ["Para abrir conexiones y enviar consultas a un motor concreto", "Para acelerar el procesador", "Para diseñar el logotipo", "Para cifrar el disco"]
respuesta: "Para abrir conexiones y enviar consultas a un motor concreto"

enunciado: "¿Para qué sirve un controlador (driver) de base de datos?"

explicacion: |
  Es la pieza que habla el protocolo del motor.
```

### 3 — Pool

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["pool"]

tipo: mc
opciones_explicitas: ["Un conjunto de conexiones abiertas que se reutilizan", "Una copia de seguridad de la base", "Un tipo de índice", "Un servidor de archivos"]
respuesta: "Un conjunto de conexiones abiertas que se reutilizan"

enunciado: "¿Qué es un pool de conexiones?"

explicacion: |
  Evita abrir una conexión nueva en cada petición.
```

### 4 — Pool

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["pool"]

tipo: vf
respuesta: falso

enunciado: "Abrir una conexión nueva a la base en cada petición es la práctica recomendada."

explicacion: |
  Es lento y puede saturar la base; se usa un pool.
```

### 5 — Pool

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["pool"]

tipo: completar
enunciado: "Un pool mal usado puede agotarse si no se ___ la conexión al terminar."
respuestas_validas:
  - "devuelve"
  - "libera"
  - "cierra"

explicacion: |
  Si no se devuelve, otras peticiones quedan esperando.
```

### 6 — Inyeccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["La inyección SQL", "Que la consulta sea demasiado corta", "Que la base cambie de motor", "Que el pool crezca"]
respuesta: "La inyección SQL"

enunciado: "¿Cuál es el riesgo de armar una consulta pegando texto que escribió el usuario?"

explicacion: |
  El texto puede alterar el sentido de la consulta.
```

### 7 — Inyeccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Consultas parametrizadas", "Ocultar el nombre de la base", "Usar contraseñas largas solamente", "Reiniciar el servidor"]
respuesta: "Consultas parametrizadas"

enunciado: "¿Cuál es la defensa principal contra la inyección SQL?"

explicacion: |
  Los valores viajan aparte y se tratan siempre como datos.
```

### 8 — Inyeccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["inyeccion"]

tipo: vf
respuesta: verdadero

enunciado: "Una consulta parametrizada trata el valor recibido como dato, no como parte de la instrucción."

explicacion: |
  Esa es la idea central de la parametrización.
```

### 9 — Inyeccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["inyeccion"]

tipo: vf
respuesta: falso

enunciado: "Escapar a mano algunas comillas es siempre más seguro que parametrizar."

explicacion: |
  Es frágil y fácil de olvidar; la parametrización es la defensa estándar.
```

### 10 — Inyeccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "avanzado"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Comparar el nombre contra una lista fija de columnas permitidas", "Pegar el texto recibido en la consulta", "Aceptar cualquier nombre", "Ordenar siempre en el navegador"]
respuesta: "Comparar el nombre contra una lista fija de columnas permitidas"

enunciado: "Si hay que ordenar por una columna elegida por el usuario, ¿qué conviene hacer?"

explicacion: |
  Los nombres de columnas no se parametrizan igual que los valores.
```

### 11 — Orm

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["orm"]

tipo: mc
opciones_explicitas: ["Una herramienta que mapea tablas a objetos del lenguaje y genera el SQL", "Un motor de base de datos", "Un protocolo de red", "Un tipo de caché del navegador"]
respuesta: "Una herramienta que mapea tablas a objetos del lenguaje y genera el SQL"

enunciado: "¿Qué es un ORM?"

explicacion: |
  Permite crear y buscar objetos sin escribir cada consulta.
```

### 12 — Orm

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["orm"]

tipo: mc
opciones_explicitas: ["Reduce código repetitivo y facilita evitar inyecciones", "Hace innecesario conocer SQL", "Garantiza que las consultas son rápidas", "Elimina la necesidad de índices"]
respuesta: "Reduce código repetitivo y facilita evitar inyecciones"

enunciado: "¿Cuál es una ventaja de usar un ORM?"

explicacion: |
  Pero sigue siendo necesario entender qué consulta genera.
```

### 13 — Orm

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "avanzado"
  tags: ["orm"]

tipo: mc
opciones_explicitas: ["Hacer una consulta para la lista y otra por cada elemento", "Tener N+1 bases de datos", "Un error de sintaxis", "Una transacción que no termina"]
respuesta: "Hacer una consulta para la lista y otra por cada elemento"

enunciado: "¿Qué es el problema de las N+1 consultas?"

explicacion: |
  Se resuelve trayendo los datos relacionados en una sola consulta.
```

### 14 — Orm

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["orm"]

tipo: vf
respuesta: verdadero

enunciado: "El SQL escrito a mano puede ser más claro que un ORM para consultas complejas con agregaciones."

explicacion: |
  Muchos equipos combinan ambas formas.
```

### 15 — Orm

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["orm"]

tipo: completar
enunciado: "Un ORM suele esconder las consultas reales, por eso conviene revisar el ___ que genera."
respuestas_validas:
  - "SQL"
  - "sql"

explicacion: |
  Hay que saber qué se ejecuta y cuánto tarda.
```

### 16 — Transaccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["transaccion"]

tipo: mc
opciones_explicitas: ["Para que varios pasos se cumplan todos o ninguno", "Para acelerar un SELECT", "Para cifrar una columna", "Para crear un usuario"]
respuesta: "Para que varios pasos se cumplan todos o ninguno"

enunciado: "¿Para qué sirve una transacción?"

explicacion: |
  Evita datos a medio actualizar.
```

### 17 — Transaccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["transaccion"]

tipo: mc
opciones_explicitas: ["Deshace los cambios de la transacción en curso", "Confirma los cambios", "Borra la base", "Duplica la tabla"]
respuesta: "Deshace los cambios de la transacción en curso"

enunciado: "¿Qué hace un rollback?"

explicacion: |
  Se usa cuando algún paso falla.
```

### 18 — Transaccion

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["transaccion"]

tipo: mc
opciones_explicitas: ["Revertir toda la operación con un rollback", "Dejar el stock descontado igual", "Reintentar solo el pago sin revisar nada", "Borrar el pedido a mano después"]
respuesta: "Revertir toda la operación con un rollback"

enunciado: "Se descuenta el stock y luego falla el registro del pago. ¿Qué debería ocurrir?"

explicacion: |
  La operación debe ser completa o no haber ocurrido.
```

### 19 — Migraciones

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["migraciones"]

tipo: mc
opciones_explicitas: ["Un archivo versionado que describe un cambio de esquema", "Pasar la base a otra ciudad", "Una copia de seguridad", "Un tipo de consulta"]
respuesta: "Un archivo versionado que describe un cambio de esquema"

enunciado: "¿Qué es una migración de base de datos?"

explicacion: |
  Se aplican en orden en todos los entornos.
```

### 20 — Migraciones

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["migraciones"]

tipo: vf
respuesta: verdadero

enunciado: "Las migraciones se guardan junto al código para que todos los entornos lleguen al mismo esquema."

explicacion: |
  Así el esquema evoluciona de forma controlada y repetible.
```

### 21 — Migraciones

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "intermedio"
  tags: ["migraciones"]

tipo: vf
respuesta: falso

enunciado: "Conviene modificar la estructura de la base de producción a mano, sin dejar registro."

explicacion: |
  Sin registro nadie sabe qué cambió ni puede reproducirlo.
```

### 22 — Rendimiento

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "avanzado"
  tags: ["rendimiento"]

tipo: mc
opciones_explicitas: ["Revisar el plan de consulta y los índices", "Agregar más conexiones sin medir", "Desactivar las transacciones", "Guardar contraseñas en texto plano"]
respuesta: "Revisar el plan de consulta y los índices"

enunciado: "Una consulta que tarda mucho y se repite en cada petición, ¿qué primera medida suele ayudar?"

explicacion: |
  Medir antes de optimizar.
```

### 23 — Rol

```
metadata:
  materia: "backend"
  tema: "acceso_a_datos_desde_el_backend"
  nivel: "basico"
  tags: ["rol"]

tipo: completar
enunciado: "El backend nunca deja que el cliente consulte la base de forma ___."
respuestas_validas:
  - "directa"

explicacion: |
  El servidor es el único intermediario que aplica las reglas.
```
