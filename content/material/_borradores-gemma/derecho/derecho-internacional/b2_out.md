### 1 — El tratado de límites
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["tratados", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[["Estado A", "Estado B", "Tratado de Límites"], ["Estado C", "Estado D", "Acuerdo de Fronteras"]]]

enunciado: "El {datos[caso_idx][0]} es un instrumento jurídico mediante el cual el {datos[caso_idx][1]} y el {datos[caso_idx][2]} establecen normas de conducta mutua. ¿Es este un ejemplo de Derecho Internacional Público?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El Derecho Internacional Público regula las relaciones entre sujetos de derecho internacional, principalmente Estados soberanos, mediante tratados y normas consuetudinarias.
```

### 2 — El rol de la ONU
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["organismos_internacionales", "onu"]

variables:
  organismo: uno_de(["ONU", "Corte Penal Internacional"])

enunciado: "Si un Estado firma un tratado para combatir el cambio climático, este compromiso se rige por el Derecho Internacional. Si la entidad encargada de velar por la paz y seguridad internacional es la {organismo}, ¿cuál es su función principal?"

opciones_explicitas: ["Mantener la paz y seguridad internacional", "Regular el comercio entre empresas privadas", "Dictar leyes internas de los países"]
respuesta: "Mantener la paz y seguridad internacional"
tipo: "mc"

explicacion: |
  Las organizaciones internacionales como la ONU son sujetos de derecho internacional que actúan para cumplir fines comunes entre los Estados miembros.
```

### 3 — Proceso de creación de una norma
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["tratados", "procedimiento"]

enunciado: "Para que un tratado internacional sea plenamente vinculante para un Estado, se debe seguir un orden lógico de pasos. Ordene el proceso de formación de un tratado:"

opciones_explicitas: ["Negociación", "Firma", "Ratificación"]
respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: "ordenar"

explicacion: |
  El proceso estándar comienza con la negociación del texto, sigue con la firma (que expresa la intención) y culmina con la ratificación (que vincula legalmente al Estado según su derecho interno).
```

### 4 — Sujetos del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados"]

enunciado: "En el marco del Derecho Internacional Público, los sujetos que poseen capacidad jurídica para adquirir derechos y contraer obligaciones internacionales son los Estados y los ___."

respuestas_validas: ["Organismos Internacionales"]
respuesta: "Organismos Internacionales"
tipo: "completar"

explicacion: |
  Además de los Estados, los organismos internacionales (como la OEA o la ONU) son sujetos con capacidad jurídica propia, distinta a la de los Estados que los componen.
```

### 5 — Cumplimiento de obligaciones
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["pacta_sunt_servanda"]

variables:
  norma: uno_de(["Pacta sunt servanda", "Lex posterior"])

enunciado: "El principio de que 'lo pactado obliga' se conoce como {norma}. Si un Estado firma un tratado, ¿está obligado a cumplirlo de buena fe?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El principio 'Pacta sunt servanda' es la piedra angular del derecho de los tratados, estableciendo que todo tratado en vigor es obligatorio para las partes y debe ser cumplido por ellas de buena fe.
```