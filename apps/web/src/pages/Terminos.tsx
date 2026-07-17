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
      titulo: "1. Aceptación de los términos",
      parrafos: [
        "Estos Términos y Condiciones (los \"Términos\") regulan el acceso y uso de Virtual Book (la \"Plataforma\"), operada por [RAZÓN SOCIAL A COMPLETAR], CUIT [A COMPLETAR], con domicilio legal en Argentina (el \"Operador\", \"nosotros\").",
        "Al crear una cuenta o usar la Plataforma aceptás estos Términos. Si actuás en representación de una escuela o institución, declarás tener facultades para obligarla a estos Términos. Si sos menor de 18 años, sólo podés usar la Plataforma dentro de un aula gestionada por tu escuela y con la supervisión de un docente, directivo o familiar responsable de tu cuenta.",
      ],
    },
    {
      titulo: "2. Descripción del servicio",
      parrafos: [
        "Virtual Book es una plataforma educativa que provee aulas virtuales, módulos y cuestionarios interactivos, seguimiento de progreso y calificaciones, boletines, mensajería entre docentes/directivos y familias, y una tienda interna de personalización (temas visuales).",
        "El acceso se organiza por roles: Alumno, Docente, Familia (padre/madre/tutor), Directivo y Administrador de escuela. El alcance de cada función depende del rol asignado y de la escuela a la que la cuenta pertenece.",
      ],
    },
    {
      titulo: "3. Cuentas, veracidad de los datos y menores de edad",
      parrafos: [
        "Sos responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada desde tu cuenta. Debés proporcionar datos verdaderos y mantenerlos actualizados, incluida tu fecha de nacimiento.",
        "Las cuentas de alumnos menores de edad se crean habitualmente en el marco de la relación entre la escuela y la familia. La escuela y/o el familiar responsable son quienes deben autorizar el registro y supervisar el uso que el menor hace de la Plataforma. El nombre completo de un alumno sólo es visible para los docentes y compañeros de su propia aula virtual, nunca públicamente.",
      ],
    },
    {
      titulo: "4. Uso aceptable",
      parrafos: [
        "Al usar la Plataforma te comprometés a: (a) usar el contenido educativo y las herramientas interactivas de forma responsable; (b) respetar la privacidad y la convivencia dentro de las aulas virtuales y la mensajería; (c) mantener la integridad académica, sin manipular ni falsificar resultados de cuestionarios, calificaciones o boletines; (d) no publicar contenido ilegal, discriminatorio, violento o inapropiado para un entorno escolar; (e) no intentar vulnerar la seguridad de la Plataforma ni acceder a cuentas o aulas ajenas.",
        "El incumplimiento de estas pautas puede derivar en la suspensión o baja de la cuenta, conforme a la Sección 8.",
      ],
    },
    {
      titulo: "5. Contenido y propiedad intelectual",
      parrafos: [
        "El software, el diseño y los materiales educativos propios de Virtual Book son propiedad del Operador o de sus licenciantes. Se te otorga una licencia limitada, no exclusiva e intransferible para usarlos dentro de la Plataforma con fines educativos.",
        "El contenido que docentes o alumnos creen o suban (módulos propios, respuestas, mensajes) sigue siendo propiedad de quien lo crea. Al publicarlo dentro de un aula, le otorgás al Operador y a los demás miembros de esa aula la licencia necesaria para almacenarlo, mostrarlo y procesarlo con el único fin de prestar el servicio educativo.",
      ],
    },
    {
      titulo: "6. Pagos y economía interna",
      parrafos: [
        "Cuando una escuela cobra cuotas o aranceles a las familias a través de la Plataforma, el vínculo de pago es entre la escuela y la familia; el Operador actúa como proveedor tecnológico e intermediario de cobro, procesando los pagos mediante pasarelas de terceros (por ejemplo Mercado Pago, Stripe o Cryptomus) y reteniendo una comisión de intermediación previamente informada a la escuela. El Operador no es responsable por las políticas de precios, becas o descuentos que cada escuela defina.",
        "La tienda de temas visuales de la Plataforma utiliza una moneda interna del propio sistema (no dinero real, no convertible a moneda de curso legal ni a criptomonedas). Los saldos y compras de esa moneda interna no tienen valor de reembolso y no pueden transferirse fuera de la Plataforma.",
      ],
    },
    {
      titulo: "7. Disponibilidad y modificaciones del servicio",
      parrafos: [
        "Trabajamos para mantener la Plataforma disponible, pero no garantizamos un funcionamiento ininterrumpido o libre de errores. Podemos modificar, agregar o discontinuar funcionalidades, notificando los cambios relevantes por la propia Plataforma cuando sea razonablemente posible.",
      ],
    },
    {
      titulo: "8. Suspensión y baja de cuentas",
      parrafos: [
        "Podemos suspender o dar de baja una cuenta que incumpla estos Términos, que ponga en riesgo a otros usuarios (en particular a menores) o cuya escuela finalice su relación con la Plataforma. Docentes, directivos y familiares pueden solicitar en cualquier momento la baja o corrección de los datos de una cuenta bajo su responsabilidad, conforme a la Política de Privacidad.",
      ],
    },
    {
      titulo: "9. Limitación de responsabilidad",
      parrafos: [
        "En la medida permitida por la ley aplicable, el Operador no será responsable por daños indirectos derivados del uso de la Plataforma. Nada en esta sección limita responsabilidades que no puedan excluirse por ley, en particular en materia de protección de datos personales y de menores.",
      ],
    },
    {
      titulo: "10. Cambios a estos Términos",
      parrafos: [
        "Podemos actualizar estos Términos para reflejar cambios en la Plataforma o en la normativa aplicable. Publicaremos la versión vigente en esta misma página junto con su fecha de actualización; el uso continuado de la Plataforma luego de un cambio implica su aceptación.",
      ],
    },
    {
      titulo: "11. Ley aplicable y contacto",
      parrafos: [
        "Estos Términos se rigen por las leyes de la República Argentina. Ante cualquier consulta sobre estos Términos podés escribirnos desde la sección de Contacto de la Plataforma.",
      ],
    },
  ],
  en: [
    {
      titulo: "1. Acceptance of these Terms",
      parrafos: [
        "These Terms and Conditions (the \"Terms\") govern access to and use of Virtual Book (the \"Platform\"), operated by [LEGAL NAME TO BE COMPLETED], Tax ID [TO BE COMPLETED], legally domiciled in Argentina (the \"Operator\", \"we\").",
        "By creating an account or using the Platform, you accept these Terms. If you act on behalf of a school or institution, you represent that you have authority to bind it to these Terms. If you are under 18, you may only use the Platform within a classroom managed by your school and under the supervision of a teacher, school administrator, or the family member responsible for your account.",
      ],
    },
    {
      titulo: "2. Description of the Service",
      parrafos: [
        "Virtual Book is an educational platform that provides virtual classrooms, interactive modules and quizzes, progress and grade tracking, report cards, messaging between teachers/administrators and families, and an internal customization store (visual themes).",
        "Access is organized by role: Student, Teacher, Family (parent/guardian), School Administrator, and School Owner Admin. The scope of each role depends on the role assigned and the school the account belongs to.",
      ],
    },
    {
      titulo: "3. Accounts, accuracy of information, and minors",
      parrafos: [
        "You are responsible for keeping your credentials confidential and for all activity carried out from your account. You must provide truthful information and keep it up to date, including your date of birth.",
        "Accounts belonging to minor students are typically created within the relationship between the school and the family. The school and/or the responsible family member must authorize the registration and supervise the minor's use of the Platform. A student's full name is only visible to the teachers and classmates of their own virtual classroom, never publicly.",
      ],
    },
    {
      titulo: "4. Acceptable Use",
      parrafos: [
        "By using the Platform you agree to: (a) use the educational content and interactive tools responsibly; (b) respect privacy and good conduct within virtual classrooms and messaging; (c) maintain academic integrity, without manipulating or falsifying quiz results, grades, or report cards; (d) not post illegal, discriminatory, violent, or content otherwise inappropriate for a school environment; (e) not attempt to breach the Platform's security or access accounts or classrooms that are not yours.",
        "Failure to comply with these guidelines may result in suspension or termination of the account, in accordance with Section 8.",
      ],
    },
    {
      titulo: "5. Content and Intellectual Property",
      parrafos: [
        "The software, design, and proprietary educational materials of Virtual Book are owned by the Operator or its licensors. You are granted a limited, non-exclusive, non-transferable license to use them within the Platform for educational purposes.",
        "Content created or uploaded by teachers or students (their own modules, answers, messages) remains the property of whoever created it. By posting it within a classroom, you grant the Operator and the other members of that classroom the license needed to store, display, and process it for the sole purpose of providing the educational service.",
      ],
    },
    {
      titulo: "6. Payments and Internal Economy",
      parrafos: [
        "When a school charges families fees or tuition through the Platform, the payment relationship is between the school and the family; the Operator acts as a technology provider and payment intermediary, processing payments through third-party gateways (for example Mercado Pago, Stripe, or Cryptomus) and retaining an intermediation fee previously disclosed to the school. The Operator is not responsible for the pricing, scholarship, or discount policies each school sets.",
        "The Platform's visual theme store uses an internal, system-only currency (not real money, not convertible into legal tender or cryptocurrency). Balances and purchases made with this internal currency have no refund value and cannot be transferred outside the Platform.",
      ],
    },
    {
      titulo: "7. Service Availability and Changes",
      parrafos: [
        "We work to keep the Platform available, but we do not guarantee uninterrupted or error-free operation. We may modify, add, or discontinue features, notifying relevant changes through the Platform itself whenever reasonably possible.",
      ],
    },
    {
      titulo: "8. Suspension and Termination of Accounts",
      parrafos: [
        "We may suspend or terminate an account that breaches these Terms, puts other users at risk (particularly minors), or whose school ends its relationship with the Platform. Teachers, administrators, and family members may at any time request the deletion or correction of the data of an account under their responsibility, in accordance with the Privacy Policy.",
      ],
    },
    {
      titulo: "9. Limitation of Liability",
      parrafos: [
        "To the extent permitted by applicable law, the Operator will not be liable for indirect damages arising from use of the Platform. Nothing in this section limits liability that cannot be excluded by law, particularly regarding the protection of personal data and of minors.",
      ],
    },
    {
      titulo: "10. Changes to These Terms",
      parrafos: [
        "We may update these Terms to reflect changes to the Platform or to applicable regulations. We will publish the current version on this same page along with its update date; continued use of the Platform after a change constitutes acceptance of it.",
      ],
    },
    {
      titulo: "11. Governing Law and Contact",
      parrafos: [
        "These Terms are governed by the laws of the Argentine Republic. For any questions about these Terms, you can write to us through the Platform's Contact section.",
      ],
    },
  ],
};

const TITULO: Record<"es" | "en", string> = {
  es: "Términos y condiciones",
  en: "Terms and Conditions",
};

export default function Terminos() {
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
