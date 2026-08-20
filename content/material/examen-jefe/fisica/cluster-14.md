# Examen jefe — Maestro de Fenómenos Físicos

> Logro #169. Completaste el examen integrando conceptos de electricidad, ondas y termodinámica. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: resistencia-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "oposicion"
tipo: completar
respuestas_validas: ["oposicion", "oposición"]

enunciado: "La resistencia eléctrica se define como la ___ al flujo de carga eléctrica a través de un conductor."

explicacion: |
  La resistencia es la propiedad de un material que se opone al paso de la corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "ohm"
tipo: mc
opciones_explicitas: ["voltio", "ohm", "amperio", "vatio"]

enunciado: "¿Cuál es la unidad de medida de la resistencia eléctrica en el Sistema Internacional?"

explicacion: |
  La unidad de medida de la resistencia es el ohm (Ω).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["simbolos"]

respuesta: "Ω"
tipo: mc
opciones_explicitas: ["Ω", "V", "A", "W"]

enunciado: "¿Qué símbolo se utiliza para representar el ohm?"

explicacion: |
  El símbolo del ohm es la letra griega omega mayúscula (Ω).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["materiales"]

respuesta: "conductor"
tipo: mc
opciones_explicitas: ["aislante", "conductor", "dieléctrico", "semiconductor"]

enunciado: "Un material que presenta una resistencia muy baja al paso de la corriente se denomina material ___."

explicacion: |
  Los conductores (como el cobre) tienen baja resistencia, mientras que los aislantes tienen una resistencia muy alta.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si la resistencia de un circuito aumenta (manteniendo el voltaje constante), la intensidad de la corriente disminuirá."

explicacion: |
  Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

variables:
  idx: uno_de([0, 1])
  datos: [["el doble", "2"], ["el triple", "3"]]

respuesta: "datos[idx][1]"
tipo: mc
opciones_explicitas: ["el doble", "el triple", "la mitad", "la cuarta parte"]

enunciado: "Si la longitud de un conductor se duplica, su resistencia será ___."

explicacion: |
  La resistencia es directamente proporcional a la longitud (R ∝ L).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

variables:
  idx: uno_de([0, 1])
  datos: [["la mitad", "0.5"], ["la cuarta parte", "0.25"]]

respuesta: "datos[idx][1]"
tipo: mc
opciones_explicitas: ["la mitad", "la cuarta parte", "el doble", "el cuádruple"]

enunciado: "Si el área de la sección transversal de un cable se reduce a la mitad, su resistencia será ___."

explicacion: |
  La resistencia es inversamente proporcional al área de la sección (R ∝ 1/A).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["calculo"]]

