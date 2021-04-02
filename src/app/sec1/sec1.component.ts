import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec1',
  //templateUrl: './sec1.component.html',
  template:`
  <p>pipe</p>
  {{name | uppercase}}<br>
  {{name | lowercase}}<br>
  {{tdate| date}}<br>
  {{tdate| date:'d/M/y'}}<br>
  {{tdate| date:'shortTime'}}<br>
  {{0.75 |percent}}<br>
  {{6789 | currency:"INR":true}}<br>
  {{colors| slice: 3:6}}<br>
  {{234.5446 |number:'3.2'}}

  `,
  styleUrls: ['./sec1.component.css']
})
export class Sec1Component implements OnInit {
  public name:string="Asdasdas";
  public tdate=new Date();
  public colors=['red','green','blue','grey','red','green'];
  constructor() { }

  ngOnInit(): void {
  }

}
