# DBA — Backups y recuperación (cuestionario, 26 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Por qué

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Porque los datos se pierden por fallas, errores humanos, ataques y desastres", "Por costumbre", "Porque ocupan espacio", "Porque son lentas"]
respuesta: "Porque los datos se pierden por fallas, errores humanos, ataques y desastres"

enunciado: "¿Por qué se hacen copias de seguridad?"

explicacion: |
  Es la última defensa.
```

### 2 — Esperanza

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["restauracion"]

tipo: mc
opciones_explicitas: ["Que no se puede considerar un backup confiable", "Que es perfecto", "Que es seguro", "Que es más rápido"]
respuesta: "Que no se puede considerar un backup confiable"

enunciado: "¿Qué se dice de un backup que nunca se restauró?"

explicacion: |
  Hay que probar la restauración.
```

### 3 — Réplica

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["replica"]

tipo: mc
opciones_explicitas: ["No: copia también los errores, como un borrado accidental", "Sí", "Solo si es rápida", "Solo en la nube"]
respuesta: "No: copia también los errores, como un borrado accidental"

enunciado: "¿Una réplica reemplaza al backup?"

explicacion: |
  Protege de fallas del servidor, no de errores humanos.
```

### 4 — RPO

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["rpo"]

tipo: mc
opciones_explicitas: ["Cuántos datos se pueden perder, expresado en tiempo", "Cuánto tarda en volver", "Cuánto pesa", "Cuánto cuesta"]
respuesta: "Cuántos datos se pueden perder, expresado en tiempo"

enunciado: "¿Qué mide el RPO?"

explicacion: |
  Determina cada cuánto se copia.
```

### 5 — RTO

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["rto"]

tipo: mc
opciones_explicitas: ["Cuánto tiempo puede estar caído el sistema", "Cuántos datos se pierden", "Cuánto pesa la copia", "Cuántos usuarios hay"]
respuesta: "Cuánto tiempo puede estar caído el sistema"

enunciado: "¿Qué mide el RTO?"

explicacion: |
  Determina la estrategia de restauración.
```

### 6 — Quién

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["negocio"]

tipo: mc
opciones_explicitas: ["El negocio, según el costo de perder datos o de estar caído", "El azar", "El fabricante", "El DBA solo por gusto"]
respuesta: "El negocio, según el costo de perder datos o de estar caído"

enunciado: "¿Quién fija el RPO y el RTO?"

explicacion: |
  La técnica se elige para cumplirlos.
```

### 7 — Completa

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["completa"]

tipo: mc
opciones_explicitas: ["Una restauración simple", "Es muy rápida", "Es la más chica", "Se hace en segundos"]
respuesta: "Una restauración simple"

enunciado: "¿Cuál es una ventaja de la copia completa?"

explicacion: |
  Pero es lenta y grande.
```

### 8 — Incremental

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["incremental"]

tipo: mc
opciones_explicitas: ["Lo que cambió desde la última copia", "Todo", "Solo la estructura", "Solo los índices"]
respuesta: "Lo que cambió desde la última copia"

enunciado: "¿Qué guarda una copia incremental?"

explicacion: |
  Es chica y rápida.
```

### 9 — Cadena

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["incremental"]

tipo: mc
opciones_explicitas: ["La cadena completa de copias", "Solo la última", "Nada", "Solo la primera"]
respuesta: "La cadena completa de copias"

enunciado: "¿Qué exige restaurar con incrementales?"

explicacion: |
  Si falta una, no se puede.
```

### 10 — Diferencial

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["diferencial"]

tipo: mc
opciones_explicitas: ["Lo que cambió desde la última copia completa", "Todo", "Solo lo de hoy", "Nada"]
respuesta: "Lo que cambió desde la última copia completa"

enunciado: "¿Qué guarda una copia diferencial?"

explicacion: |
  Crece con el tiempo.
```

### 11 — Lógica

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["logica"]

tipo: mc
opciones_explicitas: ["Una exportación de los datos o instrucciones, como la de `pg_dump`", "Una copia de archivos", "Un disco", "Un servidor"]
respuesta: "Una exportación de los datos o instrucciones, como la de `pg_dump`"

enunciado: "¿Qué es una copia lógica?"

explicacion: |
  Es portable.
```

### 12 — Física

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["fisica"]

tipo: mc
opciones_explicitas: ["Los archivos de datos", "Instrucciones SQL", "Solo la estructura", "Solo las claves"]
respuesta: "Los archivos de datos"

enunciado: "¿Qué guarda una copia física?"

explicacion: |
  Es rápida de restaurar en bases grandes.
```

### 13 — WAL

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["wal"]

tipo: mc
opciones_explicitas: ["El registro de transacciones donde se anotan los cambios antes de aplicarlos", "Un tipo de copia", "Un índice", "Un usuario"]
respuesta: "El registro de transacciones donde se anotan los cambios antes de aplicarlos"

enunciado: "¿Qué es el WAL?"

explicacion: |
  Permite recuperar hasta un punto.
