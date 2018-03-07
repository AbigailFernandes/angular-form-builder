import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
  declarations: [FormBuilderComponent, DynamicFormQuestionComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule { }
