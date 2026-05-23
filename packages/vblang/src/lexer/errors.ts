export class LexError extends Error {
  line: number;
  col: number;
  suggestion?: string;

  constructor(message: string, line: number, col: number, suggestion?: string) {
    super(message);
    this.name = "LexError";
    this.line = line;
    this.col = col;
    this.suggestion = suggestion;
  }
}
