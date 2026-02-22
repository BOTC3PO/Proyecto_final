# Inventario MongoDB (API)

Generado: 2026-02-22T05:51:30.807Z

## Resumen general

- Archivos analizados: **59**
- Colecciones detectadas: **62**

## Colecciones

### accesos
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - count (src/routes/estadisticas.ts:118) → participacionMatch
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### actividades
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/aula-feed.ts:119) → { aulaId: context.classroomId, isDeleted: { $ne: true } }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### asistencias
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/profesor.ts:254) → buildTeacherFilter(teacherId, ["teacherId", "createdBy"])
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### audit_logs
- Operaciones lectura: 0
- Operaciones escritura: 1
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/lib/audit-log.ts:29) → entry
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### auditoria_aulas
- Operaciones lectura: 1
- Operaciones escritura: 3
- Total operaciones: 4
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/aulas.ts:187) → filter
  - insertOne (src/routes/aulas.ts:306) → auditEntry
  - insertOne (src/routes/aulas.ts:383) → auditEntry

### aulas
- Operaciones lectura: 40
- Operaciones escritura: 7
- Total operaciones: 47
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/aula-feed.ts:47) → { id: classroomId, isDeleted: { $ne: true } }
  - find (src/routes/aulas.ts:130) → query
  - count (src/routes/aulas.ts:236) → activeClassroomFilter

### billeteras
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: usuarioId
- Ejemplos:
  - find (src/routes/economia.ts:1708) → {}
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### calificaciones
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/profesor.ts:304) → buildTeacherFilter(teacherId, ["teacherId", "createdBy"])
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### clases
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/usuarios.ts:177) → {
      $and: [
        { $or: adminClassCriteria },
        {
          members: {
            $elemMatch: {
              userId: { $in: memberUserIds },
              roleInClass: { $in: ["TEACHER", "STUDENT"] }
            }
          }
        }
      ]
    }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### comentarios
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/publicaciones.ts:167) → { aulaId: req.params.id, publicacionId: req.params.pubId, isDeleted: { $ne: true } }
  - insertOne (src/routes/publicaciones.ts:222) → comment
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### config_modulos
- Operaciones lectura: 1
- Operaciones escritura: 3
- Total operaciones: 4
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/configuracion.ts:57) → { id }
  - insertOne (src/routes/configuracion.ts:70) → fallback
  - updateOne (src/routes/configuracion.ts:81) → { id }

### cursos
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/profesor.ts:279) → buildTeacherFilter(teacherId, ["teacherId", "createdBy"])
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### economia_auditoria
- Operaciones lectura: 0
- Operaciones escritura: 1
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/routes/economia.ts:166) → {
    actor: payload.actor,
    timestamp: new Date().toISOString(),
    motivo: payload.motivo,
    verificacion: payload.verificacion
  }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### economia_compras
- Operaciones lectura: 0
- Operaciones escritura: 1
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/routes/economia.ts:1166) → compra
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### economia_config
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/economia.ts:336) → { id: "general" }
  - updateOne (src/routes/economia.ts:401) → { id: "general" }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### economia_eventos
- Operaciones lectura: 2
- Operaciones escritura: 4
- Total operaciones: 6
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:1555) → { isDeleted: { $ne: true } }
  - find (src/routes/economia.ts:1671) → filtro
  - insertOne (src/routes/economia.ts:1572) → {
      ...parsed,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null
    }

### economia_examen_pujas
- Operaciones lectura: 4
- Operaciones escritura: 3
- Total operaciones: 7
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:1293) → filtro
  - aggregate (src/routes/economia.ts:1320) → [
        {
          $match: {
            examenId: req.params.id,
            usuarioId: parsed.usuarioId,
            estado: { $in: ["pendiente", "aceptada"] }
          }
        },
        { $group: { _id: null, total: { $sum: "$puntos" } } }
      ]
  - find (src/routes/economia.ts:1400) → { examenId: req.params.id, estado: "pendiente" }

### economia_examen_puntos
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/economia.ts:1370) → { usuarioId }
  - updateOne (src/routes/economia.ts:1457) → { usuarioId: puja.usuarioId }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### economia_examenes
