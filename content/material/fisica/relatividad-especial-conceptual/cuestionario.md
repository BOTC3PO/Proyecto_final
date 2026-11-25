# Fisica — Relatividad especial conceptual (cuestionario, 31 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Inercia

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["principios", "inercia"]

respuesta: "mismo"
tipo: "mc"
opciones_explicitas: ["mismo", "diferente", "mayor", "menor"]

enunciado: "Según el primer postulado de la relatividad especial, las leyes de la física son las ___ en todos los marcos de referencia inerciales."

explicacion: |
  El primer postulado establece que las leyes de la física son invariantes en todos los sistemas de referencia inerciales.
```

### 2 — Velocidad de la luz

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["c", "postulados"]

respuesta: "c"
tipo: "completar"
respuestas_validas:
  - "c"
  - "c"
  - "velocidad_de_la_luz"

enunciado: "La velocidad de la luz en el vacío, representada por la constante ___ , es la misma para todos los observadores, independientemente de su movimiento."

explicacion: |
  La constancia de la velocidad de la luz es el segundo postulado de Einstein.
```

### 3 — Masa y Energía

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["e_mc2", "equivalencia"]

tipo: vf
respuesta: verdadero

enunciado: "La ecuación $E=mc^2$ implica que la masa puede ser convertida en energía y viceversa."

explicacion: |
  La equivalencia masa-energía es uno de los pilares de la relatividad especial.
```

### 4 — Concepto de Tiempo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["tiempo", "relatividad"]

respuesta: "relativo"
tipo: "mc"
opciones_explicitas: ["absoluto", "relativo", "constante", "infinito"]

enunciado: "En la relatividad especial, el tiempo no es un parámetro universal, sino que es ___ al observador."

explicacion: |
  El tiempo depende del marco de referencia del observador (dilatación del tiempo).
```

### 5 — Masa en reposo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["masa_reposo"]

respuesta: "m_0"
tipo: "completar"
respuestas_validas:
  - "m_0"
  - "m_reposo"
  - "m_0"

enunciado: "La masa de un objeto cuando no tiene velocidad se denomina masa ___."

explicacion: |
  La masa en reposo es una propiedad intrínseca de la partícula.
```

### 6 — Simultaneidad Relativa

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["simultaneidad", "observadores"]

respuesta: "no_es_absoluta"
tipo: "mc"
opciones_explicitas: ["es_absoluta", "no_es_absoluta", "es_dependiente_de_la_gravedad", "es_constante"]

enunciado: "Dos eventos que son simultáneos para un observador en reposo, ___ para un observador que se mueve a velocidad constante respecto al primero."

explicacion: |
  La simultaneidad es relativa al marco de referencia; lo que es simultáneo para uno, no lo es para otro en movimiento.
```

### 7 — Dilatación del tiempo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["dilatacion_tiempo"]

respuesta: "menor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Para un observador externo, el tiempo transcurrido en un reloj que se mueve a alta velocidad parece pasar de forma ___ que un reloj en reposo."

explicacion: |
  La dilatación del tiempo hace que el tiempo de un reloj en movimiento parezca transcurrir más lento para el observador externo.
```

### 8 — Contracción de la longitud

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["contraccion_longitud"]

respuesta: "paralelo_al_movimiento"
tipo: "completar"
respuestas_validas:
  - "paralelo_al_movimiento"
  - "perpendicular_al_movimiento"

enunciado: "La contracción de la longitud ocurre únicamente en la dirección ___ del movimiento."

explicacion: |
  La contracción de Lorentz solo afecta a las dimensiones paralelas a la velocidad.
```

### 9 — Relación Energía-Masa

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["energia_cinetica"]

respuesta: "infinito"
tipo: "mc"
opciones_explicitas: ["finito", "cero", "infinito", "negativo"]

enunciado: "A medida que la velocidad de un objeto con masa se acerca a la velocidad de la luz, la energía necesaria para acelerarlo tiende a ___."

explicacion: |
  Debido a la relatividad, la energía requerida para alcanzar la velocidad de la luz es infinita para una partícula con masa.
```

### 10 — El factor Lorentz

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["gamma"]

respuesta: verdadero
tipo: vf

enunciado: "El factor de Lorentz (gamma) siempre es mayor o igual a 1 para cualquier velocidad v < c."

explicacion: |
  Dado que gamma = 1 / sqrt(1 - v^2/c^2), si v < c, el denominador es menor que 1, por lo que gamma >= 1.
```

### 11 — Comparación de marcos

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: "mismo"
tipo: "mc"
opciones_explicitas: ["mismo", "diferente", "inverso", "variable"]

enunciado: "Si dos observadores se mueven a velocidades constantes y relativas entre sí, ambos marcos de referencia son considerados ___."

explicacion: |
  Ambos son marcos inerciales y las leyes de la física se aplican igual en ambos.
```

### 12 — Escenario de la luz

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["experimento_luz"]

respuesta: "c"
tipo: "mc"
opciones_explicitas: ["c", "c+v", "c-v", "v"]

enunciado: "Si una nave viaja a velocidad $v$ y dispara un rayo de luz hacia adelante, un observador en la nave medirá la velocidad del rayo como ___."

explicacion: |
  La velocidad de la luz es constante para todos los observadores, sin importar el movimiento de la fuente.
```

