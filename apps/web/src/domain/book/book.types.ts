export type BookSchemaV10 = "book.pages@1.0";
export type BookSchemaV11 = "book.pages@1.1";

export type Book = {
  schema: BookSchemaV10 | BookSchemaV11;
  metadata: {
    id: string;
    title: string;
    subtitle?: string;
    language?: string;
    difficulty?: number;

    // legacy
    paper_color?: string;
    text_color?: string;

    // v1.1+
    theme?: {
      paperColor?: string;
      textColor?: string;
      fontFamily?: string;
      baseFontSizePx?: number;
      lineHeight?: number;
    };
  };
  structure?: {
    pageNumbering?: { startAt?: number };
    index?: Array<{ id: string; title: string; pageStart: number; anchor: string }>;
  };
  assets?: any[];
  pages: Page[];
  notes?: any[];
  glossary?: any[];
  references?: any[];
};

export type Page = {
  id: string;
  number: number;
  title?: string;
  anchors?: Array<{ id: string; label?: string }>;
  content: Block[];
  notesLinked?: string[];
  meta?: { chapterId?: string; estimatedReadingSeconds?: number };
};

export type BlockStyle = {
  align?: "left" | "center" | "right" | "justify";
  spacingBeforePx?: number;
  spacingAfterPx?: number;
  indentFirstLinePx?: number;
};

export type TextStyle = {
  fontFamily?: string;
  fontSizePx?: number;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  superscript?: boolean;
  subscript?: boolean;
};

export type TextRun = { text: string; style?: TextStyle };

export type Block =
  | { type: "heading"; id: string; level: 1|2|3|4|5|6; text: string; blockStyle?: BlockStyle; textStyle?: TextStyle }
  | { type: "paragraph"; id: string; text?: string; runs?: TextRun[]; blockStyle?: BlockStyle }
  | { type: "image"; id: string; assetId: string; caption?: string; blockStyle?: BlockStyle }
  | { type: "divider"; id: string }
  | { type: "pageBreak"; id: string };
