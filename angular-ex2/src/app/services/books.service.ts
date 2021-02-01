import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';
import firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[];
  booksSubject: Subject<Book[]>;

  constructor() {
    this.books = [];
    this.booksSubject = new Subject<Book[]>();
    this.getBooks();
  }

  emitBooks() {
    this.booksSubject.next(this.books);
  }

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks(): void {
    firebase.database().ref('/books').on('value', (data: DataSnapshot) => {
      if (data.val()) {
        this.books = data.val();
      } else {
        this.books = [];
      }
      this.emitBooks();
    });

  }

  async getSingleBook(id: number): Promise<Book> {
    const data: DataSnapshot = await firebase.database().ref('/books/' + id).once('value');
    return data.val();
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl: Book) => {
        return bookEl === book;
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }

}
