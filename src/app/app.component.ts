import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Library.Client';
  constructor(public authService:AuthService,private router:Router){}
  windowScrolled: boolean;
  
  ngOnInit(): void {
    window.addEventListener("scroll",()=>this.goToUp());
    
  }
;

  signOut(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.authService.idendityCheck();
    this.router.navigate([""]);
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

