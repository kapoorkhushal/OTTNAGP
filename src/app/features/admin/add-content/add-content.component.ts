import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddContentService } from 'src/app/shared/Services/AddContent/add-content.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  posterFile:string="";
  contentFile:string="";

  movieForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('',[Validators.required]),
    description: this.formBuilder.control('',[Validators.required]),
    rating: this.formBuilder.control('',[Validators.required]),
    language: this.formBuilder.control('',[Validators.required]),
    genre: this.formBuilder.control('',[Validators.required])
  });

  constructor(private formBuilder: FormBuilder,
    private readonly addContentService: AddContentService) { }

  ngOnInit(): void {
  }

  errorMessage:string="";
  isErrored:boolean=false;
  onSubmit(){
    this.addContentService.addContent(this.movieForm.value).subscribe((response)=>{
      this.errorMessage="Movie Added Successfully";
      this.isErrored=true;
    },(error)=>{
      this.errorMessage="Error in Adding Movie";
      this.isErrored=true;
    })
  }

  hasError(controlName:string, errorType:string){
    const control = this.movieForm.get(controlName);
    if(control && control.touched){
      return control.getError(errorType);
    }
    return false
  }
}
