import { Component, OnInit } from '@angular/core';
import { Though } from 'src/app/models/thought-model';
import { ToughtService } from '../tought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListToughtsComponent implements OnInit {

  constructor(private service: ToughtService) { }

  listThoughts: Though[] = [
  ]

  ngOnInit(): void {
    this.service.listAll().subscribe(list => this.listThoughts = list)
  }



}
