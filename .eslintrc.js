module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'typescript',
    'html',
    'vue'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  rules: {
    'no-unused-vars': 0
  }
}
