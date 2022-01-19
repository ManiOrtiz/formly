import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoginModel } from '../models/loginComponentModel';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  formLogin = new FormGroup({});
  modelLogin = this.loginModel.model;
  fieldsLogin: FormlyFieldConfig[] = this.loginModel.form;

  constructor(private loginModel:LoginModel ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.modelLogin);
  }


}
