import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-bookpreview',
  templateUrl: './bookpreview.component.html',
  styleUrls: ['./bookpreview.component.css']
})
export class BookpreviewComponent implements OnInit {
  @Input() book: Book;

  get id(): string {
    return this.book.id;
  }

  get title(): string {
    return this.book.volumeInfo.title;
  }

  get subtitle(): string {
    return this.book.volumeInfo.subtitle;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return '';
  }
  constructor() { }

  ngOnInit() {

  }

}
