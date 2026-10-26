# Oficios — Electricista — Instalación de iluminación y tomacorrientes (teoria)

> Tema del MAPA: `OF1.instalacion-de-iluminacion-y-tomas` (`OF1 §5` de la planificación, propuesto en `../../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`). Depende de `tecnicas-electricista/` (ver `../dependencias.md`). Lección informativa — la evaluación del oficio se concentra en `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Circuitos de uso general y de uso especial

En una vivienda, la instalación se divide en **circuitos**, cada uno con su protección, para que una falla en un sector no deje sin energía a toda la casa y para que cada circuito tenga cables y protecciones adecuados a lo que alimenta. La reglamentación argentina clasifica los circuitos más comunes así:

- **Iluminación de uso general**: alimentan las bocas de luz de la vivienda.
- **Tomacorrientes de uso general**: alimentan los enchufes comunes, donde se conectan artefactos livianos o medianos.
- **Tomacorrientes de uso especial**: circuitos dedicados a un artefacto que consume mucho (aire acondicionado, horno eléctrico, termotanque) o que tiene requisitos particulares.
- **Circuitos de aplicaciones específicas** o especiales para cargas determinadas.

Separar iluminación de tomas es una práctica básica: si salta la protección de los enchufes, la casa no queda a oscuras. Y cada circuito de uso especial debería tener su propio conductor y su propia protección.

## Iluminación: bocas, llaves y circuitos

Un circuito de iluminación básico está formado por la **boca de luz** (el punto donde se conecta la luminaria), la **llave** (que corta o permite la conexión) y los conductores. Hay distintos esquemas:

- **Llave simple**: enciende y apaga una luz desde un solo lugar.
- **Combinación o conmutada**: permite encender y apagar la misma luz desde **dos lugares** (por ejemplo, ambos extremos de un pasillo o una escalera), usando dos llaves conmutadoras y dos conductores de retorno.
- **Cruce**: para tres o más puntos de comando, se intercala una llave de cruce entre las dos conmutadoras.

En todos los casos, la **fase** debe pasar por la llave y no el neutro: la llave corta la fase para que, con la luz apagada, el portalámparas y la luminaria **no queden energizados**. Esa regla es una de las que más accidentes evita al cambiar una lámpara. Las **luminarias** se eligen según el lugar (ver su grado de protección IP, su potencia y su disipación de calor) y se fijan de manera segura al techo o a la pared.

## Tomacorrientes

Los **tomacorrientes** de uso general en Argentina son de tres patas (fase, neutro y tierra) y llevan **conexión a tierra**. El conductor de tierra (verde-amarillo) se conecta siempre al borne correspondiente, aunque algunos artefactos tengan doble aislación; un toma sin tierra real es una trampa. La cantidad y ubicación de tomas se define según la superficie y el uso de cada ambiente: más en cocinas y escritorios, y distribuidos para no depender de alargues.

Las alturas de colocación son una convención de uso: las cajas de tomas suelen colocarse a baja altura (cerca del zócalo) y las llaves de luz a una altura cómoda al lado de las puertas; los valores exactos están en las reglas de buenas prácticas y la reglamentación. En cocinas, a la altura de la mesada; en exteriores y baños, con las protecciones especiales que corresponden.

## Cables y protecciones

Para estos circuitos se usan cables de sección adecuada (la sección mínima de cada tipo de circuito la fija la reglamentación) y **protecciones termomagnéticas** acordes a la sección: una protección más grande que lo que el cable aguanta es peligroso (ver `calculo-electrico/`). Además, toda la instalación debe estar protegida por un **interruptor diferencial** (ver `tableros-electricos/`).

## Locales húmedos

En **baños**, cocinas y exteriores, la reglamentación define **zonas** con restricciones: no se colocan tomacorrientes ni llaves dentro de ciertos volúmenes alrededor de la ducha o la bañera, y los artefactos deben tener un **grado IP** adecuado a la humedad y a las salpicaduras. La conexión equipotencial de las partes metálicas y la protección diferencial son claves en estos lugares.

## Buenas prácticas de ejecución

- **Planificar** el recorrido de los caños y la ubicación de las cajas antes de abrir las paredes.
- **Identificar** los conductores con los colores normalizados.
- Hacer **empalmes solo dentro de cajas** accesibles, con conectores adecuados, nunca dentro de la pared o del caño.
- No sobrecargar cajas ni caños con más conductores de los permitidos.
- **Probar** cada circuito (continuidad, aislación, funcionamiento) antes de entregarlo.

**Sobre este material**: es informativo y no habilita a ejecutar instalaciones eléctricas sin la habilitación correspondiente. Las secciones, alturas y distancias exactas deben tomarse de la reglamentación vigente.
