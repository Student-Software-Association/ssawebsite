import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // For multiple domains, use the primary domain for canonical sitemap
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://studentsoftware.org/sitemap.xml',  // Always use primary domain
  }
}