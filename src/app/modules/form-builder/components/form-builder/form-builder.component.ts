import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from '../../form-controls/form-control-base';
import { FormControlService } from '../../form-controls/form-control.service';

@Component({
  selector: 'angular-form-builder',
  templateUrl: './form-builder.component.html',
  providers: [FormControlService],
})
export class FormBuilderComponent implements OnInit {
  @Input() title: string;
  @Input() questions: FormControlBase<any>[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formReset = new EventEmitter<any>();

  form: FormGroup;

  constructor(private qcs: FormControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onReset() {
    this.form.reset();
    this.form = this.qcs.toFormGroup(this.questions);
    this.formReset.emit(this.form);
  }
}
