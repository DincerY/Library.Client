import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { All_Authors } from 'src/app/contracts/all_authors';
import { All_Libraries } from 'src/app/contracts/all_libraries';
import { Create_Book } from 'src/app/contracts/create_book';
import {
  CustomToastrService,
  MessageTypeFunc,
  Position,
} from 'src/app/services/common/custom-toastr.service';
import { AuthorService } from 'src/app/services/models/author.service';
import { BookService } from 'src/app/services/models/book.service';
import { LibraryService } from 'src/app/services/models/library.service';

declare var $: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private libraryService: LibraryService,
    private toastr: CustomToastrService
  ) {}
  allAuthors: All_Authors[];
  allLibraries: All_Libraries[];

  async ngOnInit(): Promise<void> {
    this.allAuthors = await this.authorService.getAllAuthors();
    this.allLibraries = await this.libraryService.getAllLibraries(

    );
  }

  async createBook(data: any) {
    const createBooks = new Create_Book();
    createBooks.description = data.description;
    createBooks.pageNumber = data.pageNumber;
    createBooks.title = data.title;
    createBooks.authorId = data.formSelectAuthors;
    createBooks.libraryId = data.formSelectLibraries;
    await this.bookService.createBook(createBooks,()=>{
      this.toastr.message("Kitap Eklendi","Başarılı",{
        position: Position.TopRight,
        messageTypeFunc: MessageTypeFunc.success
      });
    },(e)=>{
      this.toastr.message(e,"Hata",{
        position: Position.TopRight,
        messageTypeFunc: MessageTypeFunc.error
      })
    });
    // console.log(response);
    
  }
  deneme(form:any){
    console.log(form);
  
    
  }
}
