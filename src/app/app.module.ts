import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgHeaderComponent } from './ag-header/ag-header.component';
import { AgSidebarComponent } from './ag-sidebar/ag-sidebar.component';
import { AgDashboardComponent } from './ag-dashboard/ag-dashboard.component';
import { AgOpportunitiesComponent } from './ag-opportunities/ag-opportunities.component';
import { AgApplicationsComponent } from './ag-applications/ag-applications.component';
import { AgRankingsComponent } from './ag-rankings/ag-rankings.component';
import { AgCoursesComponent } from './ag-courses/ag-courses.component';
import { AgCourseCardComponent } from './ag-course-card/ag-course-card.component';
import { AgRatingComponent } from './ag-rating/ag-rating.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgHeaderComponent,
    AgSidebarComponent,
    AgDashboardComponent,
    AgOpportunitiesComponent,
    AgApplicationsComponent,
    AgRankingsComponent,
    AgCoursesComponent,
    AgCourseCardComponent,
    AgRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
