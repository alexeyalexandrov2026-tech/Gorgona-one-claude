export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/dashboard', '/api', '/reset-password', '/auth/callback']
    },
    sitemap: 'https://gorgona-one.vercel.app/sitemap.xml'
  };
}
