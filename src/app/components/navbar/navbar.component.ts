import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { favoritesState } from '../../store/favorites.reducer';
import { ApplicationState } from '../../shared/application.state';
import { Book } from './../../models/book';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  favoritesCount$: Observable<number>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.favoritesCount$ = this.store
      .pipe(
        select(favoritesState),
        map(favoritesState => favoritesState.favorites.length)
      );

  }

}
