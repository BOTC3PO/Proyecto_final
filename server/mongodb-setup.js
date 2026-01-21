// MongoDB Database Setup for /apps/web
// Run this script in MongoDB shell or MongoDB Compass

// 1. Create the database
// use educational_platform;

// 2. Create collections with validation schemas

// ============================================================================
// USUARIOS COLLECTION
// ============================================================================
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "fullName", "role", "createdAt"],
      properties: {
        username: {
          bsonType: "string",
          description: "Public username"
        },
        email: {
          bsonType: "string",
          description: "Email for login and notifications"
        },
        fullName: {
          bsonType: "string",
          description: "Nombre completo"
        },
        role: {
          bsonType: "string",
          enum: ["ADMIN", "USER", "PARENT", "TEACHER", "ENTERPRISE", "GUEST"],
          description: "Rol principal"
        },
        escuelaId: {
          bsonType: ["objectId", "null"],
          description: "Referencia a escuela (opcional)"
        },
        birthdate: {
          bsonType: ["date", "null"],
          description: "Fecha de nacimiento"
        },
        passwordHash: {
          bsonType: ["string", "null"],
          description: "Hash de contraseña (si aplica)"
        },
        consents: {
          bsonType: "object",
          properties: {
            privacyConsent: { bsonType: "bool" },
            termsAccepted: { bsonType: "bool" },
            consentedAt: { bsonType: "date" }
          }
        },
        parentProfile: {
          bsonType: "object",
          properties: {
            childrenIds: {
              bsonType: "array",
              items: { bsonType: "objectId" }
            }
          }
        },
        teacherProfile: {
          bsonType: "object",
          properties: {
            managedClassIds: {
              bsonType: "array",
              items: { bsonType: "objectId" }
            }
          }
        },
        isDeleted: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// ESCUELAS COLLECTION
// ============================================================================
db.createCollection("escuelas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "code", "createdAt"],
      properties: {
        name: { bsonType: "string" },
        code: { bsonType: "string" },
        address: { bsonType: ["string", "null"] },
        adminIds: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        isDeleted: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// MEMBRESIAS_ESCUELA COLLECTION
// ============================================================================
db.createCollection("membresias_escuela", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "escuelaId", "rol", "estado", "fechaAlta"],
      properties: {
        usuarioId: { bsonType: "objectId" },
        escuelaId: { bsonType: "objectId" },
        rol: { bsonType: "string", enum: ["ADMIN", "TEACHER", "STUDENT", "PARENT"] },
        estado: { bsonType: "string", enum: ["activa", "suspendida", "revocada"] },
        fechaAlta: { bsonType: "date" },
        fechaBaja: { bsonType: ["date", "null"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
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
      required: ["name", "grade", "escuelaId", "createdAt"],
      properties: {
        name: { bsonType: "string" },
        grade: { bsonType: "string" },
        code: { bsonType: ["string", "null"] },
        escuelaId: { bsonType: "objectId" },
        teacherIds: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        adminIds: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        studentIds: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        modules: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["moduleId"],
            properties: {
              moduleId: { bsonType: "objectId" },
              assignedAt: { bsonType: "date" },
              required: { bsonType: "bool" }
            }
          }
        },
        publications: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["authorId", "title", "body", "publishedAt"],
            properties: {
              authorId: { bsonType: "objectId" },
              title: { bsonType: "string" },
              body: { bsonType: "string" },
              links: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["label", "href"],
                  properties: {
                    label: { bsonType: "string" },
                    href: { bsonType: "string" }
                  }
                }
              },
              publishedAt: { bsonType: "date" },
              isPinned: { bsonType: "bool" }
            }
          }
        },
        isDeleted: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
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
      required: ["title", "description", "subject", "visibility", "createdBy", "createdAt"],
      properties: {
        createdBy: { bsonType: "objectId" },
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        subject: { bsonType: "string" },
        category: { bsonType: ["string", "null"] },
        difficultyLevel: {
          bsonType: ["string", "null"],
          enum: ["Básico", "Intermedio", "Avanzado"]
        },
        durationMinutes: { bsonType: ["int", "null"] },
        visibility: {
          bsonType: "string",
          enum: ["publico", "privado"]
        },
        theoryItems: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["id", "title", "type"],
            properties: {
              id: { bsonType: "string" },
              title: { bsonType: "string" },
              type: { bsonType: "string" },
              detail: { bsonType: ["string", "null"] }
            }
          }
        },
        quizzes: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["id", "title", "type", "visibility"],
            properties: {
              id: { bsonType: "string" },
              title: { bsonType: "string" },
              type: { bsonType: "string", enum: ["practica", "evaluacion"] },
              visibility: { bsonType: "string", enum: ["publico", "escuela"] },
              questions: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["id", "prompt"],
                  properties: {
                    id: { bsonType: "string" },
                    prompt: { bsonType: "string" },
                    focus: { bsonType: ["string", "null"] }
                  }
                }
              }
            }
          }
        },
        scoringSystem: { bsonType: ["string", "null"] },
        permissions: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["userId", "role"],
            properties: {
              userId: { bsonType: "objectId" },
              role: { bsonType: "string", enum: ["OWNER", "ADMIN", "TEACHER", "STUDENT"] }
            }
          }
        },
        progress: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["userId"],
            properties: {
              userId: { bsonType: "objectId" },
              level: { bsonType: ["int", "null"] },
              exp: { bsonType: ["int", "null"] },
              progressPercent: { bsonType: ["int", "null"], minimum: 0, maximum: 100 },
              lastActivityAt: { bsonType: ["date", "null"] },
              completedAt: { bsonType: ["date", "null"] }
            }
          }
        },
        isDeleted: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
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
      required: ["name", "teacherId", "type", "createdAt"],
      properties: {
        name: { bsonType: "string" },
        description: { bsonType: ["string", "null"] },
        price: { bsonType: ["double", "null"], minimum: 0 },
        durationHours: { bsonType: ["int", "null"], minimum: 0 },
        type: { bsonType: "string", enum: ["institucional", "privado"] },
        teacherId: { bsonType: "objectId" },
        moduleIds: {
          bsonType: "array",
          items: { bsonType: "objectId" }
        },
        enrollments: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["userId", "status", "enrolledAt"],
            properties: {
              userId: { bsonType: "objectId" },
              status: { bsonType: "string", enum: ["inscrito", "en_progreso", "completado", "abandonado"] },
              progress: { bsonType: ["int", "null"], minimum: 0, maximum: 100 },
              enrolledAt: { bsonType: "date" }
            }
          }
        },
        isDeleted: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// MENSAJES COLLECTION
