import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ag-course-card',
  templateUrl: './ag-course-card.component.html',
  styleUrls: ['./ag-course-card.component.scss']
})
export class AgCourseCardComponent implements OnInit {
  @Input() id: string; 
  @Input() img: string;
  @Input() title: string;
  @Input() term: string;
  @Input() subtitle: string;
  @Input() rating: number;
  @Input() price: string;
  @Input() oldPrice: string;

  constructor() { }

  ngOnInit(): void {
  }
}
