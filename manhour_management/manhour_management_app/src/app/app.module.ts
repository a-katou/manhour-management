import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UtlAccordionModule } from './utils/utl-accordion/utl-accordion.module';
import { UtlDatepickerModule } from './utils/utl-datepicker/utl-datepicker.module';
import { UtlTabsModule } from './utils/utl-tabs/utl-tabs.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ManhourDetailComponent } from './components/manhour-detail/manhour-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserListComponent,
    ManhourDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UtlAccordionModule,
    UtlDatepickerModule,
    UtlTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
