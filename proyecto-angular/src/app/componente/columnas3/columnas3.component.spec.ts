import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Columnas3Component } from './columnas3.component';

describe('Columnas3Component', () => {
  let component: Columnas3Component;
  let fixture: ComponentFixture<Columnas3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Columnas3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Columnas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
