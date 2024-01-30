import { Component } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Highcharts = Highcharts;

  areachart: any = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Historic World Population by Region',
      align: 'left',
    },
    subtitle: {
      text:
        'Source: <a ' +
        'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
        'target="_blank">Wikipedia.org</a>',
      align: 'left',
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe'],
      title: {
        text: null,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
      gridLineWidth: 0,
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Year 1990',
        data: [631, 727, 3202, 721],
      },
      {
        name: 'Year 2000',
        data: [814, 841, 3714, 726],
      },
      {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746],
      },
    ],
  };

  // colorTheme = 'theme-blue';
  datePickerConfig: Partial<BsDatepickerConfig>;

  // In the constructor set containerClass property to the preferred theme
  constructor() {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }
}
