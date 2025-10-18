const ENDPOINT = `https://${import.meta.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`;
const HEADERS = { 'X-MICROCMS-API-KEY': import.meta.env.MICROCMS_API_KEY! };

export async function getPosts(limit = 100, offset = 0) {
  const res = await fetch(`${ENDPOINT}/posts?limit=${limit}&offset=${offset}`, { headers: HEADERS });
  if (!res.ok) throw new Error('failed to fetch posts');
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${ENDPOINT}/posts?filters=slug[equals]${slug}`, { headers: HEADERS });
  const data = await res.json();
  return data.contents?.[0] ?? null;
}
