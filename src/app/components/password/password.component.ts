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
    this.form.valueChanges
      .subscribe(({password}) => {
        this.checkPasswordStrength(password);
      });

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
    const easy = document.getElementById('strength-easy') as HTMLDivElement;
    const medium = document.getElementById('strength-medium') as HTMLDivElement;
    const strong = document.getElementById('strength-strong') as HTMLDivElement;
    const error = document.getElementById('error') as HTMLDivElement;

    easy.classList.remove(...arrClasses);
    medium.classList.remove(...arrClasses);
    strong.classList.remove(...arrClasses);
    error.innerHTML = '';

    const passwordLevel = commonHelper.calculateStrength(password);

    if(password.length < 8) {
      easy && easy.classList.add('red-section');
      medium && medium.classList.add('red-section');
      strong && strong.classList.add('red-section');
      error.innerHTML = 'Password has less than 8 character';
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
      error.innerHTML = 'Password is not valid';
    }
  }

}
