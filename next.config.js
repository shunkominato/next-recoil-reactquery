/** @type {import('next').NextConfig} */

// see https://github.com/facebookexperimental/Recoil/issues/733
const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    // swcMinify: false,
    // ignoreDuringBuilds: true,
    // staticPageGenerationTimeout: 1000
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);

module.exports = nextConfig;
