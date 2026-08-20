### 1 — Definición de Pipeline como Código
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["pipeline", "as-code", "jenkinsfile"]
respuesta: verdadero
tipo: vf
enunciado:
  En el contexto de DevOps, "Pipeline as Code" implica que la lógica de la integración continua y la entrega continua se define mediante archivos de configuración versionados (como `Jenkinsfile`, `.gitlab-ci.yml` o `azure-pipelines.yml`) en lugar de configurarse manualmente a través de la interfaz gráfica de la herramienta CI/CD.
pasos:
  - "Leer la definición de Pipeline as Code."
  - "Evaluar si la definición corresponde a la práctica estándar de versionar la configuración."
explicacion:
  La práctica de definir los pipelines en código (YAML, Groovy, etc.) dentro del repositorio de código fuente permite versionar, revisar y auditar el proceso de despliegue junto con el código de la aplicación, eliminando la configuración manual en la UI.
```

### 2 — Completar: Comando de Git para Historial Interactivo
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["git", "rebase", "interactivo"]
respuesta: "rebase"
respuestas_validas:
  - "rebase"
  - "Rebase"
  - "REBASE"
tipo: completar
enunciado:
  Para modificar el historial de commits antes de subirlos a un servidor remoto y limpiar el camino para un merge limpio, se utiliza el comando `git _______ -i`. Este comando permite reescribir commits, combinarlos o eliminarlos.
pasos:
  - "Identificar el comando de git que permite modificar el historial local de forma interactiva."
  - "Verificar que el comando acepte la bandera '-i' para el modo interactivo."
explicacion:
  `git rebase -i` (interactive rebase) es la herramienta estándar en Git para reescribir el historial de commits localmente, permitiendo acciones como squash, edit, drop o reword antes de forzar el push (si es necesario y seguro).
```

### 3 — Verdadero/Falso: Diferencia entre CI y CD
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["ci", "cd", "diferencias"]
respuesta: falso
tipo: vf
enunciado:
  La Entrega Continua (Continuous Delivery) garantiza que el software se despliegue automáticamente en producción en cada cambio de código, mientras que la Integración Continua (Continuous Integration) solo se encarga de compilar y probar el código.
pasos:
  - "Analizar la definición de Continuous Delivery."
  - "Analizar la definición de Continuous Deployment."
  - "Comparar si Continuous Delivery implica despliegue automático en producción sin aprobación humana."
explicacion:
  La Entrega Continua (Continuous Delivery) garantiza que el código esté siempre en un estado desplegable, pero requiere una intervención humana (aprobación) para ir a producción. La Desplegamiento Continuo (Continuous Deployment) es el que despliega automáticamente en producción sin intervención humana.
```

### 4 — Completar: Artefacto en Jenkins
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["jenkins", "artifacts", "persistencia"]
respuesta: "artifacts"
respuestas_validas:
  - "artifacts"
  - "Artifacts"
  - "ARTIFACTS"
tipo: completar
enunciado:
  En Jenkins, el paso `archiveArtifacts` se utiliza para guardar los archivos generados durante la build (como `.jar`, `.war` o logs) bajo la carpeta `artifacts` del trabajo, permitiendo su descarga posterior o su uso en etapas subsiguientes.
pasos:
  - "Identificar la palabra clave que Jenkins usa para referirse a los outputs persistentes de una build."
  - "Confirmar que la función `archiveArtifacts` gestiona este tipo de datos."
explicacion:
  Jenkins trata los outputs compilados o generados como `artifacts`. Estos se almacenan en el sistema de archivos del nodo maestro o de build y pueden ser archivados para su uso posterior en pipelines downstream o para auditoría.
```

### 5 — MC: Propósito de Docker Layer Caching
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["docker", "cache", "optimizacion"]
opciones_explicitas:
  - "Aumentar la seguridad de la red del contenedor."
  - "Reducir el tiempo de build y el ancho de banda al evitar la re-descarga de capas inmutables."
  - "Asignar memoria dinámica al contenedor en tiempo de ejecución."
  - "Encriptar las credenciales almacenadas en el Dockerfile."
