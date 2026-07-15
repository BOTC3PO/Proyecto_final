import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useI18n } from '../i18n/I18nContext';

export default function metodologia(){
  const { t } = useI18n();
  useDocumentMeta({
    title: t('metodologia.metodologiaDeEnsenanzaVirtualBook'),
    description: t('metodologia.conoceNuestraMetodologiaInspiradaEn'),
  });
  return(
<>
  <section className="bg-sky-500 text-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">{t('metodologia.metodologiaDeEnsenanza')}</h1>
      <p className="mt-4 opacity-95">{t('metodologia.unaAproximacionModernaYAdaptativa')}</p>
    </div>
  </section>


  <main className="flex-1">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-blue-700">{t('metodologia.principiosFundamentales')}</h2>
        <div className="mt-3 bg-gray-50 rounded p-4">
          <p className="font-medium">{t('metodologia.nuestroSistemaEsModularY')}</p>
          <ul className="list-disc ml-5 mt-3 space-y-1">
            <li>{t('metodologia.aprendizajePersonalizado')}</li>
            <li>{t('metodologia.progresionPorCompetencias')}</li>
            <li>{t('metodologia.pensamientoCriticoYEliminacionDe')}</li>
            <li>{t('metodologia.ejemplosPracticosCotidianos')}</li>
            <li>{t('metodologia.fortalecimientoDeHabilidadesExistentes')}</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-blue-700">{t('metodologia.sistemaModular')}</h2>
        <p className="mt-2 font-medium">{t('metodologia.modulosInterconectadosQuePermitenUna')}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.estructuraModular')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.bloqueoPorPrerrequisitos')}</li>
              <li>{t('metodologia.competenciasDemostradas')}</li>
              <li>{t('metodologia.flexibilidadDelProfesor')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.evaluacionContinua')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.dificultadAdaptativa')}</li>
              <li>{t('metodologia.reconocimientosPorRendimiento')}</li>
              <li>{t('metodologia.seguimientoDetallado')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-blue-700">{t('metodologia.rolDelProfesor')}</h2>
        <p className="mt-2 font-medium">{t('metodologia.inspiradoEnMontessoriConFlexibilidad')}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.facilitadorDelAprendizaje')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.observacionYGuia')}</li>
              <li>{t('metodologia.intervencionFlexible')}</li>
              <li>{t('metodologia.apoyoIndividualOGrupal')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.gestionDelAula')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.desbloqueoDeModulos')}</li>
              <li>{t('metodologia.adaptacionDelMaterial')}</li>
              <li>{t('metodologia.seguimientoDeProgreso')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-blue-700">{t('metodologia.enfoquePractico')}</h2>
        <p className="mt-2 font-medium">{t('metodologia.cadaTemaIniciaConLa')}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.procesoDeAprendizaje')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.definicionDelProblema')}</li>
              <li>{t('metodologia.herramientasNecesarias')}</li>
              <li>{t('metodologia.practicaGuiada')}</li>
              <li>{t('metodologia.evaluacionAdaptativa')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sky-700 font-semibold">{t('metodologia.ejemploMatematicas')}</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{t('metodologia.numerosNaturalesYOperaciones')}</li>
              <li>{t('metodologia.formulasYEcuaciones')}</li>
              <li>{t('metodologia.multiplesRespuestasCorrectas')}</li>
              <li>{t('metodologia.dificultadCreciente')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </main>
</>

) }
