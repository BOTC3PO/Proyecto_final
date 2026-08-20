# DevOps: Infraestructura como Código (Avanzado)

## Introducción: Más allá de la automatización básica

En el nivel avanzado de DevOps, la Infraestructura como Código (IaC) deja de ser simplemente una herramienta para aprovisionar servidores y se convierte en el núcleo de la gobernanza, la seguridad y la consistencia de los entornos. Ya no se trata solo de "levantar una máquina virtual", sino de tratar la infraestructura con la misma rigurosidad que el código de aplicación: versionado, revisado, testeado y desplegado mediante pipelines CI/CD. El objetivo es eliminar la deriva de configuración (*configuration drift*) y garantizar que el estado deseado sea reproducible en cualquier momento, eliminando la dependencia de la memoria humana o de scripts *ad-hoc*.

## Principios de IaC Avanzado y Sintaxis Real

A diferencia de los scripts imperativos (como Bash), las herramientas modernas de IaC (Terraform, Ansible, CloudFormation) suelen ser declarativas. Esto significa que defines **qué** quieres, no **cómo** lograrlo paso a paso.

### Ejemplos de sintaxis en Terraform

En Terraform, la infraestructura se define en archivos `.tf`. Un error común al nivel avanzado es no gestionar adecuadamente las dependencias implícitas.

```hcl
# Definición de un grupo de seguridad (Security Group)
resource "aws_security_group" "web_sg" {
  name        = "web-sg"
  description = "Permite tráfico HTTP y HTTPS"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Dependencia implícita: Terraform sabe que la SG debe existir antes de la instancia
}

resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.web_sg.id]
}
```

### Ansible y el estado de la configuración

En Ansible, el enfoque es de configuración de estado. Es crucial entender la idempotencia: ejecutar el mismo *playbook* múltiples veces no debe cambiar el estado después de la primera aplicación exitosa.

```yaml
- name: Configurar servidor web
  hosts: webservers
  tasks:
    - name: Asegurar que nginx esté instalado y corriendo
      ansible.builtin.package:
        name: nginx
        state: present
      notify:
        - Restart nginx

  handlers:
    - name: Restart nginx
      ansible.builtin.service:
        name: nginx
        state: restarted
```

## Errores comunes en IaC Avanzado

1.  **Hardcoding de credenciales:** Ingresar claves de API o contraseñas directamente en el código. Esto es un riesgo crítico de seguridad. Deben usarse siempre variables de entorno, gestores de secretos (como AWS Secrets Manager o HashiCorp Vault) o archivos de variables externos no versionados.
2.  **Ignorar el manejo de errores y `null`:** En Terraform, si se elimina un recurso dependiente manualmente, el plan puede fallar silenciosamente o romper la infraestructura. Usar `depends_on` explícitamente o módulos con salidas (`outputs`) bien definidas es vital.
3.  **State File descontrolado:** En equipos colaborativos, el archivo de estado (`terraform.tfstate`) es el puente entre la realidad y el código. No usar backend remoto (S3, Terraform Cloud) con bloqueo (*locking*) causa corrupción de estado y sobrescritura de recursos.
4.  **Ansible sin validación:** Ejecutar *playbooks* complejos sin ejecutar primero `ansible-playbook --syntax-check` o probar en un entorno de staging idéntico al de producción.

## Cuándo usar IaC y cuándo NO usarlo

**Usa IaC cuando:**
*   Necesitas reproducibilidad exacta entre entornos (dev, staging, prod).
*   La infraestructura es compleja (múltiples regiones, alta disponibilidad, redes VPC).
*   Se requiere auditoría y trazabilidad de cambios (quién cambió qué y cuándo).
*   El ciclo de vida de los recursos es corto (entornos efímeros para testing).

**Evita o complementa con cuidado cuando:**
*   Se trata de configuraciones muy esporádicas y únicas (un solo servidor que nunca se repetirá). Aquí, un script Bash rápido puede ser más pragmático, aunque sigue siendo mejor práctica documentarlo.
*   La infraestructura es gestionada por otros equipos o proveedores con limitaciones severas de API. No fuerces IaC donde la herramienta subyacente no lo soporte nativamente; usa la API directamente o scripts de integración.
*   El costo de mantenimiento del código IaC supera el valor de la automatización (ej. infraestructura mínima para un prototipo de 2 días).

## Ejemplo Extendido: Despliegue de una Arquitectura Multi-AZ

Imagina que debes desplegar una aplicación web en AWS que requiere alta disponibilidad. No basta con lanzar dos instancias.

1.  **Modularización:** Creas un módulo `vpc` que define subnets públicas y privadas en múltiples zonas de disponibilidad (AZ). Esto asegura que si una AZ falla, la otra opera.
2.  **Gestión de Estado:** Configuras un backend S3 con DynamoDB para locking. Esto permite que dos ingenieros trabajen en el mismo código sin corromper el estado.
3.  **Variables de Entorno:** Usas `terraform.tfvars` separados para `dev`, `staging` y `prod`. En `prod`, las instancias son de mayor tamaño y el almacenamiento es multi-AZ.
4.  **Pipeline CI/CD:**
    *   `terraform fmt`: Formatea el código.
    *   `terraform validate`: Valida la sintaxis.
    *   `terraform plan`: Genera un plan de ejecución y lo guarda como artefacto.
    *   `terraform apply`: Solo tras aprobación manual en el pipeline.
5.  **Provisioners (con cautela):** En lugar de usar `remote-exec` para instalar software (que es frágil), usas `user_data` en el `aws_instance` para ejecutar un script de inicio que instala dependencias, o mejor aún, usas imágenes AMI pre-construidas con Packer.

Este enfoque garantiza que tu infraestructura no sea solo "código", sino un activo gestionado, seguro y escalable.