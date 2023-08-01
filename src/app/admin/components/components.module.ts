import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksModule } from './books/books.module';
import { LibrariesComponent } from './libraries/libraries.component';
import { LibrariesModule } from './libraries/libraries.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    BooksModule,
    LibrariesModule
  ]
})
export class ComponentsModule { }
