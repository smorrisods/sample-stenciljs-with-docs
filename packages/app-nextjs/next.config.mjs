// next.conf.mjs
import stencilSSR from "@stencil/ssr/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack(config, { dev }) {
    // Disable minification for production
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default stencilSSR({
  module: import("react-library"),
  from: "react-library",
  hydrateModule: import("stencil-library/hydrate"),
  serializeShadowRoot: {
    scoped: ["my-component"],
    default: "declarative-shadow-dom",
  },
})(nextConfig);
