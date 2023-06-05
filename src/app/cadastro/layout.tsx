import { ReactNode } from 'react'
import '../globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjure,
} from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjure = BaiJamjure({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baiJamjuree',
})

export const metadata = {
  title: 'Search Pharma',
  description: 'Search Pharma - Perto de você',
}
interface CadastrosLayoutProps {
  children: ReactNode
}

export default function CadatroLayout({ children }: CadastrosLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-100 font-sans text-black`}
      >
        <div className="hidden">
          <Cabecalho
            medicamento="hidden"
            cosmeticos="color"
            outros="hidden"
            pesquisa="hidden"
          />
        </div>
        {children}
      </body>
    </html>
  )
}
