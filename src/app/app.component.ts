import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // this enables the Create Poll button to shows the pollForm when clicked in the app-poll-create html tag in app.component.html file
  showForm = false;
}
