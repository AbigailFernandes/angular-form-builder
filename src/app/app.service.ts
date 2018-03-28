import { Injectable } from '@angular/core';
import { Input, MultipleChoice, Checkbox } from './modules/form-builder/form-controls/form-controls';
import { FormControlBase } from './modules/form-builder/form-controls/form-control-base';

@Injectable()
export class AppService {

  getQuestions() {
    const questions = [
      new MultipleChoice(
        {
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
        },
      ),
      new MultipleChoice(
        {
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
        },
      ),
      new Checkbox(
        {
          controlType: 'checkbox',
          key: 'changeEventEnabled',
          label: 'Change Event Enabled',
          value: true,
          checked: true,
          disabled: true,
        },
      ),
      new Input(
        {
          controlType: 'input',
          key: 'pressName',
          label: 'Printer Name',
          hintLabel: 'Demo hint',
          value: '',
          validators: {
            required: false,
          },
          required: true,
        },
      ),
      new Input(
        {
          controlType: 'input',
          key: 'subscriptionIntervalSeconds',
          value: 60,
          label: 'Subscription Interval Seconds',
          hintLabel: 'Demo hint',
          type: 'number',
          validators: {
            min: 5,
            max: 100,
            required: true,
          },
        },
      ),
      new Input(
        {
          controlType: 'input',
          key: 'pollIntervalSeconds',
          hintLabel: 'Demo hint',
          label: 'Poll Interval Seconds',
          value: 60,
          disabled: true,
          type: 'number',
        }
      ),
    ];

    return questions;
  }
}
