import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { LoginModel } from '../models/loginComponentModel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,

    FormlyModule.forRoot({
      validationMessages:[
        { name: 'required', message: 'El campo es requerido' }
      ],
      validators: [
        { name: 'requiredTrue', validation: Validators.requiredTrue },
      ]
    }),
    FormlyMaterialModule,
    ReactiveFormsModule



  ],
  declarations: [FolderPage],
  providers:[LoginModel]
})
export class FolderPageModule {}
