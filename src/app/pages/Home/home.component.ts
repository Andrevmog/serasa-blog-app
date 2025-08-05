import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PostWithAuthor } from '../../models/post-with-author.model';

@Component({
  selector: 'app-home-page',
  // As linhas 'standalone: true' e 'imports: [...]' foram removidas.
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: PostWithAuthor[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPostsWithAuthors().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Não foi possível carregar as publicações. Tente novamente mais tarde.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
