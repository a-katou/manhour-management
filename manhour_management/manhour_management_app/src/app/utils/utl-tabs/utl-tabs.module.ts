import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { UtlTabsComponent } from './utl-tabs.component';
import { UtlTabComponent } from './utl-tab.component';


@NgModule({
  declarations: [
    UtlTabsComponent,
    UtlTabComponent
  ],
  exports: [
    UtlTabsComponent,
    UtlTabComponent
],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class UtlTabsModule { }
