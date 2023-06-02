import Carrousel from '@/components/Carrousel'
import TextosH1 from '@/components/TextosH1'
import Cards from '@/components/Cards'

export default function Home() {
  return (
    <main className="flex">
      <div className="container mx-52">
        <Carrousel />
        <TextosH1
          name="Mais Vendidos"
          style="pt-3 text-2xl font-bold text-purple-700"
        />
        <Cards />
        <TextosH1
          name="Higiene Pessoal"
          style="pt-3 text-2xl font-bold text-purple-700"
        />
        <Cards />
      </div>
    </main>
  )
}
