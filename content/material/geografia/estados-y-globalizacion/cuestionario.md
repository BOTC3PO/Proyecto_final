# Geografia — estados y globalizacion (cuestionario, 22 preguntas VBLang)

> Tema: `geografia/estados-y-globalizacion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["estado", "definicion", "soberania"]

variables:
  paises: uno_de(["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay"])

respuesta: "territorio, poblacion y gobierno"
tipo: completar

enunciado: "Un estado se define tradicionalmente por tres elementos fundamentales: un {paises} (como ejemplo de territorio), una población y un gobierno que ejerce la soberanía. ¿Cuáles son esos tres pilares?"

explicacion: |
  El estado es una entidad política con territorio definido, población residente y un gobierno que ejerce la autoridad máxima (soberanía) dentro de esas fronteras.
```

### 2 — pregunta 2

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["actores", "corporaciones", "poder"]

variables:
  nivel_poder: uno_de(["supera", "iguala", "inferior"])

respuesta: "corporaciones"
tipo: completar

enunciado: "Las grandes {nivel_poder} transnacionales a veces desplazan al poder de los gobiernos nacionales en la toma de decisiones económicas globales."

explicacion: |
  Las grandes corporaciones multinacionales tienen un poder económico y político que, en muchos casos, supera o iguala al de los gobiernos nacionales, influyendo en políticas públicas.
```

### 3 — pregunta 3

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["interdependencia", "red", "conexion"]

variables:
  tipo_flujo: uno_de(["informacion", "capitales", "personas"])

respuesta: "red"
tipo: completar

enunciado: "La globalización ha creado una {tipo_flujo} de interdependencia donde lo local y lo global se entrelazan constantemente, desdibujando las fronteras tradicionales del poder."

explicacion: |
  La globalización no es solo un flujo lineal, sino una red compleja de interdependencia donde los eventos locales tienen repercusiones globales y viceversa.
```

### 4 — pregunta 4

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["fmi", "condicionalidad", "deuda"]

variables:
  sector_afectado: uno_de(["salud", "educacion", "infraestructura"])

respuesta: "ajustar_presupuestos"
tipo: completar

enunciado: "La 'trampa de la deuda' o condicionalidad obliga a los países a {sector_afectado} para obtener estabilidad financiera, afectando servicios públicos como la {sector_afectado}."

explicacion: |
  Al pedir préstamos internacionales, los países suelen aceptar condiciones (condicionalidad) que les obligan a recortar gastos públicos en áreas sensibles como salud o educación.
```

### 5 — pregunta 5

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["rol", "intermediario", "cambio"]

variables:
  rol_antiguo: uno_de(["actor_isolado", "centro_absoluto", "unico_actor"])

respuesta: "intermediario"
tipo: completar

enunciado: "El rol del estado ha cambiado de ser un {rol_antiguo} a convertirse en un intermediario entre las fuerzas globales y la realidad local."

explicacion: |
  El estado no ha desaparecido, pero su función ha evolucionado. Ahora actúa como un puente o filtro entre las presiones externas (globalización) y las necesidades internas.
```

### 6 — pregunta 6

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "internet", "movimientos_sociales"]

variables:
  mecanismo: uno_de(["transcender_fronteras", "crear_economia", "imponer_leyes"])

respuesta: "transcender_fronteras"
tipo: completar

enunciado: "Internet y las redes sociales permiten que los movimientos sociales {mecanismo}, presionando a gobiernos que antes operaban con total impunidad."

explicacion: |
  La tecnología ha democratizado la organización política, permitiendo que la presión social cruce fronteras y afecte la legitimidad de los gobiernos nacionales.
```

### 7 — pregunta 7

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["onu", "fmi", "omc", "organismos"]

variables:
  organismo: uno_de(["onu", "fmi", "omc"])

respuesta: "autonomia"
tipo: completar

enunciado: "Para participar en el comercio global o resolver conflictos, los estados deben ceder parte de su {organismo} a organismos internacionales como la ONU, el FMI o la OMC."

explicacion: |
  La participación en la gobernanza global requiere sacrificar parte de la autonomía nacional a favor de normas y decisiones colectivas.
```

### 8 — pregunta 8

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["soberania", "negociada", "concepto"]

variables:
  tipo_soberania: uno_de(["absoluta", "limitada", "total"])

respuesta: "limitada"
tipo: completar

enunciado: "Hoy en día, la soberanía se entiende más como una soberanía {tipo_soberania} o negociada, donde el estado debe ceder autonomía."

explicacion: |
  La soberanía absoluta es un ideal histórico; la realidad contemporánea es una soberanía relativa que depende de la capacidad de negociación internacional.
```

### 9 — pregunta 9

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["fronteras", "poder", "desdibujamiento"]

variables:
  efecto: uno_de(["fortalecen", "desdibujan", "eliminan"])

respuesta: "desdibujan"
tipo: completar

enunciado: "La circulación global de información y capitales tiende a {efecto} las fronteras tradicionales del poder estatal."

explicacion: |
  Aunque las fronteras físicas existen, su eficacia como barreras de control político y económico se ha reducido significativamente.
```

### 10 — pregunta 10

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["poder_legal", "monopolio", "estado"]

variables:
  accion: uno_de(["declarar_guerra", "emitir_moneda", "garantizar_derechos"])

respuesta: "estados"
tipo: completar

enunciado: "Los {accion} son roles que los estados siguen ejerciendo como únicos actores legales, diferenciándolos de las corporaciones."

explicacion: |
  La legitimidad legal y la capacidad coercitiva final residen en el estado, no en ningún otro actor privado o internacional.
