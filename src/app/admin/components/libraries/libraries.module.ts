import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrariesComponent } from './libraries.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LibrariesComponent,
    ListComponent,
    CreateComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:LibrariesComponent}
    ]),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LibrariesModule { }

