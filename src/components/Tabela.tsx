import api from '@/services/api'
import React, { useEffect, useState } from 'react'

export default function Tabela({ produto }: any) {
  return (
    <>
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
                Categoria
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
              <tr
                key={dataProduto.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {dataProduto.nome}
                </th>
                <td className="px-6 py-4">{dataProduto.tipo}</td>
                <td className="px-6 py-4">{dataProduto.categoria}</td>
                <td className="px-6 py-4">{dataProduto.quantidadeEstoque}</td>
                <td className="px-6 py-4">{dataProduto.preco}</td>
                <td className="px-6 py-4">{dataProduto.catalogo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