respuesta: "Reducir el tiempo de build y el ancho de banda al evitar la re-descarga de capas inmutables."
tipo: mc
enunciado:
  ¿Cuál es el beneficio principal de la caché de capas de Docker durante una build en un entorno CI/CD?
pasos:
  - "Analizar cómo Docker construye imágenes capa por capa."
  - "Evaluar el impacto de las capas idénticas en el tiempo de construcción."
  - "Seleccionar la opción que describe la optimización de recursos."
explicacion:
  Docker cachea las capas. Si una capa no ha cambiado desde la última build, Docker la reutiliza en lugar de reconstruirla. Esto acelera drásticamente los builds y reduce el tráfico de red al no descargar imágenes base o dependencias ya presentes.
```

### 6 — Completar: Variable de Entorno en GitLab CI
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["gitlab-ci", "variables", "secrets"]
respuesta: "variables"
respuestas_validas:
  - "variables"
  - "Variables"
  - "VARIABLES"
tipo: completar
enunciado:
  En GitLab CI/CD, las credencias sensibles (como claves de API o contraseñas de base de datos) no deben hardcodearse en el `.gitlab-ci.yml`. En su lugar, se configuran en la sección `Settings > CI/CD > _______` del proyecto para ser inyectadas de forma segura en el runner.
pasos:
  - "Identificar dónde se almacenan configuraciones sensibles en la interfaz de GitLab."
  - "Verificar el nombre de la sección específica para inyección de datos en tiempo de ejecución."
explicacion:
  GitLab utiliza la sección `Variables` dentro de la configuración del proyecto para gestionar secretos. Estas variables se inyectan en el entorno del runner durante la ejecución del job, ocultando el valor real en los logs y en el código.
```

### 7 — Verdadero/Falso: Estado de un Deployment en Kubernetes
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "deployment", "estado"]
respuesta: verdadero
tipo: vf
enunciado:
  En Kubernetes, un Deployment se considera "Available" cuando todas las réplicas del Pod están corriendo y listas para recibir tráfico, y el número de Pods disponibles es igual al número de Pods deseados especificados en el spec.
pasos:
  - "Revisar la definición de estado 'Available' en la documentación de Kubernetes Deployments."
  - "Verificar si coincide con la condición de réplicas listas y disponibles."
explicacion:
  El estado `Available` indica que el Deployment ha alcanzado su estado deseado y las réplicas están operativas. Esto es crucial para las estrategias de despliegue (como Rolling Update) para saber cuándo un nuevo rollout es exitoso.
```

### 8 — MC: Problema que resuelve Helm
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "helm", "gestion-paquetes"]
opciones_explicitas:
  - "Reemplazar la necesidad de un servidor de contenedores como Docker."
  - "Gestionar la instalación, actualización y eliminación de aplicaciones complejas en Kubernetes mediante Charts."
  - "Monitorizar el uso de CPU y memoria de los contenedores en tiempo real."
  - "Seguir el código fuente de las aplicaciones desplegadas en Git."
respuesta: "Gestionar la instalación, actualización y eliminación de aplicaciones complejas en Kubernetes mediante Charts."
tipo: mc
enunciado:
  ¿Cuál es la función principal de la herramienta Helm en el ecosistema de Kubernetes?
pasos:
  - "Definir qué es Helm (package manager para K8s)."
  - "Evaluar las opciones para ver cuál describe la gestión de manifiestos como paquetes."
  - "Seleccionar la opción correcta."
explicacion:
  Helm actúa como el gestor de paquetes de Kubernetes. Permite empaquetar múltiples recursos YAML (Deployments, Services, ConfigMaps) en un "Chart", facilitando su instalación, configuración con valores (values.yaml) y actualización versionada.
```

### 9 — Completar: Estrategia de Despliegue Zero-Downtime
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "strategies", "blue-green"]
respuesta: "blue-green"
respuestas_validas:
  - "blue-green"
  - "Blue-Green"
  - "BLUE-GREEN"
