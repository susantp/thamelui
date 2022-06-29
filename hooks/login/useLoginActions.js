import {useRef, useState} from "react";

export default function useLoginActions() {
    const loginFormRef = useRef('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        const {email, password} = loginFormRef.current
        validate(email, password)
        console.log('Submitting')
        setTimeout(() => {
            setSubmit(false)
        }, 3000)
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