// Shared primitive types used across all db-*.ts modules

export type Doc = Record<string, unknown>;
export type Param = string | number | null;
export type WhereClause = { sql: string; params: Param[] };
