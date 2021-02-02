import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from './models/BlogPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  onAddPost(): void {
    this.router.navigate(['posts/new']);
  }

}
