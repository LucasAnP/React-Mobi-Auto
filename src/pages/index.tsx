import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ButtonContainer, Container, FormContainer, SpecificFormContainer } from '../styles/Home/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Button, { ButtonApply } from '../components/ButtonApply'
import { useFetch } from '../hooks/useFetch'

interface Car {
    brand: string;
    model: string;
    value: string;
}

interface Brand {
    codigo: string;
    nome: string;
}

const Home: React.FC = () => {
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState();
    const [disabledButton, setDisabledButton] = useState(true);

    const [resulted, setResulted] = useState(true);

    const { allBrands, isLoading } = useFetch<Brand[]>('marcas');

    useEffect(() => {
        if (!isLoading && allBrands)
            setBrands(allBrands)
    }, [isLoading])

    if (isLoading) {
        return <p>Carregando</p>
    }

    function handleChange(event) {
        setSelectedBrand(event.target.value);
    }

    return (
        <Container resulted={resulted}>
            <Head>
                <title>Automóveis</title>
            </Head>

            <main>
                <h1>Tabela Fipe</h1>
                <p>Consulte o valor de um veículo de forma gratúita</p>

                <FormContainer>
                    {/* Brand  */}
                    <SpecificFormContainer>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                            <Select
                                label="Marca"
                                value={selectedBrand}
                                onChange={handleChange}
                            >
                                {brands.map((value) => {
                                    return (<MenuItem value={value.codigo}>{value.nome}</MenuItem>)
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
                                {brands.map((result) => {
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
                                {brands.map((result) => {
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

            </main>
        </Container >
    )
}

export default Home
