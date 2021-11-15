import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

const storageDirectory = path.join(process.cwd(), 'storage')

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id as string

    const buffer = fs.readFileSync(path.join(storageDirectory, `${id}.csv`))
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment')
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept" )
    res.status(200).send(buffer)
}

export default handler