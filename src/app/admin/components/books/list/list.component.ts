import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base-component';
import { List_Book } from 'src/app/contracts/list_book';
import { HttpClientService } from 'src/app/services/http-client.service';
import { BookService } from 'src/app/services/models/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit{
  constructor(spinner: NgxSpinnerService,private bookService:BookService){
    super(spinner)
  }
  listBook:List_Book[];
  async ngOnInit(): Promise<void> {
      this.listBook =await this.bookService.getBooks();
  }
 


}
