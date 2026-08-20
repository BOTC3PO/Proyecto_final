### 1 — El efecto de la escasez
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

enunciado: "Una tienda de calzado lanza una promoción que dice: '¡Solo quedan 3 pares de este modelo en stock!'. Esta técnica busca influir en el consumidor mediante la sensación de ____."

respuestas_validas: ["escasez", "urgencia"]
tipo: completar

explicacion: |
  La técnica de escasez funciona bajo la premisa de que los consumidores valoran más aquello que es difícil de conseguir o que está a punto de agotarse, lo que acelera la decisión de compra.
```

### 2 — Autoridad en la publicidad
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "credibilidad"]

variables:
  escenario: uno_de([
    ["Un dentista con bata blanca recomienda una pasta dental.", "autoridad"],
    ["Un chef profesional recomienda una marca de sartenes.", "autoridad"],
    ["Un deportista famoso usa una bebida energética.", "aspiracional"]
  ])

enunciado: "En el siguiente caso: '{escenario[0]}', la técnica de persuasión predominante es la de:"

opciones_explicitas: ["autoridad", "aspiracional", "escasez", "reciprocidad"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Cuando se utiliza a un experto en una materia para validar un producto, se está apelando al principio de autoridad para aumentar la credibilidad del mensaje.
```

### 3 — Prueba social en redes sociales
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["prueba_social", "validacion"]

enunciado: "Si una aplicación de delivery muestra un mensaje que dice 'Más de 10.000 personas pidieron esto hoy', ¿está utilizando el principio de prueba social?"

respuesta: verdadero
tipo: vf

explicacion: |
  La prueba social (social proof) se basa en la idea de que las personas tienden a seguir las acciones de un grupo mayor para validar su propia conducta.
```

### 4 — El proceso de persuasión de la persuasión
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelo_elaboration", "procesamiento"]

enunciado: "Ordena los pasos del modelo de probabilidad de elaboración (ELM) cuando un consumidor procesa un anuncio de alta implicación (ej. un auto nuevo):"

opciones_explicitas: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
respuesta: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
tipo: ordenar

explicacion: |
  En la ruta central del modelo ELM, el consumidor realiza un esfuerzo cognitivo significativo, analizando la calidad de los argumentos para formar una opinión duradera.
```

### 5 — Reciprocidad en el marketing
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["reciprocidad", "marketing"]

variables:
  caso: uno_de([
    ["Un supermercado te da una muestra gratis de queso.", "comprar"],
    ["Un spa te ofrece una sesión de prueba de 5 minutos.", "comprar"],
    ["Un restaurante te regala un dulce al finalizar la comida.", "comprar"]
  ])

enunciado: "Caso: '{caso[0]}'. Tras recibir el beneficio gratuito, el cliente siente la obligación psicológica de devolver el favor. Esto se traduce en la acción de: ___."

respuestas_validas: ["comprar", "pagar", "devolver"]
tipo: completar

explicacion: |
  El principio de reciprocidad establece que las personas se sienten obligadas a devolver un favor o un gesto amable, lo cual es una herramienta poderosa en el marketing de muestras gratuitas.
```