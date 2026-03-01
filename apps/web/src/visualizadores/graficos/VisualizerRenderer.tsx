import type {
  AlgebraCalculoVisualSpec,
  ChartSpec,
  ConceptMapSpec,
  CircuitSpec,
  ChemPeriodicTableSpec,
  ChemReactionSpec,
  ChemStructureSpec,
  ChemTitrationSpec,
  ChemVSEPRSpec,
  EnergyChartSpec,
  FieldLinesSpec,
  FlowSpec,
  FuncionesGraficasSpec,
  GeometriaPlanaEspacialSpec,
  MapSpec,
  OpticsRaySpec,
  PhysicsSimulationSpec,
  PhysicsForcesVectorSpec,
  PhysicsMotionChartSpec,
  TimelineSpec,
  TrigonometriaAvanzadaSpec,
  VisualSpec,
  WaveInterferenceSpec,
  StatDistributionSpec,
  StatRegressionSpec,
  SocialPopulationPyramidSpec,
  SocialChoroplethSpec,
  PhilArgumentMapSpec,
  PhilDilemmaSpec,
  ArtColorWheelSpec,
  ArtCompositionSpec,
  BioCellDiagramSpec,
  BioGeneticsSpec,
  BioPopulationDynamicsSpec,
  MusicWaveformSpec,
  MusicRhythmGridSpec,
  PolVotingSystemsSpec,
  PolPowerDistributionSpec,
  CivicRightsTreeSpec,
  CivicBudgetSpec,
  EnvCarbonCycleSpec,
  EnvEcosystemSpec,
  CsSortingSpec,
  CsGraphSpec,
  CsBinaryTreeSpec,
  NatWeatherSpec,
  NatWaterCycleSpec,
  CookRecipeScalerSpec,
  CookMaillardSpec,
  LifeBudgetSpec,
  LifeTimeMatrixSpec,
} from "../types";
import StatDistributionVisualizer from "../estadistica/StatDistributionVisualizer";
import StatRegressionVisualizer from "../estadistica/StatRegressionVisualizer";
import SocialPopulationPyramidVisualizer from "../social/SocialPopulationPyramidVisualizer";
import SocialChoroplethVisualizer from "../social/SocialChoroplethVisualizer";
import PhilArgumentMapVisualizer from "../filosofia/PhilArgumentMapVisualizer";
import PhilDilemmaVisualizer from "../filosofia/PhilDilemmaVisualizer";
import ArtColorWheelVisualizer from "../arte/ArtColorWheelVisualizer";
import ArtCompositionVisualizer from "../arte/ArtCompositionVisualizer";
import BioCellDiagramVisualizer from "../biologia/BioCellDiagramVisualizer";
import BioGeneticsVisualizer from "../biologia/BioGeneticsVisualizer";
import BioPopulationDynamicsVisualizer from "../biologia/BioPopulationDynamicsVisualizer";
import MusicWaveformVisualizer from "../musica/MusicWaveformVisualizer";
import MusicRhythmGridVisualizer from "../musica/MusicRhythmGridVisualizer";
import PolVotingSystemsVisualizer from "../politica/PolVotingSystemsVisualizer";
import PolPowerDistributionVisualizer from "../politica/PolPowerDistributionVisualizer";
import CivicRightsTreeVisualizer from "../civica/CivicRightsTreeVisualizer";
import CivicBudgetVisualizer from "../civica/CivicBudgetVisualizer";
import EnvCarbonCycleVisualizer from "../ambiente/EnvCarbonCycleVisualizer";
import EnvEcosystemVisualizer from "../ambiente/EnvEcosystemVisualizer";
import CsSortingVisualizer from "../informatica/CsSortingVisualizer";
import CsGraphVisualizer from "../informatica/CsGraphVisualizer";
import CsBinaryTreeVisualizer from "../informatica/CsBinaryTreeVisualizer";
import NatWeatherVisualizer from "../naturales/NatWeatherVisualizer";
import NatWaterCycleVisualizer from "../naturales/NatWaterCycleVisualizer";
import CookRecipeScalerVisualizer from "../cocina/CookRecipeScalerVisualizer";
import CookMaillardVisualizer from "../cocina/CookMaillardVisualizer";
import LifeBudgetVisualizer from "../vida/LifeBudgetVisualizer";
import LifeTimeMatrixVisualizer from "../vida/LifeTimeMatrixVisualizer";
import {
  AlgebraCalculoVisualVisualizer,
  FuncionesGraficasVisualizer,
  GeometriaPlanaEspacialVisualizer,
  TrigonometriaAvanzadaVisualizer,
} from "../matematicas";
import PhysicsForcesVectorVisualizer from "../fisica/PhysicsForcesVectorVisualizer";
import PhysicsMotionChartVisualizer from "../fisica/PhysicsMotionChartVisualizer";
import EnergyChartVisualizer from "../fisica/EnergyChartVisualizer";
import CircuitVisualizer from "../fisica/CircuitVisualizer";
import FieldLinesVisualizer from "../fisica/FieldLinesVisualizer";
import WaveInterferenceVisualizer from "../fisica/WaveInterferenceVisualizer";
import OpticsRayVisualizer from "../fisica/OpticsRayVisualizer";
import FreeFallSimulationVisualizer from "../fisica/FreeFallSimulationVisualizer";
import ChemReactionVisualizer from "../quimica/ChemReactionVisualizer";
import ChemStructureVisualizer from "../quimica/ChemStructureVisualizer";
import ChemPeriodicTableVisualizer from "../quimica/ChemPeriodicTableVisualizer";
import ChemVSEPRVisualizer from "../quimica/ChemVSEPRVisualizer";
import ChemTitrationVisualizer from "../quimica/ChemTitrationVisualizer";
import ChartsVisualizer from "./ChartsVisualizer";
import ConceptMapVisualizer from "./ConceptMapVisualizer";
import FlowDiagramVisualizer from "./FlowDiagramVisualizer";
import InteractiveMapVisualizer from "./InteractiveMapVisualizer";
import TimelineVisualizer from "./TimelineVisualizer";

