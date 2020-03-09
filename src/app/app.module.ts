import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from './shared/pipes/index';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { FindbookComponent } from './components/findbook/findbook.component';
import { BookpreviewComponent } from './components/bookpreview/bookpreview.component';
import { BookComponent } from './components/book/book.component';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './store/favorites.reducer';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MybooksComponent,
    FindbookComponent,
    BookpreviewComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PipesModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('favoritesState', favoritesReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
