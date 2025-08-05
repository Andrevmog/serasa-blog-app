import { Component, Input } from '@angular/core';
import { PostWithAuthor } from '../../models/post-with-author.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  // O decorator @Input permite que este componente receba os dados de um componente pai.
  @Input() post!: PostWithAuthor;
}
