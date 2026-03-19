import type { TableBlock } from "../types"
import { evaluate } from "../stats/tableFormulas"

interface Props {
  block: TableBlock
}

function getCellKey(rowIdx: number, colIdx: number): string {
  return `${String.fromCharCode(65 + colIdx)}${rowIdx + 1}`
}

export function TableBlockRenderer({ block }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        {block.title && (
          <caption className="mb-1 text-left font-semibold text-gray-700">
            {block.title}
          </caption>
        )}
        <thead className="bg-gray-100">
          <tr>
            {block.headers.map((header, i) => (
              <th
                key={i}
                className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-800"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, colIdx) => {
                const key = getCellKey(rowIdx, colIdx)
                const formula = block.formulas?.[key]

                if (formula) {
                  const result = evaluate(formula, block)
                  const isError = result === "#ERROR" || result === "#CICLO"
                  return (
                    <td
                      key={colIdx}
                      className="border border-gray-300 px-3 py-2 text-gray-700"
                    >
                      <span className={isError ? "text-red-500" : "font-medium text-indigo-700"}>
                        {result}
                      </span>
                    </td>
                  )
                }

                return (
                  <td
                    key={colIdx}
                    className="border border-gray-300 px-3 py-2 text-gray-700"
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
