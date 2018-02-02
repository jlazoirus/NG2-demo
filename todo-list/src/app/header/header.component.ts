import { Component, OnInit } from '@angular/core';
import { DataListService } from '../shared/data-list.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataListService: DataListService) {}

  ngOnInit() {
  }
  public addItem() {
    const newTaskTitle = prompt("Add a new task","task")
    this.dataListService.add(newTaskTitle);

  }
}
