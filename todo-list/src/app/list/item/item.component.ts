import { Component, Output, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataListService } from '../../shared/data-list.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: any;
  constructor(private dataListService: DataListService) { }

  ngOnInit() {
  }
  removeItem() {
    this.dataListService.remove(this.task.id);
  }

}
