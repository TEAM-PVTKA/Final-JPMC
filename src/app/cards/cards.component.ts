import { Component } from '@angular/core';
import { CardDetailsService } from '../service/carddetails.service';
import { Router } from '@angular/router';
import { CardDetails } from './cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  constructor(private service: CardDetailsService) {}
  cardNumber1: number;
  cardNumber2: number;
  cardNumber3: number;
  cardExpiry: number;
  cardHolder: string;
  card: CardDetails;
  addCard() {
    // console.log(this.cardNumber1)
    if (
      this.cardNumber1?.toString().length !== 4 ||
      this.cardNumber2?.toString().length !== 4 ||
      this.cardNumber3?.toString().length !== 4
    ) {
      alert(`Card is Invalid`);
      return;
    }
    this.card = {
      cardNumber1: this.cardNumber1,
      cardNumber2: this.cardNumber2,
      cardNumber3: this.cardNumber3,
      cardExpiry: this.cardExpiry,
      cardHolder: this.cardHolder,
    };
    this.service.cardList.push(this.card);
    this.service.cardList$.next(this.service.cardList);
  }

  onValueChange(name:string, value: string) {
    // this[name]=value.replace(/[a-zA-Z]/g, '');
  }
}
