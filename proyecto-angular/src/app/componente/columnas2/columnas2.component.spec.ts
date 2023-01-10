import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Columnas2Component } from './columnas2.component';

describe('Columnas2Component', () => {
  let component: Columnas2Component;
  let fixture: ComponentFixture<Columnas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Columnas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Columnas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
