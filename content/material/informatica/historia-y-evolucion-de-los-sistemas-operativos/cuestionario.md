# Informatica — historia y evolucion de los sistemas operativos (cuestionario, 23 preguntas VBLang)

> Tema: `informatica/historia-y-evolucion-de-los-sistemas-operativos`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  rol: uno_de(["director_de_orquesta", "intermediario", "gestor"])

respuesta: "intermediario"
tipo: mc
opciones_explicitas: ["intermediario", "hardware", "aplicacion", "usuario"]

enunciado: "En la analogía del director de orquesta, el Sistema Operativo actúa principalmente como el {rol} entre el usuario y los componentes físicos de la computadora."

explicacion: |
  El SO no es el hardware ni el usuario, sino el software que gestiona la comunicación y los recursos, actuando como intermediario.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["historia", "batch"]

variables:
  decada: random(1950, 1960)
  caracteristica: uno_de(["secuencial", "paralelo", "interactivo"])

respuesta: "secuencial"
tipo: mc
opciones_explicitas: ["secuencial", "paralelo", "interactivo", "distribuido"]

enunciado: "En la década de {decada}, los primeros sistemas operativos utilizaban el procesamiento por lotes, donde los trabajos se ejecutaban de manera {caracteristica} sin intervención del usuario."

explicacion: |
  El procesamiento por lotes (batch) ejecutaba tareas una tras otra sin pausa ni interacción humana directa, a diferencia de los sistemas modernos interactivos.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "multiusuario"]

variables:
  tipo_terminal: uno_de(["tontas", "inteligentes", "graficas"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Con la llegada de los mainframes en los años 60, los sistemas multiusuario permitían el acceso mediante terminales {tipo_terminal}, que no procesaban datos por sí mismas."

explicacion: |
  Las terminales tontas solo enviaban y recibían datos, delegando todo el procesamiento al mainframe central.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["microprocesador", "pc"]

variables:
  decada: uno_de([70, 80])
  dispositivo: uno_de(["ordenadores_personales", "supercomputadoras", "mainframes"])

respuesta: "ordenadores_personales"
tipo: mc
opciones_explicitas: ["ordenadores_personales", "supercomputadoras", "mainframes", "minicomputadoras"]

enunciado: "La llegada de los microprocesadores en los años {decada} permitió la popularización de los {dispositivo} en los hogares."

explicacion: |
  El microprocesador abarató el costo de las computadoras, facilitando su entrada en el mercado doméstico.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "macos", "competencia"]

variables:
  sistema_estandar: uno_de(["Windows", "Mac OS"])
  caracteristica_windows: uno_de(["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor"])
  caracteristica_mac: uno_de(["experiencia_integrada", "precio_bajo", "maximo_hardware"])

respuesta: "interfaz_grafica_accesible"
tipo: mc
opciones_explicitas: ["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor", "experiencia_integrada"]

enunciado: "Durante los años 90, Windows se consolidó como el estándar corporativo y doméstico gracias a su {caracteristica_windows}, mientras que Mac OS destacaba por su experiencia más integrada."

explicacion: |
  Windows ganó mercado por su accesibilidad y compatibilidad, mientras que Mac OS se enfocaba en la integración hardware-software.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "codigo_abierto"]

variables:
  ambito: uno_de(["academico", "domestico", "gaming", "movil"])
  ventaja_linux: uno_de(["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"])

respuesta: "codigo_abierto"
tipo: mc
opciones_explicitas: ["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"]

enunciado: "Paralelamente a Windows y Mac OS, Linux ganaba terreno en el ámbito {ambito} gracias a su {ventaja_linux} y robustez."

explicacion: |
  Linux se popularizó en servidores y entornos académicos por su modelo de código abierto y estabilidad.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["impacto_social", "democratizacion"]

variables:
  antes: uno_de(["codigo_binario", "interfaces_graficas", "nube", "movilidad"])
  despues: uno_de(["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"])

respuesta: "interfaces_graficas"
tipo: mc
opciones_explicitas: ["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"]

enunciado: "Gracias a los sistemas operativos, la interacción pasó de escribir {antes} a usar {despues} intuitivas, democratizando el acceso a la tecnología."

