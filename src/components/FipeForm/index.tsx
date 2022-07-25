import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useCar } from '../../contexts/CarContext'
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

export function FipeForm({ setResulted, resulted }: FipeFormProps) {
    const { brands, models, getAllModels, years, getAllYears, getPriceOfCar, priceOfCar } = useCar();

    const [selectedBrand, setSelectedBrand] = useState(0)
    const [selectedBrandText, setSelectedBrandText] = useState('')

    const [selectedModel, setSelectedModel] = useState(0)
    const [selectedModelText, setSelectedModelText] = useState('')

    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedYearText, setSelectedYearText] = useState('')

    const [clickedButton, setClickedButton] = useState(false)

    const [disabledButton, setDisabledButton] = useState(true)

    function handleChange(event: any) {
        brands.forEach((result, index) => {
            if (result.codigo == event.target.value) {
                setSelectedBrandText(brands[index].nome)
            }
        })
        setSelectedBrand(event.target.value)
    }

    function handleChangeModel(event: any) {
        models.forEach((result, index) => {
            if (result.codigo == event.target.value) {
                setSelectedModelText(models[index].nome)
            }
        })
        setSelectedModel(event.target.value)
    }
    function handleChangeYear(event: any) {
        years.forEach((result, index) => {
            if (result.codigo == event.target.value) {
                setSelectedYearText(years[index].nome)
            }
        })
        setSelectedYear(event.target.value)
    }

    async function onClickApplyButton() {
        getPriceOfCar(selectedBrand, selectedModel, selectedYear)
        setClickedButton(true)
        setDisabledButton(true)
        setResulted(true)
    }

    useMemo(() => {
        if (selectedBrand) {
            getAllModels(selectedBrand)
        }

        if (selectedBrand && selectedModel) {
            getAllYears(selectedBrand, selectedModel)
        }

        if (selectedBrand && selectedModel && selectedYear && !clickedButton) {
            setDisabledButton(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickedButton, selectedBrand, selectedModel, selectedYear])

    return (
        <>
            {resulted ?
                <Container>
                    <h1>{`Tabela Fipe: Preço ${selectedBrandText.split(' ')[0]} ${selectedModelText.split(' ')[0]} ${selectedYearText.split(' ')[0]}`}</h1>
                    <ResultFormContainer>
                        <ButtonContainer>
                            <ButtonRounded>
                                <ButtonText>
                                    {priceOfCar.split(',')[0]}
                                </ButtonText>
                            </ButtonRounded>
                        </ButtonContainer>
                    </ResultFormContainer>
                    <TextAfterResult>{`Este é o preço de compra do veículo`}</TextAfterResult>
                </Container>
                :
                <>
                    <h1>Tabela Fipe</h1>
                    <p>Consulte o valor de um veículo de forma gratuita</p>
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
                                    value={selectedYear}
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
                                                {value.nome}
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
            }
        </>
    )
}