type VisualizerRendererProps = {
  spec: VisualSpec;
};

function TimelineRenderer({ spec }: { spec: TimelineSpec }) {
  return <TimelineVisualizer spec={spec} />;
}

function ConceptMapRenderer({ spec }: { spec: ConceptMapSpec }) {
  return <ConceptMapVisualizer spec={spec} />;
}

function ChartRenderer({ spec }: { spec: ChartSpec }) {
  return <ChartsVisualizer spec={spec} />;
}

function FlowRenderer({ spec }: { spec: FlowSpec }) {
  return <FlowDiagramVisualizer spec={spec} />;
}

function MapRenderer({ spec }: { spec: MapSpec }) {
  return <InteractiveMapVisualizer spec={spec} />;
}

function FuncionesGraficasRenderer({ spec }: { spec: FuncionesGraficasSpec }) {
  return <FuncionesGraficasVisualizer spec={spec} />;
}

function GeometriaPlanaEspacialRenderer({
  spec,
}: {
  spec: GeometriaPlanaEspacialSpec;
}) {
  return <GeometriaPlanaEspacialVisualizer spec={spec} />;
}

function TrigonometriaAvanzadaRenderer({
  spec,
}: {
  spec: TrigonometriaAvanzadaSpec;
}) {
  return <TrigonometriaAvanzadaVisualizer spec={spec} />;
}

function AlgebraCalculoVisualRenderer({
  spec,
}: {
  spec: AlgebraCalculoVisualSpec;
}) {
  return <AlgebraCalculoVisualVisualizer spec={spec} />;
}

function PhysicsMotionChartRenderer({
  spec,
}: {
  spec: PhysicsMotionChartSpec;
}) {
  return <PhysicsMotionChartVisualizer spec={spec} />;
}

function PhysicsForcesVectorRenderer({
  spec,
}: {
  spec: PhysicsForcesVectorSpec;
}) {
  return <PhysicsForcesVectorVisualizer spec={spec} />;
}

function EnergyChartRenderer({ spec }: { spec: EnergyChartSpec }) {
  return <EnergyChartVisualizer spec={spec} />;
}

function CircuitRenderer({ spec }: { spec: CircuitSpec }) {
  return <CircuitVisualizer spec={spec} />;
}

function FieldLinesRenderer({ spec }: { spec: FieldLinesSpec }) {
  return <FieldLinesVisualizer spec={spec} />;
}

function WaveInterferenceRenderer({ spec }: { spec: WaveInterferenceSpec }) {
  return <WaveInterferenceVisualizer spec={spec} />;
}

function OpticsRayRenderer({ spec }: { spec: OpticsRaySpec }) {
  return <OpticsRayVisualizer spec={spec} />;
}

function PhysicsSimulationRenderer({ spec }: { spec: PhysicsSimulationSpec }) {
  return <FreeFallSimulationVisualizer spec={spec} />;
}

function ChemStructureRenderer({ spec }: { spec: ChemStructureSpec }) {
  return <ChemStructureVisualizer spec={spec} />;
}

function ChemPeriodicTableRenderer({ spec }: { spec: ChemPeriodicTableSpec }) {
  return <ChemPeriodicTableVisualizer spec={spec} />;
}

function ChemVSEPRRenderer({ spec }: { spec: ChemVSEPRSpec }) {
  return <ChemVSEPRVisualizer spec={spec} />;
}

function ChemReactionRenderer({ spec }: { spec: ChemReactionSpec }) {
  return <ChemReactionVisualizer spec={spec} />;
}

function ChemTitrationRenderer({ spec }: { spec: ChemTitrationSpec }) {
  return <ChemTitrationVisualizer spec={spec} />;
}

