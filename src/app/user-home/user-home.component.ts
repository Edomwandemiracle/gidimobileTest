import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book, status } from '../models/book';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  books: Book[] = [];
  // book: Book = new Book();
  booksArray: any;
  searchTerm: string = '';
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  getBook(data: any) {
    this.books.filter((item) => {
      if (item === data) {
        data.status = status.LEND;
      }
    });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.toastr.success('Success', `Waiting for admin's approval`);
  }

  search(value: string): void {
    this.books = this.books.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
