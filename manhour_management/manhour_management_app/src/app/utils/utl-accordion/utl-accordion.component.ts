import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { UtlAccordionPanelComponent } from './utl-accordion-panel.component';
import { UtlAccordionOptions } from './utl-accordion-options.model';

@Component({
  selector: 'utl-accordion',
  templateUrl: './utl-accordion.component.html',
})
export class UtlAccordionComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input()
  public openClass: string;

  @Input()
  public closeClass: string;

  @Input()
  public captionClass: string;

  @Input()
  public indentSize: number;

  @ContentChildren(UtlAccordionPanelComponent)
  public panels: QueryList<UtlAccordionPanelComponent>;

  public options: UtlAccordionOptions;

  constructor(
  ) { }

  ngOnInit(): void {
    this.options = new UtlAccordionOptions();
    this.options.openClass = this.openClass;
    this.options.closeClass = this.closeClass;
    this.options.captionClass = this.captionClass;
  }

  ngAfterContentInit(): void {
    this.panels.forEach((item) => {
      item.apply(this.options);
    });
  }

  ngAfterViewInit(): void {
  }

}
