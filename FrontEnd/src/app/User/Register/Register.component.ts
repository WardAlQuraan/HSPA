import { Component, OnInit } from '@angular/core';
import { AbstractControl,  FormControl, FormGroup,  ValidationErrors,  ValidatorFn,  Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { IUser } from '../user.interface';
import { AlertifyService } from 'src/app/Services/alertify.service';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup | undefined;
  userSubmitted:boolean = false;
  User :IUser | undefined ;
  constructor(private userService:UserService, private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.registrationForm =new FormGroup({
      name : new FormControl (null,[Validators.required, Validators.minLength(4)]),
      email : new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      mobile :new FormControl (null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    },this.checkPasswords)

  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return pass === confirmPass ? null : { notSame: true }
  }
  get UserName(){
    return this.registrationForm?.controls["name"] as FormControl;
  }
  get Email(){
    return this.registrationForm?.controls["email"] as FormControl;
  }
  get Password(){
    return this.registrationForm?.controls["password"] as FormControl;
  }
  get ConfirmPassword(){
    return this.registrationForm?.controls["confirmPassword"] as FormControl;
  }
  get Mobile(){
    return this.registrationForm?.controls["mobile"] as FormControl;
  }

  userData():IUser{
    return this.User = {
      name: this.UserName.value,
      email : this.Email.value,
      password : this.Password.value,
      confirmPassword : this.ConfirmPassword.value,
      mobile : this.Mobile.value
    };
  }
  OnSubmit(){
    this.userSubmitted = true;
    if(this.registrationForm?.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.Success("Congrats, you are successfylly registeres");
    }else{
      this.alertifyService.Error("Kindly provide the required fields");
    }

  }

}
