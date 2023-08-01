import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Create_User } from 'src/app/contracts/create_user';
import { User } from 'src/app/entities/user';
import { CustomToastrService, MessageTypeFunc, Position, ToastrOptions } from 'src/app/services/common/custom-toastr.service';
import { UserService } from 'src/app/services/models/user.service';
import { PasswordConfirm } from 'src/app/validators/password-confirm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private userService:UserService,private toastrService:CustomToastrService){}
  frm:FormGroup
  async ngOnInit(): Promise<void> {
    this.frm = this.formBuilder.group({
      email:["",[Validators.email,Validators.required]],
      userName:["",Validators.required],
      password:["", [Validators.required]],
      passwordConfirm:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      age:["",Validators.required],
    },{validators:[PasswordConfirm()]});
    
  }

  get formControls(){
    return this.frm.controls;
  }

  submitted:boolean = false;

  async deneme(user:User){
    this.submitted = true;

    if(this.frm.invalid)
      return;

    const response:Create_User =await this.userService.createUser(user);
    if(response.succeeded){
      this.toastrService.message(response.message,"Başarılı",{
        messageTypeFunc: MessageTypeFunc.success,
        position: Position.TopFullWidth
      })
    }
    else{
      this.toastrService.message(response.message,"Hata",{
        messageTypeFunc: MessageTypeFunc.error,
        position: Position.TopFullWidth
      })
    }
    
  }

  
}  
