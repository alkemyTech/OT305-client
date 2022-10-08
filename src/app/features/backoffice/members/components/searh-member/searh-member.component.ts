import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime, distinct, filter, map, switchMap } from "rxjs/operators";
import { Member } from "src/app/core/models/member.model";
import { Get_Nosotros } from "src/app/core/ngrx/actions/nosotros.action";
import { AppStore } from "src/app/core/ngrx/app.store";
import { selectNosotrosList } from "src/app/core/ngrx/selectors/nosotros.selector";
import { MembersService } from "src/app/core/services/members/members.service";

@Component({
  selector: "app-searh-member",
  templateUrl: "./searh-member.component.html",
  styleUrls: ["./searh-member.component.scss"],
})
export class SearhMemberComponent implements OnInit, OnDestroy {
  @ViewChild("memberSearchInput", { static: true })
  memberSearchInput!: ElementRef;
  members: Member[] = [];
  @Output() members$ = new EventEmitter();
  memberSubscription!: Subscription;

  constructor(private memberService: MembersService, private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.listOfMembers();

    this.memberSubscription = fromEvent<Event>(
      this.memberSearchInput.nativeElement,
      "keyup"
    )
      .pipe(
        map((event: Event) => {
          const searchMember = (event.target as HTMLInputElement).value;
          return searchMember;
        }),
        debounceTime(200)
      )
      .subscribe((data: any) => {
        if (data.length > 2) {
          this.memberService.getMember(data).subscribe(
            (res: any) => {
              this.members$.emit(res.data);
            },
            (error) => console.log(error.message)
          );
        } else this.listOfMembers();
      });
  }
  listOfMembers() {
    this.store.dispatch(Get_Nosotros());
    this.store.select(selectNosotrosList)
      .subscribe(
        ({ data }: any) => {
          this.members$.emit(data);
        },
        (error) => console.log(error.message)
      );
  }
  
  ngOnDestroy(): void {
    this.memberSubscription.unsubscribe();
  }
}
