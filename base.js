// 配置只在 IDE 启动时生效，如果启动期间修改配置，需要重启 IDE
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      // 使用 jsx 语法
      jsx: true,
      // 允许注解装饰器
      legacyDecorators: true
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {
    // 生产模式下，禁止使用 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 生产模式下，禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 禁止出现 foo['bar']，必须写成 foo.bar
     * @category Best Practices
     * @reason 当需要写一系列属性的时候，可以更统一
     * @fixable
     */
    'dot-notation': 'error',
    /**
     * 逗号前禁止有空格，逗号后必须要有空格
     * @category Stylistic Issues
     * @fixable
     */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    /**
     * 书写多行对象/数组等末尾项必须要有尾逗号
     * @category Stylistic Issues
     * @fixable
     */
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      }
    ],
    /**
     * 命名函数表达式括号前禁止有空格，箭头函数表达式括号前面必须有一个空格
     * @category Stylistic Issues
     * @fixable
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    /**
     * 箭头函数的箭头前后必须有空格
     * @category ECMAScript 6
     * @fixable
     */
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    /**
     * 用作对象的计算属性时，中括号内的首尾禁止有空格
     * @category Stylistic Issues
     * @fixable
     */
    'computed-property-spacing': ['error', 'never'],
    /**
     * 操作符左右必须有空格
     * @category Stylistic Issues
     * @fixable
     */
    'space-infix-ops': 'error',
    /**
     * 一个缩进必须用两个空格替代
     * @category Stylistic Issues
     * @fixable
     */
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    /**
     * 结尾不带分号
     * @category Stylistic Issues
     * @fixable
     */
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always'
      }
    ],
    /**
     * 必须使用单引号，禁止使用双引号
     * @category Stylistic Issues
     * @fixable
     */
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    /**
     * jsx 中的属性必须用双引号
     * @category Stylistic Issues
     * @fixable
     */
    'jsx-quotes': ['error', 'prefer-double'],
    /**
     * 对象字面量中冒号前面禁止有空格，后面必须有空格
     * @category Stylistic Issues
     * @fixable
     */
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    /**
     * 禁止混用空格和缩进
     * @category Stylistic Issues
     */
    'no-mixed-spaces-and-tabs': 'error',
    /**
     * 禁止出现超过三行的连续空行
     * @category Stylistic Issues
     * @fixable
     */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    /**
     * 变量名必须是 camelcase 风格的
     * @category Stylistic Issues
     * @reason 很多 api 或文件名都不是 camelcase
     */
    camelcase: 'error',
    /**
     * 定义过的变量必须使用
     * @category Variables
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    /**
     * 禁止使用 console
     * @category Possible Errors
     * @reason console 的使用很常见
     */
    'no-console': 'error',
    /**
     * 禁止使用 debugger
     * @category Possible Errors
     */
    'no-debugger': 'error',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
     * @category Best Practices
     * @fixable
     */
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    /**
     * 禁止使用 alert
     * @category Best Practices
     * @reason alert 很常用
     */
    'no-alert': 'error',
  }
}
