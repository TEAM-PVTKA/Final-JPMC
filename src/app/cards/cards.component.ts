import { Component } from '@angular/core';
import { CarddetailsService } from '../service/carddetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor(private service:CarddetailsService,private sr:Router){}
cNumber1:any;
cNumber2:any;
cNumber3:any;
cExpiry:any;
cHolder:any;
newpro:any;
addcard(){
  this.newpro={
    cardNumber1:this.cNumber1,
    cardNumber2:this.cNumber2,
    cardNumber3:this.cNumber3,
    cardExpiry:this.cExpiry,
    cardHolder:this.cHolder
  }
  this.service.addcarddetails(this.newpro);
  this.sr.navigateByUrl("/mycards")
}



}
