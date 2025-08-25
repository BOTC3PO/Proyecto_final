// MongoDB Database Setup for Educational Platform
// Run this script in MongoDB shell or MongoDB Compass

// 1. Create the database
//use educational_platform;

// 2. Create collections with validation schemas

// ============================================================================
// USUARIOS COLLECTION
// ============================================================================
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "tipoUsuario"],
      properties: {
        username: {
          bsonType: "string",
          description: "Username must be a string and is required"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre must be a string"
        },
        apellido: {
          bsonType: "string",
          description: "Apellido must be a string"
        },
        tipoUsuario: {
          bsonType: "object",
          required: ["codigo", "nombre"],
          properties: {
            codigo: {
              bsonType: "int",
              minimum: 0,
              maximum: 3,
              description: "Codigo must be integer between 0-3"
            },
            nombre: {
              bsonType: "string",
              enum: ["none", "Profesor", "Administrador", "Administrador_escuela"],
              description: "Nombre must be one of the enum values"
            }
          }
        },
        nombreOrganizacion: {
          bsonType: "string",
          description: "Nombre de la organización"
        },
        isDeleted: {
          bsonType: "bool",
          description: "Soft delete flag"
        },
        suscripcion: {
          bsonType: "object",
          properties: {
            fechaInicio: {
              bsonType: "date",
              description: "Fecha de inicio de suscripción"
            },
            fechaFin: {
              bsonType: "date",
              description: "Fecha de fin de suscripción"
            },
            estado: {
              bsonType: "string",
              enum: ["activa", "inactiva", "suspendida", "vencida"],
              description: "Estado de la suscripción"
            },
            pagos: {
              bsonType: "array",
              items: {
                bsonType: "object",
                required: ["monto", "fechaPago", "metodoPago"],
                properties: {
                  monto: {
                    bsonType: "double",
                    minimum: 0,
                    description: "Monto del pago"
                  },
                  fechaPago: {
                    bsonType: "date",
                    description: "Fecha del pago"
                  },
                  metodoPago: {
                    bsonType: "string",
                    enum: ["tarjeta", "transferencia", "efectivo", "paypal"],
                    description: "Método de pago utilizado"
                  }
                }
              }
            }
          }
        },
        perfilPadre: {
          bsonType: "object",
          properties: {
            estudiantesACargo: {
              bsonType: "array",
              items: {
                bsonType: "objectId",
                description: "IDs de los estudiantes a cargo"
              }
            }
          }
        },
        fechaCreacion: {
          bsonType: "date",
          description: "Fecha de creación del usuario"
        },
        fechaActualizacion: {
          bsonType: "date",
          description: "Fecha de última actualización"
        }
      }
    }
  }
});

// ============================================================================
// CLASES COLLECTION
// ============================================================================
db.createCollection("clases", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "fechaHora"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre de la clase"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripción de la clase"
        },
        fechaHora: {
          bsonType: "date",
          description: "Fecha y hora de la clase"
        },
        duracion: {
          bsonType: "int",
          minimum: 0,
          description: "Duración en minutos"
        },
        participantes: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario participante"
              },
              esProfesor: {
                bsonType: "bool",
                description: "Si es profesor de la clase"
              },
              esAdmin: {
                bsonType: "bool",
                description: "Si es admin de la clase"
              },
              nombreAsociacion: {
                bsonType: "string",
                description: "Nombre de la asociación"
              },
              fechaInscripcion: {
                bsonType: "date",
                description: "Fecha de inscripción a la clase"
              }
            }
          }
        },
        modulos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              moduloId: {
                bsonType: "objectId",
                description: "ID del módulo"
              },
              fechaAsignacion: {
                bsonType: "date",
                description: "Fecha de asignación del módulo"
              },
              esObligatorio: {
                bsonType: "bool",
                description: "Si el módulo es obligatorio"
              }
            }
          }
        },
        publicaciones: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId", "titulo", "contenido"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario que publica"
              },
              titulo: {
                bsonType: "string",
                description: "Título de la publicación"
              },
              contenido: {
                bsonType: "string",
                description: "Contenido de la publicación"
              },
              fechaCreacion: {
                bsonType: "date",
                description: "Fecha de creación"
              },
              tipoPublicacion: {
                bsonType: "string",
                enum: ["anuncio", "tarea", "material", "discusion"],
                description: "Tipo de publicación"
              },
              archivoAdjunto: {
                bsonType: "string",
                description: "URL del archivo adjunto"
              },
              esImportante: {
                bsonType: "bool",
                description: "Si la publicación es importante"
              },
              isDeleted: {
                bsonType: "bool",
                description: "Soft delete flag"
              }
            }
          }
        },
        fechaCreacion: {
          bsonType: "date",
          description: "Fecha de creación de la clase"
        },
        isDeleted: {
          bsonType: "bool",
          description: "Soft delete flag"
        }
      }
    }
  }
});

