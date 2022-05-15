import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // heroes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AboutComponent }, // hero-detail
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
