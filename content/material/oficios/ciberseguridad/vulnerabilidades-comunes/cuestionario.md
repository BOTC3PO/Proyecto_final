# Ciberseguridad — Vulnerabilidades comunes (cuestionario, 28 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Alcance

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["etica"]

tipo: mc
opciones_explicitas: ["Cuando es propio, de laboratorio o hay autorización expresa", "Siempre", "Si es un sitio famoso", "Si no se hace daño"]
respuesta: "Cuando es propio, de laboratorio o hay autorización expresa"

enunciado: "¿Cuándo es legal probar la seguridad de un sistema?"

explicacion: |
  Probar sistemas ajenos sin permiso es ilegal.
```

### 2 — Vulnerabilidad

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["vulnerabilidad"]

tipo: mc
opciones_explicitas: ["Una debilidad que se puede aprovechar", "Un virus", "Un ataque", "Una copia"]
respuesta: "Una debilidad que se puede aprovechar"

enunciado: "¿Qué es una vulnerabilidad?"

explicacion: |
  Puede estar en el código, la configuración o las personas.
```

### 3 — Amenaza

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["amenaza"]

tipo: mc
opciones_explicitas: ["Quien o lo que puede aprovechar una vulnerabilidad", "Una debilidad", "Una copia de seguridad", "Una contraseña"]
respuesta: "Quien o lo que puede aprovechar una vulnerabilidad"

enunciado: "¿Qué es una amenaza?"

explicacion: |
  Puede ser un delincuente o un error.
```

### 4 — Riesgo

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["riesgo"]

tipo: mc
opciones_explicitas: ["La probabilidad de que ocurra por el daño que causaría", "El daño solo", "La probabilidad sola", "Un ataque"]
respuesta: "La probabilidad de que ocurra por el daño que causaría"

enunciado: "¿Qué es el riesgo?"

explicacion: |
  Combina probabilidad e impacto.
```

### 5 — CIA

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["cia"]

tipo: mc
opciones_explicitas: ["Confidencialidad, Integridad y Disponibilidad", "Control, Identidad y Acceso", "Cifrado, Inyección y Ataque", "Clave, Identidad y Autenticación"]
respuesta: "Confidencialidad, Integridad y Disponibilidad"

enunciado: "¿Qué significan las letras de la triada CIA?"

explicacion: |
  Son los tres objetivos de la seguridad.
```

### 6 — Confidencialidad

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["cia"]

tipo: mc
opciones_explicitas: ["Que solo accedan a la información quienes deben", "Que no se altere", "Que esté disponible", "Que sea rápida"]
respuesta: "Que solo accedan a la información quienes deben"

enunciado: "¿Qué garantiza la confidencialidad?"

explicacion: |
  Se logra con permisos y cifrado.
```

### 7 — Disponibilidad

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["cia"]

tipo: mc
opciones_explicitas: ["Que la información se pueda usar cuando se necesita", "Que sea secreta", "Que no cambie", "Que sea corta"]
respuesta: "Que la información se pueda usar cuando se necesita"

enunciado: "¿Qué garantiza la disponibilidad?"

explicacion: |
  Un ataque de denegación de servicio la afecta.
```

### 8 — OWASP

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["owasp"]

tipo: mc
opciones_explicitas: ["Una lista de los riesgos más comunes en aplicaciones web", "Un antivirus", "Una ley", "Un lenguaje"]
respuesta: "Una lista de los riesgos más comunes en aplicaciones web"

enunciado: "¿Qué es el OWASP Top 10?"

explicacion: |
  Se usa como guía de prevención.
```

### 9 — Inyección

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Que datos del usuario se interpreten como código", "Un tipo de virus", "Un cifrado", "Una copia"]
respuesta: "Que datos del usuario se interpreten como código"

enunciado: "¿Qué es una inyección?"

explicacion: |
  Por ejemplo, SQL.
```

### 10 — Parametrizadas

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Con consultas parametrizadas", "Con comillas dobles", "Borrando espacios", "Con mayúsculas"]
respuesta: "Con consultas parametrizadas"

enunciado: "¿Cómo se previene la inyección SQL?"

explicacion: |
  Los datos nunca se interpretan como SQL.
```

### 11 — Regla

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Separar siempre el código de los datos", "Mezclarlos", "Cifrar todo", "Usar solo mayúsculas"]
respuesta: "Separar siempre el código de los datos"

enunciado: "¿Cuál es la regla general contra las inyecciones?"

explicacion: |
  Es el principio básico.
```

### 12 — XSS

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["xss"]

tipo: mc
opciones_explicitas: ["Insertar código en una página que ven otras personas", "Un virus", "Una copia", "Un cifrado"]
respuesta: "Insertar código en una página que ven otras personas"

enunciado: "¿Qué es el XSS?"

explicacion: |
  Se previene escapando la salida.
```

### 13 — XSS prevención

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["xss"]

tipo: mc
opciones_explicitas: ["Escapando la salida y usando una política de seguridad de contenido", "Subiendo el volumen", "Con más colores", "Con otro lenguaje"]
respuesta: "Escapando la salida y usando una política de seguridad de contenido"

enunciado: "¿Cómo se previene el XSS?"

explicacion: |
  Y usando `textContent` en lugar de `innerHTML`.
```

### 14 — Acceso roto

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["acceso"]

tipo: mc
opciones_explicitas: ["Control de acceso roto", "Inyección", "XSS", "Phishing"]
respuesta: "Control de acceso roto"

enunciado: "Un usuario cambia `/pedido/124` por `/pedido/125` y ve un pedido ajeno. ¿Qué falla es?"

explicacion: |
  El servidor debe verificar la propiedad del recurso.
```

