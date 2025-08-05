import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostWithAuthor } from '../../models/post-with-author.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
  // @Input recebe a lista COMPLETA de posts do componente pai.
  @Input() posts: PostWithAuthor[] = [];
  recentPosts: PostWithAuthor[] = [];

  // ngOnChanges é chamado sempre que um @Input (neste caso, 'posts') é atualizado.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['posts'] && this.posts.length > 0) {
      // Ordena os posts pela data mais recente e pega os 4 primeiros, como na imagem.
      this.recentPosts = [...this.posts]
        .sort((a, b) => b.publicationDate.getTime() - a.publicationDate.getTime())
        .slice(0, 4);
    }
  }
}
