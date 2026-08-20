### 1 — Ámbito de aplicación del Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["conceptos_basicos", "relaciones_privadas"]

respuesta: "privadas"
tipo: completar
respuestas_validas: ["privadas", "privada"]

enunciado: "A diferencia del derecho público, el derecho civil regula las relaciones entre personas de carácter ___."

explicacion: |
  El derecho civil se encarga de las relaciones entre particulares (personas físicas o jurídicas) en un plano de igualdad, a diferencia del derecho público que regula la relación entre el Estado y los ciudadanos.
```

### 2 — Confusión entre Derecho Civil y Penal
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["distincion_ramas"]

respuesta: falso
tipo: vf

enunciado: "Si una persona incumple un contrato de alquiler, la sanción principal que impone el derecho civil es la pena de prisión."

explicacion: |
  Falso. El derecho civil busca la reparación del daño o el cumplimiento de la obligación (indemnizaciones, rescisión de contrato, etc.). La pena de prisión es una sanción propia del derecho penal.
```

### 3 — El rol del Estado en el Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos_derecho"]

variables:
  escenario: uno_de([
    ["Un contrato de compraventa entre dos vecinos", "civil"],
    ["Una multa por exceso de velocidad", "administrativo"],
    ["Un juicio por un delito de robo", "penal"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["civil", "administrativo", "penal"]

enunciado: "Identifique la naturaleza jurídica del siguiente caso: {escenario[0]}."

explicacion: |
  El caso planteado involucra a dos particulares en una relación de igualdad, lo cual es el núcleo del derecho civil.
```

### 4 — Orden de la sucesión hereditaria
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "orden_legal"]

respuesta: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]
tipo: ordenar
opciones_explicitas: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]

enunciado: "Ordene los criterios de prelación para determinar la transmisión de bienes tras el fallecimiento de una persona:"

explicacion: |
  En derecho civil, el orden de prioridad comienza por la voluntad del causante (testamento) y, en su defecto, se aplica la ley (sucesión intestada/abintestato).
```

### 5 — Capacidad Jurídica
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad_juridica"]

respuesta: "capacidad_de_goce"
tipo: mc
opciones_explicitas: ["capacidad_de_goce", "capacidad_de_ejercicio", "capacidad_de_disposición"]

enunciado: "La aptitud que tiene toda persona para ser titular de derechos y obligaciones se denomina ___."

explicacion: |
  La capacidad de goce es la aptitud inherente a la persona por el solo hecho de serlo, mientras que la capacidad de ejercicio es la facultad para ejercer esos derechos por sí mismo.
```