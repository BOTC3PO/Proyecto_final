### 1 — Validación de Sintaxis Terraform
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "sintaxis", "validacion"]
respuesta: verdadero
tipo: vf
enunciado: "Ejecutar `terraform validate` dentro de un directorio con configuración HCL correcta pero sin estado inicial permite confirmar que la sintaxis y las referencias internas son válidas antes de cualquier plan."
pasos:
  - "El usuario navega al directorio del módulo."
  - "Ejecuta `terraform validate`."
  - "Verifica el mensaje de éxito o error."
explicacion: "terraform validate comprueba la sintaxis y la consistencia interna de la configuración sin acceder a proveedores ni leer/escribir estado. Es una herramienta esencial para CI/CD."
```

### 2 — Comandos Proxied en Ansible
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["ansible", "handlers", "notify"]
respuesta: handlers
tipo: completar
respuestas_validas:
  - handlers
  - Handlers
enunciado: "En Ansible, para ejecutar una acción solo si una tarea cambia el estado de un sistema (por ejemplo, reiniciar un servicio), se debe usar el módulo `notify` dentro de la tarea y definir la acción correspondiente en la sección `______` del playbook."
pasos:
  - "Identificar la tarea que modifica el estado."
  - "Usar `notify: nombre_del_evento` en esa tarea."
  - "Definir `nombre_del_evento:` bajo la clave `handlers:` al final del playbook."
explicacion: "Los handlers son tareas especiales que solo se ejecutan si son notificados por al menos una tarea que cambió (changed) durante el run."
```

### 3 — Gestión de Estado en Pulumi
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["pulumi", "state", "backend"]
respuesta: pulumi.com
tipo: completar
respuestas_validas:
  - pulumi.com
  - Pulumi.com
  - app.pulumi.com
enunciado: "Si se desea usar el backend por defecto de Pulumi para almacenar el estado de la infraestructura de forma remota y privada sin gestionar servidores propios, se debe configurar el backend apuntando a `https://______`."
pasos:
  - "Instalar CLI de Pulumi."
  - "Ejecutar `pulumi login`."
  - "Seleccionar la opción de nube por defecto."
