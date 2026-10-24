### 1 — Permisos de lectura en Linux
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos", "chmod"]

enunciado: "Un administrador desea que un archivo llamado 'datos.txt' sea legible por el dueño, pero que nadie más pueda leerlo, escribirlo ni ejecutarlo. ¿Cuál es la representación numérica de los permisos para este archivo?"

opciones_explicitas: ["644", "400", "755", "666"]
respuesta: "400"
tipo: "mc"

explicacion: |
  En sistemas Unix/Linux, los permisos se calculan sumando valores: Lectura (4), Escritura (2) y Ejecución (1).
  Para el dueño (Read): 4 + 0 + 0 = 4.
  Para el grupo (None): 0.
  Para otros (None): 0.
  Resultado: 400.
```

### 2 — Propiedad de archivos
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "ownership"]

enunciado: "Si un usuario intenta modificar un archivo que pertenece al 'root' y el usuario actual no tiene permisos de escritura, la operación será denegada."

respuesta: falso
tipo: "vf"

explicacion: |
  El sistema operativo verifica primero si el usuario es el dueño del archivo. Si no lo es, comprueba los permisos del grupo y, finalmente, los permisos para 'otros'. Si el permiso de escritura no está concedido en la categoría correspondiente, el acceso se deniega.
```

### 3 — El comando chmod
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["chmod", "simbolico"]

variables:
  comando_ejemplo: uno_de(["chmod u+x", "chmod g-w", "chmod o+r"])
  resultado_esperado: uno_de(["u+x", "g-w", "o+r"])

enunciado: "Si aplicamos el comando {comando_ejemplo} a un archivo, estamos modificando los permisos de forma simbólica."

pasos:
  - "Identificar el usuario (u=user, g=group, o=others)"
  - "Identificar la acción (+ para añadir, - para quitar)"
  - "Identificar el permiso (r, w, x)"

respuesta: "resultado_esperado"
tipo: "completar"
respuestas_validas: ["u+x", "g-w", "o+r"]

explicacion: |
  El modo simbólico permite modificar permisos específicos sin redefinir todos los valores. 
  En el caso de {comando_ejemplo}, estamos operando directamente sobre la categoría seleccionada.
```

### 4 — Proceso de creación de un script
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["secuencia", "ejecucion"]

enunciado: "Para que un script de Bash sea ejecutable por un usuario después de haberlo creado, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
respuesta: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
tipo: "ordenar"

explicacion: |
  Primero el archivo debe existir (creación), luego el sistema operativo debe permitir su ejecución (permisos) y finalmente se puede lanzar el proceso (ejecución).
```

### 5 — Cálculo de bits de permisos
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["binario", "permisos"]

variables:
  valor_permiso: uno_de([6, 7, 5])
  valor_binario: uno_de(["110", "111", "101"])

enunciado: "Un archivo tiene permisos de lectura y escritura para el dueño, pero ningún permiso para el grupo ni para otros. ¿Cuál es su valor decimal y su representación binaria?"

respuesta: "valor_permiso"
tipo: "completar"
respuestas_validas: ["6", "7", "5"]

explicacion: |
  Lectura (4) + Escritura (2) + Ejecución (0) = 6.
  En binario: 110.
  Si el valor fuera 7, sería 111 (rwx).
  Si el valor fuera 5, sería 101 (r-x).
```