import { Component, OnInit } from '@angular/core';
import { Thought } from 'src/app/models/thought-model';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListToughtsComponent implements OnInit {

  constructor(private service: ThoughtService) { }

  listThoughts: Thought[] = [
  ]

  ngOnInit(): void {
    this.service.listAll().subscribe(list => this.listThoughts = list)
  }



}