// ============================================================================
// MODULOS COLLECTION
// ============================================================================
db.createCollection("modulos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["titulo", "createdBy"],
      properties: {
        createdBy: {
          bsonType: "objectId",
          description: "ID del usuario creador"
        },
        titulo: {
          bsonType: "string",
          description: "Título del módulo"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripción del módulo"
        },
        archivoInsertado: {
          bsonType: "string",
          description: "URL del archivo insertado"
        },
        enlaceInsertado: {
          bsonType: "string",
          description: "URL del enlace insertado"
        },
        nivelDificultad: {
          bsonType: "string",
          enum: ["principiante", "intermedio", "avanzado", "experto"],
          description: "Nivel de dificultad"
        },
        categoria: {
          bsonType: "string",
          description: "Categoría del módulo"
        },
        duracionEstimada: {
          bsonType: "int",
          minimum: 0,
          description: "Duración estimada en minutos"
        },
        nivelMax: {
          bsonType: "int",
          minimum: 1,
          description: "Nivel máximo del módulo"
        },
        expMax: {
          bsonType: "int",
          minimum: 0,
          description: "Experiencia máxima otorgada"
        },
        isPrivate: {
          bsonType: "bool",
          description: "Si el módulo es privado"
        },
        isDeleted: {
          bsonType: "bool",
          description: "Soft delete flag"
        },
        cuestionario: {
          bsonType: "object",
          properties: {
            titulo: {
              bsonType: "string",
              description: "Título del cuestionario"
            },
            descripcion: {
              bsonType: "string",
              description: "Descripción del cuestionario"
            },
            fechaCreacion: {
              bsonType: "date",
              description: "Fecha de creación del cuestionario"
            },
            preguntas: {
              bsonType: "array",
              items: {
                bsonType: "object",
                required: ["texto", "tipo"],
                properties: {
                  texto: {
                    bsonType: "string",
                    description: "Texto de la pregunta"
                  },
                  tipo: {
                    bsonType: "string",
                    enum: ["multiple_choice", "true_false", "open_text", "numeric"],
                    description: "Tipo de pregunta"
                  },
                  opciones: {
                    bsonType: "array",
                    items: {
                      bsonType: "string"
                    },
                    description: "Opciones para preguntas de opción múltiple"
                  },
                  respuestas: {
                    bsonType: "array",
                    items: {
                      bsonType: "object",
                      required: ["usuarioId", "texto"],
                      properties: {
                        usuarioId: {
                          bsonType: "objectId",
                          description: "ID del usuario que responde"
                        },
                        texto: {
                          bsonType: "string",
                          description: "Texto de la respuesta"
                        },
                        fechaRespuesta: {
                          bsonType: "date",
                          description: "Fecha de la respuesta"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        permisos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId", "tipoPermiso"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario con permisos"
              },
              tipoPermiso: {
                bsonType: "string",
                enum: ["leer", "escribir", "administrar", "compartir"],
                description: "Tipo de permiso"
              },
              estadoPermiso: {
                bsonType: "string",
                enum: ["activo", "suspendido", "revocado"],
                description: "Estado del permiso"
              },
              fechaPermiso: {
                bsonType: "date",
                description: "Fecha de otorgamiento del permiso"
              }
            }
          }
        },
        progresoUsuarios: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario"
              },
              nivelUser: {
                bsonType: "int",
                minimum: 0,
                description: "Nivel actual del usuario"
              },
              monedaFiduciaria: {
                bsonType: "string",
                description: "Tipo de moneda fiduciaria"
              },
              direccionWallet: {
                bsonType: "string",
                description: "Dirección de wallet"
              },
              cantidad: {
                bsonType: "double",
                minimum: 0,
                description: "Cantidad de moneda"
              },
              expUser: {
                bsonType: "int",
                minimum: 0,
                description: "Experiencia del usuario"
              },
              esFavorito: {
                bsonType: "bool",
                description: "Si es favorito del usuario"
              },
              fechaInicio: {
                bsonType: "date",
                description: "Fecha de inicio del módulo"
              },
              fechaCompletado: {
                bsonType: "date",
                description: "Fecha de completado"
              }
            }
          }
        },
        fechaCreacion: {
          bsonType: "date",
          description: "Fecha de creación del módulo"
        }
      }
    }
  }
});

