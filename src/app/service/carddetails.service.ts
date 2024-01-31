import { Injectable } from '@angular/core';
import { carddetails } from './carddetails';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarddetailsService {

  details:carddetails[]=[
   
  ]
    constructor() { }
    getcarddetails(){
      return of(this.details)
    }
    addcarddetails(newpro:carddetails){
      this.details.push(newpro);
    }

}
