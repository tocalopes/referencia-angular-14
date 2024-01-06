import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Thought } from 'src/app/models/thought-model';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  constructor(private service: ThoughtService, private router: Router) { }
  contentFormControl:FormControl = new FormControl("")
  authorFormControl: FormControl = new FormControl("")

  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo1'
  }

  ngOnInit(): void {
  }

  createTought(){
    this.service.create(this.thought).subscribe(t => this.router.navigate(['/list-thought']))
  }

  cancel(){
    this.router.navigate(['/list-thought']
  }
}
