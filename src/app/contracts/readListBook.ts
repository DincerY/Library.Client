import { AuthorDto } from "./AuthorDto";
import { LibraryDto } from "./LibraryDto";


export class ReadListBook{
   id:string;
   pageNumber:string;
   title:string;
   description:string;
   authors: AuthorDto[];
   libraries:LibraryDto[];


}