// ============================================================================
// CURSOS COLLECTION
// ============================================================================
db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "profesorId", "tipo"],
      properties: {
        nombre: {
          bsonType: "string",  
          description: "Nombre del curso"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripción del curso"
        },
        precio: {
          bsonType: "double",
          minimum: 0,
          description: "Precio del curso"
        },
        duracion: {
          bsonType: "int",
          minimum: 0,
          description: "Duración en horas"
        },
        tipo: {
          bsonType: "string",
          enum: ["institucional", "privado"],
          description: "Tipo de curso"
        },
        profesorId: {
          bsonType: "objectId",
          description: "ID del profesor"
        },
        fechaCreacion: {
          bsonType: "date",
          description: "Fecha de creación"
        },
        isDeleted: {
          bsonType: "bool",
          description: "Soft delete flag"
        },
        trabajosPracticos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["titulo", "descripcion", "fechaEntrega"],
            properties: {
              titulo: {
                bsonType: "string",
                description: "Título del trabajo práctico"
              },
              descripcion: {
                bsonType: "string",
                description: "Descripción del trabajo"
              },
              fechaEntrega: {
                bsonType: "date",
                description: "Fecha límite de entrega"
              },
              archivoEnlace: {
                bsonType: "string",
                description: "Enlace al archivo del trabajo"
              },
              entregas: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["usuarioId"],
                  properties: {
                    usuarioId: {
                      bsonType: "objectId",
                      description: "ID del usuario que entrega"
                    },
                    archivoEntrega: {
                      bsonType: "string",
                      description: "URL del archivo entregado"
                    },
                    fechaEntrega: {
                      bsonType: "date",
                      description: "Fecha de entrega"
                    },
                    calificacion: {
                      bsonType: "double",
                      minimum: 0,
                      maximum: 10,
                      description: "Calificación obtenida"
                    },
                    fechaCalificacion: {
                      bsonType: "date",
                      description: "Fecha de calificación"
                    },
                    comentarios: {
                      bsonType: "string",
                      description: "Comentarios del profesor"
                    }
                  }
                }
              }
            }
          }
        },
        certificados: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId", "fechaEmision", "codigoVerificacion"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario certificado"
              },
              fechaEmision: {
                bsonType: "date",
                description: "Fecha de emisión del certificado"
              },
              codigoVerificacion: {
                bsonType: "string",
                description: "Código único de verificación"
              },
              urlCertificado: {
                bsonType: "string",
                description: "URL del certificado PDF"
              }
            }
          }
        },
        inscripciones: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId", "fechaInscripcion"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario inscrito"
              },
              fechaInscripcion: {
                bsonType: "date",
                description: "Fecha de inscripción"
              },
              estado: {
                bsonType: "string",
                enum: ["inscrito", "en_progreso", "completado", "abandonado"],
                description: "Estado de la inscripción"
              },
              progreso: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
                description: "Progreso en porcentaje"
              }
            }
          }
        }
      }
    }
  }
});