tipo: completar
enunciado:
  La estrategia de despliegue que mantiene dos entornos idénticos (entonces y ahora), donde el tráfico se cambia instantáneamente de uno a otro mediante un balanceador de carga, se denomina despliegue _______. Esto permite un rollback inmediato si falla la nueva versión.
pasos:
  - "Identificar la estrategia que utiliza dos entornos paralelos."
  - "Verificar el nombre común de esta técnica en DevOps."
explicacion:
  Blue-Green Deployment implica tener dos entornos (Blue y Green). Uno sirve tráfico de producción mientras el otro se actualiza. Una vez verificado, el balanceador de carga cambia el tráfico al entorno nuevo. Es simple pero requiere el doble de recursos.
```

### 10 — Verdadero/Falso: Naturaleza de los Secretos en Kubernetes
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "secrets", "seguridad"]
respuesta: falso
tipo: vf
enunciado:
  Los objetos `Secret` en Kubernetes almacenan información sensible (como contraseñas) en formato encriptado por defecto en etcd, garantizando que nadie pueda leer su contenido sin las claves de encriptación adecuadas y permisos de acceso.
pasos:
  - "Analizar cómo Kubernetes almacena Secrets por defecto."
  - "Determinar si el almacenamiento es por defecto encriptado o solo base64 codificado."
explicacion:
  Por defecto, Kubernetes almacena Secrets en base64 codificado, NO encriptado. Cualquier persona con acceso de lectura al etcd o al namespace puede decodificar el valor. La encriptación en reposo requiere una configuración explícita del plano de control (EncryptionConfiguration).
```

### 11 — MC: Propósito de ArgoCD
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "argocd", "gitops"]
opciones_explicitas:
  - "Construir imágenes de Docker a partir de Dockerfiles."
  - "Sincronizar el estado deseado definido en un repositorio Git con el clúster de Kubernetes en tiempo real."
  - "Ejecutar pruebas unitarias de código Python."
  - "Gestionar la autenticación de usuarios finales en la aplicación."
respuesta: "Sincronizar el estado deseado definido en un repositorio Git con el clúster de Kubernetes en tiempo real."
tipo: mc
enunciado:
  ¿Qué funcionalidad principal proporciona ArgoCD en una arquitectura GitOps?
pasos:
  - "Definir ArgoCD como una herramienta de GitOps para Kubernetes."
  - "Evaluar su rol en la sincronización entre Git y el cluster."
  - "Seleccionar la opción que describe esta sincronización."
explicacion:
  ArgoCD es un clúster-agnostic Continuous Delivery tool for Kubernetes que sigue el patrón GitOps. Monitoriza el repositorio Git y aplica los cambios al clúster si detecta que el estado actual se ha desviado del estado declarado en Git.
```

### 12 — Completar: Comando para Ver Logs en Tiempo Real
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "debugging", "logs"]
respuesta: "logs"
respuestas_validas:
  - "logs"
  - "Logs"
  - "LOGS"
tipo: completar
enunciado:
  Para seguir la salida estándar de un Pod en Kubernetes y ver los eventos en tiempo real, se utiliza el comando `kubectl _______ <pod-name> -f`. La bandera `-f` (follow) mantiene la conexión abierta.
pasos:
  - "Identificar el comando kubectl para acceder a la salida de un Pod."
  - "Verificar la bandera para seguir el flujo de datos."
explicacion:
  `kubectl logs -f` es la herramienta estándar para debuggear aplicaciones en Kubernetes, permitiendo ver la salida stdout/stderr de los contenedores mientras se ejecutan.
```

### 13 — Verdadero/Falso: Infraestructura Inmutable
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["infraestructura", "inmutable", "conceptos"]
respuesta: verdadero
tipo: vf
enunciado:
  En una infraestructura inmutable, los servidores o contenedores no se modifican una vez desplegados. Si se necesita un cambio, se construye una nueva imagen o máquina y se reemplaza la antigua, en lugar de aplicar parches o actualizaciones in-situ.
