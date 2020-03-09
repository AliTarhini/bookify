import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { FindbookComponent } from './components/findbook/findbook.component';
import { BookComponent } from './components/book/book.component';
const routes: Routes = [
  { path: '', component: MybooksComponent },
  { path: 'search', component: FindbookComponent },
  { path: 'book/:id', component: BookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
