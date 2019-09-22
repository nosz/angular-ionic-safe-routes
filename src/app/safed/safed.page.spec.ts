import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafedPage } from './safed.page';

describe('SafedPage', () => {
  let component: SafedPage;
  let fixture: ComponentFixture<SafedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
