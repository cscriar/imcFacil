import React from 'react';

const IMCList = ({ usuarios }) => {
  return (
    <div>
      <h2>Lista de IMC dos Usuários</h2>
      <ul>
        {usuarios?.map((usuario) => (
          <li key={usuario.email}>
            <strong>Email:</strong> {usuario.email}, <strong>IMC:</strong> {usuario.imc !== null ? usuario.imc.toFixed(2) : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IMCList;
