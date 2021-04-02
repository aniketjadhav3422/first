import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  template: `<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">roses</div>
  <div *ngSwitchCase="'yellow'">daffodils</div>
  <div *ngSwitchCase="'white'">white</div>
  <div *ngSwitchDefault>no flowers</div>
  </div>
  `
  
  ,
  styleUrls: ['./new1.component.css']
})
export class New1Component implements OnInit {
  
  public status:boolean=true;
  constructor() { 
    
    this.status=true;
  }
  public color="1";
  email:string="";
  name:string="";
  ngOnInit(): void {
  }

}
