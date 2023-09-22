import { css, quickPluginTest } from '../util/run'

quickPluginTest('gridColumnStart', {
  safelist: [
    // Arbitrary values
    'col-start-[123]',
    'col-start-[var(--my-value)]',
  ],
}).toMatchFormattedCss(css`
  .col-start-1 {
    grid-column-start: 1;
  }
  .col-start-10 {
    grid-column-start: 10;
  }
  .col-start-11 {
    grid-column-start: 11;
  }
  .col-start-12 {
    grid-column-start: 12;
  }
  .col-start-13 {
    grid-column-start: 13;
  }
  .col-start-2 {
    grid-column-start: 2;
  }
  .col-start-3 {
    grid-column-start: 3;
  }
  .col-start-4 {
    grid-column-start: 4;
  }
  .col-start-5 {
    grid-column-start: 5;
  }
  .col-start-6 {
    grid-column-start: 6;
  }
  .col-start-7 {
    grid-column-start: 7;
  }
  .col-start-8 {
    grid-column-start: 8;
  }
  .col-start-9 {
    grid-column-start: 9;
  }
  .col-start-\[123\] {
    grid-column-start: 123;
  }
  .col-start-\[var\(--my-value\)\] {
    grid-column-start: var(--my-value);
  }
  .col-start-auto {
    grid-column-start: auto;
  }
`)
