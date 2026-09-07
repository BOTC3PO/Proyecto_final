# Oficios — seguridad carpinteria aluminio (cuestionario, 25 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/seguridad-carpinteria-aluminio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "guantes", "perfiles"]

variables:
  tipo_material: uno_de(["aluminio", "vidrio"])

respuesta: "Guantes de nitrilo o con recubrimiento de PVC"
tipo: completar

enunciado: "Para el manejo seguro de perfiles de {tipo_material}, se recomiendan guantes que protejan contra cortes sin sacrificar la sensibilidad táctil. ¿Qué tipo de guantes son los indicados?"

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

variables:
  riesgo: "cortes profundos"

respuesta: "cortes profundos"
tipo: completar

enunciado: "Aunque el aluminio es ligero, sus perfiles tienen bordes afilados que pueden causar {riesgo} con facilidad durante el trabajo."

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

variables:
  herramienta: "mordazas o prensas"

respuesta: "mordazas o prensas"
tipo: completar

enunciado: "Para minimizar el riesgo de cortes al trabajar perfiles, nunca se debe sostener el material con la mano libre. Siempre se debe utilizar una mesa de trabajo adecuada con {herramienta} para fijarlo."

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

variables:
  metodo: "cepillo"

respuesta: "cepillo"
tipo: completar

enunciado: "Al retirar las rebabas o virutas de aluminio, se debe usar un {metodo} o una herramienta de desbarbado, nunca los dedos."

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

variables:
  proteccion: "gafas de seguridad"

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "Las {proteccion} son obligatorias para proteger los ojos de las virutas de aluminio, el polvo de lijado y posibles fragmentos de vidrio."

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

variables:
  caracteristica: "puntera reforzada"

respuesta: "puntera reforzada"
tipo: completar

enunciado: "El calzado de seguridad debe tener {caracteristica} para proteger los pies de caídas de herramientas pesadas o trozos de material."

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

variables:
  riesgo: "fractura"

respuesta: "fractura"
tipo: completar

enunciado: "El vidrio, especialmente en grandes formatos, representa un riesgo de {riesgo} y lesiones graves si no se maneja con la técnica adecuada."

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

variables:
  residuo: "residuos de aluminio"

respuesta: "residuos de aluminio"
tipo: completar

enunciado: "Es importante trabajar en un área bien iluminada y ordenada, evitando acumular {residuo} en el suelo que puedan causar resbalones."

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

variables:
  medida: "largos"

respuesta: "largos"
tipo: completar

enunciado: "Al transportar perfiles {medida}, se debe asegurar que estén bien sujetos para evitar que caigan o lastimen a otras personas."

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

respuesta: ancho + " * " + alto
tipo: input

enunciado: "Si se debe manipular un vidrio de {ancho} cm de ancho por {alto} cm de alto, ¿cuál es el área total en cm² que se está manejando?"

explicacion: |
  El área se calcula multiplicando el ancho por el alto. Conocer el tamaño es vital para determinar la técnica de sujeción y el riesgo de fractura."
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "lijado", "polvo"]

variables:
  contaminante: "polvo de lijado"

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "Durante el lijado de aluminio, se genera {contaminante} que debe ser protegido por las gafas de seguridad."

explicacion: |
  El polvo de aluminio puede irritar los ojos o causar daños si entra en contacto con ellos. Las gafas de seguridad son la barrera adecuada."
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["herramientas", "desbarbado", "seguridad"]

variables:
  herramienta: "cepillo"

respuesta: "cepillo"
tipo: completar

enunciado: "Para retirar las rebabas de forma segura, se debe usar un {herramienta} o una herramienta de desbarbado dedicada."

explicacion: |
  El cepillo permite alejar las manos de las rebabas filosas. Usar los dedos es una práctica peligrosa que debe evitarse."
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "intermedio"
  tags: ["herramientas", "electricas", "ruido"]

variables:
  riesgo: "ruido"

respuesta: "audífonos"
tipo: completar

enunciado: "El uso prolongado de sierras y perforadoras eléctricas expone al trabajador a altos niveles de {riesgo}, requiriendo audífonos."

explicacion: |
  El ruido excesivo de herramientas eléctricas puede dañar la audición a largo plazo. La protección auditiva es obligatoria en estos casos."
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

respuesta: "2 * (" + lado1 + " + " + lado2 + ")"
tipo: input

enunciado: "Un marco de aluminio rectangular tiene lados de {lado1} cm y {lado2} cm. ¿Cuál es el perímetro total del marco en cm?"

explicacion: |
  El perímetro de un rectángulo es 2 veces la suma de sus lados. Calcular dimensiones ayuda a planificar el transporte y manipulación segura."
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "calzado", "herramientas"]

