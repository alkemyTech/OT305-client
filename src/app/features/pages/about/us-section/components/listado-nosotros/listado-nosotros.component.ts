import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Member } from "src/app/core/models/member.model";
import { Get_Nosotros } from "src/app/core/ngrx/actions/nosotros.action";
import { AppStore } from "src/app/core/ngrx/app.store";
import { selectNosotrosList } from "src/app/core/ngrx/selectors/nosotros.selector";

@Component({
  selector: "app-listado-nosotros",
  templateUrl: "./listado-nosotros.component.html",
  styleUrls: ["./listado-nosotros.component.scss"],
})
export class ListadoNosotrosComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  public members: Array<Member> = [];

  constructor(private store: Store<AppStore>) {
    this.store.dispatch(Get_Nosotros());
    this.store
      .select(selectNosotrosList)
      .pipe(takeUntil(this.desub$))
      .subscribe(
        ({ data }: any) => {
          this.members = data;
        },
        (error) => console.log(error.message)
      );
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }

}
