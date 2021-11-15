import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

const storageDirectory = path.join(process.cwd(), 'storage')

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const filename = req.query.filename as string

    try {
        const buffer = fs.readFileSync(path.join(storageDirectory, `${filename}.csv`))
        res.setHeader('Content-Type', 'text/csv')
        res.setHeader('Content-Disposition', 'attachment')
        res.status(200).send(buffer)
    } catch (err) {
        res.status(404).end()
    }
}

export default handler