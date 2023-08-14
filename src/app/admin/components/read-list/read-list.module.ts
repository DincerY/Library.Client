import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadListComponent } from './read-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReadListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ReadListComponent}
    ])
  ]
})
export class ReadListModule { }
