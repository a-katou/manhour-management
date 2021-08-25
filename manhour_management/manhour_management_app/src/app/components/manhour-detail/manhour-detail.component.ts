import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manhour-detail',
  templateUrl: './manhour-detail.component.html',
  styleUrls: ['./manhour-detail.component.less']
})
export class ManhourDetailComponent implements OnInit {

  public model: string;

  constructor() { }

  ngOnInit(): void {
    this.model = '';
  }

}
