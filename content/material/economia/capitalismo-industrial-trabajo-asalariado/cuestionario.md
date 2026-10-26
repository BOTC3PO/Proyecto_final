# Economia — Capitalismo industrial trabajo asalariado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El motor del capitalismo industrial

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["propiedad_privada", "medios_produccion"]

tipo: mc
opciones_explicitas: ["La propiedad colectiva de los medios de producción", "La propiedad privada de los medios de producción y la búsqueda de ganancia", "La regulación estatal total de la economía", "La distribución equitativa de la riqueza sin excedentes"]

respuesta: "La propiedad privada de los medios de producción y la búsqueda de ganancia"

enunciado: "El capitalismo industrial se define fundamentalmente como un sistema económico basado en ___."

explicacion: |
  El capitalismo industrial se caracteriza por la propiedad privada de los medios de producción (fábricas, maquinaria, tierras) y la búsqueda de la acumulación de capital a través de la ganancia.
```

### 2 — Relación laboral en la fábrica

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_asalariado", "fuerza_de_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["el obrero vende su fuerza de trabajo a cambio de un salario", "salario"], ["el trabajador ofrece su tiempo para producir mercancías", "salario"]]

tipo: completar
respuestas_validas:
  - "salario"
respuesta: datos[escenario_idx][1]

enunciado: "En el sistema de capitalismo industrial, el trabajador que no posee medios de producción debe vender su fuerza de trabajo a cambio de un ___."

explicacion: |
  En este sistema, el trabajador solo posee su capacidad de trabajar (fuerza de trabajo), la cual alquila al capitalista a cambio de un salario para cubrir sus necesidades de subsistencia.
```

### 3 — Factores de producción

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["factores_produccion", "capital"]

tipo: ordenar
opciones_explicitas: ["Tierra", "Trabajo", "Capital"]
respuesta_orden: ["Tierra", "Trabajo", "Capital"]

enunciado: "Para que se produzca la acumulación de capital en la era industrial, es necesario combinar los factores de producción en un orden lógico de recursos naturales, mano de obra y medios técnicos. Ordene los siguientes elementos: Tierra, Trabajo y Capital."

explicacion: |
  La producción industrial requiere la combinación de recursos naturales (tierra), la actividad humana (trabajo) y el conjunto de medios y dinero para producir (capital).
```

### 4 — El papel de la tecnología

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["tecnologia", "mecanizacion"]

tipo: mc
opciones_explicitas: ["Aumentar la productividad y reducir costos", "Eliminar la necesidad de obtener ganancias", "Garantizar el empleo pleno de forma permanente", "Reducir la propiedad privada de las máquinas"]

respuesta: "Aumentar la productividad y reducir costos"

enunciado: "En el contexto de la Revolución Industrial, la introducción de maquinaria pesada en las fábricas tenía como objetivo principal ___."

explicacion: |
  La mecanización permitió aumentar la productividad (producir más en menos tiempo), lo que reduce los costos unitarios y maximiza la búsqueda de ganancia del capitalista.
```

### 5 — Cálculo de plusvalía básica

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor", "trabajo"]

variables:
  valor_mercancia: 100
  salario_obrero: 40

tipo: completar
tolerancia_abs: 0.01

respuesta: valor_mercancia - salario_obrero

enunciado: "Si un trabajador produce una mercancía cuyo valor de mercado es de {valor_mercancia} y el capitalista le paga un salario de {salario_obrero}, la plusvalía (el valor excedente que retiene el capitalista) es de ___."

pasos:
  - "Identificar el valor total de la mercancía producida."
  - "Restar el salario pagado al trabajador."

explicacion: |
  La plusvalía es la diferencia entre el valor creado por el trabajador y el salario que recibe. En este caso: 100 - 40 = 60.
```

### 6 — El concepto de fuerza de trabajo

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo", "salario", "capitalismo"]

tipo: mc
opciones_explicitas: ["La propiedad de los medios de producción", "La capacidad física y mental para trabajar", "El tiempo libre del trabajador", "El capital acumulado por el patrón"]

respuesta: "La capacidad física y mental para trabajar"

enunciado: "En el sistema de trabajo asalariado, lo que el trabajador vende al empleador para obtener un salario es su ___."

explicacion: |
  En el capitalismo, el trabajador no vende su producto ni sus medios de producción, sino su capacidad de trabajar (fuerza de trabajo) por un tiempo determinado.
```

