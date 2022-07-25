import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { api } from '../../services/api'
interface CarProviderProps {
    children: ReactNode
}
interface Car {
    brand: string
    model: string
    year: string
    price: string
}
interface Brand {
    nome: string
    codigo: string
}
interface Model {
    nome: string
    codigo: string
}
interface Year {
    nome: string
    codigo: string
}

interface CarContextData {
    brands: Brand[]
    models: Model[]
    getAllModels: (selectedBrand: number) => Promise<void>
    years: Year[]
    getAllYears: (selectedBrand: number, selectedModel: number) => Promise<void>
    getPriceOfCar: (
        selectedBrand: number,
        selectedModel: number,
        selectedYear: number
    ) => Promise<void>
    priceOfCar: string;
    finalCar: Car
}

const CarContext = createContext({} as CarContextData)

function CarProvider({ children }: CarProviderProps) {
    const [finalCar, setFinalCar] = useState<Car>({} as Car)
    const [brands, setBrands] = useState([])
    const [models, setModels] = useState([])
    const [years, setYears] = useState([])
    const [priceOfCar, setPriceOfCar] = useState('')

    const [requestLoading, setRequestLoading] = useState(false)

    useEffect(() => {
        async function getAllBrands() {
            setRequestLoading(true)
            try {
                const { data } = await api.get('/marcas')
                setBrands(data)
            } catch (error) {
                console.warn(error)
            } finally {
                setRequestLoading(false)
            }
        }
        getAllBrands()
    }, [])

    async function getAllModels(selectedBrand: number) {
        setRequestLoading(true)
        try {
            const { data } = await api.get(`marcas/${selectedBrand}/modelos`)
            setModels(data.modelos)
        } catch (error) {
            console.warn(error)
        } finally {
            setRequestLoading(false)
        }
    }

    async function getAllYears(selectedBrand: number, selectedModel: number) {
        setRequestLoading(true)
        try {
            const { data } = await api.get(
                `marcas/${selectedBrand}/modelos/${selectedModel}/anos`
            )
            setYears(data)
        } catch (error) {
            console.warn(error)
        } finally {
            setRequestLoading(false)
        }
    }

    async function getPriceOfCar(
        selectedBrand: number,
        selectedModel: number,
        selectedYear: number
    ) {
        setRequestLoading(true)
        try {
            const { data } = await api.get(
                `marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`
            )
            setPriceOfCar(data.Valor)
        } catch (error) {
            console.warn(error)
        } finally {
            setRequestLoading(false)
        }
    }

    return (
        <CarContext.Provider
            value={{
                finalCar,
                brands,
                models,
                getAllModels,
                years,
                getAllYears,
                getPriceOfCar,
                priceOfCar
            }}
        >
            {children}
        </CarContext.Provider>
    )
}

function useCar() {
    return useContext(CarContext)
}

export { CarProvider, useCar }
