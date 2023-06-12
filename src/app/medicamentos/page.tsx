'use client'
import TextosH1 from '@/components/TextosH1'
import Checkbox from '@/components/Checkbox'
import Card from '@/components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default async function Medicamentos() {
  useEffect(() => {
    getCard()
    console.log(card)
  }, [])
  const API_URL = 'http://localhost:9080'

  const getCard = async () => {
    return axios.get(API_URL + '/medicamento').then((res) => {
      setCard(res.data)
    })
  }
  const [card, setCard] = useState<any>()

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Medicamentos"
            style="pt-12 text-3xl font-bold text-purple-700"
          ></TextosH1>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <TextosH1
                name="Filtros"
                style="pt-10 text-xl font-bold text-purple-700"
              ></TextosH1>

              <Checkbox
                name="Controlados"
                style="mb-4 flex items-center pt-3 pl-3"
              />
              <Checkbox name="Génericos" style="mb-4 flex items-center pl-3" />
            </div>
            <div className="flex flex-col p-10">
              <div className="flex flex-row flex-wrap">
                {card?.map((dataCard: any) => (
                  <Card
                    key={dataCard.id}
                    titulo={dataCard.titulo}
                    preco={dataCard.preco}
                    imagem={dataCard.imagem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* </QueryClientProvider> */}
    </>
  )
}
