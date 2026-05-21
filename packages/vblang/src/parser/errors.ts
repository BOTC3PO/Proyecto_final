export class ParseError extends Error {
  line: number;
  col: number;
  suggestion?: string;

  constructor(message: string, line: number, col: number, suggestion?: string) {
    super(message);
    this.name = "ParseError";
    this.line = line;
    this.col = col;
    this.suggestion = suggestion;
  }
}
