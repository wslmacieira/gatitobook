import { TestBed } from '@angular/core/testing';

import { AutenticacoService } from './autenticacao.service';

describe('AutenticacoService', () => {
  let service: AutenticacoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
