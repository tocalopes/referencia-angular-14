import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListToughtsComponent implements OnInit {

  constructor() { }

  listThoughts = [
    {
      content: 'Conteudo 1',
      author: 'author 1',
      model: 'modelo1'
    },
    {
      content: 'Conteudo 2',
      author: 'author 2',
      model: 'modelo2'
    },
    {
      content: 'Conteudo 3',
      author: 'author 3',
      model: 'modelo3'
    }
  ]

  ngOnInit(): void {
  }

}
