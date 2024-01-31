import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { homePieChart, barCharts } from '../chartoptions';
import { LimitsService } from '../service/limits.service';
import { Expenses, MonthlyData, UploadData } from '../service/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private service: LimitsService) {}
  highcharts = Highcharts;
  homePieChart = null;

  barCharts = null;

  ngOnInit(): void {
    this.getMonthlySummary();
    this.getHalfYearlySummary();
  }


  getMonthlySummary() {
    const date = new Date();
    const monthyData: MonthlyData = this.service.getMonthlyData(
      date.getMonth() + 1,
      date.getFullYear()
    );
    const data = monthyData.expenses?.map((e: Expenses) => {
      return { name: e.category, y: (+e.amount / +monthyData.income) * 100 };
    });
    this.homePieChart = {
      ...homePieChart,
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: data,
        },
      ],
    };
  }

  getMonthlyIncome() {
    const date = new Date();
    const monthNumber: MonthlyData = this.service.getMonthlyData(
      date.getMonth() + 1,
      date.getFullYear()
    );
    let monthlyInc = monthNumber.income;
    return monthlyInc;
  }

  getMonthlyExpenditure() {
    let expensesPerMonth = 0;
    const date = new Date();
    const monthNumber: MonthlyData = this.service.getMonthlyData(
      date.getMonth() + 1,
      date.getFullYear()
    );

    monthNumber.expenses.forEach((f: Expenses) => {
      expensesPerMonth = expensesPerMonth + f.amount;
    });

    return expensesPerMonth;
  }

  getSavings() {
    let expensesPerMonth = 0;
    const date = new Date();
    const monthNumber: MonthlyData = this.service.getMonthlyData(
      date.getMonth() + 1,
      date.getFullYear()
    );

    const monthlyInc = monthNumber.income;

    monthNumber.expenses.forEach((f: Expenses) => {
      expensesPerMonth = expensesPerMonth + f.amount;
    });

    const savingsPerMonth = monthlyInc - expensesPerMonth;
    return savingsPerMonth;
  }

  getHalfYearlySummary() {
    const incomeArray: number[] = [];
    const expensesArray: number[] = [];
    const monthsArray: string[] = [];

    const data: MonthlyData[] = this.service.getOldMonthlyData(3);
    data.forEach((e: MonthlyData) => {
      let expensesPerMonth = 0;
      incomeArray.unshift(e.income);
      monthsArray.unshift(e.month);
      e.expenses.forEach((f: Expenses) => {
        expensesPerMonth = expensesPerMonth + f.amount;
      });
      expensesArray.unshift(expensesPerMonth);
    });
    this.barCharts = {
      ...barCharts,
      xAxis: {
        categories: monthsArray,
        crosshair: true,
        accessibility: {
          description: 'Months',
        },
      },
      series: [
        {
          name: 'Income',
          color: 'green',
          data: incomeArray,
        },
        {
          name: 'Expenses',
          color: 'red',
          data: expensesArray,
        },
      ],
    };
  }
}