- Operaciones lectura: 5
- Operaciones escritura: 3
- Total operaciones: 8
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:1219) → filtro
  - findOne (src/routes/economia.ts:1270) → { id: req.params.id }
  - findOne (src/routes/economia.ts:1305) → { id: req.params.id }

### economia_intercambios
- Operaciones lectura: 7
- Operaciones escritura: 4
- Total operaciones: 11
- Campos indexados: no encontrado
- Ejemplos:
  - count (src/routes/economia.ts:874) → {
      creadorId: payload.creadorId,
      createdAt: { $gte: rangoDia.desde, $lte: rangoDia.hasta }
    }
  - findOne (src/routes/economia.ts:881) → { creadorId: payload.creadorId }
  - count (src/routes/economia.ts:893) → {
      creadorId: payload.creadorId,
      createdAt: { $gte: inicioCancelaciones.toISOString() }
    }

### economia_modulos
- Operaciones lectura: 2
- Operaciones escritura: 1
- Total operaciones: 3
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:261) → { moduloId: { $in: macroIds } }
  - find (src/routes/economia.ts:1191) → filtro
  - updateOne (src/routes/economia.ts:1205) → { moduloId: req.params.moduloId }

### economia_recompensas
- Operaciones lectura: 2
- Operaciones escritura: 5
- Total operaciones: 7
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:418) → filtro
  - find (src/routes/economia.ts:1634) → filtro
  - insertOne (src/routes/economia.ts:452) → {
        ...parsed,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null
      }

### economia_riesgo_cursos
- Operaciones lectura: 1
- Operaciones escritura: 2
- Total operaciones: 3
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/economia.ts:1852) → { aulaId }
  - updateOne (src/routes/economia.ts:1876) → { aulaId: req.params.aulaId }
  - updateOne (src/routes/economia.ts:1900) → { aulaId: req.params.aulaId }

### economia_saldos
- Operaciones lectura: 11
- Operaciones escritura: 7
- Total operaciones: 18
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/economia.ts:543) → { usuarioId: usuarioObjectId }
  - findOne (src/routes/economia.ts:639) → {
      usuarioId: usuarioObjectId
    }
  - findOne (src/routes/economia.ts:794) → {
        usuarioId: usuarioObjectId
      }

### economia_transacciones
- Operaciones lectura: 9
- Operaciones escritura: 4
- Total operaciones: 13
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:683) → { usuarioId }
  - aggregate (src/routes/economia.ts:763) → [
              { $match: baseMatch },
              { $group: { _id: null, total: { $sum: "$monto" } } }
            ]
  - aggregate (src/routes/economia.ts:776) → [
              {
                $match: {
                  ...baseMatch,
                  usuarioId: parsed.usuarioId
                }
              },
              { $group: { _id: null, total: { $sum: "$monto" } } }
            ]

### encuestas
- Operaciones lectura: 7
- Operaciones escritura: 5
- Total operaciones: 12
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/encuestas.ts:34) → { classroomId: aulaId }
  - findOne (src/routes/encuestas.ts:48) → { id: req.params.id, classroomId: aulaId }
  - findOne (src/routes/encuestas.ts:82) → { id: req.params.id }

### encuestas_respuestas
- Operaciones lectura: 3
- Operaciones escritura: 3
- Total operaciones: 6
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/encuestas.ts:165) → { surveyId: survey.id, classroomId: aulaId, usuarioId }
  - find (src/routes/encuestas.ts:265) → { surveyId: survey.id, classroomId: aulaId }
  - count (src/routes/estadisticas.ts:120) → participacionMatch

### enterprise_billing_cycles
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/payments.ts:47) → billingCycleObjectId ? { _id: billingCycleObjectId } : { _id: billingCycleId }
  - insertOne (src/routes/enterprise.ts:364) → billingCycle
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### enterprise_contratos
- Operaciones lectura: 2
- Operaciones escritura: 0
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/enterprise.ts:315) → { schoolId }
  - find (src/routes/enterprise.ts:336) → { schoolId }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### enterprise_reportes
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/enterprise.ts:377) → { schoolId }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### entregas
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - count (src/routes/estadisticas.ts:100) → entregasMatch
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### escuelas
- Operaciones lectura: 11
- Operaciones escritura: 4
- Total operaciones: 15
- Campos indexados: code
- Ejemplos:
  - findOne (src/routes/auth.ts:128) → { code: parsed.schoolCode }
  - findOne (src/routes/auth.ts:140) → { _id: escuelaId }
  - findOne (src/routes/enterprise.ts:333) → { _id: escuelaObjectId }

