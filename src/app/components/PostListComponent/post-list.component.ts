import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PostWithAuthor } from '../../models/post-with-author.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {
  // Recebe a lista completa de posts do componente pai.
  @Input() allPosts: PostWithAuthor[] = [];

  displayedPosts: PostWithAuthor[] = [];
  authors: string[] = [];

  private currentSort: 'asc' | 'desc' = 'desc';
  private currentFilter = 'all';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allPosts'] && this.allPosts.length > 0) {
      // Popula a lista de autores únicos para o dropdown de filtro.
      this.authors = [...new Set(this.allPosts.map(p => p.authorName))];
      this.updateDisplayedPosts();
    }
  }

  // Funções que recebem os eventos do ControlsComponent
  onFilterChanged(author: string): void {
    this.currentFilter = author;
    this.updateDisplayedPosts();
  }

  onSortChanged(sort: 'asc' | 'desc'): void {
    this.currentSort = sort;
    this.updateDisplayedPosts();
  }

  // Função central que aplica o filtro e a ordenação.
  private updateDisplayedPosts(): void {
    let filtered = this.currentFilter === 'all'
      ? [...this.allPosts]
      : this.allPosts.filter(p => p.authorName === this.currentFilter);

    filtered.sort((a, b) => {
      const timeA = a.publicationDate.getTime();
      const timeB = b.publicationDate.getTime();
      return this.currentSort === 'desc' ? timeB - timeA : timeA - timeB;
    });

    this.displayedPosts = filtered;
  }
}
