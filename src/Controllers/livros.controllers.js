import { Livros } from "../models/livros.models.js";


export const listBooks = async (req, res) => {
  const listaLivros = await Livros.findAll({
    attributes: ["id", "title", "author", "available"],
  });
  res.json(listaLivros);
};


export const listBooksById = async (req, res) => {
  try {
    const livro = await Livros.findOne({
      where: { id: req.params.id },
    });
    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({ message: "Livro não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao acho livro!" });
  }
};


export const addBook = async (req, res) => {
  const { title, author, pages, available, theme } = req.body;
  try {
    await Livros.create({ title, author, pages, available, theme });
    res.json({ message: "Livro cadastrado com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Um erro ocorreu ao cadastrar o livro", error });
  }
};



export const addBooks = async (req, res) => {
  const books = req.body; 
  try {
    for (const book of books) {
      const { title, author, pages, available, theme } = book;
      await Livros.create({ title, author, pages, available, theme });
    }
    res.json({ message: "Todos os livros foram cadastrados com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Um erro ocorreu ao cadastrar os livros", error });
  }
};


export const editBooks = async (req, res) => {
  const idLivro = req.params.id;
  const { title, author, pages, available, theme } = req.body;
  try {
    const livro = await Livros.findOne({ where: { id: idLivro } });

    if (livro) {
      await livro.update({ title, author, pages, available, theme });
      res.json({ message: "Livro atualizado com sucesso!" });
    } else {
      res.status(404).json({ message: "O Livro não foi encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro ao atualizar o livro", error });
  }
};


export const deleteBooks = async (req, res) => {
  const idLivro = req.params.id;
  try {
    const livro = await Livros.findOne({ where: { id: idLivro } });
    if (livro) {
      await livro.destroy();
      res.json({ message: "Livro removido com sucesso" });
    } else {
      res.status(404).json({ message: "Livro não consotrado." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro ao remover o livro", error });
  }
};
