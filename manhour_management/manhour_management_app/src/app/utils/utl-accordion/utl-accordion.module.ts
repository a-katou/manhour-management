import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { UtlAccordionComponent } from './utl-accordion.component';
import { UtlAccordionPanelComponent } from './utl-accordion-panel.component';

@NgModule({
  declarations: [
    UtlAccordionComponent,
    UtlAccordionPanelComponent,
  ],
  exports: [
    UtlAccordionComponent,
    UtlAccordionPanelComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class UtlAccordionModule { }
