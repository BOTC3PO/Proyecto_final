# Geografia — america latina industria y energia (cuestionario, 35 preguntas VBLang)

> Tema: `geografia/america-latina-industria-y-energia`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["hidroelectricidad", "energia", "industria"]

variables:
  caudal: random(2000, 5000)
  altura: random(50, 150)
  eficiencia: random_float(0.7, 0.9)
  potencia_watts: caudal * altura * 9.8 * eficiencia
  potencia_mw: redondear(potencia_watts / 1000000, 2)

respuesta: potencia_mw
tipo: input

enunciado: "Una represa hipotética en la región tiene un caudal de {caudal} m³/s y un salto de agua de {altura} metros. Si la eficiencia de los generadores es del {redondear(eficiencia*100, 0)}%, ¿cuál es la potencia instalada aproximada en MW? (Fórmula: P = caudal * gravedad * altura * eficiencia, con g=9.8)"

explicacion: |
  La potencia hidroeléctrica depende del caudal, la altura del salto y la eficiencia. El cálculo muestra cómo la geografía física (caudal y desnivel) determina el potencial industrial energético.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz_energetica", "renovable"]

variables:
  afirmacion_correcta: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

enunciado: "La matriz energética de América Latina es predominantemente renovable en comparación con otras regiones del mundo."

explicacion: |
  Verdadero. Gracias a la abundancia de recursos hídricos, solares y eólicos, la región tiene una de las matrices más limpias del planeta, lo que ofrece ventajas competitivas para industrias que buscan descarbonizar sus procesos.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["hidrocarburos", "petroquimica", "reservas"]

variables:
  pais1: "Venezuela"
  pais2: "Argentina"
  pais3: "Brasil"
  respuesta_correcta: pais1

respuesta: respuesta_correcta
tipo: completar

enunciado: "Entre los países con grandes reservas de hidrocarburos que moldearon la industria petroquímica regional se encuentran {pais2}, {pais3} y {pais1}."

respuestas_validas:
  - "Venezuela"
  - "venezuela"

explicacion: |
  Venezuela posee las mayores reservas probadas de petróleo convencional en la región, lo que históricamente impulsó su industria petroquímica, aunque con fluctuaciones en su producción.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["costos", "competitividad", "energia"]

variables:
  costo_base: random_float(0.05, 0.15)
  incremento_solar: random_float(0.01, 0.03)
  costo_final: costo_base + incremento_solar
  costo_formateado: redondear(costo_final, 3)

respuesta: costo_formateado
tipo: input

enunciado: "Si una industria paga $0.12 por kWh de energía hidroeléctrica y decide instalar paneles solares para diversificar, aumentando el costo marginal en $0.025 por kWh, ¿cuál es el nuevo costo por kWh? (Redondear a 3 decimales)"

