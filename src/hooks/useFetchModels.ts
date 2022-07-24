import axios from 'axios'
import useSWR from 'swr'

export function useFetchModels<Data = any>(model: string) {
    if (model) {
        const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros/'
        const fetcher = url => axios.get(url).then(res => res.data)
        const { data, error } = useSWR<Data>(`${BASE_URL}${model}`, fetcher)
        console.log('allModels', data)

        return {
            allModels: data,
            isError: error,
        }
    } else {
        return {
            allModels: [],
            isError: true,
        }
    }
}
