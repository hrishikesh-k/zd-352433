export default async function() {
  return new Response(nulll, {
    headers: {
      'cache-control': 's-maxage=31536000',
      location: '/test'
    },
    status: 301
  })
}

export const config = {
  cache: 'manual',
  path: '/redirect'
}