explicacion: |
  La transición energética implica costos iniciales. La diversificación hacia renovables como la solar busca competitividad a largo plazo, aunque pueda implicar ajustes en la estructura de costos inmediata.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["riesgo", "sequia", "hidroelectricidad"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La dependencia excesiva de la hidroelectricidad expone a la industria latinoamericana a la vulnerabilidad climática, como racionamientos por sequías."

explicacion: |
  Verdadero. Episdios recientes han demostrado que la falta de lluvia reduce la generación hidroeléctrica, poniendo en riesgo la continuidad operativa de industrias energívores.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["eolica", "potencial", "renovable"]

variables:
  velocidad_viento: random_float(8, 15)
  area_turbina: random_float(100, 200)
  factor_capacidad: 0.35
  potencia_kw: velocidad_viento * area_turbina * factor_capacidad
  potencia_mw: redondear(potencia_kw / 1000, 2)

respuesta: potencia_mw
tipo: input

enunciado: "Un parque eólico en la Patagonia tiene turbinas con un área de barrido de {area_turbina} m² y una velocidad media de viento de {velocidad_viento} m/s. Si el factor de capacidad es 0.35, ¿cuál es la potencia estimada en MW? (Fórmula simplificada: P = v * A * factor)"

explicacion: |
  La energía eólica es una fuente renovable clave para complementar la matriz hidroeléctrica, especialmente en regiones con vientos constantes como el sur de Argentina y Chile.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["heterogeneidad", "desarrollo", "industria"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La industria latinoamericana es homogénea; todos los países tienen el mismo nivel de desarrollo tecnológico y de servicios."

explicacion: |
  Falso. La región es heterogénea. Mientras algunos países desarrollan sectores tecnológicos avanzados, otros mantienen estructuras basadas en agroindustria y minería.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["eficiencia", "industria", "energia"]

variables:
  energia_total: random_float(100, 500)
  energia_util: random_float(60, 90)
  eficiencia: energia_util / energia_total
  eficiencia_pct: redondear(eficiencia * 100, 1)

respuesta: eficiencia_pct
tipo: input

enunciado: "Si una planta industrial consume {energia_total} GWh de energía total y de ella solo {energia_util} GWh son efectivamente útiles para el proceso productivo, ¿cuál es el porcentaje de eficiencia energética? (Redondear a 1 decimal)"

explicacion: |
  La eficiencia energética es crucial para la competitividad. Mejorarla reduce costos y dependencia de insumos energéticos externos.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["descarbonizacion", "sostenibilidad", "industria"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La matriz energética renovable de América Latina constituye una oportunidad estratégica para descarbonizar la economía global."

explicacion: |
  Verdadero. En un mundo que busca reducir emisiones, la capacidad de la región para proveer energía limpia es una ventaja comparativa clave para la industria.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["carbono", "huella", "renovable"]

variables:
  energia_renovable: random_float(1000, 5000)
  factor_emision_carbono: 0.5
  co2_evitado: energia_renovable * factor_emision_carbono
  co2_formateado: redondear(co2_evitado, 0)

respuesta: co2_formateado
tipo: input

enunciado: "Si una industria utiliza {energia_renovable} MWh de energía solar en lugar de carbón, y el factor de emisión del carbón es 0.5 kg CO2/MWh, ¿cuántos kg de CO2 evita emitir? (Redondear a entero)"

explicacion: |
  La transición a renovables no solo es ambiental, sino también económica, al reducir costos de carbono y mejorar la imagen corporativa global.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["agroindustria", "estructura", "productiva"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Algunos países latinoamericanos mantienen una estructura productiva basada en la agroindustria y la minería."

explicacion: |
  Verdadero. A pesar de los avances, la heterogeneidad regional hace que la agroindustria y la minería sigan siendo pilares importantes en varias economías.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["industria", "aluminio", "electricidad"]

variables:
  industria: "siderúrgica y de aluminio"
  requisito: "grandes cantidades de electricidad"

respuesta: "{requisito}"
tipo: completar

enunciado: "La instalación de industrias {industria} en países como Brasil y Paraguay ha sido posible gracias al acceso a grandes saltos de agua que permiten generar {requisito}."

explicacion: |
  La industria del aluminio y la siderurgia son intensivas en energía. La disponibilidad de hidroelectricidad barata en la región ha sido un factor clave para atraer este tipo de inversiones industriales.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["hidrocarburos", "petroquímica", "Venezuela"]

variables:
  pais: uno_de(["Venezuela", "Argentina", "Brasil"])
  industria: "petroquímica"

respuesta: "{industria}"
tipo: completar

enunciado: "La presencia de grandes reservas de hidrocarburos en {pais} ha moldeado el desarrollo de la industria {industria} regional, permitiendo la producción de derivados del petróleo."

explicacion: |
  Países con grandes reservas de hidrocarburos han desarrollado industrias petroquímicas locales. Esto permite transformar la materia prima en productos de mayor valor agregado, aunque la dependencia de estos recursos también presenta desafíos económicos.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["valor_agregado", "transformación", "materias_primas"]

variables:
  proceso: "transformar recursos en valor agregado"
  factor: "procesos industriales intensivos en energía"

respuesta: "{factor}"
tipo: completar

enunciado: "El desafío actual de América Latina es {proceso} mediante {factor}, pasando de ser un proveedor exclusivo de materias primas a un actor industrial relevante."

explicacion: |
  La región busca dejar atrás el modelo de exportación de materias primas sin procesar. La clave está en utilizar su energía y recursos para crear procesos industriales que generen mayor valor agregado.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz", "renovable", "descarbonización"]

variables:
  tendencia: "descarbonizar"
  oportunidad: "estratégica"

respuesta: "oportunidad"
tipo: completar

enunciado: "La matriz energética predominantemente renovable de América Latina constituye una {oportunidad} estratégica en un mundo que busca {tendencia} su economía."

explicacion: |
  La transición energética global favorece a regiones con matrices limpias. América Latina puede posicionarse como un proveedor de energía verde y productos manufacturados con baja huella de carbono.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["competitividad", "precios", "inversión"]

variables:
  requisito: "precios competitivos"
  resultado: "atraer inversiones"

respuesta: "{resultado}"
tipo: completar

enunciado: "Sin acceso a fuentes de energía confiables y a {requisito}, es imposible {resultado} industriales que compitan en el mercado mundial."

explicacion: |
  La energía es un costo crítico para la industria. Si los precios son altos o el suministro es inestable, las inversiones industriales se dirigen a otras regiones con mejores condiciones energéticas.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["zonas_franca", "comercio", "exportación"]

variables:
  fenomeno: "deslocalización"
  consecuencia: "zonas francas"

respuesta: "{consecuencia}"
tipo: completar

enunciado: "La {fenomeno} de empresas ha tenido un impacto dual, fomentando la instalación de maquiladoras y {consecuencia} en la región."

explicacion: |
  Las zonas francas son áreas designadas para incentivar la inversión extranjera y la exportación. Han surgido como respuesta a la deslocalización, permitiendo a las empresas operar con beneficios fiscales y aduaneros.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["renovables", "solar", "eólica"]

variables:
  tipo1: "solar"
  tipo2: "eólica"

respuesta: "{tipo1} y {tipo2}"
tipo: completar

enunciado: "Más recientemente, los centros de desarrollo industrial se han concentrado en áreas con potencial para energías renovables como la {tipo1} y la {tipo2}."

explicacion: |
  Además de la hidroelectricidad, la región está aprovechando su potencial para energías limpias alternativas. El noroeste de Argentina, Chile y Brasil tienen gran potencial para estas fuentes.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["dependencia", "cadenas_suministro", "externas"]

variables:
  condicion: "dependencia de cadenas de suministro externas"
  requisito: "matriz energética robusta"

respuesta: "{requisito}"
tipo: completar

enunciado: "La deslocalización genera {condicion} que requiere una {requisito} y competitiva para ser sostenible."

explicacion: |
  Aunque las maquiladoras reducen costos laborales, su viabilidad depende de una logística y energía eficientes. Una matriz energética débil aumenta los costos logísticos y de producción, haciendo inviable la dependencia externa.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["siderurgia", "hidroelectricidad", "localización"]

variables:
  industria: "siderúrgica"
  recurso: "grandes saltos de agua"

respuesta: "{recurso}"
tipo: completar

enunciado: "La generación hidroeléctrica ha sido fundamental para el desarrollo industrial de países como Brasil y Paraguay, permitiendo la instalación de industrias {industria} gracias al acceso a {recurso}."

explicacion: |
  La siderurgia requiere grandes volúmenes de energía. Los grandes ríos y saltos de agua en la región han permitido instalar plantas siderúrgicas cerca de la fuente de energía, reduciendo costos.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["racionamiento", "vulnerabilidad", "hidroelectricidad"]

variables:
  evento: "sequías prolongadas"
  consecuencia: "racionamiento eléctrico"

respuesta: "{consecuencia}"
tipo: completar

enunciado: "La dependencia de la hidroelectricidad expone a la región a la vulnerabilidad climática; {evento} pueden paralizar la producción industrial, como se ha observado en episodios recientes de {consecuencia}."

explicacion: |
  Los episodios de sequía en la Cuenca del Plata o en Brasil han demostrado que la falta de agua reduce la generación eléctrica, obligando a racionamientos que afectan gravemente a la industria.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["transformación", "productiva", "historia"]

variables:
  pasado: "proveedor exclusivo de materias primas"
  presente: "actor industrial relevante"

respuesta: "{presente}"
tipo: completar

enunciado: "América Latina ha transitado un camino complejo, pasando de ser un {pasado} a intentar posicionarse como un {presente}."

explicacion: |
  El cambio estructural busca diversificar la economía. Ya no basta con exportar recursos naturales; se busca participar en la cadena de valor industrial global.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["energía", "habilitante", "industria"]

variables:
  rol: "factor habilitante crítico"
  condición: "acceso a fuentes confiables"

respuesta: "{rol}"
tipo: completar

enunciado: "En este contexto, la energía actúa como el {rol}. Sin {condición} y a precios competitivos, es imposible atraer inversiones industriales."

explicacion: |
  La energía no es solo un insumo, es un requisito previo para la industrialización. Sin ella, no hay producción manufacturada competitiva.
```

### 24 — pregunta 24

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["geografía_industrial", "disparidad", "localización"]

variables:
  fenómeno: "desarrollo industrial"
  concentración: "zonas con acceso a hidrocarburos"

respuesta: "{concentración}"
tipo: completar

enunciado: "La geografía industrial de la región refleja esta disparidad: los centros de {fenómeno} se concentran en {concentración}, grandes saltos de agua o áreas con potencial renovable."

explicacion: |
  La industria no se distribuye uniformemente. Se localiza donde hay acceso a recursos energéticos clave, ya sean fósiles, hidráulicos o renovables.
```

### 25 — pregunta 25

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["impacto", "deslocalización", "dual"]

variables:
  positivo: "fomentado la instalación de maquiladoras"
  negativo: "dependencia de cadenas externas"

respuesta: "{negativo}"
tipo: completar

enunciado: "El impacto de la deslocalización ha sido dual: por un lado, {positivo}; por otro, ha generado {negativo}."

explicacion: |
  La deslocalización trae beneficios (empleo, inversión) pero también riesgos (dependencia tecnológica y logística). Es un equilibrio delicado para la soberanía industrial.
```

### 26 — pregunta 26

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["recursos", "valor_agregado", "comparativa"]

variables:
  ventaja: "ventaja comparativa histórica"
  recurso: "recursos naturales"

respuesta: "{recurso}"
tipo: completar

enunciado: "La región posee una {ventaja} en {recurso}, pero su desafío actual radica en cómo transformarlos en valor agregado."

explicacion: |
  Tener recursos no es suficiente. La clave está en la capacidad de transformarlos industrialmente. Sin industria, el valor se queda en la extracción.
```

### 27 — pregunta 27

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["hidrocarburos", "reservas", "Venezuela"]

variables:
  país1: "Venezuela"
  país2: "Argentina"
  país3: "Brasil"

respuesta: "{país1}, {país2} y {país3}"
tipo: completar

enunciado: "Grandes reservas de hidrocarburos se encuentran en {país1}, {país2} y {país3}, moldeando la industria petroquímica regional."

explicacion: |
  Estos países tienen la capacidad de extraer y refinar petróleo. Esto les permite desarrollar una industria petroquímica propia, reduciendo la dependencia de importaciones de derivados.
```

### 28 — pregunta 28

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz", "energética", "renovable"]

variables:
  característica: "predominantemente renovable"
  oportunidad: "oportunidad estratégica"

respuesta: "{oportunidad}"
tipo: completar

enunciado: "La matriz energética de América Latina es {característica}, lo que constituye una {oportunidad} en un mundo que busca descarbonizar su economía."

explicacion: |
  La transición energética global es una oportunidad para la región. Sus fuentes limpias pueden ser exportadas o utilizadas para producir bienes con baja huella de carbono.
```

### 29 — pregunta 29

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["deslocalización", "corporaciones", "costos"]

variables:
  sujeto: "corporaciones"
  acción: "trasladan su producción"
  motivo: "menores costos operativos"

respuesta: "{motivo}"
tipo: completar

enunciado: "La {sujeto} {acción} a países con {motivo}, fenómeno conocido como deslocalización."

explicacion: |
  La búsqueda de eficiencia impulsa a las multinacionales a moverse. América Latina compite ofreciendo costos laborales y energéticos atractivos.
```

### 30 — pregunta 30

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["aluminio", "industria", "electricidad"]

variables:
  industria: "aluminio"
  requisito: "grandes cantidades de electricidad"

respuesta: "{requisito}"
tipo: completar

enunciado: "La generación hidroeléctrica ha permitido la instalación de industrias de {industria} que requieren {requisito}."

explicacion: |
  El aluminio es uno de los productos más intensivos en energía. La hidroelectricidad barata de Brasil y Paraguay ha sido clave para su desarrollo en la región.
```

### 31 — pregunta 31

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["vulnerabilidad", "clima", "hidroelectricidad"]

variables:
  causa: "dependencia de la hidroelectricidad"
  efecto: "vulnerabilidad climática"

respuesta: "{efecto}"
tipo: completar

enunciado: "La {causa} expone a la región a la {efecto}; sequías prolongadas pueden paralizar la producción industrial."

explicacion: |
  El cambio climático es un riesgo real. Si los patrones de lluvia cambian, la generación hidroeléctrica se ve afectada, impactando directamente a la industria.
```

### 32 — pregunta 32

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["tecnología", "servicios", "desarrollo"]

variables:
  sector: "tecnológicos y de servicios avanzados"
  estructura: "agroindustria y minería"

respuesta: "{estructura}"
tipo: completar

enunciado: "Mientras algunos países han logrado desarrollar sectores {sector}, otros mantienen una estructura productiva basada en {estructura}."

explicacion: |
  La heterogeneidad es la norma. Algunos países han logrado saltar la trampa de la renta media diversificando su economía, mientras otros siguen atrapados en la extracción.
```

### 33 — pregunta 33

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["precios", "competitividad", "energía"]

variables:
  requisito: "precios competitivos"
  resultado: "atraer inversiones industriales"

respuesta: "{resultado}"
tipo: completar

enunciado: "Sin acceso a fuentes de energía confiables y a {requisito}, es imposible {resultado} que compitan en el mercado mundial."

explicacion: |
  La energía es un costo fijo. Si es caro, el producto final es caro. Para competir globalmente, se necesita energía barata y confiable.
```

### 34 — pregunta 34

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["zonas_franca", "maquiladora", "exportación"]

variables:
  tipo1: "maquiladoras"
  tipo2: "zonas francas"

respuesta: "{tipo2}"
tipo: completar

enunciado: "La deslocalización ha fomentado la instalación de {tipo1} y {tipo2} en la región."

explicacion: |
  Las zonas francas son instrumentos de política económica para atraer inversión. Ofrecen beneficios fiscales y aduaneros para facilitar la exportación.
```

### 35 — pregunta 35

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["transformación", "recursos", "valor"]

variables:
  acción: "transformar recursos en valor agregado"
  medio: "procesos industriales intensivos en energía"

respuesta: "{medio}"
tipo: completar

enunciado: "El desafío actual radica en {acción} mediante {medio}."

explicacion: |
  La clave del desarrollo industrial es la transformación. Sin procesos industriales que usen energía para agregar valor, los recursos naturales se exportan baratos y se importan caros.
```
