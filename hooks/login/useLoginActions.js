import {useState} from "react";

export default function useLoginActions() {
    const [errors, setErrors] = useState({status: true, loginEmailInputMsg: 'email error', loginPasswordMsg: 'password error'})

    return {
        errors,
    }

}