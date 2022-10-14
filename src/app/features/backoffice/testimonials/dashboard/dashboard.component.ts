import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TestimonioService } from 'src/app/core/services/testimonials/testimonio.service';
import { ResponseComponent } from 'src/app/shared/components/alertas/response.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  testimonios: Array<any> = [];
  p = 0;
  
  constructor(private testimonioService: TestimonioService, public dialog: MatDialog,) {
    this.testimonioService.getTestimonios().pipe(takeUntil(this.desub$))
    .subscribe(
      ({data}) => {
        this.testimonios = data;
      },
      (error) => this.openDialog(
        "Los testimonios no pudieron ser obtenidos",
        error.message,
        "Error"
      )
    )
  }

  openDialog(titulo: string, mensaje: string, tipo: string): void {
    const dialogRef = this.dialog.open(ResponseComponent, {
      data: {
        message: mensaje,
        title: titulo,
        type: tipo,
      },
    });
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
