import { Component, OnInit } from '@angular/core';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base-component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent extends BaseComponent implements OnInit{
  constructor(ngxSpinner: NgxSpinnerService){
    super(ngxSpinner);
  }
  ngOnInit(): void {
    window.addEventListener("scroll",()=> this.goToUp())
  }
  
  faArrowUp = faArrowUp

  goToUp(){
    let myButton =document.getElementById("btn-back-to-top");

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      myButton.style.display = "block";
    }else{
      myButton.style.display = "none";
    }
    myButton.addEventListener("click",backToTop);

    function backToTop(){
      document.body.scrollTop = 0 ;
      document.documentElement.scrollTop = 0;
    }

  }

}
