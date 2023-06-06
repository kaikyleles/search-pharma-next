'use client'
import CardOpcoes from './CardOpcoes'

export default function CardsOpcoes() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="mr-2">
          <CardOpcoes
            nome="Medicamentos"
            link="https://images.unsplash.com/photo-1555633514-abcee6ab92e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'"
          />
        </div>
        <div className="m-2">
          <CardOpcoes
            nome="Cosméticos"
            link="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          />
        </div>
        <div className="m-2">
          <CardOpcoes nome="Outros" />
        </div>
      </div>
    </>
  )
}
