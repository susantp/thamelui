import useTailwindClasses from "../hooks/products/useTailwindClasses";
import useLoginActions from "../hooks/login/useLoginActions";
import {useCallback, useEffect, useMemo} from "react";

export default function Index(callback, deps) {
    const {classes} = useTailwindClasses()
    const {errors} = useLoginActions()

    return (
        <div className={`flex items-center bg-gray-200  flex-col w-full gap-y-3 h-screen`}>
            {/*form div*/}
            <div
                id={`loginContentWrapper`}
                className={`flex items-center bg-gradient-to-tr from-purple-50 to-purple-900 p-6 flex-col h-screen basis-11/12 w-full`}>

                {/*email formGroup*/}
                <div id={`loginFormGroup`}
                     className={`flex m-auto items-center flex-col gap-y-6 w-full xl:w-1/5 md:w-3/5 sm:w-4/5   bg-white bg-opacity-30 p-8 rounded-md shadow-2xl`}>
                    <div>
                        <h2 className={`text-2xl font-bold text-slate-700`}>Thamelmart</h2>
                    </div>
                    <div className={`flex flex-col w-64 gap-y-2 sm:w-4/5`} id={`loginEmail`}>
                        <input id={`emailInput`} className={classes.titleInput} placeholder={`Email`}/>
                        {errors.status && (<span className={classes.inputErrorSpan}>{errors.loginEmailInputMsg}</span>)}
                    </div>
                    <div className={`flex flex-col gap-y-2 w-64 sm:w-4/5`} id={`loginEmail`}>
                        <input id={`passwordInput`} className={classes.titleInput} placeholder={`Password`}/>
                        {errors.status && (<span className={classes.inputErrorSpan}>{errors.loginPasswordMsg}</span>)}
                    </div>
                    <div className={`flex flex-col gap-y-2 w-64 sm:w-4/5`} id={`loginEmail`}>
                        <input type={`submit`} value={`Submit`} className={classes.submitBtn}/>
                    </div>
                </div>

            </div>

            <div id={`footerWrapper`} className={`h-screen m-auto items-center basis-1/12`}>
                <div className={`text-6xl text-slate-500`} id={`footerContent`}>Footer</div>
            </div>
        </div>
    )
}