### eventos_reportes_padres
- Operaciones lectura: 0
- Operaciones escritura: 2
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/routes/reportes.ts:80) → {
    parentId: params.parentId,
    childId: params.childId,
    inviteId: params.inviteId,
    overrideApprovedBy: params.overrideApprovedBy,
    requestedBy: params.requestedBy,
    createdAt: new Date()
  }
  - insertOne (src/routes/reportes.ts:97) → {
    parentId: params.parentId,
    childId: params.childId,
    tipo: params.tipo,
    acceso: params.acceso,
    createdAt: new Date()
  }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### eventos_suscripciones
- Operaciones lectura: 0
- Operaciones escritura: 1
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/routes/escuelas.ts:109) → {
        schoolId: escuela._id?.toString?.() ?? id,
        previousPlan: escuela.plan ?? null,
        newPlan: parsed.plan ?? escuela.plan ?? null,
        previousStatus: escuela.subscriptionStatus ?? null,
        newStatus: parsed.subscriptionStatus ?? escuela.subscriptionStatus ?? null,
        previousPricePerStudent:
          typeof escuela.pricePerStudent === "number" ? escuela.pricePerStudent : null,
        newPricePerStudent:
          typeof parsed.pricePerStudent === "number"
            ? parsed.pricePerStudent
            : typeof escuela.pricePerStudent === "number"
              ? escuela.pricePerStudent
              : null,
        actorId: getRequesterId(req),
        createdAt: new Date().toISOString()
      }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### foros_respuestas
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - count (src/routes/estadisticas.ts:119) → participacionMatch
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### invoices
- Operaciones lectura: 3
- Operaciones escritura: 4
- Total operaciones: 7
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/payments.ts:110) → { invoiceId: payload.invoiceId }
  - find (src/routes/payments.ts:151) → invoiceFilter
  - aggregate (src/lib/billing/delinquency.ts:28) → [
      { $match: { status: { $ne: "PAID" } } },
      { $group: { _id: "$schoolId", oldestInvoiceAt: { $min: "$createdAt" } } }
    ]

### libros
- Operaciones lectura: 3
- Operaciones escritura: 1
- Total operaciones: 4
- Campos indexados: id, title
- Ejemplos:
  - count (src/routes/libros.ts:81) → filter
  - find (src/routes/libros.ts:84) → filter
  - findOne (src/routes/libros.ts:108) → { id: req.params.id }

### membresias
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/lib/governance.ts:72) → {
    userId: actorId,
    targetType,
    targetId,
    role: { $in: ["owner", "admin"] }
  }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### membresias_escuela
- Operaciones lectura: 3
- Operaciones escritura: 1
- Total operaciones: 4
- Campos indexados: escuelaId, usuarioId
- Ejemplos:
  - find (src/routes/usuarios.ts:203) → { usuarioId: objectId, estado: { $ne: "revocada" } }
  - findOne (src/routes/usuarios.ts:214) → {
    usuarioId: requesterId,
    escuelaId: escuelaId ? escuelaId : { $in: targetEscuelaIds },
    estado: { $ne: "revocada" }
  }
  - findOne (src/routes/usuarios.ts:221) → {
      usuarioId: objectId,
      escuelaId,
      estado: { $ne: "revocada" }
    }

### mensajes_reportados
- Operaciones lectura: 2
- Operaciones escritura: 0
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/enterprise.ts:296) → { schoolId }
  - find (src/routes/moderacion.ts:34) → {}
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### moderacion_eventos
- Operaciones lectura: 0
- Operaciones escritura: 4
- Total operaciones: 4
- Campos indexados: no encontrado
- Ejemplos:
  - insertOne (src/routes/moderacion.ts:69) → event
  - insertOne (src/routes/moderacion.ts:105) → event
  - insertOne (src/routes/publicaciones.ts:123) → {
      tipo: "publicacion_creada",
      publicacionId: publication.id,
      aulaId: publication.aulaId,
      usuarioId: requesterId,
      createdAt: now
    }

