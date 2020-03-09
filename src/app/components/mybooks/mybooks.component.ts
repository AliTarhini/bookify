import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../shared/application.state';
import { Observable } from 'rxjs';
import { Book } from './../../models/book';
import { select, Store } from '@ngrx/store';
import { favoritesState } from '../../store/favorites.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  favorites$: Observable<Book[]>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {

    this.favorites$ = this.store
      .pipe(
        select(favoritesState),
        map(favoritesState => favoritesState.favorites)
      );

  }



}
