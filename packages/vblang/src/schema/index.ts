/**
 * Punto de entrada de los schemas declarativos del editor schema-driven (WO06).
 * El parser/validate siguen siendo el portero; esto sólo describe la UI.
 */
export type {
  DashListBlock,
  EnumField,
  EnumOption,
  Field,
  FieldKind,
  BoolField,
  ListField,
  ListItemShape,
  NumberField,
  TextField,
} from "./field-types.js";
export { DASH_LIST_BLOCKS } from "./field-types.js";
export type { QuestionTypeSchema } from "./question-schemas.js";
export {
  ALL_QUESTION_TYPES,
  getQuestionSchema,
  QUESTION_TYPE_SCHEMAS,
} from "./question-schemas.js";
