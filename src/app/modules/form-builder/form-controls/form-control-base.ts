export class FormControlBase<T> {
  value: T;
  key: string;
  label: string;
  disabled: boolean;
  order: number;
  controlType: string;
  validators: Validator;
  options: { key: string; value: string }[] = [];
  hintLabel: string;
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      disabled?: boolean;
      order?: number;
      controlType?: string;
      validators?: Validator;
      options?: { key: string; value: string }[];
      hintLabel?: string;
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || null;
    this.options = options['options'] || [];
    this.hintLabel = options.hintLabel || null;
  }
}

export class Validator {
  min: number; // Validator that requires controls to have a value greater than a number.
  max: number; // Validator that requires controls to have a value less than a number.
  pattern: string; // Validator that requires a control to match a regex to its value.
  email: boolean; // Validator that performs email validation.
  required: boolean; // Validator that requires controls to have a non-empty value.
  minLength: number; // Validator that requires controls to have a value of a minimum length.
  maxLength: number; // Validator that requires controls to have a value of a maximum length.
}
