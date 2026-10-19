# Automatizacion — Mantenimiento y diagnóstico de sistemas automatizados (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/mantenimiento-y-diagnostico-de-sistemas-automatizados`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — El mantenimiento correctivo se realiza...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento correctivo se realiza..."
tipo: mc
opciones_explicitas:
  - "Cuando la falla ya ocurrió"
  - "Antes de cualquier falla"
  - "Según un calendario"
  - "Por análisis de vibraciones"
respuesta: "Cuando la falla ya ocurrió"

explicacion: |
  Es el menos previsible.
```

### 2 — El mantenimiento preventivo se realiza...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento preventivo se realiza..."
tipo: mc
opciones_explicitas:
  - "Según un calendario o horas de uso, aunque el equipo parezca estar bien"
  - "Solo tras una falla"
  - "Nunca"
  - "Cuando el cliente lo pide"
respuesta: "Según un calendario o horas de uso, aunque el equipo parezca estar bien"

explicacion: |
  Por ejemplo, lubricar o cambiar filtros.
```

### 3 — El mantenimiento predictivo se basa en...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento predictivo se basa en..."
tipo: mc
opciones_explicitas:
  - "Medir el estado del equipo para intervenir cuando la falla se acerca"
  - "Adivinar"
  - "Esperar la falla"
  - "Cambiar todo por año"
respuesta: "Medir el estado del equipo para intervenir cuando la falla se acerca"

explicacion: |
  Usa vibraciones, temperatura, corriente o análisis de aceite.
```

### 4 — El mantenimiento proactivo busca...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento proactivo busca..."
tipo: mc
opciones_explicitas:
  - "Eliminar las causas de raíz de las fallas"
  - "Reparar rápido"
  - "Reducir costos reemplazando todo"
  - "Ignorar fallas leves"
respuesta: "Eliminar las causas de raíz de las fallas"

explicacion: |
  Por ejemplo, corregir una mala alineación.
```

### 5 — ¿Qué es el MTBF

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Qué es el MTBF?"
tipo: mc
opciones_explicitas:
  - "El tiempo medio entre fallas"
  - "El tiempo medio de reparación"
  - "La disponibilidad"
  - "El costo medio"
respuesta: "El tiempo medio entre fallas"

explicacion: |
  Mide cuánto funciona en promedio entre una falla y otra.
```

### 6 — ¿Qué es el MTTR

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Qué es el MTTR?"
tipo: mc
opciones_explicitas:
  - "El tiempo medio de reparación"
  - "El tiempo medio entre fallas"
  - "La temperatura media"
  - "La tensión media"
respuesta: "El tiempo medio de reparación"

explicacion: |
  Cuánto tarda en volver a funcionar después de fallar.
```

### 7 — La disponibilidad se calcula como...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "La disponibilidad se calcula como..."
tipo: mc
opciones_explicitas:
  - "MTBF / (MTBF + MTTR)"
  - "MTBF · MTTR"
  - "MTTR / MTBF"
  - "MTBF − MTTR"
respuesta: "MTBF / (MTBF + MTTR)"

explicacion: |
  Aumenta con más MTBF o menos MTTR.
```

### 8 — Al diagnosticar un lazo de control, lo primero es...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Al diagnosticar un lazo de control, lo primero es..."
tipo: mc
opciones_explicitas:
  - "Observar el síntoma y verificar la medición"
  - "Cambiar la sintonía"
  - "Cambiar el PLC"
  - "Reiniciar la planta"
respuesta: "Observar el síntoma y verificar la medición"

explicacion: |
  Se revisa en orden: medición, actuador, controlador y recién después la sintonía.
```

### 9 — Una lectura de 0 mA en un lazo de 4-20 mA sugiere...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Una lectura de 0 mA en un lazo de 4-20 mA sugiere..."
tipo: mc
opciones_explicitas:
  - "Cable cortado o instrumento sin alimentación"
  - "Variable en cero"
  - "Lazo perfecto"
  - "Falla del software"
respuesta: "Cable cortado o instrumento sin alimentación"

explicacion: |
  El cero vivo permite detectar esta condición.
```

### 10 — Muchos transmisores señalan una falla propia con una corrien

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Muchos transmisores señalan una falla propia con una corriente..."
tipo: mc
opciones_explicitas:
  - "Por debajo de 3,6 mA o por encima de 21 mA"
  - "De exactamente 12 mA"
  - "De 4 mA fijos"
  - "De 20 mA fijos"
respuesta: "Por debajo de 3,6 mA o por encima de 21 mA"

explicacion: |
  Son valores fuera del rango normal de medición.
```

### 11 — Si el sensor está activo pero la entrada del PLC no lo refle

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Si el sensor está activo pero la entrada del PLC no lo refleja, el problema probablemente está en..."
tipo: mc
opciones_explicitas:
  - "El cableado o el módulo de entrada"
  - "El programa"
  - "El actuador"
  - "La salida"
