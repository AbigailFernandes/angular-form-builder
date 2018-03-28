import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
  declarations: [
    FormBuilderComponent,
    DynamicFormQuestionComponent,
    FormViewerComponent,
  ],
  exports: [FormBuilderComponent, FormViewerComponent],
})
export class FormBuilderModule {}
