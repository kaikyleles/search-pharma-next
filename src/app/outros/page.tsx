'use client'
import TextosH1 from '@/components/TextosH1'
import Checkbox from '@/components/Checkbox'
import Card from '@/components/Card'
import api from '@/services/api'
import { useEffect, useState } from 'react'

export default function Medicamentos() {
  const [card, setCard] = useState()

  useEffect(() => {
    api
      .get('/produtos/outros')
      .then((res) => {
        setCard(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }, [])
  useEffect(() => {
    api
      .get('/produtos/outros')
      .then((res) => {
        setCard(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }, [])
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

              <Checkbox
                name="Higiene pessoal"
                style="mb-4 flex items-center pt-3 pl-3"
              />
              <Checkbox name="Pele/Rosto" style="mb-4 flex items-center pl-3" />
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
