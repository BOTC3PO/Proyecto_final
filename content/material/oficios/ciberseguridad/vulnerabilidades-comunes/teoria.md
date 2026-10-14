# Ciberseguridad — Vulnerabilidades comunes (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/seguridad-informatica/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciberseguridad/vulnerabilidades-comunes/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

> **Alcance:** este tema es **defensivo y educativo**. Se estudian las fallas para **prevenirlas y detectarlas**. **Probar la seguridad de sistemas ajenos sin autorización expresa es ilegal.** Se practica **solo** en entornos **propios**, de **laboratorio** o con **permiso escrito**.

## 1. Conceptos

- **Vulnerabilidad:** una **debilidad** (en el código, la configuración o las personas) que **se puede aprovechar**.
- **Amenaza:** quien o lo que **puede** aprovecharla (un delincuente, un error, un desastre).
- **Riesgo:** la **probabilidad** de que ocurra **por el daño** que causaría.
- **Ataque:** un intento concreto de aprovecharla.
- **Triada CIA:** **Confidencialidad** (solo ven quienes deben), **Integridad** (no se altera sin permiso) y **Disponibilidad** (se puede usar cuando se necesita).

Una lista de referencia muy usada es el **OWASP Top 10** (los riesgos más comunes en aplicaciones web).

---

## 2. Vulnerabilidades comunes y cómo prevenirlas

| Vulnerabilidad | Qué es | Prevención |
|:--|:--|:--|
| **Inyección (SQL, comandos)** | datos del usuario se interpretan como **código** | **consultas parametrizadas**, validar entradas, **mínimo privilegio** en la base |
| **XSS** (*cross-site scripting*) | se inserta **código** en una página que **ven otras personas** | **escapar** la salida, usar `textContent`, política de seguridad de contenido (**CSP**) |
| **Autenticación débil** | claves **fáciles**, sin límite de intentos | **contraseñas largas**, **MFA**, límite de intentos |
| **Control de acceso roto** | ver o cambiar **datos ajenos** (`/pedido/125`) | **comprobar los permisos en el servidor**, en **cada** petición |
| **Exposición de datos sensibles** | datos en texto plano, sin HTTPS | **cifrar** en tránsito y en reposo; **no guardar** lo innecesario |
| **Mala configuración** | claves por defecto, **modo debug** en producción, puertos abiertos | **endurecer** (hardening), revisar la configuración |
| **Componentes desactualizados** | bibliotecas con fallas conocidas | **actualizar**, **inventariar** dependencias, escanear |
| **CSRF** | otra página hace que tu navegador **envíe una acción** a un sitio donde tenés sesión | **tokens anti-CSRF**, cookies `SameSite` |
| **Deserialización insegura / carga de archivos** | se procesa algo **construido** por el atacante | **validar**, **limitar** tipos y tamaños, **guardar fuera** de la raíz web |
| **Secretos en el código** | claves en el repositorio | **gestor de secretos**, **variables de entorno**, **revocar** si se filtraron |
| **Registro y monitoreo insuficientes** | no se detectan los ataques | **registrar** eventos importantes y **alertar** |
| **SSRF** | el servidor es **engañado** para hacer **peticiones** internas | **listas de destinos permitidos**, segmentar la red |

---

## 3. Ejemplo: inyección SQL

**Mal** (se arma la consulta **pegando texto**):

```python
consulta = "SELECT * FROM usuarios WHERE nombre = '" + nombre + "'"
```

Si `nombre` contiene comillas y sentencias, **cambia el sentido de la consulta**.

**Bien** (**parámetros**: el dato **nunca** se interpreta como SQL):

```python
cursor.execute("SELECT * FROM usuarios WHERE nombre = %s", (nombre,))
```

**Regla general:** **separar siempre el código de los datos**.

---

## 4. Ingeniería social

**La parte más débil suele ser la persona.** Técnicas:

- **Phishing:** correos o mensajes **falsos** que piden **clics, claves o datos**.
- **Smishing** (SMS) y **vishing** (llamadas).
- **Pretexting:** **inventar** una historia para obtener información.
- **Baiting:** dejar un **pendrive** "tentador".
- **Suplantación** de una persona de autoridad (el "jefe" que pide una transferencia urgente).

**Señales:** **urgencia**, **amenazas**, **errores** de ortografía, **remitente raro**, **enlaces** que no coinciden con el destino, **pedidos de claves**. **Defensa:** **desconfiar**, **verificar por otro canal**, **no abrir adjuntos inesperados**, **MFA**, **capacitación**.

---

## 5. Malware

- **Virus / gusano:** se **propagan**.
- **Troyano:** parece **legítimo** pero hace otra cosa.
- **Ransomware:** **cifra** los archivos y **pide un rescate**. **Defensa:** **copias de seguridad desconectadas y probadas**, actualizaciones, **no abrir** adjuntos dudosos.
- **Spyware / keylogger:** **espían**.
- **Botnet:** equipos infectados **controlados** a distancia.

---

## 6. Defensa en profundidad

**Ninguna medida alcanza sola**. Se combinan **capas**: **personas** (capacitación), **políticas**, **seguridad física**, **red** (firewall, segmentación), **equipos** (antivirus, actualizaciones), **aplicación** (código seguro), **datos** (cifrado, copias). Si **una capa falla**, **otra** protege.

**Mínimo privilegio**, **actualizaciones**, **copias de seguridad**, **MFA** y **capacitación** previenen la **gran mayoría** de los incidentes.

---

## 7. Qué hacer ante un incidente

1. **Mantener la calma** y **no borrar** evidencia.
2. **Aislar** el equipo (desconectar de la red).
3. **Avisar** a quien corresponda (responsable de seguridad, soporte).
4. **Cambiar** las claves afectadas (desde un equipo **limpio**).
5. **Restaurar** desde copias **limpias**.
6. **Aprender**: ¿cómo entró? ¿qué falló?
7. **Notificar** a las personas afectadas cuando corresponda.

---

## 8. Divulgación responsable

Si se encuentra una falla en un sistema ajeno **sin buscarla**, lo **correcto** es **avisar** a quien administra el sistema (**divulgación responsable**), **sin explotarla**, **sin acceder a datos** y **sin publicarla** antes de que se corrija.