pasos:
  - "Analizar el concepto de infraestructura inmutable."
  - "Verificar si implica la sustitución en lugar de la modificación."
explicacion:
  La infraestructura inmutable evita la deriva de configuración (configuration drift). Al destruir y reemplazar instancias, se garantiza que el entorno en producción sea idéntico al probado, reduciendo errores por cambios manuales no documentados.
```

### 14 — MC: Ventaja de los Microservicios en CI/CD
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["microservicios", "arquitectura", "beneficios"]
opciones_explicitas:
  - "Obliga a todos los equipos a usar la misma tecnología y base de código."
  - "Permite el despliegue independiente y aislado de componentes, reduciendo el riesgo de fallos en cascada."
  - "Elimina la necesidad de cualquier tipo de contenedorización."
  - "Aumenta la complejidad de la red pero simplifica el desarrollo local."
respuesta: "Permite el despliegue independiente y aislado de componentes, reduciendo el riesgo de fallos en cascada."
tipo: mc
enunciado:
  ¿Cuál es un beneficio clave de la arquitectura de microservicios respecto a la estrategia de entrega continua?
pasos:
  - "Analizar la independencia de despliegue en microservicios."
  - "Evaluar el impacto en el riesgo y la frecuencia de releases."
  - "Seleccionar la opción que describe la independencia."
explicacion:
  Los microservicios permiten que cada servicio tenga su propio ciclo de vida. Un equipo puede desplegar su servicio sin afectar a otros, permitiendo releases más frecuentes y menores, y aislando fallos.
```

### 15 — Completar: Herramienta de Gestión de Dependencias
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["dependencias", "lock-file", "consistencia"]
respuesta: "lock"
respuestas_validas:
  - "lock"
  - "Lock"
  - "LOCK"
tipo: completar
enunciado:
  En proyectos Node.js o Python, los archivos `package-lock.json` o `Pipfile.lock` se utilizan para fijar las versiones exactas de las dependencias, garantizando que todos los entornos (desarrollo, CI, producción) instalen las mismas versiones y evitando comportamientos inesperados.
pasos:
  - "Identificar el tipo de archivo que fija versiones en gestores de paquetes."
  - "Verificar el nombre común de este archivo en la industria."
explicacion:
  Los archivos `lock` (o `lockfile`) aseguran la reproducibilidad de la build. Sin ellos, `npm install` o `pip install` podrían instalar versiones nuevas que rompan la compatibilidad, causando el fenómeno "works on my machine".
```

### 16 — Verdadero/Falso: Rollback en GitOps
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["gitops", "rollback", "proceso"]
respuesta: verdadero
tipo: vf
enunciado:
  En un flujo GitOps, realizar un rollback a una versión anterior de la aplicación consiste simplemente en revertir el commit en el repositorio Git que contiene la configuración del clúster. La herramienta de GitOps detectará el cambio y restaurará el estado anterior automáticamente.
pasos:
  - "Analizar el mecanismo de rollback en GitOps."
  - "Verificar si la reversión de Git es suficiente para el rollback en el clúster."
explicacion:
  GitOps trata el repositorio Git como la fuente única de la verdad. Revertir un commit en Git es el mecanismo nativo y auditable para hacer rollback, ya que la herramienta (como ArgoCD o Flux) sincronizará el clúster con el estado revertido.
```

### 17 — MC: Propósito de SonarQube
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["calidad", "sonarqube", "code-smell"]
opciones_explicitas:
  - "Desplegar aplicaciones en Kubernetes."
  - "Analizar estáticamente el código fuente para detectar bugs, vulnerabilidades y code smells."
  - "Gestionar la infraestructura de servidores físicos."
  - "Crear imágenes de Docker a partir de Dockerfiles."
respuesta: "Analizar estáticamente el código fuente para detectar bugs, vulnerabilidades y code smells."
tipo: mc
enunciado:
  ¿Cuál es la función principal de SonarQube en una pipeline de CI/CD?
pasos:
  - "Definir SonarQube como una herramienta de análisis de código."
  - "Evaluar las opciones para ver cuál describe el análisis estático."
  - "Seleccionar la opción correcta."
