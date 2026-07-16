import { useI18n } from "../i18n/I18nContext";

const ULTIMA_ACTUALIZACION = "16 de julio de 2026";

const SECCIONES: { titulo: string; parrafos: string[] }[] = [
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
];

export default function Privacidad() {
  const { t } = useI18n();
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">{t("privacidad.politicaDePrivacidad")}</h1>
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
