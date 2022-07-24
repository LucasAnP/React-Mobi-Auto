import axios from 'axios'
import { createContext, useState } from 'react'
import useSWR from 'swr'

interface Car {
    name: string
    brand: string
    model: string
    year: string
    value: string
}

interface CarContextData {
    cars: Car[]
}

const CarContext = createContext({} as CarContextData)

export function useFetch<Data = any>(whatRequest: string) {
    const [car, setCar] = useState<Car[]>({} as Car)
    const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros/'
    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR<Data>(`${BASE_URL}${whatRequest}`, fetcher)

    return {
        allBrands: data,
        isLoading: !error && !data,
        isError: error,
    }
}
