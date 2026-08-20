### 1 — El origen del intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["excedente", "intercambio"]

respuesta: "trueque"
tipo: "completar"
respuestas_validas: ["trueque"]

enunciado: "Cuando una sociedad agrícola comienza a producir más de lo que consume, el excedente genera la necesidad de realizar un proceso de intercambio llamado ___."

explicacion: |
  El excedente agrícola permitió que las personas no solo sobrevivieran, sino que pudieran intercambiar sus sobras por otros bienes necesarios, dando inicio al comercio.
```

### 2 — La limitación del intercambio directo
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "limitaciones"]

variables:
  escenario: uno_de([
    ["trigo", "herramientas de piedra"],
    ["lana", "cerámica"],
    ["fruta", "pieles"]
  ])

respuesta: "doble coincidencia de necesidades"
tipo: "mc"
opciones_explicitas: ["doble coincidencia de necesidades", "especialización del trabajo", "inflación de bienes", "escasez de recursos"]

enunciado: "Un agricultor tiene un excedente de {escenario[0]} y desea obtener {escenario[1]}, pero para lograrlo necesita encontrar a alguien que tenga {escenario[1]} y que, además, necesite exactamente {escenario[0]}. A este problema se le conoce como:"

explicacion: |
  La 'doble coincidencia de necesidades' es la principal dificultad del trueque, ya que requiere que ambas partes coincidan en el tiempo y en el objeto de intercambio.
```

### 3 — Evolución de los medios de cambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda", "trueque"]

respuesta: "true"
tipo: "vf"

enunciado: "¿El paso del trueque a la moneda fue impulsado por la dificultad de encontrar una doble coincidencia de necesidades?"

explicacion: |
  Correcto. La moneda surge como una solución para evitar la dificultad de encontrar a alguien que quiera exactamente lo que nosotros ofrecemos y que tenga lo que nosotros buscamos.
```

### 4 — Factores del comercio primitivo
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["comercio", "excedente"]

respuesta: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]
tipo: "ordenar"
opciones_explicitas: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]

enunciado: "Ordena cronológicamente los hitos que permitieron la evolución del sistema de intercambio:"

explicacion: |
  Primero aparece el excedente, luego se detecta que el trueque es ineficiente por la doble coincidencia de necesidades, y finalmente se crea la moneda para facilitar el intercambio.
```

### 5 — El valor en el intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["valor", "intercambio"]

variables:
  caso: uno_de([
    ["5 sacos de grano", "2 hachas de cobre"],
    ["3 cabras", "1 manta de lana"],
    ["10 cestas de fruta", "2 vasijas de barro"]
  ])

respuesta: "valor_relativo"
tipo: "mc"
opciones_explicitas: ["valor_relativo", "valor_absoluto", "costo_de_produccion", "precio_fijo"]

enunciado: "En un sistema de trueque, si un agricultor intercambia {caso[0]} por {caso[1]}, el valor de los bienes se determina de forma ___ (es decir, depende de la relación entre las necesidades de ambos)."

explicacion: |
  En el trueque, el valor no es absoluto, sino relativo a la utilidad que cada parte le asigne al bien en ese momento específico de intercambio.
```