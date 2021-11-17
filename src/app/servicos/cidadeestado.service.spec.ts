import { TestBed } from '@angular/core/testing';

import { CidadeestadoService } from './cidadeestado.service';

describe('CidadeestadoService', () => {
  let service: CidadeestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
