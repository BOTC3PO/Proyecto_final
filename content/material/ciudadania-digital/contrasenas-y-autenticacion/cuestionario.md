# Ciudadanía digital — Contraseñas y autenticación (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué hace fuerte

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Qué hace más fuerte a una contraseña?"
tipo: mc
opciones_explicitas:
  - "Que sea larga, única e impredecible"
  - "Que tenga tu fecha de nacimiento"
  - "Que sea corta con un símbolo"
  - "Que sea igual en todos los sitios"
respuesta: "Que sea larga, única e impredecible"

explicacion: |
  La longitud pesa más que la rareza.
```

### 2 — Reutilizar

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: falso
tipo: vf

enunciado: "Es seguro usar la misma contraseña en varios servicios si es larga."

explicacion: |
  Si un sitio sufre una filtración, los atacantes la prueban en otros.
```

### 3 — Relleno de credenciales

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

tipo: completar
enunciado: "Probar en otros sitios las claves filtradas de un servicio se llama relleno de ___."
respuestas_validas:
  - "credenciales"

explicacion: |
  Por eso cada cuenta debe tener su propia clave.
```

### 4 — Frase de contraseña

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Qué es una frase de contraseña?"
tipo: mc
opciones_explicitas:
  - "Tu nombre y año"
  - "Una palabra de diccionario"
  - "El nombre de tu mascota"
  - "Varias palabras sin relación entre sí, largas y fáciles de recordar"
respuesta: "Varias palabras sin relación entre sí, largas y fáciles de recordar"

explicacion: |
  Es larga y difícil de adivinar.
```

### 5 — Datos personales

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: falso
tipo: vf

enunciado: "Es buena idea basar la contraseña en tu cumpleaños o el nombre de tu mascota."

explicacion: |
  Son datos fáciles de averiguar o adivinar.
```

### 6 — Gestor

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Para qué sirve un gestor de contraseñas?"
tipo: mc
opciones_explicitas:
  - "Para compartirlas con amigos"
  - "Para guardarlas cifradas y generarlas, recordando solo una clave maestra"
  - "Para hacerlas más cortas"
  - "Para publicarlas"
respuesta: "Para guardarlas cifradas y generarlas, recordando solo una clave maestra"

explicacion: |
  Permite usar claves únicas.
```

### 7 — Dónde NO anotarlas

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Dónde NO conviene guardar las contraseñas?"
tipo: mc
opciones_explicitas:
  - "En un gestor de contraseñas"
  - "En tu memoria si son pocas y fuertes"
  - "En papeles visibles o en un archivo sin protección"
  - "En un cuaderno guardado en lugar seguro"
respuesta: "En papeles visibles o en un archivo sin protección"

explicacion: |
  Hay que evitar lugares fáciles de ver.
```

### 8 — 2FA

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

tipo: completar
enunciado: "La sigla 2FA significa autenticación de dos ___."
respuestas_validas:
  - "factores"

explicacion: |
  Pide algo más que la contraseña.
```

### 9 — Mejor segundo factor

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Qué segundo factor suele ser más seguro?"
tipo: mc
opciones_explicitas:
  - "Una aplicación de autenticación o una llave de seguridad"
  - "Un código por SMS siempre"
  - "Ninguno"
  - "Compartir el código con un amigo"
respuesta: "Una aplicación de autenticación o una llave de seguridad"

explicacion: |
  El SMS puede interceptarse o desviarse.
```

### 10 — Compartir código

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Nunca hay que compartir un código de verificación, ni siquiera con quien diga ser del banco."

explicacion: |
  El código es la llave de tu cuenta.
```

### 11 — Cuenta más importante

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Por qué el correo electrónico es una cuenta crítica?"
tipo: mc
opciones_explicitas:
  - "Porque tiene más fotos"
  - "Porque es gratis"
  - "Porque permite restablecer las contraseñas de otras cuentas"
  - "Porque no se usa"
respuesta: "Porque permite restablecer las contraseñas de otras cuentas"

explicacion: |
  Quien entra a tu correo puede entrar a casi todo.
