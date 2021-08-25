import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onTabClicked(): void {
    alert('Hello');
  }

}
