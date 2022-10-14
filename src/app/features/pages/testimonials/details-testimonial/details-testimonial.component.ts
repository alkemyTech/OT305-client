import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TestimonioService } from 'src/app/core/services/testimonials/testimonio.service';

@Component({
  selector: 'app-details-testimonial',
  templateUrl: './details-testimonial.component.html',
  styleUrls: ['./details-testimonial.component.scss']
})
export class DetailsTestimonialComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  testimonio: any = { name: '', image: '', description: '' };
  id: number;

  constructor(
    private aRoute: ActivatedRoute,
    private testimonioService: TestimonioService,
    private router: Router
  ) {
    this.id = this.aRoute.snapshot.params["id"];
    this.testimonioService.getTestimonioById(this.id).pipe(takeUntil(this.desub$))
    .subscribe(
      ({data}) => {
        this.testimonio = data;
      },
      (error) => this.router.navigate(['error'])
    );
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
