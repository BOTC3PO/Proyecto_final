/**
 * Showcase de la librería de componentes base (Fase D.2). Solo dev.
 *
 * Sirve para ver todos los componentes con el tema activo y verificar
 * navegación por teclado / nombres accesibles. No se incluye en producción
 * (la ruta se registra solo cuando `import.meta.env.DEV`).
 */
import { useState } from "react";
import {
  Button,
  Card,
  CardHead,
  CardBody,
  CardFoot,
  Input,
  Select,
  Textarea,
  Tabs,
  Chip,
  ChipInput,
  Pill,
  EmptyState,
  TopBar,
  PropertiesPanel,
  PanelSection,
} from "../../components/ui";

export default function UiShowcase() {
  const [tab, setTab] = useState("uno");
  const [tags, setTags] = useState<string[]>(["álgebra", "demo"]);
  const [nombre, setNombre] = useState("Documento de ejemplo");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-text)]">
      <TopBar
        eyebrow="Showcase UI"
        title={nombre}
        onTitleChange={setNombre}
        onBack={() => history.back()}
        saved={{ status: "saved", text: "Guardado hace 2 s" }}
        actions={
          <>
            <Button variant="ghost" size="sm">Vista previa</Button>
            <Button variant="primary" size="sm">Guardar</Button>
          </>
        }
      />

      <div className="mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <Card>
            <CardHead>
              <h2 className="text-sm font-bold">Botones</h2>
              <Pill tone="info">Demo</Pill>
            </CardHead>
            <CardBody className="flex flex-wrap items-center gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="icon" aria-label="Ícono de ejemplo">★</Button>
              <Button variant="ghost" pressed={toggle} onClick={() => setToggle((v) => !v)}>
                Toggle {toggle ? "on" : "off"}
              </Button>
              <Button size="sm">Small</Button>
            </CardBody>
            <CardFoot>
              <Button variant="ghost" size="sm">Cancelar</Button>
              <Button size="sm">Aceptar</Button>
            </CardFoot>
          </Card>

          <Card>
            <CardHead><h2 className="text-sm font-bold">Campos</h2></CardHead>
            <CardBody className="space-y-3">
              <Input label="Nombre" placeholder="Ej: MRU" required />
              <Select label="Materia" defaultValue="">
                <option value="">(sin materia)</option>
                <option value="mat">Matemática</option>
                <option value="fis">Física</option>
              </Select>
              <Textarea label="Descripción" rows={3} hint="Máx 1000 caracteres" />
              <Input aria-label="Campo con error" error="Este campo es obligatorio" />
              <ChipInput label="Tags" value={tags} onChange={setTags} placeholder="Escribí y Enter" />
            </CardBody>
          </Card>

          <Card>
            <CardHead><h2 className="text-sm font-bold">Tabs</h2></CardHead>
            <CardBody>
              <Tabs
                aria-label="Demo de tabs"
                value={tab}
                onChange={setTab}
                tabs={[
                  { id: "uno", label: "Código", content: <p className="text-sm">Contenido del tab Código.</p> },
                  { id: "dos", label: "Formulario", content: <p className="text-sm">Contenido del tab Formulario.</p> },
                  { id: "tres", label: "Vista previa", content: <p className="text-sm">Contenido del tab Vista previa.</p> },
                ]}
              />
            </CardBody>
          </Card>

          <Card>
            <CardHead><h2 className="text-sm font-bold">Pills y chips</h2></CardHead>
            <CardBody className="flex flex-wrap items-center gap-2">
              <Pill tone="ok">Completo</Pill>
              <Pill tone="warn">Incompleto</Pill>
              <Pill tone="danger">Error</Pill>
              <Pill tone="info">Info</Pill>
              <Pill tone="neutral">Neutral</Pill>
              <Chip onRemove={() => {}} removeLabel="Quitar ejemplo">Chip</Chip>
            </CardBody>
          </Card>

          <EmptyState
            icon="∅"
            title="Sin elementos"
            description="Cuando agregues contenido aparecerá acá."
            action={<Button size="sm">Agregar</Button>}
          />
        </div>

        <PropertiesPanel title="Propiedades" className="rounded-[var(--r-lg)] border">
          <PanelSection title="Datos">
            <Input label="Etiqueta" placeholder="Texto" />
          </PanelSection>
          <PanelSection title="Estilo">
            <Select label="Color" defaultValue="a">
              <option value="a">Primario</option>
              <option value="b">Acento</option>
            </Select>
          </PanelSection>
        </PropertiesPanel>
      </div>
    </div>
  );
}
