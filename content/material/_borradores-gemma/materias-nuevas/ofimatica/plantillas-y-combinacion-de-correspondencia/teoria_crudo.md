# Plantillas y Combinación de Correspondencia: Automatización inteligente de documentos

En el ámbito de la ofimática intermedia, dominar las plantillas y la combinación de correspondencia trasciende la simple producción de cartas masivas. Se trata de implementar flujos de trabajo que separan el **diseño estático** (la forma) del **contenido dinámico** (los datos), permitiendo generar documentos personalizados, consistentes y auditables en minutos, en lugar de horas.

## Fundamentos: Diferencia entre Plantilla y Documento Final

Es crucial distinguir entre el archivo de origen y el resultado. Una **plantilla** (generalmente con extensión `.dotx` en Word o `.ott` en LibreOffice) no contiene datos específicos de un cliente, sino marcadores de posición y estilos predefinidos. Por otro lado, la **combinación de correspondencia** es el proceso que vincula esa estructura con una fuente de datos externa (como Excel o CSV) para generar un documento maestro con múltiples registros.

### Flujo de trabajo típico

1.  **Preparación de datos:** El archivo fuente (ej. `clientes.xlsx`) debe tener una fila de encabezado clara y datos limpios (sin espacios extra ni caracteres raros).
2.  **Diseño de la plantilla:** En el procesador de textos, se redacta el texto base y se insertan los **campos de combinación**.
3.  **Vinculación:** Se conecta el documento con la hoja de cálculo.
4.  **Vista previa y finalización:** Se verifican los resultados antes de imprimir o guardar el resultado final.

## Sintaxis y Comandos Clave

A diferencia de la programación, aquí no hay "código" en el sentido estricto, sino **campos de formato** que el motor de la aplicación interpreta.

*   **Insertar campo:** En Word, se utiliza la pestaña *Combinar correspondencia* > *Insertar campo de combinación*. El sistema coloca una marca visual como `«Nombre»` o `«Apellido»`.
*   **Reglas de texto (If-Then-Else):** Para manejar lógica condicional, se usan las reglas de combinación. Por ejemplo:
    ```text
    { IF «Género» = "M" "Estimado Sr." "Estimada Sra." }
    ```
    *Nota:* Esta sintaxis varía ligeramente según la versión y el software, pero la lógica de comparación es universal en herramientas modernas de ofimática.
*   **Campos de formato condicional avanzado:** Para evitar mostrar "0" o campos vacíos, se puede utilizar la regla `MERGEFIELD` con condiciones de anulación, aunque lo más común en nivel intermedio es limpiar los datos en Excel antes de la combinación para evitar errores de visualización.

## Errores comunes en la implementación

1.  **Encabezados duplicados o inconsistentes:** Si la columna en Excel se llama `Teléfono` y en la plantilla se busca `Telefono` (sin tilde) o `tel`, la combinación fallará silenciosamente o mostrará el nombre del campo literal. La sensibilidad a mayúsculas y caracteres especiales es la causa número uno de fallos.
2.  **Formato rígido en campos numéricos:** Al combinar fechas o montos, el resultado puede heredar el formato de la celda de Excel o el formato por defecto del procesador de textos, generando resultados como `44562` (formato serial de fecha) en lugar de `01/01/2023`. Es necesario aplicar formato manualmente *después* de la combinación o configurar la regla de formato.
3.  **Ignorar los saltos de página en documentos largos:** Al combinar cientos de registros en un solo documento, es vital activar la opción "Editar documentos individuales" para que cada registro tenga su propia página y estructura, en lugar de apilar todo en un solo flujo continuo que rompe la maquetación.

## Cuándo usar (y cuándo no) la combinación de correspondencia

**Úsalo cuando:**
*   Necesitas generar cientos de documentos con una estructura fija pero datos variables (contratos, facturas, cartas de cobro).
*   La fuente de datos ya está digitalizada en hojas de cálculo.
*   Requieres trazabilidad: cada documento generado puede vincularse a un registro específico en la base de datos.

**No lo uses cuando:**
*   El documento requiere lógica compleja de negocio (ej. cálculo de descuentos escalonados basados en múltiples criterios cruzados). En estos casos, es mejor usar Macros (VBA/Python) o herramientas de BI.
*   Los datos están dispersos en múltiples archivos no estructurados (PDFs, imágenes). La combinación de correspondencia no puede "leer" PDFs directamente sin una etapa previa de extracción de datos.
*   El volumen es bajo (menos de 10 documentos). La configuración inicial toma más tiempo que hacerlo manualmente.

## Ejemplo extendido: Generación de Certificados de Asistencia

**Contexto:** Una organización educativa debe emitir 200 certificados para un curso de "Gestión de Proyectos". Los datos de los alumnos están en `alumnos.xlsx` con columnas: `ID`, `Nombre`, `Apellido`, `Nota_Final`, `Fecha_Curso`.

**Pasos de ejecución:**

1.  **Limpieza de datos:** En Excel, se crea una columna calculada `Certificado` con la fórmula `="El alumno " & B2 & " " & C2 & " ha aprobado..."` para tener el texto completo listo, o se deja para que Word lo arme. Optamos por dejarlo modular para permitir correcciones futuras sin reabrir Excel.
2.  **Diseño en Word:**
    *   Se crea el diseño gráfico del certificado (marcos, logos, tipografía).
    *   Se posiciona el cursor donde va el nombre y se inserta el campo `«Nombre» «Apellido»`.
    *   Donde va la nota, se inserta `«Nota_Final»`.
    *   **Punto crítico:** Se aplica formato numérico a la nota para que aparezca como "9,5" y no "9.5000001" (error de punto flotante).
3.  **Vinculación:** Se selecciona `Seleccionar destinatarios` > `Usar una lista existente` y se apunta a `alumnos.xlsx`.
4.  **Filtrado (Trade-off avanzado):** Si solo se quieren emitir certificados a quienes aprobaron (nota >= 7), se usa la opción *Filtrar destinatarios* > *Opciones de filtro* dentro del asistente de Word. Esto evita generar documentos basura y luego tener que borrarlos.
5.  **Salida:** Se elige *Finalizar y combinar* > *Editar documentos individuales*. Word genera un nuevo archivo con 200 páginas. Se guarda este archivo final como `.docx` para su impresión o conversión a PDF por lotes.

Este enfoque garantiza que, si cambia el nombre del curso en la base de datos, solo hay que actualizar la celda en Excel y volver a ejecutar la combinación, sin tocar el diseño gráfico.