import axios from 'axios'
import useSWR from 'swr'

export function useFetch<Data = any>(whatRequest: string) {
    const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros/'
    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR<Data>(`${BASE_URL}${whatRequest}`, fetcher)

    return {
        allBrands: data,
        isLoading: !error && !data,
        isError: error,
    }
}
