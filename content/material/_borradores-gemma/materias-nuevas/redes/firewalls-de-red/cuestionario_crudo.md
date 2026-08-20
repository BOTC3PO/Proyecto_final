### 1 — Regla de entrada por defecto en iptables
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["iptables", "policy", "default"]
respuesta: verdadero
tipo: vf
enunciado: "Por defecto, si un paquete no coincide con ninguna regla explícita en la cadena INPUT de iptables, el comportamiento predeterminado es descartarlo (DROP)."
pasos:
  - "Identificar la cadena INPUT."
  - "Recordar la política por defecto de iptables."
  - "Verificar que la política por defecto es DROP."
explicacion: "La política por defecto de iptables es DROP. Esto significa que si un paquete no coincide con ninguna regla, se descarta silenciosamente."
```

### 2 — Comando para listar reglas de iptables
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["iptables", "list", "comando"]
respuesta: "iptables -L"
tipo: completar
respuestas_validas:
  - "iptables -L"
  - "iptables --list"
  - "sudo iptables -L"
  - "sudo iptables --list"
enunciado: "Escribe el comando estándar para listar las reglas actuales de la tabla filter en iptables."
pasos:
  - "Identificar el comando base para listar reglas."
  - "Incluir la bandera -L o --list."
  - "Opcionalmente incluir sudo."
explicacion: "El comando `iptables -L` o `iptables --list` muestra las reglas actuales de la tabla filter."
```

### 3 — Puerto SSH estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "ssh", "tcp"]
respuesta: "22"
tipo: completar
respuestas_validas:
  - "22"
  - "22/tcp"
  - "puerto 22"
  - "tcp/22"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio SSH?"
pasos:
  - "Recordar el puerto asignado a SSH."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "SSH utiliza por defecto el puerto TCP 22."
```

### 4 — Estado de conexión en iptables
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["iptables", "estado", "connection-tracking"]
respuesta: "ESTABLISHED"
tipo: completar
respuestas_validas:
  - "ESTABLISHED"
  - "established"
  - "ESTABLISHED,RELATED"
  - "RELATED,ESTABLISHED"
enunciado: "En una regla de iptables, ¿qué valor de estado se usa en la cadena OUTPUT para permitir respuestas a conexiones iniciadas localmente?"
pasos:
  - "Identificar el estado de una conexión activa."
  - "Usar la palabra clave de estado de iptables."
  - "Recordar que ESTABLISHED indica conexiones ya establecidas."
explicacion: "El estado ESTABLISHED permite paquetes pertenecientes a conexiones ya establecidas."
```

### 5 — Puerto HTTP estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "http", "tcp"]
respuesta: "80"
tipo: completar
respuestas_validas:
  - "80"
  - "80/tcp"
  - "puerto 80"
  - "tcp/80"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio HTTP?"
pasos:
  - "Recordar el puerto asignado a HTTP."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "HTTP utiliza por defecto el puerto TCP 80."
```

### 6 — Bloquear tráfico entrante en iptables
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["iptables", "bloquear", "input"]
respuesta: "DROP"
tipo: completar
respuestas_validas:
  - "DROP"
  - "drop"
enunciado: "Escribe la acción de iptables que descarta silenciosamente los paquetes sin enviar respuesta, usada comúnmente para bloquear tráfico entrante no deseado."
pasos:
  - "Identificar la acción de descarte silencioso."
  - "Escribir la palabra clave de iptables."
  - "Verificar mayúsculas/minúsculas (iptables es case-insensitive pero DROP es estándar)."
explicacion: "La acción DROP descarta los paquetes sin respuesta, a diferencia de REJECT que envía un error."
```

### 7 — Puerto HTTPS estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "https", "tcp"]
respuesta: "443"
tipo: completar
respuestas_validas:
  - "443"
  - "443/tcp"
  - "puerto 443"
  - "tcp/443"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio HTTPS?"
pasos:
  - "Recordar el puerto asignado a HTTPS."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "HTTPS utiliza por defecto el puerto TCP 443."
