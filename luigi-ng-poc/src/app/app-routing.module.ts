import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';
import {ContainerComponent} from './pages/container/container.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/container', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'container', component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
