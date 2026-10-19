# Automatizacion — PLC: temporizadores, contadores y secuencias (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/plc-temporizadores-contadores-y-secuencias`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué hace un temporizador TON

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador TON?"
tipo: mc
opciones_explicitas:
  - "Retrasa la activación de la salida"
  - "Retrasa la desactivación"
  - "Genera un pulso fijo"
  - "Cuenta piezas"
respuesta: "Retrasa la activación de la salida"

explicacion: |
  Q se activa cuando IN estuvo en 1 durante el tiempo PT.
```

### 2 — En un TON, si IN cae a 0 antes de cumplir PT...

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "En un TON, si IN cae a 0 antes de cumplir PT..."
tipo: mc
opciones_explicitas:
  - "El conteo se reinicia y Q no se activa"
  - "Q se activa igualmente"
  - "Q queda en 1 para siempre"
  - "PT se duplica"
respuesta: "El conteo se reinicia y Q no se activa"

explicacion: |
  Debe mantenerse IN durante todo el tiempo.
```

### 3 — ¿Qué hace un temporizador TOF

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador TOF?"
tipo: mc
opciones_explicitas:
  - "Mantiene Q activo un tiempo PT después de que IN vuelve a 0"
  - "Activa Q después de PT"
  - "Cuenta pulsos"
  - "Reinicia el PLC"
respuesta: "Mantiene Q activo un tiempo PT después de que IN vuelve a 0"

explicacion: |
  Retrasa la desconexión.
```

### 4 — Un ventilador que sigue funcionando un minuto después de apa

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "Un ventilador que sigue funcionando un minuto después de apagar la máquina usa..."
tipo: mc
opciones_explicitas:
  - "Un TOF"
  - "Un TON"
  - "Un CTU"
  - "Un contador descendente"
respuesta: "Un TOF"

explicacion: |
  La salida se apaga con retardo.
```

### 5 — ¿Qué hace un temporizador de pulso (TP)

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador de pulso (TP)?"
tipo: mc
opciones_explicitas:
  - "Genera un pulso de duración PT al pasar IN de 0 a 1"
  - "Retrasa la entrada"
  - "Cuenta flancos"
  - "Invierte la salida"
respuesta: "Genera un pulso de duración PT al pasar IN de 0 a 1"

explicacion: |
  No importa cuánto dure IN después.
```

### 6 — ¿Qué cuenta un contador CTU

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué cuenta un contador CTU?"
tipo: mc
opciones_explicitas:
  - "Flancos ascendentes de la entrada"
  - "Niveles de la entrada"
  - "Segundos"
  - "Voltios"
respuesta: "Flancos ascendentes de la entrada"

explicacion: |
  Una pieza quieta frente al sensor se cuenta una sola vez.
```

### 7 — ¿Cuándo se activa la salida Q de un CTU

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Cuándo se activa la salida Q de un CTU?"
tipo: mc
opciones_explicitas:
  - "Cuando el valor actual CV llega al valor preseleccionado PV"
  - "Cuando R está en 1"
  - "Cuando CV es cero"
  - "Siempre"
respuesta: "Cuando el valor actual CV llega al valor preseleccionado PV"

explicacion: |
  Es el aviso de que se llegó a la cantidad.
```

### 8 — ¿Para qué sirve la entrada R de un contador

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Para qué sirve la entrada R de un contador?"
tipo: mc
opciones_explicitas:
  - "Para reiniciarlo a cero"
  - "Para retardar la cuenta"
  - "Para invertir la señal"
  - "Para apagar el PLC"
respuesta: "Para reiniciarlo a cero"

explicacion: |
  Si no se reinicia, conserva el valor.
```

### 9 — ¿Qué bloque sirve para controlar los autos que hay en un est

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué bloque sirve para controlar los autos que hay en un estacionamiento?"
tipo: mc
opciones_explicitas:
  - "CTUD, que cuenta hacia arriba y hacia abajo"
  - "TOF"
  - "TP"
  - "TON"
respuesta: "CTUD, que cuenta hacia arriba y hacia abajo"

explicacion: |
  Suma al entrar y resta al salir.
```

### 10 — En una secuencia con marcas de paso, cada paso...

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "En una secuencia con marcas de paso, cada paso..."
tipo: mc
opciones_explicitas:
  - "Activa el siguiente al cumplirse una condición y desactiva el anterior"
  - "Se ejecuta aleatoriamente"
  - "Reinicia el PLC"
  - "Elimina los contadores"
respuesta: "Activa el siguiente al cumplirse una condición y desactiva el anterior"

explicacion: |
  Es la base de las secuencias.
```

### 11 — ¿Qué conviene hacer antes de programar una secuencia

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué conviene hacer antes de programar una secuencia?"
tipo: mc
opciones_explicitas:
  - "Dibujar los pasos, las acciones y las condiciones de transición"
  - "Programar directamente"
  - "Elegir los cables"
  - "Reiniciar el PLC"
