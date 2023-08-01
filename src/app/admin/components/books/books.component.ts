import { Component, OnInit } from '@angular/core';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base-component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent extends BaseComponent {
  constructor(ngxSpinner: NgxSpinnerService){
    super(ngxSpinner);
  }
  

}
