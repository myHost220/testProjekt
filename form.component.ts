import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators , FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild(FormGroupDirective)
  dere!: FormGroupDirective;

  constructor(private formBilder: FormBuilder){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('',Validators.required),
    message: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required)
  });
  title: any;
  get email(){return this.loginForm.get('email')}
  get name(){return this.loginForm.get('name')}
  get message(){return this.loginForm.get('message')}
  get number(){return this.loginForm.get('number')}

  donee:any = true;
  doneGoodd: any = true; 
  nameForm:any = true;
  nameFormGood:any = true;
  messageForm:any = true;
  messageFormGood:any = true;
  numberForm:any = true;
  numberGood:any = true;

  search(){
   this.donee = this.email?.invalid;
   this.doneGoodd = !this.email?.invalid;
   this.nameForm = this.name?.invalid;
   this.nameFormGood = !this.name?.invalid;
   this.messageForm = this.message?.invalid;
   this.messageFormGood = !this.message?.invalid;
   this.numberForm = this.number?.invalid;
   this.numberGood = !this.number?.invalid;
   this.dere.resetForm();
  }
}
