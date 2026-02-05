// MongoDB validation script for vinculos_padre_hijo.
// Run in mongosh/Compass against the target database.
// Example:
//   mongosh "mongodb://localhost:27017/educational_platform" --file validate-existing-data.js

const allowedEstados = ["pendiente", "aprobado", "revocado"];

const daysBetween = (start, end) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

print("Applying defaults for timestamps...");
const defaultsResult = db.vinculos_padre_hijo.updateMany(
  {},
  [
    {
      $set: {
        solicitadoAt: { $ifNull: ["$solicitadoAt", "$createdAt", "$$NOW"] },
        createdAt: { $ifNull: ["$createdAt", "$solicitadoAt", "$$NOW"] },
        updatedAt: { $ifNull: ["$updatedAt", "$createdAt", "$solicitadoAt", "$$NOW"] },
        aprobadoAt: {
          $cond: [
            {
              $and: [
                { $eq: ["$estado", "aprobado"] },
                { $eq: [{ $ifNull: ["$aprobadoAt", null] }, null] }
              ]
            },
            { $ifNull: ["$aprobadoAt", "$updatedAt", "$$NOW"] },
            "$aprobadoAt"
          ]
        }
      }
    }
  ]
);
print(`Defaults applied. Matched: ${defaultsResult.matchedCount}, Modified: ${defaultsResult.modifiedCount}`);

print("Validating vinculos_padre_hijo...");
const invalid = {
  missingParent: [],
  missingChild: [],
  invalidEstado: [],
  invalidNonMinor: []
};

const cursor = db.vinculos_padre_hijo.find({});
while (cursor.hasNext()) {
  const vinculo = cursor.next();
  const parent = db.usuarios.findOne(
    { _id: vinculo.parentId },
    { projection: { isDeleted: 1 } }
  );
  const child = db.usuarios.findOne(
    { _id: vinculo.childId },
    { projection: { isDeleted: 1, birthdate: 1 } }
  );

  if (!parent || parent.isDeleted === true) {
    invalid.missingParent.push({ _id: vinculo._id, parentId: vinculo.parentId });
  }
  if (!child || child.isDeleted === true) {
    invalid.missingChild.push({ _id: vinculo._id, childId: vinculo.childId });
  }

  if (!allowedEstados.includes(vinculo.estado)) {
    invalid.invalidEstado.push({ _id: vinculo._id, estado: vinculo.estado });
  }

  if (child && child.isDeleted !== true) {
    const menor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
    if (!menor && vinculo.estado !== "aprobado") {
      invalid.invalidNonMinor.push({ _id: vinculo._id, estado: vinculo.estado, childId: vinculo.childId });
    }
  }
}

print(`Invalid parent links: ${invalid.missingParent.length}`);
if (invalid.missingParent.length) printjson(invalid.missingParent);
print(`Invalid child links: ${invalid.missingChild.length}`);
if (invalid.missingChild.length) printjson(invalid.missingChild);
print(`Invalid estado values: ${invalid.invalidEstado.length}`);
if (invalid.invalidEstado.length) printjson(invalid.invalidEstado);
print(`Invalid estado for non-minor students: ${invalid.invalidNonMinor.length}`);
if (invalid.invalidNonMinor.length) printjson(invalid.invalidNonMinor);

print("Checking max 2 active parents per child...");
const exceeded = db.vinculos_padre_hijo
  .aggregate([
    { $match: { estado: { $ne: "revocado" } } },
    {
      $group: {
        _id: "$childId",
        activeCount: { $sum: 1 },
        parentIds: { $addToSet: "$parentId" }
      }
    },
    { $match: { activeCount: { $gt: 2 } } }
  ])
  .toArray();

print(`Children exceeding max parents: ${exceeded.length}`);
if (exceeded.length) printjson(exceeded);
