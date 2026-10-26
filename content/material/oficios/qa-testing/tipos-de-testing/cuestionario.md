# QA y Testing — Tipos de testing (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Unitarias

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["unitaria"]

tipo: mc
opciones_explicitas: ["Una función o clase aislada", "El sistema completo", "La red", "La base de datos entera"]
respuesta: "Una función o clase aislada"

enunciado: "¿Qué prueba una prueba unitaria?"

explicacion: |
  Es rápida y la suelen escribir los programadores.
```

### 2 — Integración

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["integracion"]

tipo: mc
opciones_explicitas: ["Que varios módulos funcionen bien conectados", "Una función sola", "La velocidad", "La apariencia"]
respuesta: "Que varios módulos funcionen bien conectados"

enunciado: "¿Qué verifica una prueba de integración?"

explicacion: |
  Por ejemplo, el código con la base de datos.
```

### 3 — Sistema

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["El producto completo de punta a punta", "Una línea de código", "Solo la interfaz gráfica", "Solo la base de datos"]
respuesta: "El producto completo de punta a punta"

enunciado: "¿Qué cubre una prueba de sistema?"

explicacion: |
  Se prueba como lo usaría el usuario.
```

### 4 — Aceptación

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["aceptacion"]

tipo: mc
opciones_explicitas: ["Si el producto satisface lo que el cliente pidió", "Si el código está ordenado", "Si tiene pocos errores", "Si compila"]
respuesta: "Si el producto satisface lo que el cliente pidió"

enunciado: "¿Qué determina una prueba de aceptación?"

explicacion: |
  Participan el cliente o los usuarios.
```

### 5 — Pirámide

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["piramide"]

tipo: mc
opciones_explicitas: ["Muchas pruebas unitarias, algunas de integración y pocas de punta a punta", "Pocas unitarias y muchas de punta a punta", "Todas iguales", "Solo manuales"]
respuesta: "Muchas pruebas unitarias, algunas de integración y pocas de punta a punta"

enunciado: "¿Qué propone la pirámide de pruebas?"

explicacion: |
  Las de punta a punta son lentas y frágiles.
```

### 6 — Funcional

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["funcional"]

tipo: mc
opciones_explicitas: ["Que el producto haga lo que debe", "Que sea rápido", "Que sea seguro", "Que se vea lindo"]
respuesta: "Que el producto haga lo que debe"

enunciado: "¿Qué verifica una prueba funcional?"

explicacion: |
  Contrasta el comportamiento con los requisitos.
```

### 7 — No funcional

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["no funcional"]

tipo: mc
opciones_explicitas: ["Medir cuánto tarda en responder con 1000 usuarios", "Verificar que sume bien", "Verificar que guarde un dato", "Verificar un botón"]
respuesta: "Medir cuánto tarda en responder con 1000 usuarios"

enunciado: "¿Cuál es una prueba no funcional?"

explicacion: |
  Se centra en *cómo* funciona, no en *qué* hace.
```

### 8 — Carga y estrés

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["rendimiento"]

tipo: mc
opciones_explicitas: ["Carga: uso esperado alto; estrés: más allá del límite", "Son lo mismo", "Carga: sin usuarios; estrés: con uno", "Estrés es de seguridad"]
respuesta: "Carga: uso esperado alto; estrés: más allá del límite"

enunciado: "¿Cuál es la diferencia entre prueba de carga y de estrés?"

explicacion: |
  El estrés muestra cómo falla el sistema al excederse.
```

### 9 — Regresión

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["regresion"]

tipo: mc
opciones_explicitas: ["Para ver que un cambio no rompió lo que ya funcionaba", "Para probar solo lo nuevo", "Para medir velocidad", "Para elegir colores"]
respuesta: "Para ver que un cambio no rompió lo que ya funcionaba"

enunciado: "¿Para qué es la prueba de regresión?"

explicacion: |
  Es la principal candidata a automatizarse.
```

### 10 — Humo

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["humo"]

tipo: mc
opciones_explicitas: ["Pocas pruebas rápidas para ver si la versión \"enciende\" y vale la pena probarla más", "Una prueba de incendio", "Una prueba de carga", "Una prueba de seguridad"]
respuesta: "Pocas pruebas rápidas para ver si la versión \"enciende\" y vale la pena probarla más"

enunciado: "¿Qué es una prueba de humo (smoke)?"

explicacion: |
  Si falla, se devuelve la versión sin seguir.
```

