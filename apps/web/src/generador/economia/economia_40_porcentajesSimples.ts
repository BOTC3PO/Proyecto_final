// src/generators/economia/economia_40_porcentajesSimples.ts

import { Dificultad, GeneratorFn, makeQuizGenerator } from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type TipoCaso = "descuento" | "aumento" | "impuesto";

export const genPorcentajesSimples: GeneratorFn = makeQuizGenerator(
  40,
  "Cálculos con %: descuentos, aumentos, impuestos simples del hogar",
  [
    (_dificultad: Dificultad) => {
      const tipos: TipoCaso[] = ["descuento", "aumento", "impuesto"];
      const tipo = tipos[randInt(0, tipos.length - 1)];

      if (tipo === "descuento") {
        const precio = randInt(10, 80) * 1000;
        const porcentaje = randInt(5, 40); // 5%–40%

        const rebaja = Math.round(precio * (porcentaje / 100));
        const precioFinal = precio - rebaja;

        const opcionCorrecta =
          "$ " + precioFinal.toLocaleString("es-AR");

        const opcionesSet = new Set<string>();
        opcionesSet.add(opcionCorrecta);

        while (opcionesSet.size < 4) {
          const desvio = randInt(-25, 25);
          const candidato = Math.round(
            precioFinal * (1 + desvio / 100)
          );
          if (candidato > 0) {
            opcionesSet.add(
              "$ " + candidato.toLocaleString("es-AR")
            );
          }
        }

        const opciones = Array.from(opcionesSet);
        const indiceCorrecto = opciones.indexOf(opcionCorrecta);

        return {
          enunciado:
            `Un producto del hogar cuesta $ ${precio.toLocaleString(
              "es-AR"
            )} y tiene un descuento del ${porcentaje}%.\n` +
            `¿Cuál es el precio final a pagar? (Usar Precio final = Precio – Precio × %)`,
          opciones,
          indiceCorrecto,
          explicacion:
            "El descuento se calcula como Precio × porcentaje. Luego se resta del precio original: Precio final = Precio – Descuento.",
        };
      }

      if (tipo === "aumento") {
        const precio = randInt(10, 80) * 1000;
        const porcentaje = randInt(5, 40);

        const aumento = Math.round(precio * (porcentaje / 100));
        const precioFinal = precio + aumento;

        const opcionCorrecta =
          "$ " + precioFinal.toLocaleString("es-AR");

        const opcionesSet = new Set<string>();
        opcionesSet.add(opcionCorrecta);

        while (opcionesSet.size < 4) {
          const desvio = randInt(-25, 25);
          const candidato = Math.round(
            precioFinal * (1 + desvio / 100)
          );
          if (candidato > 0) {
            opcionesSet.add(
              "$ " + candidato.toLocaleString("es-AR")
            );
          }
        }

        const opciones = Array.from(opcionesSet);
        const indiceCorrecto = opciones.indexOf(opcionCorrecta);

        return {
          enunciado:
            `Un servicio del hogar cuesta $ ${precio.toLocaleString(
              "es-AR"
            )} y aumenta un ${porcentaje}%.\n` +
            `¿Cuál es el nuevo precio? (Usar Precio final = Precio + Precio × %)`,
          opciones,
          indiceCorrecto,
          explicacion:
            "En un aumento, el incremento se calcula como Precio × porcentaje. Luego se suma al precio original.",
        };
      }

      // impuesto simple
      const base = randInt(10, 80) * 1000;
      const porcentaje = randInt(5, 30);

      const impuesto = Math.round(base * (porcentaje / 100));
      const total = base + impuesto;

      const opcionCorrecta =
        "$ " + total.toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-25, 25);
        const candidato = Math.round(
          total * (1 + desvio / 100)
        );
        if (candidato > 0) {
          opcionesSet.add(
            "$ " + candidato.toLocaleString("es-AR")
          );
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una familia debe pagar un impuesto simple del ${porcentaje}% sobre un monto base de $ ${base.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el monto total a pagar (base + impuesto)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El impuesto se calcula como Base × porcentaje. El total a pagar es Base + Impuesto.",
      };
    },
  ]
);
