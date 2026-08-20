# Diagnóstico por Casos en Redes: Enfoque Avanzado

## Introducción
El diagnóstico por casos es una metodología sistemática utilizada por ingenieros de redes senior para resolver incidentes complejos donde los síntomas no apuntan directamente a una causa raíz obvia. A diferencia del troubleshooting lineal (que sigue una lista de verificación), el enfoque por casos se basa en la creación y validación de hipótesis derivadas de patrones históricos, arquitectura de red y análisis de tráfico. En entornos empresariales o de proveedores de servicios, este método es crucial para reducir el MTTR (Mean Time to Repair) en fallos intermitentes o de baja probabilidad.

## Explicación Central: El Ciclo Hipotético-Deductivo

El núcleo del diagnóstico avanzado radica en no asumir, sino demostrar. Se sigue un flujo lógico: observación $\rightarrow$ hipótesis $\rightarrow$ prueba $\rightarrow$ validación/refutación.

### 1. Observación y Aislamiento de Síntomas
No se trata de mirar "qué está rojo" en el panel de monitoreo, sino de correlacionar eventos. Por ejemplo, si un usuario reporta lentitud, no asumas congestión. Verifica:
*   ¿Ocurre en todas las VLANs o solo en una?
*   ¿Coincide con picos de tráfico de backup?
*   ¿Hay cambios recientes en la configuración de QoS?

### 2. Formulación de Hipótesis Basada en Evidencia
Utiliza herramientas de análisis profundo para generar suposiciones fundamentadas.
*   **Ejemplo real:** Si observas *TCP Retransmissions* en `Wireshark` pero no hay pérdida de paquetes en el enlace físico, la hipótesis podría ser un problema de MTU (Path MTU Discovery fallido) o un bufferbloat en un switch de capa 2.
*   **Comando de verificación:** En dispositivos Cisco, `show interface <interfaz> | include drops|overruns` ayuda a descartar saturación de hardware. En Linux, `ss -i` muestra detalles de estado de conexiones TCP.

### 3. Prueba Controlada y Aislamiento
Para validar una hipótesis, debes aislar variables.
*   **Prueba de conectividad escalonada:** Usa `traceroute` o `mtr` para ver dónde se cae la latencia. Si el salto A-B es estable pero B-C tiene jitter alto, el problema está en el proveedor o en la cola de B.
*   **Simulación de tráfico:** En lugar de esperar a que el usuario reporte el fallo, genera tráfico sintético (ej. `iperf3`) entre dos puntos para medir el ancho de banda real sin ruido de usuarios.

### 4. Validación y Documentación
Si la hipótesis se confirma, la solución es temporal hasta que se aplique el parche o cambio de configuración permanente. Documenta el caso: qué síntoma llevó a qué hipótesis y por qué otras causas fueron descartadas. Esto alimenta la base de conocimiento futura.

## Errores Comunes en el Nivel Avanzado

1.  **Confundir correlación con causalidad:** Ver que un switch se reinició y luego cayó la red no significa que el switch causó la caída. Podría haber sido un bucle de loopback que saturó la CPU antes del reinicio.
2.  **Ignorar la capa física en diagnósticos lógicos:** Asumir que porque el protocolo OSPF está "Up", la red funciona. Un cable dañado que causa errores CRC puede hacer que OSPF falle intermitentemente sin bajar la interfaz.
3.  **Sobrecarga de logs:** Habilitar debugging en todos los routers simultáneamente sin filtrar. Esto puede causar un *CPU spike* que agrava el problema original. Usa siempre filtros (ej. `debug ip packet 100 detail` con ACLs específicas).

## Cuándo Usar / Cuándo NO Usar

*   **Usar cuando:** El fallo es intermitente, afecta a usuarios específicos en ubicaciones específicas, o cuando los monitoreos estándar no muestran anomalías claras. Es ideal para problemas de seguridad (ataques DDoS de capa 7) o de rendimiento de aplicaciones.
*   **No usar cuando:** Hay una caída masiva de la red con un cambio de configuración reciente conocido. En esos casos, la rollback (reversión) inmediata es prioritaria sobre el análisis profundo. También es ineficaz si no tienes visibilidad (logs, SNMP, NetFlow) en los puntos críticos de la red.

## Ejemplo Extendido en Contexto

**Caso:** Usuarios del departamento de Finanzas reportan que los archivos grandes se cuelgan al transferirlos vía SFTP a las 14:00 hs, pero todo funciona bien a las 10:00 hs.

1.  **Observación:** El monitoreo muestra que el enlace WAN entre la sede y el datacenter tiene un 60% de uso promedio, pero picos al 95% a las 14:00.
2.  **Hipótesis 1 (Conexión lenta):** ¿Es el enlace físico insuficiente?
    *   *Prueba:* Ejecutar `iperf3` desde un servidor de Finanzas a un servidor de prueba interno a las 14:00. Resultado: Velocidad máxima alcanzada. La hipótesis se refuta; el problema no es el ancho de banda total, sino la calidad del servicio.
3.  **Hipótesis 2 (QoS mal configurada):** ¿Se están priorizando otros flujos sobre SFTP?
    *   *Prueba:* Analizar el tráfico con `tcpdump` en el router de borde. Se observa que los paquetes SFTP tienen una marca DSCP 0 (best-effort) mientras que el tráfico de VoIP tiene EF. Sin embargo, la política QoS está configurada para dar prioridad a VoIP, pero no hay una política de reserva para el resto.
4.  **Hipótesis 3 (Bufferbloat en Switch de Acceso):** ¿El switch está acumulando paquetes?
    *   *Prueba:* Revisar `show queueing` en el switch de acceso de Finanzas. Se detectan *output drops* en la cola de salida hacia el router de borde durante los picos.
5.  **Solución:** Se ajusta la política de QoS para incluir un *class-map* específico para SFTP/FTP con un mínimo de ancho de banda garantizado (min-bw) y se habilita CBWFQ (Class-Based Weighted Fair Queuing) para evitar que el tráfico de VoIP expulse completamente los datos críticos.

Este caso ilustra cómo el diagnóstico por casos avanza desde lo obvio (ancho de banda) hasta lo sutil (gestión de colas y prioridades), salvando horas de investigación innecesaria.