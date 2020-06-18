import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "terms-of-use",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "test",
    loadChildren: () =>
      import("./test/test.module").then((m) => m.TestPageModule),
  },
  {
    path: "terms-of-use",
    loadChildren: () =>
      import("./terms-of-use/terms-of-use.module").then(
        (m) => m.TermsOfUsePageModule
      ),
  },
  {
    path: "send-result",
    loadChildren: () =>
      import("./send-result/send-result.module").then(
        (m) => m.SendResultPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
