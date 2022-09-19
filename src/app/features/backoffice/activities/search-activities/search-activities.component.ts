import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, filter, map } from "rxjs/operators";
import { Actividad } from "src/app/core/models/actividad.model";
import { HttpService } from "src/app/core/services/http.service";

@Component({
  selector: "app-search-activities",
  templateUrl: "./search-activities.component.html",
  styleUrls: ["./search-activities.component.scss"],
})
export class SearchActivitiesComponent implements OnInit {
  resultados: Array<Actividad> = [];

  constructor(private actividadService: HttpService) {}

  ngOnInit(): void {
    const buscador = document.getElementById("buscador")!;
    const keyup = fromEvent(buscador, "keyup");

    keyup
      .pipe(
        map((e: any) => e.currentTarget.value),
        debounceTime(100)
      )
      .subscribe((data) => {
        if (data.length > 2) {
          this.actividadService.get( "https://ongapi.alkemy.org/api/activities?search=" + data, false )
            .subscribe(
              (results: any) => {
                this.resultados = results.data;
              },
              (error) => console.log(error.message)
            );
        } else
          this.actividadService.get("https://ongapi.alkemy.org/api/activities", false )
            .subscribe(
              (results: any) => {
                this.resultados = results.data;
              },
              (error) => console.log(error.message)
            );
      });
  }
}
