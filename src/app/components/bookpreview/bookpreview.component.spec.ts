import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpreviewComponent } from './bookpreview.component';

describe('BookpreviewComponent', () => {
  let component: BookpreviewComponent;
  let fixture: ComponentFixture<BookpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
