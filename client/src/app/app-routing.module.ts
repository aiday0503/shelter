import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent}, 
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'detail/:id', component: DetailComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