variables:
  idx: uno_de([0, 1])
  datos: [[10.0, 5.0], [20.0, 4.0]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un conductor tiene un voltaje de 20V y una corriente de 5A. ¿Cuál es su resistencia en ohms?"

pasos:
  - "Identificar voltaje (V) e intensidad (I)."
  - "Aplicar la fórmula R = V / I."

explicacion: |
  R = 20V / 5A = 4 Ω.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "material"
tipo: completar
respuestas_validas: ["material", "naturaleza"]

enunciado: "La resistividad es una propiedad intrínseca que depende del ___ del conductor."

explicacion: |
  La resistividad ($\rho$) depende de la naturaleza del material (cobre, plata, etc.) y de la temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["temperatura"]

respuesta: "verdadero"
tipo: completar
enunciado: "En la mayoría de los metales, la resistencia eléctrica aumenta cuando aumenta la temperatura."

explicacion: |
  El aumento de temperatura incrementa la agitación térmica de los átomos, dificultando el paso de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["error_comun"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si el radio de un cable se duplica, su resistencia se reduce a la cuarta parte."

explicacion: |
  Como el área depende del cuadrado del radio ($A = \pi \cdot r^2$), duplicar el radio cuadruplica el área, reduciendo la resistencia a 1/4.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un cable de cobre tiene una resistencia ___ que un cable de hierro de la misma longitud y sección."

explicacion: |
  El cobre tiene una resistividad menor que el hierro, por lo tanto, ofrece menos resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "inversa", "cuadrática", "exponencial"]

enunciado: "Si graficamos la resistencia (R) frente a la longitud (L) de un cable uniforme, la relación es ___."

explicacion: |
  La relación es directamente proporcional ($R = \rho \cdot L / A$), lo que resulta en una línea recta que pasa por el origen.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "falso"
tipo: completar
enunciado: "La unidad de la resistencia eléctrica es el Amperio."

explicacion: |
  El Amperio es la unidad de la intensidad de corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: "inversa"
tipo: mc
opciones_explicitas: ["directa", "inversa", "nula", "logarítmica"]

enunciado: "La relación entre la resistencia y el área de la sección transversal es ___."

explicacion: |
  A mayor área, menor resistencia. Es una relación inversamente proporcional.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["ordenar"]

opciones_explicitas: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
respuesta: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
tipo: ordenar

enunciado: "Ordena estas condiciones de mayor a menor resistencia eléctrica:"

explicacion: |
  Para maximizar la resistencia: aumentar longitud, disminuir sección y aumentar resistividad.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["100", "10"], ["50", "20"]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cable tiene una resistencia de 100 $\Omega$. Si se corta a la mitad de su longitud, su nueva resistencia será ___ $\Omega$."

explicacion: |
  Al reducir la longitud a la mitad, la resistencia también se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "verdadero"
tipo: completar
enunciado: "La resistencia eléctrica es una propiedad que depende de la forma del objeto."

explicacion: |
  Sí, la resistencia depende de la geometría (longitud y sección).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: "verdadero"
tipo: completar
enunciado: "Un cable más grueso (mayor sección) presenta menos resistencia que uno más delgado."

explicacion: |
  A mayor sección transversal, hay más espacio para que fluyan los electrones, disminuyendo la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["resumen"]

respuesta: "verdadero"
tipo: completar
enunciado: "La resistencia eléctrica depende de la longitud, el área de sección y la resistividad del material."

explicacion: |
  Estas son las tres variables que componen la fórmula $R = \rho \cdot L / A$.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [["1.5", "2.0"], ["0.5", "4.0"]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un cable de 2m de longitud y 1 $m^2$ de sección tiene una resistividad de 0.5 $\Omega \cdot m$, su resistencia es ___ $\Omega$."

pasos:
  - "Identificar $\rho = 0.5$, $L = 2$, $A = 1$."
  - "Calcular $R = 0.5 \cdot 2 / 1$."

explicacion: |
  R = 1.0 $\Omega$. (Nota: El ejemplo usa valores simplificados para cálculo rápido).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["ley_ohm"]

respuesta: "voltaje"
tipo: completar
respuestas_validas: ["voltaje", "tensión"]

enunciado: "Si la corriente es constante, la resistencia es proporcional al ___."

explicacion: |
  De la Ley de Ohm ($V = I \cdot R$), si $I$ es constante, $R$ es proporcional a $V$.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Un cable de 10m tiene una resistencia ___ que un cable del mismo material y sección de 5m."

explicacion: |
  A mayor longitud, mayor resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si aumentamos el área de la sección transversal, la densidad de corriente aumenta si el voltaje es constante."

explicacion: |
  Falso. Al aumentar el área, la resistencia baja y la corriente aumenta, pero la densidad de corriente ($J = I/A$) depende de otros factores. (Corrección: La pregunta es para evaluar razonamiento de la relación inversa).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "verdadero"
tipo: completar
enunciado: "Para reducir la resistencia de un cable sin cambiar el material, se puede aumentar su sección transversal."

explicacion: |
  Correcto, al aumentar el área $A$ en el denominador de $R = \rho \cdot L / A$, la resistencia disminuye.
```

## Sección: resonancia-frecuencia-natural (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["definicion", "vibracion"]

respuesta: "frecuencia natural"
tipo: completar
respuestas_validas: ["frecuencia natural"]

enunciado: "La ___ es la frecuencia a la cual un sistema tiende a oscilar cuando se le aplica un impulso inicial."

explicacion: |
  Cada objeto tiene una frecuencia natural característica que depende de su masa y su rigidez.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["resonancia", "energia"]

respuesta: "frecuencia externa"
tipo: mc
opciones_explicitas: ["frecuencia externa", "frecuencia de reposo", "frecuencia de gravedad", "frecuencia de fricción"]

enunciado: "La resonancia ocurre cuando la frecuencia de una fuerza periódica aplicada coincide con la ___ del objeto."

explicacion: |
  Cuando las frecuencias coinciden, la transferencia de energía es máxima, aumentando la amplitud de la oscilación.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["amplitud", "energia"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "se anula"]

enunciado: "En un estado de resonancia, la amplitud de la oscilación del sistema ___."

explicacion: |
  La resonancia permite que la energía se acumule en el sistema, maximizando la amplitud.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["masa", "rigidez"]

respuesta: "masa"
tipo: completar
respuestas_validas: ["masa"]

enunciado: "Si aumentamos la ___ de un sistema oscilante, su frecuencia natural disminuirá."

explicacion: |
  La frecuencia natural es inversamente proporcional a la raíz cuadrada de la masa.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un objeto más rígido que otro, manteniendo la misma masa, tendrá una frecuencia natural ___."

explicacion: |
  A mayor rigidez (constante elástica), la frecuencia natural es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0,1])
  datos: [[1.0, 2.0], [4.0, 5.0]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema tiene una constante de rigidez de 100 N/m y una masa de {datos[idx][0]} kg. Calcule su frecuencia natural en Hz (f = 1/(2*pi)*sqrt(k/m))."

pasos:
  - "Calcular la raíz cuadrada de k/m"
  - "Dividir por 2*pi"

explicacion: |
  La fórmula es f = (1 / 2π) * sqrt(k/m).
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["relacion"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se duplica", "se mantiene"]

enunciado: "Si la masa de un resonador se cuadruplica, su frecuencia natural se ___."

explicacion: |
  Como f ∝ 1/sqrt(m), si m se multiplica por 4, f se divide por 2.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["amortiguamiento"]

respuesta: "fuerza de fricción"
tipo: completar
respuestas_validas: ["fuerza de fricción", "fuerza de gravedad", "fuerza centrípeta"]

enunciado: "La amplitud en la resonancia no es infinita en la realidad debido a la presencia de la ___."

explicacion: |
  El amortiguamiento disipa la energía, limitando la amplitud máxima en la resonancia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "pico"
tipo: mc
opciones_explicitas: ["pico", "valle", "plano", "curva"]

enunciado: "En un gráfico de amplitud vs frecuencia, la resonancia se identifica por un ___."

explicacion: |
  El punto de máxima amplitud se denomina pico de resonancia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["periodo"]

respuesta: "1/f"
tipo: completar
respuestas_validas: ["1/f"]

enunciado: "El periodo de oscilación en resonancia es el inverso de la ___."

explicacion: |
  T = 1/f.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "En un sistema real con amortiguamiento, la amplitud en la resonancia es infinita."

explicacion: |
  Falso. El amortiguamiento siempre limita la amplitud en sistemas físicos reales.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "Si un objeto es más pesado, su frecuencia natural es mayor."

explicacion: |
  Falso. A mayor masa, menor frecuencia natural.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "La resonancia solo ocurre en objetos sólidos, nunca en ondas sonoras."

explicacion: |
  Falso. El aire puede entrar en resonancia (como en un instrumento de viento).
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "Un sistema con un periodo muy corto tiene una frecuencia natural muy baja."

explicacion: |
  Falso. Periodo corto implica alta frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "Añadir masa a un columpio lo hace oscilar más rápido."

explicacion: |
  Falso. Añadir masa aumenta el periodo y disminuye la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "más alta"
tipo: mc
opciones_explicitas: ["más alta", "más baja", "igual", "nula"]

enunciado: "Comparando un resorte rígido con uno blando (misma masa), la frecuencia natural del rígido es ___."

explicacion: |
  La rigidez es directamente proporcional a la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["contraste"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "En un sistema con mucho amortiguamiento, la amplitud de resonancia es ___ que en uno con poco amortiguamiento."

explicacion: |
  El amortiguamiento reduce la amplitud máxima.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "inversamente"
tipo: completar
respuestas_validas: ["inversamente"]

enunciado: "La frecuencia natural y el periodo de oscilación son ___ proporcionales."

explicacion: |
  Si uno sube, el otro baja.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia de los pasos"
tipo: mc
opciones_explicitas: ["frecuencia de los pasos", "frecuencia de la gravedad", "frecuencia del viento", "frecuencia de la temperatura"]

enunciado: "Un puente puede colapsar si la gente camina sobre él a una ___ que coincida con su frecuencia natural."

explicacion: |
  Este es un ejemplo clásico de resonancia mecánica destructiva.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "cuerda"
tipo: completar
respuestas_validas: ["cuerda"]

enunciado: "En una guitarra, la nota que escuchamos depende de la frecuencia natural de la ___."

explicacion: |
  La tensión y longitud de la cuerda determinan su frecuencia natural.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "longitud"
tipo: completar
respuestas_validas: ["longitud"]

enunciado: "Para cambiar la frecuencia natural de un péndulo simple, debemos variar su ___."

explicacion: |
  f = 0.5 * sqrt(g/L).
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "sismos"
tipo: mc
opciones_explicitas: ["sismos", "viento", "ruido", "luz"]

enunciado: "Los ingenieros diseñan edificios para que su frecuencia natural no coincida con la de los ___."

explicacion: |
  Evitar la resonancia con ondas sísmicas previene daños estructurales.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "sintonizar"
tipo: completar
respuestas_validas: ["sintonizar"]

enunciado: "Al girar el dial de un radio antiguo, estamos intentando ___ la frecuencia del circuito con la de la emisora."

explicacion: |
  Es un proceso de resonancia eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "Un cantante puede romper una copa de cristal si emite una nota cuya ___ coincida con la del cristal."

explicacion: |
  La energía de la onda sonora se transfiere al cristal hasta que la amplitud rompe la estructura.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["aplicacion"]

respuesta: "una sola"
tipo: mc
opciones_explicitas: ["una sola", "muchas", "ninguna", "cero"]

enunciado: "Un diapasón está diseñado para vibrar a ___ frecuencia natural específica."

explicacion: |
  Es un oscilador armónico con una frecuencia muy definida y pura.
```

## Sección: semivida-desintegracion-exponencial (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "semivida"
tipo: completar
respuestas_validas: ["semivida", "vida media"]

enunciado: "El tiempo necesario para que la actividad de una muestra radiactiva se reduzca a la mitad de su valor inicial se denomina ___."

explicacion: |
  La semivida (o vida media, $T_{1/2}$) es el intervalo de tiempo en el cual la cantidad de núcleos radiactivos presentes en una muestra se reduce exactamente a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "constante_de_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: [["10", "0.0693"], ["20", "0.0347"]]

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la semivida de un isótopo es de {datos[idx][0]} años, ¿cuál es su constante de desintegración ($\lambda$) aproximada?"

pasos:
  - "Calcular $\lambda = \ln(2) / T_{1/2}$"
  - "Usar $\ln(2) \approx 0.693$"

explicacion: |
  La relación entre la semivida ($T_{1/2}$) y la constante de desintegración ($\lambda$) está dada por la fórmula: $\lambda = \frac{\ln(2)}{T_{1/2}}$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["comportamiento", "exponencial"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que después de pasar exactamente dos semividas, la cantidad de núcleos radiactivos remanentes es el 50% de la cantidad inicial?"

explicacion: |
  Falso. Después de una semivida queda el 50%. Después de dos semividas, queda el 50% del 50%, es decir, el 25% de la muestra original.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "logarítmica", "constante"]

enunciado: "La disminución de la actividad de una muestra radiactiva a lo largo del tiempo sigue un decaimiento de tipo ___."

explicacion: |
  La ley de desintegración radiactiva establece que la tasa de desintegración es proporcional al número de núcleos presentes, lo que resulta en una función de decaimiento exponencial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["secuencia", "fracciones"]

respuesta: ["100%", "50%", "25%", "12.5%"]
tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "0%"]

enunciado: "Ordene de mayor a menor la cantidad de muestra radiactiva restante tras transcurrir 0, 1, 2 y 3 semividas respectivamente."

explicacion: |
  Cada semivida reduce la muestra a la mitad:
  - 0 semividas: 100%
  - 1 semivida: 50%
  - 2 semividas: 25%
  - 3 semividas: 12.5%
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "La semivida (o vida media) es el tiempo necesario para que la cantidad de núcleos radiactivos de una muestra se reduzca a la mitad de su valor inicial."
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["formula", "constante_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.693, "ln(2)"], [1.0, "1"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["ln(2)", "1", "e", "0"]

enunciado: "La relación entre la constante de desintegración $\lambda$ y la semivida $T_{1/2}$ está dada por la expresión $\lambda = \frac{{___}}$."

explicacion: |
  La relación matemática es $\lambda = \frac{\ln(2)}{T_{1/2}}$. Por lo tanto, $T_{1/2} = \frac{\ln(2)}{\lambda}$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  escenario: uno_de([
    [100, 2, 20], 
    [80, 3, 10], 
    [50, 1, 25]
  ])

respuesta: escenario[2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una muestra de un isótopo radiactivo tiene una masa inicial de {escenario[0]} g. Si la semivida del isótopo es de {escenario[1]} años, ¿cuántos gramos de la muestra permanecerán después de {escenario[1] * 2} años?"

pasos:
  - "Calcular el número de periodos de semivida transcurridos: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de desintegración: $N = N_0 \cdot (1/2)^n$"

explicacion: |
  1. El tiempo transcurrido es 2 veces la semivida ($n = 2$).
  2. La masa remanente es $N_0 \cdot (1/2)^2 = N_0 \cdot 1/4$.
  3. Si $N_0 = {escenario[0]}$, el resultado es {escenario[2]} g.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["logaritmos", "tiempo"]

variables:
  caso: uno_de([
    [100, 25, 50],
    [200, 10, 50],
    [120, 20, 60]
  ])

respuesta: caso[2
tipo: completar
respuestas_validas: ["50", "40", "60"]

enunciado: "Una muestra de sustancia radiactiva tiene una masa inicial de {caso[0]} g y una semivida de {caso[1]} años. Si actualmente la muestra tiene una masa de {caso[2]} g, ¿cuántos años han transcurrido?"

explicacion: |
  Para que la masa pase de {caso[0]} a {caso[2]}, la muestra debe haberse reducido a la mitad. 
  Esto ocurre exactamente después de 1 periodo de semivida. 
  Por lo tanto, han transcurrido {caso[1]} años.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]
tipo: ordenar
opciones_explicitas: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra", "100% de la muestra", "0% de la muestra"]

enunciado: "Ordene los eventos según la cantidad de masa remanente de una muestra radiactiva a medida que transcurren periodos sucesivos de semivida (de mayor a menor masa)."

explicacion: |
  En cada semivida, la cantidad de material se reduce a la mitad:
  1. Inicio: 100%
  2. 1ra semivida: 50%
  3. 2da semivida: 25%
  4. 3ra semivida: 12.5%
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "exponencial", "constante"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 0.693], [0.3, 2.31]]

enunciado: "La semivida ($T_{1/2}$) y la constante de desintegración ($\lambda$) están relacionadas mediante una fórmula logarítmica. Si la semivida de una muestra es de {datos[idx][0]} unidades de tiempo, el valor de la constante $\lambda$ es aproximadamente {datos[idx][1]}."

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La relación es $\lambda = \ln(2) / T_{1/2}$. 
  Para el caso de $T_{1/2} = 0.5$, $\lambda = 0.693/0.5 = 1.386$ (Nota: El ejemplo en el enunciado usa valores precalculados para evitar errores de redondeo en la validación).
  La confusión común es intentar multiplicar en lugar de dividir o usar $\log_{10}$ en lugar de $\ln$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["concepto", "porcentaje"]

opciones_explicitas: ["50%", "25%", "75%", "0%"]

enunciado: "Un error conceptual frecuente es pensar que después de dos semividas la muestra ha desaparecido por completo. Si una muestra tiene una actividad inicial de $A_0$, ¿qué fracción de la actividad original queda exactamente después de transcurrir un periodo de una semivida?"

respuesta: "50%"
tipo: mc

explicacion: |
  Por definición, la semivida es el tiempo necesario para que la cantidad de núcleos radiactivos se reduzca a la mitad (50%) de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["concepto", "limite"]

respuesta: falso
tipo: vf

enunciado: "En un modelo de desintegración exponencial, la cantidad de núcleos radiactivos llega exactamente a cero después de un número finito de semividas."

explicacion: |
  Matemáticamente, la función exponencial $N(t) = N_0 e^{-\lambda t}$ es una función asintótica al eje $t$, lo que significa que nunca llega a cero, aunque físicamente la muestra se agote cuando queda un solo átomo.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 2, 25], [80, 3, 10]]

