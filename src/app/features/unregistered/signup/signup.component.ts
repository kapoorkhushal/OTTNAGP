import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { AddUserService } from 'src/app/shared/Services/AddUser/add-user.service';
import { GetAllContentService } from 'src/app/shared/Services/GetAllContent/get-all-content.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  ContentList?: Movie[]=[];
  errorMessage:string="";
  isErrored:boolean=false;


  constructor(private formBuilder: FormBuilder, 
    private readonly getAllContentService:GetAllContentService,
    private readonly addUserService:AddUserService,
    private router: Router) { }

    userForm: FormGroup = this.formBuilder.group({
      fullName: this.formBuilder.control('',[Validators.required]),
      email: this.formBuilder.control('',[Validators.required, Validators.email]),
      password: this.formBuilder.control('',[Validators.required]),
      rePassword: this.formBuilder.control('',[Validators.required, this.passwordValidation()]),
      agreeTerms: this.formBuilder.control('',[Validators.requiredTrue])
    });

  ngOnInit(): void {
    this.refreshContentList();
  }

  refreshContentList(){
    this.getAllContentService.getAllContent().subscribe((response) => {
      this.ContentList = response;
    });
  }

  passwordValidation(): ValidatorFn{
    return (control:AbstractControl): { [key: string]: boolean }|null => {
      let isPasswordValidated = false;
      if(this.userForm !== undefined){
        let password = this.userForm.get('password')?.value;
        let rePassword = control.value;

        if(password && rePassword){
          password = password.trim();
          rePassword = rePassword.trim();

          isPasswordValidated = password !== rePassword;
        }
      }
      return isPasswordValidated ? {'isPasswordValidated': false} : null;
    };
  }

  passwordValidate(controlName:string, errorType:string){
    const passwordControl = this.userForm.get('password');
    const control = this.userForm.get(controlName);
    if(control && control.touched){
      if(control.value!=passwordControl?.value){
        return true;
      }
    }
    return false;
  }

  onSubmit(){
    this.addUserService.addUser(this.userForm.value).subscribe((response: any)=>{
      this.router.navigate(['/login']);
    },(error: any)=>{
      this.errorMessage="User Already Exists";
      this.isErrored=true;
    });
  }

  hasError(controlName:string, errorType:string){
    const control = this.userForm.get(controlName);
    if(control && control.touched){
      return control.getError(errorType);
    }
    return false;
  }

}
