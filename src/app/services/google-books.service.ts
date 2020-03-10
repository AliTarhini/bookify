import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/book';
import { GoogleBooksApiInterface } from './../models/google-api.interface';


@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get<GoogleBooksApiInterface>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(
        map((data: GoogleBooksApiInterface) => data.items)
      );
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}