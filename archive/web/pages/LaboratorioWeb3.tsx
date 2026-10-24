import React from "react";
import { useMemo, useState } from "react";

const formatNumber = (value: number, decimals = 4) =>
  Number.isFinite(value)
    ? value.toLocaleString("es-AR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals,
      })
    : "0";

const clampNumber = (value: number, min = 0) =>
  Number.isFinite(value) ? Math.max(value, min) : min;

function ExplicacionCard({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  const [abierto, setAbierto] = React.useState(false);
  return (
    <div className="mb-4 rounded-2xl border border-slate-700 bg-slate-900/80">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:text-white transition-colors"
      >
        <span>💡 {titulo}</span>
        <span className="text-slate-500 text-xs">
          {abierto ? "▲ cerrar" : "▼ ver explicación"}
        </span>
      </button>
      {abierto && (
        <div className="border-t border-slate-700 px-4 py-3 text-sm text-slate-400 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}

function PresetButton({
  label,
  onClick,
  color = "slate",
}: {
  label: string;
  onClick: () => void;
  color?: "slate" | "amber" | "rose" | "emerald";
}) {
  const colors = {
    slate: "border-slate-600 text-slate-300 hover:bg-slate-700",
    amber: "border-amber-500/50 text-amber-300 hover:bg-amber-500/10",
    rose: "border-rose-500/50 text-rose-300 hover:bg-rose-500/10",
    emerald: "border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${colors[color]}`}
    >
      {label}
    </button>
  );
}

export default function LaboratorioWeb3() {
  const [reserveA, setReserveA] = useState(12000);
  const [reserveB, setReserveB] = useState(450);
  const [amountIn, setAmountIn] = useState(0.5);
  const [feeRate, setFeeRate] = useState(0.3);

  const [totalLpSupply, setTotalLpSupply] = useState(1000);
  const [userLpBalance, setUserLpBalance] = useState(150);
  const [addAmountA, setAddAmountA] = useState(200);
  const [addAmountB, setAddAmountB] = useState(7.5);
  const [removeLpAmount, setRemoveLpAmount] = useState(25);

  const [priceMultiplier, setPriceMultiplier] = useState(1.4);
  const [holdingDays, setHoldingDays] = useState(30);

  const [btcPrice, setBtcPrice] = useState(64200);
  const [btcHistory, setBtcHistory] = useState<number[]>([64200, 61150, 68400]);
  const [sandboxEnabled, setSandboxEnabled] = useState(true);
  const [usdBalance, setUsdBalance] = useState(5000);
  const [btcBalance, setBtcBalance] = useState(0.08);
  const [tradeAmount, setTradeAmount] = useState(0.01);

  const feeMultiplier = 1 - clampNumber(feeRate, 0) / 100;

  const swapOutput = useMemo(() => {
    const input = clampNumber(amountIn, 0);
    const amountAfterFee = input * feeMultiplier;
    const newReserveA = reserveA + amountAfterFee;
    const output = (reserveB * amountAfterFee) / newReserveA;
    return {
      amountAfterFee,
      output: clampNumber(output, 0),
      priceImpact:
        reserveB && reserveA
          ? clampNumber((input / reserveA) * 100, 0)
          : 0,
      newReserveA,
      newReserveB: reserveB - output,
    };
  }, [amountIn, feeMultiplier, reserveA, reserveB]);

  const addLiquidityPreview = useMemo(() => {
    if (!reserveA || !reserveB || !totalLpSupply) {
      return { minted: 0, share: 0 };
    }
    const shareA = addAmountA / reserveA;
    const shareB = addAmountB / reserveB;
    const share = Math.min(shareA, shareB);
    const minted = share * totalLpSupply;
    return { minted: clampNumber(minted, 0), share: share * 100 };
  }, [addAmountA, addAmountB, reserveA, reserveB, totalLpSupply]);

  const removeLiquidityPreview = useMemo(() => {
    if (!totalLpSupply) {
      return { amountA: 0, amountB: 0 };
    }
    const share = removeLpAmount / totalLpSupply;
    return {
      amountA: clampNumber(reserveA * share, 0),
      amountB: clampNumber(reserveB * share, 0),
    };
  }, [removeLpAmount, reserveA, reserveB, totalLpSupply]);

  const impermanentLoss = useMemo(() => {
    const multiplier = clampNumber(priceMultiplier, 0.01);
    const ratio = (2 * Math.sqrt(multiplier)) / (1 + multiplier);
    return (ratio - 1) * 100;
  }, [priceMultiplier]);

  const pnlUsd = useMemo(() => {
    const portfolioValue = usdBalance + btcBalance * btcPrice;
    const baseline = 5000 + 0.08 * 64200;
    return portfolioValue - baseline;
  }, [usdBalance, btcBalance, btcPrice]);

  const handleAddLiquidity = () => {
    const minted = addLiquidityPreview.minted;
    if (!minted) return;
    setReserveA((prev) => prev + addAmountA);
    setReserveB((prev) => prev + addAmountB);
    setTotalLpSupply((prev) => prev + minted);
    setUserLpBalance((prev) => prev + minted);
  };

  const handleRemoveLiquidity = () => {
    if (!removeLpAmount || removeLpAmount > userLpBalance) return;
    setReserveA((prev) => prev - removeLiquidityPreview.amountA);
    setReserveB((prev) => prev - removeLiquidityPreview.amountB);
    setTotalLpSupply((prev) => prev - removeLpAmount);
    setUserLpBalance((prev) => prev - removeLpAmount);
  };

  const simulateVolatility = () => {
    const swing = 0.12 + Math.random() * 0.25;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const newPrice = clampNumber(btcPrice * (1 + direction * swing), 5000);
    setBtcPrice(newPrice);
    setBtcHistory((prev) => [newPrice, ...prev].slice(0, 6));
  };

  const handleBuy = () => {
    const cost = tradeAmount * btcPrice;
    if (cost > usdBalance) return;
    setUsdBalance((prev) => prev - cost);
    setBtcBalance((prev) => prev + tradeAmount);
  };

  const handleSell = () => {
    if (tradeAmount > btcBalance) return;
    setUsdBalance((prev) => prev + tradeAmount * btcPrice);
    setBtcBalance((prev) => prev - tradeAmount);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Sprint 9 · Laboratorio Web3 (desbloqueable avanzado)
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              DeFi de alto riesgo con sandbox seguro
            </h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Simulá swaps AMM, liquidez y trading con BTC hiper volátil. Todo es
              educativo y sin pérdidas reales.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4">
            <p className="text-sm text-emerald-200">Modo sandbox</p>
            <p className="text-lg font-semibold">
              {sandboxEnabled ? "Activado" : "Desactivado"}
            </p>
            <label className="mt-2 flex items-center gap-2 text-xs text-emerald-100">
              <input
                type="checkbox"
                checked={sandboxEnabled}
                onChange={(event) => setSandboxEnabled(event.target.checked)}
                className="h-4 w-4 rounded border-emerald-400 text-emerald-500"
              />
              Sin pérdidas reales ni conexión a dinero real.
            </label>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Swap AMM (x·y = k)</h2>
            <p className="mt-1 text-sm text-slate-400">
              Simulá un intercambio entre tokens de la piscina. Se aplica fee
              configurable.
            </p>
            <div className="mt-4">
            <ExplicacionCard titulo="¿Qué es un AMM?">
              <p>
                Un <strong className="text-slate-200">AMM (Automated Market Maker)</strong>{" "}
                es un protocolo que fija el precio usando la fórmula{" "}
                <strong className="text-slate-200">x · y = k</strong>, donde x e y
                son las reservas de cada token y k es una constante.
              </p>
              <p>
                Cuando alguien compra Token B, agrega Token A al pool y
                retira Token B. Las reservas cambian pero k se mantiene,
                lo que hace que el precio suba automáticamente.
              </p>
              <p>
                El <strong className="text-slate-200">impacto de precio</strong>{" "}
                es mayor cuando el monto a swapear es grande en relación
                a las reservas — probalo con los presets de abajo.
              </p>
            </ExplicacionCard>
            {/* Presets de casos */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-slate-500 self-center">Casos:</span>
              <PresetButton
                label="Pool chico (alta slippage)"
                color="amber"
                onClick={() => {
                  setReserveA(1000);
                  setReserveB(10);
                  setAmountIn(100);
                }}
              />
              <PresetButton
                label="Pool grande (baja slippage)"
                color="emerald"
                onClick={() => {
                  setReserveA(1000000);
                  setReserveB(50000);
                  setAmountIn(100);
                }}
              />
              <PresetButton
                label="Swap extremo (90% reserva)"
                color="rose"
                onClick={() => {
                  setReserveA(1000);
                  setReserveB(1000);
                  setAmountIn(900);
                }}
              />
              <PresetButton
                label="Fee alto (5%)"
                color="amber"
                onClick={() => {
                  setFeeRate(5);
                  setAmountIn(100);
                }}
              />
            </div>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    Reserva Token A
                    <input
                      type="number"
                      value={reserveA}
                      onChange={(event) =>
                        setReserveA(clampNumber(Number(event.target.value), 0))
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                  <label className="text-sm">
                    Reserva Token B
                    <input
                      type="number"
                      value={reserveB}
                      onChange={(event) =>
                        setReserveB(clampNumber(Number(event.target.value), 0))
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    Monto a swapear (A → B)
                    <input
                      type="number"
                      value={amountIn}
                      onChange={(event) =>
                        setAmountIn(clampNumber(Number(event.target.value), 0))
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                  <label className="text-sm">
                    Fee (%)
                    <input
                      type="number"
                      value={feeRate}
                      onChange={(event) =>
                        setFeeRate(clampNumber(Number(event.target.value), 0))
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Salida estimada</span>
                  <span className="text-lg font-semibold text-emerald-300">
                    {formatNumber(swapOutput.output)} Token B
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Fee aplicado</span>
                  <span>{formatNumber(swapOutput.amountAfterFee)} Token A</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Impacto precio aprox.</span>
                  <span>{formatNumber(swapOutput.priceImpact, 2)}%</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Nueva reserva A</span>
                  <span>{formatNumber(swapOutput.newReserveA)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Nueva reserva B</span>
                  <span>{formatNumber(swapOutput.newReserveB)}</span>
                </div>
                {swapOutput.priceImpact > 10 && (
                  <div className="mt-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
                    ⚠ Impacto de precio alto ({formatNumber(swapOutput.priceImpact, 2)}%).
                    En un mercado real esto significaría una pérdida significativa
                    respecto al precio spot.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Liquidez + LP tokens</h2>
            <p className="mt-1 text-sm text-slate-400">
              Agregá o retirás liquidez para ver cuántos LP tokens recibís y tu
              participación en el pool.
            </p>
            <div className="mt-4">
            <ExplicacionCard titulo="¿Qué son los LP tokens?">
              <p>
                Cuando agregás liquidez a un pool recibís{" "}
                <strong className="text-slate-200">LP tokens</strong>{" "}
                (Liquidity Provider) que representan tu porcentaje
                del pool. Si el pool tiene 1000 LP tokens y recibís
                100, tenés el 10% de todas las reservas.
              </p>
              <p>
                Al retirar liquidez, quemás tus LP tokens y recibís
                tu porción de las reservas actuales — que pueden ser
                diferentes a las que depositaste por los swaps que
                ocurrieron mientras tanto.
              </p>
              <p className="text-amber-300">
                ⚠ Caso límite: si retirás más LP tokens de los que
                tenés, la transacción falla. Si el pool está casi
                vacío, recibís muy pocos tokens de vuelta.
              </p>
            </ExplicacionCard>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-slate-500 self-center">Casos:</span>
              <PresetButton
                label="Agregar liquidez desbalanceada"
                color="amber"
                onClick={() => {
                  setAddAmountA(1000);
                  setAddAmountB(1);
                }}
              />
              <PresetButton
                label="Retirar todo (pool vacío)"
                color="rose"
                onClick={() => {
                  setRemoveLpAmount(totalLpSupply);
                }}
              />
              <PresetButton
                label="Retirar más de lo que tenés"
                color="rose"
                onClick={() => {
                  setRemoveLpAmount(userLpBalance * 2);
                }}
              />
              <PresetButton
                label="Posición pequeña (1%)"
                color="slate"
                onClick={() => {
                  setAddAmountA(reserveA * 0.01);
                  setAddAmountB(reserveB * 0.01);
                }}
              />
            </div>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-semibold text-slate-200">
                  Agregar liquidez
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    Token A
                    <input
                      type="number"
                      value={addAmountA}
                      onChange={(event) =>
                        setAddAmountA(
                          clampNumber(Number(event.target.value), 0)
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                  <label className="text-sm">
                    Token B
                    <input
                      type="number"
                      value={addAmountB}
                      onChange={(event) =>
                        setAddAmountB(
                          clampNumber(Number(event.target.value), 0)
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span>
                    LP estimados: {formatNumber(addLiquidityPreview.minted)}
                  </span>
                  <span>
                    Participación: {formatNumber(addLiquidityPreview.share, 2)}%
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddLiquidity}
                  className="mt-4 w-full rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  Agregar liquidez
                </button>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-semibold text-slate-200">
                  Retirar liquidez
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    LP tokens a retirar
                    <input
                      type="number"
                      value={removeLpAmount}
                      onChange={(event) =>
                        setRemoveLpAmount(
                          clampNumber(Number(event.target.value), 0)
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                    />
                  </label>
                  <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-300">
                    <span>Saldo LP usuario</span>
                    <span className="text-base font-semibold text-white">
                      {formatNumber(userLpBalance)}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span>
                    Token A: {formatNumber(removeLiquidityPreview.amountA)}
                  </span>
                  <span>
                    Token B: {formatNumber(removeLiquidityPreview.amountB)}
                  </span>
                </div>
                {removeLpAmount > userLpBalance && (
                  <div className="mt-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
                    ⚠ Intentás retirar {formatNumber(removeLpAmount)} LP
                    pero solo tenés {formatNumber(userLpBalance)}.
                    En un protocolo real esta transacción fallaría.
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleRemoveLiquidity}
                  className="mt-4 w-full rounded-xl bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-600"
                >
                  Retirar liquidez
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Pérdida impermanente</h2>
            <p className="mt-1 text-sm text-slate-400">
              Ajustá cuánto cambió el precio del activo para ver la pérdida
              respecto a holdear.
            </p>
            <div className="mt-4">
            <ExplicacionCard titulo="¿Qué es la pérdida impermanente?">
              <p>
                La <strong className="text-slate-200">pérdida impermanente</strong>{" "}
                ocurre cuando el precio de uno de los tokens en el pool
                cambia respecto al momento en que depositaste liquidez.
                El AMM rebalancea las reservas automáticamente, lo que
                hace que termines con menos del token que subió de precio.
              </p>
              <p>
                Se llama "impermanente" porque si el precio vuelve al
                valor original, la pérdida desaparece. Pero si retirás
                mientras el precio es diferente, la pérdida se realiza.
              </p>
              <p>
                La fórmula es:{" "}
                <strong className="text-slate-200">
                  IL = 2√r/(1+r) − 1
                </strong>{" "}
                donde r es el multiplicador de precio.
              </p>
            </ExplicacionCard>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs text-slate-500 self-center">Casos:</span>
              <PresetButton
                label="Sin cambio (r=1)"
                color="emerald"
                onClick={() => setPriceMultiplier(1)}
              />
              <PresetButton
                label="Doble precio (r=2)"
                color="amber"
                onClick={() => setPriceMultiplier(2)}
              />
              <PresetButton
                label="10x precio"
                color="rose"
                onClick={() => setPriceMultiplier(10)}
              />
              <PresetButton
                label="Precio cae a 0.1x"
                color="rose"
                onClick={() => setPriceMultiplier(0.1)}
              />
              <PresetButton
                label="Precio casi cero (límite)"
                color="rose"
                onClick={() => setPriceMultiplier(0.01)}
              />
            </div>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="text-sm">
                  Multiplicador de precio
                  <input
                    type="number"
                    value={priceMultiplier}
                    onChange={(event) =>
                      setPriceMultiplier(
                        clampNumber(Number(event.target.value), 0.01)
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                  />
                </label>
                <label className="text-sm">
                  Días de exposición
                  <input
                    type="number"
                    value={holdingDays}
                    onChange={(event) =>
                      setHoldingDays(clampNumber(Number(event.target.value), 1))
                    }
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                  />
                </label>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Resultado estimado
                </p>
                <p className="mt-2 text-3xl font-semibold text-rose-300">
                  {formatNumber(impermanentLoss, 2)}%
                </p>
                <p className={`mt-1 text-sm font-medium ${
                  impermanentLoss < -10
                    ? "text-rose-400"
                    : impermanentLoss < -2
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}>
                  {impermanentLoss >= -0.1
                    ? "✓ Sin pérdida significativa"
                    : impermanentLoss >= -2
                    ? "⚠ Pérdida leve — las fees pueden compensarla"
                    : impermanentLoss >= -10
                    ? "⚠ Pérdida moderada — evaluá si conviene holdear"
                    : "⛔ Pérdida severa — en este escenario holdear hubiera sido mejor"}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Cuanto más tiempo ({holdingDays} días) y volatilidad, más
                  relevante se vuelve la pérdida impermanente.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Sandbox seguro para niños</h2>
            <p className="mt-1 text-sm text-slate-400">
              Todas las acciones usan balances ficticios, sin conexión a billeteras
              reales.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-emerald-300">●</span>
                No se guarda información financiera real.
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-300">●</span>
                Simulación con reglas de seguridad y límites de exposición.
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-300">●</span>
                Alertas de riesgo visuales para niños y tutores.
              </li>
            </ul>
            <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-100">
              Activar este modo bloquea cualquier conexión con dinero real y
              reinicia los balances al finalizar la sesión.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Trading simulado BTC (alta volatilidad)
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Simulá operaciones con alta volatilidad y revisá tu P&amp;L.
              </p>
              <div className="mt-3">
              <ExplicacionCard titulo="¿Cómo funciona el trading de cripto?">
                <p>
                  Comprás BTC cuando creés que el precio va a subir y
                  vendés cuando creés que bajó. Tu ganancia o pérdida
                  se calcula como:{" "}
                  <strong className="text-slate-200">
                    P&L = (precio actual − precio promedio de compra) × cantidad BTC
                  </strong>
                </p>
                <p>
                  La <strong className="text-slate-200">alta volatilidad</strong>{" "}
                  significa que el precio puede cambiar mucho en poco tiempo.
                  Usá el botón "Simular volatilidad" para ver cómo afecta
                  tu posición un movimiento brusco del mercado.
                </p>
                <p className="text-amber-300">
                  ⚠ En este sandbox no podés perder más de tu balance.
                  En mercados reales con apalancamiento, sí podés.
                </p>
              </ExplicacionCard>
              </div>
            </div>
            <button
              type="button"
              onClick={simulateVolatility}
              className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Simular volatilidad
            </button>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Precio BTC
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">
                ${formatNumber(btcPrice, 2)}
              </p>
              <div className="mt-3 text-xs text-slate-400">
                Historial reciente:
                <div className="mt-2 flex flex-wrap gap-2">
                  {btcHistory.map((price, index) => (
                    <span
                      key={`${price}-${index}`}
                      className="rounded-full border border-slate-700 px-3 py-1"
                    >
                      ${formatNumber(price, 2)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Balances sandbox
              </p>
              <div className="mt-3 grid gap-2 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>USD</span>
                  <span>${formatNumber(usdBalance, 2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>BTC</span>
                  <span>{formatNumber(btcBalance, 4)}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-300">
                  <span>P&amp;L simulado</span>
                  <span>
                    {pnlUsd >= 0 ? "+" : ""}${formatNumber(pnlUsd, 2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Operar BTC
              </p>
              <label className="mt-3 text-sm">
                Monto BTC
                <input
                  type="number"
                  value={tradeAmount}
                  onChange={(event) =>
                    setTradeAmount(clampNumber(Number(event.target.value), 0))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white"
                />
              </label>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={handleBuy}
                  className="flex-1 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  Comprar
                </button>
                <button
                  type="button"
                  onClick={handleSell}
                  className="flex-1 rounded-xl bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
                >
                  Vender
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Operaciones limitadas por saldo, pensadas para experimentar sin
                riesgo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
