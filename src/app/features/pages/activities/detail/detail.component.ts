import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ActividadService } from "src/app/core/services/activities/actividad.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  actividad: any = { name: '', image: '', description: '' };
  mode: boolean = true;
  id: number;

  constructor(
    private aRoute: ActivatedRoute,
    private actividadService: ActividadService,
    private router: Router
  ) {
    this.id = this.aRoute.snapshot.params["id"];
    this.actividadService.getActivityById(this.id).pipe(takeUntil(this.desub$))
    .subscribe(
      ({data}) => {
        this.actividad = data;
      },
      (error) => this.router.navigate(['error'])
    );
    this.mode = false;
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