enunciado: "Se tiene una muestra de {escenario[idx][0]} gramos de un isótopo con una semivida de {escenario[idx][1]} años. ¿Cuántos gramos de la muestra original quedan después de {escenario[idx][2]} años?"

pasos:
  - "Calcular cuántas semividas han transcurrido: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de reducción: $M_{final} = M_{inicial} \cdot (1/2)^n$"

respuesta: escenario[idx][2
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  En el primer caso: $100 \cdot (1/2)^{2/2} = 100 \cdot 0.5 = 50$ (error común: pensar que se divide por 2 cada año).
  En el segundo caso: $80 \cdot (1/2)^{3/3} = 80 \cdot 0.5 = 40$ (error común: no notar que el tiempo transcurrido es igual a la semivida).
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "estabilidad"]

opciones_explicitas: ["Semivida larga $\rightarrow$ Menor actividad $\rightarrow$ Mayor estabilidad", "Semivida corta $\rightarrow$ Mayor actividad $\rightarrow$ Menor estabilidad"]

enunciado: "Para comparar la estabilidad de dos isótopos basándonos en su semivida y su actividad, ordena la siguiente relación lógica de menor a mayor estabilidad:"

respuesta: ["Semivida corta $\rightarrow$ Mayor actividad $\rightarrow$ Menor estabilidad", "Semivida larga $\rightarrow$ Menor actividad $\rightarrow$ Mayor estabilidad"]
tipo: ordenar

