import React, { useState } from 'react'
import Head from 'next/head'
import { Container, FipeFormContainer } from '../styles/Home/styles'
import { FipeForm } from '../components/FipeForm'

const Home: React.FC = () => {
    const [resulted, setResulted] = useState(false);

    return (
        <Container resulted={resulted}>
            <Head>
                <title>Automóveis</title>
            </Head>

            <FipeFormContainer>
                <FipeForm resulted={resulted} setResulted={setResulted} />
            </FipeFormContainer>
        </Container >
    )
}

export default Home
