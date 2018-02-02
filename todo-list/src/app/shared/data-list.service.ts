import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataListService {

  constructor( private http: Http) {}
  items: any[];

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').map(res => this.items = res.json().slice(0, 10));
  }
  add(newTaskTitle) {
    const newId = this.items[this.items.length - 1].id + 1;
    this.items.push({
      userId: 1,
      id: newId,
      title: newTaskTitle,
      completed: false
    });
    return;
  }
  remove(id) {
    const index = this.items.indexOf(this.items.find( task => task.id === id));
    this.items.splice(index, 1);
    return;
  }

}
