# Oficios — diagnostico confeccion por casos (cuestionario, 21 preguntas VBLang)

> Tema: `oficios/modista-corte-y-confeccion/diagnostico-confeccion-por-casos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["tension", "costura", "maquina"]

variables:
  sintoma: uno_de(["se rompe", "queda suelta"])

respuesta: falso
tipo: vf

enunciado: "Si una costura se abre inmediatamente después del primer lavado, es casi seguro que la tensión del hilo de la aguja estaba demasiado fuerte."

explicacion: |
  Falso. Si la tensión es demasiado fuerte, el hilo se rompe. Si la costura se abre o queda suelta, la tensión es demasiado floja (baja) o el puntaje es insuficiente para la elasticidad/encogimiento de la tela.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["agujas", "tela", "daño"]

variables:
  grosor_aguja: random(9, 14)
  grosor_tela: random(15, 20)

respuesta: falso
tipo: vf

enunciado: "Si se usa una aguja de grosor {grosor_aguja} para coser una tela de grosor {grosor_tela} (muy fina), se reduce el riesgo de que el hilo se corte por los agujeros."

explicacion: |
  Falso. Usar una aguja gruesa en una tela fina crea agujeros grandes que facilitan que el hilo se corte o se deslice, debilitando la costura. Se debe usar una aguja más fina (número menor) para telas finas.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["tela", "sintetica", "algodon"]

variables:
  tela: uno_de(["algodon", "poliester", "lana"])

respuesta: falso
tipo: vf

enunciado: "Una prenda confeccionada en {tela} tiene la misma probabilidad de encogerse significativamente tras el lavado que una de algodón puro."

explicacion: |
  Falso. Las telas sintéticas como el poliéster tienen una resistencia al encogimiento mucho mayor que el algodón. El algodón es la fibra natural que más requiere pre-lavado y consideración de encogimiento.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["patronaje", "holgura", "ajuste"]

variables:
  medida_base: random(80, 100)
  holgura_adicional: uno_de([2, 3, 4])

respuesta: "{medida_base + holgura_adicional}"
tipo: input

enunciado: "Para confeccionar una prenda que debe tener una holgura de {holgura_adicional} cm sobre la medida base de {medida_base} cm, ¿cuál será la medida final del patrón en la cintura?"

explicacion: |
  La medida del patrón se calcula sumando la medida corporal base más la holgura deseada para permitir movimiento y comodidad. En este caso, 80-100 cm + 2-4 cm.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["hilado", "trama", "matemática"]

variables:
  metros_tela: random(1.5, 3.0)
  porcentaje_extra: 10

respuesta: "{redondear(metros_tela * (1 + porcentaje_extra/100), 1)}"
tipo: input

enunciado: "Si necesitás {metros_tela} metros de tela, ¿cuántos metros de hilo de trama debes comprar considerando un {porcentaje_extra}% de holgura por desperdicio o tensión?"

explicacion: |
  Se calcula multiplicando la cantidad base por 1.10 (10% extra). Esto asegura que no falte hilo debido a la tensión natural del puntada o errores de corte.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["medidas", "conversión", "patronaje"]

variables:
  pulgada: random(1, 3)
  cm_por_pulgada: 2.54

respuesta: "{redondear(pulgada * cm_por_pulgada, 2)}"
tipo: input

enunciado: "Un patrón importado indica una holgura de {pulgada} pulgadas. ¿A cuántos centímetros equivale esto? (Usá 1 pulgada = 2.54 cm)"

explicacion: |
  La conversión se hace multiplicando las pulgadas por 2.54. Es fundamental para adaptar patrones internacionales a las medidas métricas utilizadas en Argentina.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["costura", "margen", "patronaje"]

variables:
  ancho_base: random(1, 2)
  doblez: 1

respuesta: "{ancho_base + doblez}"
tipo: input

enunciado: "Si el patrón indica un margen de costura de {ancho_base} cm, pero decidís doblar el borde para un acabado limpio, ¿cuánto ancho total de tela debes añadir al patrón?"

explicacion: |
  Se suma el margen de costura estándar más el ancho necesario para el doblez (generalmente 1 cm). Esto asegura que el acabado sea limpio y resistente.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "avanzado"
  tags: ["rendimiento", "cálculo", "economía"]

variables:
  metros_totales: random(3, 5)
  desperdicio: random(10, 20)

respuesta: "{redondear(metros_totales * (1 - desperdicio/100), 2)}"
tipo: input

enunciado: "Si comprás {metros_totales} metros de tela y se estima un {desperdicio}% de merma por corte y ensayos, ¿cuántos metros útiles quedarán?"

explicacion: |
  Se calcula restando el porcentaje de merma a la cantidad total. Es vital para el presupuesto del taller y la planificación de la producción.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["ergonomía", "holgura", "patronaje"]

variables:
  medida_busto: random(80, 90)
  holgura: 4

respuesta: "{medida_busto + holgura}"
tipo: input

enunciado: "Si la medida de busto es {medida_busto} cm y necesitás {holgura} cm de holgura para la movilidad, ¿cuál es la medida del patrón en esa línea?"

explicacion: |
  La medida del patrón es la suma de la medida corporal más la holgura necesaria para el movimiento y la comodidad del usuario.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["costura", "longitud", "cálculo"]

variables:
  largo_prenda: random(50, 100)
  margen: 1.5

respuesta: "{redondear(largo_prenda + margen, 1)}"
tipo: input

enunciado: "Si la prenda mide {largo_prenda} cm y añadís un margen de costura de {margen} cm en la parte inferior, ¿cuál es la longitud total del patrón?"

explicacion: |
  Se suma el margen de costura a la medida final deseada para asegurar que la prenda tenga la longitud correcta una vez cosida.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "avanzado"
  tags: ["encolado", "merma", "cálculo"]

variables:
  metros_iniciales: random(2, 4)
  porcentaje_encogido: 5

respuesta: "{redondear(metros_iniciales * (1 - porcentaje_encogido/100), 2)}"
tipo: input

enunciado: "Si encolás {metros_iniciales} metros de tela y esta se encoge un {porcentaje_encogido}%, ¿cuántos metros útiles te quedarán?"

explicacion: |
  Se calcula restando el porcentaje de encogimiento a la cantidad inicial. El encolado es un proceso técnico que puede alterar las dimensiones de la tela.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["dobladillo", "medida", "patronaje"]

variables:
  doblez_interior: 1
  doblez_exterior: 2

respuesta: "{doblez_interior + doblez_exterior}"
tipo: input

enunciado: "Para un dobladillo de {doblez_exterior} cm visible y un doblez interior de {doblez_interior} cm, ¿cuánto ancho total de margen debes añadir al patrón?"

explicacion: |
  El ancho total del margen de dobladillo es la suma del doblez visible y el doblez interior oculto. Esto asegura un acabado limpio y duradero.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["holgura", "cintura", "patronaje"]

variables:
  medida_cintura: random(60, 80)
  holgura: 2

respuesta: "{medida_cintura + holgura}"
tipo: input

enunciado: "Si la medida de cintura es {medida_cintura} cm y necesitás {holgura} cm de holgura para el confort, ¿cuál es la medida del patrón en la cintura?"

explicacion: |
  La medida del patrón en la cintura es la suma de la medida corporal más la holgura necesaria para el movimiento y la comodidad.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "basico"
  tags: ["preparacion", "tela", "encogimiento"]

respuesta: verdadero

tipo: vf

enunciado: "En Argentina, es común trabajar con telas de algodón o mezclas sintéticas que pueden encogerse si no se pre-lavan correctamente, alterando las medidas finales. Por lo tanto, el pre-lavado es un paso opcional solo para telas muy caras."

explicacion: |
  Falso. El pre-lavado no es opcional si se busca un ajuste preciso. Las telas de algodón y mezclas sintéticas pueden encogerse durante el lavado, alterando las medidas finales de la prenda si no se ha realizado previamente.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "avanzado"
  tags: ["calculos", "encogimiento", "patronaje"]

variables:
  medida_original: random(40, 60)
  porcentaje_encogimiento: uno_de([5, 10, 15])
  holgura_necesaria: ceil(medida_original * porcentaje_encogimiento / 100)

respuesta: holgura_necesaria

tipo: input

enunciado: "Tenés una prenda de {medida_original} cm de largo en algodón que tiene un encogimiento del {porcentaje_encogimiento}%. Si no pre-lavaste la tela, ¿cuántos centímetros de holgura adicional debiste haber considerado en el patronaje para compensar el encogimiento? Redondeá al entero más cercano."

explicacion: |
  Para compensar el encogimiento, se debe añadir holgura al patronaje. Cálculo: {medida_original} * {porcentaje_encogimiento}% = {holgura_necesaria} cm. Esto asegura que la prenda mantenga su tamaño final tras el lavado.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["reparacion", "diagnostico", "eficacia"]

respuesta: falso

tipo: vf

enunciado: "Sin un diagnóstico preciso, cualquier intento de reparación de una prenda será permanente y la falla no volverá a aparecer."

explicacion: |
  Falso. Sin un diagnóstico preciso, cualquier intento de reparación será temporal y la falla volverá a aparecer, porque no se ha corregido la causa raíz (patronaje, tensión o tipo de tela).
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "avanzado"
  tags: ["algoritmo", "encogimiento", "patronaje"]

variables:
  largo_patron: random(80, 120)
  encogimiento: uno_de([3, 5, 7])
  largo_final: floor(largo_patron * (1 - encogimiento / 100))

respuesta: largo_final

tipo: input

enunciado: "Un patrón tiene un largo de {largo_patron} cm. La tela tiene un encogimiento del {encogimiento}%. ¿Cuál será el largo final aproximado de la prenda si no se ajusta el patronaje? Redondeá al entero más cercano."

explicacion: |
  Cálculo: {largo_patron} * (1 - {encogimiento}/100) = {largo_final} cm. El encogimiento reduce las dimensiones finales de la prenda.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["hilo", "poliester", "algodon", "compatibilidad"]

respuesta: verdadero

tipo: vf

enunciado: "Usar hilo de poliéster con una tensión incorrecta en una tela de algodón que se encoge puede causar que la costura del costado se abra al lavarse."

explicacion: |
  Verdadero. La combinación de hilo poco elástico (poliéster) con tela que se encoge (algodón) y tensión incorrecta es una causa común de costuras abiertas.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["filosofia", "diagnostico", "resolucion"]

respuesta: falso

tipo: vf

enunciado: "El diagnóstico por casos nos lleva a ver la costura como un acto mecánico, en lugar de una resolución de problemas."

explicacion: |
  Falso. Entender el diagnóstico es fundamental para dejar de ver la costura como un acto mecánico y empezar a verla como una resolución de problemas.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "avanzado"
  tags: ["tension", "simulacion", "equilibrio"]

variables:
  tension_aguja: random(3, 7)
  tension_canilla: random(2, 6)
  diferencia: abs(tension_aguja - tension_canilla)

respuesta: diferencia

tipo: input

enunciado: "Si la tensión de la aguja es {tension_aguja} y la de la canilla es {tension_canilla}, ¿cuál es la diferencia absoluta entre ambas tensiones? Un valor alto indica desequilibrio."

explicacion: |
  La diferencia absoluta es {diferencia}. Un desequilibrio grande en las tensiones puede causar roturas de hilo o costuras sueltas.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_diagnostico_confeccion_por_casos"
  nivel: "intermedio"
  tags: ["diagnostico", "prenda_terminada", "analisis"]

respuesta: verdadero

tipo: vf

enunciado: "El diagnóstico por casos consiste en analizar la prenda terminada para identificar la raíz del problema."

explicacion: |
  Verdadero. El diagnóstico se realiza sobre la prenda terminada para entender por qué falló el ajuste o la costura, identificando errores en etapas anteriores.
```
