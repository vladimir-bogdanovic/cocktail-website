import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoctailDetailPage } from 'src/components/coctail-detail/coctail-detail';
import { WelcomePage, Categories, SingleCategory } from 'src/components/index';

const routes: Routes = [
  {
    path: 'home',
    component: WelcomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'categories',
    component: Categories,
  },
  {
    path: 'category/:keyChar/:category',
    component: SingleCategory,
  },
  {
    path: 'coctail/:id',
    component: CoctailDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
