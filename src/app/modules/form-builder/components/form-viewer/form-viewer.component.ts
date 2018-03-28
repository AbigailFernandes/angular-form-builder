import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from '../../form-controls/form-control-base';
import { FormControlService } from '../../form-controls/form-control.service';

@Component({
  selector: 'angular-form-viewer',
  templateUrl: './form-viewer.component.html',
  providers: [FormControlService],
})
export class FormViewerComponent implements OnInit {
  @Input() questions: FormControlBase<any>[] = [];

  form: FormGroup;

  constructor(private qcs: FormControlService) {}

  ngOnInit() {
    this.questions.forEach(question => {
      question.disabled = true;
      question.hintLabel = null;
    });
    this.form = this.qcs.toFormGroup(this.questions);
  }
}
