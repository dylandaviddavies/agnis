import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ag-rating',
  templateUrl: './ag-rating.component.html',
  styleUrls: ['./ag-rating.component.scss']
})
export class AgRatingComponent implements OnInit {
  @Input() value : number;
  stars = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    for(let i = 0; i < 5; i++) {
      let icon = 'star';
      if (this.value > i && this.value < i + 1) {
        icon = 'star_half';
      }
      else if (i > this.value) {
        icon = 'star_outline';
      }
      this.stars.push(icon);
    }
  }

}
