import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, distinct, filter, map, switchMap } from "rxjs/operators";
import { Member } from "src/app/core/models/member.model";
import { MembersService } from "src/app/core/services/members/members.service";

@Component({
  selector: "app-searh-member",
  templateUrl: "./searh-member.component.html",
  styleUrls: ["./searh-member.component.scss"],
})
export class SearhMemberComponent implements OnInit {
  @ViewChild("memberSearchInput", { static: true })
  memberSearchInput!: ElementRef;
  member$!: Observable<Member[]>;
  listMember$!: Observable<Member[]>;
  public members: Member[] = [];

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.member$ = fromEvent<Event>(
      this.memberSearchInput.nativeElement,
      "keyup"
    ).pipe(
      map((event: Event) => {
        const searchMember = (event.target as HTMLInputElement).value;
        return searchMember;
      }),
      filter((searchTearm: string) => searchTearm.length > 2),
      debounceTime(500),
      distinct(),
      switchMap((searchMember: string) =>
        this.memberService.getMember(searchMember)
      )
    );

    this.listMember$ = this.memberService.listMember();
  }
}
