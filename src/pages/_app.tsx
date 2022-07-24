import React from 'react'
import { AppProps } from 'next/app'


import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { CarProvider } from '../contexts/CarContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CarProvider>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </CarProvider>
            </ThemeProvider>
        </>

    )
}

export default MyApp
