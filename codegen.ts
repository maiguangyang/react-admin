import { CodegenConfig } from '@graphql-codegen/cli';
import Env from './src/env';

const config: CodegenConfig = {
  schema: Env.baseUri,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;