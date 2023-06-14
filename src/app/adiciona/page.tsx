import React from 'react';

export default function Usuarios() {
  return (
    <div className="container mx-52">
      <h1 className="pt-12 text-3xl font-bold text-purple-700">Adicionar Usuário</h1>
      <div className="flex flex-row">
        <div className="flex flex-col p-10">
          <div className="mb-4">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="nome" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <button className="btn btn-primary">Salvar</button>
        </div>
        <div className="flex flex-col p-10">
          <h2>Lista de Usuários</h2>
          <ul>
            <li>
              <input type="text" className="form-control" value="Usuário 1" disabled />
              <button className="btn btn-primary">Editar</button>
              <button className="btn btn-danger">Excluir</button>
            </li>
            <li>
              <input type="text" className="form-control" value="Usuário 2" disabled />
              <button className="btn btn-primary">Editar</button>
              <button className="btn btn-danger">Excluir</button>
            </li>
            <li>
              <input type="text" className="form-control" value="Usuário 3" disabled />
              <button className="btn btn-primary">Editar</button>
              <button className="btn btn-danger">Excluir</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
