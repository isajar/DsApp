import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelFormPage } from './model-form';

@NgModule({
  declarations: [
    ModelFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ModelFormPage),
  ],
})
export class ModelFormPageModule {}
