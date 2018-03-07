import { FormControlBase } from './form-control-base';

export class Input extends FormControlBase<string> {
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class MultipleChoice extends FormControlBase<string> {
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

export class Checkbox extends FormControlBase<string> {
  checked: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.checked = options['checked'] || false;
  }
}
