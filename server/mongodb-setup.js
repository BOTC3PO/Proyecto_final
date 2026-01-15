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
              visibility: { bsonType: "string", enum: ["publico", "escuela"] }
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
// INSERT SAMPLE DATA
// ============================================================================

const escuelaId = new ObjectId();
const adminId = new ObjectId();
const teacherId = new ObjectId();
const studentId = new ObjectId();
const parentId = new ObjectId();
const moduloId = new ObjectId();
const claseId = new ObjectId();
const defaultPasswordHash =
  "pbkdf2$100000$06a567ecaa84537122fd4f19536909fa$d29076dfa83750fa626a1fd49a90e76a49f3f2683743e8d5864e53105a85d37ab4fc9db9a4bc6c1c6004afd08d19c337f0f091cac2dc2598b1bcc5ee5b95654f";

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
