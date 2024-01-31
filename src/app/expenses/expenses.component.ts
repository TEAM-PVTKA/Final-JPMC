import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LimitsService } from '../service/limits.service';
import { splineCharts } from '../chartoptions';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  constructor(private service: LimitsService) {}

  highcharts = Highcharts;

  splineCharts = {
    ...splineCharts,
    series: [
      {
        name: 'Income',
        marker: {
          symbol: 'square',
        },
        data: [51086, 86000, 90500, 110000, 117180, 150000],
      },
      {
        name: 'Expenses',
        marker: {
          symbol: 'diamond',
        },
        data: [
          48292, 79000, 87000, 88300, 90500, 105500,
        ],
      },
      {
        name: 'Savings',
        marker: {
          symbol: 'square',
        },
        data: [5086, 8000, 9500, 10000, 117180, 150000],
      },
    ],
  };
}
