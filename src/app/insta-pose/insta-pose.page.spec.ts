import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPosePage } from './insta-pose.page';

describe('InstaPosePage', () => {
  let component: InstaPosePage;
  let fixture: ComponentFixture<InstaPosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaPosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaPosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
