import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StatsComponent } from './stats/stats.component';
import { CheckInComponent } from './check-in/check-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'checkin', component: CheckInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}