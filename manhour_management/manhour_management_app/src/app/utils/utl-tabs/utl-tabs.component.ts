import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UtlTabComponent } from './utl-tab.component';

@Component({
  selector: 'utl-tabs',
  templateUrl: './utl-tabs.component.html',
  styleUrls: ['./utl-tabs.component.less']
})
export class UtlTabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(UtlTabComponent)
  public tabs: QueryList<UtlTabComponent>;

  public active = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.tabs.forEach((tab, index) => {
      tab.index = index;
      tab.parent = this;
    });
  }

  public onTabClicked(tab: UtlTabComponent): void {
    if (this.active !== tab.index) {
      this.active = tab.index;
      tab.onclick.emit();
    }
  }

}
