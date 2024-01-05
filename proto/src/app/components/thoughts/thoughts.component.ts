import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent implements OnInit {

  constructor() { }
  contentFormControl:FormControl = new FormControl("")
  authorFormControl: FormControl = new FormControl("")

  thought = {
    id: 1,
    content: '',
    author: '',
    model: 'modelo1'
  }

  ngOnInit(): void {
  }

  createTought(){
    this.thought.content = this.contentFormControl.value
    this.thought.author = this.authorFormControl.value
  }

  cancel(){
    this.thought = {
      id: 1,
      content: '',
      author: '',
      model: ''
    }
  }

}
