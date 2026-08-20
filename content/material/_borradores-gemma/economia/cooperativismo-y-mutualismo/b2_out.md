### 1 — Principio de gestión democrática
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "gestion_democratica"]

variables:
  es_cooperativa: verdadero

respuesta: es_cooperativa
tipo: vf

enunciado: "En una cooperativa de trabajo, según el principio de gestión democrática, cada asociado tiene un voto, independientemente del capital aportado."

explicacion: |
  Correcto. A diferencia de una sociedad anónima donde el poder depende de la cantidad de acciones, en las cooperativas rige el principio de 'un asociado, un voto', garantizando la gestión democrática.
```

### 2 — Identificación de la entidad
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["caracteristicas", "economia_social"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una agrupación de productores de leche que se unen para procesar su materia prima y distribuir sus productos bajo una marca común, compartiendo excedentes según el uso de servicios.", "cooperativa"],
    ["Un grupo de vecinos que crean un fondo común para prestarse dinero entre ellos con tasas sociales, sin fines de lucro.", "mutual"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual", "sociedad_anónima", "s.r.l."]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La respuesta es {escenarios[escenario_idx][1]}. Las cooperativas buscan satisfacer necesidades de sus miembros mediante la producción o comercialización de bienes/servicios, mientras que las mutuales se centran en la prestación de servicios sociales y ayuda recíproca.
```

### 3 — El proceso de excedentes
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedentes", "distribucion"]

variables:
  excedente_total: 1000
  porcentaje_reserva_legal: 0.05
  porcentaje_fondo_educacion: 0.05
  porcentaje_reparto_asociados: 0.90

respuesta: redondear(excedente_total * porcentaje_reparto_asociados, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una cooperativa de consumo al cierre de su ejercicio obtiene un excedente neto de ${excedente_total}. Tras destinar el 5% a la reserva legal y el 5% al fondo de educación, el resto se distribuye entre los asociados proporcionalmente al consumo realizado. ¿Cuánto dinero se reparte entre los asociados?"

pasos:
  - "Calcular el monto para reserva legal: ${excedente_total} * {porcentaje_reserva_legal}"
  - "Calcular el monto para el fondo de educación: ${excedente_total} * {porcentaje_fondo_educacion}"
  - "Restar ambos montos al excedente total para obtener el remanente a repartir."

explicacion: |
  El cálculo es: ${excedente_total} - (${excedente_total} * 0.05) - (${excedente_total} * 0.05) = ${excedente_total} * 0.90 = ${redondear(excedente_total * porcentaje_reparto_asociados, 2)}.
```

### 4 — Orden de constitución
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "constitucion"]

respuesta: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]
tipo: ordenar
opciones_explicitas: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa de trabajo en Argentina:"

explicacion: |
  Primero se reúnen los interesados, luego se redacta el estatuto que regirá la entidad, se celebra la asamblea donde se aprueba dicho estatuto y finalmente se inscribe ante el ente regulador (INAES).
```

### 5 — Concepto de capital
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["capital", "asociados"]

respuesta: "variable"
tipo: completar
respuestas_validas: ["variable"]

enunciado: "En el cooperativismo, el capital social es de naturaleza ___, ya que su monto cambia con la entrada y salida de nuevos asociados."

explicacion: |
  El capital es variable porque no está representado por acciones de libre negociación en bolsa, sino que depende de la integración de los asociados a la entidad.
```