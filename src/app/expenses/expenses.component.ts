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
        // {
        // y: 26.4,
        // marker: {
        //   symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
        // },
        // accessibility: {
        //   description: 'Sunny symbol, this is the warmest point in the chart.',
        // },
        // },
        // 22.8, 17.5, 12.1, 7.6],
      },
      {
        name: 'Expenses',
        marker: {
          symbol: 'diamond',
        },
        data: [
          //   {
          //   y: 1.5,
          //   marker: {
          //     symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)',
          //   },
          //   accessibility: {
          //     description: 'Snowy symbol, this is the coldest point in the chart.',
          //   },
          // },
          48292, 79000, 87000, 88300, 90500, 105500,
        ],
      },
    ],
  };
}
