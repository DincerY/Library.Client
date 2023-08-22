import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadListComponent } from './read-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReadListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ReadListComponent}
    ]),
    FormsModule
  ]
})
export class ReadListModule { }
