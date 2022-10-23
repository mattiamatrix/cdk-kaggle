const { awscdk, release } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-kaggle',
  description: 'CDK construct to easily work with Lake Formation in the Showpad data lake.',
  repositoryUrl: 'https://github.com/mattiasappa/cdk-kaggle.git',

  author: 'Mattia Sappa',
  authorAddress: 'mattiasappa@gmail.com',

  stability: 'experimental',
  defaultReleaseBranch: 'main',
  keywords: ['aws', 'athena', 'kaggle'],

  docgen: false,

  cdkVersion: '2.40.0',
  // deps: [],                /* Runtime dependencies of this module. */
  devDeps: [
    '@trivago/prettier-plugin-sort-imports',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'eslint-plugin-promise',
    'ts-node',
    'tsc-alias',
  ],

  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 120,
      tabWidth: 2,
      importOrder: ['^constructs(.*)$', '^aws-cdk(.*)$', '^@aws-sdk(.*)$', '^test/(.*)$', '^[./]'],
      importOrderSeparation: true,
    },
  },

  dependabot: false,
});

// .eslintrc.json
project.eslint.addRules({ 'import/order': 'off' });

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage', 'venv'];

// .gitignore
project.gitignore.exclude(...common_exclude);
// .npmignore
project.npmignore.exclude(...common_exclude);
// .prettierignore
[...common_exclude, 'node_modules', 'dist', 'out'].forEach((element) => project.prettier.addIgnorePattern(element));

project.synth();
