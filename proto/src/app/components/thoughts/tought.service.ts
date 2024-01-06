import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Though } from 'src/app/models/thought-model';

@Injectable({
  providedIn: 'root' //pode ser injetado em toda a aplicação
})
export class ToughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Though[]>(this.API)
  }

}
