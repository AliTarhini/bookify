import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../services/google-books.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../../shared/application.state';
import { AddBookAction, RemoveBookAction } from './../../store/favorites.actions';
import { favoritesState } from '../../store/favorites.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

const SNACKBAR_DURATION: number = 2000;


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book$: Observable<Book>;
  isFavorite$: Observable<boolean>;
  thumbnail$: Observable<string>;

  private id: string;

  constructor(private route: ActivatedRoute,
    private googleBookApiService: GoogleBooksService,
    private store: Store<ApplicationState>,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.book$ = this.googleBookApiService.retrieveBook(this.id);

    this.isFavorite$ = this.store
      .pipe(
        select(favoritesState),
        map(favoritesState => !!favoritesState.favorites.find(f => f.id === this.id))
      );

    this.thumbnail$ = this.book$
      .pipe(
        filter(book => !!book && !!book.volumeInfo &&
          !!book.volumeInfo.imageLinks && !!book.volumeInfo.imageLinks.smallThumbnail),
        map(book => book.volumeInfo.imageLinks.smallThumbnail.replace('http:', ''))
      )
  }

  addToList(book: Book) {
    this.store.dispatch(new AddBookAction(book));
    this.openSnackBar("New book is added to your list!", "Added");
  }

  removeFromList(book: Book) {
    this.store.dispatch(new RemoveBookAction(book));
    this.openSnackBar("The book is removed from your list!", "Removed");
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: SNACKBAR_DURATION,
    });
  }

}