// ============================================================================
// ENCUESTAS COLLECTION
// ============================================================================
db.createCollection("encuestas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["titulo"],
      properties: {
        titulo: {
          bsonType: "string",
          description: "Título de la encuesta"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripción de la encuesta"
        },
        fechaCreacion: {
          bsonType: "date",
          description: "Fecha de creación"
        },
        fechaVencimiento: {
          bsonType: "date",
          description: "Fecha de vencimiento"
        },
        esAnonima: {
          bsonType: "bool",
          description: "Si la encuesta es anónima"
        },
        preguntas: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["texto", "tipo"],
            properties: {
              texto: {
                bsonType: "string",
                description: "Texto de la pregunta"
              },
              tipo: {
                bsonType: "string",
                enum: ["multiple_choice", "single_choice", "text", "rating", "yes_no"],
                description: "Tipo de pregunta"
              },
              opciones: {
                bsonType: "array",
                items: {
                  bsonType: "string"
                },
                description: "Opciones disponibles"
              },
              esObligatoria: {
                bsonType: "bool",
                description: "Si la pregunta es obligatoria"
              }
            }
          }
        },
        respuestas: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["usuarioId", "fechaRespuesta"],
            properties: {
              usuarioId: {
                bsonType: "objectId",
                description: "ID del usuario que responde"
              },
              fechaRespuesta: {
                bsonType: "date",
                description: "Fecha de respuesta"
              },
              respuestasDetalle: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  properties: {
                    preguntaIndex: {
                      bsonType: "int",
                      description: "Índice de la pregunta"
                    },
                    respuesta: {
                      bsonType: "string",
                      description: "Respuesta dada"
                    }
                  }
                }
              }
            }
          }
        },
        isDeleted: {
          bsonType: "bool",
          description: "Soft delete flag"
        }
      }
    }
  }
});

// ============================================================================
// CREATE INDEXES FOR PERFORMANCE
// ============================================================================

// Usuarios indexes
db.usuarios.createIndex({ "username": 1 }, { unique: true });
db.usuarios.createIndex({ "tipoUsuario.codigo": 1 });
db.usuarios.createIndex({ "nombreOrganizacion": 1 });
db.usuarios.createIndex({ "suscripcion.estado": 1 });
db.usuarios.createIndex({ "isDeleted": 1 });

// Clases indexes
db.clases.createIndex({ "fechaHora": 1 });
db.clases.createIndex({ "participantes.usuarioId": 1 });
db.clases.createIndex({ "participantes.esProfesor": 1 });
db.clases.createIndex({ "modulos.moduloId": 1 });
db.clases.createIndex({ "isDeleted": 1 });

// Módulos indexes
db.modulos.createIndex({ "createdBy": 1 });
db.modulos.createIndex({ "categoria": 1, "nivelDificultad": 1 });
db.modulos.createIndex({ "progresoUsuarios.usuarioId": 1 });
db.modulos.createIndex({ "permisos.usuarioId": 1 });
db.modulos.createIndex({ "isPrivate": 1 });
db.modulos.createIndex({ "isDeleted": 1 });
db.modulos.createIndex({ "titulo": "text", "descripcion": "text" });

// Cursos indexes
db.cursos.createIndex({ "profesorId": 1 });
db.cursos.createIndex({ "tipo": 1 });
db.cursos.createIndex({ "inscripciones.usuarioId": 1 });
db.cursos.createIndex({ "fechaCreacion": 1 });
db.cursos.createIndex({ "isDeleted": 1 });
db.cursos.createIndex({ "nombre": "text", "descripcion": "text" });

// Encuestas indexes
db.encuestas.createIndex({ "fechaCreacion": 1 });
db.encuestas.createIndex({ "fechaVencimiento": 1 });
db.encuestas.createIndex({ "respuestas.usuarioId": 1 });
db.encuestas.createIndex({ "isDeleted": 1 });

// ============================================================================
// INSERT SAMPLE DATA
// ============================================================================

