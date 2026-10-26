### 1 — El contrato de vasallaje
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["feudalismo", "vasallaje"]

tipo: mc
opciones_explicitas: ["Protección y tierras a cambio de lealtad y servicio militar", "Pago de impuestos por el uso de herramientas de labranza", "Venta de productos agrícolas en los mercados locales", "Sometimiento total sin derecho a recibir tierras"]

enunciado: "En el sistema feudal, la relación de vasallaje entre un señor feudal y un vasallo se basaba principalmente en:"

explicacion: |
  El vasallaje era un contrato de carácter personal donde el señor otorgaba un beneficio (fief/feudo) y protección, mientras que el vasallo juraba auxilium (ayuda militar) y consilium (consejo político).
```

### 2 — La condición del siervo
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["siervos", "estamentos"]

tipo: completar
opciones_explicitas: ["siervo", "caballero", "rey", "vasallo"]
respuestas_validas: ["siervo"]

enunciado: "A diferencia de los vasallos, los ___ eran campesinos que estaban ligados a la tierra y debían trabajarla para el señor a cambio de protección y una parcela para su subsistencia."

explicacion: |
  Los siervos no eran esclavos (no podían ser vendidos individualmente), pero estaban legalmente vinculados a la gleba (la tierra) y no podían abandonar el feudo sin permiso.
```

### 3 — Jerarquía feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Rey", "Señor Feudal", "Vasallo", "Siervo"]

enunciado: "Ordena de mayor a menor jerarquía social y poder político en la estructura del feudalismo clásico:"

explicacion: |
  La estructura era piramidal: El Rey era la máxima autoridad (aunque con poder limitado), seguido por los Grandes Señores (Duques/Condes), luego los vasallos (caballeros) y finalmente la base trabajadora (siervos).
```

### 4 — El intercambio feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["economia", "intercambio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["lealtad y servicio militar", "protección y tierras"], ["trabajo agrícola", "alimento y refugio"]]

tipo: mc
opciones_explicitas: ["Servicio militar y lealtad", "Pago de oro y plata", "Intercambio de productos artesanales", "Voto de pobreza"]

enunciado: "Si un vasallo fallaba en cumplir su parte del contrato hacia su señor, el señor perdía la oportunidad de recibir {datos[escenario_idx][0]}."

explicacion: |
  El sistema se basaba en la reciprocidad. Si el vasallo no prestaba el servicio militar o el consejo, el vínculo de vasallaje se rompía.
```

### 5 — El concepto de feudo
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["feudo", "tierra"]

tipo: input
tolerancia_abs: 0

enunciado: "El conjunto de tierras, campesinos y derechos que un señor otorgaba a un vasallo como parte del contrato de vasallaje se denomina ___."

respuestas_validas: ["feudo"]

explicacion: |
  El feudo era la unidad económica y política básica del feudalismo, permitiendo al vasallo mantener a su familia y costear su equipo militar.
```