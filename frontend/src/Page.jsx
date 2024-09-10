import React from 'react';
import client from './conection/instance';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';

function Page() {
  const [info, setInfo] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [idUser, setIdUser] = React.useState(null);
  const [forcedUpdate, setForcedUpdate] = React.useState(false);
  React.useEffect(() => {
    client.get('/').then((eh) => {
      setInfo(eh.data);
    });
  }, []);

  function openModal({ target }) {
    setActive(!active);
    setIdUser(target.value);
  }

  function deleteUser() {
    client
      .delete(`/delete/${idUser}`)
      .then(() => {
        window.location.reload();
        setActive(!active);
        setIdUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
    setForcedUpdate(!forcedUpdate);
  }

  return (
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center">
        <div>
          <Link className="text-slate-400 block mb-3" to="/">
            « Voltar
          </Link>
          <table
            className="w-[480px] bg-slate-200 rounded-md"
            style={{ height: info ? '' : '260px' }}
          >
            {info && (
              <tr>
                <th className="px-4 py-2">id</th>
                <th className="px-4">Nome</th>
                <th className="px-4">Email</th>
              </tr>
            )}
            {info ? (
              info.map((item) => (
                <tr key={item.id} className="border-t-2 border-slate-400 ">
                  <td className="text-center px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-200 text-slate-950 font-[500] py-2 px-4">
                      Editar
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      value={item.id}
                      onClick={openModal}
                      className="bg-red-300 text-slate-950 font-[500] py-2 px-4"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="w-full">
                <td className="text-center">Loading</td>
              </tr>
            )}
          </table>
        </div>
      </div>

      <div
        style={{ display: active ? 'flex' : 'none' }}
        className="h-screen w-screen bg-black/90 absolute top-0 flex items-center justify-center"
      >
        <div className="bg-slate-800 rounded-md w-[400px] p-6">
          <h1 className="font-bold text-2xl text-slate-200">Deletar?</h1>
          <p className="text-slate-400 text-lg">
            Tem certeza que deseja deletar essa conta?
          </p>
          <hr className="bg-slate-700 border-none h-[3px] mt-2" />
          <div className="flex gap-8 mt-5">
            <button
              onClick={deleteUser}
              className="bg-red-500 p-2 px-4 font-[500] rounded-md"
            >
              Sim, deletar!
            </button>
            <button
              onClick={openModal}
              className="bg-transparent text-slate-200 border-2 border-slate-200 rounded-md p-2 px-4 font-[500]"
            >
              Não, permaneça!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
