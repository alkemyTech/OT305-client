import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./pages/error/error.component";
import { AdminGuardGuard } from "../core/guards/adminGuard/admin-guard.guard";

const routes: Routes = [
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
    canActivate: [AdminGuardGuard],
  },
  {
    path: "landing",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/web-public.module").then((m) => m.WebPublicModule),
  },

  {
    path: "**",
    component: ErrorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