### modulos
- Operaciones lectura: 18
- Operaciones escritura: 4
- Total operaciones: 22
- Campos indexados: id
- Ejemplos:
  - count (src/routes/aulas.ts:78) → {
      aulaId: classroom.id,
      isDeleted: { $ne: true }
    }
  - findOne (src/routes/economia.ts:119) → { id: referenciaId }
  - findOne (src/routes/economia.ts:126) → {
      $or: [{ "quizzes.id": referenciaId }, { "levels.quizzes.id": referenciaId }]
    }

### movimientos_billetera
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/economia.ts:1730) → {}
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### notas_temas
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - aggregate (src/routes/estadisticas.ts:109) → [
      { $match: buildMatch(filters, "createdAt") },
      { $group: { _id: "$tema", promedio: { $avg: "$score" } } },
      { $sort: { promedio: -1 } }
    ]
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### pages
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/pages.ts:30) → { _id: objectId }
  - insertOne (src/routes/pages.ts:15) → doc
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### parent_invites
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/reportes.ts:54) → {
    parentId,
    childId,
    estado: { $ne: "revocada" }
  }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### participacion
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - aggregate (src/routes/estadisticas.ts:122) → [
      { $match: participacionMatch },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: { $ifNull: ["$createdAt", new Date()] }
            }
          },
          interacciones: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } },
      { $limit: 8 }
    ]
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### progreso_modulos
- Operaciones lectura: 9
- Operaciones escritura: 2
- Total operaciones: 11
- Campos indexados: no encontrado
- Ejemplos:
  - aggregate (src/routes/estadisticas.ts:71) → [
      { $match: progresoMatch },
      {
        $group: {
          _id: "$moduloId",
          completadas: {
            $sum: { $cond: [{ $eq: ["$status", "completado"] }, 1, 0] }
          },
          pendientes: {
            $sum: { $cond: [{ $ne: ["$status", "completado"] }, 1, 0] }
          },
          tiempoPromedioMin: { $avg: { $ifNull: ["$timeSpentMinutes", 0] } },
          scorePromedio: { $avg: { $ifNull: ["$score", 0] } },
          scoreMax: { $max: { $ifNull: ["$score", 0] } },
          scoreMin: { $min: { $ifNull: ["$score", 0] } }
        }
      },
      { $sort: { completadas: -1 } }
    ]
  - find (src/routes/progreso.ts:132) → progressFilter
  - find (src/routes/progreso.ts:189) → { usuarioId: { $in: childIdStrings } }

### prompts
- Operaciones lectura: 3
- Operaciones escritura: 5
- Total operaciones: 8
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/governance.ts:42) → { targetType, targetId, status: "ACTIVE" }
  - findOne (src/lib/governance.ts:166) → { id: promptId }
  - findOne (src/lib/governance.ts:167) → {
          targetType: proposal.targetType,
          targetId: proposal.targetId,
          status: "ACTIVE"
        }

### proposals
- Operaciones lectura: 2
- Operaciones escritura: 2
- Total operaciones: 4
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/governance.ts:106) → { id: proposalId }
  - findOne (src/routes/governance.ts:138) → { id: proposalId }
  - insertOne (src/routes/governance.ts:95) → proposal

### publicaciones
- Operaciones lectura: 4
- Operaciones escritura: 1
- Total operaciones: 5
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/aula-feed.ts:81) → { aulaId: context.classroomId, isDeleted: { $ne: true } }
  - find (src/routes/publicaciones.ts:72) → { aulaId: req.params.id, isDeleted: { $ne: true } }
  - findOne (src/routes/publicaciones.ts:161) → {
      id: req.params.pubId,
      aulaId: req.params.id,
      isDeleted: { $ne: true }
    }

