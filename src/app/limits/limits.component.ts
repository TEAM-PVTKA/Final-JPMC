import { Component } from '@angular/core';
import { LimitsService } from '../service/limits.service';
import { Expenses, MonthlyData } from '../service/data.model';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.css',
})
export class LimitsComponent {
  categOptions: string[] = [
    'Groceries',
    'Utilities',
    'Entertainment',
    'My Bills',
    'Transportation',
    'Shopping',
  ]; // Simulated card options
  selectedCateg: string = '';
  newLimit: number = 5000; // Initial value within the range
  spendingLimits: any | number[] = [];
  categoryNames: string[] = [];
  totalValue: any | number = 0;
  totalSpendingLimit: number = 20000; // Initial total spending limit

  categories: { name: string; limit: number; totalValue: number }[] = [];

  mylimit: any | number;
  mylimits: any | number;

  flag: boolean = false;

  constructor(private limitser: LimitsService) {}

  //for submit button

  submit() {
    this.mylimit = this.mylimits;
  }

  ngOnInit() {}

  handleSetLimit() {
    if (this.selectedCateg.trim() === '') {
      // Do not proceed if the entered category name is null or empty
      this.flag = true;
      return;
    }

    // console.log(`Setting limit for card ${this.selectedCard} to ${this.newLimit}`);

    //subtract from total amount
    else {
      if (this.mylimit <= 0) {
        alert('Amount Exceeded');
      } else {
        this.mylimit = this.mylimit - this.newLimit;
        // Add logic to update the spending limit based on the selected card
        // For this example, simply push the new limit into the spendingLimits array
        this.categoryNames.push(this.selectedCateg);
        this.spendingLimits.push(this.newLimit);

        // Clear the selected category
        this.selectedCateg = '';
        // console.log(this.a.totalAmount())
      }
    }
  }

  // Removing Element

  remove(limit: Expenses) {
    this.limitser.delcateg(limit);
  }

  // update(p:[]){
  //   this.flag = true
  // }

  // savep(){
  //   this.flag = false
  //   // this.fservice.updatepro(p)
  // }

  handleInput(event: any) {
    const enteredValue = event.target.value;

    // Check if the entered value is in the list of category options
    if (this.categOptions.includes(enteredValue)) {
      this.selectedCateg = enteredValue;
    } else {
      // Handle the case when the entered value is not in the list
      this.selectedCateg = '';
    }
  }
}

// if (ele.categories == i.categOptions) {
//   return ele.categories;
// }
// this.limArray.splice(index, 1);
// });