variables:
  proteccion: "puntera reforzada"

respuesta: "puntera reforzada"
tipo: completar

enunciado: "Para proteger los pies de caídas de herramientas pesadas, el calzado de seguridad debe tener {proteccion}."

explicacion: |
  Las herramientas metálicas pueden caer desde la mesa de trabajo. La puntera reforzada absorbe el impacto y previene lesiones en los dedos de los pies."
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

respuesta: volumen + " * " + densidad
tipo: input

enunciado: "Si un perfil de aluminio tiene un volumen de {volumen} cm³ y la densidad del aluminio es de {densidad} g/cm³, ¿cuál es el peso estimado en gramos?"

explicacion: |
  El peso se calcula multiplicando el volumen por la densidad. Conocer el peso ayuda a elegir la técnica de transporte y sujeción adecuada."
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["epp", "ojos", "polvo"]

variables:
  proteccion: "gafas de seguridad"

respuesta: "gafas de seguridad"
tipo: completar

enunciado: "El polvo de lijado de aluminio puede dañar los ojos, por lo que es obligatorio usar {proteccion} durante esta tarea."

explicacion: |
  Las partículas de polvo pueden ser irritantes o abrasivas. Las gafas de seguridad crean una barrera física que protege la visión."
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "seguridad_carpinteria_aluminio"
  nivel: "basico"
  tags: ["riesgos", "aluminio", "cortes"]

variables:
  riesgo: uno_de(["cortes profundos", "quemaduras", "electrocución"])

respuesta: "cortes profundos"
tipo: mc
opciones_explicitas: ["cortes profundos", "quemaduras", "electrocución", "intoxicación"]

enunciado: "Aunque el aluminio es ligero, los perfiles tienen bordes que pueden causar {riesgo} con facilidad si no se manipulan con cuidado."

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

variables:
  tipo_guante: uno_de(["guantes de nitrilo", "guantes específicos para vidrio", "guantes de lana", "guantes de algodón"])

respuesta: "guantes específicos para vidrio"
tipo: mc
opciones_explicitas: ["guantes de nitrilo", "guantes específicos para vidrio", "guantes de lana", "guantes de algodón"]

enunciado: "Para manipular vidrio en grandes formatos, es crucial usar {tipo_guante} porque los guantes estándar pueden engancharse y romper la superficie."

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

variables:
  elemento: "gafas de seguridad"

respuesta: "gafas de seguridad"
tipo: completar
respuestas_validas:
  - "gafas de seguridad"
  - "las gafas de seguridad"

enunciado: "Las {elemento} son obligatorias para proteger los ojos de las virutas de aluminio, el polvo de lijado y posibles fragmentos de vidrio."

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

variables:
  metodo: uno_de(["usar un cepillo", "usar los dedos", "soplar con la boca", "limpiar con aire comprimido"])

respuesta: "usar un cepillo"
tipo: mc
opciones_explicitas: ["usar un cepillo", "usar los dedos", "soplar con la boca", "limpiar con aire comprimido"]

enunciado: "Al retirar las rebabas o virutas, se debe {metodo}, nunca usar los dedos directamente."

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

variables:
  accion: uno_de(["asegurar que estén bien sujetos", "transportarlos sueltos", "apilarlos sin orden", "dejarlos en el pasillo"])

respuesta: "asegurar que estén bien sujetos"
tipo: mc
opciones_explicitas: ["asegurar que estén bien sujetos", "transportarlos sueltos", "apilarlos sin orden", "dejarlos en el pasillo"]

enunciado: "Al transportar perfiles largos, se debe {accion} para evitar que se caigan o lastimen a otras personas."

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

variables:
  material_guante: uno_de(["nitrilo", "lana", "cuero grueso", "algodón"])

respuesta: "nitrilo"
tipo: mc
opciones_explicitas: ["nitrilo", "lana", "cuero grueso", "algodón"]

enunciado: "Para el manejo de perfiles de aluminio, se recomiendan guantes de {material_guante} o con recubrimiento de PVC para proteger contra cortes."

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

variables:
  nivel: uno_de(["primer", "segundo", "tercer"])

respuesta: "primer"
tipo: mc
opciones_explicitas: ["primer", "segundo", "tercer", "último"]

enunciado: "El uso adecuado del Equipo de Protección Personal (EPP) es el {nivel} nivel de defensa contra los riesgos del taller."

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

enunciado: "Un accidente en el taller puede detener tu trabajo por {tiempo} o incluso dejar secuelas permanentes."

explicacion: |
  Los accidentes graves no solo causan dolor, sino que interrumpen la actividad laboral durante periodos prolongados de recuperación.
```
