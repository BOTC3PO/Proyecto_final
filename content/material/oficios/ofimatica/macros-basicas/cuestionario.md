# Ofimática — Macros básicas (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una secuencia de acciones guardada que se puede repetir con un clic o atajo", "Un virus", "Un tipo de gráfico", "Un archivo de texto"]
respuesta: "Una secuencia de acciones guardada que se puede repetir con un clic o atajo"

enunciado: "¿Qué es una macro?"

explicacion: |
  Sirve para automatizar tareas repetitivas.
```

### 2 — Para qué

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Para automatizar tareas repetitivas", "Para dibujar", "Para traducir", "Para cifrar"]
respuesta: "Para automatizar tareas repetitivas"

enunciado: "¿Para qué se usa una macro?"

explicacion: |
  Por ejemplo, dar formato a un informe.
```

### 3 — Formas

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["formas"]

tipo: mc
opciones_explicitas: ["Grabándola o escribiéndola en un lenguaje", "Imprimiéndola", "Copiándola de un libro", "Solo con IA"]
respuesta: "Grabándola o escribiéndola en un lenguaje"

enunciado: "¿Cuáles son dos formas de crear una macro?"

explicacion: |
  VBA es un lenguaje de macros de Office.
```

### 4 — Lenguajes

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["lenguajes"]

tipo: mc
opciones_explicitas: ["VBA", "HTML", "SQL", "C#"]
respuesta: "VBA"

enunciado: "¿Qué lenguaje se usa para macros en Microsoft Office?"

explicacion: |
  En LibreOffice se usa LibreOffice Basic.
```

### 5 — Nombre

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["nombre"]

tipo: mc
opciones_explicitas: ["Sin espacios y que diga qué hace", "Con espacios y signos", "Un número", "Vacío"]
respuesta: "Sin espacios y que diga qué hace"

enunciado: "¿Qué características tiene un buen nombre de macro?"

explicacion: |
  Por ejemplo, `FormatoInforme`.
```

### 6 — Errores

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["grabar"]

tipo: mc
opciones_explicitas: ["Se graban también", "Se ignoran", "Se corrigen solos", "Se borran"]
respuesta: "Se graban también"

enunciado: "¿Qué ocurre con los errores cometidos mientras se graba?"

explicacion: |
  Por eso se graba con cuidado y orden.
```

### 7 — Relativas

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "intermedio"
  tags: ["referencias"]

tipo: mc
opciones_explicitas: ["Para que la macro funcione sobre cualquier celda de partida", "Para que sea más rápida", "Para ocultarla", "Para protegerla"]
respuesta: "Para que la macro funcione sobre cualquier celda de partida"

enunciado: "¿Para qué se graba con referencias relativas?"

explicacion: |
  Con referencias absolutas siempre actúa sobre las mismas celdas.
```

### 8 — Copia

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["pruebas"]

tipo: mc
opciones_explicitas: ["En una copia del archivo", "En el original sin copia", "En el trabajo de otro", "No se prueba"]
respuesta: "En una copia del archivo"

enunciado: "¿Dónde conviene probar una macro nueva?"

explicacion: |
  Una macro puede borrar datos.
```

### 9 — Deshacer

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "intermedio"
  tags: ["deshacer"]

tipo: mc
opciones_explicitas: ["Porque normalmente no se puede deshacer con Ctrl+Z", "Porque es obligatorio", "Porque se ejecuta lento", "Porque pesa mucho"]
respuesta: "Porque normalmente no se puede deshacer con Ctrl+Z"

enunciado: "¿Por qué es importante la copia de seguridad antes de ejecutar una macro?"

explicacion: |
  El historial de deshacer se pierde.
```

### 10 — Sub

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["vba"]

tipo: mc
opciones_explicitas: ["`Sub ... End Sub`", "`Start ... Stop`", "`Begin ... End Begin`", "`Open ... Close`"]
respuesta: "`Sub ... End Sub`"

enunciado: "En VBA, ¿qué delimita una macro?"

explicacion: |
  Es una subrutina.
```

### 11 — Range

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "intermedio"
  tags: ["vba"]

