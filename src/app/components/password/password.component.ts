import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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
      password: new FormControl(null),
    });
  }

  checkPasswordStrength(pass: string): void {
    console.log(pass);

    const easy = document.getElementById('strength-easy');
    const medium = document.getElementById('strength-medium');
    const strong = document.getElementById('strength-strong');

    easy && easy.classList.remove('grey-section', 'red-section', 'yellow-section', 'green-section');
    medium && medium.classList.remove('grey-section', 'red-section', 'yellow-section', 'green-section');
    strong && strong.classList.remove('grey-section', 'red-section', 'yellow-section', 'green-section');

    // Only letters/digits/symbols - the password is easy;
    // Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
    // Has letters, symbols and numbers - the password is strong;



    const passwordStrong = commonHelper.hasLetters(pass) && commonHelper.hasNumbers(pass) && commonHelper.hasSymbols(pass);
    // console.log(passwordStrong)

    console.log(commonHelper.hasLetters(pass))
    console.log(commonHelper.hasNumbers(pass))
    console.log(commonHelper.hasSymbols(pass))

    if(passwordStrong) {
      easy && easy.classList.add('green-section');
      medium && medium.classList.add('green-section');
      strong && strong.classList.add('green-section');
    }

  }

    onInputChange(event: Event): void {
      const enteredPassword = (event.target as HTMLInputElement).value;

      this.checkPasswordStrength(enteredPassword);
    }

}
