import { useState } from "react";
import { responsableTexto } from "../legal/responsable";
import { POLITICA_PRIVACIDAD_FECHA } from "../legal/politicaPrivacidad";
import { useI18n } from "../i18n/I18nContext";

const ULTIMA_ACTUALIZACION: Record<"es" | "en", string> = POLITICA_PRIVACIDAD_FECHA;

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
        `Esta Política de Privacidad describe cómo Virtual Book (la "Plataforma"), operada por ${responsableTexto}, recolecta, usa y protege los datos personales de quienes la usan, en el marco de la Ley 25.326 de Protección de Datos Personales de la República Argentina.`,
      ],
    },
    {
      titulo: "2. Datos que recolectamos",
      parrafos: [
        "Datos de cuenta: nombre de usuario, nombre completo, email, contraseña, rol (alumno, docente, familia, directivo o administrador) y la escuela a la que pertenecés. A las familias y alumnos les pedimos además la fecha de nacimiento, para adaptar la experiencia y el trato que corresponde a un menor de edad.",
        "Datos de uso educativo: el contenido que generás dentro de un aula (respuestas a cuestionarios, progreso, calificaciones, boletines) y los mensajes que enviás por la mensajería directa o dentro de un aula.",
        "Datos de pago: cuando una escuela cobra cuotas a través de la Plataforma, el número de tarjeta y demás datos sensibles del medio de pago los procesa directamente la pasarela elegida (Mercado Pago o Cryptomus) — la Plataforma no almacena esos datos, sólo el resultado de la transacción.",
        "Son obligatorios el nombre, el nombre de usuario, el correo, la contraseña, la fecha de nacimiento y el rol: sin ellos no se puede crear la cuenta. El código de escuela es opcional. Quien pide que se verifique su rol de docente o directivo sin una escuela que lo avale carga además su documento, la institución y un enlace: esos datos sólo los ve el administrador de la Plataforma. No pedimos datos sensibles (salud, religión, origen étnico, opiniones políticas); las observaciones que cargue un docente, por ejemplo en la asistencia, no deben incluirlos.",
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
        "Las personas menores de 13 años no pueden registrarse por su cuenta: su cuenta la crea la escuela, que tiene la relación con la familia. Entre los 13 y los 17 años pueden registrarse con conocimiento de su familia. Los compañeros de aula ven a los demás alumnos con nombre e inicial del apellido cuando intercambian algo dentro de la economía del aula.",
      ],
    },
    {
      titulo: "5. Cómo protegemos tus datos",
      parrafos: [
        "Tu contraseña nunca se guarda en texto plano: se almacena con una función de hash con sal, de forma que ni el propio Operador puede leerla. El acceso a los datos de un aula o una escuela está restringido según tu rol: por ejemplo, un docente sólo ve las aulas que le corresponden, y una familia sólo ve los datos de sus propios hijos o hijas.",
        "La sesión iniciada se guarda en el almacenamiento local de tu navegador (no usamos cookies de rastreo ni de publicidad de terceros).",
        "Las conexiones viajan cifradas (HTTPS). Los directivos y administradores pueden activar la verificación en dos pasos. Hacemos copias de seguridad diarias de la base de datos y tenemos un procedimiento para avisar a las personas afectadas y a la autoridad si ocurriera un incidente de seguridad.",
      ],
    },
    {
      titulo: "6. Con quién compartimos tus datos",
      parrafos: [
        "Compartimos datos únicamente dentro de la propia escuela a la que pertenece tu cuenta (por ejemplo, un docente ve el progreso de los alumnos de su aula, un directivo ve los datos de gestión de su institución) y, cuando corresponde, con la pasarela de pago que la escuela eligió para cobrar cuotas. No vendemos ni cedemos tus datos a terceros con fines comerciales.",
        "Para funcionar usamos estos servicios de terceros: Mercado Pago (Argentina) y, sólo si la escuela lo elige, Cryptomus (con sede fuera del país) para los pagos; el servicio de notificaciones de Expo (Estados Unidos) para avisar en la aplicación de celular que hay un mensaje, una tarea o una cuota nueva, sin el contenido ni el nombre de nadie; y un proveedor de correo electrónico para enviar los enlaces de confirmación y de recuperación de contraseña. Si un docente inserta un video de YouTube en un módulo, al reproducirlo se conecta con Google. Estos servicios en el exterior implican una transferencia internacional de datos en los términos del artículo 12 de la Ley 25.326, limitada a lo indispensable para prestar el servicio; al aceptar esta política la consentís.",
      ],
    },
    {
      titulo: "7. Conservación de tus datos",
      parrafos: [
        "Conservamos los datos de tu cuenta y tu progreso académico mientras la cuenta permanezca activa y vinculada a una escuela. Los mensajes se borran automáticamente a los 8 años. Los datos técnicos de las sesiones y los enlaces de recuperación de contraseña se borran a los 30 días, y si tu escuela da de baja tu cuenta, tus datos personales se anonimizan a los 30 días. Una cuenta que deja de usarse no se borra: las notas y la asistencia son parte del registro educativo.",
        "Si das de baja tu cuenta, se borran tu nombre, tu usuario y tu correo. Las notas, la asistencia y las cuotas quedan para la escuela como registro académico y contable, sin datos que te identifiquen.",
      ],
    },
    {
      titulo: "8. Tus derechos sobre tus datos",
      parrafos: [
        "Tenés derecho a acceder, rectificar y solicitar la eliminación de tus datos personales (Ley 25.326, arts. 14 a 16). Desde tu perfil, en «Privacidad y datos», podés descargar una copia de tus datos en un archivo JSON y dar de baja tu cuenta. Para rectificar un dato o para cualquier otro pedido, escribinos desde la sección de Contacto o a través de tu escuela: respondemos dentro de los plazos de la ley (10 días corridos para el acceso y 5 días hábiles para la rectificación o supresión).",
        "El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.",
        "La Agencia de Acceso a la Información Pública (AAIP), como autoridad de control, tiene la atribución de recibir denuncias y reclamos vinculados al incumplimiento de la ley de protección de datos personales.",
      ],
    },
    {
      titulo: "9. Cambios a esta política",
      parrafos: [
        "Podemos actualizar esta Política de Privacidad para reflejar cambios en la Plataforma o en la normativa aplicable. Publicaremos la versión vigente en esta misma página junto con su fecha de actualización, y cuando cambie te lo avisaremos dentro de la Plataforma la próxima vez que ingreses.",
      ],
    },
  ],
  en: [
    {
      titulo: "1. Data Controller",
      parrafos: [
        `This Privacy Policy describes how Virtual Book (the "Platform"), operated by ${responsableTexto}, collects, uses, and protects the personal data of the people who use it, under Argentina's Personal Data Protection Law (Law 25,326).`,
      ],
    },
    {
      titulo: "2. Data We Collect",
      parrafos: [
        "Account data: username, full name, email, password, role (student, teacher, family member, school administrator, or platform administrator), and the school your account belongs to. We also ask families and students for their date of birth, to tailor the experience and give minors the treatment that corresponds to them.",
        "Educational usage data: the content you generate within a classroom (quiz answers, progress, grades, report cards) and the messages you send through direct messaging or within a classroom.",
        "Payment data: when a school charges fees through the Platform, the card number and other sensitive payment details are processed directly by the chosen payment gateway (Mercado Pago or Cryptomus) — the Platform does not store that data, only the result of the transaction.",
        "Name, username, email, password, date of birth and role are mandatory: without them the account cannot be created. School code is optional. Anyone asking to have their teacher or school-administrator role verified without a school vouching for them also provides an ID document, the institution and a link: only the Platform administrator sees that data. We do not ask for sensitive data (health, religion, ethnic origin, political opinions); notes entered by a teacher, for example in attendance, must not include it.",
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
        "People under 13 cannot sign up on their own: their account is created by the school, which holds the relationship with the family. From 13 to 17 they may sign up with their family's knowledge. Classmates see other students by first name and last-name initial when they trade something in the classroom economy.",
      ],
    },
    {
      titulo: "5. How We Protect Your Data",
      parrafos: [
        "Your password is never stored in plain text: it is stored using a salted hash function, so that not even the Operator itself can read it. Access to a classroom's or school's data is restricted according to your role: for example, a teacher only sees the classrooms assigned to them, and a family only sees the data of their own children.",
        "Your logged-in session is stored in your browser's local storage (we do not use third-party tracking or advertising cookies).",
        "Connections are encrypted (HTTPS). School administrators and platform administrators can turn on two-step verification. We back up the database daily and have a procedure to notify affected people and the authority if a security incident occurs.",
      ],
    },
    {
      titulo: "6. Who We Share Your Data With",
      parrafos: [
        "We only share data within the school your account belongs to (for example, a teacher sees the progress of the students in their classroom, a school administrator sees the management data of their institution), and, when applicable, with the payment gateway the school chose to charge fees. We do not sell or transfer your data to third parties for commercial purposes.",
        "To operate we use these third-party services: Mercado Pago (Argentina) and, only if the school chooses it, Cryptomus (based abroad) for payments; Expo's notification service (United States) to tell the mobile app that there is a new message, assignment or fee, without the content or anyone's name; and an email provider to send confirmation and password-recovery links. If a teacher embeds a YouTube video in a module, playing it connects to Google. These services abroad involve an international data transfer under section 12 of Law 25,326, limited to what is essential to provide the service; by accepting this policy you consent to it.",
      ],
    },
    {
      titulo: "7. Data Retention",
      parrafos: [
        "We keep your account data and academic progress for as long as the account remains active and linked to a school. Messages are deleted automatically after 8 years. Technical session data and password-recovery links are deleted after 30 days, and if your school deletes your account, your personal data is anonymized after 30 days. An account that is no longer used is not deleted: grades and attendance are part of the educational record.",
        "If you delete your account, your name, username and email are erased. Grades, attendance and fees stay with the school as academic and accounting records, without data that identifies you.",
      ],
    },
    {
      titulo: "8. Your Rights Over Your Data",
      parrafos: [
        "You have the right to access, correct, and request the deletion of your personal data (Law 25,326, sections 14 to 16). From your profile, under \"Privacy and data\", you can download a copy of your data as a JSON file and delete your account. To correct data or for any other request, write to us through the Contact section or through your school: we answer within the legal deadlines (10 calendar days for access and 5 business days for correction or deletion).",
        "The data subject has the right to access their personal data free of charge at intervals of no less than six months, unless a legitimate interest is shown, as established in section 14, subsection 3 of Law No. 25,326.",
        "Argentina's Agency for Access to Public Information (AAIP), as the enforcement authority, is empowered to receive complaints and claims related to breaches of the personal data protection law.",
      ],
    },
    {
      titulo: "9. Changes to This Policy",
      parrafos: [
        "We may update this Privacy Policy to reflect changes to the Platform or to applicable regulations. We will publish the current version on this same page along with its update date, and when it changes we will let you know inside the Platform the next time you sign in.",
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
    <div className="flex-1 bg-gray-100">
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
    </div>
  );
}
