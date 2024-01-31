import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { homePieChart, barCharts } from '../chartoptions';
import { LimitsService } from '../service/limits.service';
import { Expenses, MonthlyData } from '../service/data.model';

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

  getMonthlyIncome(){
    // const monthlyIncome: MonthlyData = this.service.monthData?.income
    return this.service.monthData?.income
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
          data: incomeArray,
        },
        {
          name: 'Expenses',
          data: expensesArray,
        },
      ],
    };
  }
}
