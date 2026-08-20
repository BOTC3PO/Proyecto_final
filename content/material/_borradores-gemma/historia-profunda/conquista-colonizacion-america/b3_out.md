### 1 — El sistema de la Encomienda
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encomienda", "mano_de_obra", "colonizacion"]

respuesta: "tributo"
tipo: "completar"
respuestas_validas: ["tributo"]

enunciado: "En el sistema de la encomienda, la Corona española otorgaba a un encomendero el derecho de recibir ___ en forma de trabajo o productos por parte de los indígenas a cambio de su evangelización."

explicacion: |
  La encomienda era una institución donde se asignaba un grupo de indígenas a un español (encomendero) para que este los protegiera y evangelizara, a cambio de tributos o trabajo.
```

### 2 — La Mita Minera
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["mita", "mineria", "potosi"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [[["Potosí", "Plata"], ["Huancavelica", "Mercurio"]]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Plata", "Mercurio", "Oro", "Azogue"]

enunciado: "Durante la colonia, la mita fue un sistema de trabajo obligatorio para los indígenas. En el caso de la mita de Potosí, el recurso principal extraído era el/la {escenarios[escenario_idx][0]}."

explicacion: |
  La mita minera fue una adaptación de la mita incaica utilizada por los españoles para asegurar mano de obra en las minas de plata de Potosí y de mercurio en Huancavelica.
```

### 3 — Flujo de metales preciosos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["mercantilismo", "metales_preciosos"]

respuesta: "metrópolis"
tipo: "mc"
opciones_explicitas: ["metrópolis", "colonias", "comunidades", "indígenas"]

enunciado: "El sistema extractivo colonial estaba diseñado para que la riqueza obtenida en América fluyera hacia la ___ europea."

explicacion: |
  El modelo económico era mercantilista y extractivista, cuyo objetivo principal era el enriquecimiento de las potencias coloniales (metrópolis) mediante la acumulación de metales.
```

### 4 — Secuencia de explotación
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["orden", "procesos_coloniales"]

respuesta: ["Conquista", "Encomienda", "Mita"]
tipo: "ordenar"
opciones_explicitas: ["Mita", "Conquista", "Encomienda"]

enunciado: "Ordene cronológicamente las etapas de la organización del trabajo y control de población en el continente americano:"

explicacion: |
  Primero se produjo la Conquista militar, seguida por la Encomienda (control de tributo/evangelización) y finalmente la consolidación de sistemas de trabajo forzado como la Mita para la minería intensiva.
```

### 5 — Impacto demográfico y laboral
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["demografia", "explotacion"]

respuesta: -15000000
tipo: "input"
tolerancia_abs: 5000000

enunciado: "Debido a las enfermedades y las duras condiciones en los sistemas de trabajo como la mita, se estima que la población indígena sufrió una caída drástica. Si una población inicial era de 25.000.000 y tras la explotación quedó en 10.000.000, ¿cuántos millones de personas se perdieron aproximadamente? (Ingrese el número entero)"

pasos:
  - "Calcular la diferencia: 25.000.000 - 10.000.000"

explicacion: |
  El colapso demográfico fue uno de los efectos más devastadores de la colonización, causado por la combinación de epidemias y la sobreexplotación laboral en minas y haciendas.
```