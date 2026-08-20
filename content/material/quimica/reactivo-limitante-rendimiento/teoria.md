# Química — Reactivo limitante y rendimiento (teoria)

> Tema del MAPA: `QL`. Depende de `../estequiometria/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (reactivo limitante, reactivo en
exceso, rendimiento porcentual).

---

## 1. La analogía de la receta

Para armar 1 sándwich hacen falta 2 rodajas de pan y 1 de queso. Si
tenés 10 rodajas de pan y 3 de queso, ¿cuántos sándwiches podés armar?
No 5 (lo que daría el pan solo) — sólo **3**, porque el queso se
termina antes. El queso es el **reactivo limitante**: el que se agota
primero y determina cuánto producto se puede formar. El pan sobrante es
el **reactivo en exceso**.

## 2. Cómo encontrar el reactivo limitante

1. Convertir la cantidad de **cada** reactivo a **moles** (usando su
   masa molar, ver `../mol-masa-molar/`).
2. Dividir los moles de cada reactivo por su **coeficiente** en la
   ecuación balanceada (ver `../balanceo-ecuaciones/`).
3. El reactivo con el **cociente menor** es el limitante — es el que se
   termina primero.

**Ejemplo**: `2 H₂ + O₂ → 2 H₂O`, con 6 mol de H₂ y 2 mol de O₂.

```
H₂:  6 / 2 = 3
O₂:  2 / 1 = 2   ← menor → O₂ es el limitante
```

## 3. Cálculo con el reactivo limitante

Una vez identificado el limitante, **todos** los cálculos de producto
(o de cuánto se consume del otro reactivo) se hacen a partir de **sus**
moles — el reactivo en exceso no importa para esas cuentas, sólo importa
cuánto sobra al final.

## 4. Rendimiento porcentual

En la práctica, una reacción real casi nunca produce el 100% de lo que
la ecuación balanceada predice (se pierde producto, hay reacciones
secundarias, etc.):

- **Rendimiento teórico**: lo que da el cálculo estequiométrico ideal
  (a partir del reactivo limitante).
- **Rendimiento real**: lo que efectivamente se obtiene, medido en el
  laboratorio.

```
% rendimiento = (rendimiento real / rendimiento teórico) × 100
```

Un rendimiento del 100% es el máximo teórico — en la práctica siempre
es menor (nunca mayor a menos que haya un error de medición o impurezas
en el producto).
