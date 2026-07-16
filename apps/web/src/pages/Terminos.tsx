import { useI18n } from "../i18n/I18nContext";

const ULTIMA_ACTUALIZACION = "16 de julio de 2026";

const SECCIONES: { titulo: string; parrafos: string[] }[] = [
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
];

export default function Terminos() {
  const { t } = useI18n();
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">{t("terminos.terminosYCondiciones")}</h1>
            <p className="text-sm text-gray-500">
              Última actualización: {ULTIMA_ACTUALIZACION}. Este documento rige en su versión en español; las
              traducciones de otras secciones del sitio son sólo informativas.
            </p>
          </div>
          {SECCIONES.map((seccion) => (
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
