import { Component } from '@angular/core';
import { QuestionService } from './modules/form-builder/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService],
})
export class AppComponent {
  questions: any[];
  payLoad: any;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  display(value) {
    this.payLoad = JSON.stringify(value.rawValue);
  }
}
