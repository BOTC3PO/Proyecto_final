### 1 — Composición del núcleo de un isótopo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

variables:
  escenario: uno_de([["Carbono-14", 6, 8], ["Oxigeno-18", 8, 10], ["Uranio-238", 92, 146]])
  idx: uno_de([0, 1, 2])
  dato: escenario[idx]

enunciado: "Un científico analiza una muestra de {dato[0]}. Sabiendo que este isótopo tiene {dato[1]} protones, ¿cuántos neutrones posee en su núcleo?"

respuesta: dato[2]
tipo: input
tolerancia_abs: 0

explicacion: |
  El número de neutrones se calcula restando el número atómico (protones) de la masa atómica. 
  En el caso de {dato[0]}, tenemos {dato[1]} protones y {dato[2]} neutrones.
```

### 2 — Carga eléctrica neta
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electrones", "protones"]

variables:
  escenario: uno_de([["un átomo neutro de Helio", 2, 2], ["un ion de Litio con 3 protones y 2 electrones", 3, 2], ["un ion de Magnesio con 12 protones y 10 electrones", 12, 10]])
  idx: uno_de([0, 1, 2])
  dato: escenario[idx]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro"]

enunciado: "Considerando {dato[0]}, si el núcleo tiene {dato[0]} protones y {dato[1]} electrones, la carga eléctrica neta del átomo es ___."

explicacion: |
  La carga total depende de la diferencia entre protones (positivos) y electrones (negativos). 
  En el caso de {dato[0]}, la carga es ___ debido a la diferencia de cargas.
```

### 3 — Estabilidad nuclear y fuerza fuerte
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "estabilidad", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte la responsable de mantener unidos a los protones dentro del núcleo, venciendo la repulsión electromagnética entre ellos?"

explicacion: |
  Verdadero. La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones (protones y neutrones) y es mucho más intensa que la repulsión eléctrica a distancias nucleares.
```

### 4 — Identificación de partículas
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "nucleones", "neutrones"]

variables:
  escenario: uno_de([["un núcleo con 11 protones y 12 neutrones", "Sodio-23"], ["un núcleo con 1 proton y 0 neutrones", "Hidrógeno-1"], ["un núcleo con 1 proton y 1 neutrón", "Deuterio"]])
  idx: uno_de([0, 1, 2])
  dato: escenario[idx]

respuesta: dato[1]
tipo: completar
respuestas_validas: ["Sodio-23", "Hidrógeno-1", "Deuterio"]

enunciado: "Un detector de partículas identifica un núcleo con {escenario[idx][0]}. El nombre de este isótopo es ___."

explicacion: |
  El nombre se determina por el número de protones (número atómico) y la suma de protones más neutrones (masa atómica).
```

### 5 — Componentes del núcleo en orden de masa
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "masa", "ordenar"]

opciones_explicitas: ["Protones", "Neutrones", "Electrones"]
respuesta: ["Protones", "Neutrones", "Electrones"]
tipo: ordenar

enunciado: "Ordena las siguientes partículas según su masa aproximada, de mayor a menor (considerando que protones y neutrones tienen masas similares y el electrón es mucho más ligero):"

explicacion: |
  Los protones y neutrones tienen masas de aproximadamente 1 u, mientras que los electrones tienen una masa de aproximadamente 1/1836 u.
```