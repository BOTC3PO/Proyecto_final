# Informática — Inteligencia artificial: reglas a aprendizaje (teoría)

> Tema del MAPA: `inteligencia-artificial-reglas-a-aprendizaje`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explica el cambio en la forma cómo se construyen los sistemas de inteligencia artificial, desde reglas predefinidas hasta modelos que aprenden con datos.

---

## 1. De las reglas a la adaptación automática

Los primeros sistemas de inteligencia artificial (IA) funcionaban siguiendo un conjunto estricto de reglas definidas por humanos. Estas reglas, escritas en lenguaje formal o lógico, eran como instrucciones paso a paso que el sistema seguía para resolver problemas. Por ejemplo, si un programa debía detectar spam, se le programaban condiciones específicas: "si el mensaje contiene la palabra 'viagra', marcarlo como spam". Este enfoque, conocido como sistemas expertos o reglas basadas, tenía ventajas claras: era transparente y fácil de revisar. Pero también limitaciones: no podía adaptarse a nuevas situaciones sin que un humano modificara manualmente las reglas.

---

## 2. El rol del programador en los sistemas clásicos

En este modelo tradicional, el conocimiento experto se "codificaba" en estructuras lógicas como "SI [condición] ENTONCES [acción]". Un ingeniero o especialista debía analizar cada situación posible y escribir todas las reglas necesarias para que el sistema funcionara. Esto era útil cuando los problemas eran predecibles, pero fallaba ante situaciones complejas o cambiantes. Por ejemplo, si un sistema de diagnóstico médico usaba solo reglas fijas, no podría reconocer nuevas enfermedades a menos que se le añadieran manualmente.

---

## 3. Aprendizaje automático: una nueva forma de pensar

El aprendizaje automático (machine learning) cambia este enfoque. En lugar de programar reglas específicas, se proporciona al sistema grandes cantidades de datos con ejemplos previos. El sistema analiza estos datos y, por sí solo, identifica patrones para tomar decisiones. Por ejemplo, un modelo de reconocimiento de imágenes no necesita que le digan "esto es una foto de gato" en cada caso: aprende a partir de miles de fotos etiquetadas como "gato" o "no gato".

---

## 4. Ventajas del aprendizaje con datos

Este método tiene dos ventajas clave. Primero, permite que los sistemas se adapten a situaciones nuevas sin intervención humana directa. Segundo, puede manejar problemas extremadamente complejos, como predecir comportamientos económicos o identificar objetos en imágenes, donde sería imposible definir todas las reglas posibles manualmente. Sin embargo, requiere acceso a grandes volúmenes de datos de calidad y un proceso de entrenamiento cuidadoso.

---

## 5. Casos prácticos: de spam a redes neuronales

Un ejemplo clásico es el filtrado de spam. En la versión reglas-basada, se usaban listas fijas de palabras sospechosas ("viagra", "pronto", etc.). Hoy, modelos de aprendizaje automático analizan millones de correos y aprenden a detectar patrones más sutiles, como el estilo de escritura o combinaciones poco comunes. En otro ámbito, los sistemas de visión artificial no usan reglas predefinidas para identificar objetos; en su lugar, se entrenan con imágenes etiquetadas, aprendiendo gradualmente cómo distinguir entre perros y gatos.

---

## 6. Conexión con lo que sigue

Este cambio de paradigma conecta directamente con temas sobre modelos específicos de aprendizaje automático, como las redes neuronales o algoritmos de clasificación, que se exploran en `../aprendizaje-automático-modelos/`.