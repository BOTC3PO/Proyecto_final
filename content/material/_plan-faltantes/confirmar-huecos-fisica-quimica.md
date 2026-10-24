# Huecos de Física y Química: qué confirmar

Nueve temas nuevos (4 de Física, 5 de Química) creados a partir de `HUECOS-POR-TITULOS.md`. Todos con fila en `dependencias.md` («decisión de Claude, no pedida»; sin ID en `troncos.md`), teoría de 490 a 630 palabras y 22 a 26 preguntas VBLang, validadas con `validar_lote.ts` y `auditar_preguntas.ts` (0 problemas). Los cálculos están parametrizados y las respuestas se comprobaron a mano.

## Verificado con búsqueda web
- Ley 27.191 (modificó la 26.190): meta de 20 % de renovables en el consumo eléctrico al 31/12/2025 y 35 % a 2030. El cumplimiento real no se afirma en el texto.
- Parque solar Cauchari (Jujuy): unos 300 MW, operación comercial desde 2020 (altitud y otros detalles no se citan por diferencias entre fuentes).
- Rangos de viraje: fenolftaleína ≈ 8,2–10; naranja de metilo ≈ 3,1–4,4 (las fuentes difieren en décimas).
- Arsénico: el Código Alimentario incorporó 0,01 mg/L (10 µg/L) como valor guía; **no** se cita el límite de 0,05 mg/L para regiones con suelos ricos en arsénico porque no se pudo confirmar en el texto vigente del art. 982.

## Sin verificar con fuente (escrito de memoria o con redacción prudente)
- Fechas y autores: Bernoulli, *Hydrodynamica* (1738); Lavoisier, *Traité élémentaire de chimie* (1789); Proust (hacia 1800); Dalton (1803–1808); Richter (1792); Arrhenius (1884–1887); Brønsted y Lowry (1923); Lewis (1923); Joule (década de 1840).
- Física: límite de Betz (≈ 59 %), velocidad del sonido ≈ 340 m/s, constante R = 8,314 J/(mol·K), valor de g = 9,8 m/s².
- Química: ángulo H–O–H 104,5°, calor específico del agua 4,18 J/(g·°C), densidad máxima a ≈ 4 °C, «menos del 3 %» de agua dulce, clasificación de dureza (< 60 mg/L blanda; > 180 muy dura), ≈ 4 a 5 % de ácido acético en el vinagre (la teoría de ácidos y bases lo menciona en una explicación), rango de azul de bromotimol ≈ 6–7,6.
- **Rango de pH potable 6,5–8,5**: no se cita en el texto (no se pudo confirmar en el Código Alimentario).
- Yacyretá y Salto Grande: solo se mencionan como centrales hidroeléctricas argentinas, sin cifras.

## Decisiones para Javier
1. Ninguno de los 9 temas está en `troncos.md` ni en un examen jefe; hay que decidir si se agregan nodos y se rehacen clusters (Física y Química tienen examen jefe).
2. `energias-renovables-y-transformacion-de-energia` cruza con `vida-cotidiana/eficiencia-energetica-domestica` y con Cívica/Economía (matriz energética): ¿se enlaza o se amplía?
3. `quimica-del-agua` y `geografia/recursos-hidricos-y-gestion` se solapan en el ciclo y el agua dulce; ¿se deja así?
4. Algunos cuestionarios usan g = 9,8 m/s² y otros módulos del repo usan 10: ¿se unifica?