// Insert sample user types and users
db.usuarios.insertMany([
  {
    username: "admin",
    nombre: "Administrador",
    apellido: "Sistema",
    tipoUsuario: {
      codigo: 2,
      nombre: "Administrador"
    },
    nombreOrganizacion: "Plataforma Educativa",
    isDeleted: false,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  },
  {
    username: "profesor1",
    nombre: "Juan",
    apellido: "Pérez",
    tipoUsuario: {
      codigo: 1,
      nombre: "Profesor"
    },
    nombreOrganizacion: "Escuela Primaria",
    suscripcion: {
      fechaInicio: new Date(),
      fechaFin: new Date(Date.now() + 365*24*60*60*1000), // 1 year from now
      estado: "activa",
      pagos: [
        {
          monto: 99.99,
          fechaPago: new Date(),
          metodoPago: "tarjeta"
        }
      ]
    },
    isDeleted: false,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  }
]);

// Insert sample class
db.clases.insertOne({
  nombre: "Matemáticas Básicas",
  descripcion: "Curso introductorio de matemáticas",
  fechaHora: new Date(Date.now() + 7*24*60*60*1000), // 1 week from now
  duracion: 60,
  participantes: [
    {
      usuarioId: ObjectId(), // This should be the actual profesor1 ObjectId
      esProfesor: true,
      esAdmin: false,
      fechaInscripcion: new Date()
    }
  ],
  modulos: [],
  publicaciones: [],
  fechaCreacion: new Date(),
  isDeleted: false
});

// Insert sample module
db.modulos.insertOne({
  createdBy: ObjectId(), // This should be the actual profesor1 ObjectId
  titulo: "Introducción a las Sumas",
  descripcion: "Módulo básico para aprender sumas",
  nivelDificultad: "principiante",
  categoria: "matematicas",
  duracionEstimada: 30,
  nivelMax: 5,
  expMax: 100,
  isPrivate: false,
  isDeleted: false,
  cuestionario: {
    titulo: "Evaluación de Sumas",
    descripcion: "Cuestionario para evaluar el aprendizaje de sumas",
    fechaCreacion: new Date(),
    preguntas: [
      {
        texto: "¿Cuánto es 2 + 2?",
        tipo: "multiple_choice",
        opciones: ["3", "4", "5", "6"],
        respuestas: []
      }
    ]
  },
  permisos: [],
  progresoUsuarios: [],
  fechaCreacion: new Date()
});

// Insert sample course
db.cursos.insertOne({
  nombre: "Curso Completo de Matemáticas",
  descripcion: "Curso completo desde nivel básico hasta avanzado",
  precio: 199.99,
  duracion: 40,
  tipo: "privado",
  profesorId: ObjectId(), // This should be the actual profesor1 ObjectId
  fechaCreacion: new Date(),
  isDeleted: false,
  trabajosPracticos: [
    {
      titulo: "Ejercicios de Suma",
      descripcion: "Resolver 10 ejercicios de suma",
      fechaEntrega: new Date(Date.now() + 14*24*60*60*1000), // 2 weeks from now
      entregas: []
    }
  ],
  certificados: [],
  inscripciones: []
});

// Insert sample survey
db.encuestas.insertOne({
  titulo: "Satisfacción del Curso",
  descripcion: "Encuesta para medir la satisfacción de los estudiantes",
  fechaCreacion: new Date(),
  fechaVencimiento: new Date(Date.now() + 30*24*60*60*1000), // 30 days from now
  esAnonima: false,
  preguntas: [
    {
      texto: "¿Cómo calificarías el curso?",
      tipo: "rating",
      opciones: ["1", "2", "3", "4", "5"],
      esObligatoria: true
    },
    {
      texto: "¿Recomendarías este curso?",
      tipo: "yes_no",
      opciones: ["Sí", "No"],
      esObligatoria: true
    }
  ],
  respuestas: [],
  isDeleted: false
});

print("Database setup completed successfully!");
print("Collections created: usuarios, clases, modulos, cursos, encuestas");
print("Indexes created for optimal performance");
print("Sample data inserted");
print("Database is ready for use!");
