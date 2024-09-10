import prisma from '../services/db.js';

export async function insertUserModel(nome, email, senha) {
  const newUser = await prisma.user.create({
    data: {
      name: nome,
      email: email,
      password: senha,
    },
  });

  return newUser;
}

export async function getAllUsersModel() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return users;
}

export async function deleteUsersModel(id) {
  const IntiD = Number(id);
  const deleteUser = await prisma.user.delete({
    where: {
      id: IntiD,
    },
  });

  return deleteUser;
}
