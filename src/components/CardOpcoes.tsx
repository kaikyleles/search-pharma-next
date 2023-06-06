'use client'

export default function CardOpcoes(props: any) {
  return (
    <>
      <div className="mt-4 max-w-xs items-center justify-center rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ">
        <a href="#">
          <img className="h-80 w-96 rounded-t-lg" src={props.link} alt="" />
        </a>
        <div className="p-5 text-center ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.nome}
            </h5>
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-purple-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Visualizar
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
