# Examen jefe — [PENDIENTE #766]

> Logro #766. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **116 preguntas totales** en 5/5 secciones.

---

## Sección: blockchain-claves-wallet (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué resuelve una blockchain, sin depender de ningún banco ni autoridad central?"
tipo: mc
opciones_explicitas:
  - "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"
  - "Calcular automáticamente el precio de cualquier producto"
  - "Reemplazar completamente la necesidad de tener una clave de acceso"
respuesta: "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"

explicacion: |
  Es la idea central: un registro confiable sin autoridad central
  única.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un \"bloque\" en una blockchain?"
tipo: mc
opciones_explicitas:
  - "Un grupo de transacciones confirmadas en un período de tiempo"
  - "Una sola transacción individual"
  - "El nombre de una wallet"
respuesta: "Un grupo de transacciones confirmadas en un período de tiempo"

explicacion: |
  Cada bloque agrupa varias transacciones a la vez.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué los bloques forman una \"cadena\"?"
tipo: mc
opciones_explicitas:
  - "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"
  - "Porque están ordenados alfabéticamente"
  - "Porque cada bloque contiene una copia completa de todos los bloques anteriores"
respuesta: "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"

explicacion: |
  El enlace es, literalmente, el hash del bloque previo guardado
  dentro del bloque nuevo.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un hash?"
tipo: mc
opciones_explicitas:
  - "El resultado de una función matemática que actúa como huella digital única de unos datos"
  - "Una contraseña que elige el usuario"
  - "El nombre de una criptomoneda en particular"
respuesta: "El resultado de una función matemática que actúa como huella digital única de unos datos"

explicacion: |
  Es la pieza que permite detectar si algo cambió: mismos datos,
  mismo hash; datos distintos, hash distinto.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los mismos datos de entrada siempre producen exactamente el mismo hash."

explicacion: |
  Es una propiedad fundamental de las funciones de hash: son
  deterministas.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar un solo carácter de los datos de entrada cambia el hash resultante por completo, no de forma parecida."

explicacion: |
  Es lo que hace que un hash sirva para detectar cualquier alteración,
  por mínima que sea.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué es tan difícil alterar una transacción registrada en un bloque viejo de una blockchain activa?"
tipo: mc
opciones_explicitas:
  - "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"
  - "Porque está prohibido por una ley específica en todos los países"
  - "Porque cada transacción tiene una contraseña individual distinta"
respuesta: "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"

explicacion: |
  El encadenamiento de hashes es lo que hace tan costoso alterar el
  pasado.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave privada?"
tipo: mc
opciones_explicitas:
  - "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"
  - "Un número que se comparte libremente para recibir fondos"
  - "El nombre de usuario dentro de una wallet"
respuesta: "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"

explicacion: |
  Es la mitad SECRETA del par de claves.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave pública?"
tipo: mc
opciones_explicitas:
  - "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"
  - "La misma clave privada, sólo que escrita en otro formato"
  - "Una clave que cambia en cada transacción"
respuesta: "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"

explicacion: |
  Es la mitad PÚBLICA del par: se puede compartir sin comprometer la
  clave privada.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De la clave privada se puede calcular la clave pública, pero no existe una forma práctica de calcular la clave privada a partir de la pública."

explicacion: |
  Es justamente lo que permite compartir la clave pública sin riesgo:
  la relación no se puede invertir en la práctica.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Para qué sirve firmar una transacción con la clave privada?"
tipo: mc
opciones_explicitas:
  - "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"
  - "Para ocultar el monto de la transacción a toda la red"
  - "Para reducir el tamaño del bloque"
respuesta: "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"

explicacion: |
  La verificación se hace con la clave pública, sin que la clave
  privada se revele en ningún momento.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al firmar y verificar una transacción, la clave privada nunca se revela ni se comparte en ningún momento del proceso."

explicacion: |
  Es lo que hace segura a la criptografía asimétrica: se prueba
  posesión sin exponer el secreto.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué guarda realmente una wallet?"
tipo: mc
opciones_explicitas:
  - "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"
  - "Las monedas físicas, como si fuera una caja fuerte"
  - "Una copia completa de toda la blockchain"
