### 1 — Diferencia fundamental de gestión
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["gestion", "democracia"]

tipo: mc
opciones_explicitas: ["La búsqueda de lucro máximo para accionistas externos", "La gestión democrática por parte de sus miembros", "La propiedad estatal de los medios de producción", "La primacía del capital sobre el trabajo"]

respuesta: "La gestión democrática por parte de sus miembros"

enunciado: "A diferencia de las sociedades de capital tradicionales, donde el poder de voto depende de la cantidad de acciones, las cooperativas se distinguen por un modelo de gestión donde cada miembro tiene un voto, independientemente de su aporte. Esto se conoce como:"

explicacion: |
  En el cooperativismo, rige el principio de 'un hombre, un voto', asegurando que el control sea democrático y no dependa de la riqueza de los socios.
```

### 2 — El objeto de la mutualidad
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["mutualismo", "ayuda_mutua"]

tipo: vf

enunciado: "El mutualismo se distingue del cooperativismo principalmente en que su fin primordial es la ayuda mutua para satisfacer necesidades comunes, sin tener como objetivo principal la distribución de excedentes entre sus miembros."

respuesta: falso

explicacion: |
  Aunque ambos pertenecen a la economía social, el mutualismo se centra en la prestación de servicios de asistencia mutua, mientras que la cooperativa busca satisfacer necesidades mediante la actividad económica de sus socios.
```

### 3 — Principios de la Ley 26.206
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["ley_26206", "principios"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["gestión democrática", "ayuda mutua"], ["gestión democrática", "maximización de renta"]]

tipo: completar
respuestas_validas: ["ayuda mutua", "maximización de renta"]

enunciado: "Según el espíritu de la Ley 26.206, una organización que se distingue de una empresa comercial por su fin social debe basarse en el principio de ___."

pasos:
  - "Identificar el principio fundamental de la economía social."

explicacion: |
  La ayuda mutua es el pilar que diferencia a estas organizaciones de las empresas de capital, donde el fin es el lucro.

respuesta: datos[escenario_idx][1]
```

### 4 — Orden de principios cooperativos
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["principios", "orden"]

tipo: ordenar
opciones_explicitas: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

respuesta: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

enunciado: "Para que una organización sea considerada cooperativa bajo los estándares de la economía social, debe seguir una secuencia lógica de principios. Ordene los siguientes principios según la estructura clásica de la identidad cooperativa (desde la pertenencia hasta la gestión):"

explicacion: |
  Primero se define quién puede entrar (Ingreso libre), luego cómo se decide (Gestión democrática) y finalmente cómo se gestionan los recursos (Participación económica).
```

### 5 — El excedente vs. El lucro
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedente", "lucro"]

variables:
  es_cooperativa: true

tipo: mc
opciones_explicitas: ["El excedente es igual al lucro de una empresa comercial", "El excedente se distribuye según el capital aportado", "El excedente se distribuye según el uso de los servicios", "El excedente se reinvierte íntegramente en el Estado"]

respuesta: "El excedente se distribuye según el uso de los servicios"

enunciado: "Una diferencia clave entre el 'lucro' de una sociedad comercial y el 'excedente' de una cooperativa es que el segundo se distribuye en función de la ___ realizada por los socios."

explicacion: |
  En las cooperativas, el retorno de excedentes no depende de cuánto capital puso cada uno, sino de cuánto utilizó los servicios de la cooperativa (retorno cooperativo).
```