# Física — Choques elásticos e inelásticos (teoría)

> Tema del MAPA: `choques_elasticos_inelasticos`. Depende de `../conservacion_cantidad_movimiento/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Análisis de los principios que rigen las interacciones entre cuerpos en movimiento.

---

## 1. Conservación del momento lineal

En cualquier choque, ya sea elástico o inelástico, la **cantidad de movimiento total** del sistema se mantiene constante si no hay fuerzas externas actuando. Esto significa que, aunque las velocidades individuales de los objetos cambien durante el impacto, la suma de sus momentos (masa por velocidad) antes y después del choque es igual. La ecuación clave es:  
$$
m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}
$$  
Esta ley se aplica siempre que el sistema esté aislado, como en colisiones entre bolas de billar o asteroides en el espacio. [IMAGEN: dos esferas en movimiento antes y después de un choque, con flechas indicando momentos]  

## 2. Diferencias entre choques elásticos e inelásticos

Un **choque elástico** conserva tanto la cantidad de movimiento como la energía cinética total del sistema. Esto ocurre cuando no hay deformaciones permanentes ni transformaciones de energía en otras formas (como calor o sonido). Por ejemplo, dos bolas de acero que rebotan sin dañarse.  

En un **choque inelástico**, la energía cinética no se conserva: parte se pierde en forma de calor, deformación o adherencia entre los cuerpos. El caso extremo es el **choque perfectamente inelástico**, donde los objetos quedan unidos y se mueven juntos tras el impacto (como dos carritos que se enganchan al colisionar).  

## 3. Identificación de choques según resultados

Para determinar si un choque fue elástico o inelástico, hay que observar:  
- **Deformaciones permanentes**: Si los cuerpos quedan dañados, es probablemente inelástico.  
- **Adherencia**: Si se unen y siguen juntos, es un choque perfectamente inelástico.  
- **Velocidades finales**: En elásticos, las velocidades cambian de manera que la energía cinética total no varía; en inelásticos, hay una disminución clara.  

Un ejemplo común es el de dos coches que chocan: si se deforman y quedan pegados, la energía se pierde en el proceso. [IMAGEN: comparación de choques elástico e inelástico con indicadores de energía]  

## 4. Aplicaciones reales

Los choques no son solo fenómenos teóricos. En ingeniería, se diseñan materiales que absorban impactos (como airbags o colchones en escaleras) para minimizar daños. En deportes, como el fútbol, los jugadores usan la física de choques para predecir trayectorias y evitar lesiones. La distinción entre ambos tipos también es clave en simulaciones computacionales de accidentes o en experimentos científicos con partículas subatómicas.  

## N. Conexión con lo que sigue

Este tema prepara el terreno para analizar problemas numéricos de choques, como calcular velocidades finales o coeficientes de restitución, en `../calculos_choques/`.