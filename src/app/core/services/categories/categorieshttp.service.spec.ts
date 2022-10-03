import { TestBed } from '@angular/core/testing';

import { CategorieshttpService } from './categorieshttp.service';

describe('CategorieshttpService', () => {
  let service: CategorieshttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieshttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
