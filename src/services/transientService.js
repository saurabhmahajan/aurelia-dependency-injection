import {transient} from 'aurelia-framework';

@transient()
export class TransientService{
    constructor(){
        console.log('%c TransientService is created.', "color:green")
    }
}