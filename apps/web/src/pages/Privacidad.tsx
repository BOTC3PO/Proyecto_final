import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";

const ULTIMA_ACTUALIZACION: Record<"es" | "en", string> = {
  es: "16 de julio de 2026",
  en: "July 16, 2026",
};

const NOTA_IDIOMA: Record<"es" | "en", string> = {
  es: "Este documento rige en su versión en español; la versión en inglés se ofrece como cortesía. Ante cualquier discrepancia, prevalece el español.",
  en: "This document is governed by its Spanish version; the English version is provided for convenience. In case of any discrepancy, the Spanish version prevails.",
};

type Seccion = { titulo: string; parrafos: string[] };

const SECCIONES: Record<"es" | "en", Seccion[]> = {
  es: [
    {
      titulo: "1. Responsable del tratamiento",
      parrafos: [
        "Esta Política de Privacidad describe cómo Virtual Book (la \"Plataforma\"), operada por [RAZÓN SOCIAL A COMPLETAR], CUIT [A COMPLETAR], recolecta, usa y protege los datos personales de quienes la usan, en el marco de la Ley 25.326 de Protección de Datos Personales de la República Argentina.",
      ],
    },
    {
      titulo: "2. Datos que recolectamos",
      parrafos: [
        "Datos de cuenta: nombre de usuario, nombre completo, email, contraseña, rol (alumno, docente, familia, directivo o administrador) y la escuela a la que pertenecés. A las familias y alumnos les pedimos además la fecha de nacimiento, para adaptar la experiencia y el trato que corresponde a un menor de edad.",
        "Datos de uso educativo: el contenido que generás dentro de un aula (respuestas a cuestionarios, progreso, calificaciones, boletines) y los mensajes que enviás por la mensajería directa o dentro de un aula.",
        "Datos de pago: cuando una escuela cobra cuotas a través de la Plataforma, el número de tarjeta y demás datos sensibles del medio de pago los procesa directamente la pasarela elegida (Mercado Pago, Stripe o Cryptomus) — la Plataforma no almacena esos datos, sólo el resultado de la transacción.",
      ],
    },
    {
      titulo: "3. Para qué usamos tus datos",
      parrafos: [
        "Para dar de alta y autenticar tu cuenta, mostrarte el contenido y las herramientas que corresponden a tu rol y a tu escuela, procesar los pagos escolares cuando la escuela los habilita, prevenir accesos indebidos (por ejemplo, limitando intentos de inicio de sesión) y comunicarte cambios relevantes del servicio o de estos documentos.",
        "No usamos tus datos con fines de publicidad ni los compartimos con redes sociales o plataformas de marketing.",
      ],
    },
    {
      titulo: "4. Menores de edad",
      parrafos: [
        "Gran parte de las cuentas de la Plataforma pertenecen a alumnos menores de edad, dentro del marco de la relación entre su escuela y su familia. El nombre completo de un alumno sólo es visible para los docentes y compañeros de su propia aula, nunca de forma pública. La escuela y el familiar responsable de la cuenta son quienes deben supervisar el uso que el menor hace de la Plataforma.",
      ],
    },
    {
      titulo: "5. Cómo protegemos tus datos",
      parrafos: [
        "Tu contraseña nunca se guarda en texto plano: se almacena con una función de hash con sal, de forma que ni el propio Operador puede leerla. El acceso a los datos de un aula o una escuela está restringido según tu rol: por ejemplo, un docente sólo ve las aulas que le corresponden, y una familia sólo ve los datos de sus propios hijos o hijas.",
        "La sesión iniciada se guarda en el almacenamiento local de tu navegador (no usamos cookies de rastreo ni de publicidad de terceros).",
      ],
    },
    {
      titulo: "6. Con quién compartimos tus datos",
      parrafos: [
        "Compartimos datos únicamente dentro de la propia escuela a la que pertenece tu cuenta (por ejemplo, un docente ve el progreso de los alumnos de su aula, un directivo ve los datos de gestión de su institución) y, cuando corresponde, con la pasarela de pago que la escuela eligió para cobrar cuotas. No vendemos ni cedemos tus datos a terceros con fines comerciales.",
      ],
    },
    {
      titulo: "7. Conservación de tus datos",
      parrafos: [
        "Conservamos los datos de tu cuenta, tu progreso académico y tus mensajes mientras la cuenta permanezca activa y vinculada a una escuela. Si dejás de usar la Plataforma o tu escuela da de baja tu cuenta, los datos quedan resguardados como parte del registro académico hasta que se solicite su eliminación conforme a la Sección 8.",
      ],
    },
    {
      titulo: "8. Tus derechos sobre tus datos",
      parrafos: [
        "Tenés derecho a acceder, rectificar y solicitar la eliminación de tus datos personales (Ley 25.326). Podés ejercerlo escribiéndonos desde la sección de Contacto de la Plataforma o a través de tu escuela; lo procesamos manualmente en un plazo razonable, ya que hoy no existe un botón de autoservicio para dar de baja una cuenta.",
        "La Agencia de Acceso a la Información Pública (AAIP), como autoridad de control, tiene la atribución de recibir denuncias y reclamos vinculados al incumplimiento de la ley de protección de datos personales.",
      ],
    },
    {
      titulo: "9. Cambios a esta política",
      parrafos: [
        "Podemos actualizar esta Política de Privacidad para reflejar cambios en la Plataforma o en la normativa aplicable. Publicaremos la versión vigente en esta misma página junto con su fecha de actualización.",
      ],
    },
  ],
  en: [
    {
      titulo: "1. Data Controller",
      parrafos: [
        "This Privacy Policy describes how Virtual Book (the \"Platform\"), operated by [LEGAL NAME TO BE COMPLETED], Tax ID [TO BE COMPLETED], collects, uses, and protects the personal data of the people who use it, under Argentina's Personal Data Protection Law (Law 25,326).",
      ],
    },
    {
      titulo: "2. Data We Collect",
      parrafos: [
        "Account data: username, full name, email, password, role (student, teacher, family member, school administrator, or platform administrator), and the school your account belongs to. We also ask families and students for their date of birth, to tailor the experience and give minors the treatment that corresponds to them.",
        "Educational usage data: the content you generate within a classroom (quiz answers, progress, grades, report cards) and the messages you send through direct messaging or within a classroom.",
        "Payment data: when a school charges fees through the Platform, the card number and other sensitive payment details are processed directly by the chosen payment gateway (Mercado Pago, Stripe, or Cryptomus) — the Platform does not store that data, only the result of the transaction.",
      ],
    },
    {
      titulo: "3. How We Use Your Data",
      parrafos: [
        "To create and authenticate your account, show you the content and tools that correspond to your role and your school, process school payments when the school enables them, prevent unauthorized access (for example, by limiting login attempts), and notify you of relevant changes to the service or to these documents.",
        "We do not use your data for advertising purposes, and we do not share it with social networks or marketing platforms.",
      ],
    },
    {
      titulo: "4. Minors",
      parrafos: [
        "A large share of the Platform's accounts belong to minor students, within the relationship between their school and their family. A student's full name is only visible to the teachers and classmates of their own virtual classroom, never publicly. The school and the family member responsible for the account are the ones who must supervise the minor's use of the Platform.",
      ],
    },
    {
      titulo: "5. How We Protect Your Data",
      parrafos: [
        "Your password is never stored in plain text: it is stored using a salted hash function, so that not even the Operator itself can read it. Access to a classroom's or school's data is restricted according to your role: for example, a teacher only sees the classrooms assigned to them, and a family only sees the data of their own children.",
        "Your logged-in session is stored in your browser's local storage (we do not use third-party tracking or advertising cookies).",
      ],
    },
    {
      titulo: "6. Who We Share Your Data With",
      parrafos: [
        "We only share data within the school your account belongs to (for example, a teacher sees the progress of the students in their classroom, a school administrator sees the management data of their institution), and, when applicable, with the payment gateway the school chose to charge fees. We do not sell or transfer your data to third parties for commercial purposes.",
      ],
    },
    {
      titulo: "7. Data Retention",
      parrafos: [
        "We keep your account data, your academic progress, and your messages for as long as the account remains active and linked to a school. If you stop using the Platform or your school deactivates your account, the data remains on record as part of the academic record until its deletion is requested under Section 8.",
      ],
    },
    {
      titulo: "8. Your Rights Over Your Data",
      parrafos: [
        "You have the right to access, correct, and request the deletion of your personal data (Law 25,326). You can exercise this right by writing to us through the Platform's Contact section or through your school; we process it manually within a reasonable timeframe, since there is currently no self-service button to delete an account.",
        "Argentina's Agency for Access to Public Information (AAIP), as the enforcement authority, is empowered to receive complaints and claims related to breaches of the personal data protection law.",
      ],
    },
    {
      titulo: "9. Changes to This Policy",
      parrafos: [
        "We may update this Privacy Policy to reflect changes to the Platform or to applicable regulations. We will publish the current version on this same page along with its update date.",
      ],
    },
  ],
};

const TITULO: Record<"es" | "en", string> = {
  es: "Política de privacidad",
  en: "Privacy Policy",
};

export default function Privacidad() {
  const { lang } = useI18n();
  const [idioma, setIdioma] = useState<"es" | "en">(lang === "en" ? "en" : "es");
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-8">
          <div className="flex justify-end gap-1">
            {(["es", "en"] as const).map((opcion) => (
              <button
                key={opcion}
                type="button"
                onClick={() => setIdioma(opcion)}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  idioma === opcion ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {opcion === "es" ? "Español" : "English"}
              </button>
            ))}
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">{TITULO[idioma]}</h1>
            <p className="text-sm text-gray-500">
              {idioma === "es" ? "Última actualización" : "Last updated"}: {ULTIMA_ACTUALIZACION[idioma]}.{" "}
              {NOTA_IDIOMA[idioma]}
            </p>
          </div>
          {SECCIONES[idioma].map((seccion) => (
            <div key={seccion.titulo} className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">{seccion.titulo}</h2>
              {seccion.parrafos.map((parrafo, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
