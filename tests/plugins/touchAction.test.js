import { css, quickPluginTest } from '../util/run'

quickPluginTest('touchAction').toMatchFormattedCss(css`
  *,
  :before,
  :after {
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
  }
  ::-webkit-backdrop {
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
  }
  ::backdrop {
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
  }
  .touch-auto {
    touch-action: auto;
  }
  .touch-none {
    touch-action: none;
  }
  .touch-pan-x {
    --tw-pan-x: pan-x;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pan-left {
    --tw-pan-x: pan-left;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pan-right {
    --tw-pan-x: pan-right;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pan-y {
    --tw-pan-y: pan-y;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pan-up {
    --tw-pan-y: pan-up;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pan-down {
    --tw-pan-y: pan-down;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-pinch-zoom {
    --tw-pinch-zoom: pinch-zoom;
    touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
  }
  .touch-manipulation {
    touch-action: manipulation;
  }
`)