respuesta: "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"

explicacion: |
  No "contiene" criptomonedas como objetos: guarda la llave que
  prueba la propiedad sobre lo ya registrado en la cadena.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿De dónde se deriva la \"dirección\" de una wallet, la que se comparte para recibir fondos?"
tipo: mc
opciones_explicitas:
  - "De la clave pública"
  - "De la clave privada, directamente"
  - "Del nombre elegido por el usuario"
respuesta: "De la clave pública"

explicacion: |
  La dirección es una versión más corta y manejable, derivada de la
  clave pública — nunca de la privada.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "Si alguien pierde su clave privada y no guardó ninguna copia de respaldo, ¿qué puede hacer para recuperar el acceso?"
tipo: mc
opciones_explicitas:
  - "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"
  - "Pedirle al soporte técnico de la blockchain que la resetee"
  - "Esperar a que la red le asigne una clave nueva automáticamente"
respuesta: "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"

explicacion: |
  Es la contracara directa de no depender de una autoridad central:
  nadie tiene el poder de restaurar el acceso por vos.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No depender de un banco ni de ninguna autoridad central tiene como contracara que perder la clave privada es, en la práctica, irreversible."

explicacion: |
  Es la misma característica (sin autoridad central) vista desde su
  ventaja y desde su riesgo.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "¿Cuál es la diferencia central entre cómo un banco tradicional lleva su registro de cuentas y cómo lo hace una blockchain?"
tipo: mc
opciones_explicitas:
  - "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"
  - "El banco usa hashes y la blockchain no"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"

explicacion: |
  Es la diferencia estructural central entre un sistema centralizado y
  uno descentralizado.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "Alguien te pide su clave para poder enviarte fondos a su wallet. ¿Qué clave te debería compartir?"
tipo: mc
opciones_explicitas:
  - "Su clave pública (o la dirección derivada de ella)"
  - "Su clave privada"
  - "Ninguna: no hace falta ninguna clave para recibir fondos"
respuesta: "Su clave pública (o la dirección derivada de ella)"

explicacion: |
  La clave privada nunca se comparte, ni siquiera para recibir
  fondos: para eso alcanza con la pública.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se procesa una transacción en una blockchain."
opciones_explicitas:
  - "La transacción se agrupa junto a otras en un bloque nuevo"
  - "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"
  - "El emisor firma la transacción con su clave privada"
  - "Los nodos de la red verifican la firma con la clave pública del emisor"
respuesta_orden: ["El emisor firma la transacción con su clave privada", "Los nodos de la red verifican la firma con la clave pública del emisor", "La transacción se agrupa junto a otras en un bloque nuevo", "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"]

explicacion: |
  Cada paso depende del anterior: sin firma no hay verificación, sin
  verificación no se agrupa en un bloque válido, y el bloque recién
  se encadena al final.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain"]

tipo: completar
enunciado: "Completá: cada bloque nuevo incluye el ___ (huella digital única) del bloque anterior, formando así la cadena."
respuestas_validas:
  - "hash"

explicacion: |
  Es el mecanismo exacto que enlaza un bloque con el siguiente.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección de una wallet es una versión derivada (más corta) de la clave pública, no la clave pública en sí misma sin ningún procesamiento."

explicacion: |
  Son conceptos relacionados pero distintos: la dirección se calcula
  a partir de la clave pública.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una blockchain usa hashes encadenados para hacer difícil alterar el pasado, y claves pública/privada para probar la propiedad de una transacción sin depender de ningún banco."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: capitalismo-industrial-trabajo-asalariado (25 preguntas)

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

## Sección: contratos-inteligentes (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un contrato inteligente (smart contract)?"
tipo: mc
opciones_explicitas:
  - "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"
  - "Un documento en PDF firmado digitalmente"
  - "Un tipo especial de wallet"
respuesta: "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre un contrato tradicional en papel y un contrato inteligente?"
tipo: mc
opciones_explicitas:
  - "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"
  - "El contrato inteligente no tiene ninguna condición \"si-entonces\""
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"

explicacion: |
  Es la ventaja central: elimina la necesidad de reclamar activamente
  el cumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente usa la misma lógica \"si-entonces\" (condicional) que existe en cualquier lenguaje de programación, sólo que corre distribuido en la blockchain."

