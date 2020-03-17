import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerLinks = [
    {
      link: "/co-op",
      text: "Co-op"
    },
    {
      link: "/documents",
      text: "Documents"
    },
    {
      link: "/interviews",
      text: "Interviews"
    }
  ];
  title = 'agnis';
}