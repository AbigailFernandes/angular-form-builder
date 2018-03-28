import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  questions: any[];
  payLoad: any;

  constructor(service: AppService) {
    this.questions = service.getQuestions();
  }

  display(form) {
    this.payLoad = JSON.stringify(form.getRawValue()); // gives form value along with those fields that have been disabled.
  }
}
