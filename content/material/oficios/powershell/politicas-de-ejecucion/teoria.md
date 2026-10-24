# PowerShell — Políticas de ejecución (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../funciones-powershell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/politicas-de-ejecucion/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una política de ejecución

La **política de ejecución** (*execution policy*) de PowerShell decide si se pueden ejecutar **scripts** (`.ps1`) y de qué origen. Es una protección contra **ejecutar un script por accidente**; **no es una barrera de seguridad** (un usuario puede saltearla con facilidad) y **no afecta** a los comandos que escribís en la consola. En Linux y macOS no se aplica (siempre `Unrestricted`).

---

## 2. Las políticas

| Política | Qué permite |
|:--|:--|
| `Restricted` | **ningún script** (solo comandos sueltos). Es la predeterminada en Windows de escritorio |
| `AllSigned` | solo scripts **firmados** por un editor confiable |
| `RemoteSigned` | scripts locales sí; los **descargados de internet** solo si están firmados |
| `Unrestricted` | todo, pero **pregunta** antes de ejecutar los descargados |
| `Bypass` | no bloquea nada ni avisa |
| `Undefined` | sin política en ese ámbito |

`RemoteSigned` es la política habitual para trabajar. En Windows Server, la predeterminada es `RemoteSigned`.

---

## 3. Verla y cambiarla

```powershell
Get-ExecutionPolicy               # la política efectiva
Get-ExecutionPolicy -List         # la de cada ámbito
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Ámbitos** (de mayor a menor prioridad): `MachinePolicy` (directiva de grupo), `UserPolicy`, `Process` (solo esa ventana), `CurrentUser` y `LocalMachine` (toda la máquina; requiere administrador). Cambiar solo `CurrentUser` es lo más prudente, **sin necesidad de ser administrador**.

Para ejecutar **una sola vez** sin cambiar nada: `powershell -ExecutionPolicy Bypass -File script.ps1` o `Set-ExecutionPolicy Bypass -Scope Process`.

---

## 4. El error típico

```
.\script.ps1 : File ... cannot be loaded because running scripts is disabled on this system.
```

La causa es la política `Restricted`. Se resuelve con `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. Pero **antes** hay que **leer** el script: la política existe para que no ejecutes cosas sin querer.

---

## 5. Origen del archivo y firma

Un archivo descargado de internet lleva una marca ("Zone.Identifier"). Con `RemoteSigned` queda bloqueado hasta que se **desbloquea**: `Unblock-File .\script.ps1`, **después** de revisarlo. Un script **firmado** (`Set-AuthenticodeSignature`) permite verificar quién lo escribió y que no se modificó.
