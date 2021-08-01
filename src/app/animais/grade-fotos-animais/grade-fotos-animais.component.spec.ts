import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosAnimaisComponent } from './grade-fotos-animais.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GradeFotosAnimaisComponent', () => {
  let component: GradeFotosAnimaisComponent;
  let fixture: ComponentFixture<GradeFotosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosAnimaisComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFotosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
