import { NgxSpinnerService } from 'ngx-spinner';



export class BaseComponent{
    constructor(public spinner:NgxSpinnerService){}
    showSpinner(spinnerType:SpinnerType){
        this.spinner.show(spinnerType);
    }
    hideSpinner(spinnerType:SpinnerType){
        this.spinner.hide(spinnerType);
    }
}

export enum SpinnerType{
    BallAtom = "a1",
    LineScalePulseOutRapid = "a2"
}