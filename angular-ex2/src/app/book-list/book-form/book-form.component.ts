import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUploading: boolean;
  fileUrl: string;
  fileUploaded: boolean;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
    private router: Router) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });

    this.fileIsUploading = false;
    this.fileUrl = '';
    this.fileUploaded = false;
  }

  ngOnInit() {
  }

  onSaveBook() {
    const formValues = this.bookForm.value;
    const title = formValues['title'];
    const author = formValues['author'];
    const synopsis = formValues['synopsis'];
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photo = this.fileUrl;
    }
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

  detectFiles(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.onUploadFile(input.files[0]);
    }
  }

  async onUploadFile(file: File): Promise<void> {
    this.fileIsUploading = true;
    let url = await this.booksService.uploadFile(file);
    this.fileUrl = url;
    this.fileIsUploading = false;
    this.fileUploaded = true;
  }

}
