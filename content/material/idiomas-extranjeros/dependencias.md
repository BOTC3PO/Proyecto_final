# Idiomas extranjeros — Dependencias entre temas

> **Generado** por `_qa_tools/gen_dependencias_idiomas.py` a partir del orden de `../idiomas-extranjeros-PLANIFICACION.md`. No editar a mano:
> cambiar el plan o las reglas y volver a generar. **Decisión de Claude, no pedida**: el plan fija el orden de los temas por nivel pero no sus
> prerrequisitos; estas reglas son un criterio de trabajo, para revisar con quien enseña cada idioma.

Reglas, iguales en los 13 idiomas:
- **Escritura** (japonés, coreano, chino, árabe, ruso, hindi): el primer tema es raíz; todo lo demás depende de la escritura.
- **Gramática**, por grupos de nivel en el orden del plan: el primer tema de cada grupo es su *ancla* y depende del último tema del grupo anterior; el resto del grupo depende del ancla.
- **Destrezas** (reading, writing, listening, speaking): dependen de la misma destreza del nivel anterior y del ancla de la gramática de su nivel.
- Los temas que el plan no lista (chino y esperanto agregaron varios después) se ubican por el `nivel` de su cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `ingles/to-be/` | Ninguna — raíz | Primer tema de gramática. |
| `ingles/present-simple/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/present-continuous/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/articulos/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/plurales/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/posesivos/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/there-is-there-are/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/preposiciones-lugar-tiempo/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/past-simple-regular-irregular/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/can-cant/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/comparativos-superlativos/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/imperativos/` | `ingles/to-be/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/past-continuous/` | `ingles/imperativos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ingles/present-perfect/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/futuro-going-to-will/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/primer-condicional/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/modales-should-must-have-to/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/voz-pasiva-basica/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/discurso-indirecto-basico/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/oraciones-de-relativo/` | `ingles/past-continuous/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/segundo-tercer-condicional/` | `ingles/oraciones-de-relativo/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ingles/voz-pasiva-avanzada/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/discurso-indirecto-avanzado/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/modales-de-deduccion/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/phrasal-verbs/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/gerundio-vs-infinitivo/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/collocations/` | `ingles/segundo-tercer-condicional/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/condicionales-mixtos/` | `ingles/collocations/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ingles/inversion/` | `ingles/condicionales-mixtos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/cleft-sentences/` | `ingles/condicionales-mixtos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/modales-matizados/` | `ingles/condicionales-mixtos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/idioms-avanzados/` | `ingles/condicionales-mixtos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/registro-formal-informal/` | `ingles/condicionales-mixtos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ingles/reading-a2/` | `ingles/to-be/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/writing-a2/` | `ingles/to-be/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/listening-a2/` | `ingles/to-be/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/speaking-a2/` | `ingles/to-be/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/reading-b1/` | `ingles/past-continuous/`, `ingles/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/writing-b1/` | `ingles/past-continuous/`, `ingles/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/listening-b1/` | `ingles/past-continuous/`, `ingles/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/speaking-b1/` | `ingles/past-continuous/`, `ingles/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/reading-b2/` | `ingles/segundo-tercer-condicional/`, `ingles/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/writing-b2/` | `ingles/segundo-tercer-condicional/`, `ingles/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/listening-b2/` | `ingles/segundo-tercer-condicional/`, `ingles/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/speaking-b2/` | `ingles/segundo-tercer-condicional/`, `ingles/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/reading-c1/` | `ingles/condicionales-mixtos/`, `ingles/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/writing-c1/` | `ingles/condicionales-mixtos/`, `ingles/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/listening-c1/` | `ingles/condicionales-mixtos/`, `ingles/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ingles/speaking-c1/` | `ingles/condicionales-mixtos/`, `ingles/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/conjugacion-presente/` | Ninguna — raíz | Primer tema de gramática. |
| `aleman/casos-nominativ-akkusativ/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/articulos-der-die-das/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/preguntas-w/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/negacion-nicht-kein/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/plurales/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/preposiciones-con-casos/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/verbos-modales-koennen-muessen-wollen/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/perfekt/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/orden-verbo-segunda-posicion/` | `aleman/conjugacion-presente/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/caso-dativ/` | `aleman/orden-verbo-segunda-posicion/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `aleman/caso-genitiv/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/oraciones-subordinadas-weil-dass-wenn/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/voz-pasiva/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/declinacion-adjetivos/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/comparativos/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/oraciones-de-relativo/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/konjunktiv-ii-basico/` | `aleman/caso-dativ/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/konjunktiv-ii-completo/` | `aleman/konjunktiv-ii-basico/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `aleman/voz-pasiva-con-modales/` | `aleman/konjunktiv-ii-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/nominalizacion/` | `aleman/konjunktiv-ii-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/conectores-avanzados-obwohl-trotzdem-indem/` | `aleman/konjunktiv-ii-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/atributos-extendidos/` | `aleman/konjunktiv-ii-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/futur-ii/` | `aleman/konjunktiv-ii-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/konjunktiv-i-discurso-indirecto/` | `aleman/futur-ii/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `aleman/subjuntivo-en-escritura-formal/` | `aleman/konjunktiv-i-discurso-indirecto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/particulas-modales/` | `aleman/konjunktiv-i-discurso-indirecto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/estructuras-nominales-complejas/` | `aleman/konjunktiv-i-discurso-indirecto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/registro-formal-informal/` | `aleman/konjunktiv-i-discurso-indirecto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `aleman/reading-a2/` | `aleman/conjugacion-presente/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/writing-a2/` | `aleman/conjugacion-presente/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/listening-a2/` | `aleman/conjugacion-presente/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/speaking-a2/` | `aleman/conjugacion-presente/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/reading-b1/` | `aleman/caso-dativ/`, `aleman/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/writing-b1/` | `aleman/caso-dativ/`, `aleman/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/listening-b1/` | `aleman/caso-dativ/`, `aleman/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/speaking-b1/` | `aleman/caso-dativ/`, `aleman/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/reading-b2/` | `aleman/konjunktiv-ii-completo/`, `aleman/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/writing-b2/` | `aleman/konjunktiv-ii-completo/`, `aleman/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/listening-b2/` | `aleman/konjunktiv-ii-completo/`, `aleman/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/speaking-b2/` | `aleman/konjunktiv-ii-completo/`, `aleman/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/reading-c1/` | `aleman/konjunktiv-i-discurso-indirecto/`, `aleman/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/writing-c1/` | `aleman/konjunktiv-i-discurso-indirecto/`, `aleman/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/listening-c1/` | `aleman/konjunktiv-i-discurso-indirecto/`, `aleman/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `aleman/speaking-c1/` | `aleman/konjunktiv-i-discurso-indirecto/`, `aleman/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/etre-avoir/` | Ninguna — raíz | Primer tema de gramática. |
| `frances/presente-verbos-er-ir-re/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/articulos-le-la-les-un-une/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/negacion-ne-pas/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/genero-y-concordancia/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/adjetivos-posesivos/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/preposiciones/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/passe-compose/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/futur-proche-aller-infinitif/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/interrogativos/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/falsos-amigos-con-espanol/` | `frances/etre-avoir/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/imparfait/` | `frances/falsos-amigos-con-espanol/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `frances/conditionnel/` | `frances/imparfait/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/subjonctif-basico/` | `frances/imparfait/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/pronombres-relativos-qui-que-ou/` | `frances/imparfait/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/pronombres-complemento/` | `frances/imparfait/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/comparativos-superlativos/` | `frances/imparfait/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/subjonctif-completo/` | `frances/comparativos-superlativos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `frances/conditionnel-passe/` | `frances/subjonctif-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/discours-indirect/` | `frances/subjonctif-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/gerondif/` | `frances/subjonctif-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/concordance-des-temps/` | `frances/subjonctif-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/pronombres-relativos-compuestos/` | `frances/subjonctif-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/registre-soutenu-vs-familier/` | `frances/pronombres-relativos-compuestos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `frances/inversion-du-sujet/` | `frances/registre-soutenu-vs-familier/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/subordonnees-concessives-et-oppositives/` | `frances/registre-soutenu-vs-familier/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/nominalisation/` | `frances/registre-soutenu-vs-familier/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/connecteurs-logiques-avances/` | `frances/registre-soutenu-vs-familier/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `frances/reading-a2/` | `frances/etre-avoir/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/writing-a2/` | `frances/etre-avoir/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/listening-a2/` | `frances/etre-avoir/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/speaking-a2/` | `frances/etre-avoir/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/reading-b1/` | `frances/imparfait/`, `frances/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/writing-b1/` | `frances/imparfait/`, `frances/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/listening-b1/` | `frances/imparfait/`, `frances/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/speaking-b1/` | `frances/imparfait/`, `frances/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/reading-b2/` | `frances/subjonctif-completo/`, `frances/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/writing-b2/` | `frances/subjonctif-completo/`, `frances/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/listening-b2/` | `frances/subjonctif-completo/`, `frances/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/speaking-b2/` | `frances/subjonctif-completo/`, `frances/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/reading-c1/` | `frances/registre-soutenu-vs-familier/`, `frances/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/writing-c1/` | `frances/registre-soutenu-vs-familier/`, `frances/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/listening-c1/` | `frances/registre-soutenu-vs-familier/`, `frances/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `frances/speaking-c1/` | `frances/registre-soutenu-vs-familier/`, `frances/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/essere-avere/` | Ninguna — raíz | Primer tema de gramática. |
| `italiano/presente-indicativo/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/articulos/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/plurales/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/posesivos/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/passato-prossimo/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/preposiciones/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/falsos-amigos-con-espanol/` | `italiano/essere-avere/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/imperfetto/` | `italiano/falsos-amigos-con-espanol/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `italiano/futuro/` | `italiano/imperfetto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/condizionale/` | `italiano/imperfetto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/congiuntivo-basico/` | `italiano/imperfetto/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/congiuntivo-completo/` | `italiano/congiuntivo-basico/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `italiano/condizionale-passato/` | `italiano/congiuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/periodo-ipotetico/` | `italiano/congiuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/discorso-indiretto/` | `italiano/congiuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/pronombres-combinados/` | `italiano/congiuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/registro-formale-vs-informale/` | `italiano/pronombres-combinados/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `italiano/costruzioni-passive-avanzate/` | `italiano/registro-formale-vs-informale/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/nominalizzazione/` | `italiano/registro-formale-vs-informale/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/connettivi-testuali-avanzati/` | `italiano/registro-formale-vs-informale/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `italiano/reading-a2/` | `italiano/essere-avere/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/writing-a2/` | `italiano/essere-avere/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/listening-a2/` | `italiano/essere-avere/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/speaking-a2/` | `italiano/essere-avere/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/reading-b1/` | `italiano/imperfetto/`, `italiano/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/writing-b1/` | `italiano/imperfetto/`, `italiano/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/listening-b1/` | `italiano/imperfetto/`, `italiano/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/speaking-b1/` | `italiano/imperfetto/`, `italiano/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/reading-b2/` | `italiano/congiuntivo-completo/`, `italiano/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/writing-b2/` | `italiano/congiuntivo-completo/`, `italiano/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/listening-b2/` | `italiano/congiuntivo-completo/`, `italiano/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/speaking-b2/` | `italiano/congiuntivo-completo/`, `italiano/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/reading-c1/` | `italiano/registro-formale-vs-informale/`, `italiano/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/writing-c1/` | `italiano/registro-formale-vs-informale/`, `italiano/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/listening-c1/` | `italiano/registro-formale-vs-informale/`, `italiano/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `italiano/speaking-c1/` | `italiano/registro-formale-vs-informale/`, `italiano/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/ser-estar/` | Ninguna — raíz | Primer tema de gramática. |
| `portugues-br/presente-indicativo/` | `portugues-br/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/falsos-amigos-con-espanol/` | `portugues-br/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/genero-articulos-diferencias-con-espanol/` | `portugues-br/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/preterito-perfeito/` | `portugues-br/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/preterito-imperfeito/` | `portugues-br/preterito-perfeito/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-br/futuro/` | `portugues-br/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/subjuntivo-basico/` | `portugues-br/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/uso-del-gerundio/` | `portugues-br/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/subjuntivo-completo/` | `portugues-br/uso-del-gerundio/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-br/voz-passiva-avancada/` | `portugues-br/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/discurso-indireto/` | `portugues-br/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/pronomes-combinados/` | `portugues-br/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/registro-formal-vs-informal/` | `portugues-br/pronomes-combinados/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-br/concordancia-verbal-avancada/` | `portugues-br/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/nominalizacao/` | `portugues-br/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/conectores-argumentativos-avancados/` | `portugues-br/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-br/reading-a2/` | `portugues-br/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/writing-a2/` | `portugues-br/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/listening-a2/` | `portugues-br/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/speaking-a2/` | `portugues-br/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/reading-b1/` | `portugues-br/preterito-imperfeito/`, `portugues-br/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/writing-b1/` | `portugues-br/preterito-imperfeito/`, `portugues-br/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/listening-b1/` | `portugues-br/preterito-imperfeito/`, `portugues-br/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/speaking-b1/` | `portugues-br/preterito-imperfeito/`, `portugues-br/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/reading-b2/` | `portugues-br/subjuntivo-completo/`, `portugues-br/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/writing-b2/` | `portugues-br/subjuntivo-completo/`, `portugues-br/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/listening-b2/` | `portugues-br/subjuntivo-completo/`, `portugues-br/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/speaking-b2/` | `portugues-br/subjuntivo-completo/`, `portugues-br/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/reading-c1/` | `portugues-br/registro-formal-vs-informal/`, `portugues-br/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/writing-c1/` | `portugues-br/registro-formal-vs-informal/`, `portugues-br/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/listening-c1/` | `portugues-br/registro-formal-vs-informal/`, `portugues-br/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-br/speaking-c1/` | `portugues-br/registro-formal-vs-informal/`, `portugues-br/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/ser-estar/` | Ninguna — raíz | Primer tema de gramática. |
| `portugues-pt/presente-indicativo/` | `portugues-pt/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/colocacion-pronominal-proclise/` | `portugues-pt/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/genero-articulos-diferencias-con-espanol/` | `portugues-pt/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/preterito-perfeito/` | `portugues-pt/ser-estar/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/preterito-imperfeito/` | `portugues-pt/preterito-perfeito/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-pt/futuro/` | `portugues-pt/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/subjuntivo-basico/` | `portugues-pt/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/diferencias-lexicas-con-pt-br/` | `portugues-pt/preterito-imperfeito/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/subjuntivo-completo/` | `portugues-pt/diferencias-lexicas-con-pt-br/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-pt/voz-passiva-avancada/` | `portugues-pt/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/discurso-indireto/` | `portugues-pt/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/mesoclise/` | `portugues-pt/subjuntivo-completo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/registro-formal-vs-informal/` | `portugues-pt/mesoclise/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `portugues-pt/concordancia-verbal-avancada/` | `portugues-pt/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/nominalizacao/` | `portugues-pt/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/conectores-argumentativos-avancados/` | `portugues-pt/registro-formal-vs-informal/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `portugues-pt/reading-a2/` | `portugues-pt/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/writing-a2/` | `portugues-pt/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/listening-a2/` | `portugues-pt/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/speaking-a2/` | `portugues-pt/ser-estar/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/reading-b1/` | `portugues-pt/preterito-imperfeito/`, `portugues-pt/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/writing-b1/` | `portugues-pt/preterito-imperfeito/`, `portugues-pt/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/listening-b1/` | `portugues-pt/preterito-imperfeito/`, `portugues-pt/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/speaking-b1/` | `portugues-pt/preterito-imperfeito/`, `portugues-pt/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/reading-b2/` | `portugues-pt/subjuntivo-completo/`, `portugues-pt/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/writing-b2/` | `portugues-pt/subjuntivo-completo/`, `portugues-pt/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/listening-b2/` | `portugues-pt/subjuntivo-completo/`, `portugues-pt/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/speaking-b2/` | `portugues-pt/subjuntivo-completo/`, `portugues-pt/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/reading-c1/` | `portugues-pt/registro-formal-vs-informal/`, `portugues-pt/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/writing-c1/` | `portugues-pt/registro-formal-vs-informal/`, `portugues-pt/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/listening-c1/` | `portugues-pt/registro-formal-vs-informal/`, `portugues-pt/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `portugues-pt/speaking-c1/` | `portugues-pt/registro-formal-vs-informal/`, `portugues-pt/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/katakana/` | `japones/hiragana/` | Sistema de escritura: se aprende después del primero. |
| `japones/kanji-basicos/` | `japones/hiragana/` | Sistema de escritura: se aprende después del primero. |
| `japones/hiragana/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `japones/particulas-wa-ga-wo-ni-de/` | `japones/hiragana/`, `japones/katakana/`, `japones/kanji-basicos/` | Primer tema de gramática, tras la escritura. |
| `japones/formas-verbales-diccionario-masu/` | `japones/particulas-wa-ga-wo-ni-de/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/adjetivos-i-na/` | `japones/particulas-wa-ga-wo-ni-de/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/formacion-de-preguntas/` | `japones/particulas-wa-ga-wo-ni-de/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/contadores/` | `japones/particulas-wa-ga-wo-ni-de/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/forma-te/` | `japones/contadores/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `japones/forma-potencial/` | `japones/forma-te/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/formas-condicionales/` | `japones/forma-te/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/comparacion/` | `japones/forma-te/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/forma-pasiva/` | `japones/comparacion/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `japones/forma-causativa/` | `japones/forma-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/keigo-basico-teineigo/` | `japones/forma-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/expresiones-de-deduccion/` | `japones/forma-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/oraciones-compuestas/` | `japones/forma-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/keigo-sonkeigo-kenjougo/` | `japones/oraciones-compuestas/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `japones/forma-causativa-pasiva/` | `japones/keigo-sonkeigo-kenjougo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/estilo-formal-de-aru/` | `japones/keigo-sonkeigo-kenjougo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/conectores-formales-de-escritura/` | `japones/keigo-sonkeigo-kenjougo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/expresiones-idiomaticas-avanzadas/` | `japones/conectores-formales-de-escritura/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `japones/matices-de-registro/` | `japones/expresiones-idiomaticas-avanzadas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/estructuras-clasicas-remanentes/` | `japones/expresiones-idiomaticas-avanzadas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/lectura-de-textos-especializados/` | `japones/expresiones-idiomaticas-avanzadas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `japones/reading-n5/` | `japones/particulas-wa-ga-wo-ni-de/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/writing-n5/` | `japones/particulas-wa-ga-wo-ni-de/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/listening-n5/` | `japones/particulas-wa-ga-wo-ni-de/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/speaking-n5/` | `japones/particulas-wa-ga-wo-ni-de/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/reading-n4/` | `japones/forma-te/`, `japones/reading-n5/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/writing-n4/` | `japones/forma-te/`, `japones/writing-n5/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/listening-n4/` | `japones/forma-te/`, `japones/listening-n5/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/speaking-n4/` | `japones/forma-te/`, `japones/speaking-n5/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/reading-n3/` | `japones/forma-pasiva/`, `japones/reading-n4/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/writing-n3/` | `japones/forma-pasiva/`, `japones/writing-n4/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/listening-n3/` | `japones/forma-pasiva/`, `japones/listening-n4/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/speaking-n3/` | `japones/forma-pasiva/`, `japones/speaking-n4/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/reading-n2/` | `japones/keigo-sonkeigo-kenjougo/`, `japones/reading-n3/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/writing-n2/` | `japones/keigo-sonkeigo-kenjougo/`, `japones/writing-n3/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/listening-n2/` | `japones/keigo-sonkeigo-kenjougo/`, `japones/listening-n3/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/speaking-n2/` | `japones/keigo-sonkeigo-kenjougo/`, `japones/speaking-n3/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/reading-n1/` | `japones/expresiones-idiomaticas-avanzadas/`, `japones/reading-n2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/writing-n1/` | `japones/expresiones-idiomaticas-avanzadas/`, `japones/writing-n2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/listening-n1/` | `japones/expresiones-idiomaticas-avanzadas/`, `japones/listening-n2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `japones/speaking-n1/` | `japones/expresiones-idiomaticas-avanzadas/`, `japones/speaking-n2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/hangul/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `coreano/particulas-eun-neun-i-ga-eul-reul/` | `coreano/hangul/` | Primer tema de gramática, tras la escritura. |
| `coreano/conjugacion-formal-informal/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/tiempos-presente-pasado-futuro/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/honorificos-basicos/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/negacion/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/conectores/` | `coreano/negacion/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `coreano/formas-de-conexion-oracional/` | `coreano/conectores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/expresiones-de-deseo-e-intencion/` | `coreano/conectores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/discurso-indirecto-basico/` | `coreano/conectores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/honorificos-completos/` | `coreano/discurso-indirecto-basico/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `coreano/voz-pasiva-y-causativa/` | `coreano/honorificos-completos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/expresiones-de-conjetura/` | `coreano/honorificos-completos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/estilo-de-escritura-formal/` | `coreano/honorificos-completos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/matices-de-registro/` | `coreano/estilo-de-escritura-formal/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `coreano/expresiones-idiomaticas/` | `coreano/matices-de-registro/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/conectores-argumentativos-avanzados/` | `coreano/matices-de-registro/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/lectura-de-textos-especializados/` | `coreano/matices-de-registro/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `coreano/reading-basico/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/writing-basico/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/listening-basico/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/speaking-basico/` | `coreano/particulas-eun-neun-i-ga-eul-reul/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/reading-intermedio-bajo/` | `coreano/conectores/`, `coreano/reading-basico/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/writing-intermedio-bajo/` | `coreano/conectores/`, `coreano/writing-basico/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/listening-intermedio-bajo/` | `coreano/conectores/`, `coreano/listening-basico/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/speaking-intermedio-bajo/` | `coreano/conectores/`, `coreano/speaking-basico/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/reading-intermedio-alto/` | `coreano/honorificos-completos/`, `coreano/reading-intermedio-bajo/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/writing-intermedio-alto/` | `coreano/honorificos-completos/`, `coreano/writing-intermedio-bajo/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/listening-intermedio-alto/` | `coreano/honorificos-completos/`, `coreano/listening-intermedio-bajo/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/speaking-intermedio-alto/` | `coreano/honorificos-completos/`, `coreano/speaking-intermedio-bajo/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/reading-avanzado/` | `coreano/matices-de-registro/`, `coreano/reading-intermedio-alto/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/writing-avanzado/` | `coreano/matices-de-registro/`, `coreano/writing-intermedio-alto/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/listening-avanzado/` | `coreano/matices-de-registro/`, `coreano/listening-intermedio-alto/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `coreano/speaking-avanzado/` | `coreano/matices-de-registro/`, `coreano/speaking-intermedio-alto/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/caracteres-y-radicales-basicos/` | `chino/pinyin-y-tonos/` | Sistema de escritura: se aprende después del primero. |
| `chino/pinyin-y-tonos/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `chino/clasificadores-medidores/` | `chino/pinyin-y-tonos/`, `chino/caracteres-y-radicales-basicos/` | Primer tema de gramática, tras la escritura. |
| `chino/orden-de-la-oracion/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/negacion-bu-mei/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/particulas-interrogativas-ma-ne/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/particula-aspectual-le/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/numeros-fechas-y-horas/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/sandhi-tonal-y-tono-neutro/` | `chino/clasificadores-medidores/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/estructuras-comparativas/` | `chino/sandhi-tonal-y-tono-neutro/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `chino/complementos-de-resultado/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/particula-guo/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/adverbios-jiu-cai-dou-hai-zai-you/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/complementos-direccionales/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/construccion-shi-de/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/particulas-modales-final-de-oracion/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/vocabulario-hsk1-2-por-campos/` | `chino/estructuras-comparativas/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/complementos-de-grado/` | `chino/vocabulario-hsk1-2-por-campos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `chino/construccion-ba/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/construccion-bei-pasiva/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/oraciones-condicionales/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/conectores-de-parrafo/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/caracteres-hsk3-6-y-formacion/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/complementos-potenciales/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/oraciones-con-verbos-en-serie-y-pivote/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/oraciones-existenciales/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/pares-correlativos-y-concesivas/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/reduplicacion-y-verbos-separables/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/vocabulario-hsk3-4-por-campos/` | `chino/complementos-de-grado/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/chengyu-modismos-de-cuatro-caracteres/` | `chino/vocabulario-hsk3-4-por-campos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `chino/registro-formal-escrito/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/estructuras-retoricas-avanzadas/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/matices-de-particulas-aspectuales/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/abreviaturas-y-neologismos/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/lectura-de-textos-periodisticos-y-literarios/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/preguntas-retoricas-y-enfasis/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/preposiciones-guanyu-duiyu-zhiyu/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/resto-de-chino-clasico-en-escritura-moderna/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/vocabulario-hsk5-6-por-campos/` | `chino/chengyu-modismos-de-cuatro-caracteres/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `chino/reading-hsk1/` | `chino/clasificadores-medidores/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/writing-hsk1/` | `chino/clasificadores-medidores/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/listening-hsk1/` | `chino/clasificadores-medidores/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/speaking-hsk1/` | `chino/clasificadores-medidores/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/reading-hsk2/` | `chino/estructuras-comparativas/`, `chino/reading-hsk1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/writing-hsk2/` | `chino/estructuras-comparativas/`, `chino/writing-hsk1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/listening-hsk2/` | `chino/estructuras-comparativas/`, `chino/listening-hsk1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/speaking-hsk2/` | `chino/estructuras-comparativas/`, `chino/speaking-hsk1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/reading-hsk34/` | `chino/complementos-de-grado/`, `chino/reading-hsk2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/writing-hsk34/` | `chino/complementos-de-grado/`, `chino/writing-hsk2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/listening-hsk34/` | `chino/complementos-de-grado/`, `chino/listening-hsk2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/speaking-hsk34/` | `chino/complementos-de-grado/`, `chino/speaking-hsk2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/reading-hsk56/` | `chino/chengyu-modismos-de-cuatro-caracteres/`, `chino/reading-hsk34/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/writing-hsk56/` | `chino/chengyu-modismos-de-cuatro-caracteres/`, `chino/writing-hsk34/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/listening-hsk56/` | `chino/chengyu-modismos-de-cuatro-caracteres/`, `chino/listening-hsk34/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `chino/speaking-hsk56/` | `chino/chengyu-modismos-de-cuatro-caracteres/`, `chino/speaking-hsk34/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/vocalizacion-tashkil/` | `arabe/alfabeto-arabe-y-conexion-de-letras/` | Sistema de escritura: se aprende después del primero. |
| `arabe/sistema-de-raices-trilateras/` | `arabe/alfabeto-arabe-y-conexion-de-letras/` | Sistema de escritura: se aprende después del primero. |
| `arabe/alfabeto-arabe-y-conexion-de-letras/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `arabe/pronombres-personales/` | `arabe/alfabeto-arabe-y-conexion-de-letras/`, `arabe/vocalizacion-tashkil/`, `arabe/sistema-de-raices-trilateras/` | Primer tema de gramática, tras la escritura. |
| `arabe/genero-masculino-femenino/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/articulo-determinado-al/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/oraciones-nominales-mubtada-khabar/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/plural-regular-masculino-femenino/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/plural-quebrado/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/presente-verbal-mudari/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/pasado-verbal-madi/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/numeros-cardinales-y-concordancia-inversa/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/preposiciones-e-interrogativos/` | `arabe/pronombres-personales/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/caso-nominativo-acusativo-genitivo-irab/` | `arabe/preposiciones-e-interrogativos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `arabe/verbos-huecos-y-defectivos/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/formas-verbales-derivadas-wazn/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/dual-el-mutanna/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/comparativo-y-superlativo/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/adjetivos-relativos-nisba/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/oraciones-condicionales-basicas/` | `arabe/caso-nominativo-acusativo-genitivo-irab/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/voz-pasiva/` | `arabe/oraciones-condicionales-basicas/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `arabe/modo-subjuntivo-y-yusivo/` | `arabe/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/oraciones-de-relativo/` | `arabe/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/concordancia-plural-no-humano-como-femenino-singular/` | `arabe/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/discurso-indirecto/` | `arabe/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/conectores-avanzados/` | `arabe/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/diglosia-fusha-vs-dialectos-hablados/` | `arabe/conectores-avanzados/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `arabe/estilo-retorico-balagha/` | `arabe/diglosia-fusha-vs-dialectos-hablados/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/estructura-nominal-idafa-compleja/` | `arabe/diglosia-fusha-vs-dialectos-hablados/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/matices-de-particulas/` | `arabe/diglosia-fusha-vs-dialectos-hablados/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/prosa-periodistica-y-formal/` | `arabe/diglosia-fusha-vs-dialectos-hablados/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `arabe/reading-a2/` | `arabe/pronombres-personales/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/writing-a2/` | `arabe/pronombres-personales/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/listening-a2/` | `arabe/pronombres-personales/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/speaking-a2/` | `arabe/pronombres-personales/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/reading-b1/` | `arabe/caso-nominativo-acusativo-genitivo-irab/`, `arabe/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/writing-b1/` | `arabe/caso-nominativo-acusativo-genitivo-irab/`, `arabe/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/listening-b1/` | `arabe/caso-nominativo-acusativo-genitivo-irab/`, `arabe/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/speaking-b1/` | `arabe/caso-nominativo-acusativo-genitivo-irab/`, `arabe/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/reading-b2/` | `arabe/voz-pasiva/`, `arabe/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/writing-b2/` | `arabe/voz-pasiva/`, `arabe/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/listening-b2/` | `arabe/voz-pasiva/`, `arabe/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/speaking-b2/` | `arabe/voz-pasiva/`, `arabe/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/reading-c1/` | `arabe/diglosia-fusha-vs-dialectos-hablados/`, `arabe/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/writing-c1/` | `arabe/diglosia-fusha-vs-dialectos-hablados/`, `arabe/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/listening-c1/` | `arabe/diglosia-fusha-vs-dialectos-hablados/`, `arabe/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `arabe/speaking-c1/` | `arabe/diglosia-fusha-vs-dialectos-hablados/`, `arabe/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/alfabeto-cirilico-y-pronunciacion/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `ruso/genero-de-sustantivos/` | `ruso/alfabeto-cirilico-y-pronunciacion/` | Primer tema de gramática, tras la escritura. |
| `ruso/caso-nominativo/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/caso-acusativo/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/caso-genitivo/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/pronombres-personales-y-posesivos/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/presente-de-verbos/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/pasado-de-verbos-y-genero/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/numeros-cardinales-y-concordancia/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/adjetivos-y-concordancia/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/interrogativos-y-negacion/` | `ruso/genero-de-sustantivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/caso-dativo/` | `ruso/interrogativos-y-negacion/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ruso/caso-instrumental/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/caso-preposicional/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/aspecto-verbal-perfectivo-imperfectivo/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/verbos-de-movimiento/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/imperativo/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/comparativo-y-superlativo/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/oraciones-condicionales-basicas/` | `ruso/caso-dativo/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/participios-activos-y-pasivos/` | `ruso/oraciones-condicionales-basicas/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ruso/gerundio-deeprichastie/` | `ruso/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/voz-pasiva-con-participios/` | `ruso/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/discurso-indirecto/` | `ruso/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/declinacion-completa-de-numerales/` | `ruso/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/conectores-argumentativos/` | `ruso/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/registro-formal-vs-coloquial/` | `ruso/conectores-argumentativos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `ruso/estilo-periodistico-y-burocratico/` | `ruso/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/matices-aspectuales-avanzados/` | `ruso/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/prefijos-verbales-y-cambio-de-significado/` | `ruso/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/estructuras-nominales-complejas/` | `ruso/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `ruso/reading-a2/` | `ruso/genero-de-sustantivos/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/writing-a2/` | `ruso/genero-de-sustantivos/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/listening-a2/` | `ruso/genero-de-sustantivos/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/speaking-a2/` | `ruso/genero-de-sustantivos/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/reading-b1/` | `ruso/caso-dativo/`, `ruso/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/writing-b1/` | `ruso/caso-dativo/`, `ruso/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/listening-b1/` | `ruso/caso-dativo/`, `ruso/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/speaking-b1/` | `ruso/caso-dativo/`, `ruso/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/reading-b2/` | `ruso/participios-activos-y-pasivos/`, `ruso/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/writing-b2/` | `ruso/participios-activos-y-pasivos/`, `ruso/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/listening-b2/` | `ruso/participios-activos-y-pasivos/`, `ruso/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/speaking-b2/` | `ruso/participios-activos-y-pasivos/`, `ruso/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/reading-c1/` | `ruso/registro-formal-vs-coloquial/`, `ruso/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/writing-c1/` | `ruso/registro-formal-vs-coloquial/`, `ruso/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/listening-c1/` | `ruso/registro-formal-vs-coloquial/`, `ruso/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `ruso/speaking-c1/` | `ruso/registro-formal-vs-coloquial/`, `ruso/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/matras-y-conjuntas/` | `hindi/devanagari-consonantes-y-vocales/` | Sistema de escritura: se aprende después del primero. |
| `hindi/devanagari-consonantes-y-vocales/` | Ninguna — raíz | Raíz de la rama: sistema de escritura, prerrequisito de todo lo demás. |
| `hindi/genero-masculino-femenino/` | `hindi/devanagari-consonantes-y-vocales/`, `hindi/matras-y-conjuntas/` | Primer tema de gramática, tras la escritura. |
| `hindi/pronombres-personales/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/presente-habitual/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/posposiciones-basicas-ka-ko-se/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/plural-de-sustantivos/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/adjetivos-y-concordancia/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/numeros-cardinales/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/interrogativos/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/negacion/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/presente-continuo/` | `hindi/genero-masculino-femenino/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/pasado-y-construccion-ergativa-ne/` | `hindi/presente-continuo/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `hindi/futuro/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/posposiciones-compuestas/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/imperativo-y-cortesia/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/oraciones-condicionales-basicas/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/comparativo-y-superlativo/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/verbos-compuestos-halka-kriya/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/discurso-directo-basico/` | `hindi/pasado-y-construccion-ergativa-ne/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/voz-pasiva/` | `hindi/discurso-directo-basico/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `hindi/participios-y-oraciones-participiales/` | `hindi/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/discurso-indirecto/` | `hindi/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/subjuntivo-y-modo-optativo/` | `hindi/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/registro-sanscritizado-vs-persa-urdu/` | `hindi/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/conectores-argumentativos/` | `hindi/voz-pasiva/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/registro-formal-vs-coloquial/` | `hindi/conectores-argumentativos/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `hindi/estilo-literario-y-periodistico/` | `hindi/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/estructuras-nominales-complejas/` | `hindi/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/matices-de-posposiciones/` | `hindi/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/prosa-formal-y-oficial/` | `hindi/registro-formal-vs-coloquial/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `hindi/reading-a2/` | `hindi/genero-masculino-femenino/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/writing-a2/` | `hindi/genero-masculino-femenino/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/listening-a2/` | `hindi/genero-masculino-femenino/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/speaking-a2/` | `hindi/genero-masculino-femenino/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/reading-b1/` | `hindi/pasado-y-construccion-ergativa-ne/`, `hindi/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/writing-b1/` | `hindi/pasado-y-construccion-ergativa-ne/`, `hindi/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/listening-b1/` | `hindi/pasado-y-construccion-ergativa-ne/`, `hindi/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/speaking-b1/` | `hindi/pasado-y-construccion-ergativa-ne/`, `hindi/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/reading-b2/` | `hindi/voz-pasiva/`, `hindi/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/writing-b2/` | `hindi/voz-pasiva/`, `hindi/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/listening-b2/` | `hindi/voz-pasiva/`, `hindi/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/speaking-b2/` | `hindi/voz-pasiva/`, `hindi/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/reading-c1/` | `hindi/registro-formal-vs-coloquial/`, `hindi/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/writing-c1/` | `hindi/registro-formal-vs-coloquial/`, `hindi/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/listening-c1/` | `hindi/registro-formal-vs-coloquial/`, `hindi/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `hindi/speaking-c1/` | `hindi/registro-formal-vs-coloquial/`, `hindi/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/sistema-de-terminaciones-o-a-e-i/` | Ninguna — raíz | Primer tema de gramática. |
| `esperanto/tiempos-verbales-regulares/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/acusativo-n/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/correlativos-tabelvortoj/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/afijos-y-formacion-de-palabras/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/comparacion-y-grados/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/numeros-fechas-y-horas/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/pronunciacion-acento-y-ortografia/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/vocabulario-tematico-a2/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/participios-activos-y-pasivos/` | `esperanto/vocabulario-tematico-a2/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `esperanto/modo-condicional-y-volitivo/` | `esperanto/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/preposiciones-y-su-uso-libre/` | `esperanto/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/subordinadas-con-ke-kiu-kiam/` | `esperanto/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/orden-de-palabras-y-enfasis/` | `esperanto/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/transitividad-igi-igxi/` | `esperanto/participios-activos-y-pasivos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/neologismos-y-prestamos/` | `esperanto/transitividad-igi-igxi/` | Ancla del nivel: abre el grupo y exige haber cerrado el anterior. |
| `esperanto/estilo-literario-vs-tecnico/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/ambiguedades-y-como-resolverlas/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/variacion-dialectal-minima/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/conectores-y-cohesion-textual/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/cultura-y-movimiento-esperantista/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/literatura-original-y-traducida/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/traduccion-y-mediacion/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/vocabulario-tematico-b1-b2/` | `esperanto/neologismos-y-prestamos/` | Tema del grupo de gramática; parte del ancla de su nivel. |
| `esperanto/reading-a2/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/writing-a2/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/listening-a2/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/speaking-a2/` | `esperanto/sistema-de-terminaciones-o-a-e-i/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/reading-b1/` | `esperanto/participios-activos-y-pasivos/`, `esperanto/reading-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/writing-b1/` | `esperanto/participios-activos-y-pasivos/`, `esperanto/writing-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/listening-b1/` | `esperanto/participios-activos-y-pasivos/`, `esperanto/listening-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/speaking-b1/` | `esperanto/participios-activos-y-pasivos/`, `esperanto/speaking-a2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/reading-c1/` | `esperanto/neologismos-y-prestamos/`, `esperanto/reading-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/writing-c1/` | `esperanto/neologismos-y-prestamos/`, `esperanto/writing-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/listening-c1/` | `esperanto/neologismos-y-prestamos/`, `esperanto/listening-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/speaking-c1/` | `esperanto/neologismos-y-prestamos/`, `esperanto/speaking-b2/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/listening-b2/` | `esperanto/neologismos-y-prestamos/`, `esperanto/listening-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/reading-b2/` | `esperanto/neologismos-y-prestamos/`, `esperanto/reading-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/speaking-b2/` | `esperanto/neologismos-y-prestamos/`, `esperanto/speaking-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
| `esperanto/writing-b2/` | `esperanto/neologismos-y-prestamos/`, `esperanto/writing-b1/` | Destreza del nivel: cuelga de la misma destreza del nivel anterior y del ancla de gramática de su nivel. |
