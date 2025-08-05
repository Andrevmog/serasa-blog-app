import { Injectable } from '@angular/core';
// O HttpClient não é mais necessário para esta versão mockada, mas pode ser mantido para o futuro.
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; // Importamos o 'delay' para simular uma chamada de rede
import { Post } from '../models/post.model';
import { Author } from '../models/author.model';
import { PostWithAuthor } from '../models/post-with-author.model';

@Injectable({ providedIn: 'root' })
export class ApiService {

  // As URLs reais não serão mais usadas neste modo, mas as mantemos comentadas para referência.
  // private postsUrl = '/api/v3/6e82aa06-6df4-4a08-98e7-052e0230aec4';
  // private authorsUrl = '/api/v3/19af9f60-b590-46af-8c89-801f2dbbcf9f';

  constructor(private http: HttpClient) {}

  /**
   * Esta é a versão MOCKADA do método.
   * Ela não faz chamadas HTTP reais.
   */
  getPostsWithAuthors(): Observable<PostWithAuthor[]> {
    console.warn('AVISO: Usando dados mockados (ApiService)');

    // 1. Dados que seriam retornados pelas APIs, agora estão fixos aqui.
    const mockPosts: Post[] = [
      { "id": 1, "userId": 1, "title": "Sang lose of hour then he left find", "body": "Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pressure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had.", "createdAt": "2018-01-17T14:22:15.349Z" },
      { "id": 2, "userId": 2, "title": "AssCo has revamped the theory of versioning", "body": "We will mesh the buzzword 'strategic'. Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term 'strategize' really mean? Think one-to-one. The reporting factor can be summed up in one word: B2B2C.", "createdAt": "2018-03-20T03:13:35.323Z" },
      { "id": 3, "userId": 2, "title": "Have you ever needed to streamline your feature set?", "body": "If you monetize magnetically, you may have to mesh transparently. If you monetize interactively, you may have to engage strategically. Think client-focused. Think six-sigma. Think leading-edge, but don't think all three at the same time.", "createdAt": "2018-04-12T09:45:27.221Z" },
      { "id": 4, "userId": 4, "title": "Consulted eagerness unfeeling", "body": "Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for.", "createdAt": "2018-08-02T19:54:14.332Z" }
    ];

    const mockAuthors: Author[] = [
      { "id": 1, "name": "SOPHIE HAWK" },
      { "id": 2, "name": "Nicholas Jordan" },
      { "id": 3, "name": "Zinnia Rickard" },
      { "id": 4, "name": "Zinnia Rickard" }
    ];

    // 2. A mesma lógica de transformação que tínhamos antes é aplicada aos dados mockados.
    const authorsMap = new Map(mockAuthors.map(author => [author.id, author.name]));

    const combinedData = mockPosts.map(post => ({
      id: post.id,
      title: post.title,
      body: post.body,
      authorName: authorsMap.get(post.userId) || 'Autor Desconhecido',
      publicationDate: new Date(post.createdAt),
    }));

    return of(combinedData).pipe(delay(500));
  }
}
