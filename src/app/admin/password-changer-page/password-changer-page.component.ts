import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-changer-page',
  templateUrl: './password-changer-page.component.html',
  styleUrls: ['./password-changer-page.component.css']
})
export class PasswordChangerPageComponent implements OnInit{

  passwordForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.passwordForm=this.fb.group({
      mail: ['', [Validators.required,Validators.email]],
      oldPassword: ['',Validators.required],
      newPassword: ['',  [Validators.required,Validators.minLength(8),Validators.maxLength(25)]],
      confirmPassword: ['', Validators.required],
    })
  }

  public get newPassword(){
    return this.passwordForm.get('newPassword');
  }

  newPasswordRequired(){
    return this.newPassword?.errors?.["required"] && this.newPassword?.dirty
  }

  newPasswordMinLength(){
    return this.newPassword?.errors?.["minlength"] && this.newPassword?.dirty
  }

  newPasswordMaxLength(){
    return this.newPassword?.errors?.["maxlength"] && this.newPassword?.dirty
  }

}
