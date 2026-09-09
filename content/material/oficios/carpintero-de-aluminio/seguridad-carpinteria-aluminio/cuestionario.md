# Oficios — seguridad carpinteria aluminio (cuestionario, 25 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/seguridad-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: corpus con densidad de bugs muy alta. Q1
> respuesta fija sólo correcta para la rama "aluminio" del sorteo (rama
> "vidrio" requiere guantes distintos por su propia explicación),
> corregida a dinámica; Q18/Q19/Q21/Q22/Q23/Q24 sorteaban la propia
> palabra a insertar en una oración declarativa fija, permitiendo que
> 2-3 de cada 3-4 ramas produjeran afirmaciones fácticamente falsas o
> contradictorias ("se debe usar los dedos, nunca usar los dedos
> directamente", "El uso del EPP es el segundo/tercer nivel de
> defensa") mientras la respuesta seguía fija a la rama original —
> sorteos removidos en todos los casos; Q2/3/4/5(x2)/6/7/8/9/12/15/17
> interpolaban una variable fija directamente en una oración
> declarativa sin ningún hueco real (autorrevelador), convertidas a un
> hueco `___`; Q11/Q13 tenían la propia respuesta ya escrita como texto
> fijo en el enunciado, reformuladas; Q10/Q14/Q16 `respuesta:` con
> concatenación de strings que producía una fórmula sin resolver (ej.
> "80 * 120") en vez de calcular el valor pedido, corregidas a la
> expresión numérica real; Q25 interpolaba un número sin ningún hueco
> después para la unidad ("semanas"), agregado; 8 bloques con una
> comilla suelta al final de `explicacion:` (residuo de generación),
> eliminadas; `tipo: input` (alias legacy) normalizado a `completar`.

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "guantes", "perfiles"]

variables:
  datos: [["aluminio", "Guantes de nitrilo o con recubrimiento de PVC"], ["vidrio", "Guantes específicos para vidrio"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[0][1]
  - datos[1][1]

enunciado: "Para el manejo seguro de {datos[idx][0]}, ¿qué tipo de guantes son los indicados?"

explicacion: |
  Para el aluminio se usan guantes de nitrilo o PVC. Para el vidrio, se requieren guantes específicos para evitar que se enganchen y rompan la superficie.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["riesgos", "cortes", "perfiles"]

respuesta: "cortes profundos"
tipo: completar

enunciado: "Aunque el aluminio es ligero, sus perfiles tienen bordes afilados que pueden causar ___ con facilidad durante el trabajo."

explicacion: |
  Los bordes generados durante el corte y desbaste son cortantes y representan un riesgo significativo de lesión si no se manipulan con cuidado.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["herramientas", "mesa", "seguridad"]

respuesta: "mordazas o prensas"
tipo: completar

enunciado: "Para minimizar el riesgo de cortes al trabajar perfiles, nunca se debe sostener el material con la mano libre. Siempre se debe utilizar una mesa de trabajo adecuada con ___ para fijarlo."

explicacion: |
  Fijar el material con mordazas o prensas libera las manos para operar la herramienta de corte de forma segura y controlada.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["limpieza", "virutas", "prevencion"]

respuesta: "cepillo"
tipo: completar

enunciado: "Al retirar las rebabas o virutas de aluminio, se debe usar un ___ o una herramienta de desbarbado, nunca los dedos."

explicacion: |
  Usar los dedos para retirar virutas es peligroso debido a su filo. El cepillo permite limpiar la zona sin riesgo de contacto directo.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "gafas", "ojos"]

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "Las ___ son obligatorias para proteger los ojos de las virutas de aluminio, el polvo de lijado y posibles fragmentos de vidrio."

explicacion: |
  La protección ocular es fundamental en carpintería de aluminio para evitar lesiones por partículas volantes o roturas accidentales.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "calzado", "pies"]

respuesta: "puntera reforzada"
tipo: completar

enunciado: "El calzado de seguridad debe tener ___ para proteger los pies de caídas de herramientas pesadas o trozos de material."

explicacion: |
  Las punteras reforzadas (generalmente de acero o composite) son esenciales en talleres industriales para prevenir fracturas óseas por impactos.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["vidrio", "riesgos", "manipulacion"]

