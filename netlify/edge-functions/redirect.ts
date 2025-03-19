export default async function() {
  return new Response('', {
    headers: {
      location: '/'
    },
    status: 301
  })
}

export const config = {
  path: '/redirect'
}