```

### 8 — Regla de iptables para permitir ping
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["iptables", "icmp", "ping"]
respuesta: "ACCEPT"
tipo: completar
respuestas_validas:
  - "ACCEPT"
  - "accept"
enunciado: "Si quieres permitir que tu servidor responda a pings (ICMP), ¿qué acción debes usar en la regla de iptables?"
pasos:
  - "Identificar la acción de permitir tráfico."
  - "Escribir la palabra clave de iptables."
  - "Verificar que es la acción correcta para permitir."
explicacion: "La acción ACCEPT permite que el paquete pase a través del firewall."
```

### 9 — Puerto DNS estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "dns", "udp", "tcp"]
respuesta: "53"
tipo: completar
respuestas_validas:
  - "53"
  - "53/tcp"
  - "53/udp"
  - "puerto 53"
enunciado: "¿Cuál es el número de puerto estándar (TCP/UDP) para el servicio DNS?"
pasos:
  - "Recordar el puerto asignado a DNS."
  - "Verificar que es TCP y UDP."
  - "Escribir el número."
explicacion: "DNS utiliza por defecto el puerto 53 tanto para TCP como para UDP."
```

### 10 — Puerto SMTP estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "smtp", "tcp"]
respuesta: "25"
tipo: completar
respuestas_validas:
  - "25"
  - "25/tcp"
  - "puerto 25"
  - "tcp/25"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio SMTP (correo electrónico)?"
pasos:
  - "Recordar el puerto asignado a SMTP."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "SMTP utiliza por defecto el puerto TCP 25."
```

### 11 — Puerto FTP activo estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "ftp", "tcp"]
respuesta: "21"
tipo: completar
respuestas_validas:
  - "21"
  - "21/tcp"
  - "puerto 21"
  - "tcp/21"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para la conexión de control de FTP?"
pasos:
  - "Recordar el puerto asignado a FTP."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "FTP utiliza por defecto el puerto TCP 21 para la conexión de control."
```

### 12 — Puerto MySQL estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "mysql", "tcp"]
respuesta: "3306"
tipo: completar
respuestas_validas:
  - "3306"
  - "3306/tcp"
  - "puerto 3306"
  - "tcp/3306"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio MySQL?"
pasos:
  - "Recordar el puerto asignado a MySQL."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "MySQL utiliza por defecto el puerto TCP 3306."
```

### 13 — Puerto PostgreSQL estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "postgresql", "tcp"]
respuesta: "5432"
tipo: completar
respuestas_validas:
  - "5432"
  - "5432/tcp"
  - "puerto 5432"
  - "tcp/5432"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio PostgreSQL?"
pasos:
  - "Recordar el puerto asignado a PostgreSQL."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "PostgreSQL utiliza por defecto el puerto TCP 5432."
```

### 14 — Puerto Redis estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "redis", "tcp"]
respuesta: "6379"
tipo: completar
respuestas_validas:
  - "6379"
  - "6379/tcp"
  - "puerto 6379"
  - "tcp/6379"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio Redis?"
pasos:
  - "Recordar el puerto asignado a Redis."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Redis utiliza por defecto el puerto TCP 6379."
```

### 15 — Puerto MongoDB estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "mongodb", "tcp"]
respuesta: "27017"
tipo: completar
respuestas_validas:
  - "27017"
  - "27017/tcp"
  - "puerto 27017"
  - "tcp/27017"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio MongoDB?"
pasos:
  - "Recordar el puerto asignado a MongoDB."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "MongoDB utiliza por defecto el puerto TCP 27017."
```

### 16 — Puerto Elasticsearch estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "elasticsearch", "tcp"]
respuesta: "9200"
tipo: completar
respuestas_validas:
  - "9200"
  - "9200/tcp"
  - "puerto 9200"
  - "tcp/9200"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio Elasticsearch?"
pasos:
  - "Recordar el puerto asignado a Elasticsearch."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Elasticsearch utiliza por defecto el puerto TCP 9200."
```

