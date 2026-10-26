### 1 — El reclamo de soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["soberania", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["1833", "1982", "1776", "1810"]

enunciado: "El Reino Unido ocupó las Islas Malvinas de forma efectiva en el año ___."

explicacion: |
  La ocupación británica de las islas comenzó en 1833, interrumpiendo la presencia argentina en el archipiélago.
```

### 2 — Naturaleza del reclamo
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["derecho_internacional", "soberania"]

tipo: mc
opciones_explicitas: ["Territorial", "Económica", "Religiosa", "Cultural"]

enunciado: "El reclamo argentino sobre las Islas Malvinas es de carácter ___."

explicacion: |
  Argentina sostiene un reclamo de soberanía territorial basado en la herencia de los estados sucesores de España y la continuidad geográfica.
```

### 3 — Cronología de la disputa
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "conflictos"]

variables:
  escenario: uno_de(["A", "B"])
  datos: [["1833", "Ocupación británica", "Inicio de la disputa"], ["1982", "Conflicto bélico", "Guerra de Malvinas"]]

tipo: ordenar
opciones_explicitas: ["1833", "1982", "Actualidad"]

enunciado: "Ordene cronológicamente los hitos clave de la disputa por las islas:"

explicacion: |
  La cronología marca desde la ocupación británica en 1833, pasando por el conflicto armado en 1982, hasta el reclamo diplomático actual.
```

### 4 — El principio de integridad territorial
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["derecho_internacional", "onu"]

tipo: completar
respuestas_validas: ["integridad", "autodeterminación"]

enunciado: "Argentina sostiene que el principio de ___ territorial debe prevalecer sobre el principio de autodeterminación en el caso de las Malvinas."

explicacion: |
  Argentina argumenta que la población actual es una población implantada, por lo que el principio de autodeterminación no es aplicable, debiendo prevalecer la integridad territorial.
```

### 5 — El conflicto de 1982
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["guerra", "1982"]

variables:
  idx: uno_de([0, 1])
  eventos: [["desembarco", "inicio de la invasión"], ["cese", "fin de las hostilidades"]]

tipo: mc
opciones_explicitas: ["desembarco", "cese", "tratado", "armisticio"]

enunciado: "El conflicto bélico de 1982 se caracterizó por el ___ de las tropas argentinas en las islas."

explicacion: |
  El conflicto terminó con el cese de las hostilidades y la rendición de las fuerzas argentinas en junio de 1982.
```