# Salud — Primeros auxilios básicos (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Secuencia

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "¿Cuál es el orden general ante una emergencia?"
tipo: mc
opciones_explicitas:
  - "Proteger, alertar y socorrer"
  - "Socorrer, ignorar, esperar"
  - "Mover a la víctima, dejarla sola, avisar"
  - "Grabar, publicar, esperar"
respuesta: "Proteger, alertar y socorrer"

explicacion: |
  Primero la seguridad de la escena.
```

### 2 — Proteger

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

tipo: completar
enunciado: "El primer paso de la secuencia es ___ la escena."
respuestas_validas:
  - "proteger"
  - "asegurar"

explicacion: |
  Si hay riesgo no te expongas.
```

### 3 — Alertar

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Al llamar a emergencias, ¿qué conviene informar?"
tipo: mc
opciones_explicitas:
  - "Solo tu nombre"
  - "Nada hasta que llegue la ambulancia"
  - "Qué pasó, dónde estás y cuántas personas están heridas"
  - "Una opinión sobre el tránsito"
respuesta: "Qué pasó, dónde estás y cuántas personas están heridas"

explicacion: |
  Esa información ayuda al equipo a prepararse.
```

### 4 — Herida pequeña

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "¿Cómo se limpia una herida pequeña?"
tipo: mc
opciones_explicitas:
  - "Con alcohol puro todos los días"
  - "Con tierra"
  - "Sin limpiarla"
  - "Con agua y jabón, luego se cubre con gasa limpia"
respuesta: "Con agua y jabón, luego se cubre con gasa limpia"

explicacion: |
  Después vigilarla por signos de infección.
```

### 5 — Antitetánica

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "Ante una herida conviene revisar la vacuna antitetánica."

explicacion: |
  Forma parte de la prevención.
```

### 6 — Hemorragia

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Ante un sangrado importante, ¿qué se hace primero?"
tipo: mc
opciones_explicitas:
  - "Hacer un torniquete de inmediato"
  - "Presión directa y firme con un paño limpio, y pedir ayuda"
  - "Dejarlo que sangre"
  - "Lavar la herida sin parar"
respuesta: "Presión directa y firme con un paño limpio, y pedir ayuda"

explicacion: |
  Si el paño se empapa, se agrega otro encima.
```

### 7 — Objeto clavado

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Si hay un objeto clavado en una herida, hay que retirarlo enseguida."

explicacion: |
  No se retira: se presiona alrededor y se pide ayuda.
```

### 8 — Sangrado de nariz

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Ante un sangrado de nariz, ¿qué postura conviene?"
tipo: mc
opciones_explicitas:
  - "Acostada boca arriba"
  - "Con la cabeza hacia atrás"
  - "De pie con los brazos arriba"
  - "Sentada, con el cuerpo inclinado hacia adelante"
respuesta: "Sentada, con el cuerpo inclinado hacia adelante"

explicacion: |
  Así la sangre no se traga.
```

### 9 — Minutos

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "avanzado"
  tags: ["primeros_auxilios", "emergencias", "salud"]

tipo: completar
enunciado: "En un sangrado de nariz se aprieta la parte blanda unos ___ minutos."
respuestas_validas:
  - "10"
  - "diez"

explicacion: |
  Si no para o fue por un golpe fuerte, consultar.
```

### 10 — Fractura

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Si sospechás una fractura, ¿qué hacés?"
tipo: mc
opciones_explicitas:
  - "Intentar acomodar el hueso"
  - "Inmovilizar la zona como está y buscar atención"
  - "Hacerla caminar"
  - "Masajear fuerte"
respuesta: "Inmovilizar la zona como está y buscar atención"

explicacion: |
  No se debe acomodar el hueso.
```

### 11 — Golpe en la cabeza

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "avanzado"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "Si tras un golpe en la cabeza hay vómitos, somnolencia o confusión, conviene llamar a emergencias."

explicacion: |
  Son signos de gravedad.
```

### 12 — Dolor de cuello

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "avanzado"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Si alguien se cae y tiene dolor de cuello, ¿qué se hace?"
tipo: mc
opciones_explicitas:
  - "Sentarlo rápido"
  - "Hacerlo caminar"
  - "Moverle el cuello para comprobar"
  - "No moverlo y llamar a emergencias"
respuesta: "No moverlo y llamar a emergencias"

explicacion: |
  Podría haber lesión de columna.
```

