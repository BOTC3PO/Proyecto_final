# Ingeniería — Optimización e iteración (teoría)

> Tema del MAPA: `ingenieria/optimizacion-e-iteracion`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los ingenieros usan ciclos repetitivos para mejorar soluciones técnicas.

---

## 1. ¿Qué es la iteración?

La iteración es un proceso fundamental en la resolución de problemas técnicos: consiste en repetir una secuencia de acciones, ajustando pequeños detalles cada vez, con el objetivo de acercarse a una solución óptima. No se trata solo de hacer lo mismo varias veces, sino de aprender con cada ciclo para mejorar. Por ejemplo, al diseñar un puente, los ingenieros pueden simular distintas configuraciones estructurales, analizar qué falla en cada caso y corregirlo en la siguiente prueba. Cada repetición (iteración) deja una marca: o bien se refina el diseño, o bien se descarta una opción que no cumple con los requisitos.

[IMAGEN: esquema de un ciclo iterativo con flechas que conectan "solución inicial" a "evaluación", luego a "ajuste" y de vuelta a "solución mejorada"].

---

## 2. ¿Para qué sirve la optimización?

La optimización no es solo buscar lo "mejor posible", sino definir qué se quiere mejorar según el contexto del problema. En ingeniería, esto puede significar minimizar costos, reducir tiempos de producción o maximizar eficiencia energética. Por ejemplo, al diseñar un motor, no siempre se busca la mayor potencia: a veces lo clave es conseguir el máximo rendimiento con el menor consumo de combustible. La elección del criterio dependerá de las restricciones del proyecto (presupuesto, materiales disponibles, normas técnicas) y del objetivo final que se persiga.

[IMAGEN: gráfico comparativo entre dos curvas: una que muestra un costo decreciente al optimizar un proceso, y otra que muestra un aumento en eficiencia].

---

## 3. ¿Cuándo se detiene el proceso iterativo?

Un ciclo de iteración no dura para siempre. Se para cuando la solución deja de mejorar significativamente: esto es lo que se llama *convergencia*. Cada vez que se repite un procedimiento, se compara la solución actual con la anterior. Si la diferencia entre ambas supera un valor predeterminado (llamado tolerancia), el proceso continúa; si no, se considera que ya se alcanzó un resultado satisfactorio. Por ejemplo, en algoritmos de cálculo numérico, cuando los valores de una variable cambian menos del 0,1% entre dos iteraciones consecutivas, se detiene el ciclo.

[IMAGEN: tabla con ejemplos de tolerancias y cómo afectan a la convergencia].

---

## 4. El ciclo de mejora continua

La optimización no es un evento único, sino parte de un proceso constante. En proyectos reales, las soluciones se ajustan continuamente según nuevos datos o requisitos. Esto implica retroalimentación: probar una solución, evaluar su desempeño, identificar qué falla y aplicar cambios. Por ejemplo, en el desarrollo de software, cada versión incluye mejoras basadas en comentarios de usuarios o resultados de pruebas automatizadas. Este tipo de ciclo es clave para adaptarse a condiciones variables, como los cambios climáticos en un diseño urbano o las actualizaciones tecnológicas en un sistema electrónico.

[IMAGEN: diagrama de flujo con "inicio" → "implementar solución" → "medir resultados" → "identificar problemas" → "ajustar parámetros" → repetición].

---

## N. Conexión con lo que sigue

Este tema se conecta directamente con `../diseño_sistemas/`, donde se aplican estos principios para refinar prototipos y resolver conflictos entre requisitos técnicos y económicos.