### 1 — El origen del intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["intercambio", "excedente", "neolítico"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente", "excedente_productivo"]

enunciado: "Cuando una sociedad logra producir más de lo que necesita para su subsistencia inmediata, se genera un ___ que permite el inicio del intercambio."

explicacion: |
  El excedente es la base del comercio: al sobrar productos, las comunidades pueden intercambiar lo que les sobra por lo que les falta.
```

### 2 — Especialización y mercado
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["especializacion", "division_del_trabajo"]

variables:
  escenario: uno_de([["agricultor", "trigo"], ["pastor", "lana"], ["alfarero", "cerámica"]])

respuesta: "segundo"
tipo: "mc"
opciones_explicitas: ["primero", "segundo", "tercero"]

enunciado: "En una economía con división del trabajo, un {escenario[0]} produce un excedente de {escenario[1]}. Si este desea obtener {escenario[2]}, debe acudir al mercado para realizar un intercambio."

explicacion: |
  La especialización permite que cada individuo se concentre en una actividad, generando excedentes específicos que se intercambian en el mercado.
```

### 3 — Evolución del intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["barter", "trueque", "moneda"]

respuesta: ["trueque", "moneda"]
tipo: "ordenar"
opciones_explicitas: ["trueque", "moneda", "dinero_fiduciario"]

enunciado: "Ordena cronológicamente las formas de intercambio según la complejidad del medio de cambio:"

explicacion: |
  El proceso evolutivo comenzó con el trueque directo, pasó por el uso de mercancías como dinero (moneda mercancía) y llegó al dinero fiduciario actual.
```

### 4 — La función de la moneda
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["moneda", "liquidez", "intercambio"]

variables:
  caso: uno_de([["sal", "sal"], ["conchas", "conchas"], ["metales", "metales"]])
  valor_caso: uno_de([1, 2, 3])

respuesta: "valor_caso"
tipo: "mc"
opciones_explicitas: ["1", "2", "3"]

enunciado: "Para facilitar el comercio de excedentes, se utilizan objetos como medio de cambio. Si usamos {caso[0]} como unidad de cuenta, el valor de un bien se mide en {caso[1]}."

explicacion: |
  La moneda actúa como un estándar de valor que resuelve la dificultad de coincidencia de necesidades del trueque.
```

### 5 — El mercado como espacio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["mercado", "abstracto", "social"]

respuesta: "verdadero"
tipo: "vf"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "El mercado es estrictamente un lugar físico (como una plaza o feria) y no puede existir de forma abstracta o virtual."

explicacion: |
  El mercado es un concepto institucional y social que define las reglas de intercambio; puede ser físico (un mercado de abastos) o abstracto (el mercado de divisas).
```