explicacion: "Pulumi Cloud (app.pulumi.com) ofrece almacenamiento de estado gestionado, historial de despliegues y colaboración integrada."
```

### 4 — Operador de Alias en Kubernetes
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["kubernetes", "yaml", "alias"]
respuesta: "true"
tipo: completar
respuestas_validas:
  - "true"
  - True
  - TRUE
enunciado: "En un manifiesto de Kubernetes, si se desea que un campo `apiVersion` o `kind` tenga un alias para compatibilidad con versiones anteriores, se utiliza la anotación `metadata.annotations[\"kubernetes.io/______\"]` o campos específicos de extensión, pero en el contexto de `apiextensions.k8s.io`, el campo `scope` en `CustomResourceDefinition` define si es Namespaced o ClusterScoped. Sin embargo, para evitar conflictos de nombres en `kubectl` con `--dry-run=server`, se usa `--dry-run=______` para simular sin aplicar."
pasos:
  - "Analizar la necesidad de simular cambios."
  - "Usar `kubectl apply --dry-run=server`."
  - "Verificar la respuesta del servidor."
explicacion: "Esta pregunta es un truco sobre la sintaxis de dry-run. La respuesta correcta para la simulación en el servidor es 'server'. El contexto de alias fue distractor para forzar la búsqueda del flag correcto de kubectl avanzado."
```

### 5 — Validación de Schema en JSON Schema
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["json-schema", "validacion", "strict"]
respuesta: false
tipo: completar
respuestas_validas:
  - false
  - False
  - "false"
enunciado: "Al definir un JSON Schema para validar configuraciones de infraestructura, si se quiere asegurar que no se permitan propiedades adicionales no declaradas en el objeto raíz, se debe establecer `additionalProperties: ______`."
pasos:
  - "Definir el esquema base con `properties`."
  - "Establecer `additionalProperties` a `false`."
  - "Validar un payload con campos extra para verificar el error."
explicacion: "En JSON Schema, `additionalProperties: false` impide la existencia de cualquier clave en el objeto que no esté explícitamente definida en `properties` o `$defs`."
```

### 6 — Resource Group en Azure ARM
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["azure", "arm", "resource-group"]
respuesta: "Location"
tipo: completar
respuestas_validas:
  - Location
  - location
  - LOCATION
enunciado: "En un plantilla ARM (Azure Resource Manager) para crear un `Microsoft.Resources/resourceGroups`, el campo obligatorio que especifica la región geográfica donde se almacenarán los metadatos del grupo de recursos es `______`."
pasos:
  - "Crear un archivo `azuredeploy.json`."
  - "Definir el tipo `Microsoft.Resources/resourceGroups`."
  - "Incluir el par clave-valor `\"location\": \"[parameters('location')]\"`."
explicacion: "A diferencia de los recursos de Azure que heredan la ubicación del grupo, el grupo de recursos en sí mismo debe tener una ubicación explícita definida en su propiedad `location`."
```

### 7 — Output de Terraform Remote
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "output", "sensitive"]
respuesta: "true"
tipo: completar
respuestas_validas:
  - "true"
  - True
  - TRUE
enunciado: "Para evitar que el valor de una salida (output) de Terraform, como una contraseña o clave API, se muestre en los logs de la consola durante un `terraform apply`, se debe definir la salida con la atributo `sensitive: ______`."
pasos:
  - "Definir el bloque `output` en `.tf`."
  - "Agregar `sensitive = true`."
  - "Ejecutar `terraform apply` y verificar que el valor está oculto."
explicacion: "El atributo `sensitive` marca la salida como confidencial, ocultándola en la CLI y en el estado remoto si está configurado para ello."
```

### 8 — Condition Keys en AWS IAM
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["aws", "iam", "condition"]
respuesta: aws:SourceIp
tipo: completar
respuestas_validas:
  - aws:SourceIp
  - AWS:SourceIp
enunciado: "En una política de IAM de AWS, si se desea restringir el acceso a un recurso de S3 solo desde una dirección IP específica, se utiliza el `Condition` con el operador `IpAddress` y la clave de contexto `______`."
pasos:
  - "Escribir la política JSON."
  - "Añadir el bloque `Condition`."
  - "Usar `IpAddress: { aws:SourceIp: \"192.0.2.0/24\" }`."
explicacion: "La clave `aws:SourceIp` es el contexto estándar de IAM para filtrar por dirección IP de origen del cliente."
```

### 9 — Helm Template Function
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["helm", "templates", "sprig"]
respuesta: required
tipo: completar
respuestas_validas:
  - required
  - Required
enunciado: "En las plantillas Helm (Go Text Template), para detener el renderizado y lanzar un error si una variable requerida no está definida en `values.yaml`, se utiliza la función `______ \"Nombre del error\" .Values.variable`."
pasos:
  - "Abrir `deployment.yaml` en la plantilla."
  - "Usar `{{ required \"El campo app.name es obligatorio\" .Values.app.name }}`."
  - "Renderizar con `helm template` para probar."
explicacion: "La función `required` es crucial para la validación de entradas en Helm, asegurando que los usuarios proporcionen los valores necesarios antes de aplicar."
```

### 10 — State Locking en Consul
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "consul", "locking"]
respuesta: true
tipo: completar
respuestas_validas:
  - true
  - True
  - TRUE
enunciado: "Al configurar el backend de estado remoto de Terraform para usar HashiCorp Consul, para habilitar el bloqueo automático del estado y prevenir escrituras concurrentes, se debe establecer el parámetro `lock = ______` en la configuración del backend."
pasos:
  - "Definir el backend `consul` en `backend.tf`."
  - "Añadir `lock = true`."
  - "Verificar el bloqueo en la interfaz de Consul durante un apply."
explicacion: "Consul proporciona un mecanismo de bloqueo distribuido nativo. Terraform lo usa para asegurar la integridad del estado."
```

### 11 — Retry Logic en GitHub Actions
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["github-actions", "retry", "workflow"]
respuesta: "3"
tipo: completar
respuestas_validas:
  - "3"
  - 3
  - tres
enunciado: "En un workflow de GitHub Actions, si un job falla debido a una intermitencia de red, se puede configurar el atributo `continue-on-error: false` (por defecto) y usar el atributo `timeout-minutes`. Sin embargo, para reintentos automáticos de *steps* fallidos, se utiliza el atributo `retry:` en el nivel de job. ¿Cuál es el valor máximo entero permitido para el atributo `retries` en un job de GitHub Actions?"
pasos:
  - "Consultar la documentación de GitHub Actions."
  - "Buscar el límite de `retries`."
  - "Configurar `retries: 3` en el job."
explicacion: "GitHub Actions permite especificar `retries` en un job para reintentar todo el job en caso de fallo. El límite máximo es 3 reintentos."
```

### 12 — Provider Block en Pulumi
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["pulumi", "provider", "config"]
respuesta: "aws:region"
tipo: completar
respuestas_validas:
  - aws:region
  - AWS:region
enunciado: "En Pulumi con el proveedor de AWS, para especificar la región por defecto para todos los recursos creados en el stack sin hardcodearla en cada recurso, se utiliza la configuración de la CLI: `pulumi config set ______ us-east-1`."
pasos:
  - "Iniciar un stack de Pulumi."
  - "Ejecutar el comando de configuración de región."
  - "Verificar que los nuevos recursos se crean en esa región."
explicacion: "La configuración `aws:region` es la forma estándar de establecer la región global para el proveedor AWS en Pulumi."
```

### 13 — Variable Type Constraints en Terraform
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "variables", "types"]
respuesta: map(string)
tipo: completar
respuestas_validas:
  - map(string)
  - Map(string)
  - map(String)