explicacion: |
  No hay ninguna lógica nueva: es un condicional de programación
  común, ejecutado en un lugar distinto.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un comprador deposita dinero en un contrato inteligente, que lo libera al vendedor recién cuando el comprador confirma haber recibido el producto. ¿Quién tiene el control de liberar ese dinero antes de tiempo?"
tipo: mc
opciones_explicitas:
  - "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"
  - "El vendedor, en cualquier momento"
  - "El comprador, en cualquier momento"
respuesta: "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"

explicacion: |
  Es justamente el punto: ninguna de las partes controla la ejecución,
  sólo la condición programada la dispara.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué información puede ver un contrato inteligente, por su cuenta, sin ninguna ayuda externa?"
tipo: mc
opciones_explicitas:
  - "Sólo información que ya está dentro de la blockchain"
  - "Cualquier información del mundo real, sin restricciones"
  - "Sólo el saldo de la wallet de su creador"
respuesta: "Sólo información que ya está dentro de la blockchain"

explicacion: |
  No tiene forma nativa de saber qué pasa fuera de la blockchain.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"oráculo\", en el contexto de los contratos inteligentes?"
tipo: mc
opciones_explicitas:
  - "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"
  - "Otro nombre para la clave privada de una wallet"
  - "El nombre técnico del creador de un contrato inteligente"
respuesta: "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"

explicacion: |
  Es el puente entre el mundo real (fuera de la blockchain) y el
  contrato inteligente (que sólo ve datos dentro de ella).
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un oráculo informa mal un dato del mundo real, el contrato inteligente ejecuta la acción igual, aunque el dato real haya sido otro."

explicacion: |
  El contrato confía ciegamente en lo que le informa el oráculo: es su
  punto más débil.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un seguro de vuelo automático paga a un pasajero apenas se confirma que su vuelo se retrasó más de 3 horas. ¿Qué necesita el contrato inteligente para saber que el vuelo se retrasó?"
tipo: mc
opciones_explicitas:
  - "Un oráculo que le informe ese dato del mundo real"
  - "Nada especial: lo sabe automáticamente sin ayuda externa"
  - "Que el propio pasajero le escriba el código de la aerolínea"
respuesta: "Un oráculo que le informe ese dato del mundo real"

explicacion: |
  El retraso de un vuelo es un dato del mundo real, fuera de la
  blockchain, así que hace falta un oráculo para traerlo.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué significa que un contrato inteligente sea, en general, \"inmutable\" una vez publicado?"
tipo: mc
opciones_explicitas:
  - "Que su código no se puede modificar después, ni siquiera por quien lo creó"
  - "Que nunca puede tener errores de programación"
  - "Que sólo lo puede usar una persona a la vez"
respuesta: "Que su código no se puede modificar después, ni siquiera por quien lo creó"

explicacion: |
  Es lo que garantiza que ninguna parte lo altere a su favor después
  de acordado.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un contrato inteligente tiene un error de programación, ese error también queda fijo para siempre y se ejecuta igual que si fuera la regla correcta."

explicacion: |
  Es la contracara de la inmutabilidad: protege de manipulación
  externa, pero no corrige errores propios.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente elimina la necesidad de un intermediario que obligue a cumplir el acuerdo, porque el cumplimiento está en el propio código."

explicacion: |
  Es la ventaja central del mecanismo: el código reemplaza al tercero
  que hace cumplir un contrato tradicional.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En un contrato de vesting que libera tokens automáticamente cada mes sin que nadie apriete un botón, ¿cuál es la \"condición\" (el \"si\") de la regla?"
tipo: mc
opciones_explicitas:
  - "Que haya pasado un mes desde la última liberación"
  - "Que el dueño de los tokens los pida expresamente"
  - "Que el precio del token suba"
respuesta: "Que haya pasado un mes desde la última liberación"

explicacion: |
  El paso del tiempo es la condición programada; la liberación
  automática es la acción que dispara.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del flujo de un contrato inteligente de depósito en garantía (escrow)."
