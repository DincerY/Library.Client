import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { All_Libraries } from 'src/app/contracts/all_libraries';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_Library } from 'src/app/contracts/create_library';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private httpClientService: HttpClientService) {}

  getAllLibraries(
    successCallBack?: () => void,
    errorCallBack?: (error) => void
  ): Promise<All_Libraries[]> {
    const observable: Observable<All_Libraries[]> = this.httpClientService.get<
      All_Libraries[]
    >({
      controller: 'libraries',
    });
    const promiseData = firstValueFrom(observable);
    promiseData
      .then((value) => successCallBack())
      .catch((error) => errorCallBack(error));
    return promiseData;
  }

  async createLibrary(
    address: string,
    libraryName: string,
    formSelectBooks: string[],
    successCallBack?: () => void,
    errorCallBack?: (error) => void
  ): Promise<Create_Library> {
    const observable: Observable<Create_Library | any> =
      this.httpClientService.post<Create_Library | any>(
        {
          controller: 'libraries',
        },
        { libraryName: libraryName, address: address, formSelectBooks : formSelectBooks }
      );
    const promiseData = await firstValueFrom(observable);

    return promiseData as Create_Library;
  }
}
