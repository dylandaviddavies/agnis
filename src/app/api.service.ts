import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AgCoursesComponent } from './ag-courses/ag-courses.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://dylandaviddavies.github.io/agnis-api";

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get<Object[]>(`${this.url}/courses.json`);
  }

  getMyCourses(){
    return this.http.get<Object[]>(`${this.url}/my-courses.json`);
  }

  getSuggestedCourses(){
    return this.http.get<Object[]>(`${this.url}/suggested-courses.json`);
  }
}
