import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UtlDatepickerComponent } from './utl-datepicker.component';

@NgModule({
  declarations: [
    UtlDatepickerComponent,
  ],
  exports: [
    UtlDatepickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class UtlDatepickerModule { }
