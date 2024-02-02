import { Component } from '@angular/core';
import { LimitsService } from '../service/limits.service';
import { Expenses, MonthlyData } from '../service/data.model';
import { CategoryList } from './limits.model';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.css',
})
export class LimitsComponent {
  //   categoryOptions: string[] = [
  //     'Groceries',
  //     'Utilities',
  //     'Entertainment',
  //     'My Bills',
  //     'Transportation',
  //     'Shopping',
  //   ]; // Simulated card options
  //   selectedCategory: string = '';
  //   minimumLimit: number = 5000; // Initial value within the range
  //   maximumLimit: number = 20000; // Monthly Salary..
  //   spendingLimits: any | number[] = [];
  //   categoryNames: string[] = [];
  //   totalValue: any | number = 0;

  //   categories: { name: string; limit: number; totalValue: number }[] = [];

  //   mylimit: any | number;
  //   mylimits: any | number;

  //   flag: boolean = false;

  //   constructor(private limitser: LimitsService) {}

  //   //for submit button

  //   submit() {
  //     this.mylimit = this.mylimits;
  //   }

  //   ngOnInit() {}

  //   handleSetLimit() {
  //     if (this.selectedCategory.trim() === '') {
  //       // Do not proceed if the entered category name is null or empty
  //       this.flag = true;
  //       return;
  //     }

  //     else {
  //       if (this.mylimit <= 0) {
  //         alert('Amount Exceeded');
  //       } else {
  //         this.mylimit = this.mylimit - this.minimumLimit;
  //         this.categoryNames.push(this.selectedCategory);
  //         this.spendingLimits.push(this.minimumLimit);

  //         // Clear the selected category
  //         this.selectedCategory = '';
  //       }
  //     }
  //   }

  //   handleInput(event: any) {
  //     const enteredValue = event.target.value;

  //     // Check if the entered value is in the list of category options
  //     if (this.categoryOptions.includes(enteredValue)) {
  //       this.selectedCategory = enteredValue;
  //     } else {
  //       // Handle the case when the entered value is not in the list
  //       this.selectedCategory = '';
  //     }
  //   }
  // }

  categOptions: string[] = [
    'Groceries',
    'Utilities',
    'Entertainment',
    'My Bills',
    'Transportation',
    'Shopping',
  ]; // Simulated card options
  selectedCateg: string = '';
  newLimit: number = 0;
  spendingLimits: any | number[] = [];
  categoryNames: string[] = [];
  totalValue: any | number = 0;
  totalSpendingLimit: number = 20000;

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
      this.flag = true;
      return;
    } else {
      if (this.mylimit <= 0) {
        alert('Amount Exceeded');
      } else {
        this.mylimit = this.mylimit - this.newLimit;

        const categoryIndex = this.categoryNames.indexOf(this.selectedCateg);

        if (categoryIndex === -1) {
          this.categoryNames.push(this.selectedCateg);
          this.spendingLimits.push(this.newLimit);
        } else {
          alert('Category already exists. Update the limit if needed.');
        }

        this.selectedCateg = '';
      }
    }
  }

  handleInput(event: any) {
    const enteredValue = event.target.value;

    if (this.categOptions.includes(enteredValue)) {
      this.selectedCateg = enteredValue;
    } else {
      this.selectedCateg = '';
    }
  }
  handleReset() {
    this.newLimit = 5000;
    this.selectedCateg = '';
    this.flag = false;
  }
  handleRemoveRow(index: number) {
    this.categoryNames.splice(index, 1);
    this.spendingLimits.splice(index, 1);
  }
}
