import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Organizacion } from 'src/app/core/models/organizacion.model';
import { OrganizacionService } from 'src/app/core/services/organization/organizacion.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  organizacion: Organizacion = {
    logo: "",
    name: "",
    short_description: "",
    long_description: "",
    address: "",
    phone: "",
    cellphone: "",
    facebook_url: "",
    linkedin_url: "",
    instagram_url: "",
    twitter_url: ""
  };

  constructor(private organizacionService: OrganizacionService) {
    this.organizacionService.getOrganizacion().pipe(takeUntil(this.desub$))
    .subscribe(
      (res) => {
        let {data} : any = res;
        this.organizacion = data;
      },
      (error) => console.log(error.message)
    );
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
