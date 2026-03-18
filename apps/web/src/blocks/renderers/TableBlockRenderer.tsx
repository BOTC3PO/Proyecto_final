import type { TableBlock } from "../types"

interface Props {
  block: TableBlock
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
              {row.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  className="border border-gray-300 px-3 py-2 text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
