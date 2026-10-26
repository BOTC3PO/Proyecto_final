### 1 — Definición de dilatación térmica
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos_basicos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "La dilatación térmica lineal es el aumento de la longitud de un cuerpo debido a un incremento en su temperatura."

explicacion: |
  Cuando la temperatura de un sólido aumenta, la energía cinética de sus átomos crece, provocando que estos vibren con mayor amplitud y ocupen un mayor espacio, lo que se traduce en un aumento de la longitud.
```

### 2 — Coeficiente de dilatación lineal
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["coeficiente", "propiedades_materiales"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.000012, "acero"], [0.000024, "aluminio"]]

respuesta: datos[material_idx][0]
tipo: input
tolerancia_abs: 0.0000001

enunciado: "El coeficiente de dilatación lineal del {datos[material_idx][1]} es aproximadamente ___ (expresado en 1/°C)."

pasos:
  - "Identificar el material según el valor proporcionado."
  - "Recordar que el coeficiente depende de la naturaleza del material."

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad intensiva que indica cuánto se expande un material por unidad de longitud y grado de temperatura.
```

### 3 — Relación entre temperatura y longitud
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["relaciones", "conceptos"]

opciones_explicitas: ["proporcional", "inversamente proporcional", "no tiene relación"]

respuesta: "proporcional"
tipo: mc

enunciado: "En un material sólido, el cambio en la longitud ($\Delta L$) es ___ al cambio en la temperatura ($\Delta T$), asumiendo un coeficiente constante."

explicacion: |
  De la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$ se observa que, al mantener constantes la longitud inicial y el coeficiente, el cambio de longitud es directamente proporcional al cambio de temperatura.
```

### 4 — Variables de la ecuación de dilatación
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["formula", "terminologia"]

respuesta: ["L_0", "$\Delta L$", "$\alpha$", "$\Delta T$"]
tipo: completar
respuestas_validas: ["L_0", "$\Delta L$", "$\alpha$", "$\Delta T$"]

enunciado: "En la fórmula de la dilatación lineal $\Delta L = L_0 \cdot \alpha \cdot \Delta T$, el término ___ representa la longitud inicial, el término ___ representa la variación de longitud, el término ___ es el coeficiente de dilatación lineal y el término ___ es la variación de temperatura."

explicacion: |
  Es fundamental identificar correctamente cada variable en la ecuación fundamental de la dilatación térmica lineal.
```

### 5 — Factores que afectan la dilatación
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "conceptos"]

opciones_explicitas: ["Longitud inicial y coeficiente de dilatación", "Solo la temperatura", "Masa y volumen"]

respuesta: "Longitud inicial y coeficiente de dilatación"
tipo: mc

enunciado: "¿De qué factores depende la variación de la longitud ($\Delta L$) de una barra sólida cuando se calienta?"

explicacion: |
  La variación de longitud depende de tres factores: la longitud original del objeto ($L_0$), el coeficiente de dilatación del material ($\alpha$) y el cambio de temperatura experimentado ($\Delta T$).
```