opciones_explicitas:
  - "El contrato libera automáticamente el dinero al vendedor"
  - "El contrato verifica que se cumplió la condición programada"
  - "El comprador deposita el dinero en el contrato"
  - "El comprador confirma que recibió el producto"
respuesta_orden: ["El comprador deposita el dinero en el contrato", "El comprador confirma que recibió el producto", "El contrato verifica que se cumplió la condición programada", "El contrato libera automáticamente el dinero al vendedor"]

explicacion: |
  Cada paso habilita al siguiente: sin depósito no hay nada que
  liberar, sin confirmación no se cumple la condición.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al correr sobre una blockchain pública, el código de un contrato inteligente puede ser revisado por cualquiera antes de interactuar con él."

explicacion: |
  Es una consecuencia directa de correr sobre una red pública y
  transparente.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Un contrato inteligente elimina la necesidad de confiar en un juez o tribunal para hacerlo cumplir. ¿En qué SÍ hay que confiar igual, cuando el contrato depende de un dato del mundo real?"
tipo: mc
opciones_explicitas:
  - "En que el oráculo que le informa ese dato sea confiable"
  - "En nada: un contrato inteligente nunca depende de confiar en nadie"
  - "En el banco central del país donde vive el comprador"
respuesta: "En que el oráculo que le informa ese dato sea confiable"

explicacion: |
  El oráculo reintroduce un punto de confianza que el resto del
  sistema había eliminado.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la relación entre un contrato inteligente y una blockchain?"
tipo: mc
opciones_explicitas:
  - "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"
  - "Son exactamente lo mismo, dos nombres para una sola cosa"
  - "La blockchain es un tipo de contrato inteligente"
respuesta: "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"

explicacion: |
  La blockchain es la base; el contrato inteligente es una aplicación
  que se construye encima de ella.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente puede funcionar entre dos partes que no se conocen ni confían entre sí, porque la confianza está puesta en el código, no en la otra persona."

explicacion: |
  Es una de las ventajas centrales: reemplaza la confianza personal
  por confianza en un código verificable.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: un contrato inteligente ejecuta la regla \"si ___ (se cumple la condición), entonces ocurre la acción\", de forma automática."
respuestas_validas:
  - "pasa x"
  - "se cumple x"
  - "se cumple la condición"

explicacion: |
  Es la estructura básica de cualquier contrato inteligente.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En el seguro de vuelo automático, ¿el pasajero tiene que reclamar activamente para cobrar, como en un seguro tradicional?"
tipo: mc
opciones_explicitas:
  - "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"
  - "Sí: siempre hay que llenar un formulario de reclamo"
  - "Sí, pero sólo si el retraso fue de más de 24 horas"
respuesta: "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"

explicacion: |
  Es la diferencia central frente a un seguro tradicional: se ejecuta
  solo, sin reclamo.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un token que se libera de a poco con el paso del tiempo (vesting) es un ejemplo de contrato inteligente que se ejecuta sin que nadie tenga que intervenir manualmente cada vez."

explicacion: |
  El paso del tiempo es la condición; la liberación periódica es la
  acción automática.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente es una regla \"si-entonces\" escrita en código, que corre sobre una blockchain y se ejecuta sola, sin intermediario — con el límite de que sólo ve datos del mundo real a través de un oráculo."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: costo-marginal (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = C'(q) = {2 * a}q + {b}"
  - "Cmg({q}) = {2 * a}×{q} + {b} = {2 * a * q + b}"

explicacion: |
  El costo fijo ({costo_fijo}) desaparece al derivar — el costo marginal
  sólo refleja la parte variable.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 5)
  b: random(5, 20)
  costo_fijo: random(200, 800)
  q: random(1, 20)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

explicacion: |
  Cmg(q) = {2 * a}q + {b}, evaluado en q={q}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  costo_fijo_1: random(100, 500)
  costo_fijo_2: random(501, 1000)
  a: random(1, 5)
  b: random(5, 20)
  q: random(1, 20)

respuesta: verdadero
tipo: vf

enunciado: "Dos empresas tienen la misma parte variable de costo ({a}q² + {b}q), pero costos fijos distintos ({costo_fijo_1} y {costo_fijo_2}). ¿Tienen el mismo costo marginal en q={q}?"

