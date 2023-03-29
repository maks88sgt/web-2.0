import '@/styles/globals.css'
import {ThemeProvider} from '@mui/material'
import type { AppProps } from 'next/app'
import { createTheme } from '@mui/material/styles';
import {red} from "@mui/material/colors";

export default function App({ Component, pageProps }: AppProps) {
  return  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

const theme = createTheme();
