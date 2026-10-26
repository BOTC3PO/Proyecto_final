# Oficios — Cocina/Gastronomía — HACCP básico (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Escrito por Claude; no obligatorio para el logro del oficio (ver `../../dependencias.md`).

---

### 1 — Siglas

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["haccp"]

tipo: completar
enunciado: "HACCP significa Análisis de Peligros y Puntos Críticos de ___."
respuestas_validas:
  - "Control"

explicacion: |
  Es un sistema preventivo.
```

### 2 — Enfoque

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["haccp"]

enunciado: "¿Cuál es el enfoque de HACCP?"
tipo: mc
opciones_explicitas:
  - "Prevenir identificando peligros en cada etapa"
  - "Revisar el plato terminado y descartarlo si sale mal"
  - "Cambiar la receta cada mes"
respuesta: "Prevenir identificando peligros en cada etapa"

explicacion: |
  Es preventivo y no solo correctivo.
```

### 3 — BPM

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["haccp", "bpm"]

respuesta: falso
tipo: vf

enunciado: "El HACCP reemplaza a las Buenas Prácticas de Manufactura."

explicacion: |
  Las BPM son la base de higiene sobre la que se apoya el HACCP.
```

### 4 — Biológico

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["peligros"]

enunciado: "¿Cuál de estos es un peligro biológico?"
tipo: mc
opciones_explicitas:
  - "Bacterias"
  - "Un trozo de vidrio"
  - "Un resto de detergente"
respuesta: "Bacterias"

explicacion: |
  Los microorganismos causan la mayor parte de los problemas.
```

### 5 — Químico

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["peligros"]

enunciado: "¿Cuál de estos es un peligro químico?"
tipo: mc
opciones_explicitas:
  - "Un resto de desengrasante mal enjuagado"
  - "Un pelo"
  - "Una bacteria"
respuesta: "Un resto de desengrasante mal enjuagado"

explicacion: |
  También lo son los alérgenos no declarados.
```

### 6 — Físico

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["peligros"]

enunciado: "¿Cuál de estos es un peligro físico?"
tipo: mc
opciones_explicitas:
  - "Un trozo de plástico en la comida"
  - "La salmonela"
  - "El gluten"
respuesta: "Un trozo de plástico en la comida"

explicacion: |
  Son cuerpos extraños.
```

### 7 — Alérgenos

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["peligros"]

respuesta: verdadero
tipo: vf

enunciado: "Un alérgeno no declarado se considera un peligro químico dentro del análisis."

explicacion: |
  Se controla con puntos de control y registros.
```

### 8 — Punto crítico

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "¿Qué es un punto crítico de control?"
tipo: mc
opciones_explicitas:
  - "Una etapa donde un control es esencial porque no hay otra oportunidad de eliminar el peligro"
  - "La etapa más larga de la receta"
  - "El momento del emplatado siempre"
respuesta: "Una etapa donde un control es esencial porque no hay otra oportunidad de eliminar el peligro"

explicacion: |
  Ejemplo clásico: la cocción.
```

### 9 — Límite crítico

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "¿Qué es un límite crítico?"
tipo: mc
opciones_explicitas:
  - "Una medida concreta que separa lo aceptable de lo inaceptable"
  - "El máximo de comensales por mesa"
  - "El precio de venta del plato"
respuesta: "Una medida concreta que separa lo aceptable de lo inaceptable"

explicacion: |
  Por ejemplo, una temperatura mínima en el centro.
```

### 10 — Acción correctiva

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "Si en la cocción de pollo el centro no llega a la temperatura fijada, ¿qué corresponde?"
tipo: mc
opciones_explicitas:
  - "Seguir cocinando y volver a medir"
  - "Servirlo igual"
  - "Descartar el termómetro"
respuesta: "Seguir cocinando y volver a medir"

explicacion: |
  Es la acción correctiva definida de antemano.
```

### 11 — Temperatura aves

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

tipo: completar
enunciado: "En el ejemplo, el límite crítico de cocción del pollo en el centro es ___ °C."
respuestas_validas:
  - "74"

explicacion: |
  Se mide con termómetro en la pieza más gruesa.
```

### 12 — Dónde medir

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "¿Dónde se mide la temperatura de cocción de una pieza?"
tipo: mc
opciones_explicitas:
  - "En la parte más gruesa, en el centro"
  - "En la superficie"
  - "En la fuente de servir"
respuesta: "En la parte más gruesa, en el centro"

explicacion: |
  Es el lugar que tarda más en calentarse.
```

