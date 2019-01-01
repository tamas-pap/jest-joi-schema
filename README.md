# jest-joi-schema

[Joi](https://www.npmjs.com/package/joi) schema matcher for [Jest](https://www.npmjs.com/package/jest).

## Install via npm
```
npm install jest-joi-schema --save
```

## Usage

In any test file:

```js
import { matchers } from 'jest-joi-schema';
expect.extend(matchers);
```

or add it directly in [`setupTestFrameworkScriptFile`](https://jestjs.io/docs/en/configuration#setuptestframeworkscriptfile-string).

```js
const joi = require('joi');

const userSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email(),
});

const options = { allowUnknown: true };

expect(values).toMatchSchema(
  userSchema,
  options,
);
```
