'use client'
import TextosH1 from '@/components/TextosH1'
import Checkbox from '@/components/Checkbox'
import Card from '@/components/Card'
import api from '@/services/api'
import { useEffect, useState } from 'react'

export default function Medicamentos() {
  const BASE_URL = '/outros'
  const [card, setCard] = useState()

  useEffect(() => {
    setarPadrao()
  }, [])

  const setarPadrao = () => {
    api
      .get(BASE_URL)
      .then((res) => {
        setCard(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }

  const setarHigienePessoal = (event: any) => {
    if (event.target.checked) {
      api
        .get(BASE_URL + '/filtrar/higiene-pessoal')
        .then((res) => {
          setCard(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    } else {
      setarPadrao()
    }
  }

  const setarPeleRosto = (event: any) => {
    if (event.target.checked) {
      api
        .get(BASE_URL + '/filtrar/pele-rosto')
        .then((res) => {
          setCard(res.data)
        })
        .catch((err) => {
          console.error('deu ruim!' + err)
        })
    } else {
      setarPadrao()
    }
  }
  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Outros"
            style="pt-12 text-3xl font-bold text-purple-700"
          ></TextosH1>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <TextosH1
                name="Filtros"
                style="pt-10 text-xl font-bold text-purple-700"
              ></TextosH1>

              <div className="mb-4 flex items-center pl-3 pt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-white bg-white text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  onClick={(event) => setarHigienePessoal(event)}
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Higiene Pessoal
                </label>
              </div>

              <div className="mb-4 flex items-center pl-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-white bg-white text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  onClick={(event) => setarPeleRosto(event)}
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pele/Rosto
                </label>
              </div>
            </div>
            <div className="flex flex-col p-10">
              <div className="flex flex-row flex-wrap">
                {card?.map((dataCard: any) => (
                  <Card key={dataCard} dataCard={dataCard} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
