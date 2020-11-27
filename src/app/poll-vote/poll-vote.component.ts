import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements OnInit {
  options = ['Monday', 'Tuesday', 'wednesday'];
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // This is to check if the user voted or it remains in its null state
    this.voteForm = this.fb.group({
      // this is what controls the formControlName in the poll-vote.component.html form input field
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.voteForm.value);
  }
}
