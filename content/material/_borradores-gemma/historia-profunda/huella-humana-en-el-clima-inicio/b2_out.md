### 1 — Impacto de la agricultura temprana
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["preindustrial", "agricultura", "deforestacion"]

respuesta: "local"
tipo: mc

opciones_explicitas: ["global", "local", "nulo", "atmosferico"]

enunciado: "A diferencia de la era industrial, el impacto climático derivado de la deforestación para la agricultura en las sociedades preindustriales se caracterizaba por ser de escala ___."

explicacion: |
  Las sociedades preindustriales alteraban el ecosistema de su entorno inmediato (deforestación, erosión), pero sus emisiones de gases de efecto invernadero no eran suficientes para alterar el balance térmico global de la atmósfera.
```

### 2 — El gran cambio de la Revolución Industrial
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["combustibles_fosiles", "industrializacion", "co2"]

variables:
  escenario: uno_de(["quema_carbón", "quema_petroleo"])

respuesta: 450
tipo: input
tolerancia_abs: 5

enunciado: "Considerando que la concentración de CO2 en la atmósfera era de aproximadamente {escenario == 'quema_carbón' ? 280 : 280} ppm antes de la industrialización masiva, y que tras la quema masiva de combustibles fósiles ha superado las 415 ppm. ¿Cuál es el incremento aproximado en ppm (redondeado al entero más cercano)?"

pasos:
  - "Identificar la concentración preindustrial (aprox. 280 ppm)."
  - "Identificar la concentración actual (aprox. 415-420 ppm)."
  - "Restar la concentración preindustrial de la actual."

explicacion: |
  La quema de combustibles fósiles liberó carbono que estuvo secuestrado durante millones de años, aumentando la concentración de CO2 de ~280 ppm a niveles superiores a 415 ppm, rompiendo el ciclo natural del carbono.
```

### 3 — Agentes del cambio climático
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["causas", "gas_efecto_invernadero"]

respuesta: "CO2"
tipo: completar
respuestas_validas: ["CO2", "CH4", "N2O"]

enunciado: "Mientras que la agricultura preindustrial afectaba el uso del suelo, la industrialización introdujo una quema masiva de combustibles fósiles que aumentó la concentración de ___ en la atmósfera."

explicacion: |
  El dióxido de carbono (CO2) es el principal gas de efecto invernadero emitido por la combustión de carbón, petróleo y gas natural, siendo el principal responsable del forzamiento radiativo antropogénico.
```

### 4 — Evolución del impacto ambiental
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["escala", "comparacion"]

respuesta: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]
tipo: ordenar

opciones_explicitas: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]

enunciado: "Ordene los siguientes fenómenos de menor a mayor escala de impacto climático global, según la evolución histórica de la huella humana:"

explicacion: |
  La escala comenzó con la modificación de paisajes locales (deforestación), continuó con cambios sistemáticos en el uso del suelo (agricultura intensiva) y culminó con la alteración química global de la atmósfera (emisiones de GEI).
```

### 5 — El factor de la escala temporal
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["tiempo", "ciclo_carbono"]

variables:
  tipo_impacto: uno_de(["ciclo_corto", "ciclo_largo"])

respuesta: "ciclo_largo"
tipo: mc

opciones_explicitas: ["ciclo_corto", "ciclo_largo"]

enunciado: "La agricultura preindustrial se basaba en ciclos biológicos rápidos. La industrialización, al extraer carbono de depósitos fósiles, introdujo carbono en el ___ ciclo del carbono."

explicacion: |
  El carbono en los combustibles fósiles forma parte del ciclo geológico (largo plazo). Al quemarlo, la humanidad está moviendo carbono de un reservorio de millones de años a la atmósfera de forma casi instantánea.
```