### 13 — Desmayo

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Si alguien se desmaya pero respira, ¿qué conviene?"
tipo: mc
opciones_explicitas:
  - "Acostarlo, aflojar la ropa y, si se puede, elevar las piernas"
  - "Sentarlo de golpe"
  - "Darle de beber"
  - "Dejarlo de pie"
respuesta: "Acostarlo, aflojar la ropa y, si se puede, elevar las piernas"

explicacion: |
  Si no recupera el conocimiento, llamar a emergencias.
```

### 14 — Convulsión

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Durante una convulsión, ¿qué NO hay que hacer?"
tipo: mc
opciones_explicitas:
  - "Proteger su cabeza"
  - "Sujetar a la persona o meterle algo en la boca"
  - "Anotar la hora"
  - "Alejar objetos peligrosos"
respuesta: "Sujetar a la persona o meterle algo en la boca"

explicacion: |
  No se traga la lengua.
```

### 15 — Lengua

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Durante una convulsión hay que poner un objeto en la boca para que no se trague la lengua."

explicacion: |
  No se debe meter nada en la boca.
```

### 16 — Convulsión larga

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "avanzado"
  tags: ["primeros_auxilios", "emergencias", "salud"]

tipo: completar
enunciado: "Se llama a emergencias si una convulsión dura más de ___ minutos."
respuestas_validas:
  - "5"
  - "cinco"

explicacion: |
  También si es la primera vez o se repite.
```

### 17 — Intoxicación

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "avanzado"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Ante la ingestión de un producto de limpieza, ¿qué se hace?"
tipo: mc
opciones_explicitas:
  - "Llamar a emergencias o a un centro de toxicología con el envase a mano"
  - "Provocar el vómito"
  - "Dar leche"
  - "Esperar a ver si pasa"
respuesta: "Llamar a emergencias o a un centro de toxicología con el envase a mano"

explicacion: |
  No se dan remedios caseros.
```

### 18 — Botiquín

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Un botiquín básico debe tener los medicamentos vencidos para usarlos igual."

explicacion: |
  Hay que revisar las fechas de vencimiento.
```

### 19 — Botiquín

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "¿Qué contiene un botiquín básico?"
tipo: mc
opciones_explicitas:
  - "Solo tijera"
  - "Solo pastillas"
  - "Gasas, apósitos, cinta, vendas, tijera, antiséptico y guantes"
  - "Nada: no se usa"
respuesta: "Gasas, apósitos, cinta, vendas, tijera, antiséptico y guantes"

explicacion: |
  Y los medicamentos que cada familia use con indicación médica.
```

### 20 — Teléfono

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "basico"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "¿A qué números puede llamarse en una emergencia médica?"
tipo: mc
opciones_explicitas:
  - "A un comercio de la zona"
  - "A ningún número"
  - "Solo a un amigo por mensaje"
  - "Al 107 o al 911"
respuesta: "Al 107 o al 911"

explicacion: |
  El 107 es el SAME de la Ciudad de Buenos Aires y el 911 es el número de emergencias en buena parte del país. El número depende de la zona: verificá el de tu localidad.
```

### 21 — Hacer solo lo que se sabe

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "En primeros auxilios conviene hacer solo lo que se sabe hacer y no arriesgarse."

explicacion: |
  Una acción incorrecta puede empeorar el cuadro.
```

### 22 — RCP

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "¿Dónde está el tema de RCP, DEA, atragantamiento, quemaduras y golpe de calor?"
tipo: mc
opciones_explicitas:
  - "En el de Química"
  - "En el módulo de Educación Física sobre primeros auxilios"
  - "En el de Historia"
  - "No existe"
respuesta: "En el módulo de Educación Física sobre primeros auxilios"

explicacion: |
  Este tema lo complementa.
```

### 23 — Esguince

```
metadata:
  materia: "salud"
  tema: "primeros_auxilios_basicos"
  nivel: "intermedio"
  tags: ["primeros_auxilios", "emergencias", "salud"]

enunciado: "Para un esguince leve se usa la sigla:"
tipo: mc
opciones_explicitas:
  - "PAS"
  - "IVA"
  - "RICE"
  - "HTML"
respuesta: "RICE"

explicacion: |
  Reposo, hielo, compresión y elevación.
```
