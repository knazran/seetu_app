import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaMainPage } from './insta-main.page';

describe('InstaMainPage', () => {
  let component: InstaMainPage;
  let fixture: ComponentFixture<InstaMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
