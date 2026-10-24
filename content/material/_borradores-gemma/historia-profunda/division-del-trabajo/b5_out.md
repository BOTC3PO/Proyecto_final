### 1 — El rol del artesano
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["especializacion", "prehistoria"]

variables:
  escenario: uno_de([["un grupo de nómadas que fabrica puntas de lanza de piedra", "cazador"], ["un grupo de nómadas que trabaja el cuero", "curtidor"], ["un grupo que fabrica vasijas de arcilla", "alfarero"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cazador", "curtidor", "alfarero", "agricultor"]

enunciado: "En las sociedades con división del trabajo incipiente, un individuo que se dedica exclusivamente a la fabricación de vasijas de arcilla es un: ___"

explicacion: |
  La especialización ocurre cuando un individuo se dedica a una tarea específica, permitiendo un aumento en la calidad y cantidad de la producción.
```

### 2 — La jerarquía de la producción
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["jerarquia", "especializacion"]

variables:
  rol_especialista: uno_de([["el agricultor", "productor"], ["el escriba", "registrador"], ["el guerrero", "protector"]])
  idx: uno_de([0,1,2])

respuesta: rol_especialista[idx][1]
tipo: completar
respuestas_validas: ["productor", "registrador", "protector"]

enunciado: "Si en una civilización antigua la función principal de un escriba es llevar el control de los granos, su rol especializado es el de ___."

explicacion: |
  El escriba es un ejemplo de especialización administrativa necesaria en sociedades complejas con excedentes.
```

### 3 — Secuencia de la producción textil
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["procesos", "especializacion"]

respuesta: ["pastoreo", "hilado", "tejido", "confección"]
tipo: ordenar
opciones_explicitas: ["pastoreo", "hilado", "tejido", "confección"]

enunciado: "Ordena los pasos de la cadena de producción textil en una sociedad con división del trabajo técnica:"

explicacion: |
  La división del trabajo permite que cada etapa de la producción sea realizada por un especialista distinto, optimizando el proceso.
```

### 4 — El excedente y el nuevo rol
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

variables:
  caso: uno_de([["el excedente de comida permite que alguien sea sacerdote", "religioso"], ["el excedente de comida permite que alguien sea soldado", "militar"], ["el excedente de comida permite que alguien sea metalúrgico", "herrero"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["religioso", "militar", "herrero", "comerciante"]

enunciado: "Cuando la agricultura genera excedentes, surge la especialización no productiva. Si el excedente se usa para sostener a un grupo dedicado al ritual, el rol es: ___"

explicacion: |
  El excedente agrícola es la condición necesaria para que existan profesiones que no producen alimento directamente.
```

### 5 — Identificación de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["oficios", "identificacion"]

variables:
  oficio_datos: [["trabaja el metal", "herrero"], ["domina el agua", "irrigador"], ["mide la tierra", "agrimensor"]]
  idx: uno_de([0,1,2])

respuesta: oficio_datos[idx][1]
tipo: completar
respuestas_validas: ["herrero", "irrigador", "agrimensor"]

enunciado: "Un individuo cuya tarea principal es medir los límites de las tierras para la distribución de impuestos es un ___."

explicacion: |
  La especialización técnica (como la agrimensura) es fundamental para la gestión de los recursos en estados organizados.
```