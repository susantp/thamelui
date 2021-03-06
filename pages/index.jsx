import useTailwindClasses from "../hooks/products/useTailwindClasses";
import useLoginActions from "../hooks/login/useLoginActions";
import {FacebookRounded, Google, TransferWithinAStation, Twitter} from "@mui/icons-material";
import axios from "../lib/axios";
import {error} from "next/dist/build/output/log";

export default function Index() {
    const {classes} = useTailwindClasses()
    const {
        handleEmailFocus,
        handlePasswordFocus,
        handleSubmit,
        submit,
        loginFormRef,
        emailError,
        passwordError,
    } = useLoginActions()
    const handleSocialLogin = async (event) => {
        // console.log(event.currentTarget.id)
        // window.open('https://api.thamelmart.test:446/redirect/' + event.currentTarget.id)
        const config = {
            baseURL: 'http://api.thamelmart.test:81/redirect/' + event.currentTarget.id,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000, https://api.thamelmart.test:446, https://www.facebook.com, http://api.thamelmart.test:3000',
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true
        }
        await axios.get(config.baseURL, config).then(response => {
            console.log(response)
        }).catch(error => console.log('error'))
    }
    return (
        <div className={`flex items-center bg-white flex-col w-full gap-y-3 h-screen`}>
            {/*form div*/}
            <form
                onSubmit={handleSubmit}
                ref={loginFormRef}
                id={`loginContentWrapper`}
                className={`flex items-center p-6 flex-col h-screen basis-11/12 w-full`}>
                {/*email formGroup*/}
                <div id={`loginFormGroup`}
                     className={`flex m-auto items-center bg-gradient-to-tr from-purple-200 to-blue-200 flex-col gap-y-6 w-full xl:w-1/5 md:w-3/5 sm:w-4/5 bg-opacity-30 p-8 rounded-md shadow-2xl`}>
                    <div>
                        <h2 className={`text-2xl font-bold text-white shadow-xl`}>
                            {/*<img src={`https://picsum.photos/250/80`} alt={`thamelmart logo`}/>*/}
                        </h2>
                    </div>
                    <div className={`flex flex-col w-64 gap-y-2 sm:w-4/5`} id={`loginEmail`}>
                        <input id={`emailInput`}
                               name={`email`}
                               type={`text`}
                               className={classes.titleInput}
                               placeholder={`Email`}
                               onFocus={handleEmailFocus}
                        />
                        {emailError !== '' && (
                            <span className={classes.inputErrorSpan}>{emailError}</span>)}
                    </div>
                    <div className={`flex flex-col gap-y-2 w-64 sm:w-4/5`} id={`loginPassword`}>
                        <input id={`passwordInput`}
                               name={`password`}
                               className={classes.titleInput}
                               placeholder={`Password`}
                               type={`password`}
                               onFocus={handlePasswordFocus}
                        />
                        {passwordError !== '' && (
                            <span className={classes.inputErrorSpan}>{passwordError}</span>)}
                    </div>
                    <div id={`socialLogin`} className={`items-center flex flex-col gap-y-4`}>
                        <p>Login with</p>
                        <div className={`flex gap-x-5 text-6xl `}>
                            <FacebookRounded onClick={handleSocialLogin} color={`primary`} fontSize={'large'}
                                             cursor={`pointer`} id={`facebook`}></FacebookRounded>
                            <Twitter onClick={handleSocialLogin} color={`primary`} fontSize={'large'} cursor={`pointer`}
                                     id={`twitter`}></Twitter>
                            <Google onClick={handleSocialLogin} color={`warning`} fontSize={'large'} cursor={`pointer`}
                                    id={`google`}></Google>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-y-2 w-64 sm:w-4/5`} id={`loginEmail`}>
                        <input type={`submit`}
                               value={submit && passwordError === '' && emailError === '' ? 'Please wait...' : 'Submit'}
                               className={classes.submitBtn}
                               disabled={!!(passwordError === '' && emailError === '' && submit)}/>
                    </div>

                </div>

            </form>

            <div id={`footerWrapper`} className={`h-screen m-auto items-center basis-1/12`}>
                <div className={`text-3xl text-slate-500`} id={`footerContent`}>Thamelmart Inc.</div>
            </div>
        </div>
    )
}