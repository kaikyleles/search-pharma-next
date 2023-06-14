import React from 'react';

export default function Controlados() {
  return (
    <div className="container mx-52">
      <h1 className="pt-12 text-3xl font-bold text-purple-700">Meu Perfil</h1>
      <div className="flex flex-row">
        <div className="flex flex-col p-10">
          <div className="mb-4">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="nome" value="Kaiky Leles" disabled />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input type="password" className="form-control" id="senha" value="********" disabled />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="form-label">Telefone:</label>
            <input type="tel" className="form-control" id="telefone" value="(31) 99246-2012" disabled />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value="kaikyleles@gmail.com" disabled />
          </div>
          <button className="btn btn-primary">Editar Perfil</button>
        </div>
        <div className="flex flex-col p-10">
          <h2 className="text-xl font-bold text-purple-700">Administrador</h2>
          <button className="btn btn-primary mb-4">Criar/Remover Usuário</button>
          <button className="btn btn-primary">Administrar Produtos</button>
        </div>
      </div>
    </div>
  );
}
