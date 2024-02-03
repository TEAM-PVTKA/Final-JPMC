import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CardsComponent } from './cards/cards.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DataComponent } from './data/data.component';
import { LimitsComponent } from './limits/limits.component';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CardListComponent } from './cards/cardlist/cardlist.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mycards', component: CardListComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'alerts', component: AlertsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'data', component: DataComponent },
  { path: 'limits', component: LimitsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'expenses', component: ExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
