export default function page() {
  const urlImage =
    'https://images.unsplash.com/photo-1549964336-67d7d7d74ac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80'
  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-gray-200">
        <div className="flex w-1/2 rounded-2xl bg-purple-20 p-5 shadow-lg">
          <div className="w-1/2">
            <div className="ml-9 mt-20 h-4/5 w-full max-w-sm rounded-lg border border-purple-20 bg-purple-20 sm:p-6 md:p-8">
              <form className="w-full space-y-6 border-none" action="#">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Registre-se
                </h5>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white">
                    Seu nome
                  </label>
                  <input
                    type="nome"
                    name="nome"
                    id="nome"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Nome Nome"
                    required
                  ></input>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white">
                    Seu email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="nome@example"
                    required
                  ></input>
                </div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Sua senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required
                ></input>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-white">
                    Seu Telefone
                  </label>
                  <input
                    type="telefone"
                    name="telefone"
                    id="telefone"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="(XX) XXXXX-XXXX"
                    required
                  ></input>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Fazer Login
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Não possui cadastro?{' '}
                  <a
                    href="#"
                    className="text-purple-700 hover:underline dark:text-purple-500"
                  >
                    Fazer Login
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={urlImage}
              alt="Imagem Login"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}
