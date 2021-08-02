import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoComponent } from './cabecalho.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoComponent ],
      imports: [ RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
