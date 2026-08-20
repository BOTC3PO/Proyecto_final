### 1 — El contrato de alquiler
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "Juan firma un contrato de alquiler para vivir en un departamento. Si surge un conflicto sobre el pago de las expensas o la entrega de las llaves, la rama del derecho que regula esta relación es el derecho ___."

explicacion: |
  El derecho civil regula las relaciones privadas entre particulares, como los contratos de locación (alquiler), sucesiones y propiedad.
```

### 2 — El despido injustificado
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["despido sin indemnización", "reclamación de salarios"], ["renuncia sin aviso", "liquidación final"]]
  respuesta_correcta: ["laboral", "laboral"]

respuesta: datos[escenario_idx][1]
tipo: vf

enunciado: "Un empleado es despedido sin causa y sin recibir la indemnización que establece la ley. El trabajador decide demandar para reclamar sus derechos. ¿La rama del derecho que interviene en este caso es el derecho laboral? {datos[escenario_idx][0]}"

explicacion: |
  El derecho laboral regula el vínculo entre empleadores y empleados, protegiendo la parte más débil de la relación y regulando despidos y salarios.
```

### 3 — El robo en el supermercado
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: "penal"
tipo: completar
respuestas_validas: ["penal"]

enunciado: "Una persona entra a un supermercado y sustrae una mercadería sin pagar, siendo capturada por la seguridad. Dado que este acto constituye un delito contra la propiedad, la rama del derecho que debe intervenir es el derecho ___."

explicacion: |
  El derecho penal se encarga de definir las conductas que son consideradas delitos y de establecer las penas o sanciones correspondientes.
```

### 4 — El proceso de una sanción estatal
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "estado"]

respuesta: "administrativo"
tipo: mc
opciones_explicitas: ["civil", "administrativo", "comercial", "penal"]

enunciado: "El Estado decide multar a una empresa de transporte por incumplir las normas de seguridad vial. Para resolver la validez de esta multa, se debe recurrir al derecho ___."

explicacion: |
  El derecho administrativo regula la organización, funcionamiento y las facultades de la Administración Pública y sus relaciones con los ciudadanos.
```

### 5 — La secuencia de una compraventa mercantil
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "ordenar"]

respuesta: ["oferta", "aceptación", "entrega de mercadería", "pago"]
tipo: ordenar
opciones_explicitas: ["oferta", "aceptación", "entrega de mercadería", "pago"]

enunciado: "En una operación de compraventa entre dos empresas (acto de comercio), se deben seguir pasos lógicos para que la relación jurídica se consume. Ordena cronológicamente estos elementos:"

pasos:
  - "El vendedor propone el precio y el producto."
  - "El comprador manifiesta su conformidad con la propuesta."
  - "Se realiza la transferencia del bien."
  - "Se efectúa la contraprestación económica."

explicacion: |
  El derecho comercial regula los actos de comercio y las relaciones entre comerciantes; el proceso sigue una secuencia de oferta, aceptación y ejecución.
```