### 1 — El proceso de descolonización
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["descolonizacion", "postguerra"]

tipo: mc
opciones_explicitas: ["El fortalecimiento de las potencias europeas", "El debilitamiento de las potencias europeas tras la Segunda Guerra Mundial", "La unión de todas las colonias bajo un mando único", "El apoyo de las colonias a los regímenes coloniales"]

enunciado: "Tras la Segunda Guerra Mundial, ¿cuál fue el principal factor que impulsó los procesos de independencia en África y Asia?"

explicacion: |
  La Segunda Guerra Mundial dejó a las potencias coloniales tradicionales (como Reino Unido y Francia) agotadas económica y militarmente, lo que facilitó los movimientos de liberación nacional.
```

### 2 — Concepto de soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

tipo: completar
opciones_explicitas: ["soberanía", "colonialismo", "imperialismo"]
respuestas_validas: ["soberanía"]

enunciado: "El proceso de descolonización permitió que las antiguas colonias recuperaran su ___________ política y económica."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin la interferencia de potencias extranjeras.
```

### 3 — El papel de la ONU
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["onu", "diplomacia"]

variables:
  caso_onu: uno_de([["La Carta de las Naciones Unidas", "promovió la autodeterminación"], ["El Pacto de Varsovia", "no tuvo relación con la descolonización"]])

tipo: mc
opciones_explicitas: ["La Carta de las Naciones Unidas", "El Pacto de Varsovia", "La Liga de las Naciones", "El Tratado de Versalles"]

enunciado: "En el contexto de la descolonización, {caso_onu[0]} fue fundamental porque la {caso_onu[1]}."

explicacion: |
  La ONU, a través de su principio de autodeterminación de los pueblos, dio un marco jurídico internacional que legitimó los movimientos de independencia.
```

### 4 — Consecuencias de la descolonización
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["geopolitica", "guerra_fria"]

variables:
  escenario: uno_de([["Asia y África", "se convirtieron en escenarios de disputa"], ["Europa", "se mantuvo estable"]])

tipo: mc
opciones_explicitas: ["Se unificaron en un solo bloque", "Se convirtieron en escenarios de disputa entre las superpotencias", "Eliminaron el capitalismo de sus territorios", "Se volvieron potencias nucleares de inmediato"]

enunciado: "Debido a la Guerra Fría, la descolonización en {escenario[0]} provocó que estos nuevos estados {escenario[1]} entre EE. UU. y la URSS."

explicacion: |
  Muchos nuevos estados independientes se convirtieron en "campos de batalla" por delegación (proxy wars) debido a la polarización de la Guerra Fría.
```

### 5 — Secuencia de procesos
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agotamiento de potencias europeas", "Surgimiento de movimientos de liberación", "Declaración de independencia de las colonias", "Consolidación de nuevos Estados-Nación"]

enunciado: "Ordena cronológicamente las etapas típicas de un proceso de descolonización:"

explicacion: |
  Primero ocurre el debilitamiento de la metrópoli, luego la organización de movimientos locales, la ruptura formal y finalmente la formación del nuevo Estado.
```