// Modelo que combina a publicação com os dados do autor
export interface PostWithAuthor {
  id: number;
  title: string;
  body: string;
  authorName: string;
  publicationDate: Date; // Usar objeto Date para facilitar ordenação
}