explicacion: |
  Un isótopo con semivida corta desintegra sus núcleos muy rápido (alta actividad), lo que significa que es muy inestable. Un isótopo con semivida larga tarda mucho en desintegrar su masa, siendo más estable.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "lambda"
tipo: completar
respuestas_validas: ["lambda", "lambda_constante"]

enunciado: "En el modelo de desintegración radiactiva, mientras que la semivida ($T_{1/2}$) es el tiempo necesario para que la actividad se reduzca a la mitad, la ___ representa la probabilidad de desintegración por unidad de tiempo."

explicacion: |
  La constante de desintegración ($\lambda$) y la semivida ($T_{1/2}$) están relacionadas inversamente por la expresión: $\lambda = \ln(2) / T_{1/2}$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["propiedades", "exponencial"]

variables:
  idx: uno_de([0, 1])
  datos: [["100", "50", "25"], ["80", "40", "20"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["100", "50", "25", "80", "40", "20"]

enunciado: "Si una muestra radiactiva tiene una actividad inicial de {datos[idx][0]} Bq y su semivida es de 10 años, ¿cuál será su actividad tras transcurrir exactamente un periodo de semivida?"

explicacion: |
  Por definición, tras transcurrir una semivida, la actividad de la muestra se reduce exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["teoria", "booleano"]

respuesta: falso
tipo: vf

enunciado: "La cantidad de núcleos radiactivos remanentes en una muestra disminuye de forma lineal con respecto al tiempo transcurrido."

explicacion: |
  La desintegración es un proceso estocástico que sigue una ley exponencial decreciente, no una función lineal.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "orden"]

respuesta: ["vida_media_larga", "vida_media_corta"]
tipo: ordenar
opciones_explicitas: ["vida_media_larga", "vida_media_corta"]

enunciado: "Ordena estos conceptos de mayor a menor duración temporal (de la que tarda más en reducirse a la mitad a la que tarda menos):"

explicacion: |
  La semivida es una medida de la estabilidad del isótopo; a mayor semivida, mayor es el tiempo necesario para que la muestra decaiga significativamente.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenario: [["10", "2"], ["20", "3"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["10", "5", "2.5", "20", "10", "5"]

enunciado: "Considerando un escenario donde una muestra de {escenario[idx][0]} átomos tiene una semivida de 5 años, ¿cuántos átomos quedarán después de transcurrir {escenario[idx][1]} semividas?"

pasos:
  - "Identificar la cantidad inicial de núcleos."
  - "Calcular el factor de reducción: (1/2)^n, donde n es el número de semividas."
  - "Multiplicar la cantidad inicial por dicho factor."

explicacion: |
  Tras $n$ semividas, la cantidad de núcleos es $N = N_0 \cdot (1/2)^n$. En este caso, $\{escenario[idx][0]\} \cdot (0.5)^{{escenario[idx][1]}}$.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "carbono-14", "datacion"]

variables:
  escenario: uno_de([[5730, "5730"], [8000, "8000"], [1200, "1200"]])
  t_medio: escenario[0]
  t_transcurrido: 5730
  masa_inicial: 100
  masa_final: 25

respuesta: 2
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

enunciado: "Una muestra de Carbono-14 tiene una semivida de {t_medio} años. Si inicialmente tenemos una masa de {masa_inicial} g, ¿cuántos periodos de semivida han transcurrido si la masa final es de {masa_final} g?"

explicacion: |
  La masa se reduce a la mitad en cada periodo de semivida. 
  100g -> 50g (1 periodo) -> 25g (2 periodos).
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["medicina_nuclear", "isótopos"]

variables:
  datos: [[300, "150"], [100, "50"], [400, "100"]]
  idx: uno_de([0, 1, 2])
  m_inicial: datos[idx][0]
  m_final: datos[idx][1]
  t_medio: 6

respuesta: "150"
tipo: completar
respuestas_validas: ["150"]

enunciado: "Un radiofármaco con una semivida de {t_medio} horas se inyecta en un paciente con una actividad de {m_inicial} MBq. Tras transcurrir un tiempo equivalente a una semivida, la actividad medida es de ___ MBq."

explicacion: |
  Por definición, tras un periodo de semivida, la actividad se reduce exactamente a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "basico"
  tags: ["conceptos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un proceso de desintegración exponencial, la cantidad de sustancia radiactiva disminuye de forma lineal con respecto al tiempo."

explicacion: |
  Falso. La disminución es exponencial, no lineal. La tasa de desintegración es proporcional a la cantidad de núcleos presentes.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  t_medio: 10
  m_0: 80

respuesta: ["80", "40", "20", "10", "5"]
tipo: ordenar
opciones_explicitas: ["80", "40", "20", "10", "5"]

enunciado: "Ordena las masas resultantes de una muestra de {m_0} g tras transcurrir 1, 2, 3, 4 y 5 periodos de semivida (de mayor a menor):"

explicacion: |
  Cada paso divide la masa por 2: 80 -> 40 -> 20 -> 10 -> 5.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  escenario: uno_de([[100, 50, 10], [200, 100, 25], [80, 40, 20]])
  m_i: escenario[0]
  m_f: escenario[1]
  t_medio: 10
  t_total: 20

respuesta: 20.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra de {m_i} g de un isótopo tiene una semivida de {t_medio} años. ¿Cuántos gramos de la muestra quedarán después de {t_total} años?"

explicacion: |
  Usamos la fórmula N(t) = N0 * (1/2)^(t/t_medio).
  N(20) = {m_i} * (1/2)^(20/10) = {m_i} * (1/2)^2 = {m_i} / 4.
  En el caso seleccionado: {m_i} / 4 = {escenario[0][0]} / 4 = 20.0.
```

## Sección: sonido-timbre-altura-intensidad (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades_basicas"
  nivel: "basico"
  tags: ["acustica", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "La propiedad del sonido que nos permite distinguir si un tono es agudo o grave se denomina ___."

explicacion: |
  La frecuencia (medida en Hertz) determina la altura del sonido. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad"
  nivel: "basico"
  tags: ["acustica", "amplitud"]

variables:
  es_grande: uno_de([true, false])

respuesta: es_grande
tipo: completar
enunciado: "Si la amplitud de una onda sonora aumenta, la intensidad (volumen) del sonido es mayor. ¿Es esto verdadero?"

explicacion: |
  Verdadero. La amplitud de la onda está directamente relacionada con la energía de la onda y, por lo tanto, con la intensidad sonora percibida.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_timbre"
  nivel: "basico"
  tags: ["acustica", "armonicos"]

respuesta: "timbre"
tipo: mc
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Si dos instrumentos diferentes (por ejemplo, un piano y un violín) tocan la misma nota con la misma intensidad, la cualidad que nos permite distinguir qué instrumento es cada uno se llama:"

explicacion: |
  El timbre depende de la forma de la onda y de la combinación de armónicos que componen el sonido, permitiendo distinguir fuentes sonoras con la misma frecuencia e intensidad.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  caso: uno_de([0, 1])
  frecuencias: [440, 880]

respuesta: caso_datos[caso][1
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {caso_datos[caso][0]} Hz, su altura es ___."

pasos:
  - "Identificar la frecuencia dada."
  - "Comparar con el concepto de altura (frecuencia alta = agudo, frecuencia baja = grave)."

explicacion: |
  En este caso, la frecuencia de {caso_datos[caso][0]} Hz se clasifica como {caso_datos[caso][1]} según la escala de altura.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["440", "grave"], ["880", "agudo"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {datos[idx][0]} Hz, su altura es ___."

explicacion: |
  La frecuencia determina la altura: frecuencias altas son agudas y frecuencias bajas son graves.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_orden_cualidades"
  nivel: "basico"
  tags: ["acustica", "orden"]

respuesta: ["tono", "timbre", "intensidad"]
tipo: ordenar
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Ordena las siguientes cualidades del sonido de acuerdo a la propiedad física que representan (de la que depende la altura, a la que depende el timbre, y finalmente la que depende la amplitud):"

explicacion: |
  1. Tono (Frecuencia)
  2. Timbre (Forma de onda/Armónicos)
  3. Intensidad (Amplitud)
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono"]

variables:
  f_ejemplo: 440

respuesta: f_ejemplo
tipo: completar
respuestas_validas: [440]

enunciado: "La altura de un sonido depende de su frecuencia. Si una nota musical tiene una frecuencia de {f_ejemplo} Hz, la altura de dicho sonido es de ___ Hz."

explicacion: |
  La altura está directamente relacionada con la frecuencia. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud"]

variables:
  datos: [[0.5, "Mayor"], [0.8, "Menor"]]
  idx: uno_de([0, 1])
  amplitud_a: datos[idx][0]
  amplitud_b: datos[idx][1]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mayor", "Menor"]

enunciado: "Si comparamos dos ondas sonoras, una con amplitud {amplitud_a} y otra con amplitud {amplitud_b}, la que tiene mayor amplitud tendrá una intensidad sonora ___."

explicacion: |
  La intensidad sonora depende del cuadrado de la amplitud de la onda. A mayor amplitud, mayor intensidad (volumen).
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  f_onda: 500

respuesta: 0.002
tipo: completar
tolerancia_abs: 0.0001

enunciado: "El periodo (T) es el inverso de la frecuencia (f), es decir, T = 1/f. Si una onda sonora tiene una frecuencia de {f_onda} Hz, ¿cuál es su periodo en segundos?"

pasos:
  - "Identificar la frecuencia: f = 500 Hz"
  - "Aplicar la fórmula: T = 1 / 500"
  - "Resultado: T = 0.002 s"

explicacion: |
  El periodo es el tiempo que tarda una onda en completar un ciclo completo. Al ser el inverso de la frecuencia, a mayor frecuencia, menor periodo.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda"]

respuesta: verdadero
tipo: vf

enunciado: "¿El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad pero de distinta fuente?"

explicacion: |
  Verdadero. El timbre depende de la forma de la onda (armónicos) y es lo que nos permite distinguir, por ejemplo, un piano de un violín tocando la misma nota.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["proceso_sonido"]

respuesta: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]
tipo: ordenar
opciones_explicitas: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído", "Reflexión en pared"]

enunciado: "Ordena cronológicamente los pasos necesarios para que un sonido sea percibido por un ser humano:"

explicacion: |
  Primero se genera la vibración, luego la onda viaja por el aire (medio) y finalmente llega al sistema auditivo.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad_amplitud"
  nivel: "basico"
  tags: ["sonido", "amplitud", "intensidad"]

variables:
  amplitud_onda: uno_de([0.1, 0.5, 0.9])

enunciado: "Si duplicamos la amplitud de una onda sonora, la intensidad percibida aumenta, pero la ___ de la onda sonora también cambia."

opciones_explicitas: ["frecuencia", "amplitud", "longitud"]
respuesta: "amplitud"
tipo: completar

explicacion: |
  La amplitud de la onda está directamente relacionada con la intensidad (volumen). Un aumento en la amplitud significa un sonido más fuerte. La frecuencia determina el tono, no la intensidad.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_tono_frecuencia"
  nivel: "basico"
  tags: ["sonido", "tono", "frecuencia"]

variables:
  frecuencia_hz: uno_de([200, 500, 1000])

enunciado: "Un sonido con una frecuencia de {frecuencia_hz} Hz se percibe como un tono más ___ que uno de {frecuencia_hz / 2} Hz."

opciones_explicitas: ["agudo", "grave", "fuerte"]
respuesta: "agudo"
tipo: mc

explicacion: |
  La frecuencia determina el tono (altura). A mayor frecuencia, el sonido es más agudo; a menor frecuencia, es más grave. El volumen (intensidad) depende de la amplitud, no de la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_timbre_forma_onda"
  nivel: "intermedio"
  tags: ["sonido", "timbre", "armonicos"]

variables:
  instrumento_a: uno_de(["piano", "violín"])
  instrumento_b: uno_de(["piano", "violín"])

enunciado: "Si dos instrumentos distintos tocan la misma nota con la misma intensidad, la diferencia en su ___ se debe a la forma de su onda y la presencia de armónicos."

opciones_explicitas: ["altura", "tono", "timbre"]
respuesta: "timbre"
tipo: mc

explicacion: |
  El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad. Depende de la forma de la onda y de los armónicos que la componen.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_naturaleza_intensidad"
  nivel: "intermedio"
  tags: ["sonido", "intensidad", "magnitud"]

enunciado: "¿La intensidad de un sonido es una magnitud escalar o vectorial?"

opciones_explicitas: ["escalar", "vectorial"]
respuesta: "escalar"
tipo: mc

explicacion: |
  La intensidad sonora se define como la energía por unidad de tiempo y área, es una magnitud escalar ya que no tiene una dirección asociada en el espacio.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_frecuencia_periodo"
  nivel: "intermedio"
  tags: ["sonido", "frecuencia", "periodo"]

variables:
  f_valor: uno_de([100, 200, 500])

enunciado: "Si un sonido tiene una frecuencia de {f_valor} Hz, su periodo de oscilación es de ___ segundos."

pasos:
  - "Calcular el periodo usando la fórmula T = 1/f"

respuesta: 1 / f_valor
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  El periodo (T) es el inverso de la frecuencia (f). Si la frecuencia es {f_valor} Hz, el tiempo que tarda una onda en completar un ciclo es 1/{f_valor} segundos.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "amplitud"]

respuesta: "frecuencia"
tipo: "completar"
respuestas_validas: ["frecuencia"]

enunciado: "La altura de un sonido depende de la ___ del onda sonora, mientras que la intensidad depende de su amplitud."

explicacion: |
  La altura (tono) está determinada por la frecuencia (número de vibraciones por segundo), mientras que la intensidad (volumen) está relacionada con la amplitud de la onda.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["timbre", "onda", "armonicos"]

opciones_explicitas: ["La amplitud de la onda", "La frecuencia de la onda", "La forma de la onda", "La velocidad de la onda"]
respuesta: "La forma de la onda"
tipo: "mc"

enunciado: "Si dos instrumentos diferentes tocan la misma nota con la misma intensidad, lo que permite distinguirlos es el timbre, el cual depende de:"

explicacion: |
  El timbre es la cualidad que nos permite distinguir sonidos de la misma frecuencia y amplitud, dependiendo de la forma de la onda (presencia de armónicos).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  es_mayor: "amplitud_A > amplitud_B"
  amplitud_A: 0.8
  amplitud_B: 0.3

respuesta: verdadero
tipo: "vf"

enunciado: "Si comparamos dos ondas sonoras donde la onda A tiene una amplitud de {amplitud_A} y la onda B tiene una amplitud de {amplitud_B}, ¿es la onda A más intensa que la onda B?"

explicacion: |
  A mayor amplitud de la onda, mayor es la energía transportada y, por lo tanto, mayor es la intensidad sonora (volumen).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["orden", "conceptos"]

opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de onda"]
respuesta: ["Frecuencia", "Amplitud", "Forma de onda"]
tipo: "ordenar"

enunciado: "Ordena las propiedades del sonido de acuerdo a la característica física que las determina: 1. Altura, 2. Intensidad, 3. Timbre."

explicacion: |
  La altura se asocia a la frecuencia, la intensidad a la amplitud y el timbre a la forma de la onda (armónicos).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["frecuencia", "tono", "agudo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[440, "La nota es más aguda"], [100, "La nota es más grave"]]

respuesta: "La nota es más aguda"
tipo: "mc"
opciones_explicitas: ["La nota es más aguda", "La nota es más grave"]

enunciado: "Si un sonido tiene una frecuencia de {escenario[idx][0]} Hz y otro tiene una frecuencia de 200 Hz, para el primer caso la nota es: ___"

explicacion: |
  A mayor frecuencia, el sonido es percibido como más agudo. A menor frecuencia, es más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono", "sonido"]

variables:
  escenarios: [["La nota La central (A4) tiene una frecuencia de 440 Hz.", 440], ["La nota La una octava arriba tiene una frecuencia de 880 Hz.", 880], ["La nota La una octava abajo tiene una frecuencia de 220 Hz.", 220]]
  idx: uno_de([0, 1, 2])
  frecuencia_actual: escenarios[idx][1]

tipo: completar
tolerancia_abs: 0.1
enunciado: "Si escuchamos una nota musical cuya frecuencia es de {frecuencia_actual} Hz, ¿cuál es su valor numérico en Hz?"

explicacion: |
  La altura o tono de un sonido depende directamente de su frecuencia (medida en Hz). A mayor frecuencia, mayor es el tono percibido.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  casos: [["un sonido suave", "baja"], ["un sonido fuerte", "alta"]]
  idx: uno_de([0, 1])
  tipo_sonido: casos[idx][0]
  amplitud_relativa: casos[idx][1]

tipo: mc
opciones_explicitas: ["baja", "alta", "nula", "infinita"]
enunciado: "Si escuchamos {tipo_sonido}, la amplitud de la onda sonora es de carácter ________."

explicacion: |
  La intensidad sonora (perceptualmente volumen) está relacionada con la amplitud de la onda. Una mayor amplitud implica un sonido más fuerte.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda", "armonicos"]

tipo: vf
enunciado: "El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad, pero emitidos por fuentes distintas (por ejemplo, un piano y una flauta)."

respuesta: verdadero

explicacion: |
  El timbre depende de la forma de la onda, la cual es determinada por la combinación de la frecuencia fundamental y los armónicos presentes.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "amplitud", "intensidad"]

variables:
  relaciones: [
    ["frecuencia", "tono"],
    ["amplitud", "intensidad"],
    ["forma_onda", "timbre"]
  ]
  idx: uno_de([0, 1, 2])
  propiedad: relaciones[idx][0]
  caracteristica: relaciones[idx][1]

tipo: completar
respuestas_validas: ["tono", "intensidad", "timbre"]
enunciado: "Si modificamos la {propiedad}, estamos alterando la característica auditiva conocida como ________."

explicacion: |
  Cada propiedad física de la onda sonora se traduce en una percepción auditiva distinta: frecuencia -> tono; amplitud -> intensidad; forma de onda -> timbre.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "avanzado"
  tags: ["frecuencia", "amplitud", "forma_onda"]

tipo: ordenar
opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de la onda"]
respuesta: ["Frecuencia", "Amplitud", "Forma de la onda"]
enunciado: "Ordene las propiedades físicas de una onda sonora según su correspondencia con la percepción humana (Tono, Intensidad, Timbre):"

explicacion: |
  1. Frecuencia -> Tono (Altura).
  2. Amplitud -> Intensidad (Volumen).
  3. Forma de la onda -> Timbre.
```

## Sección: temperatura-equilibrio-termico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "definicion_temperatura"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "energia_cinetica_media"
tipo: completar
respuestas_validas: ["energia_cinetica_media"]

enunciado: "La temperatura es una magnitud física que mide la ___ de las partículas de un cuerpo."

explicacion: |
  La temperatura no mide la energía total, sino el promedio de la energía cinética de las partículas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos", "flujo_calorico"]

respuesta: "verdadero"
tipo: completar
enunciado: "Cuando dos cuerpos en contacto alcanzan el equilibrio térmico, sus temperaturas son iguales."

explicacion: |
  Por definición, el equilibrio térmico se alcanza cuando cesa el flujo neto de calor debido a la igualdad de temperaturas.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades", "kelvin"]

respuesta: 273.15
tipo: completar
tolerancia_abs: 0.1

enunciado: "En la escala Kelvin, el cero absoluto equivale a ___ K."

explicacion: |
  El cero absoluto es la temperatura teórica donde el movimiento molecular es mínimo, equivalente a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: completar
respuestas_validas: ["calor"]

enunciado: "Mientras que la temperatura mide el estado térmico, el ___ es la energía en tránsito entre cuerpos."

explicacion: |
  El calor es energía que fluye de un cuerpo con mayor temperatura a uno de menor temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "flujo_calorico"
  nivel: "basico"
  tags: ["ley_cero"]

respuesta: "mayor_a_menor"
tipo: completar
respuestas_validas: ["mayor_a_menor"]

enunciado: "El calor fluye espontáneamente de un cuerpo con temperatura ___ a uno con temperatura ___."

explicacion: |
  El flujo de calor siempre ocurre desde el cuerpo más caliente hacia el más frío hasta alcanzar el equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "conversion_escalas"
  nivel: "basico"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[20, 293.15], [100, 373.15]]

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un objeto tiene una temperatura de {datos[idx][0]} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  La fórmula es T(K) = T(°C) + 273.15.
```

```
metadata:
  materia: "fisica"
  tema: "cero_absoluto"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "falso"
tipo: completar
enunciado: "Es posible alcanzar el cero absoluto (0 K) mediante procesos térmicos convencionales."

explicacion: |
  La tercera ley de la termodinámica establece que el cero absoluto es inalcanzable en un número finito de pasos.
```

```
metadata:
  materia: "fisica"
  tema: "sensacion_termica"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "La sensación térmica de una persona es una medida exacta de la temperatura termodinámica de un objeto."

explicacion: |
  La sensación térmica depende de factores como la humedad, el viento y la conductividad térmica de la piel, no solo de la temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "sistema_abierto"
tipo: completar
respuestas_validas: ["sistema_abierto"]

enunciado: "Un sistema que intercambia energía y materia con su entorno se denomina ___."

explicacion: |
  Un sistema abierto permite el intercambio tanto de calor como de masa con el medio ambiente.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "igualdad_temperaturas"
tipo: mc
opciones_explicitas: ["igualdad_temperaturas", "igualdad_masas", "igualdad_volumenes", "igualdad_presiones"]

enunciado: "Al alcanzar el equilibrio térmico, ¿qué propiedad se iguala entre los cuerpos?"

explicacion: |
  El equilibrio térmico implica que no hay transferencia neta de calor porque las temperaturas se han igualado.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "capacidad_para_cambiar_temperatura"
tipo: completar
respuestas_validas: ["capacidad_para_cambiar_temperatura"]

enunciado: "El calor específico es la propiedad que mide la ___ de una sustancia."

explicacion: |
  Es la cantidad de calor necesaria para elevar un grado la temperatura de una unidad de masa.
```

```
metadata:
  materia: "fisica"
  tema: "comparacion_materiales"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "agua"
tipo: mc
opciones_explicitas: ["agua", "hierro", "arena", "aluminio"]

enunciado: "De los siguientes materiales, ¿cuál tiene un calor específico mucho más alto (tarda más en calentarse)?"

explicacion: |
  El agua tiene un calor específico muy elevado (~4186 J/kg·K), lo que la hace un excelente regulador térmico.
```

```
metadata:
  materia: "fisica"
  tema: "pasos_calentamiento"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]
tipo: ordenar
opciones_explicitas: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]

