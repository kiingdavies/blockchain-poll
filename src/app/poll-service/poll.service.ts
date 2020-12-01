import { PollForm } from './../types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  // function to getpolls from backend serve (or blockchain backend in this tutorial)

  getPolls(): Observable<Poll[]> { // you can use observable or Promise its the same thing
    return of([
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
    ]).pipe(delay(2000));
  } // import the polls array created in app.component.ts

  // function to vote
  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }
  // function to createPoll when called in handlePollCreate(poll: PollForm) in app.component.ts is created from poll-create.component.ts
  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
