import { Routes } from '@angular/router';
import { DashboardProprietaire } from './pages/dashboard-proprietaire/dashboard-proprietaire';


export const PROPRIETAIRE_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },


  {
    path: 'dashboard',
    component: DashboardProprietaire
  },

];
