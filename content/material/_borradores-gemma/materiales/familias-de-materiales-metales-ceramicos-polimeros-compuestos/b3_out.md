### 1 — Naturaleza de los enlaces en cerámicos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["enlaces", "ceramicos"]

respuesta: "iónico o covalente"
tipo: completar
respuestas_validas: ["iónico o covalente", "iónico", "covalente"]

enunciado: "A diferencia de los metales, cuyos átomos se mantienen unidos por un mar de electrones, los materiales cerámicos se caracterizan por tener enlaces de tipo ___."

explicacion: |
  Los cerámicos presentan enlaces iónicos (transferencia de electrones) o covalentes (compartición de electrones), lo que les otorga su alta temperatura de fusión y fragilidad.
```

### 2 — Conductividad en polímeros
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["polimeros", "conductividad"]

variables:
  es_conductor: falso

respuesta: es_conductor
tipo: vf

enunciado: "Un error común es pensar que todos los polímeros son conductores debido a su flexibilidad; sin embargo, la mayoría de los polímeros son aislantes eléctricos."

explicacion: |
  Los polímeros son generalmente aislantes debido a que sus electrones están localizados en enlaces covalentes, a diferencia de los metales.
```

### 3 — Composición de materiales compuestos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["compuestos", "matriz"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fibra de carbono", "resina epoxi"], ["grafitos", "polietileno"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]", "una mezcla homogénea de ambos"]

enunciado: "En un material compuesto, la fase que rodea y mantiene unidas a las partículas o fibras se denomina ___."

explicacion: |
  En el ejemplo de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}, la segunda componente actúa como la matriz que da forma al compuesto.
```

### 4 — Propiedades mecánicas: Metales vs Cerámicos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

respuesta: ["Ductilidad", "Fragilidad"]
tipo: ordenar

opciones_explicitas: ["Ductilidad", "Fragilidad"]

enunciado: "Ordena las siguientes propiedades mecánicas de mayor a menor capacidad de deformación plástica antes de la rotura, comparando un metal típico frente a una cerámica típica."

explicacion: |
  Los metales son generalmente dúctiles (pueden deformarse), mientras que los cerámicos son frágiles (se rompen sin deformación previa significativa).
```

### 5 — El concepto de aleación
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["metales", "aleaciones"]

respuesta: verdadero

tipo: vf

enunciado: "Una aleación metálica es un material compuesto donde la fase dispersa es otro metal."

explicacion: |
  Falso. Una aleación es una solución sólida (o mezcla) donde los elementos están distribuidos a nivel atómico, no es un material compuesto con fases claramente separadas como en los compuestos reforzados.
```