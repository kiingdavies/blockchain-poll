import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // this enables the Create Poll button to shows the pollForm when clicked in the app-poll-create html tag in app.component.html file
  showForm = false;
  activePoll: Poll = null;

  polls: Poll[] = [
    {
      id: 1,
      question: 'Do you like bitcoins?',
      thumbnail:
        'https://render.fineartamerica.com/images/rendered/search/acrylic-print/10/6.5/hangingwire/break/images/artworkimages/medium/1/5-cryptocurrency-hologram-and-circuit-board-allan-swart.jpg',
      results: [0, 5, 7, 1],
      options: ['cats', 'Dogs', 'None'],
      voted: false,
    },
    {
      id: 2,
      question: 'Is roanldo the best player in the world?',
      thumbnail:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093',
      results: [5, 4, 2],
      options: ['June', 'Dogs', 'None'],
      voted: true,
    },
  ];

  // this sets the poll to whatever poll we selected
  setActivePoll(poll) {
    // this destroyes he component
    this.activePoll = null;
    // this reinitializes the component by making the view for not voted element rerender after being clicked in 100 miliseconds
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
