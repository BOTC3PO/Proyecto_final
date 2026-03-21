export type AnguloInfo = { sen: string; cos: string; tan: string; senVal: number; cosVal: number; tanVal: number };

export const ANGULOS_NOTABLES: Record<number, AnguloInfo> = {
  0: { sen: "0", cos: "1", tan: "0", senVal: 0, cosVal: 1, tanVal: 0 },
  30: { sen: "1/2", cos: "√3/2", tan: "1/√3", senVal: 0.5, cosVal: Math.sqrt(3) / 2, tanVal: 1 / Math.sqrt(3) },
  45: { sen: "√2/2", cos: "√2/2", tan: "1", senVal: Math.sqrt(2) / 2, cosVal: Math.sqrt(2) / 2, tanVal: 1 },
  60: { sen: "√3/2", cos: "1/2", tan: "√3", senVal: Math.sqrt(3) / 2, cosVal: 0.5, tanVal: Math.sqrt(3) },
  90: { sen: "1", cos: "0", tan: "indefinido", senVal: 1, cosVal: 0, tanVal: Infinity },
};

export function gradosARadianes(grados: number): number {
  return (grados * Math.PI) / 180;
}

export function radianesAGrados(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function formatAngulo(grados: number): string {
  return `${grados}°`;
}
