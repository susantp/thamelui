import '../styles/globals.css'
import {RecoilRoot} from 'recoil'
import React from "react"

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <React.StrictMode>
                <Component {...pageProps} />
            </React.StrictMode>
        </RecoilRoot>
    )
}

export default MyApp
