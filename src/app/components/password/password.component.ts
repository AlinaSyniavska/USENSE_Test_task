import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  form: FormGroup;
  obs: Subscription;

  constructor() {
    this.createForm();
  }

  ngOnInit() {
    this.obs = this.form.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(data => this.checkPasswordStrength(data));
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  createForm(): void {
    this.form = new FormGroup({
      password: new FormControl(null),
    });
  }

  checkPasswordStrength(pass: string): void {
    console.log(pass)
  }

  /*  onInputChange(event: Event): void {
      const enteredPassword = (event.target as HTMLInputElement).value;
      console.log(enteredPassword);
    }*/

}
