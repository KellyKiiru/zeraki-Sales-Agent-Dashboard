import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TashboardComponent } from './tashboard/tashboard.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';


const routes: Routes = [
  { path: 'tashboard', component: TashboardComponent },
  { path: 'school-details', component: SchoolDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
