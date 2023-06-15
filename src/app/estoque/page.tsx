'use client'
import TextosH1 from '@/components/TextosH1'
import Card from '@/components/Card'
import api from '@/services/api'
import { useEffect, useState } from 'react'

export default function Medicamentos() {
  const BASE_URL = '/produtos'
  const [produto, setProduto] = useState()

  useEffect(() => {
    setarPadrao()
  }, [])

  const setarPadrao = () => {
    api
      .get(BASE_URL)
      .then((res) => {
        setProduto(res.data)
      })
      .catch((err) => {
        console.error('deu ruim!' + err)
      })
  }

  return (
    <>
      <main className="flex">
        <div className="container mx-52">
          <TextosH1
            name="Produtos"
            style="pt-12 pb-5 text-3xl font-bold text-purple-700"
          ></TextosH1>
          <div className="flex flex-row flex-wrap content-evenly items-center justify-between rounded-2xl bg-purple-200 p-3">
            <div className="flex flex-col">
              <form className="px-0">
                <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 30 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block h-9 w-96 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                    placeholder="Search"
                    required
                  ></input>
                  <button
                    type="submit"
                    className="absolute bottom-1 right-2 rounded-xl bg-purple-700 px-4 py-1 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Tipos{' '}
                <svg
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">Exportar</div>
            <div className="flex flex-col">
              <a
                href="#"
                className="rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                + Produtos
              </a>
            </div>
          </div>

          <div className="relative w-full overflow-x-auto rounded-lg pt-6">
            <table className="w-full text-left text-sm text-gray-700 dark:text-gray-700">
              <thead className="dark:bg-gray bg-purple-200 text-xs uppercase text-gray-700 text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Produto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estoque
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Preço
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Catálogo
                  </th>
                </tr>
              </thead>
              <tbody>
                {produto?.map((dataProduto: any) => (
                  <>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {dataProduto.nome}
                      </th>
                      <td className="px-6 py-4">{dataProduto.tipo}</td>
                      <td className="px-6 py-4">
                        {dataProduto.quantidadeEstoque}
                      </td>
                      <td className="px-6 py-4">{dataProduto.preco}</td>
                      <td className="px-6 py-4">{dataProduto.catalogo}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}
