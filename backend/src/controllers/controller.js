import {
  deleteUsersModel,
  getAllUsersModel,
  insertUserModel,
} from '../model/userModel.js';

export async function createUser(req, res) {
  const { nome, email, senha } = req.body;

  try {
    const user = await insertUserModel(nome, email, senha);
    return res.status(201).send(`Usuário ${nome} inserido com sucesso`);
  } catch (error) {
    return res.status(400).send('Erro ao enviar');
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersModel();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).send('Erro ao puxar');
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    const deleteUser = await deleteUsersModel(id);
    return res.status(200).send('Sucesso ao deletar');
  } catch (error) {
    return res.status(400).send('Erro ao deletar');
  }
}
