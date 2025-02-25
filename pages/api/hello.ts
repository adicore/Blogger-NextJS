// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

// import type { NextRequest } from 'next/server'

// export const config = {
//   runtime: 'experimental-edge',
// }

// export default async function handler(req: NextRequest) {
//   return new Response(
//     JSON.stringify({
//       name: 'Jim Halpert',
//     }),
//     {
//       status: 200,
//       headers: {
//         'content-type': 'application/json',
//         'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
//       },
//     }
//   )
// }