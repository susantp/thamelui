export default async function user(req, res) {
    const {method} = req.query
    switch (method) {
        case 'GET':
            res.status(200).json({name: 'admin', email: 'abc@abc.com'})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}