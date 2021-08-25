import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { UtlAccordionOptions } from './utl-accordion-options.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'utl-accordion-panel',
  templateUrl: './utl-accordion-panel.component.html',
  animations: [
    trigger('accordion', [
      state('show', style({ height: '*', opacity: 1 })),
      state('hide', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      transition('show <=> hide', [ animate('.075s') ]),
    ])
  ]
})
export class UtlAccordionPanelComponent implements OnInit, AfterViewInit {

  @Input()
  public caption: string;

  @Input()
  public captionInnerClass: string;

  @ContentChildren(UtlAccordionPanelComponent)
  public panels: QueryList<UtlAccordionPanelComponent>;

  public state: string;
  public options: UtlAccordionOptions;

  public get iconClass(): string {
    return this.state === 'show' ? this.options.openClass : this.options.closeClass;
  }

  constructor(
  ) { }

  ngOnInit(): void {
    this.state = 'hide';
    this.options = new UtlAccordionOptions();
  }

  ngAfterViewInit(): void {
  }

  public toggle(): void {
    this.state = this.state === 'hide' ? 'show' : 'hide';
  }

  public apply(options: UtlAccordionOptions): void {
    this.options.openClass = options.openClass;
    this.options.closeClass = options.closeClass;
    this.options.captionClass = options.captionClass;
    this.panels.forEach((item) => {
      item.apply(this.options);
    });
  }
}
