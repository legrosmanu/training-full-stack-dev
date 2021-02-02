import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogPost } from '../models/BlogPost';
import { BlogPostServiceService } from '../services/blog-post-service.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Array<BlogPost>;
  postsServiceSubscription?: Subscription;

  constructor(private blogPostService: BlogPostServiceService, private router: Router) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postsServiceSubscription = this.blogPostService.postsSubject.subscribe((posts:Array<BlogPost>) => {
      this.posts = posts;
    });
    this.blogPostService.emitPosts();
  }

  ngOnDestroy(): void {
    this.blogPostService.postsSubject.unsubscribe();
  }

  onAddPost(): void {
    this.router.navigate(['posts/new']);
  }

}
