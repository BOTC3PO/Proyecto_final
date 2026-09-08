# Biología — Ser vivo: características (cuestionario, 20 preguntas VBLang)

> Tema: `BA`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Significado de una característica vital

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas", "vida"]

variables:
  tabla: [["organizacion", "esta formado por una o mas celulas"], ["nutricion", "obtiene y procesa materia y energia"], ["reproduccion", "genera nuevos individuos de su misma especie"], ["homeostasis", "mantiene su ambiente interno estable"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["esta formado por una o mas celulas", "obtiene y procesa materia y energia", "genera nuevos individuos de su misma especie", "mantiene su ambiente interno estable"]

enunciado: "¿Qué significa la característica {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]} significa: {tabla[idx][1]}.
```

### 2 — La irritabilidad

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["irritabilidad", "estimulos"]

respuesta: verdadero
tipo: vf

enunciado: "La irritabilidad es la capacidad de reaccionar a cambios del ambiente, como luz, calor o contacto."

explicacion: |
  Correcto. Permite responder a estímulos para sobrevivir.
```

### 3 — El crecimiento

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El crecimiento significa aumentar de tamaño o cantidad de células a lo largo del tiempo."

explicacion: |
  Correcto, ocurre por aumento de tamaño celular o por división celular.
```

### 4 — Metabolismo energético

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["metabolismo", "respiracion"]

respuesta: "respiracion"
tipo: completar
respuestas_validas:
  - "respiracion"

enunciado: "Liberar la energía guardada en el alimento se llama ___."

explicacion: |
  La respiración celular transforma la energía de los nutrientes en energía utilizable.
```

### 5 — La adaptación

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "La adaptación es que la especie cambia con el tiempo para ajustarse mejor al ambiente."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

### 6 — La mula y la reproducción

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "mula"]

respuesta: verdadero
tipo: vf

enunciado: "La mula (cruza de caballo y burro) es considerada un ser vivo, aunque no pueda reproducirse."

explicacion: |
  Cumple el resto de las funciones vitales — la esterilidad no la excluye de ser un ser vivo.
```

### 7 — Excepciones a las características

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["definicion", "excepciones"]

respuesta: falso
tipo: vf

enunciado: "Si un individuo no cumple una característica general (como reproducirse), deja de ser considerado ser vivo automáticamente."

explicacion: |
  Falso. La lista describe el patrón general, no una regla sin excepción para cada individuo — hay híbridos estériles que igual son seres vivos.
```

### 8 — Reproducción de especies parentales

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la mula sea estéril, sus especies de origen (caballo y burro) sí pueden reproducirse."

explicacion: |
  Correcto. La esterilidad es del híbrido, no de las especies parentales.
```

### 9 — Organización celular de los virus

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus carecen de organización celular propia (no tienen membrana, citoplasma ni organelos)."

explicacion: |
  Correcto. Son agentes acelulares, no células.
```

### 10 — Metabolismo de los virus

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Los virus se alimentan por sí mismos, con procesos metabólicos independientes, como una célula normal."

explicacion: |
  Falso. No tienen metabolismo propio.
```

### 11 — Reproducción viral

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus sólo pueden reproducirse usando la maquinaria de una célula que infectan."

explicacion: |
  Correcto — ver ../microbiologia-virus-inmunitario/.
```

### 12 — Debate sobre la vida de los virus

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "debate"]

respuesta: verdadero
tipo: vf

enunciado: "Existe debate científico sobre si los virus deben clasificarse como seres vivos o no."

explicacion: |
  Correcto, por su falta de metabolismo y reproducción autónoma.
```

### 13 — Conjunto de características de la vida

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Para ser considerado ser vivo, un organismo debe cumplir un conjunto de características (nutrición, reproducción, respuesta a estímulos, etc.)."

explicacion: |
  Correcto, esa es la base de la definición biológica de vida.
```

### 14 — No característica de la vida

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta: "Tener siempre color verde"
tipo: mc
opciones_explicitas: ["Nutrición", "Reproducción", "Tener siempre color verde", "Crecimiento"]

enunciado: "¿Cuál de estas NO es una característica esencial de todos los seres vivos?"

explicacion: |
  El color verde no es universal (sólo aparece en organismos fotosintéticos con clorofila); nutrición, reproducción y crecimiento sí lo son.
```

### 15 — Ejemplos de características

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas, la célula y los ciclos de vida son ejemplos concretos que ilustran estas mismas características generales."

explicacion: |
  Correcto, son "instancias" de las características de todo ser vivo.
```

### 16 — Objetos no vivos

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: falso
tipo: vf

enunciado: "Un objeto inerte, como una piedra, puede realizar procesos de nutrición y reproducción."

explicacion: |
  Falso, esos procesos son exclusivos de los sistemas biológicos.
```

### 17 — Homeostasis y ambiente externo

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["homeostasis"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis permite que el ambiente interno de un ser vivo se mantenga relativamente estable, aunque el ambiente externo cambie mucho."

explicacion: |
  Correcto, por ejemplo mantener la temperatura corporal aunque haga frío o calor afuera.
```

### 18 — Fuego como caso límite

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos", "casos_limite"]

respuesta: falso
tipo: vf

enunciado: "El fuego, que crece, se reproduce (propaga) y consume 'alimento' (combustible), es considerado un ser vivo porque cumple algunas de estas características."

explicacion: |
  Falso. Aunque comparte alguna característica superficial, el fuego no tiene organización celular, no responde a estímulos de forma coordinada ni tiene material genético — cumplir una o dos características sueltas no alcanza para ser considerado ser vivo.
```

### 19 — Nivel de organización mínimo

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["organizacion", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Todo ser vivo conocido (con la excepción discutida de los virus) está formado por al menos una célula."

explicacion: |
  Correcto — desde organismos unicelulares (una sola célula) hasta pluricelulares (muchas), la célula es la unidad básica.
```

### 20 — Órdenes de las características

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Todas las características de los seres vivos tienen la misma importancia y ninguna depende de las otras."

explicacion: |
  Falso. Por ejemplo, sin nutrición (obtener energía) no hay crecimiento posible, y sin organización celular no hay ninguna de las demás funciones — hay dependencias entre ellas, no son totalmente independientes.
```
