import React, { useState } from 'react'
import Head from 'next/head'
import { ButtonContainer, Container, FormContainer, SpecificFormContainer } from '../styles/Home/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Button, { ButtonApply } from '../components/ButtonApply'

const Home: React.FC = () => {
    const [brand, setBrand] = useState([
        "teste1",
        "teste2",
        "teste3",
        "teste4"
    ]);
    const [selectedBrand, setSelectedBrand] = useState();
    const [disabledButton, setDisabledButton] = useState(true);
    const [resulted, setResulted] = useState(true);

    console.log('selectedBrand', selectedBrand);

    return (
        <Container resulted={resulted}>
            <Head>
                <title>Automóveis</title>
            </Head>

            <main>
                <h1>Tabela Fipe</h1>
                <p>Consulte o valor de um veículo de forma gratúita</p>

                {resulted ?
                    <FormContainer>
                        {/* Brand  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Marca"
                                    value={selectedBrand}
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Brand  */}

                        {/* Model  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedBrand}
                                    label="Marca"
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Model  */}

                        {/* Year  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ano</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedBrand}
                                    label="Marca"
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Year  */}

                        <ButtonContainer>
                            <ButtonApply disabled={disabledButton} />
                            <ButtonApply onClick={() => setResulted(!resulted)} />
                        </ButtonContainer>
                    </FormContainer> :
                    <FormContainer>
                        {/* Brand  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Marca"
                                    value={selectedBrand}
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Brand  */}

                        {/* Model  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedBrand}
                                    label="Marca"
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Model  */}

                        {/* Year  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ano</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedBrand}
                                    label="Marca"
                                    onChange={setSelectedBrand}
                                >
                                    {brand.map((result) => {
                                        return (<MenuItem value={result.toString()}>{result}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Year  */}

                        <ButtonContainer>
                            <ButtonApply disabled={disabledButton} />
                            <ButtonApply onClick={() => setResulted(!resulted)} />
                        </ButtonContainer>
                    </FormContainer>
                }
            </main>
        </Container >
    )
}

export default Home
