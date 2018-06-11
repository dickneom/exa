import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBotonesComponent } from './tienda-botones.component';

describe('TiendaBotonesComponent', () => {
  let component: TiendaBotonesComponent;
  let fixture: ComponentFixture<TiendaBotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaBotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
