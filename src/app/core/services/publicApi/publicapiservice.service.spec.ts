import { TestBed } from '@angular/core/testing';

import { PublicapiserviceService } from './publicapiservice.service';

describe('PublicapiserviceService', () => {
  let service: PublicapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
