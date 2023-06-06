import Carrousel from '@/components/Carrousel'
import TextosH1 from '@/components/TextosH1'
import Cabecalho from '@/components/Cabecalho'
import CardsOpcoes from '@/components/CardsOpcoes'

export default function Home() {
  return (
    <>
      <Cabecalho
        nav="nav border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
        pesquisa="hidden"
      />
      <main className="flex">
        <div className="container mx-52">
          <Carrousel />
          <TextosH1
            name="Oque está procurando?"
            style="pt-3 text-2xl font-bold text-purple-700"
          />
          <CardsOpcoes />
        </div>
      </main>
    </>
  )
}
