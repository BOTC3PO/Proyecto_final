# Ciberseguridad — Gestión de contraseñas (cuestionario, 26 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Importancia

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Son la primera barrera de casi todas las cuentas", "No importan", "Solo protegen los juegos", "Solo se usan en el trabajo"]
respuesta: "Son la primera barrera de casi todas las cuentas"

enunciado: "¿Por qué importan las contraseñas?"

explicacion: |
  Una clave débil expone la cuenta.
```

### 2 — Repetidas

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["repeticion"]

tipo: mc
opciones_explicitas: ["Si se filtra en uno, quedan en riesgo todas las cuentas", "Ninguno", "Es más segura", "Es más rápida de escribir"]
respuesta: "Si se filtra en uno, quedan en riesgo todas las cuentas"

enunciado: "¿Qué riesgo tiene usar la misma clave en varios sitios?"

explicacion: |
  Se usa relleno de credenciales.
```

### 3 — Fuerza bruta

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["fuerza bruta"]

tipo: mc
opciones_explicitas: ["Probar todas las combinaciones posibles", "Un virus", "Una llamada", "Un mensaje"]
respuesta: "Probar todas las combinaciones posibles"

enunciado: "¿Qué es un ataque de fuerza bruta?"

explicacion: |
  La longitud lo hace inviable.
```

### 4 — Diccionario

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["diccionario"]

tipo: mc
opciones_explicitas: ["Palabras y variantes comunes", "Todas las combinaciones", "Solo números", "Solo fechas"]
respuesta: "Palabras y variantes comunes"

enunciado: "¿Qué prueba un ataque de diccionario?"

explicacion: |
  Por eso no se usan palabras comunes.
```

### 5 — Relleno

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["stuffing"]

tipo: mc
opciones_explicitas: ["Probar usuarios y claves filtrados en otros sitios", "Rellenar un formulario", "Probar todas las combinaciones", "Instalar un virus"]
respuesta: "Probar usuarios y claves filtrados en otros sitios"

enunciado: "¿Qué es el relleno de credenciales (credential stuffing)?"

explicacion: |
  La defensa es una clave distinta por cuenta y MFA.
```

### 6 — Datos personales

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["personales"]

tipo: mc
opciones_explicitas: ["Porque son fáciles de adivinar o de encontrar", "Porque son largos", "Porque son raros", "Porque son ilegales"]
respuesta: "Porque son fáciles de adivinar o de encontrar"

enunciado: "¿Por qué no se usan datos personales en una clave?"

explicacion: |
  Fecha de nacimiento, mascota, equipo.
```

### 7 — Longitud

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["longitud"]

tipo: mc
opciones_explicitas: ["La longitud", "La complejidad solamente", "Los símbolos", "El idioma"]
respuesta: "La longitud"

enunciado: "¿Qué importa más en una contraseña?"

explicacion: |
  Cada carácter multiplica las combinaciones.
```

### 8 — Mínimo

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["longitud"]

tipo: mc
opciones_explicitas: ["12 caracteres", "4", "6", "3"]
respuesta: "12 caracteres"

enunciado: "¿Cuál es una longitud mínima razonable?"

explicacion: |
  Y más, si es posible.
```

### 9 — Passphrase

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["passphrase"]

tipo: mc
opciones_explicitas: ["Varias palabras al azar, largas y fáciles de recordar", "Una palabra", "Un número", "Una clave corta con símbolos"]
respuesta: "Varias palabras al azar, largas y fáciles de recordar"

enunciado: "¿Qué es una frase de paso (passphrase)?"

explicacion: |
  Por ejemplo, 4 o 5 palabras sin relación.
```

### 10 — Patrones

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["patrones"]

tipo: mc
opciones_explicitas: ["Porque sigue un patrón muy conocido", "Porque es larga", "Porque es aleatoria", "Porque es única"]
respuesta: "Porque sigue un patrón muy conocido"

enunciado: "¿Por qué `Contraseña1!` es débil?"

explicacion: |
  Los atacantes conocen las sustituciones comunes.
```

### 11 — Aleatoria

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["aleatoria"]

tipo: mc
opciones_explicitas: ["Un gestor de contraseñas", "La persona de memoria", "Un conocido", "Una página al azar"]
respuesta: "Un gestor de contraseñas"

enunciado: "¿Quién genera mejor una clave aleatoria?"

explicacion: |
  Las personas somos predecibles.
```

### 12 — Entropía

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "avanzado"
  tags: ["entropia"]

tipo: mc
opciones_explicitas: ["Cuán impredecible es", "Su largo", "Su fecha", "Su nombre"]
respuesta: "Cuán impredecible es"

enunciado: "¿Qué mide la entropía de una clave?"

explicacion: |
  Más impredecible, más fuerte.
```

### 13 — Gestor

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["gestor"]

tipo: mc
opciones_explicitas: ["Genera, guarda y completa claves únicas y fuertes", "Borra claves", "Comparte claves", "Crea virus"]
respuesta: "Genera, guarda y completa claves únicas y fuertes"

enunciado: "¿Qué hace un gestor de contraseñas?"

explicacion: |
  Se protege con una clave maestra.