respuesta: "Dibujar los pasos, las acciones y las condiciones de transición"

explicacion: |
  Después se formaliza como GRAFCET.
```

### 12 — Usar el mismo temporizador en dos peldaños distintos puede..

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "Usar el mismo temporizador en dos peldaños distintos puede..."
tipo: mc
opciones_explicitas:
  - "Comportarse de manera impredecible"
  - "Mejorar la precisión"
  - "Duplicar el tiempo"
  - "No tener efecto"
respuesta: "Comportarse de manera impredecible"

explicacion: |
  Se recomienda uno por función.
```

### 13 — ¿Qué conviene definir para después de un corte de energía

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué conviene definir para después de un corte de energía?"
tipo: mc
opciones_explicitas:
  - "Si los contadores y temporizadores se reinician o se retienen"
  - "El color de las luces"
  - "El tamaño del tablero"
  - "El idioma del PLC"
respuesta: "Si los contadores y temporizadores se reinician o se retienen"

explicacion: |
  Evita comportamientos inesperados al reanudar.
```

### 14 — Un TON activa su salida inmediatamente cuando IN pasa a 1.

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: falso
tipo: vf

enunciado: "Un TON activa su salida inmediatamente cuando IN pasa a 1."

explicacion: |
  La activa después del tiempo PT.
```

### 15 — Un contador CTU cuenta niveles, no flancos.

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: falso
tipo: vf

enunciado: "Un contador CTU cuenta niveles, no flancos."

explicacion: |
  Cuenta flancos ascendentes.
```

### 16 — Un TOF activa su salida de inmediato al pasar IN a 1.

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: verdadero
tipo: vf

enunciado: "Un TOF activa su salida de inmediato al pasar IN a 1."

explicacion: |
  Y la desactiva con retardo.
```

### 17 — Hay que probar casos límite, como una entrada que dura menos

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: verdadero
tipo: vf

enunciado: "Hay que probar casos límite, como una entrada que dura menos que PT."

explicacion: |
  Son fuente común de errores.
```

### 18 — El bloque que retrasa la activación de una salida se llama _

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

tipo: completar
enunciado: "El bloque que retrasa la activación de una salida se llama ___ (TON / TOF)."
respuestas_validas:
  - "TON"

explicacion: |
  On-delay.
```

### 19 — Un contador que suma 1 en cada flanco ascendente es un ___ (

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

tipo: completar
enunciado: "Un contador que suma 1 en cada flanco ascendente es un ___ (CTU / CTD)."
respuestas_validas:
  - "CTU"

explicacion: |
  Count up.
```

### 20 — Un contador CTU tiene PV = {pv} y ya contó CV = {cv} piezas.

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

variables:
  pv: random(6, 24)
  cv: random(0, 5)

respuesta: pv - cv
tipo: input
tolerancia_abs: 0

enunciado: "Un contador CTU tiene PV = {pv} y ya contó CV = {cv} piezas. ¿Cuántas piezas más hacen falta para que se active Q?"

pasos:
  - "Faltan = PV − CV"

explicacion: |
  Q se activa cuando CV alcanza PV.
```

### 21 — En un estacionamiento con un CTUD entraron {ent} autos y sal

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

variables:
  ent: random(10, 40)
  sal: random(1, 9)

respuesta: ent - sal
tipo: input
tolerancia_abs: 0

enunciado: "En un estacionamiento con un CTUD entraron {ent} autos y salieron {sal}. ¿Cuánto vale CV?"

pasos:
  - "CV = entradas − salidas"

explicacion: |
  Suma al entrar y resta al salir.
```

### 22 — Una cinta B arranca con un TON de {t1} s después de A, y una

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

variables:
  t1: random(2, 6)
  t2: random(2, 6)

respuesta: t1 + t2
tipo: input
tolerancia_abs: 0

enunciado: "Una cinta B arranca con un TON de {t1} s después de A, y una cinta C con otro TON de {t2} s después de B. ¿Cuántos segundos después de A arranca C?"

pasos:
  - "Se suman los retardos"

explicacion: |
  Los retardos se encadenan.
```

### 23 — Un TON tiene PT = {pt} s. La entrada IN permanece en 1 duran

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

variables:
  pt: random(3, 15)
  dur: random(1, 20)

respuesta: if(dur >= pt, 1, 0)
tipo: input
tolerancia_abs: 0

enunciado: "Un TON tiene PT = {pt} s. La entrada IN permanece en 1 durante {dur} s y luego cae. ¿Q llegó a activarse (1 = sí, 0 = no)?"

pasos:
  - "Q se activa si IN dura al menos PT"

explicacion: |
  Si IN duró menos de PT, el conteo se reinició.
```
