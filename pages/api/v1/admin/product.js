import axios from "axios";

export default async function handler(req, res) {
    const {method, query: {page, per_page}} = req
    switch (method) {
        case "GET":
            try {
                const response = await axios.get(`http://127.0.0.1:81/api/v1/admin/product?page=${page}&per_page=${per_page}`)
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