export default async function() {
  return new Response(null, {
    headers: {
      location: 'https://www.google.com/'
    },
    status: 302
  })
}

export const config = {
  path: '/redirect'
}
