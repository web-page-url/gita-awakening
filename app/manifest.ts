import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Gita Awakening',
        short_name: 'Gita',
        description: 'Daily divine wisdom from the Bhagavad Gita for the modern warrior.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050B18',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/assets/favicon-32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/assets/favicon-48.png',
                sizes: '48x48',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/assets/pwa-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/assets/pwa-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
