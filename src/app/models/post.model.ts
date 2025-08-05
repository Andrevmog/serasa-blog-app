// Define a estrutura de uma publicação
export interface Post {
  id: number;
  userId: number; // Chave para relacionar com o Autor
  title: string;
  body: string;
  createdAt: string; // Data em formato ISO
}
