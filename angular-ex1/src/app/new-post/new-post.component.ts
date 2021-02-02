import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from '../models/BlogPost';
import { BlogPostServiceService } from '../services/blog-post-service.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private postService: BlogPostServiceService) { 
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const values = this.postForm.value;
    let newPost:BlogPost = new BlogPost();
    newPost.title = values['title'];
    newPost.content = values['content'];
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