### 15 — Datos sensibles

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["datos"]

tipo: mc
opciones_explicitas: ["Cifrándolos en tránsito y en reposo, y guardando solo lo necesario", "Guardándolos en texto plano", "Publicándolos", "Enviándolos por correo común"]
respuesta: "Cifrándolos en tránsito y en reposo, y guardando solo lo necesario"

enunciado: "¿Cómo se protegen los datos sensibles?"

explicacion: |
  HTTPS es el mínimo.
```

### 16 — Configuración

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["configuracion"]

tipo: mc
opciones_explicitas: ["Dejar el modo debug activo en producción", "Cambiar las claves por defecto", "Cerrar puertos", "Actualizar"]
respuesta: "Dejar el modo debug activo en producción"

enunciado: "¿Cuál es un ejemplo de mala configuración?"

explicacion: |
  Revela información interna.
```

### 17 — Componentes

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["componentes"]

tipo: mc
opciones_explicitas: ["Porque tienen fallas conocidas que se corrigen", "Por estética", "Por costumbre", "Para cambiar el diseño"]
respuesta: "Porque tienen fallas conocidas que se corrigen"

enunciado: "¿Por qué se actualizan las bibliotecas?"

explicacion: |
  Se inventarían y se escanean.
```

### 18 — CSRF

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["csrf"]

tipo: mc
opciones_explicitas: ["Que otra página haga que tu navegador envíe una acción a un sitio donde tenés sesión", "Un virus", "Un cifrado", "Una copia"]
respuesta: "Que otra página haga que tu navegador envíe una acción a un sitio donde tenés sesión"

enunciado: "¿Qué es el CSRF?"

explicacion: |
  Se previene con tokens y cookies SameSite.
```

### 19 — Secretos

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["Revocarla y reemplazarla", "Borrar el archivo", "Esperar", "Cambiar el nombre"]
respuesta: "Revocarla y reemplazarla"

enunciado: "¿Qué se hace si se filtró una clave en el repositorio?"

explicacion: |
  Queda en la historia.
```

### 20 — Registros

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["registro"]

tipo: mc
opciones_explicitas: ["Para detectar ataques y analizarlos", "Para gastar disco", "Por costumbre", "Para publicarlos"]
respuesta: "Para detectar ataques y analizarlos"

enunciado: "¿Por qué se registran y monitorean los eventos?"

explicacion: |
  Sin registros no se ve lo ocurrido.
```

### 21 — Ingeniería social

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["social"]

tipo: mc
opciones_explicitas: ["Engañar a las personas para obtener información o acciones", "Un tipo de código", "Un cifrado", "Un firewall"]
respuesta: "Engañar a las personas para obtener información o acciones"

enunciado: "¿Qué es la ingeniería social?"

explicacion: |
  La persona suele ser el eslabón más débil.
```

### 22 — Phishing

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["phishing"]

tipo: mc
opciones_explicitas: ["Mensajes falsos que piden clics, claves o datos", "Un virus de disco", "Un cable", "Una red"]
respuesta: "Mensajes falsos que piden clics, claves o datos"

enunciado: "¿Qué es el phishing?"

explicacion: |
  Se difunde por correo, SMS y redes.
```

### 23 — Señales

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["phishing"]

tipo: mc
opciones_explicitas: ["Urgencia, amenazas y enlaces que no coinciden", "Un saludo amable", "Un logotipo", "Una firma"]
respuesta: "Urgencia, amenazas y enlaces que no coinciden"

enunciado: "¿Cuál es una señal típica de phishing?"

explicacion: |
  Se verifica por otro canal.
```

### 24 — Ransomware

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["ransomware"]

tipo: mc
opciones_explicitas: ["Cifra los archivos y pide un rescate", "Los borra y avisa", "Los copia", "Los comprime"]
respuesta: "Cifra los archivos y pide un rescate"

enunciado: "¿Qué hace el ransomware?"

explicacion: |
  La defensa principal son las copias de seguridad.
```

### 25 — Copias

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["backup"]

tipo: mc
opciones_explicitas: ["Desconectadas del equipo y probadas", "Siempre conectadas", "Sin probar", "En el mismo disco"]
respuesta: "Desconectadas del equipo y probadas"

enunciado: "¿Cómo deben ser las copias para defender contra ransomware?"

explicacion: |
  Si están conectadas, también se cifran.
```

### 26 — Profundidad

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["profundidad"]

tipo: mc
opciones_explicitas: ["Combinar varias capas de protección", "Una sola medida fuerte", "Un firewall", "Un antivirus"]
respuesta: "Combinar varias capas de protección"

enunciado: "¿Qué es la defensa en profundidad?"

explicacion: |
  Si una capa falla, otra protege.
```

### 27 — Incidente

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "basico"
  tags: ["incidente"]

tipo: mc
opciones_explicitas: ["Mantener la calma, aislar el equipo y avisar", "Borrar todo", "Apagar y olvidar", "Publicarlo"]
respuesta: "Mantener la calma, aislar el equipo y avisar"

enunciado: "¿Qué se hace primero ante un incidente?"

explicacion: |
  No se borra la evidencia.
```

### 28 — Divulgación

```
metadata:
  materia: "ciberseguridad"
  tema: "vulnerabilidades_comunes"
  nivel: "intermedio"
  tags: ["divulgacion"]

tipo: mc
opciones_explicitas: ["Avisar al responsable de una falla sin explotarla ni publicarla antes", "Publicarla", "Venderla", "Ignorarla"]
respuesta: "Avisar al responsable de una falla sin explotarla ni publicarla antes"

enunciado: "¿Qué es la divulgación responsable?"

explicacion: |
  Permite corregirla.
```

