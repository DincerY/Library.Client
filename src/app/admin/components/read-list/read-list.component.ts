import { Component, OnInit } from '@angular/core';
import { ReadList } from 'src/app/contracts/readList';
import { ReadListBook } from 'src/app/contracts/readListBook';
import { ReadListItem } from 'src/app/contracts/readListItem';
import { ReadListService } from 'src/app/services/models/read-list.service';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit{

  readList:ReadList;
  readListItems:ReadListItem[];


  
  constructor(private readListService: ReadListService){}


  async ngOnInit(): Promise<void> {
   this.readList = await this.readListService.getReadList("80e8b12a-5f10-4419-8431-ab6da497a4c5");
   this.readListItems = this.readList.readListItem;
    console.log(this.readListItems.forEach((item)=>{console.log(item.Book);
    }));
    
  }


}
