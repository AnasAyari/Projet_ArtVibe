import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-changer-page',
  templateUrl: './password-changer-page.component.html',
  styleUrls: ['./password-changer-page.component.css']
})
export class PasswordChangerPageComponent implements OnInit{

  passwordForm!: FormGroup;

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private userService:UserService){}
  id:any;
  user!:any;
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this.passwordForm=this.fb.group({
      mail: ['', [Validators.required,Validators.email]],
      oldPassword: ['',Validators.required],
      newPassword: ['',  [Validators.required,Validators.minLength(8),Validators.maxLength(25)]],
    })
  }

  public get mail(){
    return this.passwordForm.get('oldPassword');
  }
  public get oldPassword(){
    return this.passwordForm.get('oldPassword');
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
  changePassword(){
    this.userService.getUsersById(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user);
      this.user.pwd = this.passwordForm.value.newPassword;
        this.userService.updateUser(this.id,this.user).subscribe(data => {
          console.log(data);
        });
      }
    )
  }
}