explicacion: |
  Los SO reemplazaron la necesidad de programar en binario o comandos complejos por interfaces gráficas amigables.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["era_actual", "movilidad"]

respuesta: "movilidad"
tipo: completar
enunciado: "En el siglo XXI, la evolución de los sistemas operativos se ha desplazado hacia la ___ y la integración en la nube."
respuestas_validas:
  - "movilidad"
  - "Movilidad"

explicacion: |
  La popularización de smartphones y la nube han redefinido los sistemas operativos modernos hacia la movilidad constante.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["gestion", "memoria"]

variables:
  recurso: uno_de(["memoria", "disco_duro", "pantalla", "teclado"])
  accion: uno_de(["asignar", "fabricar", "vender", "desmontar"])

respuesta: "asignar"
tipo: mc
opciones_explicitas: ["asignar", "fabricar", "vender", "desmontar"]

enunciado: "Una de las tareas críticas del SO es {accion} la memoria RAM para las aplicaciones en ejecución."

explicacion: |
  El SO gestiona la memoria física, asignando y liberando espacio para que las aplicaciones funcionen sin conflictos.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["terminologia", "mainframe"]

variables:
  nombre: uno_de(["terminales_tontas", "smartphones", "tablets", "laptops"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Las terminales que solo enviaban datos al mainframe sin procesarlos se denominaban {nombre}."

explicacion: |
  El término 'tonta' (dumb terminal) se usa para dispositivos sin capacidad de procesamiento independiente.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["conectividad", "historia"]

variables:
  evento: uno_de(["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"])

respuesta: "fin_del_aislamiento"
tipo: mc
opciones_explicitas: ["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"]

enunciado: "La era de los años 90 marcó el {evento} y el inicio de la conectividad masiva."

explicacion: |
  La integración de redes y la web transformaron las computadoras de herramientas aisladas en dispositivos conectados globalmente.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "servidores"]

variables:
  ventaja_linux: uno_de(["robustez", "precio_bajo", "interfaz_grafica", "juegos"])
  ventaja_windows: uno_de(["estandar_corporativo", "codigo_abierto", "estabilidad_kernel", "gratuidad"])

respuesta: "robustez"
tipo: mc
opciones_explicitas: ["robustez", "estandar_corporativo", "codigo_abierto", "gratuidad"]

enunciado: "En el ámbito de servidores, Linux se destaca por su {ventaja_linux}, mientras que Windows es el {ventaja_windows} para entornos corporativos."

explicacion: |
  Linux es preferido en servidores por su estabilidad y eficiencia, mientras que Windows domina en entornos de oficina por su estandarización.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["historia", "binario"]

respuesta: "codigo_binario"
tipo: completar
enunciado: "Antes de los SO, los programadores debían escribir ___ directamente para controlar los transistores."
respuestas_validas:
  - "codigo_binario"
  - "código binario"
  - "Código binario"
  - "Código Binario"

explicacion: |
  La programación directa en binario era extremadamente compleja y propensa a errores, sin abstracción de hardware.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "historia"]

variables:
  decada: random(1960, 1969)
  acceso: uno_de(["multiusuario", "monousuario", "local", "remoto"])

respuesta: "multiusuario"
tipo: mc
opciones_explicitas: ["multiusuario", "monousuario", "local", "remoto"]

enunciado: "En la década de {decada}, los mainframes introdujeron el acceso {acceso} mediante terminales."

explicacion: |
  Los mainframes permitían que múltiples usuarios accedieran a la misma máquina simultáneamente, un concepto revolucionario para la época.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "corporativo"]

variables:
  sistema: uno_de(["Windows", "Mac OS", "Linux", "Unix"])
  rol: uno_de(["estandar_corporativo", "sistema_movil", "sistema_embebido", "sistema_educativo"])

respuesta: "Windows"
tipo: mc
opciones_explicitas: ["Windows", "Mac OS", "Linux", "Unix"]

enunciado: "El sistema {sistema} se convirtió en el {rol} gracias a su interfaz gráfica accesible y compatibilidad."

explicacion: |
  Windows logró la hegemonía en oficinas y hogares por su facilidad de uso y amplia disponibilidad de software.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["analogia", "gestion"]

