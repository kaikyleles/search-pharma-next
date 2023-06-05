import { ReactNode, useState } from 'react'
import './globals.css'
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-100 font-sans text-black`}
      >
        <Cabecalho
          nav="nav border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
          pesquisa="hidden"
          medicamento="flex w-full items-center justify-between rounded py-3 pl-3 pr-4 text-purple-700 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-purple-900 md:dark:hover:bg-transparent md:dark:hover:text-purple-500"
          cosmeticos="block rounded py-3 pl-3 pr-4 text-purple-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-purple-900 md:dark:hover:bg-transparent md:dark:hover:text-purple-500"
          outros="flex w-full items-center justify-between rounded py-3 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-purple-900 md:dark:hover:bg-transparent md:dark:hover:text-purple-500"
        />
        {children}
      </body>
    </html>
  )
}
