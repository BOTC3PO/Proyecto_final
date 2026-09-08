# Biología — Sistemas del cuerpo humano (cuestionario, 22 preguntas VBLang)

> Tema: `BK`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Niveles de organización biológica

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organizacion", "biologia_celular"]

respuesta: verdadero
tipo: vf

enunciado: "El orden de los niveles de organización biológica, desde lo más pequeño a lo más grande, es: célula, tejido, órgano, sistema y organismo."

explicacion: |
  Correcto. La jerarquía biológica comienza con la unidad básica de la vida (célula) y se va complejizando mediante la agrupación de sus componentes.
```

### 2 — Definición de tejido

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["tejido", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tejido se define como un grupo de células similares que trabajan juntas para cumplir una misma función."

explicacion: |
  Exacto. La especialización de las células permite que se agrupen en tejidos con funciones específicas (epitelial, muscular, nervioso, conectivo).
```

### 3 — Naturaleza de los órganos

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organo", "celula"]

respuesta: falso
tipo: vf

enunciado: "Un órgano es una estructura biológica compuesta por una sola célula altamente especializada."

explicacion: |
  Falso. Un órgano es una estructura compleja formada por la integración de diversos tejidos que colaboran para una función determinada.
```

### 4 — Composición del corazón

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["corazon", "tejidos"]

respuesta: verdadero
tipo: vf

enunciado: "El corazón es un órgano que combina tejidos muscular, nervioso y conectivo para cumplir su función de bombeo."

explicacion: |
  Verdadero. Para funcionar, el corazón requiere tejido muscular (miocardio), tejido nervioso (para la conducción eléctrica) y tejido conectivo (válvulas y estructura).
```