// ============================================================================
db.createCollection("mensajes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "parentId", "classId", "createdAt"],
      properties: {
        studentId: { bsonType: "objectId" },
        parentId: { bsonType: "objectId" },
        classId: { bsonType: "objectId" },
        lastMessageFrom: { bsonType: "string", enum: ["parent", "admin"] },
        lastMessagePreview: { bsonType: ["string", "null"] },
        unreadForAdmin: { bsonType: "bool" },
        messages: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["senderId", "body", "sentAt"],
            properties: {
              senderId: { bsonType: "objectId" },
              body: { bsonType: "string" },
              sentAt: { bsonType: "date" }
            }
          }
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// TRANSFERENCIAS COLLECTION
// ============================================================================
db.createCollection("transferencias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "fromSchoolId", "toSchoolId", "status", "createdAt"],
      properties: {
        studentId: { bsonType: "objectId" },
        fromSchoolId: { bsonType: "objectId" },
        toSchoolId: { bsonType: "objectId" },
        status: { bsonType: "string", enum: ["pending", "approved", "rejected"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// BILLETERAS COLLECTION
// ============================================================================
db.createCollection("billeteras", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "saldo", "moneda", "updatedAt"],
      properties: {
        usuarioId: { bsonType: "objectId" },
        saldo: { bsonType: "double", minimum: 0 },
        moneda: { bsonType: "string" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// MOVIMIENTOS_BILLETERA COLLECTION
// ============================================================================
db.createCollection("movimientos_billetera", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["billeteraId", "tipo", "monto", "motivo", "origen", "fecha"],
      properties: {
        billeteraId: { bsonType: "objectId" },
        tipo: { bsonType: "string", enum: ["credito", "debito"] },
        monto: { bsonType: "double", minimum: 0 },
        motivo: { bsonType: "string" },
        origen: { bsonType: "string" },
        fecha: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// CREATE INDEXES FOR PERFORMANCE
// ============================================================================

// Usuarios indexes
db.usuarios.createIndex({ username: 1 }, { unique: true });
db.usuarios.createIndex({ email: 1 }, { unique: true });
db.usuarios.createIndex({ role: 1 });
db.usuarios.createIndex({ escuelaId: 1 });
db.usuarios.createIndex({ "teacherProfile.managedClassIds": 1 });

// Escuelas indexes
db.escuelas.createIndex({ code: 1 }, { unique: true });
db.escuelas.createIndex({ name: 1 });

// Membresias escuela indexes
db.membresias_escuela.createIndex({ usuarioId: 1, escuelaId: 1 }, { unique: true });
db.membresias_escuela.createIndex({ escuelaId: 1 });
db.membresias_escuela.createIndex({ rol: 1 });

// Clases indexes
db.clases.createIndex({ escuelaId: 1 });
db.clases.createIndex({ code: 1 });
db.clases.createIndex({ teacherIds: 1 });
db.clases.createIndex({ studentIds: 1 });

// Modulos indexes
db.modulos.createIndex({ createdBy: 1 });
db.modulos.createIndex({ subject: 1, category: 1 });
db.modulos.createIndex({ visibility: 1 });
db.modulos.createIndex({ title: "text", description: "text" });

// Cursos indexes
db.cursos.createIndex({ teacherId: 1 });
db.cursos.createIndex({ type: 1 });
db.cursos.createIndex({ name: "text", description: "text" });

// Mensajes indexes
db.mensajes.createIndex({ classId: 1 });
db.mensajes.createIndex({ parentId: 1 });
db.mensajes.createIndex({ studentId: 1 });

// Transferencias indexes
db.transferencias.createIndex({ status: 1 });
db.transferencias.createIndex({ fromSchoolId: 1 });
db.transferencias.createIndex({ toSchoolId: 1 });

// Billeteras indexes
db.billeteras.createIndex({ usuarioId: 1 }, { unique: true });

// Movimientos billetera indexes
db.movimientos_billetera.createIndex({ billeteraId: 1 });
db.movimientos_billetera.createIndex({ fecha: -1 });

// ============================================================================
// ECONOMIA COLLECTIONS
// ============================================================================
db.createCollection("economia_config", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id",
        "moneda",
        "tasas",
        "limites",
        "inflacion",
        "hiperinflacion",
        "deflacion",
        "rankingFactors",
        "updatedAt"
      ],
      properties: {
        id: { bsonType: "string" },
        moneda: {
          bsonType: "object",
          required: ["codigo", "nombre", "simbolo"],
          properties: {
            codigo: { bsonType: "string" },
            nombre: { bsonType: "string" },
            simbolo: { bsonType: "string" }
          }
        },
        tasas: {
          bsonType: "object",
          required: ["pf", "fci"],
          properties: {
            pf: { bsonType: "double", minimum: 0 },
            fci: { bsonType: "double", minimum: 0 }
          }
        },
        limites: {
          bsonType: "object",
          required: ["emisionDiaria", "recompensaMaxima", "recompensaDiaria"],
          properties: {
            emisionDiaria: { bsonType: "double", minimum: 0 },
            recompensaMaxima: { bsonType: "double", minimum: 0 },
            recompensaDiaria: { bsonType: "double", minimum: 0 }
          }
        },
        inflacion: {
          bsonType: "object",
          required: ["tasa", "activa"],
          properties: {
            tasa: { bsonType: "double", minimum: 0 },
            activa: { bsonType: "bool" }
          }
        },
        hiperinflacion: {
          bsonType: "object",
          required: ["tasa", "activa", "aceleracion"],
          properties: {
            tasa: { bsonType: "double", minimum: 0 },
            activa: { bsonType: "bool" },
            aceleracion: { bsonType: "double", minimum: 1 }
          }
        },
        deflacion: {
          bsonType: "object",
          required: ["tasa", "activa"],
          properties: {
            tasa: { bsonType: "double", minimum: 0 },
            activa: { bsonType: "bool" }
          }
        },
        rankingFactors: {
          bsonType: "array",
          minItems: 10,
          maxItems: 10,
          items: {
            bsonType: "double",
            minimum: 0
          }
        },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_saldos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "saldo", "moneda", "updatedAt"],
      properties: {
        usuarioId: { bsonType: "string" },
        saldo: { bsonType: "double", minimum: 0 },
        moneda: { bsonType: "string" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_recompensas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "tipo", "referenciaId", "nombre", "monto", "moneda", "activo", "updatedAt"],
      properties: {
        id: { bsonType: "string" },
        tipo: { bsonType: "string", enum: ["modulo", "tarea", "bonus"] },
        referenciaId: { bsonType: "string" },
        nombre: { bsonType: "string" },
        descripcion: { bsonType: ["string", "null"] },
        monto: { bsonType: "double", minimum: 0 },
        moneda: { bsonType: "string" },
        activo: { bsonType: "bool" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_transacciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "usuarioId", "tipo", "monto", "moneda", "motivo", "createdAt"],
      properties: {
        id: { bsonType: "string" },
        usuarioId: { bsonType: "string" },
        aulaId: { bsonType: ["string", "null"] },
        tipo: { bsonType: "string", enum: ["credito", "debito"] },
        monto: { bsonType: "double", minimum: 0 },
        moneda: { bsonType: "string" },
        motivo: { bsonType: "string" },
        referenciaId: { bsonType: ["string", "null"] },
        createdAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_modulos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["moduloId", "activo", "updatedAt"],
      properties: {
        moduloId: { bsonType: "string" },
        activo: { bsonType: "bool" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_eventos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id", "nombre", "tipo", "activo", "updatedAt"],
      properties: {
        id: { bsonType: "string" },
        nombre: { bsonType: "string" },
        tipo: {
          bsonType: "string",
          enum: ["inflacion", "deflacion", "bonus", "penalizacion", "otro"]
        },
        descripcion: { bsonType: ["string", "null"] },
        tasa: { bsonType: ["double", "null"], minimum: 0 },
        activo: { bsonType: "bool" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("economia_riesgo_cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["aulaId", "riesgoBase", "riesgoMercado", "riesgoCredito", "updatedAt"],
      properties: {
        aulaId: { bsonType: "string" },
        riesgoBase: { bsonType: "double", minimum: 0, maximum: 1 },
        riesgoMercado: { bsonType: "double", minimum: 0, maximum: 1 },
        riesgoCredito: { bsonType: "double", minimum: 0, maximum: 1 },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// ============================================================================
// INSERT SAMPLE DATA
// ============================================================================

const escuelaId = new ObjectId();
const adminId = new ObjectId();
const teacherId = new ObjectId();
const studentId = new ObjectId();
const parentId = new ObjectId();
const moduloId = new ObjectId();
const moduloGeografiaId = new ObjectId();
const moduloCartografiaId = new ObjectId();
const moduloGeografiaFisicaId = new ObjectId();
const moduloMapaClimaticoId = new ObjectId();
const moduloMapaPoblacionId = new ObjectId();
const moduloMapaEconomicoId = new ObjectId();
const claseId = new ObjectId();
const defaultPasswordHash =
  "pbkdf2$100000$ae30ab2431a9014a369007c291d0d5d9$1e72e69ff068d5b1108bdc60b4764690e454086422f77e9d658dd99e55f2deba9b8ca4564e1bb11a32277227005dd07a4510dfaa95188d8ea46999f50044bfe3";

db.escuelas.insertOne({
  _id: escuelaId,
  name: "Escuela Primaria Norte",
  code: "EPN-001",
  address: "Av. Siempre Viva 742",
  adminIds: [adminId],
  isDeleted: false,
  createdAt: new Date(),
});

db.usuarios.insertMany([
  {
    _id: adminId,
    username: "admin.escuela",
    email: "admin@escuela.com",
    fullName: "Ana López",
    role: "ADMIN",
    passwordHash: defaultPasswordHash,
    escuelaId: escuelaId,
    consents: { privacyConsent: true, termsAccepted: true, consentedAt: new Date() },
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    _id: teacherId,
    username: "profesor.jp",
    email: "jperez@escuela.com",
    fullName: "Juan Pérez",
    role: "TEACHER",
    passwordHash: defaultPasswordHash,
    escuelaId: escuelaId,
    teacherProfile: { managedClassIds: [claseId] },
    consents: { privacyConsent: true, termsAccepted: true, consentedAt: new Date() },
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    _id: studentId,
    username: "ana.garcia",
    email: "ana@familia.com",
    fullName: "Ana García",
    role: "USER",
    passwordHash: defaultPasswordHash,
    escuelaId: escuelaId,
    birthdate: new Date("2013-04-16"),
    consents: { privacyConsent: true, termsAccepted: true, consentedAt: new Date() },
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    _id: parentId,
    username: "maria.parent",
    email: "maria@familia.com",
    fullName: "María Pérez",
    role: "PARENT",
    passwordHash: defaultPasswordHash,
    escuelaId: escuelaId,
    parentProfile: { childrenIds: [studentId] },
    consents: { privacyConsent: true, termsAccepted: true, consentedAt: new Date() },
    isDeleted: false,
    createdAt: new Date(),
  }
]);

db.membresias_escuela.insertMany([
  {
    usuarioId: adminId,
    escuelaId: escuelaId,
    rol: "ADMIN",
    estado: "activa",
    fechaAlta: new Date(),
    createdAt: new Date(),
  },
  {
    usuarioId: teacherId,
    escuelaId: escuelaId,
    rol: "TEACHER",
    estado: "activa",
    fechaAlta: new Date(),
    createdAt: new Date(),
  },
  {
    usuarioId: studentId,
    escuelaId: escuelaId,
    rol: "STUDENT",
    estado: "activa",
    fechaAlta: new Date(),
    createdAt: new Date(),
  },
  {
    usuarioId: parentId,
    escuelaId: escuelaId,
    rol: "PARENT",
    estado: "activa",
    fechaAlta: new Date(),
    createdAt: new Date(),
  }
]);

db.modulos.insertOne({
  _id: moduloId,
  createdBy: teacherId,
  title: "Introducción a las fracciones",
  description: "Módulo con teoría y prácticas básicas sobre fracciones.",
  subject: "Matemáticas",
  category: "Aritmética básica",
  difficultyLevel: "Básico",
  durationMinutes: 25,
  visibility: "publico",
  theoryItems: [
    {
      id: "theory-1",
      title: "Video introductorio",
      type: "Video",
      detail: "Video de 5 minutos sobre fracciones."
    }
  ],
  quizzes: [
    {
      id: "quiz-basico",
      title: "Cuestionario principal",
      type: "evaluacion",
      visibility: "escuela"
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloGeografiaId,
  createdBy: teacherId,
  title: "Mapas físicos y políticos del mundo",
  description: "Exploración de mapas físicos, políticos y lectura de fronteras.",
  subject: "Geografía",
  category: "Geografía del Mundo",
  difficultyLevel: "Básico",
  durationMinutes: 30,
  visibility: "publico",
  theoryItems: [
    {
      id: "mapas-fisicos",
      title: "Mapas físicos: relieve y agua",
      type: "Guía",
      detail: "Identificación de ríos, cordilleras y llanuras en el mapa."
    },
    {
      id: "mapas-politicos",
      title: "Mapas políticos: países y capitales",
      type: "Actividad",
      detail: "Ubicar países, capitales y fronteras en mapas mudos."
    },
    {
      id: "fronteras-regiones",
      title: "Fronteras y regiones",
      type: "Lectura",
      detail: "Comprender límites naturales y políticos en distintas regiones."
    }
  ],
  quizzes: [
    {
      id: "quiz-mapamundi",
      title: "Mapa mudo: ríos y cordilleras",
      type: "evaluacion",
      visibility: "escuela"
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloCartografiaId,
  createdBy: teacherId,
  title: "Cartografía básica: coordenadas, escalas y proyecciones",
  description:
    "Módulo introductorio para interpretar coordenadas, calcular escalas y comparar proyecciones cartográficas.",
  subject: "Geografía",
  category: "Cartografía básica",
  difficultyLevel: "Básico",
  durationMinutes: 35,
  visibility: "publico",
  theoryItems: [
    {
      id: "latitud-longitud",
      title: "Latitud y longitud",
      type: "Lectura",
      detail:
        "Cómo ubicar lugares usando paralelos y meridianos, con ejemplos prácticos de coordenadas."
    },
    {
      id: "escalas-cartograficas",
      title: "Escalas: numérica y gráfica",
      type: "Guía",
      detail:
        "Conversión de distancias reales a escala y uso de la regla para medir mapas."
    },
    {
      id: "proyecciones-mercator-peters",
      title: "Comparativa de proyecciones (Mercator vs. Peters)",
      type: "Comparativa",
      detail:
        "Diferencias entre proyecciones conformes y equivalentes, con foco en distorsiones de área."
    }
  ],
  quizzes: [
    {
      id: "quiz-coordenadas-escalas",
      title: "Ubicación por coordenadas y cálculo de escalas",
      type: "evaluacion",
      visibility: "escuela"
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloGeografiaFisicaId,
  createdBy: teacherId,
  title: "Geografía física: relieve, agua y tectónica",
  description:
    "Módulo para interpretar el relieve terrestre, perfiles topográficos y procesos geológicos.",
  subject: "Geografía",
  category: "Geografía física",
  difficultyLevel: "Intermedio",
  durationMinutes: 40,
  visibility: "publico",
  theoryItems: [
    {
      id: "relieve-formas",
      title: "Relieve: montañas, llanuras y mesetas",
      type: "Guía",
      detail:
        "Identificación de formas del relieve y su relación con la altitud y pendiente."
    },
    {
      id: "curvas-nivel",
      title: "Curvas de nivel y lectura de mapas",
      type: "Lectura",
      detail:
        "Cómo interpretar la separación de curvas para reconocer pendientes y valles."
    },
    {
      id: "perfiles-topograficos",
      title: "Perfiles topográficos",
      type: "Actividad",
      detail:
        "Construcción y lectura de perfiles altimétricos a partir de mapas."
    },
    {
      id: "ciclo-agua",
      title: "Ciclo del agua y modelado del paisaje",
      type: "Lectura",
      detail:
        "Procesos de evaporación, condensación, precipitación y escorrentía."
    },
    {
      id: "tectonica-placas",
      title: "Tectónica de placas",
      type: "Guía",
      detail:
        "Límites de placas, formación de montañas, volcanismo y sismos."
    }
  ],
  quizzes: [
    {
      id: "quiz-perfiles-procesos",
      title: "Interpretación de perfiles altimétricos y procesos geológicos",
      type: "evaluacion",
      visibility: "escuela",
      questions: [
        {
          id: "q-perfil-1",
          prompt:
            "En el perfil altimétrico, ¿qué tramo indica una pendiente más pronunciada?",
          focus: "Perfil topográfico"
        },
        {
          id: "q-geologia-1",
          prompt:
            "¿Qué proceso geológico explica la presencia de una cordillera joven?",
          focus: "Tectónica de placas"
        }
      ]
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloMapaClimaticoId,
  createdBy: teacherId,
  title: "Mapa climático",
  description: "Interpretación de mapas climáticos y climogramas para analizar patrones del clima.",
  subject: "Geografía",
  category: "Clima y ambiente",
  difficultyLevel: "Básico",
  durationMinutes: 30,
  visibility: "publico",
  theoryItems: [
    {
      id: "zonas-climaticas",
      title: "Zonas climáticas del mundo",
      type: "Guía",
      detail:
        "Identificación de climas cálidos, templados y fríos en mapas temáticos. Recursos: https://climate.nasa.gov/ (mapas globales)."
    },
    {
      id: "climograma-ejemplo",
      title: "Climograma de ejemplo",
      type: "Actividad",
      detail:
        "Lectura de un climograma con temperatura y precipitación mensual. Recursos: https://es.wikipedia.org/wiki/Climograma (ejemplo explicado)."
    },
    {
      id: "interpretacion-precipitaciones",
      title: "Interpretación de precipitaciones y temperaturas",
      type: "Lectura",
      detail:
        "Comparar estaciones húmedas y secas a partir de gráficos climáticos."
    }
  ],
  quizzes: [
    {
      id: "quiz-climatico",
      title: "Interpretación de mapa climático y climograma",
      type: "evaluacion",
      visibility: "escuela",
      questions: [
        {
          id: "q-clima-1",
          prompt:
            "Observa el mapa climático: ¿qué tipo de clima predomina en la franja ecuatorial?",
          focus: "Mapa climático"
        },
        {
          id: "q-clima-2",
          prompt:
            "En el climograma, ¿en qué meses se registra la mayor precipitación?",
          focus: "Climograma"
        }
      ]
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloMapaPoblacionId,
  createdBy: teacherId,
  title: "Mapa de población",
  description:
    "Análisis de mapas de densidad poblacional, coropletas y flujos migratorios.",
  subject: "Geografía",
  category: "Población y migraciones",
  difficultyLevel: "Intermedio",
  durationMinutes: 35,
  visibility: "publico",
  theoryItems: [
    {
      id: "coropletas-poblacion",
      title: "Coropletas de densidad poblacional",
      type: "Guía",
      detail:
        "Cómo leer escalas de color para densidad y distribución. Recursos: https://es.wikipedia.org/wiki/Mapa_coropl%C3%A9tico."
    },
    {
      id: "flujos-migratorios",
      title: "Flujos migratorios",
      type: "Lectura",
      detail:
        "Interpretación de flechas y magnitudes de migración. Recursos: https://www.un.org/es/global-issues/migration."
    },
    {
      id: "pirámides-poblacion",
      title: "Pirámides de población",
      type: "Actividad",
      detail:
        "Lectura de gráficos de estructura por edades y comparación regional."
    }
  ],
  quizzes: [
    {
      id: "quiz-poblacion",
      title: "Interpretación de coropletas y flujos migratorios",
      type: "evaluacion",
      visibility: "escuela",
      questions: [
        {
          id: "q-pob-1",
          prompt:
            "En la coropleta, ¿qué región presenta la mayor densidad poblacional?",
          focus: "Coropleta"
        },
        {
          id: "q-pob-2",
          prompt:
            "Según el mapa de flujos, ¿cuál es el principal destino migratorio?",
          focus: "Flujos migratorios"
        }
      ]
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.modulos.insertOne({
  _id: moduloMapaEconomicoId,
  createdBy: teacherId,
  title: "Mapa económico",
  description:
    "Lectura de mapas de actividades económicas, PIB y redes de comercio.",
  subject: "Geografía",
  category: "Economía y desarrollo",
  difficultyLevel: "Intermedio",
  durationMinutes: 35,
  visibility: "publico",
  theoryItems: [
    {
      id: "mapa-pib",
      title: "Mapa de PIB per cápita",
      type: "Guía",
      detail:
        "Comparación de niveles de desarrollo por regiones. Recursos: https://data.worldbank.org/ (indicadores económicos)."
    },
    {
      id: "mapa-actividades",
      title: "Actividades económicas principales",
      type: "Lectura",
      detail:
        "Interpretación de mapas de agricultura, industria y servicios."
    },
    {
      id: "redes-comercio",
      title: "Redes y rutas de comercio",
      type: "Actividad",
      detail:
        "Análisis de mapas de intercambio y rutas marítimas. Recursos: https://unctad.org/topic/transport-and-trade-logistics."
    }
  ],
  quizzes: [
    {
      id: "quiz-economico",
      title: "Interpretación de mapas económicos y gráficos",
      type: "evaluacion",
      visibility: "escuela",
      questions: [
        {
          id: "q-eco-1",
          prompt:
            "En el mapa económico, ¿qué región concentra la mayor actividad industrial?",
          focus: "Mapa económico"
        },
        {
          id: "q-eco-2",
          prompt:
            "Según el gráfico de PIB per cápita, ¿qué tendencia se observa entre región A y B?",
          focus: "Gráfico comparativo"
        }
      ]
    }
  ],
  scoringSystem: "Sistema A: 1-10 con aprobación 6",
  progress: [],
  isDeleted: false,
  createdAt: new Date(),
});

db.clases.insertOne({
  _id: claseId,
  name: "5º A",
  grade: "5º Primaria",
  code: "MAT5A-2024",
  escuelaId: escuelaId,
  teacherIds: [teacherId],
  adminIds: [teacherId],
  studentIds: [studentId],
  modules: [{ moduleId: moduloId, assignedAt: new Date(), required: true }],
  publications: [
    {
      authorId: teacherId,
      title: "Nuevo módulo disponible",
      body: "Ya pueden comenzar el módulo de fracciones.",
      links: [{ label: "Ver módulo", href: "#" }],
      publishedAt: new Date(),
      isPinned: true
    }
  ],
  isDeleted: false,
  createdAt: new Date(),
});

db.mensajes.insertOne({
  studentId,
  parentId,
  classId: claseId,
  lastMessageFrom: "parent",
  lastMessagePreview: "¿Cuándo es la próxima evaluación?",
  unreadForAdmin: true,
  messages: [
    {
      senderId: parentId,
      body: "¿Cuándo es la próxima evaluación?",
      sentAt: new Date()
    }
  ],
  createdAt: new Date(),
});

db.transferencias.insertOne({
  studentId,
  fromSchoolId: new ObjectId(),
  toSchoolId: escuelaId,
  status: "pending",
  createdAt: new Date(),
});

const billeteraId = new ObjectId();
db.billeteras.insertOne({
  _id: billeteraId,
  usuarioId: studentId,
  saldo: 1500,
  moneda: "ARS",
  updatedAt: new Date(),
});

db.movimientos_billetera.insertOne({
  billeteraId,
  tipo: "credito",
  monto: 1500,
  motivo: "Inicio de cuenta",
  origen: "registro",
  fecha: new Date(),
});

db.cursos.insertOne({
  name: "Curso de Matemáticas",
  description: "Curso completo de matemáticas para primaria.",
  price: 199.99,
  durationHours: 40,
  type: "privado",
  teacherId,
  moduleIds: [moduloId],
  enrollments: [
    {
      userId: studentId,
      status: "en_progreso",
      progress: 45,
      enrolledAt: new Date(),
    }
  ],
  isDeleted: false,
  createdAt: new Date(),
});

print("Database setup completed successfully!");
print("Collections created: usuarios, escuelas, membresias_escuela, clases, modulos, cursos, mensajes, transferencias, billeteras, movimientos_billetera");
print("Indexes created for optimal performance");
print("Sample data inserted");
