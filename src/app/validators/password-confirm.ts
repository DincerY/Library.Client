import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordConfirm(): ValidatorFn {

    return (control: AbstractControl):ValidationErrors | null => {
        const password = control.get("password").value;
        const passwordConfirm:string = control.get("passwordConfirm").value;

        if(password != passwordConfirm){
     
            return {"noMatch" : true};
        }
        return null;


    }

}
