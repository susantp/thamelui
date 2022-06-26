
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json('post')

    }
    if (req.method === 'GET') {
        try {
            const response = await axios.get('http://127.0.0.1:81/api/v1/admin/product')
            const data = await response.data.data
            return res.status(200).json(data)
        } catch (e) {
            res.status(400).json({'error': e.message})
        }
    }

}