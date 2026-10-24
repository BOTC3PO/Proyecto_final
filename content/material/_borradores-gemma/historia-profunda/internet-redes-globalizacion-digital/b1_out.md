### 1 — El origen de ARPANET
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["arpanet", "eeuu", "militar"]

tipo: mc
opciones_explicitas: ["Una red civil para usuarios domésticos", "Un proyecto de investigación militar y académico de EE.UU.", "Una red de televisión satelital", "Un sistema de mensajería privada para gobiernos"]

enunciado: "ARPANET, el precursor de la internet moderna, fue concebida originalmente como ___."

explicacion: |
  ARPANET fue creada por la ARPA (Advanced Research Projects Agency) del Departamento de Defensa de EE.UU. para permitir la comunicación entre computadoras de distintas universidades y centros de investigación.
```

### 2 — El protocolo fundamental
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolo", "tcp_ip", "estandar"]

variables:
  escenario: uno_de([[ "TCP/IP", "HTTP", "FTP" ]])

tipo: completar
respuestas_validas: ["TCP/IP", "HTTP", "FTP"]

enunciado: "Para que la red pasara de ser un conjunto de redes aisladas a una red global interconectada, se estandarizó el uso del protocolo ___."

explicacion: |
  El conjunto de protocolos TCP/IP permitió que redes heterogéneas se comunicaran entre sí, estableciendo el lenguaje común que permitió la expansión de la internet global.
```

### 3 — Evolución de la red
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["world_wide_web", "tim_berners_lee", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Creación de ARPANET", "Desarrollo de la World Wide Web (WWW)", "Masificación de la internet comercial"]

enunciado: "Ordena cronológicamente los hitos clave en la evolución de la red:"

explicacion: |
  Primero surgió la infraestructura de ARPANET (años 60-70), luego Tim Berners-Lee desarrolló la WWW en el CERN (principios de los 90), y finalmente la red se convirtió en un servicio comercial masivo para el público general.
```

### 4 — La era de la información
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["web_2.0", "globalizacion", "interaccion"]

variables:
  tipo_web: uno_de([[ ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"] ]])

tipo: mc
opciones_explicitas: ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]

enunciado: "La transición de una red de solo lectura a una red donde el usuario es creador de contenido se conoce como la era de la {tipo_web[0]}."

explicacion: |
  La Web 2.0 permitió la democratización de la creación de contenido a través de redes sociales, blogs y wikis, cambiando el paradigma de la comunicación digital.
```

### 5 — Impacto de la digitalización
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["globalizacion", "impacto"]

tipo: input
tolerancia_abs: 0

enunciado: "Si consideramos que la globalización digital ha reducido las distancias, ¿cuántos continentes están conectados hoy por la infraestructura de internet? (Respuesta numérica: 7)"

pasos:
  - "Se reconoce la existencia de una infraestructura global."
  - "Se identifica la cobertura en todos los continentes habitados."

explicacion: |
  Aunque la infraestructura no es perfecta en todas las zonas, la red de internet es considerada una red global que conecta los 7 continentes del planeta.
```