import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {commonHelper} from "../../helpers";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this._createForm();
  }

  ngOnInit() {
  }

  _createForm(): void {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.minLength(8)]),
    });
  }

  onInputChange(event: Event): void {
    const enteredPassword = (event.target as HTMLInputElement).value;

    this.checkPasswordStrength(enteredPassword);
  }

  checkPasswordStrength(pass: string): void {
    const arrClasses = ['grey-section', 'red-section', 'yellow-section', 'green-section'];
    const easy = document.getElementById('strength-easy');
    const medium = document.getElementById('strength-medium');
    const strong = document.getElementById('strength-strong');

    easy && easy.classList.remove(...arrClasses);
    medium && medium.classList.remove(...arrClasses);
    strong && strong.classList.remove(...arrClasses);

    const passwordStrong = commonHelper.calculateStrength(pass);
    console.log(passwordStrong);

    /*    if(passwordStrong) {
          easy && easy.classList.add('green-section');
          medium && medium.classList.add('green-section');
          strong && strong.classList.add('green-section');
        }*/

  }



}
