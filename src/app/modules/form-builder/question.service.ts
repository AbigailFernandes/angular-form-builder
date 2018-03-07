import { Injectable } from '@angular/core';
import { Input, MultipleChoice, Checkbox } from './form-controls/form-controls';
import { FormControlBase } from './form-controls/form-control-base';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    const questions: FormControlBase<any>[] = [
      new MultipleChoice({
        controlType: 'select',
        key: 'fulfiller',
        value: 'VEN',
        label: 'Fulfiller',
        options: [
          { key: 'WND', value: 'Windsor' },
          { key: 'VEN', value: 'Venlo' },
          { key: 'DPK', value: 'Deerpark' },
          { key: 'BHI', value: 'Bhiwandi' },
        ],
      }),
      new MultipleChoice({
        controlType: 'radio',
        key: 'timezone',
        label: 'Timezone',
        validators: {
          required: true,
        },
        disabled: false,
        value: 'UTC',
        options: [
          { key: 'UTC', value: 'UTC' },
          {
            key: 'Central European Standard Time',
            value: 'Central European Standard Time',
          },
          {
            key: 'Eastern Standard Time',
            value: 'Eastern Standard Time',
          },
          {
            key: 'Aus Eastern Standard Time',
            value: 'Aus Eastern Standard Time',
          },
        ],
        order: 3,
      }),
      new Checkbox({
        controlType: 'checkbox',
        key: 'changeEventEnabled',
        label: 'Change Event Enabled',
        value: true,
        checked: true,
        disabled: true,
        order: 4,
      }),
      new Input({
        controlType: 'input',
        key: 'pressName',
        label: 'Printer Name',
        value: '',
        validators: {
          required: false,
        },
        required: true,
        order: 1,
      }),
      new Input({
        controlType: 'input',
        key: 'subscriptionIntervalSeconds',
        value: 60,
        label: 'Subscription Interval Seconds',
        type: 'number',
        order: 2,
        validators: {
          min: 5,
          max: 100,
          required: true,
        },
      }),
      new Input({
        controlType: 'input',
        key: 'pollIntervalSeconds',
        label: 'Poll Interval Seconds',
        value: 60,
        disabled: true,
        type: 'number',
        order: 2,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
