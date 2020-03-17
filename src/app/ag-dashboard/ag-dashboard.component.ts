import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-ag-dashboard',
  templateUrl: './ag-dashboard.component.html',
  styleUrls: ['./ag-dashboard.component.scss'],
  providers: [ApiService]
})
export class AgDashboardComponent implements OnInit {
  courses = [];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getCourses().subscribe(d => this.courses = d.slice(0, 3));
  }

}
