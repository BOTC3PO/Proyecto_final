### 1 — Cálculo de máscara CIDR para 254 hosts
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["cidr", "mascara", "hosts"]
enunciado: "¿Cuál es la notación CIDR (slash notation) para una máscara de subred 255.255.255.0, que permite 254 direcciones de host utilizables?"
tipo: "completar"
respuesta: "/24"
respuestas_validas:
  - "/24"
  - "24"
pasos:
  - "Identificar que 255.255.255.0 corresponde a 24 bits en 1."
  - "Notar que la notación CIDR se escribe con una barra seguida del número de bits de red."
explicacion: "La máscara 255.255.255.0 tiene los primeros 24 bits en 1 (8+8+8), por lo que se representa como /24."
```

### 2 — Determinación de red para IP y Máscara
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["calculadora", "red", "broadcast"]
enunciado: "Dada la dirección IP 192.168.10.50 con máscara 255.255.255.224, ¿cuál es la dirección de red (network address) resultante?"
tipo: "completar"
respuesta: "192.168.10.32"
respuestas_validas:
  - "192.168.10.32"
  - "192.168.10.32/27"
pasos:
  - "Convertir el último octeto de la máscara (224) a binario: 11100000."
  - "El bloque de subred es de 32 direcciones (256 - 224 = 32)."
  - "Los rangos son 0-31, 32-63, etc. 50 cae en el rango 32-63."
  - "La dirección de red es la primera del rango: 192.168.10.32."
explicacion: "Con /27 (255.255.255.224), las subredes se incrementan de 32 en 32. 192.168.10.32 es la base de la subred que contiene al 192.168.10.50."
```

### 3 — Identificación de broadcast de subred
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["broadcast", "clase-c"]
enunciado: "Para la red 10.10.0.0 con máscara 255.255.255.0, ¿cuál es la dirección de broadcast de la subred más específica que contiene a 10.10.0.150?"
tipo: "completar"
respuesta: "10.10.0.255"
respuestas_validas:
  - "10.10.0.255"
  - "10.10.0.255/24"
pasos:
  - "La máscara 255.255.255.0 indica que los primeros 24 bits son red."
  - "El último octeto es el de host (8 bits)."
  - "El broadcast se obtiene poniendo todos los bits de host en 1."
  - "255 en el último octeto es el broadcast."
explicacion: "En una subred /24, la dirección de broadcast es siempre la última dirección de la subred, es decir, 255 en el último octeto."
```

### 4 — Verificación de pertenencia a subred
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["pertenencia", "and-bitwise"]
enunciado: "Verdadero o Falso: La dirección IP 172.16.5.10 pertenece a la subred 172.16.0.0/16."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar /16: los primeros 16 bits definen la red."
  - "Para /16, los dos primeros octetos deben coincidir exactamente con la dirección de red."
  - "172.16 coincide con 172.16."
explicacion: "Una máscara /16 significa que cualquier IP que comience con 172.16.x.x está dentro de la red 172.16.0.0/16."
```

### 5 — Cálculo de número de hosts válidos
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["formula-hosts", "power-of-2"]
enunciado: "¿Cuántas direcciones de host válidas (utilizables por dispositivos) ofrece una subred con máscara 255.255.255.192?"
tipo: "completar"
respuesta: "62"
respuestas_validas:
  - "62"
  - "62 hosts"
pasos:
  - "Convertir 192 a binario: 11000000."
  - "Contar los bits de host: 6 ceros."
  - "Calcular 2^6 - 2 (por red y broadcast)."
  - "64 - 2 = 62."
explicacion: "Con 6 bits de host, el total de direcciones es 64. Restando la de red y la de broadcast, quedan 62 direcciones utilizables."
```

### 6 — Diagnóstico de IP de broadcast incorrecta
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["error", "broadcast"]
enunciado: "Si configuras una interfaz con IP 192.168.1.10 y máscara 255.255.255.240, ¿cuál es la dirección de broadcast correcta que debe usar el sistema?"
tipo: "completar"
respuesta: "192.168.1.15"
respuestas_validas:
  - "192.168.1.15"
  - "192.168.1.15/28"
pasos:
  - "240 en binario es 11110000 (4 bits de host)."
  - "El bloque es de 16 (2^4)."
  - "Los rangos son 0-15, 16-31, etc."
  - "10 cae en 0-15. El broadcast es el último número: 15."
explicacion: "La máscara /28 crea subredes de 16 direcciones. Para la subred 192.168.1.0, el broadcast es 192.168.1.15."
```

### 7 — Selección de máscara para número específico de hosts
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["diseño", "mascara-optima"]
enunciado: "Necesitas crear subredes que soporten exactamente 60 hosts cada una. ¿Cuál es la máscara CIDR más eficiente (más larga) que cumple este requisito?"
tipo: "completar"
respuesta: "/26"
respuestas_validas:
  - "/26"
  - "26"
