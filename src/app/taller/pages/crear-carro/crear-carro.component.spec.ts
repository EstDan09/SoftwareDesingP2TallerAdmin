import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCarroComponent } from './crear-carro.component';

describe('CrearCarroComponent', () => {
  let component: CrearCarroComponent;
  let fixture: ComponentFixture<CrearCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