### quiz_attempts
- Operaciones lectura: 4
- Operaciones escritura: 2
- Total operaciones: 6
- Campos indexados: moduleId, quizId, status, userId
- Ejemplos:
  - aggregate (src/routes/estadisticas.ts:241) → [
      ...basePipeline,
      {
        $group: {
          _id: null,
          intentos: { $sum: 1 },
          intentosEntregados: {
            $sum: { $cond: [{ $in: ["$status", ["submitted", "graded"]] }, 1, 0] }
          },
          promedioScore: { $avg: { $ifNull: ["$score", 0] } },
          promedioMaxScore: { $avg: { $ifNull: ["$maxScore", 0] } }
        }
      }
    ]
  - aggregate (src/routes/estadisticas.ts:259) → [
      ...basePipeline,
      {
        $group: {
          _id: "$quizId",
          intentos: { $sum: 1 },
          promedioScore: { $avg: { $ifNull: ["$score", 0] } },
          promedioMaxScore: { $avg: { $ifNull: ["$maxScore", 0] } }
        }
      },
      { $sort: { intentos: -1 } }
    ]
  - findOne (src/routes/quiz-attempts.ts:300) → { _id: attemptObjectId, userId }

### quiz_versions
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: quizId, version
- Ejemplos:
  - findOne (src/routes/quiz-attempts.ts:157) → { quizId, version: versionToUse }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### quizzes
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: id
- Ejemplos:
  - findOne (src/routes/quiz-attempts.ts:149) → { id: quizId }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### ranking
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/aula-feed.ts:100) → { aulaId: context.classroomId, isDeleted: { $ne: true } }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### receipts
- Operaciones lectura: 2
- Operaciones escritura: 1
- Total operaciones: 3
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/payments.ts:160) → { invoiceId: { $in: invoiceIds } }
  - findOne (src/lib/payments/index.ts:104) → { invoiceId: invoice.invoiceId }
  - insertOne (src/lib/payments/index.ts:121) → receipt

### resource_links
- Operaciones lectura: 1
- Operaciones escritura: 4
- Total operaciones: 5
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/resource-links.ts:60) → filter
  - insertOne (src/routes/resource-links.ts:105) → parsed
  - updateOne (src/routes/resource-links.ts:152) → { id: resourceLinkId, aulaId }

### system_config
- Operaciones lectura: 0
- Operaciones escritura: 2
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - updateOne (src/lib/governance.ts:263) → { id: proposal.targetId || "critical" }
  - updateOne (src/lib/governance.ts:277) → { id: proposal.targetId || "critical" }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### tareas
- Operaciones lectura: 1
- Operaciones escritura: 0
- Total operaciones: 1
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/economia.ts:134) → buildReferenciaMatch(referenciaId)
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

### usuarios
- Operaciones lectura: 24
- Operaciones escritura: 8
- Total operaciones: 32
- Campos indexados: email, username
- Ejemplos:
  - findOne (src/routes/aulas.ts:463) → { _id: teacherObjectId, isDeleted: { $ne: true } }
  - findOne (src/routes/auth.ts:55) → { role: "ADMIN" }
  - findOne (src/routes/auth.ts:114) → {
      email: parsed.email,
      isDeleted: { $ne: true }
    }

### vinculos_padre_hijo
- Operaciones lectura: 10
- Operaciones escritura: 6
- Total operaciones: 16
- Campos indexados: no encontrado
- Ejemplos:
  - findOne (src/routes/padres.ts:58) → {
    parentId: params.parentId,
    childId: params.childId,
    estado: { $ne: "revocado" }
  }
  - findOne (src/routes/padres.ts:84) → { parentId, childId }
  - count (src/routes/padres.ts:88) → {
      childId,
      estado: { $ne: "revocado" },
      ...(existing ? { _id: { $ne: existing._id } } : {})
    }

### votes
- Operaciones lectura: 1
- Operaciones escritura: 1
- Total operaciones: 2
- Campos indexados: no encontrado
- Ejemplos:
  - find (src/routes/governance.ts:162) → { proposalId }
  - updateOne (src/routes/governance.ts:122) → { proposalId, voterId: vote.voterId }
- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).

## Nota

Este inventario se construye por análisis estático de TypeScript. Puede no resolver colecciones dinámicas o alias complejos.
