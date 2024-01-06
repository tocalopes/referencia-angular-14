import { DeleteThoughtComponent } from './delete-thought/delete-thought.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Thought } from 'src/app/models/thought-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //pode ser injetado em toda a aplicação
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Thought[]>{
    return this.http.get<Thought[]>(this.API)
  }

  create(obj:Thought): Observable<Thought>{
    return this.http.post<Thought>(this.API,obj)
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url)
  }

  findById(id: number): Observable<Thought> {
    const url =`${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }



}
