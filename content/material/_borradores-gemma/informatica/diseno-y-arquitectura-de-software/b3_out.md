### 1 — Acoplamiento vs Cohesión
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_diseno", "mantenibilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["un modulo que realiza muchas tareas distintas", "bajo"], ["un modulo que hace una sola cosa muy bien", "alto"]], [["un modulo que depende de demasiados otros", "alto"], ["un modulo que es independiente y autónomo", "bajo"]]]

enunciado: "En el diseño de software, buscamos que los módulos tengan una ___ cohesión y un ___ acoplamiento para facilitar el mantenimiento."

opciones_explicitas: ["alta", "baja", "alta", "alta", "baja", "baja", "alta"]

respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Una alta cohesión significa que el módulo está enfocado en una sola responsabilidad. Un bajo acoplamiento significa que los módulos están poco interconectados, lo que permite cambiarlos sin afectar al resto del sistema.
```

### 2 — El mito del Monolito vs Microservicios
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

enunciado: "¿Es siempre preferible una arquitectura de microservicios sobre una arquitectura monolítica para cualquier proyecto de software?"

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Los microservicios añaden una complejidad operativa significativa (red, latencia, consistencia de datos). Para proyectos pequeños o equipos reducidos, un monolito bien estructurado suele ser más eficiente y menos costoso.
```

### 3 — Ciclo de vida del desarrollo de software
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

enunciado: "Ordena las fases típicas del ciclo de vida de desarrollo de software (SDLC) desde la concepción hasta el cierre:"

opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

respuesta: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza entendiendo qué se necesita (Requerimientos), cómo se estructurará (Diseño), escribiendo el código (Implementación), verificando que funcione (Pruebas) y asegurando su vida útil (Mantenimiento).
```

### 4 — Patrones de Diseño: Singleton
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "creacionales"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplo: [["gestión de una conexión a una base de datos única", "Singleton"], ["crear diferentes tipos de botones en una interfaz", "Factory"]]

enunciado: "Si un programador necesita asegurar que una clase tenga una única instancia en todo el sistema, está intentando implementar el patrón ___."

respuestas_validas: ["Singleton", "Factory"]

respuesta: ejemplo[caso_idx][1]
tipo: completar

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella, evitando conflictos de recursos como conexiones a bases de datos o archivos de configuración.
```

### 5 — Acoplamiento de Datos vs Acoplamiento de Control
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["acoplamiento", "diseño_estructural"]

variables:
  tipo_acoplamiento: uno_de(["control", "datos"])
  descripcion: [["cuando un módulo le dice a otro exactamente qué hacer y cómo", "control"], ["cuando un módulo solo pasa información necesaria", "datos"]]

enunciado: "Cuando un módulo A le pasa un objeto a un módulo B, pero además le indica a B qué método debe llamar y en qué orden, estamos ante un acoplamiento de ___."

opciones_explicitas: ["control", "datos"]

respuesta: tipo_acoplamiento == "control"
tipo: mc

explicacion: |
  El acoplamiento de control es peligroso porque el módulo emisor debe conocer la lógica interna del receptor. El objetivo es evolucionar hacia un acoplamiento de datos, donde solo se intercambie la información necesaria.
```