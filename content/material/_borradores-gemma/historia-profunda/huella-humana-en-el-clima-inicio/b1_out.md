### 1 — El inicio de la era del carbón
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["revolucion_industrial", "co2", "carbón"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas: ["Revolución Industrial"]

enunciado: "El aumento sostenido de la concentración de CO2 en la atmósfera debido a la actividad humana comenzó con la ___."

explicacion: |
  La Revolución Industrial marcó el inicio del uso masivo de combustibles fósiles (principalmente carbón) para alimentar máquinas de vapor, alterando el ciclo natural del carbono.
```

### 2 — El combustible del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["combustibles_fosiles", "carbón"]

variables:
  escenario: uno_de([["carbón", "el motor de la primera fase"], ["petróleo", "el motor de la segunda fase"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["carbón", "petróleo", "gas natural", "biomasa"]

enunciado: "Durante la primera etapa de la Revolución Industrial, ¿cuál fue el principal combustible fósil que impulsó el aumento de la huella de carbono?"

explicacion: |
  {escenario[1]} fue el combustible que permitió la expansión del transporte y la industria química en etapas posteriores.
```

### 3 — Impacto en la atmósfera
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["co2", "gas_efecto_invernadero"]

respuesta: "aumentar"
tipo: completar
respuestas_validas: ["aumentar", "elevar", "incrementar"]

enunciado: "La quema masiva de combustibles fósiles desde el siglo XVIII tiene como efecto principal ___ la concentración de gases de efecto invernadero en la atmósfera."

explicacion: |
  El aumento de la concentración de CO2 atrapa más calor en la atmósfera, intensificando el efecto invernadero.
```

### 4 — Secuencia de combustibles
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["historia", "combustibles"]

opciones_explicitas: ["Carbón -> Petróleo -> Gas natural", "Petróleo -> Carbón -> Gas natural", "Gas natural -> Carbón -> Petróleo", "Carbón -> Gas natural -> Petróleo"]
respuesta: "Carbón -> Petróleo -> Gas natural"
tipo: ordenar

enunciado: "Ordena cronológicamente el predominio de los combustibles fósiles que han marcado la huella humana en la escala temporal de la industrialización:"

explicacion: |
  Primero el carbón (siglo XVIII-XIX), luego el petróleo (siglo XX) y finalmente el gas natural (finales del XX - actualidad).
```

### 5 — El efecto de la actividad humana
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["geologia", "antropoceno"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "nulo"]

enunciado: "Desde el inicio de la Revolución Industrial, la tendencia de la concentración de CO2 en la atmósfera ha sido de un cambio ___."

explicacion: |
  Se considera un cambio positivo porque la cantidad de CO2 en la atmósfera ha crecido de manera sostenida, no ha disminuido ni se ha mantenido constante.
```