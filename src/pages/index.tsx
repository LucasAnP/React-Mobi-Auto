import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home/styles'
import { FipeForm } from '../components/FipeForm'

const Home: React.FC = () => {
    const [resulted, setResulted] = useState(false);

    return (
        <Container resulted={resulted}>
            <Head>
                <title>Automóveis</title>
            </Head>

            <FipeForm resulted={resulted} setResulted={setResulted} />
        </Container >
    )
}

export default Home
