import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReparacionComponent } from './crear-reparacion.component';

describe('CrearReparacionComponent', () => {
  let component: CrearReparacionComponent;
  let fixture: ComponentFixture<CrearReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearReparacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
