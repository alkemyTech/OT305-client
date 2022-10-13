import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-terms-dialog",
  templateUrl: "./terms-dialog.component.html",
  styleUrls: ["./terms-dialog.component.scss"],
})
export class TermsDialogComponent implements OnInit {
  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string;
      confirmText: string;
      message: string;
    },
    private mdDialogRef: MatDialogRef<TermsDialogComponent>
  ) {}

  ngOnInit(): void {}
  public cancel() {
    this.close(false);
  }
  public close(value: any) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
}