```

### 11 — pregunta 11

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["informacion", "circulacion", "escala"]

variables:
  escala: uno_de(["local", "nacional", "planetaria"])

respuesta: "planetaria"
tipo: completar

enunciado: "La globalización implica la circulación de mercancías, información, capitales y culturas a escala {escala}."

explicacion: |
  La característica definitoria de la globalización es la operación a escala mundial, superando las limitaciones geográficas tradicionales.
```

### 12 — pregunta 12

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["tension", "prosperidad", "marginacion"]

variables:
  resultado: uno_de(["prosperidad", "marginacion", "estabilidad"])

respuesta: "prosperan"
tipo: completar

enunciado: "Entender la tensión entre lo local y lo global es clave para analizar por qué algunos países {resultado} y otros quedan marginados."

explicacion: |
  La capacidad de un estado para navegar la globalización determina su éxito o fracaso económico y social.
```

### 13 — pregunta 13

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "nuevo_poder", "internet"]

variables:
  esfera: uno_de(["economica", "politica", "social"])

respuesta: "nuevas_esferas"
tipo: completar

enunciado: "La tecnología ha creado {esfera} de poder que operan fuera del control directo de los gobiernos nacionales."

explicacion: |
  El ciberespacio y las plataformas digitales forman nuevas esferas de influencia que los estados intentan regular pero no controlan totalmente.
```

### 14 — pregunta 14

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["soberania", "definicion", "autoridad"]

variables:
  autoridad: uno_de(["máxima", "mínima", "compartida"])

respuesta: "máxima"
tipo: completar

enunciado: "Históricamente, la soberanía se definía como la autoridad {autoridad} para tomar decisiones dentro de las fronteras."

explicacion: |
  La definición clásica de soberanía implica la supremacía interna y la independencia externa, aunque hoy está matizada.
```

### 15 — pregunta 15

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["intermediario", "rol", "funcion"]

variables:
  fuerza: uno_de(["globales", "locales", "externas"])

respuesta: "intermediario"
tipo: completar

enunciado: "El estado actúa como un {fuerza} entre las fuerzas globales y la realidad local, filtrando y adaptando las presiones externas."

explicacion: |
  El estado no es pasivo; media, negocia y adapta las normas globales a la legislación local.
```

### 16 — pregunta 16

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "presion", "transnacional"]

variables:
  efecto: uno_de(["presionar", "apoyar", "ignorar"])

respuesta: "presionar"
tipo: completar

enunciado: "Los movimientos sociales transnacionales buscan {efecto} a gobiernos que operaban con impunidad, utilizando la visibilidad global."

explicacion: |
  La visibilidad global es una herramienta de poder para los movimientos sociales, obligando a los gobiernos a responder a estándares internacionales.
```

### 17 — pregunta 17

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["prestamo", "condicionalidad", "perdida"]

variables:
  condicion: uno_de(["economicas", "militares", "culturales"])

respuesta: "economicas"
tipo: completar

enunciado: "Al pedir un préstamo internacional, un país suele aceptar condiciones {condicion} que limitan sus políticas internas."

explicacion: |
  La condicionalidad financiera es el mecanismo principal mediante el cual se ejerce influencia sobre la política interna de los estados deudores.
```

### 18 — pregunta 18

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["cultura", "circulacion", "globalizacion"]

variables:
  elemento: uno_de(["mercancías", "personas", "culturas"])

respuesta: "culturas"
tipo: completar

enunciado: "La globalización no es solo circulación de mercancías, sino también de información, capitales, personas y {elemento} a escala planetaria."

explicacion: |
  El intercambio cultural es un componente clave de la globalización, a menudo generando debates sobre identidad y homogeneización.
```

### 19 — pregunta 19

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["historia", "soberania", "absoluta"]

variables:
  caracteristica: uno_de(["clara", "borrosa", "inexistente"])

respuesta: "absoluta"
tipo: completar

enunciado: "Históricamente, la soberanía se ejercía de forma casi {caracteristica} en el interior del país, con límites bien definidos."

explicacion: |
  El modelo westfaliano de estado-nación pretendía un control absoluto sobre su territorio, contraste con la realidad actual.
```

### 20 — pregunta 20

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["omc", "comercio", "participacion"]

variables:
  organismo: uno_de(["fmi", "omc", "onu"])

respuesta: "comercio"
tipo: completar

enunciado: "Los estados ceden autonomía a organismos como la OMC para participar en el {organismo} global."

explicacion: |
  La OMC establece las reglas del comercio internacional, limitando la capacidad de los estados para proteger sus mercados internos.
```

### 21 — pregunta 21

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["derechos", "garantia", "estado"]

variables:
  derecho: uno_de(["salud", "educacion", "seguridad"])

respuesta: "garantizar"
tipo: completar

enunciado: "Los estados siguen siendo los únicos actores con capacidad legal para {derecho} a sus ciudadanos."

explicacion: |
  La protección de los derechos humanos y ciudadanos sigue siendo la responsabilidad última del estado, aunque los organismos internacionales monitoricen su cumplimiento.
```

### 22 — pregunta 22

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["interdependencia", "local", "global"]

variables:
  relacion: uno_de(["entrelazan", "separan", "ignoran"])

respuesta: "entrelazan"
tipo: completar

enunciado: "La globalización ha creado una red donde lo local y lo global se {relacion} constantemente."

explicacion: |
  No hay una separación clara; lo local es afectado por lo global y viceversa, creando una dinámica compleja de influencia mutua.
```