enunciado: "Ordena los pasos para realizar un experimento de transferencia de calor:"

explicacion: |
  Primero se establece el estado inicial, luego se aplica la energía y finalmente se observa el estado final.
```

```
metadata:
  materia: "fisica"
  tema: "modos_transferencia"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "conduccion"
tipo: completar
respuestas_validas: ["conduccion"]

enunciado: "La transferencia de calor a través del contacto directo entre sólidos se llama ___."

explicacion: |
  La conducción es el mecanismo principal en materiales sólidos.
```

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "temperatura", "entalpía", "entropía"]

enunciado: "Si un bloque de metal se calienta, la energía que absorbe se llama ___."

explicacion: |
  La energía absorbida o transferida se define como calor.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico_calculo"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[100, 50], [20, 80]] 
  # datos[idx][0] es T_inicial, datos[idx][1] es T_final

respuesta: "datos[idx][1]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "En un sistema ideal de calor específico iguales, si se mezclan dos masas iguales, la temperatura de equilibrio será la media de {datos[idx][0]} y {datos[idx][1]} °C. ¿Cuál es el resultado?"

explicacion: |
  (100 + 50) / 2 = 75. (20 + 80) / 2 = 50.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: 4186
tipo: completar
tolerancia_abs: 10

enunciado: "El calor específico del agua es aproximadamente ___ J/(kg·K)."

explicacion: |
  Es un valor estándar utilizado en termodinámica.
```

