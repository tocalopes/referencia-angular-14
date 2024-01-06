import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Though } from 'src/app/models/thought-model';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  constructor() { }
  contentFormControl:FormControl = new FormControl("")
  authorFormControl: FormControl = new FormControl("")

  thought: Though = {
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
