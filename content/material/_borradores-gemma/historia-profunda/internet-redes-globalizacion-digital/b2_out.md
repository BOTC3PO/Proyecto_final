### 1 — El origen de la Web
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["tim_berners_lee", "www"]

tipo: mc
opciones_explicitas: ["Un sistema de correo electrónico", "Un sistema de páginas e hipervínculos", "Un protocolo de transferencia de archivos", "Una red de satélites"]

enunciado: "La World Wide Web, propuesta por Tim Berners-Lee entre 1989 y 1991, se define fundamentalmente como un ___ que permitió la navegación masiva por la información."

respuesta: "Un sistema de páginas e hipervínculos"

explicacion: |
  Tim Berners-Lee desarrolló la Web para facilitar el intercambio de información entre científicos, utilizando hipervínculos para conectar documentos digitales.
```

### 2 — Protocolos y lenguajes
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "html"]

variables:
  tecnologia_base: uno_de(["HTML", "HTTP", "URL"])

tipo: completar
respuestas_validas: ["HTML", "HTTP", "URL"]

enunciado: "Para que la Web funcione, se requiere de un lenguaje de marcado para estructurar el contenido llamado {tecnologia_base}, un protocolo de transferencia llamado HTTP y un sistema de localización llamado URL."

respuesta: tecnologia_base

explicacion: |
  La arquitectura de la Web se basa en tres pilares: HTML (lenguaje), HTTP (protocolo) y URL (identificador).
```

### 3 — La diferencia clave
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["internet_vs_web"]

tipo: mc
opciones_explicitas: ["Internet es la infraestructura y la Web es el servicio", "La Web es la infraestructura y Internet es el servicio", "Son términos sinónimos", "La Web es el hardware y Internet el software"]

enunciado: "Es fundamental distinguir que ___."

respuesta: "Internet es la infraestructura y la Web es el servicio"

explicacion: |
  Internet es la red global de redes (infraestructura de cables, routers, etc.), mientras que la Web es uno de los muchos servicios que corren sobre ella.
```

### 4 — Evolución de la navegación
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["navegadores", "mosaic"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Mosaic", "WorldWideWeb"], ["Mosaic", "Netscape"]]
  descripcion: ["el primer navegador gráfico popular que impulsó la Web masiva", "el primer navegador desarrollado por Tim Berners-Lee"]

tipo: completar
respuestas_validas: ["Mosaic", "WorldWideWeb"]

enunciado: "En la historia de la navegación, {escenarios[escenario_idx][0]} fue {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][0]

explicacion: |
  Mosaic fue crucial para la democratización de la Web al introducir imágenes integradas, mientras que WorldWideWeb fue el primer navegador/editor de Berners-Lee.
```

### 5 — Orden cronológico de la Web
```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

respuesta: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

enunciado: "Ordena cronológicamente los hitos que marcaron el inicio y la explosión de la World Wide Web:"

explicacion: |
  Primero fue la idea teórica de Berners-Lee, luego la implementación técnica del primer servidor y finalmente la llegada de navegadores gráficos que permitieron su uso masivo.
```