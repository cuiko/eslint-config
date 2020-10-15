# eslint-config

> Base on [eslint-config-for](https://github.com/kkfor/eslint-config-for).

- [x] Eslint
- [x] TypeScript
- [x] React
- [x] Vue
- [x] Prettier

------

## Install

```shell
# npm
npm i @cuiko/eslint-config -D
# yarn
yarn add @cuiko/eslint-config -D
```

------

## Dependency

### Eslint Support

```shell
# npm
npm i eslint -D
# yarn
yarn add eslint -D
```

> If you're using `babel`, you also need to install `babel-eslint`.

```shell
# npm
npm i babel-eslint -D
# yarn
yarn add babel-eslint -D
```

### TypeScript Support

```shell
# npm
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
# yarn
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

### React Support

```shell
# npm
npm i eslint-plugin-react -D
# yarn
yarn add eslint-plugin-react -D
```

### Vue Support

```shell
# npm
npm i eslint-plugin-vue -D
# yarn
yarn add eslint-plugin-vue -D
```

### Prettier Support

> If you `IDE` have been supported, you don't have to execute the following command.

```shell
# npm
npm i prettier -D
# yarn
yarn add prettier -D
```

#### Exec Eslint with Prettier

```shell
# npm
npm i prettier eslint-plugin-prettier -D
# yarn
yarn add prettier eslint-plugin-prettier -D
```

#### Prettier Extend

```shell
# npm
npm i prettier eslint-config-prettier -D
# yarn
yarn add prettier eslint-config-prettier -D
```

------

## Usage

### Use Prettier Config

```js
// .prettierrc.js
module.exports = {
  ...require('@cuiko/eslint-config/prettier-config')
}
```

#### Use Prettier Plugin

> Exec Eslint with Prettier

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/prettier-plugin'],
}
```

#### Use Prettier Extend

> Prettier Extend

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/prettier-extend'],
}
```

### Use React Config

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/react'],
}
```

### Use Vue Config

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/vue'],
}
```

### Use TypeScript Config

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/typescript'],
}
```