tipo: mc
opciones_explicitas: ["Un rango de celdas", "Un error", "Una imagen", "Una macro"]
respuesta: "Un rango de celdas"

enunciado: "¿Qué representa `Range(\"A1:D1\")` en VBA?"

explicacion: |
  Se le aplican propiedades o métodos.
```

### 12 — Bold

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "intermedio"
  tags: ["vba"]

tipo: mc
opciones_explicitas: ["Pone en negrita las celdas de A1 a D1", "Las borra", "Las suma", "Las oculta"]
respuesta: "Pone en negrita las celdas de A1 a D1"

enunciado: "¿Qué hace `Range(\"A1:D1\").Font.Bold = True`?"

explicacion: |
  Es una propiedad de la fuente.
```

### 13 — Editar

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["editar"]

tipo: mc
opciones_explicitas: ["Editarlo para quitar pasos sobrantes o agregar bucles y condiciones", "Nada", "Solo verlo", "Solo borrarlo"]
respuesta: "Editarlo para quitar pasos sobrantes o agregar bucles y condiciones"

enunciado: "¿Qué se puede hacer con el código de una macro grabada?"

explicacion: |
  Se aplican los conceptos de la programación.
```

### 14 — Conceptos

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["programacion"]

tipo: mc
opciones_explicitas: ["Variables, condicionales, bucles y funciones", "Solo colores", "Solo fuentes", "Ninguno"]
respuesta: "Variables, condicionales, bucles y funciones"

enunciado: "¿Qué conceptos de programación se aplican a las macros?"

explicacion: |
  Son los mismos de cualquier lenguaje.
```

### 15 — Peligro

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Porque son código que se ejecuta en tu equipo y se usa para difundir malware", "Porque pesan mucho", "Porque son lentas", "Porque son caras"]
respuesta: "Porque son código que se ejecuta en tu equipo y se usa para difundir malware"

enunciado: "¿Por qué las macros pueden ser peligrosas?"

explicacion: |
  Un archivo con macros puede ser un ataque.
```

### 16 — Correo

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Desconfiar y no habilitar el contenido si no se espera ni se entiende", "Habilitarlo siempre", "Reenviarlo", "Ignorar el aviso"]
respuesta: "Desconfiar y no habilitar el contenido si no se espera ni se entiende"

enunciado: "Llega un archivo con macros por correo. ¿Qué se hace?"

explicacion: |
  Aunque parezca de alguien conocido, puede estar suplantado.
```

### 17 — Bloqueo

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["No se desactiva", "Se desactiva siempre", "Se desactiva con cada archivo", "Se borra"]
respuesta: "No se desactiva"

enunciado: "¿Qué se hace con la protección que bloquea macros de internet?"

explicacion: |
  Es una defensa importante.
```

### 18 — Formatos

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "intermedio"
  tags: ["extensiones"]

tipo: mc
opciones_explicitas: ["`.xlsm`", "`.xlsx`", "`.csv`", "`.pdf`"]
respuesta: "`.xlsm`"

enunciado: "¿Qué extensión indica un libro con macros?"

explicacion: |
  El `.xlsx` no puede contener macros.
```

### 19 — Cuándo

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["cuando"]

tipo: mc
opciones_explicitas: ["Para una tarea repetitiva con pasos fijos", "Para una tarea de una vez", "Cuando una fórmula lo resuelve", "Cuando los pasos cambian siempre"]
respuesta: "Para una tarea repetitiva con pasos fijos"

enunciado: "¿Cuándo conviene una macro?"

explicacion: |
  Si una fórmula basta, es mejor la fórmula.
```

### 20 — Documentar

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["documentar"]

tipo: mc
opciones_explicitas: ["Qué hace, quién la hizo y sus limitaciones", "Nada", "El precio", "El color"]
respuesta: "Qué hace, quién la hizo y sus limitaciones"

enunciado: "¿Qué conviene documentar de una macro?"

explicacion: |
  Facilita el mantenimiento.
```

### 21 — Seguridad

```
metadata:
  materia: "ofimatica"
  tema: "macros_basicas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Una macro de un archivo conocido siempre es segura."

explicacion: |
  Una cuenta de correo conocida puede estar suplantada o infectada.
```

