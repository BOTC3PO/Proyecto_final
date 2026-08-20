### 1 — El rol de Rosas en la Confederación
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["rosas", "federales", "confederacion"]

variables:
  rol_rosas: uno_de(["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"])

respuesta: "gobernador de Buenos Aires"
tipo: mc
opciones_explicitas: ["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"]

enunciado: "Durante el período de la Confederación Argentina, Juan Manuel de Rosas ejercía el poder real como {rol_rosas}, manteniendo el control sobre la Aduana y los recursos de la provincia."

explicacion: |
  Aunque Rosas era el líder de facto de la Confederación, formalmente su cargo era el de Gobernador de la Provincia de Buenos Aires, cargo desde el cual ejercía una hegemonía política y económica sobre las demás provincias.
```

### 2 — El sistema de relaciones políticas
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["relaciones", "federales", "unitarios"]

respuesta: "unitarios"
tipo: completar
respuestas_validas: ["unitarios"]

enunciado: "En el contexto de las guerras civiles, el proyecto político de Rosas se alineaba con el bando ___ , enfrentándose a las aspiraciones de centralismo de los opositores."

explicacion: |
  Rosas era el máximo exponente del federalismo, lo que lo colocaba en constante conflicto con los unitarios, quienes buscaban un gobierno centralizado en Buenos Aires.
```

### 3 — La base del poder económico
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana", "rosas"]

respuesta: "Aduana"
tipo: mc
opciones_explicitas: ["Aduana", "Aduana de Montevideo", "Impuesto de libre navegación"]

enunciado: "El control de la ___ de Buenos Aires fue la principal herramienta de Rosas para asegurar la supremacía de su provincia sobre la Confederación."

explicacion: |
  La recaudación de los derechos de importación y exportación de la Aduana de Buenos Aires permitía a la provincia controlar la economía nacional y limitar la autonomía de las provincias del interior.
```

### 4 — Secuencia de la hegemonía rosista
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["orden", "etapas", "rosas"]

variables:
  etapa_idx: uno_de([0,1,2])

respuesta: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]
tipo: ordenar
opciones_explicitas: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del poder de Rosas en la Confederación:"

pasos:
  - "El ascenso de los caudillos locales en el interior."
  - "La concesión de facultades extraordinarias por parte de la legislatura."
  - "El establecimiento de un orden basado en la sumisión de las provincias."

explicacion: |
  El proceso comenzó con el ascenso de caudillos, seguido por la necesidad de orden que llevó a la delegación de poderes en Rosas, culminando en un régimen de hegemonía federal.
```

### 5 — El símbolo de la lealtad
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["simbolos", "color", "rosas"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["rojo", "azul", "blanco"]

enunciado: "Para demostrar la lealtad al régimen de Rosas, se utilizaba el color ___ en la vestimenta y en las insignias."

explicacion: |
  El uso de la 'divisa punzó' (una cinta roja) era obligatorio para demostrar la adhesión al bando federal de Rosas y marcar la distinción frente a los unitarios.
```