import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManhourDetailComponent } from './components/manhour-detail/manhour-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'manhour-detail', component: ManhourDetailComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
