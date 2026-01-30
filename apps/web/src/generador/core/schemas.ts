import { z } from "zod";

export const formatZodError = (error: z.ZodError): string =>
  error.issues
    .map((issue) => {
      const path = issue.path.length ? issue.path.join(".") : "params";
      return `${path}: ${issue.message}`;
    })
    .join("; ");

const finiteNumber = (label: string) =>
  z
    .number({
      invalid_type_error: `${label} debe ser un número.`,
    })
    .refine(Number.isFinite, {
      message: `${label} debe ser un número finito.`,
    });

export const GeneradorOpcionesSchema = z
  .object({
    rangoMin: finiteNumber("rangoMin").optional(),
    rangoMax: finiteNumber("rangoMax").optional(),
    unidades: z.enum(["cm", "m", "km"]).optional(),
    permitirNegativos: z.boolean().optional(),
    cantidadTerminos: finiteNumber("cantidadTerminos")
      .int("cantidadTerminos debe ser un entero.")
      .positive("cantidadTerminos debe ser mayor a 0.")
      .optional(),
  })
  .passthrough()
  .superRefine((value, ctx) => {
    if (
      value.rangoMin !== undefined &&
      value.rangoMax !== undefined &&
      value.rangoMin > value.rangoMax
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["rangoMin"],
        message: "rangoMin debe ser menor o igual a rangoMax.",
      });
    }

    if (value.permitirNegativos === false) {
      if (value.rangoMin !== undefined && value.rangoMin < 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["rangoMin"],
          message: "rangoMin no puede ser negativo cuando permitirNegativos es false.",
        });
      }
      if (value.rangoMax !== undefined && value.rangoMax < 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["rangoMax"],
          message: "rangoMax no puede ser negativo cuando permitirNegativos es false.",
        });
      }
    }
  });

export const GeneradorParametrosSchema = z
  .object({
    materia: z.enum(["matematica", "fisica", "economia", "contabilidad"], {
      required_error: "La materia es obligatoria.",
    }),
    categoria: z.string().min(1, "La categoría es obligatoria."),
    nivel: z.enum(["basico", "intermedio", "avanzado", "Legendario", "Divino"], {
      required_error: "El nivel es obligatorio.",
    }),
    opciones: GeneradorOpcionesSchema.optional(),
  })
  .strict();

export type GeneradorParametrosSchemaType = z.infer<typeof GeneradorParametrosSchema>;

export const parseGeneradorParametros = (
  params: unknown
): GeneradorParametrosSchemaType => {
  const result = GeneradorParametrosSchema.safeParse(params);
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