### 13 — Mantener caliente

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "¿Por encima de qué temperatura se mantiene caliente un plato ya cocido?"
tipo: mc
opciones_explicitas:
  - "60 °C"
  - "30 °C"
  - "45 °C"
respuesta: "60 °C"

explicacion: |
  Por debajo entra en la zona de peligro.
```

### 14 — Registros

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["registros"]

respuesta: verdadero
tipo: vf

enunciado: "Un control que no se registra no se puede demostrar."

explicacion: |
  Los registros son la prueba del sistema.
```

### 15 — Planillas

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["registros"]

enunciado: "¿Cuál de estas es una planilla habitual en una cocina?"
tipo: mc
opciones_explicitas:
  - "Temperatura de heladeras y freezers"
  - "Lista de reproducción"
  - "Plan de vacaciones"
respuesta: "Temperatura de heladeras y freezers"

explicacion: |
  Se completa una o dos veces por día.
```

### 16 — Simples

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["registros"]

respuesta: verdadero
tipo: vf

enunciado: "Los registros deben ser simples y completarse en el momento."

explicacion: |
  Los formularios complicados no se usan.
```

### 17 — Calibrar

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "avanzado"
  tags: ["verificacion"]

enunciado: "¿Cómo se puede comprobar un termómetro de cocina?"
tipo: mc
opciones_explicitas:
  - "Debe marcar cerca de 0 °C en agua con hielo"
  - "Debe marcar 100 °C en el aire"
  - "No se puede comprobar"
respuesta: "Debe marcar cerca de 0 °C en agua con hielo"

explicacion: |
  Es una verificación sencilla.
```

### 18 — Cuándo actualizar

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "avanzado"
  tags: ["verificacion"]

enunciado: "¿Cuándo se actualiza el análisis HACCP?"
tipo: mc
opciones_explicitas:
  - "Cuando cambia la carta, un proveedor o un equipo"
  - "Solo cuando se inaugura el local"
  - "Nunca"
respuesta: "Cuando cambia la carta, un proveedor o un equipo"

explicacion: |
  Los peligros cambian con el proceso.
```

### 19 — Para la inspección

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "avanzado"
  tags: ["haccp"]

respuesta: falso
tipo: vf

enunciado: "El HACCP funciona mejor cuando es un papel para mostrar a la inspección que cuando el equipo lo usa."

explicacion: |
  Funciona cuando el equipo lo entiende y lo usa.
```

### 20 — Recepción

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "basico"
  tags: ["recepcion"]

enunciado: "En la recepción de mercadería refrigerada, ¿qué se controla?"
tipo: mc
opciones_explicitas:
  - "La temperatura y el estado del producto"
  - "Solo el precio"
  - "El color de la caja"
respuesta: "La temperatura y el estado del producto"

explicacion: |
  Es la primera etapa de control.
```

### 21 — Enfriado

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "intermedio"
  tags: ["pcc"]

enunciado: "Si un plato cocido se enfría para guardarlo, ¿qué control corresponde?"
tipo: mc
opciones_explicitas:
  - "Que se enfríe rápido"
  - "Que se enfríe lo más lento posible"
  - "Que no se lo enfríe nunca"
respuesta: "Que se enfríe rápido"

explicacion: |
  Reduce el tiempo en la zona de peligro.
```

### 22 — Programas de base

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "avanzado"
  tags: ["haccp"]

enunciado: "¿Cuál de estos es un programa de base que sostiene el HACCP?"
tipo: mc
opciones_explicitas:
  - "La capacitación del personal"
  - "El diseño de la carta"
  - "El color del uniforme"
respuesta: "La capacitación del personal"

explicacion: |
  También la limpieza y el mantenimiento de equipos.
```

### 23 — Normativa

```
metadata:
  materia: "oficios"
  tema: "cocina_haccp_basico"
  nivel: "avanzado"
  tags: ["normativa"]

enunciado: "¿Cómo se conoce la exigencia concreta de HACCP en un establecimiento argentino?"
tipo: mc
opciones_explicitas:
  - "Consultando a la autoridad sanitaria de la jurisdicción"
  - "No existe ninguna exigencia"
  - "Es igual en todo el mundo"
respuesta: "Consultando a la autoridad sanitaria de la jurisdicción"

explicacion: |
  Depende del tipo de establecimiento y de la jurisdicción.
```
