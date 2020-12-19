import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';
import {ContainerComponent} from './pages/container/container.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/container', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'container', component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