```

### 12 — Wi-Fi público

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Qué cuidado corresponde en redes Wi-Fi públicas?"
tipo: mc
opciones_explicitas:
  - "Hacer todas las compras"
  - "Compartir la clave del banco"
  - "Ninguno"
  - "Evitar operaciones sensibles como las bancarias"
respuesta: "Evitar operaciones sensibles como las bancarias"

explicacion: |
  Pueden ser inseguras.
```

### 13 — Passkeys

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

tipo: completar
enunciado: "Las claves de acceso basadas en tu dispositivo, que resisten mejor el phishing, se llaman ___."
respuestas_validas:
  - "passkeys"
  - "passkey"
  - "claves de acceso"

explicacion: |
  Reemplazan a las contraseñas en algunos servicios.
```

### 14 — Actualizaciones

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Mantener el sistema y las aplicaciones actualizados ayuda a proteger las cuentas."

explicacion: |
  Las actualizaciones corrigen vulnerabilidades.
```

### 15 — Filtración

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "Si tu correo apareció en una filtración de datos, ¿qué conviene hacer?"
tipo: mc
opciones_explicitas:
  - "No hacer nada"
  - "Esperar a que se solucione"
  - "Cambiar la contraseña y activar la verificación en dos pasos"
  - "Compartir el aviso con todos"
respuesta: "Cambiar la contraseña y activar la verificación en dos pasos"

explicacion: |
  Y cambiar la clave donde la hayas reutilizado.
```

### 16 — Cuenta comprometida

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "Si sospechás que tu cuenta fue comprometida, ¿qué hacés?"
tipo: mc
opciones_explicitas:
  - "Esperar unos días"
  - "Borrar la app"
  - "Compartir la clave con soporte por chat"
  - "Cambiar la clave desde un dispositivo de confianza y cerrar las sesiones abiertas"
respuesta: "Cambiar la clave desde un dispositivo de confianza y cerrar las sesiones abiertas"

explicacion: |
  Y avisar a tus contactos.
```

### 17 — Banco

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Si hay dinero involucrado en una cuenta comprometida, conviene avisar al banco de inmediato."

explicacion: |
  Para bloquear movimientos.
```

### 18 — Cerrar sesión

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "basico"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "¿Qué conviene hacer en un dispositivo ajeno?"
tipo: mc
opciones_explicitas:
  - "Dejarla abierta"
  - "Cerrar la sesión al terminar"
  - "Guardar la clave en el navegador"
  - "Compartir la pantalla"
respuesta: "Cerrar la sesión al terminar"

explicacion: |
  Evita que otros entren a tus cuentas.
```

### 19 — Cambiar seguido

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Las recomendaciones actuales priorizan claves largas y únicas por sobre obligar a cambiarlas todos los meses sin motivo."

explicacion: |
  Se cambian cuando hay sospecha de compromiso.
```

### 20 — Longitud

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "intermedio"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "Entre estas contraseñas, ¿cuál es más fuerte?"
tipo: mc
opciones_explicitas:
  - "Pass2024!"
  - "123456"
  - "contraseña"
  - "cielo azul bicicleta mate invierno"
respuesta: "cielo azul bicicleta mate invierno"

explicacion: |
  Frase larga y sin relación entre palabras.
```

### 21 — Mensaje del banco

```
metadata:
  materia: "ciudadania_digital"
  tema: "contrasenas_y_autenticacion"
  nivel: "avanzado"
  tags: ["contrasenas", "2fa", "seguridad"]

enunciado: "Te llega un mensaje pidiendo tu código de verificación en nombre del banco. ¿Qué hacés?"
tipo: mc
opciones_explicitas:
  - "No lo compartís y llamás vos al banco por un canal oficial"
  - "Se lo das para que no bloqueen la cuenta"
  - "Respondés con tu clave"
  - "Reenviás el mensaje"
respuesta: "No lo compartís y llamás vos al banco por un canal oficial"

explicacion: |
  Ninguna entidad seria pide códigos por mensaje.
```
