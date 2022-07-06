import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/Models/movie.interface';
import { User } from 'src/app/shared/Models/user.interface';
import { CommonService } from 'src/app/shared/Services/Common/common.service';
import { GetAllContentService } from 'src/app/shared/Services/GetAllContent/get-all-content.service';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ContentList?: Movie[]=[];
  errorMessage:string="";
  isErrored:boolean=false;
  user?: User;

  userForm: FormGroup = this.formBuilder.group({
    email: this.formBuilder.control('',[Validators.required, Validators.email]),
    password: this.formBuilder.control('',[Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, 
    private readonly getAllContentService:GetAllContentService,
    private readonly commonService:CommonService,
    private readonly loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.isErrored = false;
    this.refreshContentList();
  }

  refreshContentList(){
    this.getAllContentService.getAllContent().subscribe((response) => {
      this.ContentList = response;
    });
  }

  onSubmit(){
    this.loginService.login(this.userForm.get('email')?.value, this.userForm.get('password')?.value).subscribe((response)=>{
      this.user=response;
      if(this.user !== undefined){
      this.commonService.setUserName(this.user.FullName);
      this.commonService.setUserId(this.user.Id);

        if(this.user.IsAdmin){
          this.commonService.setUserAdmin(true);
        }
        else{
          this.commonService.setUserAdmin(false);
        }
        this.router.navigate(['/registered'])
      }
      else{
        this.errorMessage="Invalid Credentials !";
        this.isErrored=true;
      }
    },(error)=>{
      this.errorMessage="Invalid Credentials";
      this.isErrored=true;
    })
  }

  hasError(controlName:string, errorType:string){
    const control = this.userForm.get(controlName);
    if(control && control.touched){
      return control.getError(errorType);
    }
    return false;
  }

}
