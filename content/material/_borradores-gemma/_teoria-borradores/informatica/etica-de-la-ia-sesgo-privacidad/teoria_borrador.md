# Informática — Ética de la IA: Sesgo y privacidad (teoría)

> Tema del MAPA: `etica_de_la_ia_sesgo_privacidad`. Depende de `../introduccion_a_la_inteligencia_artificial/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explora los riesgos éticos que surgen al implementar inteligencia artificial, enfocándose en cómo se generan sesgos y qué pasa con la privacidad de los datos.

---

## 1. ¿Qué es el sesgo algorítmico?

El sesgo algorítmico ocurre cuando un sistema de inteligencia artificial reproduce prejuicios humanos en sus resultados. Esto no sucede por error, sino porque los modelos aprenden de los datos con los que se entrenan. Si esos datos reflejan discriminaciones históricas o sociales —como diferencias en el trato a hombres y mujeres, o estereotipos raciales—, la IA repetirá esas injusticias sin darse cuenta.

Por ejemplo: un algoritmo de contratación podría favorecer candidatos de ciertos grupos si los datos históricos muestran que se les otorgaron más empleos. El problema no está en la tecnología, sino en las decisiones humanas que moldean los datos y el diseño del modelo.

[IMAGEN: Diagrama de un algoritmo entrenado con datos sesgados, mostrando cómo se genera una salida injusta]

---

## 2. Privacidad en los datos de entrenamiento

Cuando se entrena una inteligencia artificial, se usan grandes volúmenes de información. Si esos datos incluyen información personal sensible —como números de documentos, historiales médicos o ubicaciones— y no se manejan con cuidado, se viola la privacidad de las personas.

La legislación actual (como el GDPR en Europa o la Ley 25.326 de Protección de Datos en Argentina) exige que los datos personales sean anonimizados o pseudonimizados antes de usarse. Sin embargo, muchos modelos aún operan con datos no procesados, lo que puede permitir identificar a individuos incluso si se ocultan sus nombres.

[IMAGEN: Flujo de información desde la recolección de datos hasta el entrenamiento del modelo, destacando puntos críticos para la privacidad]

---

## 3. Cómo se forman los sesgos en la IA

Los sesgos no nacen solos. Pueden surgir en tres etapas clave:

1. **En los datos**: Si los datos de entrenamiento están incompletos o reflejan discriminaciones pasadas (por ejemplo, imágenes de mujeres en roles domésticos y hombres en puestos técnicos), la IA aprenderá esas asociaciones.
2. **En el diseño del algoritmo**: Algunos modelos priorizan ciertas características sobre otras. Por ejemplo, un sistema que valora "experiencia laboral" puede penalizar a quienes tomaron tiempos de baja por cuidado familiar.
3. **En la implementación**: Incluso si un modelo es imparcial en teoría, su uso en contextos específicos (como préstamos hipotecarios) puede generar efectos sesgados si no se revisan sus decisiones.

[IMAGEN: Tres columnas con ejemplos de sesgos en datos, diseño y uso real]

---

## 4. Consecuencias éticas para la sociedad

Los algoritmos que perpetúan el racismo, el sexismo o la exclusión social no solo son injustos, sino que también refuerzan estructuras de poder ya existentes. Por ejemplo:

- Un sistema de detención predictiva podría marcar a ciertos barrios como "más peligrosos" basándose en estadísticas históricas sesgadas.
- Plataformas de redes sociales pueden reforzar estereotipos si recomiendan contenido que refuerce prejuicios.

Esto no se resuelve solo con tecnología: requiere políticas públicas, transparencia y participación ciudadana en el desarrollo de IA.

---

## N. Conexión con lo que sigue

Este tema prepara para entender cómo se construyen modelos éticos en `../responsabilidad_en_la_ia/` y qué normas protegen los derechos digitales en `../derecho_y_tecnologia/`.