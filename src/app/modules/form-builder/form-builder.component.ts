import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from './form-controls/form-control-base';
import { FormControlService } from './form-controls/form-control.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  providers: [FormControlService],
})
export class FormBuilderComponent implements OnInit {
  @Input() title: string;
  @Input() questions: FormControlBase<any>[] = [];
  @Output() value = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    const formValue = {
      value: this.form.value,
      rawValue: this.form.getRawValue(),
    };
    this.value.emit(formValue);
  }
}
