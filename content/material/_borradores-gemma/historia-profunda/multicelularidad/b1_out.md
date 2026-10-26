### 1 — Concepto de multicelularidad
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["celulas", "organismos"]

respuesta: "cooperan y se especializan en funciones distintas"
tipo: completar
respuestas_validas: ["cooperan y se especializan en funciones distintas"]

enunciado: "La multicelularidad se define como la organización de organismos formados por múltiples células que ___ en vez de vivir cada una de forma independiente."

explicacion: |
  En los organismos multicelulares, las células no solo coexisten, sino que trabajan juntas y desarrollan funciones específicas para asegurar la supervivencia del individuo.
```

### 2 — Diferencia fundamental
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["comparacion", "unicelulares"]

opciones_explicitas: ["Las células funcionan de forma totalmente independiente", "Las células cooperan y se especializan", "Las células son siempre idénticas", "Las células no tienen ADN"]

respuesta: "Las células cooperan y se especializan"
tipo: mc

enunciado: "¿Cuál es la característica principal que distingue a un organismo multicelular de uno unicelular?"

explicacion: |
  A diferencia de los unicelulares, donde una sola célula realiza todas las funciones vitales, los multicelulares dividen el trabajo mediante la especialización celular.
```

### 3 — Niveles de organización
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["jerarquia", "organos"]

opciones_explicitas: ["Célula -> Tejido -> Órgano -> Sistema", "Célula -> Órgano -> Tejido -> Sistema", "Organismo -> Célula -> Tejido", "Tejido -> Célula -> Órgano"]

respuesta: ["Célula -> Tejido -> Órgano -> Sistema"]
tipo: ordenar

enunciado: "Ordena correctamente los niveles de organización biológica que surgen gracias a la especialización en organismos multicelulares complejos:"

explicacion: |
  La especialización permite que las células se agrupen en tejidos, los tejidos en órganos, y los órganos en sistemas de órganos.
```

### 4 — Cálculo de especialización (Escenario hipotético)
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["especializacion", "funciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["un grupo de 100 células que solo se dividen", "reproducción"],
    ["un grupo de 100 células con formas distintas", "especialización"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["reproducción", "especialización"]

enunciado: "Si en un organismo multicelular las células han adquirido formas y funciones diferentes para optimizar el trabajo del individuo, estamos ante un proceso de {escenario[idx][0]}."

explicacion: |
  La especialización es el pilar de la multicelularidad, permitiendo que el organismo sea más eficiente que una colonia de células independientes.
```

### 5 — Verdad o Falso: Independencia celular
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que en un organismo multicelular cada célula puede realizar todas las funciones vitales de manera totalmente independiente de las demás?"

explicacion: |
  Falso. Aunque algunas células pueden ser versátiles, la esencia de la multicelularidad es la interdependencia y la división de funciones.
```