/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NovedadesService } from './novedades.service';

describe('Service: Novedades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovedadesService]
    });
  });

  it('should ...', inject([NovedadesService], (service: NovedadesService) => {
    expect(service).toBeTruthy();
  }));
});