enunciado: "En Terraform, para declarar una variable de entrada que acepte una estructura de pares clave-valor donde tanto las claves como los valores son cadenas, el tipo de dato correcto en el bloque `variable` es `type = ______`."
pasos:
  - "Definir `variable \"tags\" {}`."
  - "Añadir `type = map(string)`."
  - "Asignar `tags = { env = \"prod\" }`."
explicacion: "Terraform usa `map(string)` para diccionarios de cadena. `object({...})` se usa para estructuras más complejas y tipadas."
```

### 14 — Ansible Lookup Plugin
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["ansible", "lookup", "secrets"]
respuesta: hashi_vault
tipo: completar
respuestas_validas:
  - hashi_vault
  - HashiVault
  - hashivault
enunciado: "En Ansible, para recuperar un secreto almacenado en HashiCorp Vault directamente en un playbook sin escribirlo en variables planas, se utiliza el plugin de lookup `______`."
pasos:
  - "Instalar el plugin `hvac` o configurar el entorno."
  - "Usar `{{ lookup('hashi_vault', 'secret=secret/data/myapp:password') }}`."
  - "Verificar que la variable se llena dinámicamente."
explicacion: "El plugin `hashi_vault` permite la integración nativa con Vault para la gestión de secretos en tiempo de ejecución."
```

### 15 — Kubernetes Ingress Class
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["kubernetes", "ingress", "controller"]
respuesta: nginx
tipo: completar
respuestas_validas:
  - nginx
  - Nginx
  - NGINX
enunciado: "Para asociar un recurso `Ingress` de Kubernetes con un controlador de ingress específico instalado en el clúster, se utiliza la anotación `kubernetes.io/ingress.class: \"______\"` o el campo `ingressClassName: \"______\"` en la versión actual de la API."
pasos:
  - "Crear el manifiesto Ingress."
  - "Añadir `ingressClassName: nginx`."
  - "Aplicar y verificar el backend."
