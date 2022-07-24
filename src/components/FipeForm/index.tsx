import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { api } from '../../services/api'
import { ButtonApply } from '../ButtonApply'
import {
    ButtonContainer,
    ButtonRounded,
    ButtonText,
    Container,
    FormContainer,
    ResultFormContainer,
    SpecificFormContainer,
    TextAfterResult,
} from './styles'

interface FipeFormProps {
    setResulted: (resulted: boolean) => void
    resulted: boolean
}

interface Brand {
    year: string
    nome: string
}

export function FipeForm({ setResulted, resulted }: FipeFormProps) {
    const [brands, setBrands] = useState([])
    const [models, setModels] = useState([])
    const [years, setYears] = useState([])
    const [valueOfCar, setValueOfCar] = useState('')

    const [selectedBrand, setSelectedBrand] = useState()
    const [selectedModel, setSelectedModel] = useState()
    const [selectedYear, setSelectedYear] = useState()

    const [clickedButton, setClickedButton] = useState(false)

    const [disabledButton, setDisabledButton] = useState(true)

    const { allBrands, isLoading } = useFetch<Brand[]>('marcas')

    function handleChange(event) {
        setSelectedBrand(event.target.value)
    }

    function handleChangeModel(event) {
        setSelectedModel(event.target.value)
    }

    function handleChangeYear(event) {
        setSelectedYear(event.target.value)
    }

    async function getModels() {
        const { data } = await api.get(`marcas/${selectedBrand}/modelos`)
        setModels(data.modelos)
    }

    async function getYearOfCar() {
        const { data } = await api.get(
            `marcas/${selectedBrand}/modelos/${selectedModel}/anos`
        )
        setYears(data)
    }

    async function getValueOfCar() {
        const { data } = await api.get(
            `marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`
        )
        setValueOfCar(data.Valor)
    }

    async function onClickApplyButton() {
        getValueOfCar()
        setClickedButton(true)
        setDisabledButton(true)
        setResulted(true)
    }

    function renderContent() {
        if (resulted) {
            return (
                <Container>
                    <h1>{`Tabela Fipe: Preço ${selectedBrand}${selectedModel}${selectedYear}`}</h1>
                    <ResultFormContainer>
                        <ButtonContainer>
                            <ButtonRounded>
                                <ButtonText>
                                    {valueOfCar.split(',')[0]}
                                </ButtonText>
                            </ButtonRounded>
                        </ButtonContainer>
                    </ResultFormContainer>
                    <TextAfterResult>{`Este é o preço de compra do veículo`}</TextAfterResult>
                </Container>
            )
        } else {
            return (
                <>
                    <h1>Tabela Fipe</h1>
                    <p>Consulte o valor de um veículo de forma gratúita</p>
                    <FormContainer>
                        {/* Brand  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Marca
                                </InputLabel>
                                <Select
                                    label="Marca"
                                    value={selectedBrand}
                                    onChange={handleChange}
                                    disabled={brands.length < 1}
                                >
                                    {brands.map(value => {
                                        return (
                                            <MenuItem
                                                value={value.codigo}
                                                key={value.codigo}
                                            >
                                                {value.nome.split(' ')[0]}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Brand  */}

                        {/* Model  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Modelo
                                </InputLabel>
                                <Select
                                    value={selectedModel}
                                    label="Modelo"
                                    onChange={handleChangeModel}
                                    disabled={models.length < 1}
                                >
                                    {models.map(value => {
                                        return (
                                            <MenuItem
                                                value={value.codigo}
                                                key={value.codigo}
                                            >
                                                {value.nome}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Model  */}

                        {/* Year  */}
                        <SpecificFormContainer>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Ano
                                </InputLabel>
                                <Select
                                    value={selectedBrand}
                                    label="Ano"
                                    onChange={handleChangeYear}
                                    disabled={years.length < 1}
                                >
                                    {years.map(value => {
                                        return (
                                            <MenuItem
                                                value={value.codigo}
                                                key={value.codigo}
                                            >
                                                {value.nome.split(' ')[0]}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </SpecificFormContainer>
                        {/* Year  */}

                        <ButtonContainer>
                            <ButtonApply
                                disabled={disabledButton}
                                onClick={() => onClickApplyButton()}
                            />
                        </ButtonContainer>
                    </FormContainer>
                </>
            )
        }
    }

    useMemo(() => {
        if (!isLoading && allBrands) {
            setBrands(allBrands)
        } else {
            return <p>Carregando</p>
        }

        if (selectedBrand) {
            getModels()
        }

        if (selectedBrand && selectedModel) {
            getYearOfCar()
        }

        if (selectedBrand && selectedModel && selectedYear && !clickedButton) {
            setDisabledButton(false)
        }
    }, [isLoading, selectedBrand, selectedModel, selectedYear])

    return <>{renderContent()}</>
}
