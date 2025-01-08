import { searchBooks } from "../../services/googleBooksService.js";

export const listExternalBooks = async (req, res) => {
  const { search } = req.query; 
  if (!search) {
    return res.status(400).json({ error: "O parâmetro 'search' é obrigatório." });
  }

  try {
    const externalBooks = await searchBooks(search);

    
    const filteredBooks = externalBooks.items.map((item) => {
      const volumeInfo = item.volumeInfo;

      return {
        id: item.id,
        title: volumeInfo.title || "Título não disponível",
        authors: volumeInfo.authors || ["Autor não disponível"],
        publisher: volumeInfo.publisher || "Editora não disponível",
        publisherDate: volumeInfo.publishedDate || "Data não disponível",
        description: volumeInfo.description || "Descrição não disponível",
        pageCount: volumeInfo.pageCount || 0,
        categories: volumeInfo.categories || ["Categoria não disponível"],
      };
    });


    res.json({
      totalItems: externalBooks.totalItems,
      books: filteredBooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros." });
  }
};