### 17 — Puerto Kafka estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "kafka", "tcp"]
respuesta: "9092"
tipo: completar
respuestas_validas:
  - "9092"
  - "9092/tcp"
  - "puerto 9092"
  - "tcp/9092"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio Kafka?"
pasos:
  - "Recordar el puerto asignado a Kafka."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Kafka utiliza por defecto el puerto TCP 9092."
```

### 18 — Puerto RabbitMQ estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "rabbitmq", "tcp"]
respuesta: "5672"
tipo: completar
respuestas_validas:
  - "5672"
  - "5672/tcp"
  - "puerto 5672"
  - "tcp/5672"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio RabbitMQ?"
pasos:
  - "Recordar el puerto asignado a RabbitMQ."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "RabbitMQ utiliza por defecto el puerto TCP 5672."
```

### 19 — Puerto Memcached estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "memcached", "udp", "tcp"]
respuesta: "11211"
tipo: completar
respuestas_validas:
  - "11211"
  - "11211/tcp"
  - "11211/udp"
  - "puerto 11211"
enunciado: "¿Cuál es el número de puerto estándar (TCP/UDP) para el servicio Memcached?"
pasos:
  - "Recordar el puerto asignado a Memcached."
  - "Verificar que es TCP y UDP."
  - "Escribir el número."
explicacion: "Memcached utiliza por defecto el puerto 11211 tanto para TCP como para UDP."
```

### 20 — Puerto Nginx estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "nginx", "tcp"]
respuesta: "80"
tipo: completar
respuestas_validas:
  - "80"
  - "80/tcp"
  - "puerto 80"
  - "tcp/80"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servidor web Nginx?"
pasos:
  - "Recordar el puerto asignado a Nginx."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Nginx utiliza por defecto el puerto TCP 80 para HTTP."
```

### 21 — Puerto Apache HTTP estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "apache", "tcp"]
respuesta: "80"
tipo: completar
respuestas_validas:
  - "80"
  - "80/tcp"
  - "puerto 80"
  - "tcp/80"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servidor web Apache?"
pasos:
  - "Recordar el puerto asignado a Apache."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Apache utiliza por defecto el puerto TCP 80 para HTTP."
```

### 22 — Puerto Tomcat estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "tomcat", "tcp"]
respuesta: "8080"
tipo: completar
respuestas_validas:
  - "8080"
  - "8080/tcp"
  - "puerto 8080"
  - "tcp/8080"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servidor de aplicaciones Tomcat?"
pasos:
  - "Recordar el puerto asignado a Tomcat."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "Tomcat utiliza por defecto el puerto TCP 8080."
```

### 23 — Puerto Docker Registry estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "docker", "tcp"]
respuesta: "5000"
tipo: completar
respuestas_validas:
  - "5000"
  - "5000/tcp"
  - "puerto 5000"
  - "tcp/5000"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el Docker Registry local?"
pasos:
  - "Recordar el puerto asignado a Docker Registry."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "El Docker Registry utiliza por defecto el puerto TCP 5000."
```

### 24 — Puerto Kubernetes API Server estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "kubernetes", "tcp"]
respuesta: "6443"
tipo: completar
respuestas_validas:
  - "6443"
  - "6443/tcp"
  - "puerto 6443"
  - "tcp/6443"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el API Server de Kubernetes?"
pasos:
  - "Recordar el puerto asignado al API Server de Kubernetes."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "El API Server de Kubernetes utiliza por defecto el puerto TCP 6443."
```

### 25 — Puerto etcd estándar
```
metadata:
  materia: "redes"
  tema: "firewalls-de-red"
  nivel: "basico"
  tags: ["puertos", "etcd", "tcp"]
respuesta: "2379"
tipo: completar
respuestas_validas:
  - "2379"
  - "2379/tcp"
  - "puerto 2379"
  - "tcp/2379"
enunciado: "¿Cuál es el número de puerto TCP estándar por defecto para el servicio etcd?"
pasos:
  - "Recordar el puerto asignado a etcd."
  - "Verificar que es TCP."
  - "Escribir el número."
explicacion: "etcd utiliza por defecto el puerto TCP 2379."
```