import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { FormControlBase, Validator } from './form-control-base';

@Injectable()
export class FormControlService {
  validators = {
    email: () => Validators.email,
    required: () => Validators.required,
    min: min => Validators.min(min),
    max: max => Validators.max(max),
    pattern: pattern => Validators.pattern(pattern),
    minLength: minLength => Validators.minLength(minLength),
    maxLength: maxLength => Validators.maxLength(maxLength),
  };

  constructor() {}

  toFormGroup(questions: FormControlBase<any>[]) {
    const group: any = {};
    questions.forEach(question => {
      const state = {
        value: question.value || '',
        disabled: question.disabled,
      };
      let validatorOpts: ValidatorFn[] | null;
      if (question.validators) {
        validatorOpts = this.getValidators(question.validators);
      }
      group[question.key] = new FormControl(state, validatorOpts);
    });
    return new FormGroup(group);
  }

  getValidators(validators: Validator) {
    const validatorOpts = new Array<ValidatorFn>();
    Object.keys(validators).forEach(key => {
      if (validators[key]) {
        validatorOpts.push(this.validators[key](validators[key]));
      }
    });
    return validatorOpts;
  }
}
