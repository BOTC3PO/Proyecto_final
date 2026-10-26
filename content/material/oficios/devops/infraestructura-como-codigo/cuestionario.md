# DevOps — Infraestructura como código (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — IaC

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Definir servidores, redes y configuraciones en archivos y crearlos automáticamente", "Escribir código de aplicaciones", "Dibujar diagramas", "Comprar servidores"]
respuesta: "Definir servidores, redes y configuraciones en archivos y crearlos automáticamente"

enunciado: "¿Qué es infraestructura como código?"

explicacion: |
  Reemplaza el trabajo manual.
```

### 2 — Manual

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["manual"]

tipo: mc
opciones_explicitas: ["No se puede repetir igual y no deja registro", "Es demasiado rápido", "Es muy exacto", "Es barato"]
respuesta: "No se puede repetir igual y no deja registro"

enunciado: "¿Cuál es un problema del trabajo manual?"

explicacion: |
  Genera diferencias entre servidores.
```

### 3 — Copo de nieve

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["copo"]

tipo: mc
opciones_explicitas: ["Un servidor único y distinto de los demás, difícil de reproducir", "Un servidor frío", "Un servidor nuevo", "Un servidor virtual"]
respuesta: "Un servidor único y distinto de los demás, difícil de reproducir"

enunciado: "¿Qué es un \"servidor copo de nieve\"?"

explicacion: |
  Cada uno tiene su historia.
```

### 4 — Ventaja

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["ventajas"]

tipo: mc
opciones_explicitas: ["Repetibilidad y versionado en Git", "Más trabajo manual", "Menos historia", "Menos control"]
respuesta: "Repetibilidad y versionado en Git"

enunciado: "¿Cuál es una ventaja de IaC?"

explicacion: |
  Se revisa y se vuelve atrás.
```

### 5 — Entornos

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["entornos"]

tipo: mc
opciones_explicitas: ["Que desarrollo, pruebas y producción sean idénticos", "Que sean distintos", "Que no existan", "Que se borren"]
respuesta: "Que desarrollo, pruebas y producción sean idénticos"

enunciado: "¿Qué permite IaC con los entornos?"

explicacion: |
  Se evita "en producción funciona distinto".
```

### 6 — Declarativo

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["declarativo"]

tipo: mc
opciones_explicitas: ["Describir el estado final deseado y que la herramienta decida cómo llegar", "Describir cada paso", "Escribir comentarios", "Usar solo scripts"]
respuesta: "Describir el estado final deseado y que la herramienta decida cómo llegar"

enunciado: "¿Qué es un enfoque declarativo?"

explicacion: |
  Terraform es declarativo.
```

### 7 — Imperativo

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["imperativo"]

tipo: mc
opciones_explicitas: ["Describir los pasos que se deben ejecutar", "Describir el estado final", "Describir una imagen", "Usar solo nube"]
respuesta: "Describir los pasos que se deben ejecutar"

enunciado: "¿Qué es un enfoque imperativo?"

explicacion: |
  Los scripts Bash lo son.
```

### 8 — Idempotente

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["Que aplicarla varias veces da el mismo resultado que aplicarla una", "Que se ejecuta una sola vez", "Que es rápida", "Que es segura siempre"]
respuesta: "Que aplicarla varias veces da el mismo resultado que aplicarla una"

enunciado: "¿Qué significa que una operación sea idempotente?"

explicacion: |
  Es la propiedad clave de IaC.
```

### 9 — Ejemplo

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["`echo \"export MODO=prod\" >> ~/.bashrc`", "`mkdir -p /tmp/datos`", "`grep -q linea archivo || echo linea >> archivo`", "`state: present` en Ansible"]
respuesta: "`echo \"export MODO=prod\" >> ~/.bashrc`"

enunciado: "¿Cuál de estos comandos NO es idempotente?"

explicacion: |
  Agrega la línea cada vez.
```

### 10 — Aprovisionamiento

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["terraform"]

tipo: mc
opciones_explicitas: ["Crea la infraestructura (servidores, redes, bases)", "Configura el interior de un servidor existente", "Escribe código", "Prueba código"]
respuesta: "Crea la infraestructura (servidores, redes, bases)"

enunciado: "¿Qué hace una herramienta de aprovisionamiento como Terraform?"

explicacion: |
  La configuración la hace Ansible.
```

### 11 — Configuración

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["ansible"]

tipo: mc
opciones_explicitas: ["Configura lo que ya existe, como instalar programas", "Crea redes en la nube", "Dibuja diagramas", "Compila"]
respuesta: "Configura lo que ya existe, como instalar programas"

enunciado: "¿Qué hace Ansible?"

explicacion: |
  Se conecta por SSH sin agente.