### 13 — Error común: Masa relativista

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["masa_relativista"]

tipo: vf
respuesta: verdadero

enunciado: "En la física moderna, se prefiere hablar de 'masa inercial' constante en lugar de una 'masa que aumenta con la velocidad'."

explicacion: |
  El concepto de 'masa relativista' es una interpretación antigua; la física actual usa masa en reposo constante y energía variable.
```

### 14 — Orden de efectos

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["secuencia"]

tipo: ordenar
opciones_explicitas: ["observar_movimiento", "medir_longitud_contraccion", "medir_tiempo_dilatado"]
respuesta_orden: ["observar_movimiento", "medir_longitud_contraccion", "medir_tiempo_dilatado"]

enunciado: "Ordena los pasos para un observador que analiza una nave espacial que pasa a gran velocidad:"

explicacion: |
  Primero se establece el marco, luego se miden las dimensiones espaciales y finalmente los intervalos temporales.
```

### 15 — Energía de reposo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["energia_reposo"]

respuesta: "m_0 * c^2"
tipo: "completar"
respuestas_validas:
  - "m_0 * c^2"
  - "m_0*c^2"
  - "m_0 * c^2"

enunciado: "La energía de un objeto en reposo se calcula como la masa en reposo multiplicado por ___."

explicacion: |
  La energía de reposo es el producto de la masa en reposo por el cuadrado de la velocidad de la luz.
```

### 16 — Escenario: Gemelos

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["paradoja_gemelos"]

respuesta: "viajero"
tipo: "mc"
opciones_explicitas: ["viajero", "en_la_tierra", "ambos", "ninguno"]

enunciado: "En la paradoja de los gemelos, el gemelo que experimenta la aceleración (el que realiza el viaje espacial) es el ___."

explicacion: |
  El gemelo que viaja y acelera es quien experimenta la dilatación del tiempo de forma asimétrica.
```

### 17 — Relación Energía-Velocidad

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["energia"]

respuesta: "aumenta"
tipo: "completar"
respuestas_validas:
  - "aumenta"
  - "aumenta_con_la_velocidad"

enunciado: "A medida que la velocidad de una partícula aumenta, su energía total ___."

explicacion: |
  La energía total aumenta con la velocidad, tendiendo a infinito cuando $v \to c$.
```

### 18 — Comparación: Luz vs Partícula

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["fotón"]

respuesta: "no_tiene_masa_en_reposo"
tipo: "mc"
opciones_explicitas: ["no_tiene_masa_en_reposo", "tiene_masa_infinita", "tiene_masa_cero", "su_masa_es_c"]

enunciado: "Un fotón (partícula de luz) se caracteriza porque ___."

explicacion: |
  Los fotones no tienen masa en reposo, por lo que siempre viajan a la velocidad $c$.
```

### 19 — Efecto en la longitud

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["longitud"]

tipo: vf
respuesta: verdadero

enunciado: "Un objeto que se mueve a una velocidad cercana a la luz parecerá más corto para un observador estacionario."

explicacion: |
  Este es el efecto de la contracción de Lorentz.
```

### 20 — Escenario: Energía Cinética

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["energia_cinetica_relativista"]

respuesta: "diferente"
tipo: "mc"
opciones_explicitas: ["diferente", "igual", "menor", "nula"]

enunciado: "A velocidades cercanas a la luz, la energía cinética calculada por la física clásica es ___ a la de la física relativista."

explicacion: |
  La física clásica falla a velocidades relativistas, subestimando la energía necesaria.
```

