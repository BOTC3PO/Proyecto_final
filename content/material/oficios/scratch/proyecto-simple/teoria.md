# Scratch — Proyecto simple (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../variables-scratch/` y los temas anteriores de Scratch (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/scratch/proyecto-simple/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Del plan al proyecto

Un **proyecto** nace de una **idea**. Antes de arrastrar bloques, se piensa:

1. **¿Qué quiero hacer?** (un juego de atrapar objetos, una animación, una historia, un quiz).
2. **¿Cómo se juega o se ve?** (qué hace el usuario, qué responde el programa).
3. **¿Qué necesito?** (personajes, fondos, sonidos, variables).
4. **¿Cómo sé que está terminado?** (cuándo se gana, cuándo se pierde).

Se empieza **chico**: una versión mínima que **funcione**, y se **agrega** de a poco.

---

## 2. Ejemplo: atrapa las manzanas

**Idea:** una canasta se mueve a izquierda y derecha; caen manzanas; hay que atraparlas. Se suman puntos; si se cae una, se pierde una vida; con 0 vidas, termina.

**Objetos:**

- **Canasta** (la controla el jugador).
- **Manzana** (cae desde arriba, en una posición al azar).
- **Fondo.**

**Variables:** `puntos`, `vidas`.

---

## 3. Paso a paso

**1. La canasta se mueve**

```
al hacer clic en la bandera verde
ir a x: (0) y: (-150)
por siempre
    si <¿tecla [flecha derecha] presionada?> entonces
        cambiar x por (10)
    si <¿tecla [flecha izquierda] presionada?> entonces
        cambiar x por (-10)
```

**2. La manzana cae**

```
al hacer clic en la bandera verde
fijar [puntos] a (0)
fijar [vidas] a (3)
por siempre
    ir a x: (número al azar entre (-200) y (200)) y: (170)
    repetir hasta que <<(posición y) < (-160)> o <¿tocando [Canasta]?>>
        cambiar y por (-5)
    si <¿tocando [Canasta]?> entonces
        sumar a [puntos] (1)
    si no
        sumar a [vidas] (-1)
```

El bucle termina cuando la manzana toca la canasta (se suma un punto) o llega al suelo (se pierde una vida).

**3. Fin del juego**

```
al hacer clic en la bandera verde
esperar hasta que <(vidas) = (0)>
decir [Fin del juego]
detener [todo]
```

---

## 4. Buenas prácticas

- **Nombres claros** para objetos, variables y mensajes (`Canasta`, `puntos`).
- **Un programa por función** (movimiento, caída, fin del juego) en lugar de uno enorme.
- **Probar** cada parte antes de pasar a la siguiente.
- **Comentarios** que expliquen las partes importantes.
- **Dificultad progresiva:** que la velocidad aumente de a poco.
- **Retroalimentación:** sonidos y mensajes cuando algo pasa (ganar, perder).
- **Reiniciar bien:** las variables se **inicializan** al empezar.

---

## 5. Mensajes entre objetos

Cuando un objeto necesita avisar a otro (por ejemplo, la manzana avisa "perdiste una vida" al fondo), se usan **`enviar mensaje`** y **`al recibir mensaje`**. Permiten **ordenar** el proyecto: cada objeto se ocupa de **lo suyo**.

---

## 6. Mejoras posibles

- **Niveles** (la velocidad aumenta cuando los puntos superan cierto valor).
- **Puntaje máximo** guardado en una variable.
- **Manzanas especiales** (más puntos o con efecto).
- **Pantalla de inicio** y de fin.
- **Música y sonidos.**

---

## 7. Compartir y documentar

- **Título e instrucciones** claras ("Mové la canasta con las flechas").
- **Notas y créditos:** quién hizo el proyecto y qué materiales de otros se usaron (sonidos, imágenes).
- Solo se publican **datos y contenidos propios o con permiso**; **no se comparte información personal** (nombre completo, escuela, dirección) en un proyecto público.
- **Recibir comentarios** y mejorar.
