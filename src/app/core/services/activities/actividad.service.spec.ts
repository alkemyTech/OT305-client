import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { ActividadService } from "./actividad.service";

fdescribe("ActividadService", () => {
  let service: ActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ActividadService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("debe de traer información de una actividad", () => {
    service.getActivityById(2074).subscribe(({data}) => {
      return expect(data.name).toBe("Volar Barriletes");
    });
  });

});
