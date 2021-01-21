import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts: Array<BlogPost>;

  constructor() {
    this.posts = [];
  }

  ngOnInit(): void {
  }

}