```

### 14 — PITR

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["pitr"]

tipo: mc
opciones_explicitas: ["Reconstruir la base hasta un instante concreto", "Copiar más rápido", "Borrar logs", "Cifrar datos"]
respuesta: "Reconstruir la base hasta un instante concreto"

enunciado: "¿Qué permite la recuperación a un punto en el tiempo (PITR)?"

explicacion: |
  Por ejemplo, justo antes del borrado accidental.
```

### 15 — Dump

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["pg_dump"]

tipo: mc
opciones_explicitas: ["Genera una copia lógica de una base", "Borra la base", "Crea usuarios", "Cambia permisos"]
respuesta: "Genera una copia lógica de una base"

enunciado: "¿Qué hace `pg_dump`?"

explicacion: |
  Con `pg_restore` se restaura.
```

### 16 — Restaurar

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["pruebas"]

tipo: mc
opciones_explicitas: ["En un entorno aparte", "En producción directamente", "En la misma base", "Nunca"]
respuesta: "En un entorno aparte"

enunciado: "¿Dónde conviene probar una restauración?"

explicacion: |
  No se pisa lo que está funcionando.
```

### 17 — Verificar

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["verificacion"]

tipo: mc
opciones_explicitas: ["Que no haya errores y que los datos sean los esperados", "Solo que terminó", "Nada", "Solo el tamaño"]
respuesta: "Que no haya errores y que los datos sean los esperados"

enunciado: "¿Qué se verifica tras restaurar?"

explicacion: |
  Con conteos y consultas de comprobación.
```

### 18 — 321

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["321"]

tipo: mc
opciones_explicitas: ["3 copias, en 2 tipos de soporte, 1 fuera del lugar", "1 copia en 3 lugares", "2 copias en 3 soportes", "3 copias en el mismo disco"]
respuesta: "3 copias, en 2 tipos de soporte, 1 fuera del lugar"

enunciado: "¿Qué propone la regla 3-2-1?"

explicacion: |
  Idealmente, una inmutable o desconectada.
```

### 19 — Ransomware

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["ransomware"]

tipo: mc
opciones_explicitas: ["La inmutable o desconectada", "La conectada siempre", "La del mismo servidor", "La sin probar"]
respuesta: "La inmutable o desconectada"

enunciado: "¿Qué copia resiste mejor al ransomware?"

explicacion: |
  El ransomware cifra lo que alcanza.
```

### 20 — Automatizar

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["automatizar"]

tipo: mc
opciones_explicitas: ["Para no depender de que alguien se acuerde", "Por moda", "Por costumbre", "Para gastar"]
respuesta: "Para no depender de que alguien se acuerde"

enunciado: "¿Por qué se automatizan las copias?"

explicacion: |
  Y se monitorean.
```

### 21 — Monitorear

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["monitoreo"]

tipo: mc
opciones_explicitas: ["Que se ejecuten, terminen bien y su tamaño", "Solo el color", "Nada", "Solo el nombre"]
respuesta: "Que se ejecuten, terminen bien y su tamaño"

enunciado: "¿Qué se monitorea de las copias?"

explicacion: |
  Con una alerta si fallan.
```

### 22 — Claves

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["claves"]

tipo: mc
opciones_explicitas: ["Se pierde la copia", "Nada", "Se recupera sola", "Se descifra con un virus"]
respuesta: "Se pierde la copia"

enunciado: "¿Qué pasa si se pierde la clave de una copia cifrada?"

explicacion: |
  Hay que proteger las claves.
```

### 23 — Retención

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["retencion"]

tipo: mc
opciones_explicitas: ["Cuánto tiempo se guarda cada copia", "Cuántos usuarios", "El tamaño", "El motor"]
respuesta: "Cuánto tiempo se guarda cada copia"

enunciado: "¿Qué define la retención?"

explicacion: |
  Depende de las necesidades y las leyes.
```

### 24 — Simulacros

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["simulacros"]

tipo: mc
opciones_explicitas: ["Para comprobar que funciona y medir cuánto tarda", "Para gastar", "Para borrar", "Para publicar"]
respuesta: "Para comprobar que funciona y medir cuánto tarda"

enunciado: "¿Para qué sirven los simulacros de restauración?"

explicacion: |
  Verifican el RTO.
```

### 25 — Incidente

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "intermedio"
  tags: ["incidente"]

tipo: mc
opciones_explicitas: ["Guardar una copia de lo que quedó y no seguir escribiendo", "Restaurar encima sin más", "Borrar todo", "Reiniciar"]
respuesta: "Guardar una copia de lo que quedó y no seguir escribiendo"

enunciado: "Tras un borrado accidental, ¿qué se hace antes de restaurar?"

explicacion: |
  Puede contener datos recuperables.
```

### 26 — Privacidad

```
metadata:
  materia: "dba"
  tema: "backups_y_recuperacion"
  nivel: "basico"
  tags: ["privacidad"]

tipo: mc
opciones_explicitas: ["Las mismas que para la base original", "Ninguna", "Menos", "Otras totalmente distintas"]
respuesta: "Las mismas que para la base original"

enunciado: "¿Qué reglas valen para las copias que contienen datos personales?"

explicacion: |
  Cifrado, acceso limitado y eliminación al vencer.
```