explicacion: |
  El costo fijo se anula al derivar — sólo importa la parte variable
  para el costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {b}q + {costo_fijo} (costo variable lineal). ¿Cuál es el costo marginal, para cualquier q?"

explicacion: |
  Cmg(q) = {b}, constante — no depende de q cuando el costo variable es
  lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(5, 20)
  costo_fijo: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo} (con a>0). ¿Es creciente el costo marginal a medida que aumenta q?"

explicacion: |
  Cmg(q)={2 * a}q+{b} es una función lineal creciente en q, porque el
  coeficiente {2 * a} es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 20)
  q1: random(1, 10)
  q2: random(11, 30)

respuesta: ((2 * a * q2 + b) > (2 * a * q1 + b))
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. ¿Es mayor el costo marginal en q={q2} que en q={q1}?"

explicacion: |
  Con a positivo, el costo marginal crece con q — producir más caro cada
  vez la unidad siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es, aproximadamente, cuánto cuesta producir una unidad adicional."

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q) = C'(q), la derivada de la función de costo total."

explicacion: |
  Es la definición formal, ya usada en las cuentas anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal (Cmg=C') y el costo promedio (Cme=C/q) son exactamente el mismo cálculo."

explicacion: |
  Son cálculos distintos: el marginal mira la próxima unidad; el
  promedio reparte el costo total entre todas las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["costo_promedio"]

variables:
  q: random(2, 10)
  m: random(5, 20)
  k: random(1, 20)
  costo_fijo: m * q
  costo_variable_total: k * q

respuesta: m + k
tipo: input
tolerancia_abs: 0

enunciado: "Producir {q} unidades cuesta un total de {costo_fijo + costo_variable_total} (fijo {costo_fijo} + variable {costo_variable_total}). ¿Cuál es el costo PROMEDIO por unidad?"

explicacion: |
  Cme = C(q)/q — reparte el costo total entre todas las unidades, algo
  distinto del costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal incluye una parte proporcional de los costos fijos de la empresa."

explicacion: |
  No — el costo marginal sólo refleja el costo variable, porque la
  derivada de una constante (el costo fijo) es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q)=C'(q) es una aproximación de C(q+1)−C(q) (el costo real y exacto de producir una unidad más) — para funciones suaves, se parecen mucho, pero no son matemáticamente idénticos."

explicacion: |
  La derivada es un límite; C(q+1)−C(q) es una diferencia discreta —
  ideas relacionadas, no la misma cuenta exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(5, 15)
  q: random(5, 20)

respuesta: a * (2 * q + 1) + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q (sin costo fijo). ¿Cuánto vale C({q}+1) − C({q}) (el costo exacto de la unidad {q}+1)?"

pasos:
  - "C(q+1)−C(q) = {a}(2q+1) + {b}, evaluado en q={q}"

explicacion: |
  Esta es la diferencia EXACTA, distinta (aunque parecida) al costo
  marginal Cmg({q}) = {2 * a * q + b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal decrece con la cantidad producida, significa que cada unidad adicional cuesta menos que la anterior (economías de escala)."

explicacion: |
  Es lo opuesto a los rendimientos decrecientes — producir más se vuelve
  más eficiente por unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)
  real: 2 * a * q + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Es correcto que el costo marginal en q={q} sea {propuesto}?"

