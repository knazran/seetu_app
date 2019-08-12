import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectTriviaPage } from './correct-trivia.page';

describe('CorrectTriviaPage', () => {
  let component: CorrectTriviaPage;
  let fixture: ComponentFixture<CorrectTriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectTriviaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectTriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
