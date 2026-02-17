# API Readonly: Catálogo agregado

## Endpoint

- **Método:** `GET`
- **Ruta:** `/api/readonly/catalogo`

Retorna un catálogo agregado para consumo de clientes de solo lectura.

## Contrato JSON

```json
{
  "modulosActivos": [
    {
      "id": "mod-001",
      "title": "Introducción a funciones",
      "category": "matematicas",
      "updatedAt": "2026-01-10T12:00:00.000Z"
    }
  ],
  "generadores": [
    {
      "materia": "matematicas",
      "temas": ["01_funciones", "02_ecuaciones"]
    },
    {
      "materia": "fisica",
      "temas": ["01_cinematica"]
    }
  ],
  "mapasYDiccionarios": {
    "visualizadores": [
      {
        "id": "line-chart",
        "title": "Gráfico de líneas",
        "description": "Visualizador para series temporales",
        "kind": "chart"
      }
    ],
    "idiomasDiccionario": ["en", "es", "pt"]
  }
}
```

## Notas de estabilidad

- `modulosActivos` siempre se retorna como arreglo (puede venir vacío).
- `generadores` siempre incluye las materias soportadas por `consignas`, cada una con su arreglo `temas`.
- `mapasYDiccionarios.visualizadores` siempre se retorna como arreglo de metadatos básicos.
- `mapasYDiccionarios.idiomasDiccionario` siempre se retorna como arreglo de códigos de idioma ordenados.

## Errores

- `500 { "error": "no se pudo construir el catalogo" }` cuando falla cualquiera de las fuentes agregadas.
