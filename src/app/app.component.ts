import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // this enables the Create Poll button to shows the pollForm when clicked in the app-poll-create html tag in app.component.html file
  showForm = false;

  polls = [
    {
      question: 'Do you like bitcoins?',
      image:
        'https://render.fineartamerica.com/images/rendered/search/acrylic-print/10/6.5/hangingwire/break/images/artworkimages/medium/1/5-cryptocurrency-hologram-and-circuit-board-allan-swart.jpg',
      votes: [0, 5, 7, 1],
      voted: false,
    },
    {
      question: 'Is roanldo the best player in the world?',
      image:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093',
      votes: [5, 4, 2],
      voted: true,
    },
  ];
}
