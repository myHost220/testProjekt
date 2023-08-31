import { Component, HostListener, Output,OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  header_variable =  false;
  @HostListener("document: scroll")
  scrollfunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      this.header_variable = true;
    }else{
      this.header_variable = false;
    }
  }
  newHouse:any = false;
  schotchik:string = "01 / 02"
  @HostListener("document: change")
  changeHouse(){
  this.newHouse = true;
  this.schotchik = "02 / 02"
  }
  houseBack(){
    this.newHouse = false;
    this.schotchik = "01 / 02"
    }
    ngOnInit(){
      AOS.init();
    }
}
