import { Component, OnInit } from '@angular/core';
import { DataListService } from '../shared/data-list.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemList: any;

  constructor(private dataService: DataListService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response => this.itemList = response)
    );
  }

}
