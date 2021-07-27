import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { NovoUsuarioService } from './novo-usuario.service';

describe('NovoUsuarioService', () => {
  let service: NovoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(NovoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
