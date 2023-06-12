'use client'
import { CardData } from '@/interface/CardData'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from 'react-query'

const API_URL = 'http://localhost:9080'

const fetchData = async () => {
  const response = axios.get(API_URL + '/medicamento')
  return response
}

export function useDataCard() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['data-card'],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data,
  }
}
