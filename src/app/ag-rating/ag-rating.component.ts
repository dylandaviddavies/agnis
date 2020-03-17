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
    for (let i = 1; i <= 5; i++) {
      let icon = 'star_outline';
      if (i <= this.value)
        icon = 'star';
      else if (i > this.value && i < this.value + 1)
        icon = 'star_half';
      this.stars.push(icon);
    }
  }

}
