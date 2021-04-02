import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test12',
  templateUrl: './test12.component.html',
  
  styleUrls: ['./test12.component.css']
})
export class Test12Component implements OnInit {
  asd:string[]=["asd","asdasd","asas","asd","asdasd","asas","asd","asdasd","asas"];
  aa:string='style="color:red;"';
  constructor() { }

  ngOnInit(): void {
  }

}