pasos:
  - "Necesitamos 60 hosts + 2 (red/broadcast) = 62 direcciones totales."
  - "La potencia de 2 mayor o igual a 62 es 64 (2^6)."
  - "6 bits de host. 32 - 6 = 26 bits de red."
explicacion: "Una máscara /26 deja 6 bits para hosts (2^6=64 direcciones), lo que permite 62 hosts válidos, suficiente para 60."
```

### 8 — Identificación de rango de subred VLSM
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["vlsm", "rango"]
enunciado: "Dada la red base 192.168.1.0/24, si la primera subred es /26, ¿cuál es la dirección de inicio de la SEGUNDA subred /26?"
tipo: "completar"
respuesta: "192.168.1.64"
respuestas_validas:
  - "192.168.1.64"
  - "192.168.1.64/26"
pasos:
  - "Una subred /26 tiene bloques de 64 direcciones (0-63, 64-127...)."
  - "La primera subred ocupa 0 a 63."
  - "La segunda subred comienza inmediatamente después del broadcast de la primera."
explicacion: "La primera subred es 192.168.1.0/26 (broadcast 192.168.1.63). La siguiente comienza en 192.168.1.64."
```

### 9 - Verificación de supermáscara (Supernetting)
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["agregacion", "ruteo"]
enunciado: "Verdadero o Falso: La dirección de red 10.0.0.0/8 puede ser agregada (summarizada) dentro de 10.0.0.0/7."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Comparar los bits de red de /8 y /7."
  - "Un /7 cubre un rango más amplio que un /8."
  - "10.0.0.0/8 es un subconjunto de 10.0.0.0/7."
explicacion: "El /7 agrupa los bloques 0-127 del primer octeto. El /8 está dentro de ese rango, por lo que es posible la agregación."
```

### 10 - Cálculo de broadcast para subred no alineada
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["bitwise", "calculadora"]
enunciado: "Para la IP 172.16.5.100 con máscara 255.255.255.128, ¿cuál es la dirección de broadcast de su subred?"
tipo: "completar"
respuesta: "172.16.5.127"
respuestas_validas:
  - "172.16.5.127"
  - "172.16.5.127/25"
pasos:
  - "128 en binario es 10000000 (1 bit de red en el último octeto)."
  - "El bloque es de 128 direcciones (0-127, 128-255)."
  - "100 cae en 0-127."
  - "El broadcast es el último valor del bloque: 127."
explicacion: "Con /25, la red se divide en dos: 0-127 y 128-255. 100 está en la primera mitad, cuyo broadcast es 127."
```

### 11 - Detección de conflicto de subredes
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["overlap", "conflicto"]
enunciado: "Verdadero o Falso: Las subredes 192.168.1.0/25 y 192.168.1.128/25 son adyacentes y no se superponen."
tipo: "vf"
respuesta: verdadero
pasos:
  - "/25 divide el último octeto en 0-127 y 128-255."
  - "La primera subred usa 0-127."
  - "La segunda subred usa 128-255."
  - "No hay direcciones comunes entre ambos rangos."
explicacion: "Son dos mitades contiguas del espacio /24 original. No se superponen y son adyacentes."
```

### 12 - Identificación de dirección de red principal
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["network-id", "classful"]
enunciado: "¿Cuál es la dirección de red (network address) para la IP 223.254.253.252 con máscara 255.255.255.0?"
tipo: "completar"
respuesta: "223.254.253.0"
respuestas_validas:
  - "223.254.253.0"
  - "223.254.253.0/24"
pasos:
  - "La máscara es /24."
  - "Los primeros tres octetos definen la red."
  - "El último octeto se pone a 0 para la dirección de red."
explicacion: "Con /24, la dirección de red se obtiene poniendo los bits de host (último octeto) a cero."
```

### 13 - Selección de máscara para máximo número de subredes
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["max-subnets", "borrowing"]
enunciado: "Tienes la red 192.168.10.0/24. Si necesitas crear el máximo número posible de subredes sin perder más de 2 hosts por subred, ¿qué máscara CIDR usarías?"
tipo: "completar"
respuesta: "/30"
respuestas_validas:
  - "/30"
  - "30"
pasos:
  - "Mínimo 2 hosts válidos requiere al menos 2 bits de host (2^2 - 2 = 2)."
  - "32 - 2 = 30 bits de red."
  - "/30 permite exactamente 2 hosts utilizables."
