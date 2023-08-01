import { All_Authors } from "./all_authors";
import { All_Libraries } from "./all_libraries";

export class List_Book{
    id:string;
    pageNumber:string;
    title:string;
    description:string; 
    authors:All_Authors[];
    librarys:All_Libraries[];

}