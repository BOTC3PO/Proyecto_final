# Huecos de Lengua e Informática: qué hay que confirmar

Creados el 2026-10-19 (7 temas, 23 + 23 + 23 + 23 + 24 + 23 + 22 preguntas; todos validados con `validar_lote.ts` y sin defectos reales en `auditar_preguntas.ts`; el único aviso es una llave de CSS en un enunciado, que se muestra bien).

## Decisiones tomadas por Claude (corregir si no coinciden)
- **Informática:** no se creó «HTML y CSS básico» porque `oficios/frontend/html-semantico` y `oficios/frontend/css-y-maquetacion` ya lo cubren; se escribió `como-se-construye-una-pagina-web-html-css-javascript` (visión conceptual y recorrido petición-respuesta).
- Los 7 temas no tienen ID en `troncos.md` (solo fila en `dependencias.md`) y no están en los exámenes jefe (`verificar_examen_jefe.py` los lista como faltantes).
- Fragmentos de obras: no se transcribió ningún verso ni pasaje largo; de Borges, Cortázar, Pizarnik y Gelman solo hay paráfrasis y datos bibliográficos.

## Verificado con búsqueda web (resultados de buscadores que citan fuentes; no se leyeron las fuentes primarias)
- Martín Fierro: 1872 (La ida) y 1879 (La vuelta); poema narrativo en verso; sextillas octosílabas.
- Ficciones 1944, El Aleph 1949, Antología de la literatura fantástica 1940, La invención de Morel 1940 con prólogo de Borges.
- Cortázar: Bestiario 1951, Rayuela 1963 (dos órdenes de lectura), «Casa tomada» 1946 en *Los Anales de Buenos Aires* dirigida por Borges, «Axolotl» en *Final del juego* (1956).
- Girondo 1922 y revista *Martín Fierro* 1924; Borges *Fervor de Buenos Aires* 1923; Pizarnik *Árbol de Diana* 1962 con prólogo de Octavio Paz y sus siete poemarios.

## Sin verificar con fuente (escrito de memoria; revisar antes de publicar)
- Lengua: Hernández 1834-1886; *Fausto* de Estanislao del Campo (1866) y su argumento; la caracterización de Hidalgo y Ascasubi; *El payador* de Lugones (conferencias de 1913, libro de 1916) y la discusión de Borges; el esquema de rima exacto de la sextilla (no se preguntó); Fierro ayudado por el sargento Cruz y la payada con el Moreno.
- Lugones: *Lunario sentimental* (1909), *Las fuerzas extrañas* (1906); Storni: *La inquietud del rosal* (1916), *Ocre* (1925), *Mundo de siete pozos* (1934), nacimiento en Suiza; Gelman: *Violín y otras cuestiones* (1956), *Cólera buey* (1971), Premio Cervantes 2007; fechas de nacimiento y muerte de Bioy, Silvina Ocampo, Girondo, Pizarnik, Gelman, Cortázar; *Los trabajos y las noches* 1965, *Extracción de la piedra de locura* 1968; fundación de *Sur* (1931); oposición Florida/Boedo.
- Cortázar: la metáfora del knock-out y la «esfera» en «Algunos aspectos del cuento»; *Todos los fuegos el fuego* (1966), *Las armas secretas* (1959), *Historias de cronopios y de famas* (1962); las 56 páginas/capítulos de la primera lectura de Rayuela.
- Informática: Ethernet por UTP hasta ~100 m, MAC de 48 bits, bandas del Wi-Fi y sus nombres (Wi-Fi 4/5/6/6E), rangos de IP privadas, WEP/WPA2/WPA3; tipos y ejemplos de NoSQL (Redis, MongoDB, Cassandra, Neo4j), BASE/consistencia eventual, CAP de Eric Brewer. Son datos estables y muy difundidos, pero no se contrastaron con una fuente en esta tanda.

## Para Javier
1. ¿Se agregan estos temas al grafo (`troncos.md`) y a los exámenes jefe de Lengua e Informática?
2. Geografía y el resto de los huecos: ver `HUECOS-POR-TITULOS.md`.
