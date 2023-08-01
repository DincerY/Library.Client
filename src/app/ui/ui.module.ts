import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeModule,
    BooksModule,
    RegisterModule,
    LoginModule
  
  ],

})
export class UiModule { }
