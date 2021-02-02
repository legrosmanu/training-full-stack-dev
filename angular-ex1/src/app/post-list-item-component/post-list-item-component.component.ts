import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost';
import { BlogPostServiceService } from '../services/blog-post-service.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post?: BlogPost;
  @Input() indexPost: number;

  constructor(private blogPostsService: BlogPostServiceService) {
    this.indexPost = -1;
  }

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

  onRemove(): void {
    this.blogPostsService.removePost(this.indexPost);
  }

}
