import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LimitsService {
  constructor() {}

  expenseData: any[] = [
    {
      year: 2022,
      months: [
        {
          month: 'January',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'February',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'March',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'April',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'May',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'June',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'July',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'August',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'September',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'October',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'November',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'December',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
      ],
    },
    {
      year: 2023,
      months: [
        {
          month: 'January',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 17000 },
            { category: 'Dining Out', amount: 28000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 125000,
        },
        {
          month: 'February',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'March',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'April',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'May',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'June',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'July',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'August',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'September',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'October',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'November',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'December',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
      ],
    },
    {
      year: 2024,
      months: [
        {
          month: 'January',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'February',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'March',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'April',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'May',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'June',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'July',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'August',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
        {
          month: 'September',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'October',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 30000 },
            { category: 'Utilities', amount: 20000 },
            { category: 'Entertainment', amount: 15000 },
            { category: 'Dining Out', amount: 25000 },
            { category: 'Transportation', amount: 10000 },
            { category: 'Shopping', amount: 20000 },
          ],
          totalAmount: 120000,
        },
        {
          month: 'November',
          categories: [
            { category: 'Salary', amount: 80000 },
            { category: 'Groceries', amount: 32000 },
            { category: 'Utilities', amount: 16000 },
            { category: 'Entertainment', amount: 10000 },
            { category: 'Dining Out', amount: 23000 },
            { category: 'Transportation', amount: 12000 },
            { category: 'Shopping', amount: 22000 },
          ],
          totalAmount: 115000,
        },
        {
          month: 'December',
          categories: [
            { category: 'Salary', amount: '80000' },
            { category: 'Groceries', amount: 28000 },
            { category: 'Utilities', amount: 18000 },
            { category: 'Entertainment', amount: 12000 },
            { category: 'Dining Out', amount: 22000 },
            { category: 'Transportation', amount: 8000 },
            { category: 'Shopping', amount: 27000 },
          ],
          totalAmount: 117000,
        },
      ],
    }
  ];

  
  // Assume you have an API endpoint that returns the expense data

  // returning particular totalAmount

  // IM  IY EM EY

  totalAmount(){
    const targetMonth = "December";

          const salarydata = this.expenseData
            .find(monthData => monthData.month === targetMonth)
            ?.categories
            .find((a:any) => a.category === "Salary")?.amount;

console.log(`Salary for ${targetMonth}: ${salarydata}`);
  }
 
}
