import axios from "axios";

export default async function handler(req, res) {
    const {method, query: {page, per_page, search}} = req
    const hostWhileDocker = 'http://api.thamelmart.test:8100'
    const hostWhileLocal = 'http://api.thamelmart.test:81'
    switch (method) {
        case "GET":
            try {
                const response = await axios.get(`${hostWhileLocal}/api/v1/product?search=${search}&page=${page}&per_page=${per_page}`)
                const data = await response.data
                return res.status(200).json(data)
            } catch (e) {
                res.status(400).json({'error': e.message})
            }
            break

        case "POST":
            res.status(200).json('post')
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }


}