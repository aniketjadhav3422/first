import { Component, Input, OnInit,EventEmitter ,Output } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-comp1',
  //templateUrl: './comp1.component.html',
  template:`
  <button (click)="fireEvent()">send</button>`,
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Input("abc") public name;
  @Output() public child=new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
  fireEvent(){
    this.child.emit('hello world!!!');
  }
}
