import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:`
   
 // <app-comp1 [abc]="text"  (child)="message=$event"></app-comp1>
 // {{message}}
 // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  public message="App message";
  public text="sam";
}
