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

## Dependencies

### 1. Eslint Support

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

### 2. TypeScript Support

```shell
# npm
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
# yarn
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

### 3. React Support

```shell
# npm
npm i eslint-plugin-react -D
# yarn
yarn add eslint-plugin-react -D
```

### 4. Vue Support

```shell
# npm
npm i eslint-plugin-vue vue-eslint-parser -D
# yarn
yarn add eslint-plugin-vue vue-eslint-parser -D
```

### 5. Prettier Support

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

### 1. Use Prettier Config

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

### 2. Use React Config

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/base', '@cuiko/eslint-config/react'],
}
```

### 3. Use Vue Config

```js
// .eslintrc.js
module.exports = {
  extends: ['@cuiko/eslint-config/base', '@cuiko/eslint-config/vue'],
}
```

### 4. Use TypeScript Config

```js
// .eslintrc.js
// 当与 react/vue 组合使用时, typescript 的配置引用要在前两者后面
module.exports = {
  extends: ['@cuiko/eslint-config/base', '@cuiko/eslint-config/typescript'],
}
```