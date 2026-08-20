### 1 — ¿Qué es un proceso?
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

respuesta: "proceso"
tipo: "mc"
opciones_explicitas: ["archivo_en_disco", "proceso", "instruccion_suelta", "hardware"]

enunciado: "Un programa es una entidad pasiva que reside en el almacenamiento secundario; cuando este programa se carga en la memoria y se inicia su ejecución, se convierte en un ___."

explicacion: |
  Un programa es un conjunto de instrucciones estáticas (un archivo en el disco), mientras que un proceso es la entidad dinámica que representa la ejecución de dichas instrucciones en la memoria RAM y con recursos asignados.
```

### 2 — Diferencia entre programa y proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: falso
tipo: "vf"

enunciado: "Si abro dos instancias diferentes del mismo navegador web (por ejemplo, dos ventanas independientes), estoy ejecutando dos procesos distintos que comparten el mismo código de programa original."

explicacion: |
  Es verdadero. El programa (el ejecutable en disco) es el mismo, pero cada ventana es un proceso independiente con su propio espacio de memoria, contador de programa y estado de ejecución.
```

### 3 — Componentes de un proceso en ejecución
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["memoria", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["recursos_asignados", "estado_de_ejecucion"], ["memoria_y_registros", "contexto_del_cpu"]]

respuesta: tabla[escenario_idx][1]
tipo: "completar"
respuestas_validas: ["recursos_asignados", "estado_de_ejecucion", "memoria_y_registros", "contexto_del_cpu"]

enunciado: "Al pasar de un programa a un proceso, el sistema operativo debe asignar {datos[escenario_idx][0]} para que este pueda operar."

explicacion: |
  Un proceso no es solo el código; requiere recursos como memoria (stack, heap), archivos abiertos y el estado de los registros del procesador para poder ejecutarse.
```

### 4 — Ciclo de vida de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados_proceso"]

respuesta: ["creado", "listo", "ejecutando", "terminado"]
tipo: "ordenar"
opciones_explicitas: ["creado", "listo", "ejecutando", "terminado"]

enunciado: "Ordena las etapas lógicas por las que pasa un proceso desde que se solicita su creación hasta que finaliza su tarea:"

explicacion: |
  El flujo estándar es: 1. Creado (se solicita), 2. Listo (esperando CPU), 3. Ejecutando (usando CPU), 4. Terminado (finaliza).
```

### 5 — El rol del Sistema Operativo
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["gestion_recursos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["gestionar_recursos", "controlar_ejecucion"], ["gestionar_recursos", "modificar_el_codigo"]]

respuesta: tabla[caso_idx][1]
tipo: "mc"
opciones_explicitas: ["gestionar_recursos", "controlar_ejecucion", "modificar_el_codigo", "eliminar_el_archivo"]

enunciado: "Cuando un programa se convierte en proceso, el Sistema Operativo asume la tarea de {datos[caso_idx][0]} para asegurar que el proceso pueda realizar su función sin interferir con otros."

explicacion: |
  El SO actúa como un administrador que asigna tiempo de CPU y memoria (gestiona recursos) y decide cuándo un proceso puede estar en la CPU (controla la ejecución).
```