explicacion: "Una máscara /30 deja 2 bits para hosts, permitiendo exactamente 2 direcciones IP utilizables por subred, maximizando así el número de subredes."
```

### 14 - Verificación de validez de IP de host
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["validacion", "ip-reservada"]
enunciado: "Verdadero o Falso: La dirección IP 10.0.0.255 es una dirección de host válida en una red 10.0.0.0/24."
tipo: "vf"
respuesta: falso
pasos:
  - "Analizar /24: el último octeto es de host."
  - "En una red /24, la dirección con todos los bits de host en 1 es el broadcast."
  - "255 en el último octeto es el broadcast, no un host."
explicacion: "En 10.0.0.0/24, 10.0.0.255 es la dirección de broadcast de la red, por lo que no puede asignarse a un host."
```

### 15 - Cálculo de primera IP utilizable
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["range", "first-host"]
enunciado: "Para la subred 172.16.0.0/12, ¿cuál es la primera dirección IP utilizable (first host)?"
tipo: "completar"
respuesta: "172.16.0.1"
respuestas_validas:
  - "172.16.0.1"
  - "172.16.0.1/12"
pasos:
  - "La dirección de red es 172.16.0.0."
  - "La primera IP utilizable es siempre la dirección de red + 1."
explicacion: "La dirección de red (172.16.0.0) no se usa. La siguiente IP, 172.16.0.1, es la primera asignable."
```

### 16 - Identificación de clase y máscara por defecto
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["clase-a", "default-mask"]
enunciado: "¿Cuál es la máscara de subred por defecto (default mask) para una dirección de red Clase A como 10.0.0.0?"
tipo: "completar"
respuesta: "255.0.0.0"
respuestas_validas:
  - "255.0.0.0"
  - "255.0.0.0/8"
pasos:
  - "Clase A usa el primer octeto para red."
  - "La máscara por defecto es 8 bits de red."
  - "8 bits en 1 es 255, los demás 0."
explicacion: "Las redes Clase A tienen una máscara por defecto de 255.0.0.0 (/8)."
```

### 17 - Determinación de subred para IP en rango grande
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["classful", "identification"]
enunciado: "Dada la IP 126.10.10.5 con máscara 255.0.0.0, ¿cuál es la dirección de red?"
tipo: "completar"
respuesta: "126.0.0.0"
respuestas_validas:
  - "126.0.0.0"
  - "126.0.0.0/8"
pasos:
  - "La máscara 255.0.0.0 (/8) indica que solo el primer octeto es red."
  - "Se mantienen los bits de red (126) y se ponen a 0 los de host."
explicacion: "Con /8, la dirección de red se compone del primer octeto de la IP y ceros en el resto."
```

### 18 - Verificación de solapamiento (Overlap)
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["overlap", "diagnostico"]
enunciado: "Verdadero o Falso: La subred 192.168.1.0/25 se superpone con la subred 192.168.1.128/26."
tipo: "vf"
respuesta: verdadero
pasos:
  - "192.168.1.0/25 cubre 0-127."
  - "192.168.1.128/26 cubre 128-191."
  - "Revisar si hay intersección."
  - "Espera, /25 es 0-127. /26 es 128-191. No se superponen."
  - "Corrección: La pregunta pide verificar superposición. 0-127 y 128-191 son adyacentes, no superpuestos."
  - "Re-evaluación: 192.168.1.0/25 es 0-127. 192.168.1.128/26 es 128-191. NO se superponen."
  - "ERROR EN EL PENSAMIENTO ANTERIOR: La respuesta es Falso."
  - "VBLang correction: La respuesta es falso."
respuesta: falso
pasos:
  - "192.168.1.0/25 abarca 192.168.1.0 a 192.168.1.127."
  - "192.168.1.128/26 abarca 192.168.1.128 a 192.168.1.191."
  - "Los rangos son contiguos pero disjuntos."
explicacion: "Las subredes /25 y /26 descritas son adyacentes pero no comparten direcciones IP, por lo tanto, no se superponen."
```

### 19 - Cálculo de broadcast para /29
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["small-subnet", "broadcast"]
enunciado: "Para la red 192.168.1.0/29, ¿cuál es la dirección de broadcast de la TERCERA subred?"
tipo: "completar"
respuesta: "192.168.1.47"
respuestas_validas:
  - "192.168.1.47"
  - "192.168.1.47/29"
pasos:
  - "/29 tiene bloques de 8 direcciones (2^3)."
  - "Subred 1: 0-7 (broadcast 7)."
  - "Subred 2: 8-15 (broadcast 15)."
  - "Subred 3: 16-23 (broadcast 23)."
  - "Espera, 16+8=24. El broadcast es 23."
  - "Revisión: 0-7, 8-15, 16-23. Broadcast es 23."
  - "ERROR: 192.168.1.23."
