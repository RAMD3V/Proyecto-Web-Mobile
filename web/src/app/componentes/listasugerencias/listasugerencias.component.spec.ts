import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasugerenciasComponent } from './listasugerencias.component';

describe('ListasugerenciasComponent', () => {
  let component: ListasugerenciasComponent;
  let fixture: ComponentFixture<ListasugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasugerenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
