### 1 — Identidad y herencia cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  escenario: uno_de([["Un individuo que rechaza todas las tradiciones de su familia para buscar una identidad propia.", "autonomia"], ["Un individuo que adopta ciegamente los valores de su grupo sin cuestionarlos.", "conformismo"], ["Un individuo que integra elementos de su cultura con experiencias nuevas.", "integracion"]])
  idx: uno_de([0, 1, 2])

enunciado: "Según el concepto de socialización, el caso donde el sujeto adopta sin cuestionamiento los valores de su grupo se define como: {escenario[idx][0]}"

opciones_explicitas: ["autonomia", "conformismo", "integracion"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  La identidad se construye en la tensión entre la herencia cultural (lo dado) y la subjetivación (lo que el sujeto hace con eso). El conformismo representa la dependencia absoluta de la herencia sin proceso de individuación.
```

### 2 — El proceso de subjetivación
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["subjetivacion", "herencia", "otro"]

variables:
  caso: uno_de([["La cultura nos proporciona el lenguaje y las normas para pensar.", true], ["El individuo es una isla totalmente independiente de la cultura.", false]])
  idx: uno_de([0, 1])

enunciado: "Considerando que la cultura es una herencia que nos constituye, ¿es correcto afirmar que el individuo es una entidad totalmente independiente de la estructura cultural? {caso[idx][0]}"

respuesta: caso[idx][1]
tipo: vf

explicacion: |
  No es posible una subjetivación sin el "Otro". La cultura es la matriz que nos permite, paradójicamente, ser sujetos; nos da las herramientas (lenguaje, símbolos) para construir nuestra propia identidad.
```

### 3 — Componentes de la identidad cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["herencia", "socializacion", "elementos"]

variables:
  orden_correcta: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]

enunciado: "Ordene los siguientes elementos de la herencia cultural desde el más estructural (base del pensamiento) hasta el más específico (práctica cotidiana):"

opciones_explicitas: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
respuesta: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
tipo: ordenar

explicacion: |
  El lenguaje es la base que estructura la psique; las normas y valores guían la conducta social, y las costumbres son las manifestaciones externas y específicas de esa herencia.
```

### 4 — El papel del lenguaje en la formación del Yo
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["lenguaje", "simbolico", "herencia"]

variables:
  situacion: uno_de([["El lenguaje permite la distinción entre el 'yo' y el 'otro'.", "permite"], ["El lenguaje es solo un código de comunicación sin impacto en la identidad.", "no permite"]])
  idx: uno_de([0, 1])

enunciado: "En el proceso de formación de la persona, el lenguaje como herencia cultural es aquello que ___ la distinción entre el sujeto y el mundo externo."

respuestas_validas: ["permite", "no permite"]
respuesta: situacion[idx][1]
tipo: completar

explicacion: |
  El lenguaje es la herramienta simbólica que nos permite nombrar nuestra propia existencia y diferenciar nuestra interioridad de la alteridad.
```

### 5 — Dependencia vs. Autonomía
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["identidad", "cultura", "subjetividad"]

variables:
  escenario_final: uno_de([["La cultura es una limitación que impide la libertad.", "limitacion"], ["La cultura es la condición de posibilidad de la subjetividad.", "condicion"]])
  idx: uno_de([0, 1])

enunciado: "Desde una perspectiva psicológica, la relación entre cultura y sujeto se comprende mejor si entendemos que la cultura es la: {escenario_final[idx][0]}"

opciones_explicitas: ["limitacion", "condicion"]
respuesta: escenario_final[idx][1]
tipo: mc

explicacion: |
  Aunque la cultura impone marcos de referencia, también es la "condición de posibilidad": sin la herencia cultural (símbolos, lenguaje, otros), no habría un sujeto con quien procesar la realidad.
```