import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book, status } from '../models/book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  books: Book[] = [];
  book: Book = new Book();
  booksArray: any;
  searchTerm: string = '';
  showItem: boolean = false;
  showUpdate: boolean = false;
  showAddBtn: boolean = true;
  filteredBooks: any;
  updatedBook: any;

  // images = ['assets/book.png', 'assets/gidimobile.png'];
  // imgNo: number = 0;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getBooks();
    // console.log(this.images);
  }
  newBook: FormGroup = this.fb.group({
    id: [this.book.id],
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
    status: [this.book.status],
    createdAt: [this.book.createdAt],
    updatedAt: [this.book.updatedAt],
  });

  // newBook = new FormGroup({
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   status: new FormControl(this.book.status),
  //   createdAt: new FormControl(this.book.createdAt),
  //   updatedAt: new FormControl(this.book.updatedAt),
  // });

  onSubmit() {
    this.books.push(this.newBook.value);
    // this.newBook.
    localStorage.setItem('books', JSON.stringify(this.books));
    console.log(this.books);
    this.showItem = false;
    this.showAddBtn = true;
  }

  getBooks() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  showData() {
    this.showAddBtn = false;
    this.showItem = true;
  }
  hide() {
    this.newBook = this.fb.group({
      name: [''],
      description: [''],
      imageUrl: [''],
    });
    this.showItem = false;
    this.showAddBtn = true;
    this.showUpdate = false;
  }
  delete(i: any) {
    this.books.filter((item, index) => {
      if (index === i) {
        this.books.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
      }
    });
  }

  search(value: string): void {
    this.books = this.books.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
  filter(data: string) {
    this.filteredBooks = this.books.filter((book) =>
      book.status.includes(data)
    );
    this.books = this.filteredBooks;
  }
  lendbook(data: any, i: any) {
    this.books.filter((item) => {
      if (item === data) {
        data.status = status.UNAVAILABLE;
      }
    });
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  updatebook() {
    this.books.filter((book) => {
      if (book.id === this.newBook.value.id) {
        book = this.newBook.value;
      }
    });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showUpdate = false;
    this.showAddBtn = true;
  }

  updatebtn(data: any) {
    this.showUpdate = true;
    this.showAddBtn = false;

    this.newBook = this.fb.group({
      id: [data.id],
      name: [data.name],
      description: [data.description],
      imageUrl: [data.imageUrl],
      status: [data.status],
      createdAt: [data.createdAt],
      updatedAt: [this.book.updatedAt],
    });
  }
}
