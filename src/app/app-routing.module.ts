import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgDashboardComponent } from './ag-dashboard/ag-dashboard.component';
import { AgOpportunitiesComponent } from './ag-opportunities/ag-opportunities.component';
import { AgRankingsComponent } from './ag-rankings/ag-rankings.component';
import { AgApplicationsComponent } from './ag-applications/ag-applications.component';
import { AgCoursesComponent } from './ag-courses/ag-courses.component';

const routes: Routes = [
  { path: '', component: AgDashboardComponent},
  { path: 'courses', component: AgCoursesComponent},
  { path: 'opportunities', component: AgOpportunitiesComponent},
  { path: 'rankings', component: AgRankingsComponent},
  { path: 'applications', component: AgApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
