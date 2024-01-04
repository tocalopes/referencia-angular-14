import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {

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
