import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  title: string = "";
  comment: string = "";

  constructor() { 
    this.title ="MY FIRST APP";
    this.comment = "I am learning";
  }

  ngOnInit(): void {
  }

}
