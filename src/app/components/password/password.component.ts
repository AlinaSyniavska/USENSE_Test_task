import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {commonHelper} from "../../helpers";
import {strengthLevel} from "../../constants";

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

  checkPasswordStrength(password: string): void {
    const arrClasses = ['grey-section', 'red-section', 'yellow-section', 'green-section'];
    const easy = document.getElementById('strength-easy');
    const medium = document.getElementById('strength-medium');
    const strong = document.getElementById('strength-strong');

    easy && easy.classList.remove(...arrClasses);
    medium && medium.classList.remove(...arrClasses);
    strong && strong.classList.remove(...arrClasses);

    const passwordLevel = commonHelper.calculateStrength(password);
    console.log(passwordLevel);

    if(password.length < 8) {
      easy && easy.classList.add('red-section');
      medium && medium.classList.add('red-section');
      strong && strong.classList.add('red-section');
    } else if (passwordLevel === strengthLevel.EASY) {
      easy && easy.classList.add('red-section');
      medium && medium.classList.add('grey-section');
      strong && strong.classList.add('grey-section');
    } else if (passwordLevel === strengthLevel.MEDIUM) {
      easy && easy.classList.add('yellow-section');
      medium && medium.classList.add('yellow-section');
      strong && strong.classList.add('grey-section');
    } else if (passwordLevel === strengthLevel.STRONG) {
      easy && easy.classList.add('green-section');
      medium && medium.classList.add('green-section');
      strong && strong.classList.add('green-section');
    } else if (passwordLevel === strengthLevel.NOT_VALID) {
      easy && easy.classList.add('red-section');
      medium && medium.classList.add('red-section');
      strong && strong.classList.add('red-section');

// TODO error msg block
    }
  }



}