export default function VisualizerRenderer({ spec }: VisualizerRendererProps) {
  switch (spec.kind) {
    case "timeline":
      return <TimelineRenderer spec={spec} />;
    case "concept-map":
      return <ConceptMapRenderer spec={spec} />;
    case "chart":
      return <ChartRenderer spec={spec} />;
    case "flow":
      return <FlowRenderer spec={spec} />;
    case "map":
      return <MapRenderer spec={spec} />;
    case "funciones-graficas":
      return <FuncionesGraficasRenderer spec={spec} />;
    case "geometria-plana-espacial":
      return <GeometriaPlanaEspacialRenderer spec={spec} />;
    case "trigonometria-avanzada":
      return <TrigonometriaAvanzadaRenderer spec={spec} />;
    case "algebra-calculo-visual":
      return <AlgebraCalculoVisualRenderer spec={spec} />;
    case "physics-motion-chart":
      return <PhysicsMotionChartRenderer spec={spec} />;
    case "physics-forces-vectors":
      return <PhysicsForcesVectorRenderer spec={spec} />;
    case "energy-chart":
      return <EnergyChartRenderer spec={spec} />;
    case "circuit":
      return <CircuitRenderer spec={spec} />;
    case "field-lines":
      return <FieldLinesRenderer spec={spec} />;
    case "wave-interference":
      return <WaveInterferenceRenderer spec={spec} />;
    case "optics-rays":
      return <OpticsRayRenderer spec={spec} />;
    case "physics-simulation":
      return <PhysicsSimulationRenderer spec={spec} />;
    case "chem-structure":
      return <ChemStructureRenderer spec={spec} />;
    case "chem-reaction":
      return <ChemReactionRenderer spec={spec} />;
    case "chem-periodic-table":
      return <ChemPeriodicTableRenderer spec={spec} />;
    case "chem-vsepr":
      return <ChemVSEPRRenderer spec={spec} />;
    case "chem-titration":
      return <ChemTitrationRenderer spec={spec} />;
    case "stat-distribution":
      return <StatDistributionVisualizer spec={spec as StatDistributionSpec} />;
    case "stat-regression":
      return <StatRegressionVisualizer spec={spec as StatRegressionSpec} />;
    case "social-population-pyramid":
      return <SocialPopulationPyramidVisualizer spec={spec as SocialPopulationPyramidSpec} />;
    case "social-choropleth":
      return <SocialChoroplethVisualizer spec={spec as SocialChoroplethSpec} />;
    case "phil-argument-map":
      return <PhilArgumentMapVisualizer spec={spec as PhilArgumentMapSpec} />;
    case "phil-dilemma":
      return <PhilDilemmaVisualizer spec={spec as PhilDilemmaSpec} />;
    case "art-color-wheel":
      return <ArtColorWheelVisualizer spec={spec as ArtColorWheelSpec} />;
    case "art-composition":
      return <ArtCompositionVisualizer spec={spec as ArtCompositionSpec} />;
    case "bio-cell-diagram":
      return <BioCellDiagramVisualizer spec={spec as BioCellDiagramSpec} />;
    case "bio-genetics":
      return <BioGeneticsVisualizer spec={spec as BioGeneticsSpec} />;
    case "bio-population-dynamics":
      return <BioPopulationDynamicsVisualizer spec={spec as BioPopulationDynamicsSpec} />;
    case "music-waveform":
      return <MusicWaveformVisualizer spec={spec as MusicWaveformSpec} />;
    case "music-rhythm-grid":
      return <MusicRhythmGridVisualizer spec={spec as MusicRhythmGridSpec} />;
    case "pol-voting-systems":
      return <PolVotingSystemsVisualizer spec={spec as PolVotingSystemsSpec} />;
    case "pol-power-distribution":
      return <PolPowerDistributionVisualizer spec={spec as PolPowerDistributionSpec} />;
    case "civic-rights-tree":
      return <CivicRightsTreeVisualizer spec={spec as CivicRightsTreeSpec} />;
    case "civic-budget":
      return <CivicBudgetVisualizer spec={spec as CivicBudgetSpec} />;
    case "env-carbon-cycle":
      return <EnvCarbonCycleVisualizer spec={spec as EnvCarbonCycleSpec} />;
    case "env-ecosystem":
      return <EnvEcosystemVisualizer spec={spec as EnvEcosystemSpec} />;
    case "cs-sorting":
      return <CsSortingVisualizer spec={spec as CsSortingSpec} />;
    case "cs-graph":
      return <CsGraphVisualizer spec={spec as CsGraphSpec} />;
    case "cs-binary-tree":
      return <CsBinaryTreeVisualizer spec={spec as CsBinaryTreeSpec} />;
    case "nat-weather":
      return <NatWeatherVisualizer spec={spec as NatWeatherSpec} />;
    case "nat-water-cycle":
      return <NatWaterCycleVisualizer spec={spec as NatWaterCycleSpec} />;
    case "cook-recipe-scaler":
      return <CookRecipeScalerVisualizer spec={spec as CookRecipeScalerSpec} />;
    case "cook-maillard":
      return <CookMaillardVisualizer spec={spec as CookMaillardSpec} />;
    case "life-budget":
      return <LifeBudgetVisualizer spec={spec as LifeBudgetSpec} />;
    case "life-time-matrix":
      return <LifeTimeMatrixVisualizer spec={spec as LifeTimeMatrixSpec} />;
    default:
      return (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
          No hay un visualizador disponible para este tipo de contenido.
        </div>
      );
  }
}
