import { css, quickPluginTest } from '../util/run'

quickPluginTest('placeSelf').toMatchFormattedCss(css`
  .place-self-auto {
    place-self: auto;
  }
  .place-self-start {
    place-self: start;
  }
  .place-self-end {
    place-self: end;
  }
  .place-self-center {
    place-self: center;
  }
  .place-self-stretch {
    place-self: stretch stretch;
  }
`)
