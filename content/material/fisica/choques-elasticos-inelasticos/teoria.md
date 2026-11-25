# Física — Choques elásticos e inelásticos (teoría)

> Tema del MAPA: `fisica/choques-elasticos-inelasticos`. Depende de conservacion cantidad movimiento (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Análisis de los principios que rigen las interacciones entre cuerpos en movimiento.

---

## 1. Conservación del momento lineal

En cualquier choque, ya sea elástico o inelástico, la **cantidad de movimiento total** del sistema se mantiene constante si no hay fuerzas externas actuando. Esto significa que, aunque las velocidades individuales de los objetos cambien durante el impacto, la suma de sus momentos (masa por velocidad) antes y después del choque es igual. La ecuación clave es:  
$$
m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}
$$  
Esta ley se aplica siempre que el sistema esté aislado, como en colisiones entre bolas de billar o asteroides en el espacio.

## 2. Diferencias entre choques elásticos e inelásticos

Un **choque elástico** conserva tanto la cantidad de movimiento como la energía cinética total del sistema. Esto ocurre cuando no hay deformaciones permanentes ni transformaciones de energía en otras formas (como calor o sonido). Por ejemplo, dos bolas de acero que rebotan sin dañarse.  

En un **choque inelástico**, la energía cinética no se conserva: parte se pierde en forma de calor, deformación o adherencia entre los cuerpos. El caso extremo es el **choque perfectamente inelástico**, donde los objetos quedan unidos y se mueven juntos tras el impacto (como dos carritos que se enganchan al colisionar).  

## 3. Identificación de choques según resultados

Para determinar si un choque fue elástico o inelástico, hay que observar:  
- **Deformaciones permanentes**: Si los cuerpos quedan dañados, es probablemente inelástico.  
- **Adherencia**: Si se unen y siguen juntos, es un choque perfectamente inelástico.  
- **Velocidades finales**: En elásticos, las velocidades cambian de manera que la energía cinética total no varía; en inelásticos, hay una disminución clara.  

Un ejemplo común es el de dos coches que chocan: si se deforman y quedan pegados, la energía se pierde en el proceso.

## 4. Aplicaciones reales

Los choques no son solo fenómenos teóricos. En ingeniería, se diseñan materiales que absorban impactos (como airbags o colchones en escaleras) para minimizar daños. En deportes, como el fútbol, los jugadores usan la física de choques para predecir trayectorias y evitar lesiones. La distinción entre ambos tipos también es clave en simulaciones computacionales de accidentes o en experimentos científicos con partículas subatómicas.  

## 5. Ejemplos resueltos

**Dos carritos que se enganchan.** Un carrito de 2 kg a 6 m/s choca con otro de 1 kg que está quieto, y quedan unidos
(choque perfectamente inelástico).

- Momento antes: $2 \cdot 6 + 1 \cdot 0 = 12\ \text{kg·m/s}$.
- Después se mueven juntos, con masa $2 + 1 = 3\ \text{kg}$: $3 \cdot v = 12 \Rightarrow v = 4\ \text{m/s}$.
- Energía cinética antes: $\frac{1}{2} \cdot 2 \cdot 6^2 = 36\ \text{J}$; después: $\frac{1}{2} \cdot 3 \cdot 4^2 = 24\ \text{J}$.
  Se perdieron 12 J en deformación, calor y sonido: el momento se conservó, la energía cinética no.

## N. Conexión con lo que sigue

Este tema prepara el terreno para analizar problemas numéricos de choques, como calcular velocidades finales o coeficientes de restitución, en calculos choques.