# An Angular Form Builder

Angular Form Builder is a form developer library that gives users the power to create forms using a JSON schema as input. This is based on the official Angular [**dynamic forms guide**](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html).

It **fully automates form UI creation** by introducing a set of maintainable **form control models** and **dynamic form control components** 

**Out of the box support** is provided for **[Material](https://material.angular.io/)**.

[**Explore it**](http://addsomething.html) live in action!

## Supported Form Controls

Here is the list of form controls which are currently supported by the module. In order to make the form controls look pretty, we have used Angular Material:

 1. Checkboxes (Group)
 2. Radio Button (Group)
 3. Plain input (Text, Number)
 4. Select

## Installation

**Install the core package**:
```
npm i angular-form-builder --save
```
  

## Basic Usage


**1. Import** `FormBuilderModule`:
```typescript
import { FormBuilderModule } from "angular-form-builder";
// ...

@NgModule({
    
    imports: [
      FormBuilderModule
      // ...
    ]
})

export class AppModule {}
```
**2. Define your form model**:
You can provide a form model in plain JSON.
```typescript
const questions = [
    {
        type: 'INPUT',
        id: 'sampleInput',
        label: 'Sample Input',
        maxLength: 42,
        placeholder: 'Sample input'
    },
    {
        type: 'RADIO_GROUP',
        id: 'sampleRadioGroup',
        label: 'Sample Radio Group',
        options: [
            {
                label: 'Option 1',
                value: 'option-1',
            },
            {
                label:'Option 2',
                value: 'option-2'
            },
            {
                label: 'Option 3',
                value: 'option-3'
            }
        ],
        value: 'option-3'    
    }
    {
        type: 'CHECKBOX',
        id: 'sampleCheckbox',
        label: 'I do agree'
    }
]

const displayFields = (form) => {
  console.log(form.getRawValue()); // The aggregate value of the FormGroup, including any disabled controls.
  console.log(form.value); // The aggregate value of the FormGroup, excluding any disabled controls.
}
```

**3. Add a** `AngularFormComponent` **to your template and bind its** `[questions]` **property** and `(formValue)` **event**:
```html
<angular-form-builder 
  [questions]="questions" 
  title="Testing Library" 
  (formSubmit)="displayFields($event)" 
  (formReset)="displayFields($event)"
>
</angular-form-builder>
```



### Form control parameters

Name | Type | Required? | Description
--- | --- | --- | ---
controlType | string | Optional | Form control to be used
key | string | Optional | Key in the generated form Schema
label | string | Optional | Placeholder for form control
hintLabel | string | Optional | Placeholder for hint for input controls
value | any | Optional | Defines form submit button text
disabled | boolean | Optional | Decides if form control is Read Only
order | number | Optional | Order in which form controls should be rendered
validators | { key: string; value: string } | Optional | Check Table below for possible keys and their values.
options | { key: string; value: string }[] | Optional | Values for select, radio group controls.

### Validators

Name | Type | Description
--- | --- | --- 
min | number | Validator that requires controls to have a value greater than a number.
max | number | Validator that requires controls to have a value less than a number.
pattern | string | Validator that requires a control to match a regex to its value.
email | boolean | Validator that performs email validation.
required | boolean | Validator that requires controls to have a non-empty value.
minLength | number | Validator that requires controls to have a value of a minimum length.
maxLength | number | Validator that requires controls to have a value of a maximum length.


## Running the Sample

**1. Clone the Git repository**:
```bash
git clone https://github.com/AbigailFernandes/angular-form-builder.git
cd angular-form-builder
```

**2. Install the dependencies**:
```bash
npm install
```

**3. Run the application**:
```bash
npm start
```

Then navigate to http://localhost:4200/ in your browser and you should be able to see the form builder in action. You can play around with the form builder by modifying the form-builder-schema in app.service.ts.

