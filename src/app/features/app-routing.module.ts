import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
    loadChildren: () =>
      import("./pages/web-public.module").then((m) => m.WebPublicModule)
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