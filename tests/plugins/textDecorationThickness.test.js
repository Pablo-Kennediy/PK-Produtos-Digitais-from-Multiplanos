import { css, quickPluginTest } from '../util/run'

quickPluginTest('textDecorationThickness', {
  safelist: [
    // Arbitrary values
    'decoration-[12px]',
    'decoration-[34%]',
  ],
}).toMatchFormattedCss(css`
  .decoration-0 {
    text-decoration-thickness: 0;
  }
  .decoration-1 {
    text-decoration-thickness: 1px;
  }
  .decoration-2 {
    text-decoration-thickness: 2px;
  }
  .decoration-4 {
    text-decoration-thickness: 4px;
  }
  .decoration-8 {
    text-decoration-thickness: 8px;
  }
  .decoration-\[12px\] {
    text-decoration-thickness: 12px;
  }
  .decoration-\[34\%\] {
    text-decoration-thickness: calc(1em / 2.94118);
  }
  .decoration-auto {
    text-decoration-thickness: auto;
  }
  .decoration-from-font {
    text-decoration-thickness: from-font;
  }
`)
