import { Component, OnInit } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { All_Libraries } from 'src/app/contracts/all_libraries';
import { HttpClientService } from 'src/app/services/http-client.service';
import { LibraryService } from 'src/app/services/models/library.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}
  listLibrary: All_Libraries[];
  async ngOnInit(): Promise<void> {
    this.listLibrary = await this.libraryService.getAllLibraries();
  }
}
