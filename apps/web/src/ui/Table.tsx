import { forwardRef, type CSSProperties, type TableHTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";

/* ── Table root ─────────────────────────────────────────────────────────── */

export type TableVariant = "default" | "compact";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  variant?: TableVariant;
  striped?: boolean;
  children?: ReactNode;
};

const VARIANT_CELL_PAD: Record<TableVariant, { padY: string; padX: string }> = {
  default: { padY: "var(--space-2)", padX: "var(--space-3)" },
  compact: { padY: "var(--space-1)", padX: "var(--space-2)" },
};

const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { variant = "default", striped = true, className, style, children, ...rest },
  ref,
) {
  const base: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--c-text)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--c-border)",
  };

  return (
    <table
      ref={ref}
      className={className}
      style={{ ...base, ...style }}
      data-table-variant={variant}
      data-table-striped={striped || undefined}
      {...rest}
    >
      {children}
    </table>
  );
});

export default Table;

/* ── Caption ────────────────────────────────────────────────────────────── */

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
  children?: ReactNode;
};

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  function TableCaption({ className, style, children, ...rest }, ref) {
    const base: CSSProperties = {
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "var(--space-2)",
      captionSide: "top",
    };
    return (
      <caption ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
        {children}
      </caption>
    );
  },
);

/* ── Thead ──────────────────────────────────────────────────────────────── */

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement> & {
  children?: ReactNode;
};

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  function TableHead({ className, style, children, ...rest }, ref) {
    const base: CSSProperties = {
      background: "var(--c-surface-3)",
    };
    return (
      <thead ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
        {children}
      </thead>
    );
  },
);

/* ── Tbody ──────────────────────────────────────────────────────────────── */

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children?: ReactNode;
};

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ className, style, children, ...rest }, ref) {
    return (
      <tbody ref={ref} className={className} style={style} {...rest}>
        {children}
      </tbody>
    );
  },
);

/* ── Tr ─────────────────────────────────────────────────────────────────── */

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  even?: boolean;
  children?: ReactNode;
};

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow({ even, className, style, children, ...rest }, ref) {
    const base: CSSProperties = {
      background: even ? "var(--c-surface-3)" : "var(--c-surface)",
    };
    return (
      <tr ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
        {children}
      </tr>
    );
  },
);

/* ── Th ─────────────────────────────────────────────────────────────────── */

export type TableThProps = ThHTMLAttributes<HTMLTableCellElement> & {
  variant?: TableVariant;
  children?: ReactNode;
};

export const TableTh = forwardRef<HTMLTableCellElement, TableThProps>(
  function TableTh({ variant = "default", className, style, children, ...rest }, ref) {
    const pad = VARIANT_CELL_PAD[variant];
    const base: CSSProperties = {
      textAlign: "left",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text)",
      paddingBlock: pad.padY,
      paddingInline: pad.padX,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--c-border)",
    };
    return (
      <th ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
        {children}
      </th>
    );
  },
);

/* ── Td ─────────────────────────────────────────────────────────────────── */

export type TableTdProps = TdHTMLAttributes<HTMLTableCellElement> & {
  variant?: TableVariant;
  children?: ReactNode;
};

export const TableTd = forwardRef<HTMLTableCellElement, TableTdProps>(
  function TableTd({ variant = "default", className, style, children, ...rest }, ref) {
    const pad = VARIANT_CELL_PAD[variant];
    const base: CSSProperties = {
      fontSize: "var(--text-sm)",
      color: "var(--c-text)",
      paddingBlock: pad.padY,
      paddingInline: pad.padX,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--c-border)",
    };
    return (
      <td ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
        {children}
      </td>
    );
  },
);
