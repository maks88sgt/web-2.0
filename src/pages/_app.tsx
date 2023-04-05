import '@/styles/globals.css'
import {ThemeProvider} from '@mui/material'
import type {AppProps} from 'next/app'
import {createTheme} from '@mui/material/styles';
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function App({Component, pageProps}: AppProps) {
    return <Provider store={store}><ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider></Provider>
}

const theme = createTheme();
