import { CodegenConfig } from '@graphql-codegen/cli'

const BFF_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:65535/graphql' : ''

const config: CodegenConfig = {
  schema: [
    {
      [BFF_URL]: {},
    },
  ],

  documents: ['src/features/**/*.gql'],

  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
