# TS Coding Standards

Standard code quality tooling for projects written in TypeScript.

## Usage

### Install this package:

```bash
  # NPM
  npm install -D @aligent/ts-code-standards
  # Yarn
  yarn add -D @aligent/ts-code-standards
  # PNPM
  pnpm add -D @aligent/ts-code-standards
```

### Copy the `.editorconfig` from this package into your own project:

```bash
  # Assuming your package is installed in `node_modules` folder
  cp node_modules/@aligent/ts-code-standards/.editorconfig ./.editorconfig
```

### Add the following to your `prettier.config.js`:

- For ES modules project:

  ```javascript
  import { prettierConfig } from '@aligent/ts-code-standards';

  export default prettierConfig;
  ```

- For CommonJS project:

  ```javascript
  const { prettierConfig } = require('@aligent/ts-code-standards');

  module.exports = prettierConfig;
  ```

### Add the following to your `eslint.config.js`:

#### General Projects

- For ES modules project:

  ```javascript
  import { eslintConfigs } from '@aligent/ts-code-standards';

  export default [...eslintConfigs.base];
  ```

- For CommonJS project:

  ```javascript
  const { eslintConfigs } = require('@aligent/ts-code-standards');

  module.exports = [...eslintConfigs.base];
  ```

#### React Projects

- For ES modules project:

  ```javascript
  import { eslintConfigs } from '@aligent/ts-code-standards';

  export default [...eslintConfigs.react];
  ```

- For CommonJS project:

  ```javascript
  const { eslintConfigs } = require('@aligent/ts-code-standards');

  module.exports = [...eslintConfigs.react];
  ```

### Add the following to your `tsconfig.json`:

- General project:

  ```json
  { "extends": "@aligent/ts-code-standards/tsconfigs-base" }
  ```

- Extend project (general project but requires TypeScript project references features):

  ```json
  { "extends": "@aligent/ts-code-standards/tsconfigs-extend" }
  ```

- React project:
  
  ```json
  { "extends": "@aligent/ts-code-standards/tsconfigs-react" }
  ```

## Notes

- You'll need to add `include`, `exclude`, `paths` etc. to your `tsconfig` file. These settings will be project specific.
- Your project is considered as `ES modules` project if the `type` option in the nearest `package.json` is set to `module`. Otherwise, it's a CommonJS project. For more information on this, please check [CommonJS vs. ES modules in Node.js](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/).
- For backward compatibility, we also export `./tsconfigs/base.json` and `./tsconfigs/react.json`. However, you should update to the new syntax when configuring your `tsconfig.json` when possible.
- The `tsconfigs-extend` is the configuration for general projects that require TypeScript project references features to enable incremental builds. This is particular useful for monorepo where we have to manage different packages.
