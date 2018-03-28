import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from '../form-controls/form-control-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styles: [
    `.full-width {
        width: 100%
      }
      .side-margin {
        margin: 0 10px;
      }
      .padding {
        padding-bottom: 1.25em;
      }
      `,
  ],
})
export class DynamicFormQuestionComponent {
  @Input() question: FormControlBase<any>;
  @Input() form: FormGroup;


}
