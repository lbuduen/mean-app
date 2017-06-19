import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  private baseURL = '/api/todo';

  constructor(private http: Http) { }

  create(todo): Observable<any> {
    return this.http
      .post(this.baseURL, todo)
      .map((res: Response) => res.json());
  }

  list(): Observable<any> {
    return this.http
      .get(this.baseURL)
      .map((res: Response) => res.json());
  }

  read(todoId: string): Observable<any> {
    return this.http
      .get(`${this.baseURL}/${todoId}`)
      .map((res: Response) => res.json());
  }

  update(todo: any): Observable<any> {
    return this.http
      .put(`${this.baseURL}/${todo._id}`, todo)
      .map((res: Response) => res.json())
  }

  delete(todoId: string): Observable<any> {
    return this.http
      .delete(`${this.baseURL}/${todoId}`)
      .map((res: Response) => res.json());
  }

}