explicacion: |
  El valor correcto es Cmg({q}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(10, 30)
  q: random(1, 20)
  precio_venta: random(50, 200)

respuesta: ((2 * a * q + b) < precio_venta)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. El precio de venta de cada unidad es {precio_venta}. En q={q}, ¿conviene producir una unidad más (el costo marginal es menor que el precio de venta)?"

explicacion: |
  Mientras el costo marginal sea menor que el precio de venta, producir
  una unidad más aumenta la ganancia.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal supera al precio de venta, producir una unidad más reduce la ganancia total de la empresa, en vez de aumentarla."

explicacion: |
  Esa unidad cuesta más de lo que se puede vender — es un cálculo que
  conecta con `../../matematica/optimizacion/`: el punto óptimo de
  producción es donde Cmg se iguala al precio (o al ingreso marginal).
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = 3q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q=0?"

explicacion: |
  Cmg(0) = 6×0+{b} = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal se mide en unidades de moneda por unidad producida (por ejemplo, pesos por unidad), no en pesos totales."

explicacion: |
  Es una TASA de cambio del costo respecto a la cantidad, no un costo
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["evaluar"]

variables:
  a: random(1, 3)
  b: random(1, 5)
  c: random(5, 20)
  q: random(1, 10)

respuesta: 3 * a * q ^ 2 + 2 * b * q + c
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q³ + {b}q² + {c}q (costo con rendimientos que cambian). ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = {3 * a}q² + {2 * b}q + {c}"

explicacion: |
  Con un término cúbico en el costo, el costo marginal mismo ya no es
  lineal — cambia de forma más compleja con q.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la mayoría de los modelos económicos razonables, el costo marginal es positivo — producir más siempre agrega algo de costo (aunque sea poco)."

explicacion: |
  Sería inusual (aunque matemáticamente posible en un modelo mal
  planteado) que producir más redujera el costo total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Así como el costo marginal es la derivada del costo total, el 'ingreso marginal' (no cubierto en este módulo) sería la derivada del ingreso total — la misma idea aplicada al otro lado de la cuenta de una empresa."

explicacion: |
  Es el mismo patrón de "razón de cambio" aplicado a otra magnitud
  económica — la comparación de Cmg con el precio de venta ya adelantó
  esta idea.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  b: random(10, 30)
  q: random(50, 100)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "Una fábrica cerca de su capacidad máxima tiene C(q) = {a}q² + {b}q + costo fijo (el término cuadrático refleja que cuesta cada vez más producir cerca del límite). ¿Cuál es el costo marginal al producir la unidad {q}?"

explicacion: |
  Es un ejemplo real de por qué el costo marginal creciente es común
  cerca de la capacidad instalada de una planta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal en un punto es, geométricamente, la pendiente de la recta tangente al gráfico de C(q) en ese punto."

explicacion: |
  Es la misma interpretación geométrica de la derivada ya vista en
  `../../matematica/derivada/`.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)
  propuesto: uno_de([0, 1]) * costo_fijo + b

respuesta: (propuesto == b)
tipo: vf

enunciado: "C(q) = {b}q + {costo_fijo}. ¿Es correcto que el costo marginal sea {propuesto}?"

explicacion: |
  El costo marginal correcto es {b} — si el número propuesto incluye el
  costo fijo, está mal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es un ejemplo de cómo la derivada, entendida como 'razón de cambio', se aplica directamente a decisiones económicas reales de producción."

explicacion: |
  Es el mismo concepto matemático de `../../matematica/derivada/`,
  ahora con significado económico.
