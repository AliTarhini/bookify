import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-findbook',
  templateUrl: './findbook.component.html',
  styleUrls: ['./findbook.component.css']
})
export class FindbookComponent implements OnInit {

  constructor(private googleBookApiService: GoogleBooksService) { }

  ngOnInit() {
  }
  books$: Observable<Book[]>;

  search(bookName) {
    this.books$ = this.googleBookApiService.searchBooks(bookName);
  }

  enter() {
    alert(1);
  }

}
