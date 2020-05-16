import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() {
    console.log("called error");
   }
  ngOnInit(): void {
    console.log("Throwing error");
    throw new TypeError("Error message");
  }
}
