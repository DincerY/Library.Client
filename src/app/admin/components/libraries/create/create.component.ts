import { Component, OnInit } from '@angular/core';
import { Create_Library } from 'src/app/contracts/create_library';
import { List_Book } from 'src/app/contracts/list_book';
import { CustomToastrService, MessageTypeFunc, Position } from 'src/app/services/common/custom-toastr.service';
import { BookService } from 'src/app/services/models/book.service';
import { LibraryService } from 'src/app/services/models/library.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  constructor(private libraryService:LibraryService,private bookService: BookService,
    private toastr:CustomToastrService){}
  allBooks : List_Book[];
  async ngOnInit(): Promise<void> {
    this.allBooks = await this.bookService.getBooks();
  }

  async createLibrary(data:any){
    let response: Create_Library =await this.libraryService.createLibrary(data.address,data.libraryName,data.formSelectBooks)
    if(response.succeeded){
      this.toastr.message(response.message,"Başarılı",{
        position: Position.TopRight,
        messageTypeFunc: MessageTypeFunc.success
      })
    }else{
      this.toastr.message(response.message,"Hata",{
        position: Position.TopRight,
        messageTypeFunc: MessageTypeFunc.error
      })
    }
    console.log(data);
  }
  deneme(data:any){
    console.log(data);
    
  }

  
}
