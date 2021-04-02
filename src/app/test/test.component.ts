import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  style1:string="background-color:grey; color:white;";
  sty1:string="changed";
  text:string="text";
  img1:string="assets/img/ceo.jpg";
  img2:string="assets/img/lti.png";
  status1:boolean=true;
  sty2:string="not changed";
  style2:string="background-color:pink;"
  constructor() { }
  
  changeimg(){
    this.status1=!this.status1;
  }
  ngOnInit(): void {
  }

}
