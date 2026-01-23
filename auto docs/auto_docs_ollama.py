import os
import json
from pathlib import Path
from datetime import datetime
import subprocess

class AutoDocumentador:
    def __init__(self):
        self.modelo_1 = "deepseek-coder-v2:16b"
        self.modelo_2 = "qwen2.5-coder:14b"
        self.carpeta_docs = Path("auto_docs")
        self.carpeta_docs.mkdir(exist_ok=True)
        
        # Extensiones soportadas
        self.extensiones = {
            '.ts': 'TypeScript',
            '.tsx': 'TypeScript React (TSX)',
            '.js': 'JavaScript',
            '.jsx': 'JavaScript React (JSX)',
            '.ps1': 'PowerShell',
            '.bat': 'Batch Script',
            '.json': 'JSON'
        }
        
    def llamar_ollama(self, prompt, modelo):
        """Realiza una llamada a Ollama y retorna la respuesta"""
        print(f"  → Generando con {modelo}...")
        
        try:
            resultado = subprocess.run(
                ["ollama", "run", modelo, prompt],
                capture_output=True,
                text=True,
                timeout=180
            )
            return resultado.stdout.strip()
        except subprocess.TimeoutExpired:
            print(f"  ✗ Timeout con {modelo}")
            return f"Error: Timeout al generar documentación con {modelo}"
        except Exception as e:
            print(f"  ✗ Error con {modelo}: {e}")
            return f"Error: {str(e)}"
    
    def crear_prompt_documentacion(self, codigo, nombre_archivo, lenguaje):
        """Crea un prompt detallado para la documentación"""
        prompt = f"""Eres un experto documentador de código. Analiza el siguiente archivo y crea una documentación EXTREMADAMENTE DETALLADA en español.

ARCHIVO: {nombre_archivo}
LENGUAJE: {lenguaje}

CÓDIGO A DOCUMENTAR:
```{lenguaje.lower()}
{codigo}
```

GENERA UNA DOCUMENTACIÓN MUY DETALLADA QUE INCLUYA:

1. **RESUMEN GENERAL**
   - ¿Qué hace este archivo?
   - ¿Cuál es su propósito principal en el proyecto?

2. **ANÁLISIS DETALLADO DEL CÓDIGO**
   - Explicación línea por línea de las partes más importantes
   - ¿Qué hace cada función/clase/componente?
   - ¿Cómo se relacionan entre sí?

3. **DEPENDENCIAS Y LIBRERÍAS**
   - Lista TODAS las importaciones (import/require)
   - Explica para qué se usa cada librería
   - Menciona paquetes externos y su propósito

4. **COMPONENTES Y FUNCIONES**
   - Nombre de cada función/componente
   - Parámetros que reciben
   - Qué retornan
   - Lógica interna explicada

5. **CONFIGURACIONES Y CONSTANTES**
   - Variables de configuración
   - Constantes definidas
   - Valores importantes

6. **PATRONES Y ARQUITECTURA**
   - Patrones de diseño utilizados
   - Estructura del código
   - Buenas/malas prácticas observadas

7. **TECNOLOGÍAS ESPECÍFICAS**
   - Para TypeScript/TSX: tipos, interfaces, genéricos
   - Para React: hooks, props, estado, ciclo de vida
   - Para JSON: estructura, esquemas, propósito de cada campo
   - Para PowerShell/Batch: comandos, variables de entorno, flujo

8. **FLUJO DE EJECUCIÓN**
   - ¿Cómo se ejecuta el código?
   - ¿Cuál es el flujo principal?
   - ¿Qué sucede paso a paso?

9. **INTEGRACIONES Y CONEXIONES**
   - ¿Se conecta con APIs?
   - ¿Interactúa con otros archivos?
   - ¿Usa servicios externos?

10. **CASOS DE USO Y EJEMPLOS**
    - ¿Cómo se usaría este código?
    - Escenarios de uso
    - Ejemplos prácticos

11. **POSIBLES MEJORAS**
    - Sugerencias de optimización
    - Aspectos a mejorar
    - Vulnerabilidades o problemas potenciales

IMPORTANTE: 
- Sé MUY DETALLADO, explica TODO lo que veas
- Usa lenguaje claro y técnico
- Incluye ejemplos cuando sea posible
- Si ves algo complejo, explícalo con más profundidad
- No omitas ningún detalle, por pequeño que sea
- Escribe en formato Markdown con buena estructura
- Usa encabezados, listas, código embebido, etc.

ESCRIBE LA DOCUMENTACIÓN COMPLETA EN ESPAÑOL:"""
        
        return prompt
    
    def documentar_archivo(self, ruta_archivo):
        """Documenta un archivo con ambos modelos"""
        ruta = Path(ruta_archivo)
        
        if not ruta.exists():
            print(f"✗ Error: El archivo {ruta_archivo} no existe")
            return None
        
        extension = ruta.suffix.lower()
        if extension not in self.extensiones:
            print(f"✗ Extensión {extension} no soportada")
            return None
        
        lenguaje = self.extensiones[extension]
        
        print(f"\n{'='*70}")
        print(f"📄 ARCHIVO: {ruta.name}")
        print(f"📝 TIPO: {lenguaje}")
        print(f"{'='*70}\n")
        
        # Leer el código
        try:
            with open(ruta, 'r', encoding='utf-8') as f:
                codigo = f.read()
        except UnicodeDecodeError:
            # Intentar con otra codificación
            with open(ruta, 'r', encoding='latin-1') as f:
                codigo = f.read()
        
        lineas = len(codigo.split('\n'))
        caracteres = len(codigo)
        
        print(f"📊 Estadísticas:")
        print(f"   - Líneas: {lineas}")
        print(f"   - Caracteres: {caracteres}")
        print()
        
        # Crear prompt
        prompt = self.crear_prompt_documentacion(codigo, ruta.name, lenguaje)
        
        # Generar documentación con MODELO 1
        print(f"🤖 MODELO 1: {self.modelo_1}")
        doc_modelo_1 = self.llamar_ollama(prompt, self.modelo_1)
        print(f"   ✓ Generado ({len(doc_modelo_1)} caracteres)\n")
        
        # Generar documentación con MODELO 2
        print(f"🤖 MODELO 2: {self.modelo_2}")
        doc_modelo_2 = self.llamar_ollama(prompt, self.modelo_2)
        print(f"   ✓ Generado ({len(doc_modelo_2)} caracteres)\n")
        
        # Crear nombres de archivo para las documentaciones
        nombre_base = ruta.stem
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Guardar documentación del MODELO 1
        archivo_doc_1 = self.carpeta_docs / f"{nombre_base}_deepseek.md"
        with open(archivo_doc_1, 'w', encoding='utf-8') as f:
            f.write(f"# Documentación: {ruta.name}\n\n")
            f.write(f"**Generado por:** {self.modelo_1}\n\n")
            f.write(f"**Fecha:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            f.write(f"**Archivo original:** `{ruta.name}`\n\n")
            f.write(f"**Tipo:** {lenguaje}\n\n")
            f.write(f"**Líneas de código:** {lineas}\n\n")
            f.write("---\n\n")
            f.write(doc_modelo_1)
        
        print(f"💾 Guardado: {archivo_doc_1}")
        
        # Guardar documentación del MODELO 2
        archivo_doc_2 = self.carpeta_docs / f"{nombre_base}_qwen.md"
        with open(archivo_doc_2, 'w', encoding='utf-8') as f:
            f.write(f"# Documentación: {ruta.name}\n\n")
            f.write(f"**Generado por:** {self.modelo_2}\n\n")
            f.write(f"**Fecha:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            f.write(f"**Archivo original:** `{ruta.name}`\n\n")
            f.write(f"**Tipo:** {lenguaje}\n\n")
            f.write(f"**Líneas de código:** {lineas}\n\n")
            f.write("---\n\n")
            f.write(doc_modelo_2)
        
        print(f"💾 Guardado: {archivo_doc_2}")
        
        # Crear documento comparativo
        archivo_comparacion = self.carpeta_docs / f"{nombre_base}_comparacion.md"
        with open(archivo_comparacion, 'w', encoding='utf-8') as f:
            f.write(f"# Comparación de Documentaciones: {ruta.name}\n\n")
            f.write(f"**Fecha:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            f.write(f"**Archivo:** `{ruta.name}` ({lenguaje})\n\n")
            f.write(f"**Líneas:** {lineas} | **Caracteres:** {caracteres}\n\n")
            f.write("---\n\n")
            f.write(f"## 📘 Documentación - {self.modelo_1}\n\n")
            f.write(doc_modelo_1)
            f.write("\n\n---\n\n")
            f.write(f"## 📗 Documentación - {self.modelo_2}\n\n")
            f.write(doc_modelo_2)
        
        print(f"💾 Comparación: {archivo_comparacion}")
        
        return {
            'archivo': ruta.name,
            'lenguaje': lenguaje,
            'lineas': lineas,
            'doc_modelo_1': archivo_doc_1,
            'doc_modelo_2': archivo_doc_2,
            'comparacion': archivo_comparacion
        }
    
    def documentar_directorio(self, ruta_dir):
        """Documenta todos los archivos soportados en un directorio"""
        directorio = Path(ruta_dir)
        
        if not directorio.exists():
            print(f"✗ Error: El directorio {ruta_dir} no existe")
            return
        
        print(f"\n{'#'*70}")
        print(f"# DOCUMENTACIÓN AUTOMÁTICA DE PROYECTO")
        print(f"{'#'*70}\n")
        print(f"📁 Directorio: {directorio.absolute()}")
        print(f"🤖 Modelos: {self.modelo_1} + {self.modelo_2}\n")
        
        # Buscar archivos
        archivos_encontrados = []
        for ext in self.extensiones.keys():
            archivos_encontrados.extend(list(directorio.rglob(f'*{ext}')))
        
        print(f"📋 Archivos encontrados: {len(archivos_encontrados)}\n")
        
        if not archivos_encontrados:
            print("✗ No se encontraron archivos para documentar")
            return
        
        # Procesar cada archivo
        resultados = []
        for i, archivo in enumerate(archivos_encontrados, 1):
            print(f"\n[{i}/{len(archivos_encontrados)}] Procesando...")
            resultado = self.documentar_archivo(archivo)
            if resultado:
                resultados.append(resultado)
        
        # Crear índice general
        print(f"\n{'='*70}")
        print("📑 Creando índice general...")
        
        indice_path = self.carpeta_docs / "INDICE_GENERAL.md"
        with open(indice_path, 'w', encoding='utf-8') as f:
            f.write("# Índice de Documentación del Proyecto\n\n")
            f.write(f"**Generado:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            f.write(f"**Directorio:** `{directorio.absolute()}`\n\n")
            f.write(f"**Total de archivos documentados:** {len(resultados)}\n\n")
            f.write(f"**Modelos utilizados:** {self.modelo_1} y {self.modelo_2}\n\n")
            f.write("---\n\n")
            f.write("## 📚 Archivos Documentados\n\n")
            
            # Agrupar por tipo
            por_tipo = {}
            for r in resultados:
                tipo = r['lenguaje']
                if tipo not in por_tipo:
                    por_tipo[tipo] = []
                por_tipo[tipo].append(r)
            
            for tipo, archivos in sorted(por_tipo.items()):
                f.write(f"### {tipo}\n\n")
                for arch in archivos:
                    f.write(f"- **{arch['archivo']}** ({arch['lineas']} líneas)\n")
                    f.write(f"  - [Documentación DeepSeek](./{arch['doc_modelo_1'].name})\n")
                    f.write(f"  - [Documentación Qwen](./{arch['doc_modelo_2'].name})\n")
                    f.write(f"  - [Comparación](./{arch['comparacion'].name})\n\n")
        
        print(f"💾 Índice guardado: {indice_path}")
        
        # Resumen en JSON
        resumen_json = {
            'fecha': datetime.now().isoformat(),
            'directorio': str(directorio.absolute()),
            'modelos': [self.modelo_1, self.modelo_2],
            'total_archivos': len(resultados),
            'archivos': [
                {
                    'nombre': r['archivo'],
                    'tipo': r['lenguaje'],
                    'lineas': r['lineas']
                }
                for r in resultados
            ]
        }
        
        resumen_path = self.carpeta_docs / "resumen.json"
        with open(resumen_path, 'w', encoding='utf-8') as f:
            json.dump(resumen_json, f, indent=2, ensure_ascii=False)
        
        print(f"💾 Resumen JSON: {resumen_path}")
        print(f"\n{'#'*70}")
        print(f"✅ PROCESO COMPLETADO")
        print(f"{'#'*70}\n")
        print(f"📁 Todos los archivos guardados en: {self.carpeta_docs.absolute()}")
        print(f"📄 Total documentado: {len(resultados)} archivos\n")


# Programa principal
if __name__ == "__main__":
    doc = AutoDocumentador()
    
    print("\n" + "="*70)
    print("  SISTEMA DE DOCUMENTACIÓN AUTOMÁTICA DUAL")
    print("  Genera documentación con 2 modelos de IA diferentes")
    print("="*70 + "\n")
    
    print("Opciones:")
    print("  1. Documentar un archivo específico")
    print("  2. Documentar todo un directorio (recursivo)")
    print("  3. Salir\n")
    
    opcion = input("Elige una opción (1-3): ").strip()
    
    if opcion == "1":
        ruta = input("\nRuta del archivo: ").strip()
        doc.documentar_archivo(ruta)
        
    elif opcion == "2":
        ruta = input("\nRuta del directorio: ").strip()
        if not ruta:
            ruta = "."
        doc.documentar_directorio(ruta)
        
    elif opcion == "3":
        print("\n👋 ¡Hasta luego!\n")
        
    else:
        print("\n✗ Opción no válida\n")