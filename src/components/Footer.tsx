'use client'

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-300 shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{' '}
          <a href="#" className="hover:underline">
            SearchPharma™
          </a>
          . Todos os direitos reservados.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="http://github.com/LucasCouto13/search-pharma-next"
              className="mr-4 hover:underline md:mr-6 "
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
