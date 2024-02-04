import { Component, OnInit } from '@angular/core';
import { LimitsService } from './service/limits.service';
import { UploadData } from './service/data.model';
import { Constants } from './service/constants';
import { Router } from '@angular/router';
import { DatabaseService } from './service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Demo';
  user: any;
  // ct: any;

  constructor(
    private service: LimitsService,
    private router: Router,
    private dbService: DatabaseService
  ) {}

  // ngDoCheck() {
  //   this.ct = this.service.getcardlen();
  // }

  ngOnInit(): void {
    localStorage.setItem(Constants.TOKEN, '');
    localStorage.getItem(Constants.TOKEN);
    console.log(this.service.uploadedData);

    if (localStorage.getItem('loginUser') == null) {
      this.router.navigateByUrl('/login');
    }
    // if (this.dbService.register(this.user) == null) {
    //   this.router.navigateByUrl('/login');
    // }
  }

  logout() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('/login');
  }
}
