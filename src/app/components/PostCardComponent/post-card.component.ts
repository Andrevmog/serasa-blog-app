import { Component, Input } from '@angular/core';
import { PostWithAuthor } from '../../models/post-with-author.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: PostWithAuthor;
}
