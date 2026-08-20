### 1 — Unificación Italiana
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["italia", "risorgimento", "siglo_xix"]

variables:
  figura_clave: uno_de([["Cavour", "Primer Ministro"], ["Garibaldi", "Líder de los Mil"]])

enunciado: "Durante el proceso de unificación italiana, el liderazgo político y diplomático fue fundamental. El personaje que actuó como el cerebro diplomático del Reino de Piamonte-Cerdeña fue {figura_clave[0]}."

respuesta: figura_clave[0]
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Vittorio Emanuele II"]

explicacion: |
  Camillo Benso, conde de Cavour, fue el arquitecto de la unificación italiana a través de la diplomacia y la modernización del Reino de Piamonte-Cerdeña.
```

### 2 — Unificación Alemana
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["alemania", "bismarck", "prusia"]

variables:
  conferencia: uno_de([["Congreso de Viena", "1815"], ["Tratado de Frankfurt", "1871"]])

enunciado: "La unificación alemana se consolidó tras la victoria en la Guerra Franco-Prusiana, lo que llevó a la firma del {conferencia[0]} en el año {conferencia[1]}."

respuesta: conferencia[0]
tipo: mc
opciones_explicitas: ["Congreso de Viena", "Tratado de Frankfurt", "Tratado de Versalles", "Paz de Westfalia"]

explicacion: |
  El Tratado de Frankfurt puso fin a la guerra contra Francia y consolidó la creación del Segundo Imperio Alemán bajo el liderazgo de Prusia.
```

### 3 — Concepto de Estado-Nación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

respuesta: "soberanía"
tipo: completar
respuestas_validas: ["soberanía", "soberania"]

enunciado: "Un elemento esencial de la formación de los Estados nacionales en el siglo XIX fue la consolidación de la ___ territorial y política sobre un conjunto de poblaciones con una identidad común."

explicacion: |
  La soberanía es la autoridad suprema que ejerce el Estado sobre su territorio y población, permitiendo la independencia frente a otras potencias.
```

### 4 — Factores de Unificación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["causas", "economia", "nacionalismo"]

variables:
  factor_economico: uno_de([["Zollverein", "Unión Aduanera"], ["Fábrica", "Industrialización"]])

enunciado: "Un factor determinante para la cohesión de los estados alemanes antes de la unificación política fue la creación de la {factor_economico[0]}, que facilitó el libre comercio entre los estados miembros."

respuesta: factor_economico[0]
tipo: mc
opciones_explicitas: ["Zollverein", "Confederación Germánica", "Unión Europea", "Liga Hanseática"]

explicacion: |
  El Zollverein fue una unión aduanera que eliminó las barreras comerciales entre los estados alemanes, fortaleciendo el poder de Prusia y preparando el terreno para la unificación política.
```

### 5 — Etapas de la Unificación Alemana
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["procesos", "guerras"]

respuesta: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]
tipo: ordenar
opciones_explicitas: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]

enunciado: "El proceso de unificación liderado por Otto von Bismarck se desarrolló a través de una serie de conflictos bélicos estratégicos. Ordene cronológicamente estas guerras:"

explicacion: |
  Bismarck utilizó la política de 'sangre y hierro' a través de tres guerras clave: contra Dinamarca (1864), contra Austria (1866) y contra Francia (1870-1871).
```