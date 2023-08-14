import { Component, OnInit } from '@angular/core';
import { ReadList } from 'src/app/contracts/readList';
import { ReadListService } from 'src/app/services/models/read-list.service';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit{

  readList:ReadList;
  
  constructor(private readListService: ReadListService){}


  async ngOnInit(): Promise<void> {
   this.readList = await this.readListService.getReadList("");
   const readListItem = this.readList.readListItem;
  }


}
