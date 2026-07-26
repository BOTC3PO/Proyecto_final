/**
 * PLAN-multirol Fase 2 — selector de escuela.
 *
 * Sólo se renderiza si la persona pertenece a MÁS DE UNA escuela: para el
 * caso normal (una sola) no gasta espacio ni pide nada al back de más.
 *
 * Cambiar de escuela cambia el rol efectivo — los roles del JWT son los de
 * la escuela activa — así que después del cambio se recarga la app: el
 * menú, las rutas y los permisos del shell se arman al montar a partir del
 * rol, y refrescar es más honesto (y mucho más barato) que intentar
 * re-derivar media UI en caliente.
 */
import { useState } from 'react';
import { useAuth } from '../auth/use-auth';
import { useI18n } from '../i18n/I18nContext';
import { Menu, type MenuTriggerProps } from '../ui';
import { useMisEscuelas, ROLE_LABEL_KEY } from '../hooks/useMisEscuelas';

function SelectorTrigger({ menu, nombre, etiqueta }: {
  menu: MenuTriggerProps;
  nombre: string;
  etiqueta: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={menu.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-haspopup={menu['aria-haspopup']}
      aria-expanded={menu['aria-expanded']}
      aria-controls={menu['aria-controls']}
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-3)',
        paddingBlock: 'var(--space-2)',
        paddingInline: 'var(--space-4)',
        background: hovered ? 'var(--c-hover)' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 120ms ease',
        textAlign: 'left',
      }}
    >
      <span aria-hidden="true" style={{ flexShrink: 0, fontSize: 'var(--fs-2)' }}>🏫</span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span
          style={{
            display: 'block',
            fontSize: 'var(--fs-0)',
            color: 'var(--c-text-muted)',
            lineHeight: 1.2,
          }}
        >
          {etiqueta}
        </span>
        <span
          style={{
            display: 'block',
            fontSize: 'var(--fs-1)',
            color: 'var(--c-text)',
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {nombre}
        </span>
      </span>
      <span
        aria-hidden="true"
        style={{
          flexShrink: 0,
          color: 'var(--c-text-muted)',
          transform: menu['aria-expanded'] ? 'rotate(180deg)' : 'none',
          transition: 'transform 120ms ease',
        }}
      >
        ▾
      </span>
    </button>
  );
}

export default function SelectorEscuela() {
  const { user } = useAuth();
  const { t } = useI18n();
  const { escuelas, tieneVarias, activa, cambiando, error, seleccionar } = useMisEscuelas();

  if (!tieneVarias) return null;

  return (
    <div
      style={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--c-border)',
      }}
    >
      <Menu
        align="start"
        placement="up"
        fullWidth
        panelWidth="100%"
        trigger={(p) => (
          <SelectorTrigger
            menu={p}
            nombre={activa?.nombre ?? t('selectorEscuela.sinEscuela')}
            etiqueta={t('selectorEscuela.escuela')}
          />
        )}
      >
        {({ close }) => (
          <div style={{ padding: 'var(--space-2) 0', background: 'var(--c-surface)' }}>
            {error && (
              <p
                role="alert"
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  margin: 0,
                  fontSize: 'var(--fs-0)',
                  color: 'var(--c-danger)',
                }}
              >
                {t('selectorEscuela.error')}
              </p>
            )}
            {escuelas.map((e) => {
              const esActiva = e.escuelaId === user?.schoolId;
              return (
                <button
                  key={e.escuelaId}
                  type="button"
                  role="menuitem"
                  onClick={() => void seleccionar(e.escuelaId, close)}
                  data-testid={`selector-escuela-${e.escuelaId}`}
                  disabled={cambiando !== null}
                  aria-current={esActiva ? 'true' : undefined}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: 'var(--space-2) var(--space-4)',
                    background: esActiva ? 'var(--c-hover)' : 'transparent',
                    border: 'none',
                    cursor: cambiando ? 'wait' : 'pointer',
                    color: 'var(--c-text)',
                  }}
                >
                  <span style={{ display: 'block', fontSize: 'var(--fs-1)' }}>
                    {e.nombre}
                    {esActiva && ' ✓'}
                  </span>
                  {/* Los roles importan: la misma persona puede entrar como
                      profesor a una escuela y como alumno a otra, y el menú
                      lateral cambia entero según eso. */}
                  <span
                    style={{
                      display: 'block',
                      fontSize: 'var(--fs-0)',
                      color: 'var(--c-text-muted)',
                    }}
                  >
                    {e.roles.map((r) => (ROLE_LABEL_KEY[r] ? t(ROLE_LABEL_KEY[r]) : r)).join(' · ')}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </Menu>
    </div>
  );
}