### 21 — Aplicación: Partículas

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["particulas_subatomicas"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "En los aceleradores de partículas, los protones adquieren una energía ___ a la que tendrían en física clásica a la misma velocidad."

explicacion: |
  La energía relativista es mayor que la clásica debido al factor $\gamma$.
```

### 22 — Concepto: Espacio-Tiempo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["espacio_tiempo"]

respuesta: "un_solo_tejido"
tipo: "completar"
respuestas_validas:
  - "un_solo_tejido"
  - "un_solo_continuo"

enunciado: "La relatividad especial sugiere que el espacio y el tiempo no son entidades separadas, sino que forman ___."

explicacion: |
  El concepto de espacio-tiempo une las tres dimensiones espaciales y la dimensión temporal.
```

### 23 — Escenario: Relojes en órbita

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["satelites"]

respuesta: "atrasan"
tipo: "mc"
opciones_explicitas: ["atrasan", "adelantan", "se_detienen", "no_cambian"]

enunciado: "Si un satélite se mueve a gran velocidad respecto a la Tierra, sus relojes ___ respecto a los de la Tierra (debido solo a la dilatación del tiempo por velocidad)."

explicacion: |
  La dilatación del tiempo hace que el reloj en movimiento marque menos tiempo transcurrido.
```

### 24 — Error común: Simultaneidad

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["simultaneidad"]

respuesta: falso
tipo: vf

enunciado: "Si dos eventos son simultáneos en un marco inercial, serán simultáneos para todos los demás marcos inerciales."

explicacion: |
  La simultaneidad es relativa al movimiento del observador.
```

### 25 — Resumen: E=mc2

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["energia"]

respuesta: "c^2"
tipo: "completar"
respuestas_validas:
  - "c^2"
  - "c^2"
  - "c^2"

enunciado: "En la famosa ecuación de Einstein, la energía es igual a la masa por la velocidad de la luz al ___."

explicacion: |
  La relación es proporcional al cuadrado de la velocidad de la luz.
```

### 26 — Factor de dilatación del tiempo

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["calculo", "gamma"]

variables:
  b: uno_de([0.6, 0.8, 0.866, 0.96, 0.99])

respuesta: 1 / sqrt(1 - b ^ 2)
tipo: input
unidad: ""
tolerancia: 2%

enunciado: "Una nave viaja a {b} veces la velocidad de la luz. ¿Cuánto vale el factor γ = 1 / √(1 − (v/c)²)? (podés redondear a dos decimales)"

pasos:
  - "(v/c)² = {b}² = {b ^ 2 | 4}"
  - "1 − {b ^ 2 | 4} = {1 - b ^ 2 | 4}; su raíz es {sqrt(1 - b ^ 2) | 4}"
  - "γ = 1 / {sqrt(1 - b ^ 2) | 4} ≈ {1 / sqrt(1 - b ^ 2) | 2}"

explicacion: |
  γ dice cuántas veces más lento corre el reloj de la nave visto desde la Tierra.
```

### 27 — Tiempo en la Tierra

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["calculo", "dilatacion_del_tiempo"]

variables:
  b: uno_de([0.6, 0.8])
  g: 1 / sqrt(1 - b ^ 2)
  t: random(1, 12)

respuesta: t * g
tipo: input
unidad: "años"
tolerancia: 2%

enunciado: "Una astronauta viaja a {b} veces la velocidad de la luz (γ ≈ {g | 2}). Para ella pasan {t} años. ¿Cuántos años pasan en la Tierra? (podés redondear a un decimal)"

pasos:
  - "t Tierra = γ · t nave"
  - "t Tierra = {g | 4} × {t} ≈ {t * g | 1} años"

explicacion: |
  Es la paradoja de los gemelos: al volver, quien viajó es más joven que su hermano.
```

### 28 — Tiempo en la nave

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["calculo", "dilatacion_del_tiempo"]

variables:
  g: uno_de([1.25, 2, 2.5, 5])
  t: uno_de([10, 20, 40])

respuesta: t / g
tipo: input
unidad: "años"
tolerancia: 1%

enunciado: "Mientras en la Tierra pasan {t} años, una nave viaja tan rápido que su factor γ es {g}. ¿Cuántos años pasan para la tripulación?"

pasos:
  - "t nave = t Tierra / γ"
  - "t nave = {t} / {g} = {t / g} años"

explicacion: |
  Para quien viaja rápido el tiempo transcurre más despacio que para quien se queda.
```

### 29 — Velocidad de la luz para todos

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["postulado", "calculo"]

variables:
  v: uno_de([1000, 50000, 100000, 200000])

respuesta: 300000
tipo: input
unidad: "km/s"
tolerancia_abs: 0

enunciado: "Una nave que viaja a {v} km/s enciende sus luces delanteras. ¿A qué velocidad, en km/s, mide esa luz alguien que está quieto en la Tierra? (c = 300 000 km/s)"

pasos:
  - "Segundo postulado: la luz va a c para cualquier observador, sin importar cómo se mueva la fuente."
  - "No se suman las velocidades: sigue siendo 300 000 km/s."

explicacion: |
  Con objetos comunes las velocidades se suman, pero con la luz no: ese es el punto de partida de la relatividad.
```

### 30 — Los satélites del GPS

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  dias: random(1, 30)

respuesta: dias * 38
tipo: input
unidad: "µs"
tolerancia_abs: 0

enunciado: "Los relojes de los satélites del GPS, por efectos de la relatividad, se adelantan unos 38 microsegundos (µs) por día respecto de los de la Tierra. Si no se corrigieran, ¿cuántos microsegundos se habrían adelantado en {dias} días?"

pasos:
  - "Adelanto = 38 µs por día × {dias} días = {dias * 38} µs"

explicacion: |
  Parece nada, pero cada microsegundo de error son unos 300 m en la posición: sin corregir la relatividad, el GPS se equivocaría en kilómetros por día.
```

### 31 — ¿Se nota en la vida diaria?

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["conceptual", "verdadero_falso"]

variables:
  b: uno_de([0.0000003, 0.9])

respuesta: (1 / sqrt(1 - b ^ 2)) > 1.01
tipo: vf

enunciado: "Algo se mueve a {b} veces la velocidad de la luz. ¿El tiempo para ese objeto se estira más de un 1 % (γ mayor que 1,01)?"

pasos:
  - "γ = 1 / √(1 − {b}²) ≈ {1 / sqrt(1 - b ^ 2) | 4}"

explicacion: |
  Solo cerca de la velocidad de la luz el efecto es grande; un avión (0,0000008 de c) ni se entera.
```
