# Diagnóstico por Casos en PSeInt: Lógica Condicional Anidada y Estructurada

## Introducción

En el desarrollo de algoritmos complejos, la toma de decisiones rara vez se limita a un simple "sí o no". El **diagnóstico por casos** es una técnica de modelado lógico que permite clasificar una entrada de datos en múltiples categorías mutuamente excluyentes o jerárquicas. En PSeInt, esto se implementa principalmente mediante la estructura `Si-Entonces-Sino` anidada o, más elegantemente, mediante `SiNo` (que funciona como una cadena de `if-else if-else`).

Este enfoque es fundamental en programas de validación de datos, sistemas de calificación, clasificación de productos por stock, o diagnósticos médicos simplificados, donde el flujo del programa debe bifurcarse en varias direcciones basándose en condiciones compuestas.

## Explicación Central: Sintaxis y Lógica

La clave del diagnóstico avanzado no está solo en la condición, sino en la **exclusividad** de los casos. En PSeInt, la estructura `SiNo` evalúa las condiciones de arriba hacia abajo. Una vez que una condición resulta verdadera, se ejecuta su bloque asociado y se **salta** el resto de la cadena. Esto es crucial para el rendimiento y la corrección lógica.

### Sintaxis Básica de la Cadena Condicional

```pseudocode
Si <Condición1> Entonces
    <Acciones1>
SiNo
    Si <Condición2> Entonces
        <Acciones2>
    SiNo
        Si <Condición3> Entonces
            <Acciones3>
        SiNo
            <AccionesPorDefecto>
        FinSi
    FinSi
FinSi
```

### Ejemplo Real: Clasificación de Notas

Imaginemos un algoritmo que clasifica un valor numérico (0-100) en categorías de rendimiento.

```pseudocode
Algoritmo ClasificacionNotas
    Definir nota, mensaje Como Caracter
    EscribirSinSaltar "Ingrese la nota (0-100): "
    Leer nota
    
    Si nota >= 90 Entonces
        mensaje <- "Sobresaliente"
    SiNo
        Si nota >= 80 Entonces
            mensaje <- "Notable"
        SiNo
            Si nota >= 70 Entonces
                mensaje <- "Bien"
            SiNo
                Si nota >= 60 Entonces
                    mensaje <- "Suficiente"
                SiNo
                    mensaje <- "Insuficiente"
                FinSi
            FinSi
        FinSi
    FinSi
    
    Escribir "El resultado es: ", mensaje
FinAlgoritmo
```

**Punto crítico:** Notá que en el segundo `Si`, no es necesario escribir `nota < 90 AND nota >= 80`. Como el primer `Si` ya falló, sabemos por deducción lógica que `nota` es menor a 90. Esto simplifica enormemente la legibilidad.

## Errores Comunes de Principiantes

1.  **Omitir la condición final (`SiNo` sin `Si`):**
    Muchos principiantes dejan el último `SiNo` sin un `Si` correspondiente al final, causando errores de sintaxis. Recordá: cada `SiNo` debe cerrar con un `FinSi`, y cada `Si` debe tener su par. La estructura debe ser simétrica.

2.  **Condiciones superpuestas (Rango incorrecto):**
    Usar condiciones como `Si nota >= 80` y luego `Si nota > 70` sin la estructura anidada correcta puede llevar a que ambas se ejecuten si no se usa `SiNo` adecuadamente. En un diagnóstico por casos, los rangos deben ser **mutuamente excluyentes** por diseño del flujo.

3.  **Confundir `Y` / `O` con la estructura de flujo:**
    Intentar escribir toda la lógica en una sola línea larga como `Si (nota >= 80 AND nota < 90) Entonces...` es funcional, pero poco escalable. La anidación es más clara cuando hay más de 3-4 casos.

4.  **No validar el dominio de entrada:**
    En el ejemplo anterior, si el usuario ingresa `-5` o `105`, el algoritmo lo clasificará como "Insuficiente" sin avisar. Un diagnóstico robusto debe validar el rango de datos antes de entrar en la cadena de casos.

## Cuándo Usarlo / Cuándo No Usarlo

*   **Usar cuando:** Tienes menos de 7-8 casos lógicos. La anidación mantiene la relación jerárquica clara (ej. "Si no es A, entonces verifico B..."). Es ideal para decisiones secuenciales donde una condición depende implícitamente del fracaso de la anterior.
*   **No usar cuando:** La lógica es muy compleja o los casos no tienen orden de prioridad. En esos casos, considera usar una **Tabla de Decisión** o, en lenguajes más avanzados, `switch`/`case`. En PSeInt, si tienes muchos casos iguales (ej. verificar múltiples valores específicos como `Si nota == 10`, `Si nota == 9`...), es mejor usar una variable auxiliar o una tabla de búsqueda, ya que la anidación profunda hace el código difícil de mantener.

## Ejemplo Extendido: Sistema de Descuentos por Cliente

**Contexto:** Una tienda online necesita aplicar descuentos según el tipo de cliente y el monto total de la compra.

**Requerimientos:**
1.  Clientes "VIP" con compras > $1000 reciben 20% de descuento.
2.  Clientes "VIP" con compras <= $1000 reciben 10% de descuento.
3.  Clientes "Normales" con compras > $1000 reciben 5% de descuento.
4.  Cualquier otro caso recibe 0% de descuento.

**Solución en PSeInt:**

```pseudocode
Algoritmo CalculoDescuento
    Definir tipoCliente Como Caracter
    Definir monto, descuento, final Como Real
    
    Escribir "Tipo de cliente (VIP/NORMAL): "
    Leer tipoCliente
    Escribir "Monto total de la compra: "
    Leer monto
    
    // Validación básica de entrada
    Si tipoCliente <> "VIP" Y tipoCliente <> "NORMAL" Entonces
        Escribir "Tipo de cliente inválido."
        Parar
    FinSi
    
    // Lógica de diagnóstico por casos anidada
    Si tipoCliente == "VIP" Entonces
        Si monto > 1000 Entonces
            descuento <- monto * 0.20
            Escribir "Cliente VIP con alta compra: 20% de descuento."
        SiNo
            descuento <- monto * 0.10
            Escribir "Cliente VIP con compra estándar: 10% de descuento."
        FinSi
    SiNo
        // Aquí sabemos que es NORMAL porque ya verificamos VIP arriba
        Si monto > 1000 Entonces
            descuento <- monto * 0.05
            Escribir "Cliente Normal con alta compra: 5% de descuento."
        SiNo
            descuento <- 0
            Escribir "Cliente Normal con compra estándar: Sin descuento."
        FinSi
    FinSi
    
    final <- monto - descuento
    Escribir "Monto a pagar: $", final
FinAlgoritmo
```

Este ejemplo demuestra cómo la estructura anidada permite manejar dependencias lógicas (el descuento depende primero del tipo, luego del monto) de manera eficiente y legible, evitando la repetición de condiciones innecesarias.