```

### 14 — Maestra

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["maestra"]

tipo: mc
opciones_explicitas: ["Larga, única y bien recordada", "Corta", "La misma de otras cuentas", "Compartida"]
respuesta: "Larga, única y bien recordada"

enunciado: "¿Cómo debe ser la clave maestra de un gestor?"

explicacion: |
  Es la que protege todo.
```

### 15 — Phishing

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["phishing"]

tipo: mc
opciones_explicitas: ["No completa la clave en un sitio falso", "Bloquea correos", "Cifra el correo", "Borra el spam"]
respuesta: "No completa la clave en un sitio falso"

enunciado: "¿Cómo ayuda un gestor frente al phishing?"

explicacion: |
  Reconoce la dirección real.
```

### 16 — Dónde no

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["guardar"]

tipo: mc
opciones_explicitas: ["En notas del celular, hojas de cálculo o papeles pegados", "En un gestor", "En un archivo cifrado", "En una caja fuerte"]
respuesta: "En notas del celular, hojas de cálculo o papeles pegados"

enunciado: "¿Dónde no conviene guardar contraseñas?"

explicacion: |
  Pueden verlos otras personas.
```

### 17 — MFA

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["mfa"]

tipo: mc
opciones_explicitas: ["Impide entrar aunque se robe la contraseña", "Evita las claves", "Acelera el acceso", "Quita la clave"]
respuesta: "Impide entrar aunque se robe la contraseña"

enunciado: "¿Qué ventaja da el MFA?"

explicacion: |
  Hace falta un segundo factor.
```

### 18 — Fuerte

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["mfa"]

tipo: mc
opciones_explicitas: ["Una llave de seguridad física", "SMS", "Pregunta de seguridad", "Correo"]
respuesta: "Una llave de seguridad física"

enunciado: "¿Cuál es el segundo factor más resistente al phishing?"

explicacion: |
  Usa FIDO2.
```

### 19 — SMS

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["sms"]

tipo: mc
opciones_explicitas: ["Más débil, pero mejor que nada", "El mejor", "Inútil", "Obligatorio"]
respuesta: "Más débil, pero mejor que nada"

enunciado: "¿Cómo es el SMS como segundo factor?"

explicacion: |
  Se puede desviar el número.
```

### 20 — Primero

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["correo"]

tipo: mc
opciones_explicitas: ["En el correo", "En un juego", "En una red social cualquiera", "En ningún lado"]
respuesta: "En el correo"

enunciado: "¿Dónde conviene activar primero el MFA?"

explicacion: |
  Con el correo se restablecen las demás cuentas.
```

### 21 — Passkeys

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["passkeys"]

tipo: mc
opciones_explicitas: ["Un reemplazo de la contraseña con un par de claves en el dispositivo", "Contraseñas largas", "Un virus", "Un SMS"]
respuesta: "Un reemplazo de la contraseña con un par de claves en el dispositivo"

enunciado: "¿Qué son las passkeys?"

explicacion: |
  No se roban por phishing.
```

### 22 — Filtración

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["filtracion"]

tipo: mc
opciones_explicitas: ["Cambiarla en ese sitio y en todos donde se repitió", "Nada", "Esperar", "Cambiar solo el usuario"]
respuesta: "Cambiarla en ese sitio y en todos donde se repitió"

enunciado: "Una clave se filtró. ¿Qué se hace?"

explicacion: |
  Y cerrar sesiones abiertas.
```

### 23 — Aviso

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "intermedio"
  tags: ["filtracion"]

tipo: mc
opciones_explicitas: ["Para saber si un correo apareció en una filtración", "Para guardar claves", "Para cifrar", "Para hacer copias"]
respuesta: "Para saber si un correo apareció en una filtración"

enunciado: "¿Para qué sirve Have I Been Pwned?"

explicacion: |
  Es un servicio de aviso.
```

### 24 — Nunca

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["social"]

tipo: mc
opciones_explicitas: ["Nunca compartirla: ningún servicio legítimo la pide", "Compartirla", "Darla si es urgente", "Enviarla por correo"]
respuesta: "Nunca compartirla: ningún servicio legítimo la pide"

enunciado: "¿Qué debe hacerse con una clave por teléfono o mensaje?"

explicacion: |
  Es una táctica de ingeniería social.
```

### 25 — Desarrollo

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "basico"
  tags: ["desarrollo"]

tipo: mc
opciones_explicitas: ["Con un hash lento y con sal", "En texto plano", "Con Base64", "Con MD5"]
respuesta: "Con un hash lento y con sal"

enunciado: "¿Cómo se guardan las contraseñas de los usuarios?"

explicacion: |
  Argon2, bcrypt o scrypt.
```

### 26 — Reglas

```
metadata:
  materia: "ciberseguridad"
  tema: "gestion_de_contrasenas"
  nivel: "avanzado"
  tags: ["politicas"]

tipo: mc
opciones_explicitas: ["La longitud y la comprobación contra claves filtradas", "Cambios mensuales obligatorios", "Símbolos obligatorios", "Claves cortas"]
respuesta: "La longitud y la comprobación contra claves filtradas"

enunciado: "¿Qué conviene priorizar en las políticas de contraseñas?"

explicacion: |
  Las reglas absurdas fomentan malas prácticas.
```

