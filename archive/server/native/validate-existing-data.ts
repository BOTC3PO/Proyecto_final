import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { normalizeClassroomStatus } from "../../api/src/schema/aula";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME ?? "educational_platform";
const DEFAULT_ACCESS_TYPE = "privada";
const DEFAULT_STATUS = "ACTIVE";

type ReportEntry = {
  id?: string;
  name?: string;
  issues: string[];
  fixes: string[];
};

const buildEntry = (aula: Record<string, unknown>, issues: string[], fixes: string[]): ReportEntry => ({
  id: typeof aula.id === "string" ? aula.id : undefined,
  name: typeof aula.name === "string" ? aula.name : undefined,
  issues,
  fixes
});

const main = async () => {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const aulas = db.collection("aulas");

  const report: ReportEntry[] = [];
  let total = 0;
  let updated = 0;
  let withIssues = 0;

  for await (const aula of aulas.find({})) {
    total += 1;
    const issues: string[] = [];
    const fixes: string[] = [];
    const updateSet: Record<string, unknown> = {};
    const updateUnset: Record<string, ""> = {};

    const normalizedStatus = normalizeClassroomStatus(aula.status);
    if (aula.status == null || (typeof aula.status === "string" && aula.status.trim() === "")) {
      updateSet.status = DEFAULT_STATUS;
      fixes.push(`status defaulted to ${DEFAULT_STATUS}`);
    } else if (!normalizedStatus) {
      issues.push(`invalid status: ${String(aula.status)}`);
    } else if (aula.status !== normalizedStatus) {
      updateSet.status = normalizedStatus;
      fixes.push(`status normalized to ${normalizedStatus}`);
    }

    if (!aula.accessType) {
      updateSet.accessType = DEFAULT_ACCESS_TYPE;
      fixes.push(`accessType defaulted to ${DEFAULT_ACCESS_TYPE}`);
    }

    const nowIso = new Date().toISOString();
    if (!aula.createdAt) {
      updateSet.createdAt = nowIso;
      fixes.push("createdAt defaulted");
    }
    if (!aula.updatedAt) {
      updateSet.updatedAt = nowIso;
      fixes.push("updatedAt defaulted");
    }

    const effectiveStatus =
      (updateSet.status as string | undefined) ?? normalizedStatus ?? (aula.status as string | undefined);
    const normalizedEffective = normalizeClassroomStatus(effectiveStatus);
    if (normalizedEffective && normalizedEffective !== "ACTIVE" && aula.classCode) {
      updateUnset.classCode = "";
      fixes.push("classCode removed for non-ACTIVE status");
    }

    if (!Array.isArray(aula.members) || aula.members.length === 0) {
      issues.push("members missing or empty");
    } else {
      const members = aula.members as Array<Record<string, unknown>>;
      const adminCount = members.filter((member) => member.roleInClass === "ADMIN").length;
      const teacherCount = members.filter((member) => member.roleInClass === "TEACHER").length;
      if (adminCount < 1) issues.push("members must include at least one ADMIN");
      if (teacherCount < 1) issues.push("members must include at least one TEACHER");

      const classroomSchoolId = (aula.schoolId as string | undefined) ?? (aula.institutionId as string | undefined);
      if (classroomSchoolId) {
        const mismatchedMember = members.find((member) => member.schoolId !== classroomSchoolId);
        if (mismatchedMember) issues.push("members must match the classroom schoolId/institutionId");
      }

      const teacherRecordId =
        (aula.teacherOfRecord as string | undefined) ?? (aula.teacherId as string | undefined);
      if (teacherRecordId) {
        const hasTeacherRecord = members.some(
          (member) => member.userId === teacherRecordId && member.roleInClass === "TEACHER"
        );
        if (!hasTeacherRecord) issues.push("teacherOfRecord/teacherId must match a TEACHER member");
      }
    }

    if (Object.keys(updateSet).length > 0 || Object.keys(updateUnset).length > 0) {
      const updateOperation: { $set?: Record<string, unknown>; $unset?: Record<string, ""> } = {};
      if (Object.keys(updateSet).length > 0) updateOperation.$set = updateSet;
      if (Object.keys(updateUnset).length > 0) updateOperation.$unset = updateUnset;
      await aulas.updateOne({ _id: aula._id }, updateOperation);
      updated += 1;
    }

    if (issues.length > 0) {
      withIssues += 1;
      report.push(buildEntry(aula, issues, fixes));
    } else if (fixes.length > 0) {
      report.push(buildEntry(aula, issues, fixes));
    }
  }

  const reportPath = path.resolve(__dirname, "validate-existing-data-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), total, updated, withIssues, report }, null, 2)
  );

  console.log(`Processed ${total} aulas.`);
  console.log(`Applied updates to ${updated} aulas.`);
  console.log(`Found issues in ${withIssues} aulas.`);
  console.log(`Report saved to ${reportPath}`);

  await client.close();
};

main().catch((error) => {
  console.error("Validation failed", error);
  process.exitCode = 1;
});