explicacion: "El campo `ingressClassName` es la forma moderna de seleccionar el controlador (ej. nginx, alb, contour) para el recurso Ingress."
```

### 16 — Sensitive Inputs en Pulumi
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["pulumi", "secrets", "encryption"]
respuesta: "true"
tipo: completar
respuestas_validas:
  - "true"
  - True
  - TRUE
enunciado: "En Pulumi, para marcar una propiedad de un recurso como confidencial y asegurar que su valor se encripte en el estado remoto, se utiliza el método `apply` combinado con `pulumi.secret()` o se configura el backend. Sin embargo, para definir una salida como secreta en el recurso, a menudo se usa el argumento `secret: ______` en constructores de recursos específicos o en la configuración del stack."
pasos:
  - "Identificar el recurso sensible."
  - "Marcar la propiedad con `secret: true`."
  - "Verificar el estado encriptado."
explicacion: "Muchos constructores de recursos en Pulumi aceptan un argumento booleano `secret` para marcar salidas específicas como cifradas."
```

### 17 — Terraform Import Command
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "import", "migration"]
respuesta: "terraform import"
tipo: completar
respuestas_validas:
  - terraform import
  - Terraform Import
enunciado: "Para traer un recurso de infraestructura existente gestionado manualmente al estado de control de Terraform sin recrearlo, se ejecuta el comando `______ <TIPO.RECURSO> <ID_REAL>`."
pasos:
  - "Tener el ID del recurso existente."
  - "Ejecutar `terraform import aws_instance.mi_servo i-123456`."
  - "Ajustar la configuración HCL para coincidir."
explicacion: "El comando `terraform import` vincula un recurso físico con una entrada en el estado de Terraform."
```

### 18 — Ansible Jinja2 Filter
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["ansible", "jinja2", "filter"]
respuesta: to_json
tipo: completar
respuestas_validas:
  - to_json
  - ToJson
  - tojson
enunciado: "En una tarea de Ansible, si se tiene un diccionario en una variable y se necesita convertirlo a una cadena JSON válida para pasarla como argumento a un módulo que espera JSON (como `uri` o `command` con parámetros complejos), se utiliza el filtro `______`."
pasos:
  - "Definir `vars: mi_dict: { key: val }`."
  - "Usar `mi_dict | to_json` en el template."
  - "Verificar la salida."
explicacion: "El filtro `to_json` serializa objetos Python/diccionarios en formato JSON."
```

### 19 — Azure Resource Graph Query
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["azure", "resource-graph", "kql"]
respuesta: Resources
tipo: completar
respuestas_validas:
  - Resources
  - resources
  - RESOURCES
enunciado: "En Azure Resource Graph (KQL), para consultar todos los recursos de suscripción a los que tiene acceso el usuario, se utiliza la tabla `______`."
pasos:
  - "Usar el plugin de Azure CLI o Portal."
  - "Escribir `Resources | project name, type`."
  - "Ejecutar la consulta."
explicacion: "La tabla `Resources` es la tabla principal que contiene metadatos de todos los recursos en las suscripciones consultadas."
```

### 20 — Pulumi Config Secret
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["pulumi", "config", "encryption"]
respuesta: "true"
tipo: completar
respuestas_validas:
  - "true"
  - True
  - TRUE
enunciado: "Para guardar una configuración de Pulumi como un valor encriptado (secreto) en lugar de texto plano, se utiliza el comando `pulumi config set <CLAVE> <VALOR> --secret` o se establece la bandera `--______`."
pasos:
  - "Ejecutar `pulumi config set api_key mysecret --secret`."
  - "Verificar que el valor en el stack está cifrado."
  - "Usar la variable en el código."
explicacion: "La bandera `--secret` indica a Pulumi que use el proveedor de secretos configurado (ej. AES) para cifrar el valor antes de almacenarlo."
```

