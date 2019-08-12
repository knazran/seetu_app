import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainShelterPage } from './rain-shelter.page';

describe('RainShelterPage', () => {
  let component: RainShelterPage;
  let fixture: ComponentFixture<RainShelterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainShelterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainShelterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
