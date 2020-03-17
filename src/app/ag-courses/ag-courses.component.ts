import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-ag-courses',
  templateUrl: './ag-courses.component.html',
  styleUrls: ['./ag-courses.component.scss'],
  providers: [ApiService]
})
export class AgCoursesComponent implements OnInit {
  myCourses = [];
  suggestedCourses = [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getMyCourses().subscribe(d => this.myCourses = d);    
    this.api.getSuggestedCourses().subscribe(d => this.suggestedCourses = d);    
  }
}
