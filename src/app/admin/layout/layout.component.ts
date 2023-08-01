import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  faArrowUp = faArrowUp


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
