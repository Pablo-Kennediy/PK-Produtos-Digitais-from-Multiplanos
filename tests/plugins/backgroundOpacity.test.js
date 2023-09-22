import { quickPluginTest } from '../util/run'

quickPluginTest('backgroundOpacity', {
  safelist: [
    // Arbitrary values
    'bg-opacity-[0.12]',
    'bg-opacity-[var(--my-value)]',
  ],
}).toMatchSnapshot()
