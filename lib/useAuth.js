import axios from "axios";
import useSWR from 'swr'
import {useRouter} from "next/router";

export default function useAuth({} = {}) {
    const {
        data: user,
        error,
        mutate
    } = useSWR('/user', () => axios.get('/api/v1/user').then(response => response.data.data))
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props}) => {
        setErrors([])
        await csrf()
        axios.post('/login', props)
            .then(() => mutate() && router.push('/'))
    }
    return {user, csrf}
}