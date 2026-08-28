/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> produces an `out/` folder of plain HTML/CSS/JS
  // that any host (your existing cPanel/shared hosting) can serve.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // NOTE: `redirects()` does NOT run in static export mode.
  // Put these rules in your host's .htaccess instead (see README).
  // Kept here so they also work if you ever move to a Node host.
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
      { source: "/cart", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
    ];
  },
};
export default nextConfig;
