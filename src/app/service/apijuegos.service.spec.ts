import { TestBed } from '@angular/core/testing';

import { ApijuegosService } from './apijuegos.service';

describe('ApijuegosService', () => {
  let service: ApijuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApijuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
