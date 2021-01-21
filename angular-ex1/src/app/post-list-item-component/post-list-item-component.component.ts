import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post?: BlogPost;

  ngOnInit(): void {
  }

  likeIt(): void {
    if (this.post) {
      this.post.loveIts += 1;
      console.log(this.post.loveIts);
    }
  }

  dontLikeIt(): void {
    if (this.post) {
      this.post.loveIts -= 1;
      console.log(this.post.loveIts);
    }
  }

}
