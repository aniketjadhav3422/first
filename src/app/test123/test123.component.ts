import { Component, OnInit } from '@angular/core';
import {Department} from '../Model/department';

@Component({
  selector: 'app-test123',
  templateUrl: './test123.component.html',
  //template:`
 // <ol>
 // <ng-container *ngFor="let c  of colors;index as i">
 // <li>{{i }}{{c}}</li>
  //</ng-container>
 // </ol>
 // <table border="1" width="100%">
 // <tr><th>DEPARTMENT ID</th><th>NAME</th></tr>
 // <tr *ngFor="let d of department"><td>{{d.id}}</td><td>{{d.name}}</td></tr>
 // </table>
 // `,
  styleUrls: ['./test123.component.css']
})
export class Test123Component implements OnInit {
 public department:Department[]=[
   {id:1,name:'IT'},
   {id:2,name:'HR'},
   {id:3,name:'sales'},
   {id:4,name:'finance'},
   {id:5,name:'engineering'}
 ];
  constructor() { }
  public colors=["red","green","blue"];
  ngOnInit(): void {
  }

}
