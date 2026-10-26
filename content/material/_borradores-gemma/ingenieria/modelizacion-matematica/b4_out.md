### 1 — Modelo determinista vs estocástico
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["modelos", "probabilidad", "determinismo"]

variables:
  es_estocastico: uno_de([verdadero, falso])

enunciado: "Un modelo que predice un resultado único y exacto ante las mismas condiciones iniciales se denomina modelo determinista. Por el contrario, un modelo que incluye variables aleatorias para representar la incertidumbre se denomina modelo {es_estocastico}."

respuesta: es_estocastico
tipo: vf

explicacion: |
  El modelo determinista no contiene elementos de azar; sus resultados son predecibles al 100% si se conocen las condiciones iniciales. El modelo estocástico incorpora la probabilidad para modelar la variabilidad natural de los sistemas reales.
```

### 2 — El propósito de la simplificación
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["modelos", "simplificacion", "precision"]

opciones_explicitas: ["Aumentar la complejidad para ganar precisión absoluta", "Reducir la complejidad para facilitar la resolución y comprensión", "Eliminar todas las variables para obtener un resultado constante", "Añadir ruido para que el modelo sea más realista"]

respuesta: "Reducir la complejidad para facilitar la resolución y comprensión"
tipo: mc

enunciado: "En la modelización matemática, la simplificación es un proceso crítico. ¿Cuál es la principal distinción entre un modelo matemático y la realidad física que se busca representar?"

explicacion: |
  Un modelo nunca es una réplica exacta de la realidad; es una representación simplificada. El objetivo es capturar los fenómenos esenciales manteniendo una complejidad manejable para el análisis matemático.
```

### 3 — Variables de estado vs parámetros
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["variables", "parametros", "dinamica"]

variables:
  tipo_elemento: uno_de(["estado", "parametro"])

enunciado: "En un sistema dinámico, las variables de {tipo_elemento} son aquellas que cambian con el tiempo durante la evolución del proceso, mientras que los ________ son valores que permanecen constantes durante el análisis del modelo."

respuestas_validas: ["parámetros"]
respuesta: "parámetros"
tipo: completar

explicacion: |
  Las variables de estado describen el estado del sistema en un instante dado (ej. posición, velocidad), mientras que los parámetros definen las propiedades del sistema o del entorno (ej. masa, gravedad) y no cambian durante la simulación.
```

### 4 — Modelos estáticos vs dinámicos
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["tiempo", "sistemas", "estatica"]

enunciado: "Un modelo que describe un sistema en un momento específico, sin considerar la evolución temporal de sus variables, se considera un modelo ________, mientras que uno que describe la evolución de las variables respecto al tiempo es un modelo ________."

respuestas_validas: ["estático", "dinámico"]
respuesta: "estático"
tipo: completar

explicacion: |
  La distinción fundamental radica en la dependencia explícita del tiempo. Los modelos estáticos se usan para equilibrio o relaciones instantáneas; los dinámicos para procesos evolutivos.
```

### 5 — Pasos en el ciclo de modelización
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "proceso", "validacion"]

opciones_explicitas: ["Identificación del problema", "Formulación de ecuaciones", "Resolución matemática", "Validación y verificación"]

respuesta: ["Identificación del problema", "Formulación de ecuaciones", "Resolución matemática", "Validación y verificación"]
tipo: ordenar

enunciado: "Ordene correctamente las etapas del proceso de modelización matemática, desde el contacto con el problema real hasta la obtención de conclusiones fiables."

explicacion: |
  El proceso es cíclico: se identifica el problema, se traduce a lenguaje matemático (formulación), se resuelve el modelo y finalmente se comprueba si el modelo representa fielmente la realidad (validación).
```