import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { UsersComponent } from "./components/users/users.component";
import { LoansComponent } from "./components/loans/loans.component";

const APP_ROUTES: Routes = [
  { path:'home', component: HomeComponent},
  { path:'library', component: LibraryComponent},
  {path:'clients', component: UsersComponent},
  {path:'prestamos', component: LoansComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

