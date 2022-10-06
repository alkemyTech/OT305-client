import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrganizacionService } from 'src/app/core/services/organization/organizacion.service';
import { takeUntil } from "rxjs/operators";
@Component({
  selector: 'app-us-section',
  templateUrl: './us-section.component.html',
  styleUrls: ['./us-section.component.scss']
})
export class UsSectionComponent implements OnInit, OnDestroy {
  texto: string = '';
  private desub$ = new Subject<void>();

  constructor(private organizacionService: OrganizacionService) { }

  ngOnInit(): void {
    this.organizacionService.getOrganizacion().pipe(takeUntil(this.desub$))
    .subscribe(
      (res) => {
        let {data} : any = res;
        this.texto = data.long_description;
      },
      (error) => console.log(error.message)
    );
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
