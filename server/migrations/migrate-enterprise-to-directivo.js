// MongoDB migration: replace ENTERPRISE role with DIRECTIVO.
// Run in mongosh/Compass against the target database.
// Example:
//   mongosh "mongodb://localhost:27017/educational_platform" --file migrate-enterprise-to-directivo.js

const now = new Date();

const result = db.usuarios.updateMany(
  { role: "ENTERPRISE" },
  { $set: { role: "DIRECTIVO", updatedAt: now } }
);

print(`Updated ${result.modifiedCount} usuarios from ENTERPRISE to DIRECTIVO.`);
