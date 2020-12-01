import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss'],
})
export class PollCreateComponent {
  pollForm: FormGroup;

  // output PollForm interface in types.ts
  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    // pollForm is the collection of a set of completely filled form an instance of FormGroup
    this.pollForm = this.fb.group({
      question: this.fb.control('', [Validators.required]), // validators are used when field is required
      image: this.fb.control(''),
      opt1: this.fb.control(''),
      opt2: this.fb.control(''),
      opt3: this.fb.control(''),
    });
  }

  // tslint:disable-next-line: typedef
  submitForm(){
    const formData: PollForm = {
      question: this.pollForm.get("question").value,
      thumbnail: this.pollForm.get("image").value,
      options: [
        this.pollForm.get('opt1').value,
        this.pollForm.get('opt2').value,
        this.pollForm.get('opt3').value
      ]
    };
    this.pollCreated.emit(formData);
  }
}
