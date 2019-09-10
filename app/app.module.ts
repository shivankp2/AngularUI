import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import jss from 'jss';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { Module2Component } from './pages/layout/module2/module2.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { EditComponent } from './pages/edit/edit.component';
import { NavigationComponent } from './pages/layout/navigation/navigation.component';
import { ShowComponent } from './pages/show/show.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    DeleteComponent,
    FooterComponent,
    Module2Component,
    LayoutComponent,
    DialogComponent,
    EditComponent,
    NavigationComponent,
    ShowComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	NgbModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatButtonModule
          ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