respuesta: "director_de_orquesta"
tipo: completar
enunciado: "El SO actúa como el ___ de la sinfonía de hardware, asegurando que todo funcione sin conflictos."
respuestas_validas:
  - "director_de_orquesta"
  - "director de orquesta"
  - "Director de orquesta"
  - "Director_de_orquesta"

explicacion: |
  Esta analogía resalta la capacidad del SO para coordinar múltiples recursos simultáneamente de manera armoniosa.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["batch", "interactivo"]

variables:
  modelo_antiguo: uno_de(["procesamiento_por_lotes", "computacion_en_nube", "interfaz_grafica", "multiusuario"])
  modelo_nuevo: uno_de(["interactivo", "batch", "monousuario", "binario"])

respuesta: "interactivo"
tipo: mc
opciones_explicitas: ["interactivo", "batch", "monousuario", "binario"]

enunciado: "La evolución histórica pasó del {modelo_antiguo} al modelo {modelo_nuevo}, permitiendo la intervención del usuario."

explicacion: |
  El paso de lotes secuenciales a sistemas interactivos fue clave para la usabilidad moderna.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["aplicaciones", "ejecucion"]

variables:
  tarea: uno_de(["ejecutar", "compilar", "ensamblar", "grabar"])
  recurso: uno_de(["cpu", "disco", "red", "usb"])

respuesta: "ejecutar"
tipo: mc
opciones_explicitas: ["ejecutar", "compilar", "ensamblar", "grabar"]

enunciado: "El SO se encarga de {tarea} las aplicaciones y asignar el recurso {recurso} necesario."

explicacion: |
  El SO gestiona la ejecución de programas, asegurando que cada uno tenga el tiempo de CPU y memoria que necesita.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["pc", "era"]

respuesta: "entrada_de_pcs"
tipo: completar
enunciado: "Durante los años 70 y 80, los ordenadores personales comenzaron a tener su ___ en los hogares."
respuestas_validas:
  - "entrada_de_pcs"
  - "entrada de pcs"
  - "Entrada de PCs"
  - "entrada_de_PCs"

explicacion: |
  Los años 70 y 80 marcaron el inicio de la computación personal, impulsada por microprocesadores más baratos.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["macos", "windows", "comparacion"]

variables:
  sistema: uno_de(["Mac OS", "Windows"])
  caracteristica: uno_de(["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"])

respuesta: "experiencia_integrada"
tipo: mc
opciones_explicitas: ["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"]

enunciado: "Mac OS se diferenciaba de Windows por ofrecer una {caracteristica} más sólida y unificada."

explicacion: |
  Apple controlaba tanto hardware como software en Mac OS, lo que permitía una integración y estabilidad superior en esa época.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "intermediario"]

respuesta: "intermediario"
tipo: completar
enunciado: "El SO actúa como el ___ entre el usuario y el hardware."
respuestas_validas:
  - "intermediario"
  - "Intermediario"
  - "puente"
  - "Puente"

explicacion: |
  Sin este intermediario, el usuario tendría que interactuar directamente con la complejidad del hardware.
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["seguridad", "evolucion"]

variables:
  aspecto: uno_de(["movilidad", "seguridad", "lotes", "batch"])
  importancia: uno_de(["alta", "baja", "nula", "media"])

respuesta: "alta"
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "media"]

enunciado: "En la era actual, la {aspecto} es un pilar fundamental de los sistemas operativos, con {importancia} prioridad."

explicacion: |
  Con la conectividad masiva, la seguridad (autenticación, cifrado, control de acceso) se volvió crítica en el diseño de SO.
```

### 23 — pregunta 23

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["resumen", "cronologia"]

variables:
  orden: uno_de([1, 2, 3, 4])
  evento: uno_de(["lotes", "mainframes", "microprocesadores", "nube"])
  decada: uno_de([1950, 1960, 1970, 2000])

respuesta: "lotes"
tipo: mc
opciones_explicitas: ["lotes", "mainframes", "microprocesadores", "nube"]

enunciado: "En la década de {decada}, el modelo predominante era el procesamiento por {evento}."

explicacion: |
  El procesamiento por lotes fue el primer paso, seguido por mainframes, luego microcomputadoras y finalmente la nube.
```
