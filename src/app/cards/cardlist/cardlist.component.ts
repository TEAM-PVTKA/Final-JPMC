import { Component } from '@angular/core';
import { CardDetailsService } from '../../service/carddetails.service';
import { Router } from '@angular/router';
import { CardDetails } from '../cards.model';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css',
})
export class CardListComponent {
  cardsArray: CardDetails[];

  cardNumber1: number;
  cardNumber2: number;
  cardNumber3: number;
  cardExpiry: string;
  cardHolder: string;
  card: CardDetails;
  constructor(private service: CardDetailsService, private path: Router) {}
  ngOnInit() {
    this.service.cardList$.subscribe((cards: CardDetails[]) => {
      if (cards.length) {
        this.cardsArray = this.service.cardList;
      }
    });
  }

  onDelete(index: number) {
    this.cardsArray.splice(index, 1);
  }
}