respuesta: "fractura"
tipo: completar

enunciado: "El vidrio, especialmente en grandes formatos, representa un riesgo de ___ y lesiones graves si no se maneja con la técnica adecuada."

explicacion: |
  El vidrio es frágil y puede romperse bajo tensión incorrecta. Su manejo requiere cuidado extremo para evitar cortes y lesiones por fragmentos.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["orden", "resbalones", "ambiente"]

respuesta: "residuos de aluminio"
tipo: completar

enunciado: "Es importante trabajar en un área bien iluminada y ordenada, evitando acumular ___ en el suelo que puedan causar resbalones."

explicacion: |
  Los residuos metálicos en el suelo pueden ser deslizantes o causar tropiezos. Mantener el área limpia previene accidentes por caídas.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["transporte", "perfiles", "seguridad"]

respuesta: "largos"
tipo: completar

enunciado: "Al transportar perfiles ___, se debe asegurar que estén bien sujetos para evitar que caigan o lastimen a otras personas."

explicacion: |
  Los perfiles largos son difíciles de maniobrar y pueden golpear a terceros o al propio trabajador si no se aseguran correctamente durante el transporte.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["matematica", "vidrio", "calculos"]

variables:
  ancho: random(50, 150)
  alto: random(50, 150)

respuesta: ancho * alto
tipo: completar

enunciado: "Si se debe manipular un vidrio de {ancho} cm de ancho por {alto} cm de alto, ¿cuál es el área total en cm² que se está manejando?"

explicacion: |
  El área se calcula multiplicando el ancho por el alto. Conocer el tamaño es vital para determinar la técnica de sujeción y el riesgo de fractura.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "lijado", "polvo"]

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "Durante el lijado de aluminio, se genera polvo que puede dañar los ojos. Deben usarse ___ para proteger la vista."

explicacion: |
  El polvo de aluminio puede irritar los ojos o causar daños si entra en contacto con ellos. Las gafas de seguridad son la barrera adecuada.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["herramientas", "desbarbado", "seguridad"]

respuesta: "cepillo"
tipo: completar

enunciado: "Para retirar las rebabas de forma segura, se debe usar un ___ o una herramienta de desbarbado dedicada."

explicacion: |
  El cepillo permite alejar las manos de las rebabas filosas. Usar los dedos es una práctica peligrosa que debe evitarse.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["herramientas", "electricas", "ruido"]

respuesta: "audífonos"
tipo: completar

enunciado: "El uso prolongado de sierras y perforadoras eléctricas expone al trabajador a altos niveles de ruido. ¿Qué elemento de protección se requiere?"

explicacion: |
  El ruido excesivo de herramientas eléctricas puede dañar la audición a largo plazo. La protección auditiva es obligatoria en estos casos.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["matematica", "marco", "perimetro"]

variables:
  lado1: random(40, 100)
  lado2: random(40, 100)

respuesta: 2 * (lado1 + lado2)
tipo: completar

enunciado: "Un marco de aluminio rectangular tiene lados de {lado1} cm y {lado2} cm. ¿Cuál es el perímetro total del marco en cm?"

explicacion: |
  El perímetro de un rectángulo es 2 veces la suma de sus lados. Calcular dimensiones ayuda a planificar el transporte y manipulación segura.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "calzado", "herramientas"]

respuesta: "puntera reforzada"
tipo: completar

enunciado: "Para proteger los pies de caídas de herramientas pesadas, el calzado de seguridad debe tener ___."

explicacion: |
  Las herramientas metálicas pueden caer desde la mesa de trabajo. La puntera reforzada absorbe el impacto y previene lesiones en los dedos de los pies.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "avanzado"
  tags: ["matematica", "peso", "seguridad"]

variables:
  volumen: random(100, 500)
  densidad: 2.7

respuesta: redondear(volumen * densidad, 1)
tipo: completar

enunciado: "Si un perfil de aluminio tiene un volumen de {volumen} cm³ y la densidad del aluminio es de {densidad} g/cm³, ¿cuál es el peso estimado en gramos?"

explicacion: |
  El peso se calcula multiplicando el volumen por la densidad. Conocer el peso ayuda a elegir la técnica de transporte y sujeción adecuada.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "ojos", "polvo"]

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "El polvo de lijado de aluminio puede dañar los ojos, por lo que es obligatorio usar ___ durante esta tarea."

