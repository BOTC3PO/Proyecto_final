/**
 * Tarjeta del sistema de diseño (prototipo `.card` + `.card-head/body/foot`).
 *
 * Composición simple: `<Card>` contenedor + `<CardHead>` / `<CardBody>` /
 * `<CardFoot>`. Consumen los tokens `--c-surface` / `--c-border`.
 */
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={
        "rounded-[var(--r-lg)] border border-[var(--c-border)] bg-[var(--c-surface)] " +
        "shadow-[var(--shadow-1)] " +
        className
      }
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHead({ className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={
        "flex items-center justify-between gap-2 border-b border-[var(--c-border)] " +
        "px-4 py-3 " +
        className
      }
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({ className = "", children, ...rest }: CardProps) {
  return (
    <div className={"p-4 " + className} {...rest}>
      {children}
    </div>
  );
}

export function CardFoot({ className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={
        "flex items-center justify-end gap-2 border-t border-[var(--c-border)] " +
        "px-4 py-3 " +
        className
      }
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
