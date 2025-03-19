export default async function() {
  return new Response('', {
    headers: {
      location: 'https://www.google.com/'
    },
    status: 301
  })
}

export const config = {
  path: '/redirect'
}