explicacion: |
  Las partículas de polvo pueden ser irritantes o abrasivas. Las gafas de seguridad crean una barrera física que protege la visión.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["riesgos", "aluminio", "cortes"]

respuesta: "cortes profundos"
tipo: mc
opciones_explicitas: ["cortes profundos", "quemaduras", "electrocución", "intoxicación"]

enunciado: "Aunque el aluminio es ligero, los perfiles tienen bordes que pueden causar ___ con facilidad si no se manipulan con cuidado."

explicacion: |
  Los bordes afilados generados durante el corte y desbaste de los perfiles de aluminio representan un riesgo significativo de cortes profundos.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["epp", "vidrio", "guantes"]

respuesta: "guantes específicos para vidrio"
tipo: mc
opciones_explicitas: ["guantes de nitrilo", "guantes específicos para vidrio", "guantes de lana", "guantes de algodón"]

enunciado: "Para manipular vidrio en grandes formatos, es crucial usar ___ porque los guantes estándar pueden engancharse y romper la superficie."

explicacion: |
  Los guantes específicos para vidrio están diseñados para ofrecer protección sin comprometer la agarre ni causar daños por enganche, a diferencia de otros materiales.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "gafas", "seguridad"]

respuesta: "gafas de seguridad"
tipo: completar
respuestas_validas:
  - "gafas de seguridad"
  - "las gafas de seguridad"

enunciado: "Las ___ son obligatorias para proteger los ojos de las virutas de aluminio, el polvo de lijado y posibles fragmentos de vidrio."

explicacion: |
  La protección ocular es fundamental en el taller para prevenir lesiones por partículas volantes durante el corte y lijado del aluminio y vidrio.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["manejo", "rebabas", "herramientas"]

respuesta: "usar un cepillo"
tipo: mc
opciones_explicitas: ["usar un cepillo", "usar los dedos", "soplar con la boca", "limpiar con aire comprimido"]

enunciado: "Al retirar las rebabas o virutas, se debe ___, nunca usar los dedos directamente."

explicacion: |
  Utilizar un cepito o herramienta de desbarbado evita el contacto directo con bordes cortantes y previene cortes en las manos.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["transporte", "perfiles", "seguridad"]

respuesta: "asegurar que estén bien sujetos"
tipo: mc
opciones_explicitas: ["asegurar que estén bien sujetos", "transportarlos sueltos", "apilarlos sin orden", "dejarlos en el pasillo"]

enunciado: "Al transportar perfiles largos, se debe ___ para evitar que se caigan o lastimen a otras personas."

explicacion: |
  Los perfiles largos son difíciles de manejar y pueden golpear a otros si no se aseguran adecuadamente durante el transporte.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["epp", "guantes", "aluminio"]

respuesta: "nitrilo"
tipo: mc
opciones_explicitas: ["nitrilo", "lana", "cuero grueso", "algodón"]

enunciado: "Para el manejo de perfiles de aluminio, se recomiendan guantes de ___ o con recubrimiento de PVC para proteger contra cortes."

explicacion: |
  Los guantes de nitrilo ofrecen buena protección contra cortes sin sacrificar la sensibilidad táctil necesaria para el ensamblaje fino.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "importancia", "defensa"]

respuesta: "primer"
tipo: mc
opciones_explicitas: ["primer", "segundo", "tercer", "último"]

enunciado: "El uso adecuado del Equipo de Protección Personal (EPP) es el ___ nivel de defensa contra los riesgos del taller."

explicacion: |
  El EPP es la primera línea de defensa personal cuando no es posible eliminar el riesgo por completo mediante ingeniería o procedimientos.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["consecuencias", "tiempo", "trabajo"]

variables:
  tiempo: random(2, 10)

respuesta: "semanas"
tipo: completar
respuestas_validas:
  - "semanas"
  - "varias semanas"

enunciado: "Un accidente en el taller puede detener tu trabajo por {tiempo} ___ o incluso dejar secuelas permanentes."

explicacion: |
  Los accidentes graves no solo causan dolor, sino que interrumpen la actividad laboral durante periodos prolongados de recuperación.
```
