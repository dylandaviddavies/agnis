import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ag-header',
  templateUrl: './ag-header.component.html',
  styleUrls: ['./ag-header.component.scss']
})
export class AgHeaderComponent implements OnInit {
  @Input() links : Array<string>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
