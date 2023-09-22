import { css, quickVariantPluginTest } from '../../util/run'

quickVariantPluginTest('ariaVariants', {
  safelist: [
    'aria-[describedby]:flex',

    'group-aria-[describedby]:flex',
    'peer-aria-[describedby]:flex',

    'group-aria-[describedby]/foo:flex',
    'peer-aria-[describedby]/foo:flex',
  ],
}).toMatchFormattedCss(css`
  .aria-busy\:flex[aria-busy='true'],
  .aria-checked\:flex[aria-checked='true'],
  .aria-disabled\:flex[aria-disabled='true'],
  .aria-expanded\:flex[aria-expanded='true'],
  .aria-hidden\:flex[aria-hidden='true'],
  .aria-pressed\:flex[aria-pressed='true'],
  .aria-readonly\:flex[aria-readonly='true'],
  .aria-required\:flex[aria-required='true'],
  .aria-selected\:flex[aria-selected='true'],
  .aria-\[describedby\]\:flex[aria-describedby],
  .group[aria-busy='true'] .group-aria-busy\:flex,
  .group[aria-checked='true'] .group-aria-checked\:flex,
  .group[aria-disabled='true'] .group-aria-disabled\:flex,
  .group[aria-expanded='true'] .group-aria-expanded\:flex,
  .group[aria-hidden='true'] .group-aria-hidden\:flex,
  .group[aria-pressed='true'] .group-aria-pressed\:flex,
  .group[aria-readonly='true'] .group-aria-readonly\:flex,
  .group[aria-required='true'] .group-aria-required\:flex,
  .group[aria-selected='true'] .group-aria-selected\:flex,
  .group\/foo[aria-describedby] .group-aria-\[describedby\]\/foo\:flex,
  .group[aria-describedby] .group-aria-\[describedby\]\:flex,
  .peer[aria-busy='true'] ~ .peer-aria-busy\:flex,
  .peer[aria-checked='true'] ~ .peer-aria-checked\:flex,
  .peer[aria-disabled='true'] ~ .peer-aria-disabled\:flex,
  .peer[aria-expanded='true'] ~ .peer-aria-expanded\:flex,
  .peer[aria-hidden='true'] ~ .peer-aria-hidden\:flex,
  .peer[aria-pressed='true'] ~ .peer-aria-pressed\:flex,
  .peer[aria-readonly='true'] ~ .peer-aria-readonly\:flex,
  .peer[aria-required='true'] ~ .peer-aria-required\:flex,
  .peer[aria-selected='true'] ~ .peer-aria-selected\:flex,
  .peer\/foo[aria-describedby] ~ .peer-aria-\[describedby\]\/foo\:flex,
  .peer[aria-describedby] ~ .peer-aria-\[describedby\]\:flex {
    display: flex;
  }
`)