respuesta: "El cableado o el módulo de entrada"

explicacion: |
  Se sigue la cadena desde el sensor.
```

### 12 — Si la entrada del PLC es correcta y la salida no responde, h

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Si la entrada del PLC es correcta y la salida no responde, hay que revisar..."
tipo: mc
opciones_explicitas:
  - "El programa o el módulo de salida"
  - "El sensor"
  - "La alimentación del sensor"
  - "El cable de entrada"
respuesta: "El programa o el módulo de salida"

explicacion: |
  Se avanza en la cadena causa-efecto.
```

### 13 — ¿Por qué conviene guardar respaldos de los programas y parám

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Por qué conviene guardar respaldos de los programas y parámetros?"
tipo: mc
opciones_explicitas:
  - "Para configurar un equipo reemplazado en minutos"
  - "Para ocupar espacio"
  - "Porque lo pide el sensor"
  - "Para evitar el mantenimiento"
respuesta: "Para configurar un equipo reemplazado en minutos"

explicacion: |
  También sirve ante una pérdida de memoria.
```

### 14 — Antes de intervenir un equipo hay que...

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Antes de intervenir un equipo hay que..."
tipo: mc
opciones_explicitas:
  - "Aplicar bloqueo y etiquetado y verificar la ausencia de energía"
  - "Trabajar con él encendido sin avisar"
  - "Desactivar todas las alarmas"
  - "Quitar las protecciones"
respuesta: "Aplicar bloqueo y etiquetado y verificar la ausencia de energía"

explicacion: |
  Es la regla de seguridad básica.
```

### 15 — Muchos problemas atribuidos al control son en realidad del i

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: verdadero
tipo: vf

enunciado: "Muchos problemas atribuidos al control son en realidad del instrumento o del actuador."

explicacion: |
  Por eso se revisa primero la medición y el actuador.
```

### 16 — Un equipo muy confiable siempre tiene mejor disponibilidad q

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: falso
tipo: vf

enunciado: "Un equipo muy confiable siempre tiene mejor disponibilidad que uno fácil de reparar."

explicacion: |
  Depende de ambos tiempos.
```

### 17 — Un buen historial de fallas ayuda a ajustar los intervalos d

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: verdadero
tipo: vf

enunciado: "Un buen historial de fallas ayuda a ajustar los intervalos de mantenimiento preventivo."

explicacion: |
  Se detectan fallas repetidas.
```

### 18 — Cambiar parámetros del controlador al azar es una buena form

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: falso
tipo: vf

enunciado: "Cambiar parámetros del controlador al azar es una buena forma de diagnosticar."

explicacion: |
  Conviene revisar primero señal, actuador y modo.
```

### 19 — El mantenimiento que usa mediciones de vibración y temperatu

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

tipo: completar
enunciado: "El mantenimiento que usa mediciones de vibración y temperatura para decidir cuándo intervenir es el ___ (predictivo / correctivo)."
respuestas_validas:
  - "predictivo"

explicacion: |
  Interviene cuando los datos lo indican.
```

### 20 — La disponibilidad aumenta si el MTTR ___ (aumenta / disminuy

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

tipo: completar
enunciado: "La disponibilidad aumenta si el MTTR ___ (aumenta / disminuye)."
respuestas_validas:
  - "disminuye"

explicacion: |
  Se repara más rápido.
```

### 21 — Un equipo tiene un MTBF de {mtbf} horas y un MTTR de {mttr}

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

variables:
  mtbf: random(200, 1000)
  mttr: random(2, 20)

respuesta: redondear(mtbf / (mtbf + mttr) * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un equipo tiene un MTBF de {mtbf} horas y un MTTR de {mttr} horas. ¿Cuál es su disponibilidad, en %? (redondeá a un decimal)"

pasos:
  - "Disponibilidad = MTBF / (MTBF + MTTR)"

explicacion: |
  Se expresa en porcentaje.
```

### 22 — Un equipo funcionó {horas} horas y tuvo {fallas} fallas. ¿Cu

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

variables:
  horas: random(2000, 8000)
  fallas: random(2, 10)

respuesta: redondear(horas / fallas, 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un equipo funcionó {horas} horas y tuvo {fallas} fallas. ¿Cuál es su MTBF aproximado, en horas? (redondeá a la unidad)"

pasos:
  - "MTBF = horas de funcionamiento / número de fallas"

explicacion: |
  Promedio entre fallas.
```

### 23 — Un lazo registró {total} lecturas de las cuales {fuera} caye

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

variables:
  total: random(10, 100)
  fuera: random(1, 9)

respuesta: fuera
tipo: input
tolerancia_abs: 0

enunciado: "Un lazo registró {total} lecturas de las cuales {fuera} cayeron por debajo de 3,6 mA. ¿Cuántas lecturas indican posible falla del instrumento?"

pasos:
  - "Se cuentan las lecturas por debajo de 3,6 mA"

explicacion: |
  Ese valor está fuera del rango normal de medición.
```
