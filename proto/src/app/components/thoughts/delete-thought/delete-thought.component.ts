import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from 'src/app/models/thought-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  thought: Thought = {
    id:0,
    author: ' ',
    content: ' ',
    model: 'modelo1'
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((t) => {
      this.thought = t
    })
  
  }

  cancel(){
    this.router.navigate(['/list-thought']);
  }

  deleteThought(){
    console.log(this.thought.id);
    this.thought.id ? this.service.delete(this.thought.id).subscribe(()=>this.router.navigate(['/list-thought'])) : null;
  }

}
