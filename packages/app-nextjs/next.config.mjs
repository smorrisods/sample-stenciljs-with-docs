// next.conf.mjs
import stencilSSR from '@stencil/ssr/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default stencilSSR({
  module: import('react-library'),
  from: 'react-library',
  hydrateModule: import('stencil-library/hydrate'),
  serializeShadowRoot: {
    'scoped': ['my-component'],
    default: 'declarative-shadow-dom',
  },
})(nextConfig);