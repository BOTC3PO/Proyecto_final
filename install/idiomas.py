import json
import os
import ollama
from tqdm import tqdm

# Configuración del entorno
MODELO = "translategemma:12b"
ARCHIVO_ORIGEN = "es.json"
TAMANO_LOTE = 50  # Procesamos de a 50 palabras a la vez

# Idiomas objetivo
#IDIOMAS = {
#    "en": "English",
#    "pt": "Portuguese",
#    "fr": "French",
#    "it": "Italian",
#    "ja": "Japanese",
#    "eo": "Esperanto"
#    "pt-BR": "Brazilian Portuguese",
#    "pt-PT": "European Portuguese",
#    "es-AR": "Argentine Spanish",
#    "zh": "Simplified Chinese",
#    "de": "German",
#    "ko": "Korean",
#}

IDIOMAS = {
    "en": "English",
    "fr": "French",
    "it": "Italian",
    "ja": "Japanese",
    "eo": "Esperanto",
    "pt-BR": "Brazilian Portuguese",
    "pt-PT": "European Portuguese",
    "es-AR": "Argentine Spanish",
    "zh": "Simplified Chinese",
    "de": "German",
    "ko": "Korean",
}

def traducir_lote(lote_textos, idioma_destino):
    """
    Envía una lista de textos al modelo y devuelve una lista con las traducciones.
    """
    # Creamos un formato numerado para que el modelo no se confunda con el orden
    items_prompt = "\n".join([f"{i+1}. {texto}" for i, texto in enumerate(lote_textos)])
    
    prompt = (
        f"You are a professional software translator.\n"
        f"Context: The following list of items are navigation menu options in a web platform.\n"
        f"Translate each item strictly to {idioma_destino}.\n"
        f"Rules:\n"
        f"- Keep the exact same order and numbering (e.g. '1. Translation').\n"
        f"- Return ONLY the translated numbered list. No explanations, no introduction.\n"
        f"- Keep capitalization natural for menus.\n\n"
        f"List to translate:\n{items_prompt}"
    )
    
    try:
        response = ollama.generate(
            model=MODELO,
            prompt=prompt,
            options={
                "temperature": 0.0,
                "num_predict": 1000  # Permitimos una respuesta más larga para alojar el lote completo
            }
        )
        
        # Procesamos la respuesta para extraer las líneas traducidas
        lineas = response['response'].strip().split("\n")
        traducciones = []
        
        for linea in lineas:
            linea_limpia = linea.strip()
            if not linea_limpia:
                continue
            # Remover el número inicial (ej: "1. Panel" -> "Panel")
            if ". " in linea_limpia:
                partes = linea_limpia.split(". ", 1)
                if len(partes) > 1:
                    traducciones.append(partes[1].strip().strip('"').strip("'"))
        
        # Validación de seguridad: si el modelo omitió o fusionó líneas, rellenamos
        # para que no se desalinee el JSON
        while len(traducciones) < len(lote_textos):
            traducciones.append("[Error de traducción]")
        
        return traducciones[:len(lote_textos)]
        
    except Exception as e:
        print(f"\nError en lote: {e}")
        # Si falla el lote, devolvemos los textos originales para no romper el flujo
        return lote_textos

MARCADOR_ERROR = "[Error de traducción]"


def cargar_json_existente(ruta):
    """
    Si el archivo de salida ya existe, lo carga para no perder lo ya traducido.
    Si no existe o está corrupto, devuelve un diccionario vacío.
    """
    if not os.path.exists(ruta):
        return {}
    try:
        with open(ruta, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        print(f"  Aviso: no se pudo leer '{ruta}' ({e}), se recreará desde cero.")
        return {}


def procesar_traducciones():
    if not os.path.exists(ARCHIVO_ORIGEN):
        print(f"Error: No se encontró el archivo de origen '{ARCHIVO_ORIGEN}'.")
        return

    with open(ARCHIVO_ORIGEN, "r", encoding="utf-8") as f:
        datos_originales = json.load(f)

    for codigo_iso, nombre_idioma in IDIOMAS.items():
        archivo_salida = f"{codigo_iso}.json"
        json_traducido = cargar_json_existente(archivo_salida)

        # Detectamos qué claves faltan o quedaron marcadas con error en una corrida anterior
        claves_faltantes = [
            clave for clave in datos_originales.keys()
            if clave not in json_traducido or json_traducido[clave] == MARCADOR_ERROR
        ]

        if not claves_faltantes:
            print(f"\n✓ {nombre_idioma} ({codigo_iso}) ya está completo, no hay nada que traducir.")
            continue

        items_faltantes = [(clave, datos_originales[clave]) for clave in claves_faltantes]
        total_faltantes = len(items_faltantes)

        print(f"\n==========================================")
        print(f" Traduciendo al {nombre_idioma.upper()} ({codigo_iso}) — {total_faltantes} líneas pendientes de {len(datos_originales)}")
        print(f"==========================================")

        # Barra de progreso basada en el número de lotes
        num_lotes = (total_faltantes + TAMANO_LOTE - 1) // TAMANO_LOTE

        with tqdm(total=total_faltantes, desc="Progreso", unit=" palabra", bar_format="{l_bar}{bar:30}{r_bar}") as pbar:
            for i in range(0, total_faltantes, TAMANO_LOTE):
                # Extraemos el lote actual (solo lo que falta traducir)
                lote = items_faltantes[i:i + TAMANO_LOTE]
                claves_lote = [par[0] for par in lote]
                valores_lote = [par[1] for par in lote]

                pbar.set_description(f"Procesando lote {i//TAMANO_LOTE + 1}/{num_lotes}")

                # Traducimos el lote completo en una sola llamada
                valores_traducidos = traducir_lote(valores_lote, nombre_idioma)

                # Vamos completando/actualizando el JSON existente
                for k, v_traducido in zip(claves_lote, valores_traducidos):
                    json_traducido[k] = v_traducido

                pbar.update(len(lote))

            pbar.set_description("¡Idioma completado!")

        # Reordenamos el resultado siguiendo el orden de es.json (prolijo y determinístico)
        json_final = {
            clave: json_traducido.get(clave, datos_originales[clave])
            for clave in datos_originales.keys()
        }

        with open(archivo_salida, "w", encoding="utf-8") as f_out:
            json.dump(json_final, f_out, indent=2, ensure_ascii=False)

        print(f"✓ Guardado: {archivo_salida} ({total_faltantes} líneas traducidas/actualizadas)\n")

if __name__ == "__main__":
    procesar_traducciones()