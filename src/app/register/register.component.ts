import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string="hello everyone";
  message1:string="yellow";
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  func(){
    let a:number=0;
    alert("hello world");
    
  }

}
