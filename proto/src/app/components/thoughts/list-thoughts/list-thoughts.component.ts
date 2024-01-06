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
      content: 'Conteudo 2',
      author: 'author 2',
      model: 'modelo2'
    },
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Gravida in fermentum et sollicitudin ac orci phasellus egestas. Platea dictumst quisque sagittis purus sit amet volutpat consequat
       . Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Pretium viverra suspendisse potenti nullam ac tortor vitae.
        Molestie nunc non blandit massa enim nec dui nunc. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. 
        Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. In nulla posuere sollicitudin aliquam ultrices sagittis orci.
         Sed sed risus pretium quam. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Suspendisse interdum consectetur libero
          id faucibus nisl tincidunt eget.`,
      author: 'author 1',
      model: 'modelo1'
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
