# DevOps — Infraestructura como código (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../ci-cd-fundamentos/`, `../../bash/scripts-ejecutables-y-permisos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/devops/infraestructura-como-codigo/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. La idea

**Infraestructura como código** (*IaC*) es **definir servidores, redes, bases de datos y configuraciones en archivos de texto** y **crearlos automáticamente** a partir de ellos, en lugar de hacerlo **a mano** con clics y comandos sueltos.

**Problemas del trabajo manual:** es **lento**, **no se puede repetir igual**, **depende de la memoria** de alguien, **no deja registro** y produce **"servidores copo de nieve"** (cada uno **distinto** y nadie sabe por qué).

**Ventajas de IaC:** **repetibilidad**, **rapidez**, **versionado en Git** (historia, revisión, vuelta atrás), **documentación viva**, **menos errores** y **entornos idénticos** (desarrollo, pruebas, producción).

---

## 2. Declarativo e imperativo

- **Declarativo:** se describe **el estado final deseado** ("quiero 3 servidores con esta configuración") y la **herramienta** decide **cómo llegar**. Ejemplos: **Terraform**, **CloudFormation**, **Kubernetes**.
- **Imperativo (procedural):** se describen **los pasos** a ejecutar ("instalá esto, copiá aquello"). Ejemplo: **scripts Bash**.

Lo declarativo es más **fácil de razonar** y se puede **volver a aplicar** sin duplicar nada.

---

## 3. Idempotencia

Una operación es **idempotente** cuando **aplicarla varias veces produce el mismo resultado** que aplicarla una. Es **la propiedad clave** de IaC: se puede **volver a ejecutar** sin romper nada ni crear duplicados.

```bash
# NO idempotente: agrega la línea cada vez que se ejecuta
echo "export MODO=prod" >> ~/.bashrc

# Idempotente: la agrega solo si falta
grep -q "export MODO=prod" ~/.bashrc || echo "export MODO=prod" >> ~/.bashrc
```

Las buenas herramientas lo resuelven solas (`mkdir -p`, "estado deseado").

---

## 4. Tipos de herramientas

| Tipo | Para qué | Ejemplos |
|:--|:--|:--|
| **Aprovisionamiento** | **crear** la infraestructura (servidores, redes, bases) | Terraform, OpenTofu, CloudFormation, Pulumi |
| **Gestión de configuración** | **configurar** lo que ya existe (instalar, ajustar) | Ansible, Puppet, Chef |
| **Contenedores y orquestación** | **empaquetar y ejecutar** aplicaciones | Docker, Kubernetes |

---

## 5. Un ejemplo con Terraform

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0123456789abcdef0"
  instance_type = "t3.micro"
  tags = {
    Name = "servidor-web"
  }
}
```

Ciclo de trabajo:

```bash
terraform init       # prepara
terraform plan       # muestra qué cambiaría (sin cambiar nada)
terraform apply      # aplica los cambios
terraform destroy    # elimina lo creado
```

- **`plan` antes de `apply`**: se **revisa** lo que va a pasar.
- **Estado** (*state*): un archivo que **registra** lo que Terraform administra. Contiene **datos sensibles**: se guarda en un **lugar remoto, protegido y con bloqueo**, **no en Git**.
- **Variables** y **módulos** para **reutilizar** y **parametrizar**.

---

## 6. Un ejemplo con Ansible

```yaml
- hosts: web
  become: true
  tasks:
    - name: Instalar nginx
      ansible.builtin.package:
        name: nginx
        state: present
    - name: Iniciar nginx
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: true
```

`state: present` expresa un **estado deseado**: si ya está instalado, **no hace nada**. **Sin agente**: se conecta por **SSH**.

---

## 7. Prácticas

1. **Todo en Git**, con **revisión de cambios** (pull request).
2. **Probar** en un entorno **de pruebas** antes de **producción**.
3. **Ver el plan** antes de aplicar.
4. **Secretos fuera del código** (gestor de secretos, variables).
5. **Estado protegido.**
6. **Módulos y variables** para **no repetir**.
7. **Etiquetar** los recursos (quién, para qué, costo).
8. **Evitar cambios manuales** ("deriva"): si algo se cambia **a mano**, el código y la realidad **dejan de coincidir**.
9. **Integrar en CI/CD**: validar, planificar y aplicar de forma automática y controlada.
10. **Controlar costos**: destruir lo que no se usa.

---

## 8. Riesgos

- **Aplicar cambios destructivos** sin leer el plan (borrar una base de datos).
- **Filtrar secretos** en el repositorio o el estado.
- **Permisos excesivos** de la cuenta que despliega.
- **Dependencia** de una sola herramienta o proveedor.
- **Costos** inesperados por recursos olvidados.