respuesta: "192.168.1.23"
pasos:
  - "Bloque de 8: 0, 8, 16..."
  - "Tercia subred inicia en 16."
  - "Rango: 16 a 23."
  - "Broadcast es 23."
explicacion: "Las subredes /29 son de 8 en 8. La tercera comienza en 16 (16,24,...) y termina en 23. El broadcast es 192.168.1.23."
```

### 20 - Selección de máscara para punto a punto
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["ppp", "/30", "/31"]
enunciado: "En un enlace punto a punto (router-to-router) donde se desea ahorrar direcciones IP, ¿qué máscara CIDR es estándar para permitir 2 hosts?"
tipo: "completar"
respuesta: "/30"
respuestas_validas:
  - "/30"
  - "30"
pasos:
  - "Un enlace punto a punto necesita 2 IPs (una en cada extremo)."
  - "La máscara /30 proporciona 2 hosts utilizables (4 total - 2 reservados)."
  - "Nota: /31 también se usa en enlaces PPP sin broadcast, pero /30 es el estándar clásico."
explicacion: "La máscara /30 (255.255.255.252) deja 2 bits de host, permitiendo exactamente 2 direcciones IP utilizables, ideal para enlaces punto a punto."
```

### 21 - Identificación de IP de red para /20
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["classful", "boundary"]
enunciado: "¿Cuál es la dirección de red para la IP 172.16.10.5 con máscara 255.255.240.0?"
tipo: "completar"
respuesta: "172.16.0.0"
respuestas_validas:
  - "172.16.0.0"
  - "172.16.0.0/20"
pasos:
  - "240 en binario es 11110000 (4 bits de red en el tercer octeto)."
  - "El bloque es de 16 (256-240)."
  - "Los rangos del tercer octeto son 0, 16, 32..."
  - "10 cae en el rango 0-15."
  - "La red es 172.16.0.0."
explicacion: "Con /20, el tercer octeto se agrupa de 16 en 16. 10 está en el bloque 0, por lo que la red es 172.16.0.0."
```

### 22 - Verificación de validez de IP de host en /31
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["rfc3021", "point-to-point"]
enunciado: "Verdadero o Falso: En una red 192.168.1.0/31, la dirección 192.168.1.0 es una dirección de host válida según RFC 3021."
tipo: "vf"
respuesta: verdadero
pasos:
  - "RFC 3021 define el uso de /31 en enlaces punto a punto."
  - "En /31, no hay direcciones de red ni broadcast reservadas."
  - "Ambas direcciones (0 y 1) son utilizables como IPs de host."
explicacion: "Según RFC 3021, en una máscara /31, ambas direcciones IP son válidas para hosts en un enlace punto a punto."
```

### 23 - Cálculo de número de subredes
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["count", "borrowing"]
enunciado: "Si tomas la red 192.168.1.0/24 y la divides en subredes /26, ¿cuántas subredes se crean?"
tipo: "completar"
respuesta: "4"
respuestas_validas:
  - "4"
  - "4 subredes"
pasos:
  - "Diferencia entre /24 y /26 es 2 bits."
  - "2^2 = 4 subredes."
explicacion: "Al tomar 2 bits prestados para la subred (26-24=2), se crean 2^2 = 4 subredes."
```

### 24 - Identificación de broadcast de subred /28
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["broadcast", "calculation"]
enunciado: "Para la IP 10.10.10.50 con máscara 255.255.255.240, ¿cuál es la dirección de broadcast?"
tipo: "completar"
respuesta: "10.10.10.63"
respuestas_validas:
  - "10.10.10.63"
  - "10.10.10.63/28"
pasos:
  - "240 es /28 (bloque de 16)."
  - "Los bloques son 0-15, 16-31, 32-47, 48-63."
  - "50 cae en 48-63."
  - "El broadcast es el último número: 63."
explicacion: "El bloque que contiene al 50 es 48-63. La dirección de broadcast es 10.10.10.63."
```

### 25 - Diagnóstico de IP de red en /17
```yaml
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["class-b", "network-id"]
enunciado: "¿Cuál es la dirección de red para la IP 150.100.50.25 con máscara 255.255.128.0?"
tipo: "completar"
respuesta: "150.100.0.0"
respuestas_validas:
  - "150.100.0.0"
  - "150.100.0.0/17"
pasos:
  - "128 en el tercer octeto es /17 (1 bit de red en el tercer octeto)."
  - "El bit de red es el MSB del tercer octeto."
  - "128 divide el tercer octeto en 0-127 y 128-255."
  - "50 está en 0-127."
  - "El tercer octeto se pone a 0."
explicacion: "Con /17, el tercer octeto se divide en dos mitades. 50 está en la primera mitad (0-127), por lo que la red es 150.100.0.0."
```