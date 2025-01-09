import { Users } from "../models/usersSchema.models.js";

export const listUsers = async (req, res) => {
  try {
    const listarUsuarios = await Users.findAll();
    if (listarUsuarios.length == 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado." });
    }
    res.json(listarUsuarios);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuários: ", error: error.message });
  }
};

export const findUserById = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { id: req.params.id },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Usuário inexistente." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao encontrar usuários." });
  }
};

export const addUser = async (req, res) => {
    const { name, password, email, phone } = req.body;
  try {
    await Users.create({ name, password, email, phone });
    res.json({message: "Usuário cadastrado com sucesso!"})
  } catch (error) {
    res.status(500).json({message: "Erro ao cadastrar usuário", error: error.message})
  }
};

export const editUser =  async(req, res) => {
    const idUser = req.params.id;
    const { name, password, email, phone } = req.body;
    try {
        const user = await Users.findOne({where: {id: idUser}})

        if(user){
            await user.update({ name, password, email, phone });
            res.json({message: "Usuário atualizado com sucesso"})
        }else{
            res.status(404).json({message: "O Usuário não foi encontrado"})
        }


    } catch (error) {
        res.status(500).json({message: "Ocorreu um erro ao atualizar o usuário", error: error.message})        
    }
}


export const deleteUser = async (req, res) => {
    const idUser = req.params.id;
    try {
        const user = await Users.findOne({where: {id: idUser}})
        if(user){
            await user.destroy();
            res.json({message: "Usuário deletado com sucesso."})
        }else{
            res.status(404).json({message: "Usuário não encontrado"})
        }
    } catch (error) {
        res.status(500).json({message: "Erro ao excluir usuário.", error: error.message})
    }
}