### 7 — Evolución de los sistemas de producción

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["historia_economica", "servidumbre", "esclavitud"]

respuesta: "esclavo"
tipo: completar
respuestas_validas:
  - "esclavo"

enunciado: "A diferencia del trabajador asalariado, el ___ es aquel que es considerado una propiedad del amo."

pasos:
  - "Identificar la relación jurídica entre trabajador y dueño."

explicacion: |
  El sistema de esclavitud se caracteriza por la deshumanización del trabajador, quien es tratado como un objeto o propiedad, a diferencia del asalariado que vende su tiempo/capacidad.
```

### 8 — Diferencia fundamental: Artesano vs Asalariado

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["artesano", "produccion", "medios_produccion"]

tipo: mc
opciones_explicitas: ["El artesano posee sus herramientas y el asalariado no", "El artesano trabaja menos horas", "El asalariado es dueño de su tiempo", "No hay diferencia real"]

respuesta: "El artesano posee sus herramientas y el asalariado no"

enunciado: "Una diferencia clave entre el artesano independiente y el trabajador asalariado es que el artesano ___."

explicacion: |
  El artesano es dueño de sus medios de producción (herramientas, taller), mientras que el asalariado debe alquilar su fuerza de trabajo porque no posee los medios para producir por sí mismo.
```

