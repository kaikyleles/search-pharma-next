import { ReactNode, useState } from 'react'
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
interface MedicamentosLayoutProps {
  children: ReactNode
}

export default function MedicamentosLayout({
  children,
}: MedicamentosLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-100 font-sans text-black`}
      >
        <h1>TESTE</h1>
        {children}
      </body>
    </html>
  )
}
