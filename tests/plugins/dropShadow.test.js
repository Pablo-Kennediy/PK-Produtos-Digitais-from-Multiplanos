import { css, quickPluginTest } from '../util/run'

quickPluginTest('dropShadow', {
  safelist: [
    // Arbitrary values
    'drop-shadow-[0_1px_2px_#0088cc]',
    'drop-shadow-[var(--my-value)]',
  ],
}).toMatchFormattedCss(css`
  .drop-shadow {
    --tw-drop-shadow: drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-2xl {
    --tw-drop-shadow: drop-shadow(0 25px 25px #00000026);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-\[0_1px_2px_\#0088cc\] {
    --tw-drop-shadow: drop-shadow(0 1px 2px #08c);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-\[var\(--my-value\)\] {
    --tw-drop-shadow: drop-shadow(var(--my-value));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-lg {
    --tw-drop-shadow: drop-shadow(0 10px 8px #0000000a) drop-shadow(0 4px 3px #0000001a);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-md {
    --tw-drop-shadow: drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-none {
    --tw-drop-shadow: drop-shadow(0 0 #0000);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-sm {
    --tw-drop-shadow: drop-shadow(0 1px 1px #0000000d);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
  .drop-shadow-xl {
    --tw-drop-shadow: drop-shadow(0 20px 13px #00000008) drop-shadow(0 8px 5px #00000014);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
      var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }
`)
