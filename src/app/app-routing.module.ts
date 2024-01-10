import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  // { path: 'users', children: [
  //   { path: '', component: ListUsersComponent}, { path: 'list', component: ListUsersComponent}, { path: 'delete/:id', component: DeleteUserComponent} { path: 'edit/id', component: EditUserComponent}, { path: 'view/id', component: ViewUserComponent},
  //   dochub.com
  //   { path: 'create', component: AuuuserCumponent},
  { path: 'rxjs-learning', component: RxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
