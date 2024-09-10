import React from 'react';
import client from './conection/instance';
import { redirect, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [data, setData] = React.useState({
    nome: '',
    email: '',
    senha: '',
  });
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!data.nome && !data.email && !data.senha) {
      setError('Preencha todas as informações');
      return;
    }

    client
      .post('/', data)
      .then(() => {
        navigate('/users');
      })
      .catch((error) => {
        setError('Preencha todas as informações');
      });
  }

  function handleChange({ target }) {
    setData({ ...data, [target.name]: target.value });
  }

  return (
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center">
        <div>
          <Link className="text-slate-400 block mb-3" to="/users">
            « Voltar
          </Link>
          <form
            className="w-[300px] bg-slate-200 p-6 rounded-md"
            onSubmit={handleSubmit}
          >
            <label>
              Nome
              <input
                className="bg-slate-300 p-1.5 mb-4 w-full"
                id="nome"
                name="nome"
                onChange={handleChange}
                style={{ display: 'block' }}
                type="text"
              />
            </label>
            <label>
              Email
              <input
                className="bg-slate-300 p-1.5 mb-4 w-full"
                id="email"
                name="email"
                onChange={handleChange}
                style={{ display: 'block' }}
                type="email"
              />
            </label>
            <label>
              Senha
              <input
                className="bg-slate-300 p-1.5 mb-4 w-full"
                id="senha"
                name="senha"
                onChange={handleChange}
                style={{ display: 'block' }}
                type="password"
              />
            </label>
            {error && <p className="text-red-600">{error}</p>}

            <button className="w-full bg-slate-900 p-2 text-white">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
