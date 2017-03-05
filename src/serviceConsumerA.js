import {inject} from 'aurelia-framework';
import {SingletonService} from './services/singletonService';
import {TransientService} from './services/TransientService';

@inject(SingletonService, TransientService)
export class ServiceConsumerA{
     constructor(cacheService, transientService){
        this.cacheService = cacheService;
        this.transientService = transientService;

        console.log('Service Consumer A is constructed.');
    }
}