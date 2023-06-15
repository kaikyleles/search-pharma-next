'use client'

export default function Card({ dataCard }: any) {
  return (
    <div className="m-3 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#" className="items-center justify-center">
        <img
          className="ml-7 h-60 w-64 items-center justify-center rounded-t-lg p-7"
          src={dataCard?.imagem}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="pb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {dataCard?.nome}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-700 dark:text-white">
            R$ {dataCard?.preco}
          </span>
          <a
            href="#"
            className="rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            + Carrinho
          </a>
        </div>
      </div>
    </div>
  )
}