### 9 — El proceso de intercambio

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["salario", "intercambio", "fuerza_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["El trabajador ofrece su fuerza de trabajo", "El capitalista ofrece un salario", "Se produce la mercancía", "El trabajador recibe su compensación"]

enunciado: "Ordene cronológicamente las etapas de la relación de producción asalariada:"

explicacion: |
  El ciclo comienza con el acuerdo de la fuerza de trabajo por un salario, seguido de la actividad productiva y culminando con la compensación económica.
respuesta_orden: ["El trabajador ofrece su fuerza de trabajo", "El capitalista ofrece un salario", "Se produce la mercancía", "El trabajador recibe su compensación"]
```

### 10 — Cálculo de la tasa de explotación (Concepto)

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "salario", "valor"]

variables:
  datos: [[100, 40], [150, 60], [200, 80]]
  idx: uno_de([0, 1, 2])
  valor_total: datos[idx][0]
  parte_salario: datos[idx][1]

tipo: completar
tolerancia_abs: 0
respuesta: valor_total - parte_salario

enunciado: "Si un trabajador genera un valor total de ${valor_total} en su jornada, pero su salario representa ${parte_salario}, ¿cuál es el valor de la plusvalía (la parte del valor que no se le paga al trabajador)?"

explicacion: |
  La plusvalía se calcula restando el salario del valor total producido: {valor_total} - {parte_salario} = {valor_total - parte_salario}.
```

### 11 — El cambio en el factor de producción

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["historia_economica", "clases_sociales"]

respuesta: "burguesía"
tipo: completar
respuestas_validas:
  - "burguesía"

enunciado: "En el sistema de capitalismo industrial, los dueños de los medios de producción (fábricas, maquinaria) pasaron a ser conocidos como la ___."

explicacion: |
  La burguesía industrial es la clase social que posee los medios de producción y emplea la fuerza de trabajo de otros para generar plusvalía.
```

### 12 — La nueva relación de dependencia

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["proletariado", "salario"]

variables:
  escenario: uno_de([["el control del tiempo de trabajo", "la subordinación del trabajador al ritmo de la máquina"], ["la propiedad de las herramientas", "la venta de la fuerza de trabajo a cambio de un salario"], ["la gestión de la producción", "la transformación del trabajo en una mercancía"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["la subordinación del trabajador al ritmo de la máquina", "la venta de la fuerza de trabajo a cambio de un salario", "la transformación del trabajo en una mercancía"]

enunciado: "La principal transformación en la relación laboral durante la Revolución Industrial fue ___."

explicacion: |
  El trabajador, al no poseer medios de producción, se ve obligado a vender su fuerza de trabajo como una mercancía a cambio de un salario para subsistir.
```

### 13 — El proceso de producción industrial

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["proceso_productivo"]

respuesta: "proletariado"
tipo: completar
respuestas_validas:
  - "proletariado"

enunciado: "Aquella clase social que solo posee su fuerza de trabajo para vender en el mercado laboral se denomina ___."

explicacion: |
  El proletariado es la clase trabajadora que, carente de medios de producción, depende exclusivamente de la venta de su capacidad de trabajo.
```

### 14 — Factores de la Revolución Industrial

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["causas", "transformacion"]

respuesta_orden: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]
tipo: ordenar
opciones_explicitas: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del sistema de trabajo asalariado industrial:"

explicacion: |
  Primero se requiere la acumulación de capital, luego el desplazamiento de la población rural a las ciudades (éxodo rural) y finalmente la implementación de la tecnología mecánica.
```

### 15 — El valor de la fuerza de trabajo

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor"]

variables:
  caso: uno_de([["el salario cubre solo el costo de subsistencia", "el excedente generado por el trabajador es apropiado por el capitalista"], ["el tiempo de trabajo es determinado por la necesidad humana", "el tiempo de trabajo es determinado por la necesidad de acumulación de capital"], ["la producción es artesanal y descentralizada", "la producción es masiva y centralizada en la fábrica"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["el excedente generado por el trabajador es apropiado por el capitalista", "el tiempo de trabajo es determinado por la necesidad de acumulación de capital", "la producción es masiva y centralizada en la fábrica"]

enunciado: "En el modelo de capitalismo industrial, la extracción de plusvalía se basa en ___."

explicacion: |
  La plusvalía surge cuando el valor creado por el trabajador durante su jornada excede el valor de su salario, siendo ese excedente capturado por el dueño de los medios de producción.
```

### 16 — El impacto de la jornada laboral

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["revolucion_industrial", "condiciones_laborales"]

enunciado: "Durante el auge de la Revolución Industrial, era común que los obreros enfrentaran jornadas laborales de aproximadamente ___ diarias, lo que derivaba en un agotamiento físico extremo."

respuesta: "14 horas"
tipo: mc
opciones_explicitas: ["14 horas", "16 horas", "12 horas"]

explicacion: |
  Las jornadas de 14 a 16 horas eran la norma en las fábricas textiles y minas, lo que impulsó la lucha por la jornada de 8 horas.
```

### 17 — El trabajo infantil en la industria

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_infantil", "historia_economica"]

enunciado: "El trabajo infantil fue una práctica extendida en sectores como las ___, donde los niños eran empleados debido a su pequeño tamaño y bajos costos."

respuesta: "minas y textiles"
tipo: mc
opciones_explicitas: ["minas y textiles", "ferrocarriles y minas", "textiles y minería"]

explicacion: |
  Los niños eran utilizados en minas para entrar en túneles estrechos y en fábricas textiles para reparar maquinaria en movimiento.
```

### 18 — Causas de la organización sindical

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["sindicatos", "lucha_de_clases"]

variables:
  causa_idx: uno_de([0, 1, 2])
  causas: ["la falta de regulación de salarios", "la falta de seguridad social", "la falta de límites a la jornada"]

enunciado: "La organización de los primeros sindicatos fue una respuesta directa a la precariedad, especialmente ante la ___."

respuesta: causas[causa_idx]
tipo: completar
respuestas_validas:
  - "la falta de regulación de salarios"
  - "la falta de seguridad social"
  - "la falta de límites a la jornada"

explicacion: |
  La unión de los trabajadores permitía negociar colectivamente para mejorar salarios y reducir las jornadas inhumanas.
```

### 19 — Evolución de la legislación laboral

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["leyes_laborales", "estado"]

variables:
  orden_legal: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

enunciado: "Ordena cronológicamente los hitos que marcaron la transición de la explotación absoluta hacia la regulación estatal del trabajo:"

pasos:
  - "Primero: Se prohibió el trabajo de niños menores de ciertas edades."
  - "Segundo: Se establecieron límites máximos de horas por día."
  - "Tercero: Se reconoció legalmente el derecho de los trabajadores a la huelga."

respuesta_orden: orden_legal
tipo: ordenar
opciones_explicitas: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

explicacion: |
  La regulación comenzó con la protección de los más vulnerables (niños), siguió con la gestión del tiempo (jornada) y culminó con el reconocimiento de la acción colectiva (huelga).
```

### 20 — El salario real en la era industrial

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["salario_real", "pobreza"]

variables:
  situacion: uno_de([["subsistencia", "subsistencia", "subsistencia"]])

enunciado: "En el modelo de capitalismo industrial temprano, el salario pagado a la clase obrera se caracterizaba por ser de ___."

respuesta: situacion[0]
tipo: mc
opciones_explicitas: ["subsistencia", "competitivo", "alto"]

explicacion: |
  El salario de subsistencia apenas cubría las necesidades básicas de alimentación y vivienda, manteniendo a la clase obrera en un ciclo de pobreza.
```

### 21 — Identificación de la relación de trabajo

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["relaciones_de_produccion", "historia_economica"]

variables:
  datos: [["Un individuo es propiedad de otro, siendo tratado como una mercancía sin derechos legales.", "esclavo"], ["Un campesino está vinculado a la tierra y debe entregar parte de su producción al señor feudal.", "siervo"], ["Un trabajador vende su fuerza de trabajo a cambio de un salario para subsistir.", "asalariado"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["esclavo", "siervo", "asalariado"]

enunciado: "Analice la siguiente situación: {datos[idx][0]}"

explicacion: |
  La respuesta correcta es {datos[idx][1]}. En el sistema de {datos[idx][1]}, la característica principal es la naturaleza del vínculo con el medio de producción y la libertad del trabajador.
```

### 22 — El concepto de fuerza de trabajo

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["plusvalia", "fuerza_de_trabajo"]

variables:
  datos: [["El trabajador vende su capacidad de trabajar por un tiempo determinado.", "fuerza de trabajo"], ["El trabajador vende el producto de su trabajo terminado.", "producto"], ["El trabajador vende su libertad personal.", "libertad"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "fuerza de trabajo"
  - "producto"
  - "libertad"

enunciado: "En el capitalismo industrial, lo que el trabajador vende al capitalista para obtener un salario es su ___."

explicacion: |
  En el sistema capitalista, el trabajador no vende el producto final, sino su {datos[idx][1]}.
```

### 23 — Evolución de las relaciones de producción

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["transicion_feudalismo_capitalismo"]

variables:
  secuencia: ["esclavismo", "feudalismo", "capitalismo"]
  idx: uno_de([0, 1, 2])

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["esclavismo", "feudalismo", "capitalismo"]

enunciado: "Ordene cronológicamente las siguientes etapas de la organización del trabajo en la historia económica:"

explicacion: |
  La secuencia histórica estándar es: {secuencia[0]}, luego {secuencia[1]} y finalmente {secuencia[2]}.
```

### 24 — El carácter del salario

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["valor_trabajo", "salario"]

variables:
  par: [["El salario es un pago por la propiedad de la persona.", "falso"], ["El salario es un pago por el uso de la capacidad de trabajo.", "verdadero"], ["El salario es una parte del producto que pertenece al trabajador.", "falso"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: mc
opciones_explicitas: ["falso", "verdadero"]

enunciado: "Determine si la siguiente afirmación es verdadera o falsa: {par[idx][0]}"

explicacion: |
  La respuesta es {par[idx][1]}. En el trabajo asalariado, el capitalista paga por el uso de la capacidad de trabajo, no por la propiedad del individuo.
```

### 25 — Diferencia fundamental

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["propiedad_medios_produccion"]

variables:
  comparacion: [["El siervo tiene acceso limitado a la tierra pero no es propiedad.", "libertad_limitada"], ["El esclavo es propiedad total del amo.", "propiedad_total"], ["El asalariado es dueño de su fuerza de trabajo pero no de los medios.", "autonomia_parcial"]]
  idx: uno_de([0, 1, 2])

respuesta: comparacion[idx][1]
tipo: completar
respuestas_validas:
  - "libertad_limitada"
  - "propiedad_total"
  - "autonomia_parcial"

enunciado: "La diferencia fundamental en el caso del esclavo es su ___."

explicacion: |
  Según el escenario, la característica del esclavo es la {comparacion[idx][1]}.
```
