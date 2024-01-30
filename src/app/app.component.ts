import { Component, OnInit } from '@angular/core';
import { LimitsService } from './service/limits.service';
import { UploadData } from './service/data.model';
import { Constants } from './service/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Demo';

  constructor(private service: LimitsService) {}

  ngOnInit(): void {
    localStorage.setItem(Constants.TOKEN,'')
    localStorage.getItem(Constants.TOKEN)
    console.log('CALLED');
    this.service.getData().subscribe((data: UploadData) => {
      console.log(data);
      this.service.uploadedData = data;
    });
    setTimeout(() => {
      console.log(this.service.getYearlyIncome(2022));
    }, 2000);
  }
}
