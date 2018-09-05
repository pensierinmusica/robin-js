import pkg from './package.json'

const input = 'src/index.js'

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      name: 'pairsCalc',
      file: pkg.browser,
      format: 'umd'
    }
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
