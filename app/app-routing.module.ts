import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import {DeleteComponent} from './pages/delete/delete.component';
import {FooterComponent} from './pages/layout/footer/footer.component';
import {Module2Component} from './pages/layout/module2/module2.component';
import{EditComponent} from './pages/edit/edit.component';
import{ShowComponent} from './pages/show/show.component';
const routes: Routes = [
{
	path:'login',component:LoginComponent
},
{
	path:'homepage',component:HomepageComponent
},
{
path : 'delete',component:DeleteComponent
},
{
	path:'register',component:RegisterComponent
},
{
	path :'edit',component : EditComponent
},
{
	path:'show',component:ShowComponent
},

{
	path:'**',component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
