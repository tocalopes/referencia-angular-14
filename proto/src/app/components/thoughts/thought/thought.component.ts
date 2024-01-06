import { Component, OnInit, Input } from '@angular/core';
import { Thought } from 'src/app/models/thought-model';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input()
  thought!: Thought;

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth() :string {
    return this.thought.content.length > 256 ? 'pensamento-g' : 'pensamento-p'
  }

}