### 21 — Kubernetes Service Type
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["kubernetes", "service", "loadbalancer"]
respuesta: LoadBalancer
tipo: completar
respuestas_validas:
  - LoadBalancer
  - loadbalancer
  - LOADBALANCER
enunciado: "En Kubernetes, para exponer un conjunto de pods a internet mediante una dirección IP pública asignada por el proveedor de cloud (AWS ELB, GCP LB, etc.), se debe definir el campo `spec.type: ______` en el objeto Service."
pasos:
  - "Crear el manifiesto Service."
  - "Establecer `type: LoadBalancer`."
  - "Esperar la asignación de la IP externa."
explicacion: "El tipo `LoadBalancer` solicita al cloud provider que cree un balanceador de carga externo y asigne una IP."
```

### 22 — Terraform Provider Version Constraint
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["terraform", "provider", "versioning"]
respuesta: "~> 4.0"
tipo: completar
respuestas_validas:
  - "~> 4.0"
  - ~> 4.0
  - "~>4.0"
enunciado: "En el bloque `required_providers` de Terraform, para especificar que se debe usar la versión 4.x del proveedor AWS (permitiendo actualizaciones menores pero no mayores), la restricción de versión correcta es `version = ______`."
pasos:
  - "Editar `terraform.tf`."
  - "Añadir `required_providers { aws = { source = \"hashicorp/aws\", version = \"~> 4.0\" } }`."
  - "Ejecutar `terraform init`."
explicacion: "El operador `~>` (Pessimistic Constraint) permite versiones >= 4.0 y < 5.0."
```

### 23 — Ansible Role Variable Scope
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["ansible", "roles", "variables"]
respuesta: defaults
tipo: completar
respuestas_validas:
  - defaults
  - Defaults
  - DEFAULTS
enunciado: "En una estructura de roles de Ansible, para definir variables con la prioridad más baja (que pueden ser sobrescritas por variables del playbook, de la tarea o de grupo de hosts), se debe crear un archivo `______.yml` dentro del directorio `vars` del rol."
pasos:
  - "Crear `roles/mirol/vars/defaults.yml`."
  - "Definir `mi_var: valor_default`."
  - "Verificar la jerarquía de variables."
explicacion: "Las variables en `defaults/main.yml` (o `defaults.yml`) tienen la menor prioridad en la jerarquía de Ansible."
```

### 24 — GitHub Actions Environment
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["github-actions", "environment", "protection"]
respuesta: protection_rules
tipo: completar
respuestas_validas:
  - protection_rules
  - ProtectionRules
  - protection-rules
enunciado: "En GitHub Actions, para requerir aprobación manual antes de que un job pueda desplegarse en un entorno específico (ej. 'producción'), se configuran `______` dentro de la definición del entorno en el repositorio."
pasos:
  - "Ir a Settings > Environments."
  - "Añadir el entorno 'producción'."
  - "Configurar `Required reviewers` bajo `protection_rules`."
explicacion: "Las reglas de protección (`protection_rules`) permiten definir revisores requeridos, restricciones de tiempo y otros límites."
```

### 25 — Pulumi Stack Reference
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-infraestructura-como-codigo"
  nivel: "avanzado"
  tags: ["pulumi", "stack", "reference"]
respuesta: stack
tipo: completar
respuestas_validas:
  - stack
  - Stack
  - STACK
enunciado: "En Pulumi, para leer outputs de otro stack (ej. la IP de un VPC creado en otro stack) dentro de un programa actual, se utiliza la clase `______` de `@pulumi/pulumi` o `pulumi.StackReference` en Python/Go."
pasos:
  - "Instanciar `new pulumi.StackReference(\"vpc-stack\")`."
  - "Obtener `stack.getOutput(\"vpcId\")`."
  - "Usar el ID en la creación de recursos."
explicacion: "La clase `StackReference` permite la interdependencia entre stacks de Pulumi gestionados por la CLI."
```