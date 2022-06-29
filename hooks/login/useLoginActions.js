import {useRef, useState} from "react";
import axios from "axios";
import {error} from "next/dist/build/output/log";

export default function useLoginActions() {
    const loginFormRef = useRef('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
        const {email, password} = loginFormRef.current
        validate(email, password)

        if (emailError === '' && passwordError === '') {
            // await axios.post(`/api/v1/auth/login`, {email: email.value, password: password.value})
            //     .then(data => {
            //         console.log(data)
            //         setSubmit(false)
            //     }).catch(({code, message}) => {
            //         console.log(`${code}:${message}`)
            //         setSubmit(false)
            //     })
            try {
                const response = await axios.post(`/api/v1/auth/login`, {email: email.value, password: password.value})
                const data = await response.data
                console.log(data)
                setSubmit(false)
            } catch ({code, message}) {
                console.log(`${code}:${message}`)
                setSubmit(false)
            } finally {
                setSubmit(false)
            }
        }
        // setTimeout(() => {
        //     setSubmit(false)
        // }, 3000)
    }
    const handleEmailFocus = () => {
        setEmailError('')
    }
    const handlePasswordFocus = () => {
        setPasswordError('')
    }

    const validate = (email, password) => {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !email.value.match(regexEmail) && setEmailError('invalid email.')
        password.value.length < 8 && setPasswordError('minimum 8 character')
    }
    return {
        loginFormRef,
        emailError,
        passwordError,
        submit,
        handleEmailFocus,
        handlePasswordFocus,
        handleSubmit,
    }

}