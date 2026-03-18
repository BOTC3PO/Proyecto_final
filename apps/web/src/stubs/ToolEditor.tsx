import type { VisualSpec } from "../../archive/visualizadores/types";

interface ToolEditorProps {
  spec: VisualSpec | undefined;
  onChange: (spec: VisualSpec | undefined) => void;
}

export default function ToolEditor(_props: ToolEditorProps) {
  return null;
}
