const escapePdfText = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

export const buildSimplePdf = (lines: string[]) => {
  const fontSize = 12;
  const lineHeight = 16;
  const startX = 72;
  const startY = 720;
  const safeLines = lines.map((line) => escapePdfText(line));
  const contentLines = [
    "BT",
    `/F1 ${fontSize} Tf`,
    `${startX} ${startY} Td`,
    `${lineHeight} TL`,
    ...safeLines.map((line, index) => (index === 0 ? `(${line}) Tj` : `T* (${line}) Tj`)),
    "ET"
  ];
  const content = contentLines.join("\n");
  const contentLength = Buffer.byteLength(content, "utf-8");

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> >>\nendobj\n`,
    `4 0 obj\n<< /Length ${contentLength} >>\nstream\n${content}\nendstream\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`
  ];

  const header = "%PDF-1.4\n";
  let body = "";
  let offset = Buffer.byteLength(header, "utf-8");
  const offsets = [0];
  objects.forEach((obj) => {
    offsets.push(offset);
    body += obj;
    offset += Buffer.byteLength(obj, "utf-8");
  });

  const xrefOffset = offset;
  const xrefEntries = offsets
    .map((entryOffset, index) =>
      index === 0
        ? "0000000000 65535 f \n"
        : `${entryOffset.toString().padStart(10, "0")} 00000 n \n`
    )
    .join("");

  const xref = `xref\n0 ${objects.length + 1}\n${xrefEntries}`;
  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(`${header}${body}${xref}${trailer}`, "utf-8");
};
