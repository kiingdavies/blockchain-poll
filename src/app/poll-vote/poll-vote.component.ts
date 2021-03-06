import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { PollVote } from '../types';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  @Input() id: number;

  // output PollVote interface in types.ts
  @Output() pollVoted: EventEmitter<PollVote> = new EventEmitter();


  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // This is to check if the user voted or it remains in its null state
    this.voteForm = this.fb.group({
      // this is what controls the formControlName in the poll-vote.component.html form input field
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    // generate the chart if the user has voted
    if (this.voted) {
      this.generateChart();
    }
  }
  // submit poll-vote form function
  submitForm() {
    const pollVoted: PollVote = {
      id: this.id,
      vote: this.voteForm.get("selected").value
    };
    this.pollVoted.emit(pollVoted);
  }

  // generate apex chart function in poll-vote.component.html this defines the options for our chart
  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.results, // [5, 7, 10]
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options, // options = [{'Monday', 'Tuesday', 'wednesday'}];
      },
    };

    // This gets the tag to render the element in
    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );

    // This renders the chart
    chart.render();
  }
}
