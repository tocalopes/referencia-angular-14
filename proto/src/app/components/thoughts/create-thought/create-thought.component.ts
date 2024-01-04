import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  constructor() { }

  thought = {
    id: '1',
    content: 'Aprendendo angular',
    author: 'Dev',
    model: ''
  }

  ngOnInit(): void {
  }

}