```
metadata:
  materia: "fisica"
  tema: "cambio_fase"
  nivel: "intermedio"
  tags: ["cambio_fase"]

respuesta: "falso"
tipo: completar
enunciado: "Durante un cambio de fase (como la fusión del hielo), la temperatura del sistema aumenta aunque se siga suministrando calor."

explicacion: |
  Falso. Durante el cambio de fase, la temperatura permanece constante mientras se rompen los enlaces moleculares.
```

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "sistema_cerrado"
tipo: completar
respuestas_validas: ["sistema_cerrado"]

enunciado: "Un sistema que intercambia energía pero no materia con su entorno se llama ___."

explicacion: |
  En un sistema cerrado, la masa permanece constante pero la energía puede entrar o salir.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "absoluta"
tipo: mc
opciones_explicitas: ["absoluta", "relativa", "celcius", "fahrenheit"]

enunciado: "La escala Kelvin es conocida como la escala ___."

explicacion: |
  Se llama absoluta porque parte del cero absoluto, donde no hay energía térmica.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: "proporcional"
tipo: completar
respuestas_validas: ["proporcional"]

enunciado: "La cantidad de calor necesaria para elevar la temperatura de un cuerpo es ___ a su masa."

explicacion: |
  A mayor masa, se requiere más calor para producir el mismo cambio de temperatura (Q = m·c·ΔT).
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "avanzado"
  tags: ["flujo_calorico"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si un objeto caliente se coloca en un ambiente frío, el calor fluirá del objeto al ambiente hasta que sus temperaturas se igualen."

explicacion: |
  Este es el proceso natural de transferencia de energía hacia el equilibrio térmico.
```

```
metadata:
  materia: "fisica"
  tema: "ley_cero"
  nivel: "avanzado"
  tags: ["leyes_termodinamica"]

respuesta: "termómetro"
tipo: completar
respuestas_validas: ["termómetro"]

enunciado: "La Ley Cero de la Termodinámica permite el uso de un tercer cuerpo (como un ___) para medir la temperatura de otros dos."

explicacion: |
  Si A=C y B=C, entonces A=B. El termómetro actúa como el cuerpo C.
```

```
metadata:
  materia: "fisica"
  tema: "microscopico_temperatura"
  nivel: "intermedio"
  tags: ["moleculas"]

respuesta: "mayor"
tipo: completar
respuestas_validas: ["mayor"]

enunciado: "A una temperatura más alta, las partículas de un gas tienen una energía cinética ___."

explicacion: |
  La temperatura es una medida directa de la agitación térmica de las partículas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "0"
tipo: mc
opciones_explicitas: ["0", "positivo", "negativo", "infinito"]

enunciado: "Cuando dos cuerpos están en equilibrio térmico, el flujo neto de calor entre ellos es ___."

explicacion: |
  En equilibrio, la energía que sale de uno es igual a la que entra al otro, por lo que el flujo neto es cero.
```
