export default async function login(req, res) {
    const {method, body: {email, password}} = req
    switch (method) {
        case 'POST':
            res.status(200).json({email, password})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}