import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '', // Dein Titel

  projectId: '', // Deine Project-ID
  dataset: '', // Dein Datensatz

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studioHost: '', // Deine Firmen-Domain
})
