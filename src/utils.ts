export function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Strip trailing slashes from the base path to avoid double slashes
const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

export function createLink(path: string) {
    // If path is external, return as is
    if (path.startsWith('http')) return path;

    // Ensure path starts with slash for consistency
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${BASE_URL}${cleanPath}`;
}
