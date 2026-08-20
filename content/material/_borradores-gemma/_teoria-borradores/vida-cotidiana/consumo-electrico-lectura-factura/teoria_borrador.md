# Vida Cotidiana — Consumo Eléctrico: Lectura de Factura (teoría)

> Tema del MAPA: `consumo_electrico_lectura_factura`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Entendé cómo medir y calcular el consumo eléctrico a partir de la lectura del medidor y la factura.

---

## 1. Unidad de medida: el kilovatio-hora

El **kWh**, o **kilovatio-hora**, es la unidad que se usa para medir la energía eléctrica consumida en las facturas. Representa la cantidad de energía que consume un aparato con una potencia de 1000 vatios durante una hora. Por ejemplo, si tenés una bombilla de 60 vatios encendida durante 10 horas, su consumo sería de **0,6 kWh** (60 vatios = 0,06 kW x 10 h). Esta medida es clave para entender cuánto cuesta el uso de los electrodomésticos en tu casa.

[IMAGEN: Comparación entre vatios y kilovatios-hora. Ejemplo: 1 kWh = 1000 W × 1 hora]

---

## 2. Cómo calcular el consumo de un aparato

Para saber cuántos kWh consume un electrodoméstico al día, tenés que multiplicar su potencia (en vatios) por las horas que se usa, y luego dividir entre 1000 para pasar a kilovatios-hora. Por ejemplo:

- Una plancha de **2000 W** usada **3 horas al día**:  
  $ \frac{2000}{1000} = 2 \text{ kW} \times 3 \text{ h} = 6 \text{ kWh/día} $.  

Este cálculo te ayuda a comparar cuánto consume cada dispositivo y planificar mejor el uso de energía. Si tenés dudas, siempre podés usar la fórmula:  
**Consumo (kWh) = Potencia (W) × Horas / 1000**.

---

## 3. Lectura del medidor y facturación

La **lectura actual** del medidor de luz se obtiene restando el valor anterior (el que figura en la factura del mes pasado) al valor que marca el medidor hoy. Por ejemplo, si antes tenías un consumo acumulado de 1200 kWh y ahora es 1350 kWh, el **consumo mensual** fue de **150 kWh**.

Es importante revisar esta diferencia con atención, porque errores en la lectura pueden generar facturas incorrectas. Si sospechás que hay un problema, contactá a tu proveedor de energía para verificar o realizar una lectura manual.

[IMAGEN: Medidor eléctrico mostrando lectura anterior y actual]

---

## 4. Componentes de la factura

La factura de electricidad incluye varios datos, pero el **consumo total** es el más relevante para calcular tu gasto mensual. Además de los kWh consumidos, hay otros cargos como:

- **Tarifa por servicio**: Un costo fijo para mantener el suministro activo.
- **Impuestos y recargos**: Aportes obligatorios según la normativa local.

El valor total a pagar se calcula multiplicando los kWh consumidos por el precio por kilovatio-hora (que varía según el proveedor). Por ejemplo, si el costo es de $120 por kWh y usaste 150 kWh, el gasto sería **$18.000**.

---

## N. Conexión con lo que sigue

Para entender cómo se calcula el costo exacto de tu consumo eléctrico, necesitás conocer el precio por kilovatio-hora, tema que se desarrolla en `../costo-electrico/`.