
import autoprefixer from 'autoprefixer';
import Purge from '@fullhuman/postcss-purgecss';


const purgecss = Purge?.default ? Purge.default : Purge;

export default {
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: [
              './index.html',
              './src/*/.{js,ts,jsx,tsx,html}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:#]+(?<!:)/g) || [],
            safelist: [
              /^btn/, /^card/, /^hero/, /^nav/, /^grid/,
              'active', 'show', 'open',
            ],
          }),
        ]
      : []),
    autoprefixer(),
  ],
};