### 11 — Caja negra

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["caja negra"]

tipo: mc
opciones_explicitas: ["Sin ver el código, solo con entradas y salidas", "Viendo todo el código", "Solo con el código", "En la oscuridad"]
respuesta: "Sin ver el código, solo con entradas y salidas"

enunciado: "¿Cómo se prueba en caja negra?"

explicacion: |
  Se parte de los requisitos.
```

### 12 — Caja blanca

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["caja blanca"]

tipo: mc
opciones_explicitas: ["Conocer el código para diseñar las pruebas", "Ignorar el código", "Solo la interfaz", "Solo los requisitos"]
respuesta: "Conocer el código para diseñar las pruebas"

enunciado: "¿Qué requiere la prueba de caja blanca?"

explicacion: |
  Sirve, por ejemplo, para recorrer todas las ramas.
```

### 13 — Seguridad

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["De seguridad", "De usabilidad", "De compatibilidad", "De humo"]
respuesta: "De seguridad"

enunciado: "Intentar acceder a datos sin permiso, ¿qué tipo de prueba es?"

explicacion: |
  Verifica la resistencia a accesos y ataques.
```

### 14 — Compatibilidad

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["compatibilidad"]

tipo: mc
opciones_explicitas: ["De compatibilidad", "Unitaria", "De carga", "De aceptación"]
respuesta: "De compatibilidad"

enunciado: "Probar una web en Chrome, Firefox y Safari, ¿qué tipo de prueba es?"

explicacion: |
  Se verifica en distintos navegadores, dispositivos o versiones.
```

### 15 — Usabilidad

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["usabilidad"]

tipo: mc
opciones_explicitas: ["Qué tan fácil de usar es el producto", "Qué tan rápido es", "Qué tan seguro es", "Cuánto ocupa"]
respuesta: "Qué tan fácil de usar es el producto"

enunciado: "¿Qué evalúa una prueba de usabilidad?"

explicacion: |
  Suele hacerse observando a personas usándolo.
```

### 16 — Manual

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["manual"]

tipo: mc
opciones_explicitas: ["Para explorar, evaluar usabilidad y casos que se hacen una sola vez", "Para repetir miles de veces", "Nunca", "Solo para regresión"]
respuesta: "Para explorar, evaluar usabilidad y casos que se hacen una sola vez"

enunciado: "¿Cuándo es especialmente útil probar a mano?"

explicacion: |
  La automatización no lo reemplaza.
```

### 17 — Automatizada

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["automatizacion"]

tipo: mc
opciones_explicitas: ["Una prueba repetitiva y estable que se ejecuta en cada versión", "Una que se hace una sola vez", "Una de usabilidad", "Una exploratoria"]
respuesta: "Una prueba repetitiva y estable que se ejecuta en cada versión"

enunciado: "¿Qué caso es buen candidato a automatizar?"

explicacion: |
  La automatización tiene costo de armado y mantenimiento.
```

### 18 — Costo de automatizar

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["automatizacion"]

tipo: mc
opciones_explicitas: ["Armarla y mantenerla cuando el producto cambia", "Ninguno", "Solo el de la computadora", "Solo el de la licencia"]
respuesta: "Armarla y mantenerla cuando el producto cambia"

enunciado: "¿Qué costo tiene la automatización de pruebas?"

explicacion: |
  Una prueba automática mal mantenida se rompe y deja de dar información útil.
```

### 19 — Criterio

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "basico"
  tags: ["criterio"]

tipo: mc
opciones_explicitas: ["Según el riesgo y el momento del proyecto", "Al azar", "Siempre las mismas", "Todas a la vez"]
respuesta: "Según el riesgo y el momento del proyecto"

enunciado: "¿Cómo conviene elegir qué pruebas hacer?"

explicacion: |
  Lo crítico y repetitivo se automatiza; lo nuevo y cambiante se prueba a mano.
```

### 20 — Accesibilidad

```
metadata:
  materia: "qa-testing"
  tema: "tipos_de_testing"
  nivel: "intermedio"
  tags: ["accesibilidad"]

tipo: mc
opciones_explicitas: ["Que personas con distintas capacidades puedan usar el producto", "Que tenga poca memoria", "Que sea gratis", "Que haya sido instalado"]
respuesta: "Que personas con distintas capacidades puedan usar el producto"

enunciado: "¿Qué verifica una prueba de accesibilidad?"

explicacion: |
  Se verifica, por ejemplo, el uso con lectores de pantalla y teclado.
```

