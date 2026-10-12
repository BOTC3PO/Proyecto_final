process.env.NODE_ENV = "test";
import { test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor } from "./_helpers/setup";
import { app } from "../../src/app";
import { requireUser } from "../../src/lib/user-auth";
import { requireAdmin } from "../../src/lib/admin-auth";
import { assetsRouter } from "../../src/routes/assets";
import { mediaRouter } from "../../src/routes/media";
import { visualizadoresRouter } from "../../src/routes/visualizadores";
import { herramientasRouter } from "../../src/routes/herramientas";
import { mapsRouter } from "../../src/routes/maps";
import { provinciasRouter } from "../../src/maps/provincias";
const PREF = new Map<unknown, string>([[assetsRouter,"/api/assets"],[mediaRouter,"/api/media"],[visualizadoresRouter,"/api/visualizadores"],[herramientasRouter,"/api/herramientas"],[mapsRouter,"/api/maps"],[provinciasRouter,"/api/maps/provincias"]]);
const A="esc-v", B="esc-x"; const now=new Date().toISOString();
test("sonda", async () => {
  resetPrisma();
  for (const id of [A,B]) prisma.escuela.rows.push({ id, name:id, isDeleted:false, estadoVerificacion:"verificada", createdAt:now } as never);
  const u=(id:string, role:string, school:string|null, mem:string|null, extra:Record<string,unknown>={})=>{ seedUser({id, role:role as never, schoolId:school}); if(mem) prisma.membresia.rows.push({usuarioId:id,escuelaId:school,rol:mem,estado:"activa",fechaAlta:now} as never); Object.assign(prisma.usuario.rows.find((r:any)=>r.id===id)!, {fullName:`Nombre ${id}`, email:`${id}@x.test`, birthdate:"2015-01-01T00:00:00.000Z", ...extra}); };
  u("alu-v","STUDENT",A,"STUDENT"); u("doc-v","TEACHER",A,"TEACHER"); u("dir-v","DIRECTIVO",A,"DIRECTIVO");
  u("alu-comp","STUDENT",A,"STUDENT"); // compañero de la misma escuela, OTRA aula
  u("atk-alu","STUDENT",B,"STUDENT"); u("atk-doc","TEACHER",B,"TEACHER");
  prisma.clase.rows.push({ id:"aula-v", escuelaId:A, name:"Aula víctima", isDeleted:false, status:"ACTIVE", createdAt:now, updatedAt:now, code:"VICT01" } as never, { id:"aula-comp", escuelaId:A, name:"Otra", isDeleted:false, status:"ACTIVE", createdAt:now, updatedAt:now } as never);
  prisma.claseMiembro.rows.push({claseId:"aula-v",usuarioId:"alu-v",rolEnClase:"STUDENT"},{claseId:"aula-v",usuarioId:"doc-v",rolEnClase:"TEACHER"},{claseId:"aula-comp",usuarioId:"alu-comp",rolEnClase:"STUDENT"});
  prisma.modulo.rows.push({ id:"mod-v", titulo:"Módulo privado víctima", slug:"mod-v", ownerUserId:"doc-v", visibility:"privado", schoolId:A, isDeleted:false, createdAt:now, updatedAt:now } as never);
  prisma.quiz.rows.push({ id:"quiz-v", moduleId:"mod-v", ownerUserId:"doc-v", title:"Quiz víctima" } as never);
  prisma.quizVersion.rows.push({ id:"ver-v", quizId:"quiz-v", versionNumber:1 } as never);
  prisma.quizAttempt.rows.push({ id:"att-v", quizId:"quiz-v", quizVersionId:"ver-v", userId:"alu-v", status:"submitted", startedAt:now, score:7, maxScore:10, answers:"{}" } as never);
  prisma.hilo.rows.push({ id:"hilo-v", escuelaId:A, usuarioA:"alu-v", usuarioB:"doc-v", createdAt:now } as never);
  prisma.mensajeDirecto.rows.push({ id:"msg-v", hiloId:"hilo-v", senderId:"doc-v", body:"mensaje privado", leido:0, createdAt:now } as never);
  prisma.economiaSaldo.rows.push({ usuarioId:"alu-v", saldo:500, moneda:"PF", updatedAt:now } as never);
  prisma.cobroEscuela.rows.push({ id:"cobro-v", escuelaId:A, concepto:"Cuota", montoUnitario:100, moneda:"ARS", estado:"publicado", createdBy:"dir-v", createdAt:now, updatedAt:now } as never);
  prisma.cuotaAlumno.rows.push({ id:"cuota-v", cobroId:"cobro-v", alumnoId:"alu-v", estado:"pendiente", montoFinal:100, createdAt:now, updatedAt:now } as never);
  prisma.progresoModulo.rows.push({ id:"pg-v", usuarioId:"alu-v", moduloId:"mod-v", aulaId:"aula-v", status:"completado", score:9, updatedAt:now } as never);
  const tokens:Record<string,string>={}; for (const [id,role,sc] of [["atk-alu","STUDENT",B],["atk-doc","TEACHER",B],["alu-comp","STUDENT",A]] as const) tokens[id]=tokenFor({id,role:role as never,schoolId:sc});
  const rutas:Array<{m:string;p:string}>=[]; const raiz=(app as any).router.stack as any[];
  const visitar=(caps:any[],pref:string,prot:boolean)=>{for(const c of caps){if(c.route){const h=c.route.stack.map((x:any)=>x.handle);const pr=prot||h.includes(requireUser)||h.includes(requireAdmin);if(pr)for(const m of Object.keys(c.route.methods))rutas.push({m:m.toUpperCase(),p:`${pref}${c.route.path}`});}else if(c.handle?.stack)visitar(c.handle.stack,PREF.get(c.handle)??pref,prot);}};
  let prot=false; for(const c of raiz){ if(c.handle===requireUser){prot=true;continue;} visitar([c],"",prot); }
  const pmap:Record<string,string>={aulaId:"aula-v",claseId:"aula-v",usuarioId:"alu-v",alumnoId:"alu-v",hijoId:"alu-v",childId:"alu-v",moduloId:"mod-v",quizId:"quiz-v",examenId:"ex-v",escuelaId:A,cobroId:"cobro-v",hiloId:"hilo-v",attemptId:"att-v",parentId:"alu-v",mensajeId:"msg-v"};
  const porPrefijo:Array<[string,string]>=[["/api/aulas","aula-v"],["/api/modulos","mod-v"],["/api/quiz-attempts","att-v"],["/api/quizzes","quiz-v"],["/api/mensajeria/hilos","hilo-v"],["/api/cobros","cobro-v"],["/api/cuotas","cuota-v"],["/api/usuarios","alu-v"],["/api/escuelas",A],["/api/escuela","esc-v"],["/api/membresias","alu-v"],["/api/padres/hijos","alu-v"],["/api/progreso","alu-v"],["/api/materiales","mod-v"],["/api/economia/saldos","alu-v"]];
  const server=await new Promise<any>(r=>{const s=app.listen(0,()=>r(s));}); const base=`http://127.0.0.1:${server.address().port}`;
  const hallazgos:string[]=[];
  for (const r of rutas) {
    if (/webhook|\/auth\/|^\/api\/(admin|moderacion|comisiones)/.test(r.p)) continue;
    if (r.m!=="GET" && r.m!=="DELETE") continue; // sonda de lectura (las escrituras con cuerpo vacío no dicen nada)
    let first=true;
    const path=r.p.replace(/:([A-Za-z0-9_]+)\??/g,(_m,n)=>{ if(pmap[n]) return pmap[n]; if(n==="id"||n==="archivo"){ const f=porPrefijo.find(([pre])=>r.p.startsWith(pre)); return f?f[1]:"x-id"; } return "x-"+n; }).replace(/\*/g,"x");
    for (const atk of ["atk-alu","atk-doc","alu-comp"]) {
      try {
        const res=await fetch(base+path,{method:r.m,redirect:"manual",headers:{authorization:`Bearer ${tokens[atk]}`}});
        const txt=await res.text();
        if (res.status>=200 && res.status<300 && /alu-v|doc-v|víctima|mensaje privado|VICT01|500|Nombre|alu-v@x/.test(txt)) hallazgos.push(`${r.m} ${path} como ${atk} → ${res.status} :: ${txt.slice(0,140).replace(/\n/g," ")}`);
      } catch {}
    }
  }
  server.close();
  console.log("HALLAZGOS", hallazgos.length); for (const h of hallazgos) console.log("  "+h);
});
