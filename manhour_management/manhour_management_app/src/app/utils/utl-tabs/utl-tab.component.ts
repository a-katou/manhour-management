import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { UtlTabsComponent } from './utl-tabs.component';

@Component({
  selector: 'utl-tab',
  templateUrl: './utl-tab.component.html',
  styleUrls: ['./utl-tab.component.less'],
  animations: [
    trigger('slide', [
      state('show', style({ width: '*'})),
      state('hide', style({ width: '0', overflow: 'hidden' })),
      transition('show <=> hide', [ animate('.2s') ]),
    ])
  ]
})
export class UtlTabComponent implements OnInit {

  @Input()
  public caption: string;

  @Output()
  public onclick = new EventEmitter<any>();

  public index: number;
  public parent: UtlTabsComponent;

  public get isActive(): boolean {
    return this.parent.active === this.index;
  }

  @HostBinding('@slide') get state(): string {
    return this.isActive ? 'show' : 'hide';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
