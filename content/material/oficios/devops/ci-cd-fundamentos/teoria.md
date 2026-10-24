# DevOps — CI/CD fundamentos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../control-de-versiones-git/`, `../contenedores-docker/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/devops/ci-cd-fundamentos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué son CI y CD

- **Integración continua (CI):** cada vez que alguien **sube cambios**, un sistema **automáticamente** **construye** el proyecto y **ejecuta las pruebas**. Se **integra seguido** y se detectan los problemas **cuando todavía son chicos**.
- **Entrega continua (Continuous Delivery):** además, el código **queda siempre listo** para publicarse; **publicar** es un paso **manual** (un botón).
- **Despliegue continuo (Continuous Deployment):** cada cambio que **pasa todas las pruebas** se **publica automáticamente**.

Por eso **CD** puede significar **entrega** o **despliegue** continuos.

**Ventajas:** menos errores, **retroalimentación rápida**, **lanzamientos frecuentes y pequeños** (menos riesgo que uno grande), **menos trabajo manual**, **repetibilidad**.

---

## 2. Un pipeline típico

Un **pipeline** es una **cadena de etapas automáticas** que se ejecuta en cada cambio:

1. **Obtener** el código (`checkout`).
2. **Instalar** las dependencias.
3. **Analizar** el código (**linter**, formato).
4. **Compilar / construir**.
5. **Probar** (unitarias, integración).
6. **Análisis de seguridad** (dependencias vulnerables, secretos filtrados).
7. **Empaquetar** (por ejemplo, una **imagen de contenedor**) y **publicarla** en un registro.
8. **Desplegar** en un entorno de **pruebas** (*staging*).
9. **Pruebas de humo / aceptación**.
10. **Desplegar** en **producción** (con o sin aprobación).

**Si una etapa falla, el pipeline se detiene** y se **avisa** (un ✗ en el pull request).

---

## 3. Herramientas

**GitHub Actions**, **GitLab CI**, **Jenkins**, **CircleCI**, **Azure Pipelines**. Los pipelines se escriben **como código** en archivos **YAML** versionados con el proyecto.

```yaml
name: CI
on: [push, pull_request]
jobs:
  probar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm test
```

- **`on`**: qué eventos lo disparan.
- **`jobs`** y **`steps`**: trabajos y pasos.
- Los **ejecutores** (*runners*) son las **máquinas** que corren los pasos.

---

## 4. Pruebas automáticas

La CI **vale tanto como sus pruebas**. Una **pirámide**: **muchas** unitarias (rápidas), **algunas** de integración, **pocas** de punta a punta. Las pruebas deben ser **rápidas**, **confiables** (que **no fallen al azar**: las "intermitentes" se arreglan o se eliminan) y **fáciles de entender cuando fallan**.

**Regla:** **un pipeline que falla se arregla primero**. Una rama principal **siempre debe estar "verde"** (pasando).

---

## 5. Estrategias de despliegue

| Estrategia | Cómo es | Ventaja | Riesgo |
|:--|:--|:--|:--|
| **Reemplazo directo** | se reemplaza la versión | simple | corte breve; difícil volver |
| **Gradual (rolling)** | se actualiza de a un servidor | sin cortes | dos versiones conviven |
| **Azul/verde** | dos entornos idénticos y se cambia el tráfico | **vuelta atrás inmediata** | cuesta el doble de recursos |
| **Canario** | se prueba con **un porcentaje pequeño** de usuarios | detecta problemas con **poco impacto** | más complejo |

Siempre debe haber un **plan de reversa** (*rollback*) y una forma de **verificar** que todo funciona (chequeos de salud, monitoreo).

---

## 6. Configuración y secretos

- **Separar** la configuración del código (**variables de entorno**).
- **Secretos** (claves, tokens) en el **almacén de secretos** de la plataforma, **nunca en el repositorio** ni **en los registros** del pipeline.
- **Mínimo privilegio** para el pipeline.
- **Entornos separados** (desarrollo, pruebas, producción) con **configuración propia**.
- **Aprobaciones** antes de **producción** en cambios sensibles.

---

## 7. Migraciones y bases de datos

Los cambios en la base deben ser **migraciones versionadas** y **compatibles hacia atrás** (que la **versión anterior** siga funcionando mientras se actualiza). **Probar las migraciones** y **tener copia de seguridad** antes de aplicar en producción.

---

## 8. Buenas prácticas

1. **Commits pequeños** y **ramas de corta vida**.
2. **Pipelines rápidos** (minutos): si tardan mucho, **dividirlos** o **paralelizarlos**, y usar **caché**.
3. **Construir una vez y desplegar la misma imagen** en todos los entornos.
4. **Monitorear** tras el despliegue.
5. **Registro** claro de **qué versión** está en cada entorno.
6. **Automatizar** todo lo repetible.
7. **Cultura:** la **responsabilidad es del equipo**: si se rompe, **se arregla entre todos**.
