import { Component } from '@angular/core';
import { CarddetailsService } from '../service/carddetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrl: './addcard.component.css',
})
export class AddcardComponent {
  flag: boolean = true;
  cardArray: any;

  cNumber1: any;
  cNumber2: any;
  cNumber3: any;
  cExpiry: any;
  cHolder: any;
  newpro: any;
  constructor(private service: CarddetailsService, private path: Router) {}
  ngOnInit() {
    // this.service.getcarddetails().subscribe((res) => {
    //   this.cardArray = res;
    // });

    if (this.service.getcarddetails != null) {
      this.service.getcarddetails().subscribe((res) => {
        this.cardArray = res;
        this.flag = false;
      });
    }
  }

  gotocards() {
    this.path.navigateByUrl('/cards');
  }

}
