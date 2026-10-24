### 1 — Definición de Energía Cinética
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["definicion", "energia"]

tipo: mc
opciones_explicitas: ["La energía que posee un cuerpo debido a su movimiento.", "La energía que posee un cuerpo debido a su posición.", "La energía almacenada en los enlaces químicos.", "La energía debida a la temperatura de un objeto."]

respuesta: "La energía que posee un cuerpo debido a su movimiento."

enunciado: "La energía cinética se define como la energía que posee un cuerpo debido a su ___."

explicacion: |
  La energía cinética es la energía que un objeto posee debido a su movimiento. Si el objeto está en reposo (v = 0), su energía cinética es cero.
```

### 2 — Relación con la Masa y la Velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "relacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 2], [5, 4]] # [masa, velocidad]

tipo: completar
respuestas_validas: ["100.0", "40.0"]
respuesta: datos[escenario_idx][0] * (datos[escenario_idx][1] * datos[scenario_idx][1]) / 2

enunciado: "Si un objeto tiene una masa de {datos[escenario_idx][0]} kg y una velocidad de {datos[scenario_idx][1]} m/s, su energía cinética es ___ J."

explicacion: |
  Usando la fórmula $E_c = \frac{1}{2} \cdot m \cdot v^2$:
  Si m = {datos[0][0]} y v = {datos[0][1]}, $E_c = 0.5 \cdot 10 \cdot 2^2 = 20$ (Nota: El ejemplo en el enunciado debe coincidir con la lógica, corrigiendo para el ejemplo de la variable).
  Para el caso 0: $0.5 \cdot 10 \cdot 4 = 20$.
  Para el caso 1: $0.5 \cdot 5 \cdot 16 = 40$.
  *Nota: Ajustando lógica de respuesta para que coincida con el cálculo exacto.*
```

*(Corrección de la lógica de la pregunta 2 para asegurar que la respuesta sea exacta según el cálculo)*

### 2 — Relación con la Masa y la Velocidad (Corregida)
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "relacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 2], [5, 4]] 

tipo: completar
respuestas_validas: ["20.0", "40.0"]
respuesta: redondear(datos[escenario_idx][0] * (datos[escenario_idx][1] * datos[escenario_idx][1]) / 2, 1)

enunciado: "Si un objeto tiene una masa de {datos[escenario_idx][0]} kg y una velocidad de {datos[escenario_idx][1]} m/s, su energía cinética es ___ J."

explicacion: |
  Aplicando la fórmula $E_c = \frac{1}{2} \cdot m \cdot v^2$:
  Para el primer caso: $0.5 \cdot 10 \cdot 2^2 = 20.0$ J.
  Para el segundo caso: $0.5 \cdot 5 \cdot 4^2 = 40.0$ J.
```

### 3 — Dependencia de la Velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "velocidad"]

tipo: vf
respuesta: falso

enunciado: "¿Si la velocidad de un objeto se duplica, su energía cinética también se duplica?"

explicacion: |
  Falso. La energía cinética depende del cuadrado de la velocidad ($v^2$). Si la velocidad se duplica ($2v$), la energía cinética se multiplica por cuatro ($2^2 = 4$).
```

### 4 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Kilogramo (kg)", "Julio (J)", "Metro por segundo (m/s)"]

respuesta: "Julio (J)"

enunciado: "En el Sistema Internacional de Unidades (SI), la energía cinética se mide en ___."

explicacion: |
  La unidad de energía en el SI es el Julio (J), que equivale a $kg \cdot m^2/s^2$.
```

### 5 — Componentes de la Fórmula
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "componentes"]

tipo: ordenar
opciones_explicitas: ["Masa", "Velocidad", "Constante (1/2)"]
respuesta: ["Masa", "Velocidad", "Constante (1/2)"]

enunciado: "Ordena los componentes de la fórmula de la energía cinética ($E_c = \frac{1}{2} m v^2$) según aparecen en la expresión matemática de izquierda a derecha:"

explicacion: |
  La expresión es $\frac{1}{2}$ (constante) $\cdot m$ (masa) $\cdot v^2$ (velocidad al cuadrado).
  *Nota: El orden en la lista de opciones debe reflejar la secuencia de la fórmula.*
```

*(Reajuste de pregunta 5 para que el orden sea correcto según la fórmula)*

### 5 — Componentes de la Fórmula (Reajustada)
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["formula", "componentes"]

tipo: ordenar
opciones_explicitas: ["Constante (1/2)", "Masa", "Velocidad"]
respuesta: ["Constante (1/2)", "Masa", "Velocidad"]

enunciado: "Ordena los elementos de la fórmula $E_c = \frac{1}{2} m v^2$ tal como aparecen de izquierda a derecha:"

explicacion: |
  El orden es: 1) El factor constante 1/2, 2) La masa (m) y 3) La velocidad (v).
```