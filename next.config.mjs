/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/website", destination: "/work", permanent: true },
      { source: "/mobile-apps", destination: "/work", permanent: true },
      { source: "/review", destination: "/about", permanent: true },
      { source: "/technical-accomplishments", destination: "/services", permanent: true },
      { source: "/technologies", destination: "/services", permanent: true },
      { source: "/who-are-we-what-do-we-do", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/project-execution-structure", destination: "/services", permanent: true },
      { source: "/training", destination: "/services", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;