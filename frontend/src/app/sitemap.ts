import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Always use the primary domain for canonical URLs
  const baseUrl = 'https://studentsoftware.org'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}