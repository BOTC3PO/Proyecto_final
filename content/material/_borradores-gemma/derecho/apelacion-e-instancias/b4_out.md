### 1 — El recurso de apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recursos", "instancias", "proceso_civil"]

respuesta: "revisión"
tipo: completar
respuestas_validas: ["revisión", "revisar", "revisar la sentencia"]

enunciado: "A diferencia de la reposición, que busca que el mismo juez corrija su decisión, la apelación tiene como finalidad la ___ de la sentencia por un tribunal de jerarquía superior."

explicacion: |
  La apelación busca que un tribunal superior (segunda instancia) revise la resolución del juez de primera instancia para corregir posibles errores de hecho o de derecho.
```

### 2 — Diferencia entre Instancia y Recurso
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["instancia", "recurso", "jerarquia"]

variables:
  escenario: uno_de([["apelación", "recurso", "instancia"], ["reposición", "recurso", "instancia"], ["casación", "recurso", "instancia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["recurso", "instancia", "sentencia"]

enunciado: "En el sistema judicial, la apelación es un ___ que permite pasar de la primera a la segunda instancia."

explicacion: |
  La apelación es el medio o recurso procesal que habilita el ejercicio de la segunda instancia, permitiendo que un órgano superior revise lo decidido.
```

### 3 — Efectos de la apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspensivo", "devolutivo"]

respuesta: falso
tipo: vf

enunciado: "Si un recurso de apelación se concede con efecto suspensivo, la ejecución de la sentencia queda paralizada hasta que el tribunal superior resuelva."

explicacion: |
  Es verdadero. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso está pendiente, a diferencia del efecto devolutivo, que permite la ejecución pero deja la posibilidad de reparación posterior.
```

### 4 — Orden jerárquico de revisión
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

respuesta: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]
tipo: ordenar
opciones_explicitas: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]

enunciado: "Ordene los niveles de revisión jerárquica de una controversia jurídica, desde el tribunal que dicta la resolución inicial hasta el tribunal de máxima instancia."

explicacion: |
  El proceso sigue un orden ascendente: primero el juez de grado (1ra instancia), luego el tribunal de alzada (2da instancia) y finalmente la Corte Suprema o Tribunal de Casación.
```

### 5 — El rol de la segunda instancia
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["revisión", "hechos", "derecho"]

respuesta: "derecho"
tipo: completar
respuestas_validas: ["derecho", "norma"]

enunciado: "Mientras que la apelación en sede ordinaria permite revisar tanto los hechos como el ___ aplicado, la casación suele limitarse estrictamente a la correcta aplicación de la ley."

explicacion: |
  La apelación es un recurso amplio que permite la revisión de la valoración de la prueba (hechos) y de la aplicación de la norma (derecho), mientras que la casación es un recurso extraordinario de estricto derecho.
```