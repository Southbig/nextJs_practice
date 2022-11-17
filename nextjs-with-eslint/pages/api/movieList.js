// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dummy from '../../dummy/dummy'

export default function List(req, res) {
  res.status(200).json(dummy)
}
