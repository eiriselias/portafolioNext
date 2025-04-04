import { type SchemaTypeDefinition } from 'sanity'
import usuariosShema  from './schemas/usuario'
import cerificadosShema from './schemas/certificados'
import skillsShemas from './schemas/skills'
import proyectsShemas from './schemas/poryectos'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [usuariosShema, cerificadosShema, skillsShemas, proyectsShemas],
}
