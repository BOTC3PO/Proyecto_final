### 1 — Confusión de uso: Simétrica vs Asimétrica
```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: escenario_datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Cifrado simétrico", "Cifrado asimétrico", "Función Hash", "No es una técnica de cifrado"]

enunciado: "En un escenario donde dos personas necesitan comunicarse de forma segura pero nunca se han encontrado previamente para intercambiar una clave secreta, ¿qué tipo de criptografía es la más adecuada para establecer la comunicación inicial?"

escenario_datos:
  - ["Cifrado simétrico", "Cifrado asimétrico"]
  - ["Cifrado simétrico", "Cifrado simétrico"]

explicacion: |
  El cifrado asimétrico utiliza un par de claves (pública y privada), lo que permite que dos entidades se comuniquen sin haber compartido previamente una clave secreta. El cifrado simétrico requiere que la clave ya sea conocida por ambas partes.
```

### 2 — El mito de la reversibilidad del Hash
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

respuesta: falso
tipo: vf

enunciado: "Una función hash criptográfica es un proceso reversible; es decir, es posible reconstruir el mensaje original a partir de su valor hash."

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way). Su propósito es generar una huella digital única de un mensaje, pero no permiten recuperar el mensaje original a partir del hash.
```

### 3 — Integridad vs Confidencialidad
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: caso_datos[caso_idx][1]
tipo: completar
respuestas_validas: ["integridad", "confidencialidad", "autenticidad"]

enunciado: "Si un software utiliza una función hash para verificar que un archivo descargado no ha sido modificado por un tercero durante la transmisión, está garantizando la _________ del archivo."

caso_datos:
  - ["integridad", "integridad"]
  - ["confidencialidad", "integridad"]

explicacion: |
  El hash permite verificar que el contenido no ha cambiado (integridad). No garantiza la confidencialidad, ya que el archivo original sigue siendo legible si no está cifrado.
```

### 4 — Orden de operaciones en firmas digitales
```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "proceso"]

respuesta: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]
tipo: ordenar

opciones_explicitas: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes", "Cifrar el mensaje con la clave privada"]

enunciado: "Para realizar una firma digital sobre un documento y que el receptor pueda verificarla, ¿cuál es el orden correcto de los pasos técnicos?"

explicacion: |
  Primero se genera el hash del mensaje original. Luego, ese hash se cifra con la clave privada del emisor (esto es la firma). El receptor descifra la firma con la clave pública del emisor y compara el resultado con el hash que él mismo calcula del mensaje recibido.
```

### 5 — El error de la "doble seguridad"
```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "intermedio"
  tags: ["eficiencia", "hibrida"]

respuesta: falso
tipo: vf

enunciado: "Dado que el cifrado asimétrico es mucho más seguro que el simétrico, la práctica estándar en la navegación web (HTTPS) es cifrar todo el tráfico de datos usando únicamente criptografía asimétrica."

explicacion: |
  Falso. El cifrado asimétrico es computacionalmente muy costoso y lento. Por eso, se usa un sistema híbrido: la criptografía asimétrica para intercambiar una clave simétrica, y luego se usa esa clave simétrica para cifrar el flujo de datos real por su rapidez.
```