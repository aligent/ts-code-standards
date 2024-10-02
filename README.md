# TS Coding Standards

Standard code quality tooling for projects written in TypeScript.

## Usage

Make sure your package manager is set up with access to the [private NPM](https://npm.corp.aligent.consulting/).

Install this module:

    # NPM
    npm install -D @aligent/ts-code-standards
    # Yarn
    yarn add -D @aligent/ts-code-standards
    # PNPM
    pnpm add -D @aligent/ts-code-standards

Copy the `.editorconfig` from this repo into your own.

Add the following to your `prettier.config.js`:

```javascript
import { prettierConfig } from '@aligent/ts-code-standards';

export default prettierConfig;
```

Then install the ESLint and TypeScript configs depending on what type of project you are setting up:

### General Projects

Add the following to your `eslint.config.js`:

```javascript
import { eslintConfigs } from '@aligent/ts-code-standards';

export default [...eslintConfigs.base];
```

Add the following to your `tsconfig.json`:

```json
{
  "extends": "@aligent/ts-code-standards/tsconfigs/base.json"
}
```

### React Projects

Add the following to your `eslint.config.js`:

```javascript
import { eslintConfigs } from '@aligent/ts-code-standards';

export default [...eslintConfigs.react];
```

Add the following to your `tsconfig.json`:

```json
{
  "extends": "@aligent/ts-code-standards/tsconfigs/react.json"
}
```

## Notes

- You'll need to add `include`, `exclude`, `paths` etc. to your `tsconfig` file. These settings will
  be project specific.
