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
  homePieChart = {
    ...homePieChart,
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          { name: 'Groceries', y: 35.02 },
          { name: 'Utilities', sliced: true, selected: true, y: 26.71 },
          { name: 'Entertainment', y: 5.09 },
          { name: 'My Bills', y: 15.5 },
          { name: 'Transportation', y: 6.68 },
          { name: 'Shopping', y: 10 },
        ],
      },
    ],
  };

  barCharts = {
    ...barCharts,
    series: [
      {
        name: 'Income',
        data: [406292, 260000, 107000, 68300, 27500, 14500],
      },
      {
        name: 'Expenses',
        data: [51086, 136000, 5500, 141000, 107180, 77000],
      },
    ],
  };

  ngOnInit(): void {
    setTimeout(() => {
      const monthyData: MonthlyData = this.service.getMonthlyData(1, 2022);
      console.log(monthyData);
      const data = monthyData.expenses?.map((e: Expenses) => {
        return { name: e.category, y: +e.amount / +monthyData.income };
      });
      console.log(data);
    }, 2000);
  }
}
