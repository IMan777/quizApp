import { Component, Input } from '@angular/core';
import { Answers } from 'src/quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;
}