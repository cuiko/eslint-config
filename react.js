module.exports = {
  extends: ['./index.js'],
  plugins: ['react'],
  rules: {
    /**
     * jsx 文件必须导入 React
     */
    'react/jsx-uses-react': 'error',
    /**
     * 定义了的 jsx element 必须使用
     */
    'react/jsx-uses-vars': 'error',
    /**
     * render 方法中必须有返回值
     */
    'react/require-render-return': 'error',
    /**
     * style 属性的取值必须是 object
     */
    'react/style-prop-object': 'error',
    /**
     * 禁止使用已废弃的 api
     */
    'react/no-deprecated': 'error',
    /**
     * HTML 中的自闭和标签禁止有 children
     */
    'react/void-dom-elements-no-children': 'error'
  }
}