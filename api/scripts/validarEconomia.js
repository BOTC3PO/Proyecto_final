const fs = require('fs');
const path = require('path');

const economiaDir = path.resolve(__dirname, '../src/generadores/economia');

function isNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function validarRangos(rangos, ruta, errores) {
  if (typeof rangos !== 'object' || rangos === null || Array.isArray(rangos)) {
    errores.push(`${ruta}: "rangos" debe ser un objeto.`);
    return;
  }

  for (const [variable, limite] of Object.entries(rangos)) {
    if (!Array.isArray(limite) || limite.length !== 2) {
      errores.push(`${ruta}: rango de "${variable}" debe ser [min,max].`);
      continue;
    }

    const [min, max] = limite;
    if (!isNumber(min) || !isNumber(max)) {
      errores.push(`${ruta}: rango de "${variable}" debe contener números.`);
      continue;
    }

    if (min > max) {
      errores.push(`${ruta}: rango de "${variable}" tiene min > max.`);
    }
  }
}

function validarEconomia() {
  const errores = [];
  const temas = fs
    .readdirSync(economiaDir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .sort();

  for (const slug of temas) {
    const temaDir = path.join(economiaDir, slug);
    const enunciadoPath = path.join(temaDir, 'enunciado.json');
    const limitsPath = path.join(temaDir, 'limits.json');

    try {
      const enunciado = JSON.parse(fs.readFileSync(enunciadoPath, 'utf8'));
      if (enunciado.schemaVersion === undefined) {
        errores.push(`${enunciadoPath}: falta "schemaVersion".`);
      }
      if (enunciado.slug !== slug) {
        errores.push(`${enunciadoPath}: "slug" inválido (${enunciado.slug}).`);
      }
    } catch (error) {
      errores.push(`${enunciadoPath}: JSON inválido (${error.message}).`);
    }

    if (!fs.existsSync(limitsPath)) {
      continue;
    }

    try {
      const limits = JSON.parse(fs.readFileSync(limitsPath, 'utf8'));
      if (Object.keys(limits).length === 0) {
        continue;
      }

      if (!limits.porDificultad || typeof limits.porDificultad !== 'object') {
        errores.push(`${limitsPath}: falta "porDificultad".`);
        continue;
      }

      for (const dificultad of ['basico', 'intermedio', 'avanzado']) {
        const bloque = limits.porDificultad[dificultad];
        if (!bloque || typeof bloque !== 'object') {
          errores.push(`${limitsPath}: falta bloque "${dificultad}".`);
          continue;
        }
        validarRangos(bloque.rangos, `${limitsPath}#${dificultad}`, errores);
      }
    } catch (error) {
      errores.push(`${limitsPath}: JSON inválido (${error.message}).`);
    }
  }

  if (errores.length > 0) {
    console.error('❌ Validación de Economía falló:');
    for (const error of errores) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`✅ Validación de Economía exitosa. Temas revisados: ${temas.length}`);
}

validarEconomia();
