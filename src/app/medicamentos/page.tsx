import React from 'react'
import TextosH1 from '@/components/TextosH1'
import Checkbox from '@/components/Checkbox'
import Card from '@/components/Card'
export default function Controlados() {
  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Controlados"
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
                <div className="m-2">
                  <Card></Card>
                </div>
                <div className="m-2">
                  <Card></Card>
                </div>
                <div className="m-2">
                  <Card></Card>
                </div>
                <div className="m-2">
                  <Card></Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