### 5 — Identificación de nivel biológico

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["organizacion", "definiciones"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["tejido", "grupo de celulas similares con la misma funcion"], ["organo", "combinacion de distintos tejidos con un proposito"], ["sistema", "conjunto de organos que colaboran en una funcion general"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["grupo de celulas similares con la misma funcion", "combinacion de distintos tejidos con un proposito", "conjunto de organos que colaboran en una funcion general"]

enunciado: "Identifica la definición correcta para el nivel de organización: {datos[idx][0]}"

explicacion: |
  La respuesta correcta corresponde a la definición del nivel seleccionado en este intento.
```

### 6 — Función del sistema sorteado

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "fisiologia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  escenario: [["digestivo", "descomponer alimento y absorber nutrientes"], ["respiratorio", "intercambio de gases oxigeno y dioxido de carbono"], ["circulatorio", "transportar sangre, nutrientes y gases"], ["nervioso", "recibir y procesar informacion, controlar el cuerpo"]]

opciones_explicitas: ["descomponer alimento y absorber nutrientes", "intercambio de gases oxigeno y dioxido de carbono", "transportar sangre, nutrientes y gases", "recibir y procesar informacion, controlar el cuerpo"]

respuesta: escenario[idx][1]
tipo: mc

enunciado: "La función principal del sistema {escenario[idx][0]} es: ___"

explicacion: |
  El sistema seleccionado es el {escenario[idx][0]}, cuya función es {escenario[idx][1]}.
```

### 7 — El sistema respiratorio

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio se encarga del intercambio de gases entre el cuerpo y el aire."

explicacion: |
  Verdadero. El sistema respiratorio permite la entrada de oxígeno y la eliminación de dióxido de carbono.
```

### 8 — El sistema circulatorio

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["circulatorio", "sangre"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema circulatorio transporta sangre por todo el cuerpo."

explicacion: |
  Verdadero. A través de la sangre, el sistema circulatorio distribuye nutrientes y oxígeno a todas las células.
```

### 9 — El sistema digestivo y la información

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["digestivo", "nervioso"]

respuesta: falso
tipo: vf

enunciado: "El sistema digestivo se encarga de procesar información nerviosa."

explicacion: |
  Falso. El procesamiento de la información nerviosa es función del sistema nervioso; el digestivo se encarga de la nutrición.
```

### 10 — Órgano clave del sistema

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "anatomia"]

variables:
  escenario: [["oseo", "huesos"], ["muscular", "musculos"], ["excretor", "riñones"], ["endocrino", "tiroides o pancreas"]]
  idx: uno_de([0, 1, 2, 3])
  sistema_actual: escenario[idx][0]
  organo_correcto: escenario[idx][1]

tipo: mc
opciones_explicitas: ["huesos", "musculos", "riñones", "tiroides o pancreas"]

enunciado: "El sistema {sistema_actual} tiene como órgano clave a los ___."

respuesta: organo_correcto
```

### 11 — Función del sistema óseo

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_oseo", "funciones"]

tipo: vf

enunciado: "El sistema óseo cumple la función de sostén y protección."

respuesta: verdadero
```

### 12 — Función del sistema muscular

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_muscular", "movimiento"]

tipo: vf

enunciado: "El sistema muscular es responsable del movimiento del cuerpo."

respuesta: verdadero
```

### 13 — Función del sistema excretor

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_excretor", "riñones"]

tipo: vf

enunciado: "El sistema excretor filtra y elimina desechos, teniendo a los riñones como órgano clave."

respuesta: verdadero
```

### 14 — Integración sistémica

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["integracion", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún sistema del cuerpo humano trabaja de forma completamente aislada; todos funcionan de manera coordinada."

explicacion: |
  El cuerpo humano es un sistema complejo donde la interacción entre órganos y sistemas es fundamental para mantener la homeostasis.
```

### 15 — Contracción muscular

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["musculo", "nervioso", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un músculo realice un movimiento, es necesaria la señal eléctrica proveniente del sistema nervioso y el suministro de oxígeno transportado por el sistema circulatorio."

explicacion: |
  El sistema nervioso envía el impulso para la contracción, mientras que el sistema circulatorio provee el oxígeno necesario para el metabolismo celular muscular.
```

### 16 — Especialización vs independencia

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["especializacion", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La especialización de cada sistema (digestivo, excretor, nervioso, etc.) significa que sus funciones son completamente independientes entre sí."

explicacion: |
  Aunque cada sistema tiene funciones especializadas, todos están integrados. La especialización permite la eficiencia, pero la interdependencia es necesaria para la vida.
```

### 17 — Intercambio gaseoso y transporte

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio es el encargado de capturar el oxígeno del medio externo, el cual es posteriormente transportado por la sangre a través del sistema circulatorio."

explicacion: |
  Existe una dependencia directa: el sistema respiratorio realiza el intercambio gaseoso en los alvéolos y el sistema circulatorio actúa como el vehículo de distribución.
```

### 18 — Concepto de homeostasis

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis es el equilibrio interno del cuerpo (temperatura, pH, azúcar en sangre), aunque el ambiente externo cambie."

explicacion: |
  La homeostasis es el proceso mediante el cual los organismos mantienen un ambiente interno estable a pesar de las variaciones en el entorno.
```

### 19 — Integración de sistemas para la homeostasis

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los sistemas del cuerpo, en conjunto, trabajan para mantener la homeostasis."

explicacion: |
  La homeostasis no depende de un solo órgano, sino de la interacción coordinada de múltiples sistemas (nervioso, endocrino, excretor, etc.).
```

### 20 — Sistema inmunitario

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_inmunitario", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario se encarga de la defensa del organismo contra patógenos."

explicacion: |
  El sistema inmunitario identifica y destruye agentes extraños como bacterias, virus y parásitos para proteger al cuerpo.
```

### 21 — Sistema reproductor

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_reproductor", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema reproductor tiene como función principal la producción de descendencia para asegurar la supervivencia de la especie."

explicacion: |
  A diferencia de otros sistemas que mantienen la vida del individuo, el sistema reproductor permite la continuidad de la vida a nivel poblacional.
```

### 22 — Definición de equilibrio

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "completar"]

respuesta: "homeostasis"
tipo: completar
respuestas_validas:
  - "homeostasis"

enunciado: "El equilibrio interno del cuerpo que se mantiene aunque el ambiente externo cambie se llama ___."

explicacion: |
  El término correcto es homeostasis, que proviene del griego 'homoios' (similar) y 'stasis' (estabilidad).
```
