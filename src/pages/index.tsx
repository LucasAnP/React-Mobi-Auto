import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { ButtonContainer, Container, FormContainer, SpecificFormContainer } from '../styles/Home/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Button, { ButtonApply } from '../components/ButtonApply'
import { useFetch } from '../hooks/useFetch'
import { useFetchModels } from '../hooks/useFetchModels'
import axios from 'axios'
import useSWR from 'swr'
import { api } from '../services/api'

interface Brand {
    year: string;
    nome: string;
}
interface Model {
    years: Object[];
    models: Object[];
}

const Home: React.FC = () => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [valueOfCar, setValueOfCar] = useState();

    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedModel, setSelectedModel] = useState();
    const [selectedYear, setSelectedYear] = useState();

    const [clickedButton, setClickedButton] = useState(false);

    const [disabledButton, setDisabledButton] = useState(true);

    const [resulted, setResulted] = useState(true);

    const { allBrands, isLoading } = useFetch<Brand[]>('marcas');

    function handleChange(event) {
        setSelectedBrand(event.target.value);
    }

    function handleChangeModel(event) {
        setSelectedModel(event.target.value);
    }

    function handleChangeYear(event) {
        setSelectedYear(event.target.value);
    }

    async function getModels() {
        const { data } = await api.get(`marcas/${selectedBrand}/modelos`)
        setModels(data.modelos);
    }

    async function getYearOfCar() {
        const { data } = await api.get(`marcas/${selectedBrand}/modelos/${selectedModel}/anos`)
        setYears(data);
    }

    async function getValueOfCar() {
        const { data } = await api.get(`marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`)
        setValueOfCar(data.Valor);
        console.log('DATAAAAAAAAAAA VVVVV', data.Valor)
    }

    async function onClickApplyButton() {
        getValueOfCar();
        setDisabledButton(true);
        setResulted(true);
        console.log('DATAAAAAAAAAAA', valueOfCar)
    }


    useEffect(() => {
        if (!isLoading && allBrands) {
            setBrands(allBrands)
        } else {
            <p>Carregando</p>
        }

        if (selectedBrand) {
            getModels()
        }

        if (selectedBrand && selectedModel) {
            getYearOfCar()
        }

        if (selectedBrand && selectedModel && selectedYear && !clickedButton) {
            setDisabledButton(false);
        }
    }, [isLoading, selectedBrand, selectedModel, selectedYear])

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
                                disabled={brands.length < 1}
                            >
                                {brands.map((value) => {
                                    return (<MenuItem value={value.codigo}>{value.nome.split(' ')[0]}</MenuItem>)
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
                                value={selectedModel}
                                label="Modelo"
                                onChange={handleChangeModel}
                                disabled={models.length < 1}
                            >
                                {models.map((value) => {
                                    return (<MenuItem value={value.codigo}>{value.nome}</MenuItem>)
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
                                value={selectedBrand}
                                label="Ano"
                                onChange={handleChangeYear}
                                disabled={years.length < 1}
                            >
                                {years.map((value) => {
                                    return (<MenuItem value={value.codigo}>{value.nome.split(' ')[0]}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </SpecificFormContainer>
                    {/* Year  */}

                    <ButtonContainer>
                        <ButtonApply disabled={disabledButton} onClick={() => onClickApplyButton()} />
                    </ButtonContainer>
                </FormContainer>

            </main>
        </Container >
    )
}

export default Home