explicacion:
  SonarQube se integra en la etapa de build para realizar Quality Gates. Analiza el código en busca de duplicados, vulnerabilidades de seguridad, bugs y complejidad ciclomática, impidiendo el merge si la calidad no cumple los estándares definidos.
```

### 18 — Completar: Tipo de Runner en GitLab CI
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["gitlab-ci", "runners", "tipos"]
respuesta: "shared"
respuestas_validas:
  - "shared"
  - "Shared"
  - "SHARED"
tipo: completar
enunciado:
  En GitLab CI, los runners pueden ser de tipo `specific` (asignados a un proyecto) o de tipo _______ (disponibles para cualquier proyecto o grupo dentro de la instancia de GitLab). Los runners compartidos suelen ser gestionados por el administrador de la plataforma.
pasos:
  - "Identificar los tipos de runners disponibles en GitLab."
  - "Verificar el nombre del tipo que no está restringido a un proyecto específico."
explicacion:
  Los runners `Shared` son recursos comunes que pueden ejecutar jobs de cualquier proyecto que no tenga un runner específico asignado. Esto permite escalar la capacidad de procesamiento de CI de manera centralizada.
```

### 19 — Verdadero/Falso: Diferencia entre Canary y Blue-Green
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["strategies", "canary", "blue-green", "comparacion"]
respuesta: verdadero
tipo: vf
enunciado:
  A diferencia del despliegue Blue-Green que cambia todo el tráfico de golpe, el despliegue Canary introduce la nueva versión gradualmente a un subconjunto reducido de usuarios para monitorizar su comportamiento antes de un rollout completo.
pasos:
  - "Analizar la estrategia Canary (gradual)."
  - "Analizar la estrategia Blue-Green (todo o nada)."
  - "Verificar si la descripción corresponde a la definición de Canary."
explicacion:
  Canary deployments permiten validar la nueva versión en producción con un riesgo mínimo, enviando tráfico real pero limitado a los nuevos pods/instancias. Si todo va bien, se incrementa el porcentaje de tráfico hasta el 100%.
```

### 20 — MC: Propósito de Terraform
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["terraform", "iaac", "proveedores"]
opciones_explicitas:
  - "Gestionar la base de datos relacional de la aplicación."
  - "Provisionar y gestionar infraestructura en la nube mediante código declarativo (IaC)."
  - "Ejecutar pruebas de carga en la aplicación web."
  - "Monitorizar el tráfico de red en tiempo real."
respuesta: "Provisionar y gestionar infraestructura en la nube mediante código declarativo (IaC)."
tipo: mc
enunciado:
  ¿Qué problema principal resuelve Terraform en el contexto de DevOps?
pasos:
  - "Definir Terraform como una herramienta de Infraestructura como Código."
  - "Evaluar las opciones para ver cuál describe la provisionación de recursos."
  - "Seleccionar la opción correcta."
explicacion:
  Terraform permite definir la infraestructura (VMs, redes, firewalls) en archivos HCL. Esto permite versionar la infraestructura, replicar entornos y evitar la configuración manual propensa a errores en la consola de la nube.
```

### 21 — Completar: Comando para Aplicar Manifiestos en Kubernetes
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["kubernetes", "apply", "manifiestos"]
respuesta: "apply"
respuestas_validas:
  - "apply"
  - "Apply"
  - "APPLY"
tipo: completar
enunciado:
  Para crear o actualizar recursos en Kubernetes basándose en la definición contenida en un archivo YAML, se utiliza el comando `kubectl _______ -f <archivo.yaml>`. Este comando es idempotente y compara el estado deseado con el actual.
pasos:
  - "Identificar el comando kubectl para aplicar cambios desde archivos."
  - "Verificar la bandera o subcomando que realiza la comparación y aplicación."
explicacion:
  `kubectl apply` es el comando estándar para gestionar recursos declarativamente. Calcula la diferencia entre el manifiesto y el estado actual del clúster y aplica solo los cambios necesarios (patch).
