import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, firstValueFrom } from 'rxjs';
import { BaseComponent, SpinnerType } from 'src/app/base/base-component';
import { List_Book } from 'src/app/contracts/list_book';
import { HttpClientService } from 'src/app/services/http-client.service';
import { BookService } from 'src/app/services/models/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent extends BaseComponent implements OnInit {
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute,
    private ngxSpinner: NgxSpinnerService){
      super(ngxSpinner)
    }
  books:List_Book[];
  
  async ngOnInit(): Promise<any> {
    // this.books = await this.bookService.getBooks();
    this.ngxSpinner.show(SpinnerType.BallAtom);
    this.activatedRoute.data.subscribe(data =>{
      this.books = data["books"];
      this.ngxSpinner.hide(SpinnerType.BallAtom)
    })
  }

 


}