```

### 12 — Ansible sin agente

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["ansible"]

tipo: mc
opciones_explicitas: ["Que no hace falta instalar un programa en los servidores; se conecta por SSH", "Que no usa red", "Que es manual", "Que usa un agente único"]
respuesta: "Que no hace falta instalar un programa en los servidores; se conecta por SSH"

enunciado: "¿Qué significa que Ansible no use agente?"

explicacion: |
  Simplifica el uso.
```

### 13 — Plan

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["plan"]

tipo: mc
opciones_explicitas: ["Muestra qué cambiaría, sin aplicarlo", "Aplica los cambios", "Borra todo", "Crea el estado"]
respuesta: "Muestra qué cambiaría, sin aplicarlo"

enunciado: "¿Qué hace `terraform plan`?"

explicacion: |
  Se revisa antes de aplicar.
```

### 14 — Apply

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["apply"]

tipo: mc
opciones_explicitas: ["Aplica los cambios", "Muestra el plan solamente", "Inicializa", "Borra el estado"]
respuesta: "Aplica los cambios"

enunciado: "¿Qué hace `terraform apply`?"

explicacion: |
  Se usa después de revisar el plan.
```

### 15 — Destroy

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["destroy"]

tipo: mc
opciones_explicitas: ["Elimina lo creado", "Crea todo", "Valida", "Formatea"]
respuesta: "Elimina lo creado"

enunciado: "¿Qué hace `terraform destroy`?"

explicacion: |
  Útil para evitar costos.
```

### 16 — Estado

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["estado"]

tipo: mc
opciones_explicitas: ["En un lugar remoto protegido y con bloqueo, no en Git", "En Git público", "En un comentario", "En un mensaje"]
respuesta: "En un lugar remoto protegido y con bloqueo, no en Git"

enunciado: "¿Dónde se guarda el estado de Terraform?"

explicacion: |
  Contiene datos sensibles.
```

### 17 — Deriva

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["deriva"]

tipo: mc
opciones_explicitas: ["Que la realidad diverja del código por cambios manuales", "Que el código sea lento", "Que el servidor se apague", "Que se pierda el código"]
respuesta: "Que la realidad diverja del código por cambios manuales"

enunciado: "¿Qué es la deriva (drift)?"

explicacion: |
  Se evita no tocando a mano.
```

### 18 — Revisión

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["revision"]

tipo: mc
opciones_explicitas: ["Para detectar errores antes de aplicarlos", "Por trámite", "Por costumbre", "Para retrasar"]
respuesta: "Para detectar errores antes de aplicarlos"

enunciado: "¿Por qué conviene revisar los cambios de infraestructura en un pull request?"

explicacion: |
  Un error puede borrar recursos.
```

### 19 — Secretos

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["En un gestor de secretos, no en el código", "En Git", "En un comentario", "En un correo"]
respuesta: "En un gestor de secretos, no en el código"

enunciado: "¿Dónde se guardan las claves de la infraestructura?"

explicacion: |
  El código se comparte.
```

### 20 — Etiquetas

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "intermedio"
  tags: ["etiquetas"]

tipo: mc
opciones_explicitas: ["Para saber quién los creó, para qué y cuánto cuestan", "Para decorar", "Para ocultarlos", "Para borrarlos"]
respuesta: "Para saber quién los creó, para qué y cuánto cuestan"

enunciado: "¿Para qué se etiquetan los recursos?"

explicacion: |
  Facilita ordenar y controlar costos.
```

### 21 — Costos

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["costos"]

tipo: mc
opciones_explicitas: ["Costos inesperados", "Ninguno", "Menos seguridad solamente", "Mejor rendimiento"]
respuesta: "Costos inesperados"

enunciado: "¿Qué riesgo hay con los recursos que se olvidan encendidos?"

explicacion: |
  Se destruye lo que no se usa.
```

### 22 — Plan antes

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["riesgos"]

tipo: mc
opciones_explicitas: ["Ejecutar cambios destructivos, como borrar una base de datos", "Ninguno", "Mayor velocidad", "Menor costo"]
respuesta: "Ejecutar cambios destructivos, como borrar una base de datos"

enunciado: "¿Qué riesgo tiene aplicar sin leer el plan?"

explicacion: |
  El plan lo muestra con antelación.
```

### 23 — Permisos

```
metadata:
  materia: "devops"
  tema: "infraestructura_como_codigo"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Dar solo los necesarios (mínimo privilegio)", "Dar todos", "Compartirla", "No usar permisos"]
respuesta: "Dar solo los necesarios (mínimo privilegio)"

enunciado: "¿Qué conviene con los permisos de la cuenta que despliega?"

explicacion: |
  Reduce el daño ante un error o un robo.
```

