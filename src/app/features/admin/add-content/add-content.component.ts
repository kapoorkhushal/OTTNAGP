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


  genres: {key: string, value: number}[] = [
    {key:"action", value: 1},
    {key:"comedy", value: 2},
    {key:"scifi", value: 3},
    {key:"romance", value: 4},
    {key:"horror", value: 5}
  ];

  movieForm: FormGroup = this.formBuilder.group({
    Name: this.formBuilder.control('',[Validators.required]),
    Description: this.formBuilder.control('',[Validators.required]),
    Rating: this.formBuilder.control('',[Validators.required]),
    Language: this.formBuilder.control('',[Validators.required]),
    Genre: this.formBuilder.control<number>(0,[Validators.required])
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
      this.movieForm.reset();
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

  getOptionValue(optionValue: any){
    return this.genres[optionValue];
  }
}
