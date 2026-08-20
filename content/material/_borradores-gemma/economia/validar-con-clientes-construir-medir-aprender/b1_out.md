### 1 — El ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "Construir-Medir-Aprender"
tipo: completar
respuestas_validas: ["Construir-Medir-Aprender", "construir-medir-aprender"]

enunciado: "El ciclo fundamental de la metodología Lean Startup para validar hipótesis de negocio se denomina ciclo ___."

explicacion: |
  El ciclo Construir-Medir-Aprender es la base de la metodología Lean Startup. El objetivo es minimizar el tiempo total de este ciclo para aprender lo más rápido posible sobre lo que los clientes realmente quieren.
```

### 2 — El objetivo del MVP
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["mvp", "validacion"]

variables:
  opcion_correcta: uno_de(["probar_hipotesis", "maximizar_ganancias", "perfeccionar_producto"])

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["probar_hipotesis", "maximizar_ganancias", "perfeccionar_producto"]

enunciado: "El propósito principal de un Producto Mínimo Viable (MVP) es ___."

explicacion: |
  Un MVP no es un producto incompleto, sino una versión con las características mínimas necesarias para recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo posible.
```

### 3 — El concepto de Pivotar
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["pivotar", "estrategia"]

respuesta: falso
tipo: vf

enunciado: "¿Pivotar consiste en mantener la estrategia actual de la empresa a pesar de que los datos del ciclo de aprendizaje indiquen que la hipótesis fundamental es incorrecta?"

explicacion: |
  Falso. Pivotar es un cambio estratégico en la dirección del producto, del modelo de negocio o del segmento de clientes, basado en lo aprendido durante la fase de medición.

```

### 4 — Secuencia del ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

explicacion: |
  Primero se construye un experimento (MVP), luego se mide cómo reaccionan los clientes y finalmente se aprende de esos datos para decidir si se continúa o se pivota.
```

### 5 — El aprendizaje validado
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["aprendizaje_validado", "metrica"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario_res
tipo: mc
opciones_explicitas: ["aprendizaje_validado", "métricas de vanidad", "intuición pura"]

variables_extra:
  escenario_res: uno_de(["aprendizaje_validado", "métricas de vanidad"])

enunciado: "Si una startup se enfoca en datos que solo muestran crecimiento superficial (como número de likes) pero no prueban si el modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que pueden hacerte sentir bien pero no ayudan a tomar decisiones sobre la viabilidad del negocio. El objetivo es obtener aprendizaje validado.
```