```

### 22 — Verdadero/Falso: Propósito de Nexus/Artifactory
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["repository", "nexus", "artifactory", "artefactos"]
respuesta: verdadero
tipo: vf
enunciado:
  Los repositorios de artefactos como Sonatype Nexus o JFrog Artifactory se utilizan para almacenar de manera centralizada los binarios compilados, dependencias y contenedores, permitiendo que los entornos de staging y producción descarguen versiones específicas y verificadas en lugar de construir localmente.
pasos:
  - "Analizar la función de un repositorio de artefactos."
  - "Verificar si su propósito es la gestión centralizada de binarios y dependencias."
explicacion:
  Los repositorios de artefactos actúan como la fuente de verdad para los binarios. Evitan la construcción duplicada, aseguran la trazabilidad de qué código generó qué versión y facilitan la gestión de dependencias (maven, npm, docker layers).
```

### 23 — MC: Ventaja de las Pruebas en Pipeline (Shift-Left)
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["testing", "shift-left", "costos"]
opciones_explicitas:
  - "Eliminar la necesidad de pruebas manuales en QA."
  - "Detectar y corregir errores temprano en el ciclo de desarrollo, reduciendo el costo de reparación."
  - "Acelerar el proceso de despliegue en producción sin pruebas."
  - "Reemplazar la necesidad de un entorno de integración continua."
respuesta: "Detectar y corregir errores temprano en el ciclo de desarrollo, reduciendo el costo de reparación."
tipo: mc
enunciado:
  ¿Cuál es el principio fundamental de la estrategia "Shift-Left" en las pruebas de software?
pasos:
  - "Definir Shift-Left (mover pruebas a la izquierda del ciclo)."
  - "Evaluar el impacto en el costo y la velocidad de corrección de bugs."
  - "Seleccionar la opción que describe la detección temprana."
explicacion:
  Shift-Left implica realizar pruebas (unitarias, de integración, seguridad) lo antes posible, idealmente durante el desarrollo o inmediatamente después del commit. Corregir un bug en la fase de diseño/código es mucho más barato y rápido que en producción.
```

### 24 — Completar: Tipo de Prueba en Pipeline
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["testing", "integration", "pipelines"]
respuesta: "integration"
respuestas_validas:
  - "integration"
  - "Integration"
  - "INTEGRATION"
tipo: completar
enunciado:
  Las pruebas _______ verifican que los diferentes módulos o servicios de la aplicación funcionen correctamente entre sí y con sus dependencias externas (bases de datos, APIs), típicamente ejecutándose después de las pruebas unitarias en la pipeline CI.
pasos:
  - "Identificar el nivel de pruebas que verifica la interacción entre componentes."
  - "Verificar el nombre estándar de este tipo de prueba en la pirámide de testing."
explicacion:
  Las pruebas de integración se sitúan entre las unitarias y las end-to-end. Validan la interfaz y el flujo de datos entre servicios, asegurando que la composición de los módulos funciona como se espera.
```

### 25 — Verdadero/Falso: Propósito de Service Mesh
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-ci-cd-fundamentos"
  nivel: "avanzado"
  tags: ["service-mesh", "istio", "observabilidad"]
respuesta: verdadero
tipo: vf
enunciado:
  Un Service Mesh (como Istio o Linkerd) se implementa típicamente como un sidecar proxy junto a cada contenedor de la aplicación para manejar la comunicación entre servicios, proporcionando descubrimiento de servicios, balanceo de carga, TLS mutuo y observabilidad (trazas y métricas) sin modificar el código de la aplicación.
pasos:
  - "Analizar la definición de Service Mesh."
  - "Verificar si su rol incluye la gestión de tráfico y observabilidad mediante sidecars."
explicacion:
  El Service Mesh abstrae la lógica de red (resiliencia, seguridad, monitoreo) del código de la aplicación, moviéndola a la capa de infraestructura (sidecar). Esto permite gestionar el tráfico microservicio a microservicio de forma centralizada y transparente.
```