import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expenses, MonthlyData, UploadData, YearData } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class LimitsService {
  //written by team
  uploadedData: UploadData | null = null;
  yearData: YearData | null = null;
  monthData: MonthlyData | null = null;
  expensesData: Expenses | null = null;

  categArray: Expenses[] = [];

  constructor(private http: HttpClient) {}

  // By T
  getcateglen(){
    return this.categArray.length
  }

  delcateg(p:Expenses){
    let ind = this.categArray.findIndex((ele)=>{
      if(ele.amount == p.amount){
        return ele.amount
      }
    })
      this.categArray.splice(ind,1)
  }



  //written by team
  getData() {
    return this.http.get<UploadData>('./assets/data.json', {
      responseType: 'json',
    });
  }

  //written by team
  setData() {
    this.getData().subscribe((data: UploadData) => {
      console.log(data);
      this.uploadedData = data;
    });
  }

  //written by T
  getCategoryData() {
    return this.http.get<Expenses>('./assets/data.json', {
      responseType: 'json',
    });
  }

 


  //written by team
  getMonthlyData(mm: number, yyyy: number): MonthlyData {
    const yearData: YearData = this.uploadedData?.years.filter(
      (e: YearData) => e.year === yyyy
    )[0]!;
    return yearData?.months[mm - 1];
  }
  //written by team
  getYearlyIncome(year: number): number {
    let income = 0;
    const yearData: YearData = this.uploadedData?.years.filter(
      (e: YearData) => e.year === year
    )[0]!;

    yearData?.months.forEach((e: MonthlyData) => {
      income = income + (e?.income ? +e.income : 0);
    });
    return income;
  }

}
