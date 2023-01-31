import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";
import {commonHelper} from "../../helpers";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  form: FormGroup;
  obs: Subscription;

  constructor() {
    this._createForm();
  }

  ngOnInit() {
    this.obs = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => this.checkPasswordStrength(data));
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  _createForm(): void {
    this.form = new FormGroup({
      password: new FormControl(null),
    });
  }

  checkPasswordStrength(pass: string): void {
    console.log(pass);
    // Only letters/digits/symbols - the password is easy;
    // Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
    // Has letters, symbols and numbers - the password is strong;


    const passwordStrong = commonHelper.hasLetters(pass) && commonHelper.hasNumbers(pass) && commonHelper.hasSymbols(pass);
  }

  /*  onInputChange(event: Event): void {
      const enteredPassword = (event.target as HTMLInputElement).value;
      console.log(enteredPassword);
    }*/

}
