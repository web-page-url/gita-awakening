import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gita-awakening.vercel.app';

    // Core Pages
    const routes = [
        '',
        '/about',
        '/vision',
        '/mission',
        '/daily-wisdom',
        '/audio-mode',
        '/ai-guide',
        '/my-reflections',
        '/about-gita',
        '/practice',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Chapter Pages (1-18)
    const chapterRoutes = Array.from({ length: 18 }, (_, i) => ({
        url: `${baseUrl}/chapters/${i + 1}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...chapterRoutes];
}
