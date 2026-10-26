/**
 * editor/Section.tsx — composite de shell del editor, sobre el primitivo `Card`.
 *
 * Una sección del editor: encabezado + cuerpo, con la jerarquía visual del
 * rediseño (Card `raised` + título semántico). No es un átomo (vive en
 * `editor/`, no en `ui/`); es la unidad estructural del shell.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Card } from "../ui";

export type SectionProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title: ReactNode;
  /** Texto secundario bajo el título (descripción corta). */
  description?: ReactNode;
  children?: ReactNode;
};

const titleStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-base)",
  fontWeight: "var(--fw-semibold)",
  lineHeight: "var(--lh-tight)",
  color: "var(--c-text)",
};

const descStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-xs)",
  lineHeight: "var(--lh-normal)",
  color: "var(--c-hint)",
};

const bodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
};

export default function Section({
  title,
  description,
  children,
  className,
  style,
  ...rest
}: SectionProps) {
  const shell: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-2)",
  };
  return (
    <Card
      variant="raised"
      padding="md"
      className={className}
      style={{ ...shell, ...style }}
      {...rest}
    >
      <h3 style={titleStyle}>{title}</h3>
      {description ? <p style={descStyle}>{description}</p> : null}
      <div style={bodyStyle}>{children}</div>
    </Card>
  );
}
