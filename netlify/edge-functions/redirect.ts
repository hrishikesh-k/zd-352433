export default async function() {
  return new Response('', {
    headers: {
      location: '/test'
    },
    status: 301
  })
}

export const config = {
  path: '/redirect'
}
