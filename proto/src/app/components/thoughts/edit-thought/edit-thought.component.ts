import { Component, OnInit } from '@angular/core';
import { Thought } from 'src/app/models/thought-model';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  thought: Thought = {
    id : 0,
    content: '',
    author: '',
    model: 'modelo1'
  }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
   this.service.findById(parseInt(id!)).subscribe(t => this.thought = t)
  }

  editThought(){
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['list-thought']);
    })
  }

  cancel(){
    this.router.navigate(['list-thought']);
  }

}