```

## Sección: debe-haber-balance (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el activo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa posee: bienes y derechos"
  - "Todo lo que la empresa debe a terceros"
  - "La ganancia del último mes"
respuesta: "Todo lo que la empresa posee: bienes y derechos"

explicacion: |
  Incluye dinero en caja, mercadería, inmuebles, y créditos a favor.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el pasivo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa debe a terceros: obligaciones y deudas"
  - "Todo lo que la empresa posee"
  - "El total de ventas del período"
respuesta: "Todo lo que la empresa debe a terceros: obligaciones y deudas"

explicacion: |
  Incluye préstamos, deudas con proveedores, sueldos por pagar.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el patrimonio neto de una empresa?"
tipo: mc
opciones_explicitas:
  - "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"
  - "El total de dinero en efectivo en caja"
  - "El total de mercadería en stock"
respuesta: "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"

explicacion: |
  Es la parte del activo que efectivamente le pertenece al dueño, libre
  de deudas.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable fundamental es: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Siempre tiene que estar en equilibrio, sin importar cuántos
  movimientos haya.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un pasivo de ${pasivo}. ¿Cuál es su patrimonio neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 2000) * 1000
  patrimonio_neto: random(500, 3000) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un pasivo de ${pasivo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su activo?"

explicacion: |
  Se despeja de la ecuación contable: Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000

respuesta: activo - patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su pasivo?"

explicacion: |
  Se despeja: Pasivo = Activo - Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Debe\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la izquierda"
  - "La columna de la derecha"
  - "El resultado final de la cuenta"
respuesta: "La columna de la izquierda"

explicacion: |
  Es una convención de nomenclatura, no significa literalmente \"lo que
  se debe\".
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Haber\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la derecha"
  - "La columna de la izquierda"
  - "El total de gastos del mes"
respuesta: "La columna de la derecha"

explicacion: |
  Es la columna opuesta al Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Debe\" y \"Haber\" son nombres técnicos de dos columnas contables, no significan literalmente \"lo que se debe\" y \"lo que se tiene\"."

explicacion: |
  Es una convención histórica del lenguaje contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo aumentan cuando se anota un importe en su Debe."

explicacion: |
  Es la convención básica para las cuentas de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo disminuyen cuando se anota un importe en su Haber."

explicacion: |
  Es la contraparte de que el Activo aumente por el Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Pasivo aumentan cuando se anota un importe en su Haber — al revés que el Activo."

explicacion: |
  Es esta regla \"opuesta\" entre Activo y Pasivo la que mantiene la
  ecuación contable equilibrada.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Patrimonio Neto aumentan cuando se anota un importe en su Haber, igual que las de Pasivo."

explicacion: |
  Pasivo y Patrimonio Neto siguen la misma convención, opuesta a la del
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_debe: random(500, 3000) * 1000
  total_haber: random(100, 2000) * 1000

respuesta: total_debe - total_haber
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" (de Activo) tiene un total de ${total_debe} en el Debe y ${total_haber} en el Haber. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Activo, el saldo es Debe menos Haber.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_haber: random(500, 3000) * 1000
  total_debe: random(100, 2000) * 1000

respuesta: total_haber - total_debe
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Préstamos a pagar\" (de Pasivo) tiene un total de ${total_haber} en el Haber y ${total_debe} en el Debe. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Pasivo, el saldo es Haber menos Debe — al revés que
  en una cuenta de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  activo_a: random(1000, 3000) * 1000
  pasivo_a: random(500, 900) * 1000
  activo_b: random(1000, 3000) * 1000
  pasivo_b: random(1500, 2900) * 1000

respuesta: ((activo_a - pasivo_a) > (activo_b - pasivo_b))
tipo: vf

enunciado: "Empresa A: activo ${activo_a}, pasivo ${pasivo_a}. Empresa B: activo ${activo_b}, pasivo ${pasivo_b}. ¿La empresa A tiene mayor patrimonio neto que la B?"

explicacion: |
  Hay que calcular el patrimonio neto de cada una (activo menos pasivo)
  antes de comparar — el activo solo no alcanza.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación Activo = Pasivo + Patrimonio Neto tiene que estar en equilibrio siempre, después de cada movimiento contable."

explicacion: |
  Si no se cumple, hay un error en el registro contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estas empresas de menor a mayor patrimonio neto."
opciones_explicitas:
  - "Activo $2.000.000, Pasivo $1.800.000"
  - "Activo $2.000.000, Pasivo $500.000"
  - "Activo $2.000.000, Pasivo $1.200.000"
respuesta_orden: ["Activo $2.000.000, Pasivo $1.800.000", "Activo $2.000.000, Pasivo $1.200.000", "Activo $2.000.000, Pasivo $500.000"]

explicacion: |
  A igual activo, menor pasivo significa mayor patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000
  correcto: activo - pasivo
  error: uno_de([0, 0, 0, 100000, -100000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Activo ${activo}, pasivo ${pasivo}, patrimonio neto informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el pasivo del activo y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000
  pasivo: activo - patrimonio_neto

tipo: completar
enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. Completá: ___ (pasivo) = {activo} - {patrimonio_neto}."
respuestas_validas:
  - pasivo

explicacion: |
  Se despeja el pasivo de la ecuación contable fundamental.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Activo = Pasivo + Patrimonio Neto es la ecuación que siempre debe cumplirse; Debe y Haber son las dos columnas técnicas de una cuenta, con reglas de aumento opuestas entre Activo y Pasivo/Patrimonio Neto."

explicacion: |
  Es la idea central de todo el tema.
```

