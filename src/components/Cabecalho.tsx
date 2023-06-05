'use client'
import Router, { useRouter } from 'next/navigation'

export default function Cabecalho(props: any) {
  const router = useRouter()

  return (
    <>
      <nav className={props.nav}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              LOGO
            </span>
          </a>

          {/* Barra de Pesquisa */}
          <form className={props.pesquisa}>
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
                className="absolute bottom-1 right-2 rounded-xl bg-purple-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Search
              </button>
            </div>
          </form>

          {/* Links */}

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li onClick={() => router.push('/medicamentos')}>
                {/* Medicamento */}
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className={props.medicamento}
                >
                  Medicamento
                </button>
              </li>
              {/* Cosméticos */}
              <li>
                <a href="#" className={props.cosmeticos}>
                  Cosméticos
                </a>
              </li>
              {/* Outros */}
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className={props.outros}
                >
                  Outros{' '}
                  <svg
                    className="ml-1 h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-black dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Higiene Pessoal
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Manicure
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Carrinho */}

              <li className={props.carrinho}>
                <a
                  href="#"
                  className="block rounded text-purple-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:bg-transparent md:dark:hover:text-purple-500"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.58 12.88C61.3937 12.638 61.1544 12.4419 60.8805 12.3067C60.6066 12.1715 60.3054 12.1008 60 12.1H14.26L11.89 5.15004C11.7564 4.75442 11.5023 4.41054 11.1633 4.16664C10.8244 3.92274 10.4176 3.79105 10 3.79004H4C3.46957 3.79004 2.96086 4.00075 2.58579 4.37583C2.21071 4.7509 2 5.25961 2 5.79004C2 6.32047 2.21071 6.82918 2.58579 7.20425C2.96086 7.57933 3.46957 7.79004 4 7.79004H8.57L21.72 46.44C21.8553 46.8338 22.1101 47.1755 22.449 47.4175C22.7878 47.6595 23.1936 47.7897 23.61 47.79H52C52.5304 47.79 53.0391 47.5793 53.4142 47.2043C53.7893 46.8292 54 46.3205 54 45.79C54 45.2596 53.7893 44.7509 53.4142 44.3758C53.0391 44.0008 52.5304 43.79 52 43.79H25L23.54 39.48H54C54.4414 39.482 54.8709 39.3379 55.2219 39.0702C55.5728 38.8025 55.8253 38.4262 55.94 38L61.94 14.62C62.0181 14.3219 62.0263 14.0097 61.9638 13.7079C61.9014 13.406 61.77 13.1227 61.58 12.88V12.88Z"
                      fill="black"
                    />
                    <path
                      d="M29.9999 49.4902C22.9199 49.7102 22.9199 59.9802 29.9999 60.2102C37.0799 60.0002 37.0799 49.7102 29.9999 49.4902Z"
                      fill="black"
                    />
                    <path
                      d="M47.4101 49.4902C40.3301 49.7102 40.3301 59.9802 47.4101 60.2102C54.4901 60.0002 54.4901 49.7102 47.4101 49.4902Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>

              {/* Botao Lateral */}

              <li className={props.barraLateral}>
                <a
                  href="#"
                  className="block rounded text-purple-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 6.75H11C8.65279 6.75 6.75 8.65279 6.75 11V25C6.75 27.3472 8.65279 29.25 11 29.25H25C27.3472 29.25 29.25 27.3472 29.25 25V11C29.25 8.65279 27.3472 6.75 25 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M53 6.75H39C36.6528 6.75 34.75 8.65279 34.75 11V25C34.75 27.3472 36.6528 29.25 39 29.25H53C55.3472 29.25 57.25 27.3472 57.25 25V11C57.25 8.65279 55.3472 6.75 53 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M25 34.75H11C8.65279 34.75 6.75 36.6528 6.75 39V53C6.75 55.3472 8.65279 57.25 11 57.25H25C27.3472 57.25 29.25 55.3472 29.25 53V39C29.25 36.6528 27.3472 34.75 25 34.75Z"
                      fill="black"
                    />
                    <path
                      d="M53 34.75H39C36.6528 34.75 34.75 36.6528 34.75 39V53C34.75 55.3472 36.6528 57.25 39 57.25H53C55.3472 57.25 57.25 55.3472 57.25 53V39C57.25 36.6528 55.3472 34.75 53 34.75Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
