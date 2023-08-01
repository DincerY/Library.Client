import { Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base-component';
import { AuthService } from 'src/app/services/common/auth.service';
declare var $:any


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent{
  constructor(spinner:NgxSpinnerService,private authService:AuthService){
    super(spinner);
  }
 

  

   
}

